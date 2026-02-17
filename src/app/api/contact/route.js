import nodemailer from 'nodemailer';
import { NextResponse } from 'next/server';

// Configure nodemailer transporter
const createTransporter = () => {
  if (!process.env.SMTP_HOST || !process.env.SMTP_USER || !process.env.SMTP_PASS) {
    console.warn('SMTP credentials not configured. Email sending will be disabled.');
    return null;
  }

  return nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port: parseInt(process.env.SMTP_PORT || '587'),
    secure: process.env.SMTP_SECURE === 'true',
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS,
    },
    connectionTimeout: 10000,
    greetingTimeout: 10000,
    socketTimeout: 30000,
  });
};

export async function POST(request) {
  try {
    const body = await request.json();
    const { name, email, phone, company, message } = body;

    // Validate required fields
    if (!name || !email || !message) {
      return NextResponse.json(
        {
          success: false,
          error: 'Missing required fields: name, email, and message are required',
        },
        { status: 400 }
      );
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        {
          success: false,
          error: 'Invalid email format',
        },
        { status: 400 }
      );
    }

    // Validate message length
    if (message.length > 5000) {
      return NextResponse.json(
        {
          success: false,
          error: 'Message is too long. Please keep it under 5000 characters.',
        },
        { status: 400 }
      );
    }

    const submissionData = {
      name,
      email,
      phone: phone || 'Not provided',
      company: company || 'Not provided',
      message,
      timestamp: new Date().toISOString(),
    };

    console.log('Contact form submission:', submissionData);

    const transporter = createTransporter();
    let emailSent = false;
    let emailError = null;
    let autoReplySent = false;

    if (transporter) {
      try {
        const fromEmail = process.env.FROM_EMAIL || process.env.SMTP_USER;
        const toEmail = process.env.TO_EMAIL || 'rob.infodatix@gmail.com';

        const emailBody = `New Contact Form Submission\n\nName: ${name}\nEmail: ${email}\nPhone: ${phone || 'Not provided'}\nCompany: ${company || 'Not provided'}\n\nMessage:\n${message}\n\nSubmitted at: ${new Date().toLocaleString()}`;

        const mailOptions = {
          from: `"${name}" <${fromEmail}>`,
          to: toEmail,
          replyTo: email,
          subject: `Contact Form Submission from ${name}`,
          text: emailBody,
          html: `
            <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
              <h2 style="color: #1e40af;">New Contact Form Submission</h2>
              <div style="background-color: #f3f4f6; padding: 20px; border-radius: 8px; margin: 20px 0;">
                <p><strong>Name:</strong> ${name}</p>
                <p><strong>Email:</strong> <a href="mailto:${email}">${email}</a></p>
                <p><strong>Phone:</strong> ${phone || 'Not provided'}</p>
                <p><strong>Company:</strong> ${company || 'Not provided'}</p>
              </div>
              <div style="margin: 20px 0;">
                <h3 style="color: #1e40af;">Message:</h3>
                <p style="white-space: pre-wrap; background-color: #ffffff; padding: 15px; border-left: 4px solid #1e40af;">${message}</p>
              </div>
              <div style="margin-top: 30px; padding-top: 20px; border-top: 1px solid #e5e7eb; color: #6b7280; font-size: 12px;">
                <p>Submitted at: ${new Date().toLocaleString()}</p>
                <p style="margin-top: 10px;">
                  <a href="mailto:${email}" style="color: #1e40af; text-decoration: none;">Reply to ${email}</a>
                </p>
              </div>
            </div>
          `,
        };

        const emailPromise = transporter.sendMail(mailOptions);
        const timeoutPromise = new Promise((_, reject) =>
          setTimeout(() => reject(new Error('Email sending timeout after 30 seconds')), 30000)
        );

        await Promise.race([emailPromise, timeoutPromise]);
        emailSent = true;
        console.log('Email sent successfully to:', toEmail);

        // Send auto-reply
        try {
          const clientEmailSubject = 'Thank You for Contacting ExcelAccessConsultant';
          const clientEmailText = `Dear ${name},

Thank you for reaching out to ExcelAccessConsultant. We appreciate you taking the time to contact us and share your project needs.

We have received your message and will review it carefully. Our team will get back to you within one business day to discuss how we can help with your Excel and Access consulting needs.

To help us schedule a convenient time for you, could you please provide us with 2-3 time slots that work best for you? We can arrange a Teams or Zoom call to discuss your requirements in detail.

You can reply directly to this email with your preferred time slots, or call us at (801) 704-5604.

To help me prepare for our consultation and make the most of our time together, please send any relevant files, spreadsheets, databases, or documentation that you would like me to review before our meeting. This will allow me to better understand your current setup and come prepared with specific recommendations.

We look forward to speaking with you soon.

Best regards,
Robert Terry
ExcelAccessConsultant
Phone: (801) 704-5604
Email: rob.infodatix@gmail.com`;

          const clientEmailHtml = `
            <!DOCTYPE html>
            <html>
            <head>
              <meta charset="utf-8">
              <meta name="viewport" content="width=device-width, initial-scale=1.0">
            </head>
            <body style="font-family: Arial, sans-serif; line-height: 1.6; color: #333; max-width: 600px; margin: 0 auto; padding: 20px;">
              <div style="background-color: #ffffff; border: 1px solid #e5e7eb; border-radius: 8px; padding: 30px;">
                <div style="text-align: center; margin-bottom: 30px; padding-bottom: 20px; border-bottom: 2px solid #1e40af;">
                  <h1 style="color: #1e40af; margin: 0; font-size: 24px;">Thank You for Contacting Us</h1>
                </div>
                <div style="margin-bottom: 25px;">
                  <p style="margin: 0 0 15px 0;">Dear ${name},</p>
                  <p style="margin: 0 0 15px 0;">
                    Thank you for reaching out to <strong>ExcelAccessConsultant</strong>. We appreciate you taking the time to contact us and share your project needs.
                  </p>
                  <p style="margin: 0 0 15px 0;">
                    We have received your message and will review it carefully. Our team will get back to you within <strong>one business day</strong> to discuss how we can help with your Excel and Access consulting needs.
                  </p>
                </div>
                <div style="background-color: #eff6ff; border-left: 4px solid #1e40af; padding: 20px; margin: 25px 0; border-radius: 4px;">
                  <h2 style="color: #1e40af; margin: 0 0 15px 0; font-size: 18px;">📅 Schedule a Consultation Call</h2>
                  <p style="margin: 0 0 10px 0;">
                    To help us schedule a convenient time for you, could you please provide us with <strong>2-3 time slots</strong> that work best for you? We can arrange a <strong>Teams or Zoom call</strong> to discuss your requirements in detail.
                  </p>
                  <p style="margin: 0;">
                    You can reply directly to this email with your preferred time slots, or call us at <a href="tel:8017045604" style="color: #1e40af; text-decoration: none; font-weight: bold;">(801) 704-5604</a>.
                  </p>
                </div>
                <div style="background-color: #fef3c7; border-left: 4px solid #f59e0b; padding: 20px; margin: 25px 0; border-radius: 4px;">
                  <h2 style="color: #92400e; margin: 0 0 15px 0; font-size: 18px;">📎 Prepare for Our Meeting</h2>
                  <p style="margin: 0 0 10px 0; color: #78350f;">
                    To help me prepare for our consultation and make the most of our time together, please send any relevant files, spreadsheets, databases, or documentation that you would like me to review before our meeting. This will allow me to better understand your current setup and come prepared with specific recommendations.
                  </p>
                  <p style="margin: 0; color: #78350f; font-size: 14px;">
                    You can attach files directly to your reply email or share them via a secure file transfer method of your choice.
                  </p>
                </div>
                <div style="margin-top: 30px;">
                  <p style="margin: 0 0 10px 0;">We look forward to speaking with you soon.</p>
                  <p style="margin: 0 0 5px 0;">
                    <strong>Best regards,</strong><br>
                    Robert Terry<br>
                    ExcelAccessConsultant
                  </p>
                </div>
                <div style="margin-top: 30px; padding-top: 20px; border-top: 1px solid #e5e7eb; font-size: 14px; color: #6b7280;">
                  <p style="margin: 5px 0;">
                    <strong>Phone:</strong> <a href="tel:8017045604" style="color: #1e40af; text-decoration: none;">(801) 704-5604</a>
                  </p>
                  <p style="margin: 5px 0;">
                    <strong>Email:</strong> <a href="mailto:rob.infodatix@gmail.com" style="color: #1e40af; text-decoration: none;">rob.infodatix@gmail.com</a>
                  </p>
                </div>
              </div>
              <div style="text-align: center; margin-top: 20px; font-size: 12px; color: #6b7280;">
                <p style="margin: 0;">
                  This is an automated response. Please do not reply directly to this email.<br>
                  If you have any questions, please contact us at <a href="mailto:rob.infodatix@gmail.com" style="color: #1e40af;">rob.infodatix@gmail.com</a>
                </p>
              </div>
            </body>
            </html>
          `;

          const clientMailOptions = {
            from: `"Rob Terry - ExcelAccessConsultant" <${fromEmail}>`,
            to: email,
            replyTo: fromEmail,
            subject: clientEmailSubject,
            text: clientEmailText,
            html: clientEmailHtml,
          };

          const autoReplyPromise = transporter.sendMail(clientMailOptions);
          const autoReplyTimeoutPromise = new Promise((_, reject) =>
            setTimeout(() => reject(new Error('Auto-reply email timeout after 30 seconds')), 30000)
          );

          await Promise.race([autoReplyPromise, autoReplyTimeoutPromise]);
          autoReplySent = true;
          console.log('Auto-reply email sent successfully to:', email);
        } catch (clientEmailError) {
          console.error('Error sending auto-reply email to client:', clientEmailError);
        }
      } catch (emailError) {
        console.error('Error sending notification email:', emailError);
        emailError = emailError.message || 'Failed to send email';
      }
    } else {
      console.warn('Email not sent - SMTP not configured');
      emailError = 'SMTP not configured';
    }

    if (emailSent || !transporter) {
      return NextResponse.json({
        success: true,
        emailSent: emailSent,
        autoReplySent: autoReplySent,
        message: emailSent
          ? 'Thank you for your message. We will get back to you within one business day.'
          : 'Your message has been received. Email notifications are currently disabled.',
      });
    } else {
      return NextResponse.json(
        {
          success: false,
          emailSent: false,
          error: emailError || 'Failed to send email notification. Please try again or contact us directly.',
          message: 'We received your message, but there was an issue sending the confirmation email. Please contact us directly at rob.infodatix@gmail.com or call (801) 704-5604.',
        },
        { status: 500 }
      );
    }
  } catch (error) {
    console.error('Error processing contact form:', error);
    return NextResponse.json(
      {
        success: false,
        error: 'Internal server error. Please try again later.',
      },
      { status: 500 }
    );
  }
}
