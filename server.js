import express from 'express';
import cors from 'cors';
import path from 'path';
import { fileURLToPath } from 'url';
import dotenv from 'dotenv';
import nodemailer from 'nodemailer';

dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = process.env.PORT || 5063;

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Configure nodemailer transporter
const createTransporter = () => {
    // Check if SMTP credentials are provided
    if (!process.env.SMTP_HOST || !process.env.SMTP_USER || !process.env.SMTP_PASS) {
        console.warn('SMTP credentials not configured. Email sending will be disabled.');
        return null;
    }

    return nodemailer.createTransport({
        host: process.env.SMTP_HOST,
        port: parseInt(process.env.SMTP_PORT || '587'),
        secure: process.env.SMTP_SECURE === 'true', // true for 465, false for other ports
        auth: {
            user: process.env.SMTP_USER,
            pass: process.env.SMTP_PASS,
        },
        connectionTimeout: 10000, // 10 seconds to establish connection
        greetingTimeout: 10000, // 10 seconds for greeting
        socketTimeout: 30000, // 30 seconds for socket operations
    });
};

const transporter = createTransporter();

// POST endpoint for email subscription (lead magnets)
app.post('/api/subscribe', async (req, res) => {
    try {
        const { email, name, source } = req.body;

        // Validate required fields
        if (!email) {
            return res.status(400).json({
                success: false,
                message: 'Email address is required'
            });
        }

        // Validate email format
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            return res.status(400).json({
                success: false,
                message: 'Invalid email format'
            });
        }

        const subscriptionData = {
            email: email.trim(),
            name: name?.trim() || 'Not provided',
            source: source || 'unknown',
            timestamp: new Date().toISOString()
        };

        console.log('Email subscription:', subscriptionData);

        // TODO: Integrate with email service (ConvertKit, Mailchimp, etc.)
        // For now, we'll log the subscription and send a confirmation email
        
        // Send confirmation email with download links if transporter is configured
        if (transporter) {
            try {
                const fromEmail = process.env.FROM_EMAIL || process.env.SMTP_USER;
                const downloadLinks = `
                    <div style="margin: 20px 0;">
                        <h3 style="color: #A32228;">Your Free Resources:</h3>
                        <ul style="list-style: none; padding: 0;">
                            <li style="margin: 10px 0;">
                                <a href="https://excelaccessconsultant.com/downloads/excel-automation-readiness-checklist.html" 
                                   style="color: #A32228; text-decoration: none; font-weight: bold;">
                                    📋 Excel Automation Readiness Checklist
                                </a>
                            </li>
                            <li style="margin: 10px 0;">
                                <a href="https://excelaccessconsultant.com/downloads/access-database-health-check.html" 
                                   style="color: #A32228; text-decoration: none; font-weight: bold;">
                                    🗄️ Access Database Health Check Guide
                                </a>
                            </li>
                            <li style="margin: 10px 0;">
                                <a href="https://excelaccessconsultant.com/downloads/vba-best-practices-guide.html" 
                                   style="color: #A32228; text-decoration: none; font-weight: bold;">
                                    ⚡ VBA Best Practices Guide
                                </a>
                            </li>
                        </ul>
                        <p style="margin-top: 15px; color: #6b7280; font-size: 12px;">
                            Tip: Right-click each link and select "Print" then "Save as PDF" to convert to PDF format.
                        </p>
                    </div>
                `;

                const mailOptions = {
                    from: `"ExcelAccessConsultant" <${fromEmail}>`,
                    to: email.trim(),
                    subject: 'Your Free Excel & Access Resources',
                    html: `
                        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; color: #1e293b;">
                            <div style="background-color: #A32228; color: white; padding: 20px; text-align: center;">
                                <h1 style="margin: 0; font-size: 24px;">ExcelAccessConsultant.com</h1>
                            </div>
                            <div style="padding: 30px 20px;">
                                <h2 style="color: #A32228; margin-top: 0;">Thank You, ${name || 'Friend'}!</h2>
                                <p>Thank you for subscribing! Here are your free resources:</p>
                                ${downloadLinks}
                                <div style="margin-top: 30px; padding: 20px; background-color: #f8f9fa; border-left: 4px solid #A32228;">
                                    <p style="margin: 0; font-weight: bold; color: #A32228;">Need Help Implementing These Practices?</p>
                                    <p style="margin: 10px 0 0 0;">I can help you automate your Excel processes, fix your Access database, or optimize your VBA code.</p>
                                    <p style="margin: 15px 0 0 0;">
                                        <a href="https://excelaccessconsultant.com/#contact" 
                                           style="color: #A32228; text-decoration: none; font-weight: bold;">
                                            Schedule a Free Consultation →
                                        </a>
                                    </p>
                                    <p style="margin: 10px 0 0 0; font-size: 14px;">
                                        Or call: <a href="tel:8016163702" style="color: #A32228;">801-616-3702</a>
                                    </p>
                                </div>
                            </div>
                            <div style="background-color: #f8f9fa; padding: 20px; text-align: center; font-size: 12px; color: #6b7280;">
                                <p style="margin: 0;">© 2026 ExcelAccessConsultant. All rights reserved.</p>
                                <p style="margin: 10px 0 0 0;">
                                    <a href="https://excelaccessconsultant.com/unsubscribe" style="color: #6b7280;">Unsubscribe</a>
                                </p>
                            </div>
                        </div>
                    `
                };

                await transporter.sendMail(mailOptions);
                console.log('Confirmation email sent to:', email);
            } catch (emailError) {
                console.error('Error sending confirmation email:', emailError);
                // Don't fail the subscription if email fails
            }
        }

        // Return success
        return res.status(200).json({
            success: true,
            message: 'Subscription successful'
        });

    } catch (error) {
        console.error('Subscription error:', error);
        return res.status(500).json({
            success: false,
            message: 'Unable to process subscription. Please try again later.'
        });
    }
});

// POST endpoint for contact form
app.post('/api/contact', async (req, res) => {
    try {
        const { name, email, phone, company, message } = req.body;

        // Validate required fields
        if (!name || !email || !message) {
            return res.status(400).json({
                success: false,
                error: 'Missing required fields: name, email, and message are required'
            });
        }

        // Validate email format
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            return res.status(400).json({
                success: false,
                error: 'Invalid email format'
            });
        }

        // Validate message length (if max length is specified, e.g., 180 chars for home page form)
        if (message.length > 5000) {
            return res.status(400).json({
                success: false,
                error: 'Message is too long. Please keep it under 5000 characters.'
            });
        }

        const submissionData = {
            name,
            email,
            phone: phone || 'Not provided',
            company: company || 'Not provided',
            message,
            timestamp: new Date().toISOString()
        };

        console.log('Contact form submission:', submissionData);

        // Track email sending status
        let emailSent = false;
        let emailError = null;
        let autoReplySent = false;

        // Send email if transporter is configured
        if (transporter) {
            try {
                const fromEmail = process.env.FROM_EMAIL || process.env.SMTP_USER;
                const toEmail = process.env.TO_EMAIL || 'rob@excelaccessconsultant.com';

                // Build email body
                let emailBody = `New Contact Form Submission\n\n`;
                emailBody += `Name: ${name}\n`;
                emailBody += `Email: ${email}\n`;
                emailBody += `Phone: ${phone || 'Not provided'}\n`;
                emailBody += `Company: ${company || 'Not provided'}\n`;
                emailBody += `\nMessage:\n${message}\n`;
                emailBody += `\n\nSubmitted at: ${new Date().toLocaleString()}`;

                // Send email with timeout
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
                    `
                };

                // Send email with 30 second timeout
                const emailPromise = transporter.sendMail(mailOptions);
                const timeoutPromise = new Promise((_, reject) =>
                    setTimeout(() => reject(new Error('Email sending timeout after 30 seconds')), 30000)
                );

                await Promise.race([emailPromise, timeoutPromise]);
                emailSent = true;
                console.log('Email sent successfully to:', toEmail);

                // Send auto-reply thank you email to the client
                try {
                    const clientEmailSubject = 'Thank You for Contacting ExcelAccessConsultant';
                    const clientEmailText = `Dear ${name},

Thank you for reaching out to ExcelAccessConsultant. We appreciate you taking the time to contact us and share your project needs.

We have received your message and will review it carefully. Our team will get back to you within one business day to discuss how we can help with your Excel and Access consulting needs.

To help us schedule a convenient time for you, could you please provide us with 2-3 time slots that work best for you? We can arrange a Teams or Zoom call to discuss your requirements in detail.

You can reply directly to this email with your preferred time slots, or call us at 801-616-3702.

To help me prepare for our consultation and make the most of our time together, please send any relevant files, spreadsheets, databases, or documentation that you would like me to review before our meeting. This will allow me to better understand your current setup and come prepared with specific recommendations.

We look forward to speaking with you soon.

Best regards,
Robert Terry
ExcelAccessConsultant
Phone: 801-616-3702
Email: rob@excelaccessconsultant.com`;

                    const clientEmailHtml = `
                        <!DOCTYPE html>
                        <html>
                        <head>
                            <meta charset="utf-8">
                            <meta name="viewport" content="width=device-width, initial-scale=1.0">
                        </head>
                        <body style="font-family: Arial, sans-serif; line-height: 1.6; color: #333; max-width: 600px; margin: 0 auto; padding: 20px;">
                            <div style="background-color: #ffffff; border: 1px solid #e5e7eb; border-radius: 8px; padding: 30px;">
                                <!-- Header -->
                                <div style="text-align: center; margin-bottom: 30px; padding-bottom: 20px; border-bottom: 2px solid #1e40af;">
                                    <h1 style="color: #1e40af; margin: 0; font-size: 24px;">Thank You for Contacting Us</h1>
                                </div>

                                <!-- Main Content -->
                                <div style="margin-bottom: 25px;">
                                    <p style="margin: 0 0 15px 0;">Dear ${name},</p>
                                    
                                    <p style="margin: 0 0 15px 0;">
                                        Thank you for reaching out to <strong>ExcelAccessConsultant</strong>. We appreciate you taking the time to contact us and share your project needs.
                                    </p>
                                    
                                    <p style="margin: 0 0 15px 0;">
                                        We have received your message and will review it carefully. Our team will get back to you within <strong>one business day</strong> to discuss how we can help with your Excel and Access consulting needs.
                                    </p>
                                </div>

                                <!-- Call to Action Box -->
                                <div style="background-color: #eff6ff; border-left: 4px solid #1e40af; padding: 20px; margin: 25px 0; border-radius: 4px;">
                                    <h2 style="color: #1e40af; margin: 0 0 15px 0; font-size: 18px;">📅 Schedule a Consultation Call</h2>
                                    <p style="margin: 0 0 10px 0;">
                                        To help us schedule a convenient time for you, could you please provide us with <strong>2-3 time slots</strong> that work best for you? We can arrange a <strong>Teams or Zoom call</strong> to discuss your requirements in detail.
                                    </p>
                                    <p style="margin: 0;">
                                        You can reply directly to this email with your preferred time slots, or call us at <a href="tel:8016163702" style="color: #1e40af; text-decoration: none; font-weight: bold;">801-616-3702</a>.
                                    </p>
                                </div>

                                <!-- Preparation Request Box -->
                                <div style="background-color: #fef3c7; border-left: 4px solid #f59e0b; padding: 20px; margin: 25px 0; border-radius: 4px;">
                                    <h2 style="color: #92400e; margin: 0 0 15px 0; font-size: 18px;">📎 Prepare for Our Meeting</h2>
                                    <p style="margin: 0 0 10px 0; color: #78350f;">
                                        To help me prepare for our consultation and make the most of our time together, please send any relevant files, spreadsheets, databases, or documentation that you would like me to review before our meeting. This will allow me to better understand your current setup and come prepared with specific recommendations.
                                    </p>
                                    <p style="margin: 0; color: #78350f; font-size: 14px;">
                                        You can attach files directly to your reply email or share them via a secure file transfer method of your choice.
                                    </p>
                                </div>

                                <!-- Closing -->
                                <div style="margin-top: 30px;">
                                    <p style="margin: 0 0 10px 0;">We look forward to speaking with you soon.</p>
                                    <p style="margin: 0 0 5px 0;">
                                        <strong>Best regards,</strong><br>
                                        Robert Terry<br>
                                        ExcelAccessConsultant
                                    </p>
                                </div>

                                <!-- Contact Info -->
                                <div style="margin-top: 30px; padding-top: 20px; border-top: 1px solid #e5e7eb; font-size: 14px; color: #6b7280;">
                                    <p style="margin: 5px 0;">
                                        <strong>Phone:</strong> <a href="tel:8016163702" style="color: #1e40af; text-decoration: none;">801-616-3702</a>
                                    </p>
                                    <p style="margin: 5px 0;">
                                        <strong>Email:</strong> <a href="mailto:rob@excelaccessconsultant.com" style="color: #1e40af; text-decoration: none;">rob@excelaccessconsultant.com</a>
                                    </p>
                                </div>
                            </div>

                            <!-- Footer -->
                            <div style="text-align: center; margin-top: 20px; font-size: 12px; color: #6b7280;">
                                <p style="margin: 0;">
                                    This is an automated response. Please do not reply directly to this email.<br>
                                    If you have any questions, please contact us at <a href="mailto:rob@excelaccessconsultant.com" style="color: #1e40af;">rob@excelaccessconsultant.com</a>
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
                        html: clientEmailHtml
                    };

                    // Send auto-reply with timeout
                    const autoReplyPromise = transporter.sendMail(clientMailOptions);
                    const autoReplyTimeoutPromise = new Promise((_, reject) =>
                        setTimeout(() => reject(new Error('Auto-reply email timeout after 30 seconds')), 30000)
                    );

                    await Promise.race([autoReplyPromise, autoReplyTimeoutPromise]);
                    autoReplySent = true;
                    console.log('Auto-reply email sent successfully to:', email);
                } catch (clientEmailError) {
                    console.error('Error sending auto-reply email to client:', clientEmailError);
                    // Auto-reply failure is not critical, but log it
                }
            } catch (emailError) {
                console.error('Error sending notification email:', emailError);
                emailError = emailError.message || 'Failed to send email';
                // Don't fail the request if only notification email fails, but track it
            }
        } else {
            console.warn('Email not sent - SMTP not configured');
            emailError = 'SMTP not configured';
        }

        // Return response with actual email status
        if (emailSent || !transporter) {
            // Success if email was sent OR if SMTP is not configured (for development)
            res.status(200).json({
                success: true,
                emailSent: emailSent,
                autoReplySent: autoReplySent,
                message: emailSent
                    ? 'Thank you for your message. We will get back to you within one business day.'
                    : 'Your message has been received. Email notifications are currently disabled.'
            });
        } else {
            // Email failed to send
            res.status(500).json({
                success: false,
                emailSent: false,
                error: emailError || 'Failed to send email notification. Please try again or contact us directly.',
                message: 'We received your message, but there was an issue sending the confirmation email. Please contact us directly at rob@excelaccessconsultant.com or call 801-616-3702.'
            });
        }

    } catch (error) {
        console.error('Error processing contact form:', error);
        res.status(500).json({
            success: false,
            error: 'Internal server error. Please try again later.'
        });
    }
});

// Serve static files from the dist directory (after API routes)
app.use(express.static(path.join(__dirname, 'dist')));

// Catch all handler: send back React's index.html file for client-side routing
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'dist', 'index.html'));
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
    console.log(`Serving static files from: ${path.join(__dirname, 'dist')}`);
});

