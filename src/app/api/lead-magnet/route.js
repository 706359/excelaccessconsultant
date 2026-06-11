import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

const RATE_LIMIT_WINDOW_MS = 15 * 60 * 1000;
const RATE_LIMIT_MAX = 10;
const store = new Map();

function getClientIp(request) {
  const forwarded = request.headers.get('x-forwarded-for');
  const realIp = request.headers.get('x-real-ip');
  const cf = request.headers.get('cf-connecting-ip');
  return cf || (forwarded ? forwarded.split(',')[0].trim() : null) || realIp || 'unknown';
}

function checkRateLimit(ip) {
  const now = Date.now();
  const entry = store.get(ip);
  if (!entry) {
    store.set(ip, { count: 1, resetAt: now + RATE_LIMIT_WINDOW_MS });
    return { allowed: true };
  }
  if (now >= entry.resetAt) {
    store.set(ip, { count: 1, resetAt: now + RATE_LIMIT_WINDOW_MS });
    return { allowed: true };
  }
  entry.count += 1;
  if (entry.count > RATE_LIMIT_MAX) {
    return { allowed: false, retryAfter: Math.ceil((entry.resetAt - now) / 1000) };
  }
  return { allowed: true };
}

const createTransporter = () => {
  if (!process.env.SMTP_HOST || !process.env.SMTP_USER || !process.env.SMTP_PASS) {
    return null;
  }
  return nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port: parseInt(process.env.SMTP_PORT || '587', 10),
    secure: process.env.SMTP_SECURE === 'true',
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS,
    },
  });
};

export async function POST(request) {
  try {
    const ip = getClientIp(request);
    const rate = checkRateLimit(ip);
    if (!rate.allowed) {
      return NextResponse.json(
        { success: false, error: 'Too many requests. Please try again later.' },
        { status: 429, headers: { 'Retry-After': String(rate.retryAfter || 60) } },
      );
    }

    const body = await request.json();
    const { email, resource = 'access-database-health-check' } = body;

    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return NextResponse.json({ success: false, error: 'Valid email is required' }, { status: 400 });
    }

    const submission = {
      email,
      resource,
      timestamp: new Date().toISOString(),
      ip,
    };

    if (process.env.NODE_ENV !== 'production') {
      console.log('Lead magnet signup:', submission);
    }

    const transporter = createTransporter();
    if (transporter) {
      const toEmail = process.env.TO_EMAIL || 'rob.infodatix@gmail.com';
      const fromEmail = process.env.FROM_EMAIL || process.env.SMTP_USER;
      await transporter.sendMail({
        from: `"ExcelAccessConsultant" <${fromEmail}>`,
        to: toEmail,
        subject: `Lead magnet signup: ${resource}`,
        text: `New lead magnet download request\n\nEmail: ${email}\nResource: ${resource}\nTime: ${submission.timestamp}`,
        html: `<p><strong>Lead magnet signup</strong></p><p>Email: ${email}</p><p>Resource: ${resource}</p><p>Time: ${submission.timestamp}</p>`,
      });
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Lead magnet API error:', error);
    return NextResponse.json({ success: false, error: 'Failed to process request' }, { status: 500 });
  }
}
