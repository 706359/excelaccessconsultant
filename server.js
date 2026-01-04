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
const PORT = process.env.PORT || 3001;

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
    });
};

const transporter = createTransporter();

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

                // Send email
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

                await transporter.sendMail(mailOptions);
                console.log('Email sent successfully to:', toEmail);

                // Send auto-reply thank you email to the client
                try {
                    const clientEmailSubject = 'Thank You for Contacting ExcelAccessConsultant';
                    const clientEmailText = `Dear ${name},

Thank you for reaching out to ExcelAccessConsultant. We appreciate you taking the time to contact us and share your project needs.

We have received your message and will review it carefully. Our team will get back to you within one business day to discuss how we can help with your Excel and Access consulting needs.

To help us schedule a convenient time for you, could you please provide us with 2-3 time slots that work best for you? We can arrange a Teams or Zoom call to discuss your requirements in detail.

You can reply directly to this email with your preferred time slots, or call us at (801) 704-5604.

We look forward to speaking with you soon.

Best regards,
Robert Terry
ExcelAccessConsultant
Phone: (801) 704-5604
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
                                        You can reply directly to this email with your preferred time slots, or call us at <a href="tel:8017045604" style="color: #1e40af; text-decoration: none; font-weight: bold;">(801) 704-5604</a>.
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
                                        <strong>Phone:</strong> <a href="tel:8017045604" style="color: #1e40af; text-decoration: none;">(801) 704-5604</a>
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

                    await transporter.sendMail(clientMailOptions);
                    console.log('Auto-reply email sent successfully to:', email);
                } catch (clientEmailError) {
                    console.error('Error sending auto-reply email to client:', clientEmailError);
                    // Don't fail the request if auto-reply fails
                }
            } catch (emailError) {
                console.error('Error sending email:', emailError);
                // Log the error but don't fail the request
                // The form submission is still logged to console
            }
        } else {
            console.warn('Email not sent - SMTP not configured');
        }

        res.status(200).json({
            success: true,
            message: 'Thank you for your message. We will get back to you within one business day.'
        });

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

