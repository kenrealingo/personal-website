/**
 * Contact Form API Route
 * Handles form submissions from the contact form and sends email notifications
 */

import { NextRequest, NextResponse } from 'next/server';
import { z } from 'zod';
import nodemailer from 'nodemailer';

// Validation schema matching the frontend
const contactSchema = z.object({
  name: z.string().min(2).max(50),
  email: z.string().email(),
  subject: z.string().min(5).max(100),
  message: z.string().min(10).max(1000),
});

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    
    // Validate the request body
    const validation = contactSchema.safeParse(body);
    
    if (!validation.success) {
      return NextResponse.json(
        { error: 'Invalid form data', details: validation.error.flatten() },
        { status: 400 }
      );
    }

    const { name, email, subject, message } = validation.data;

    // Create email transporter using Gmail
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_USER, // Your Gmail address
        pass: process.env.EMAIL_PASS, // Your Gmail App Password
      },
    });

    // Email template with cyberpunk styling
    const htmlTemplate = `
      <!DOCTYPE html>
      <html>
        <head>
          <style>
            body { font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; line-height: 1.6; color: #333; margin: 0; padding: 0; }
            .container { max-width: 600px; margin: 0 auto; background: #ffffff; }
            .header { 
              background: linear-gradient(135deg, #ff4da6, #a855f7, #3b82f6); 
              padding: 30px 20px; 
              text-align: center; 
              color: white; 
            }
            .header h2 { margin: 0 0 10px 0; font-size: 24px; }
            .header p { margin: 0; opacity: 0.9; }
            .content { padding: 30px 20px; background: #f8fafc; }
            .field { margin-bottom: 20px; }
            .label { 
              font-weight: 600; 
              color: #1e293b; 
              margin-bottom: 8px; 
              display: block;
              font-size: 14px;
              text-transform: uppercase;
              letter-spacing: 0.5px;
            }
            .value { 
              background: white; 
              padding: 15px; 
              border-radius: 8px; 
              border-left: 4px solid #ff4da6;
              box-shadow: 0 2px 4px rgba(0,0,0,0.1);
              word-wrap: break-word;
            }
            .message-value {
              min-height: 60px;
              white-space: pre-wrap;
            }
            .footer { 
              background: #1e293b; 
              color: #94a3b8; 
              text-align: center; 
              padding: 20px; 
              font-size: 12px; 
            }
            .timestamp {
              background: #ff4da6;
              color: white;
              padding: 8px 16px;
              border-radius: 20px;
              display: inline-block;
              font-size: 12px;
              margin-top: 10px;
            }
          </style>
        </head>
        <body>
          <div class="container">
            <div class="header">
              <h2>🚀 New Portfolio Message</h2>
              <p>Someone reached out through your website!</p>
              <div class="timestamp">${new Date().toLocaleString()}</div>
            </div>
            <div class="content">
              <div class="field">
                <span class="label">👤 From</span>
                <div class="value">${name}</div>
              </div>
              <div class="field">
                <span class="label">📧 Email Address</span>
                <div class="value">${email}</div>
              </div>
              <div class="field">
                <span class="label">📝 Subject</span>
                <div class="value">${subject}</div>
              </div>
              <div class="field">
                <span class="label">💬 Message</span>
                <div class="value message-value">${message}</div>
              </div>
            </div>
            <div class="footer">
              <p>This message was sent from your portfolio contact form</p>
              <p>Reply directly to this email to respond to ${name}</p>
            </div>
          </div>
        </body>
      </html>
    `;

    // Email options
    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: process.env.EMAIL_USER, // Send to yourself
      subject: `🚀 Portfolio Contact: ${subject}`,
      html: htmlTemplate,
      replyTo: email, // Allow easy reply to the sender
    };

    // Send the email
    await transporter.sendMail(mailOptions);

    // Log successful submission
    console.log('Contact form submission sent via email:', {
      name,
      email,
      subject,
      timestamp: new Date().toISOString(),
    });

    return NextResponse.json(
      { 
        success: true, 
        message: 'Message sent successfully! I\'ll get back to you soon.' 
      },
      { status: 200 }
    );

  } catch (error) {
    console.error('Contact form error:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}

// Handle unsupported methods
export async function GET() {
  return NextResponse.json(
    { error: 'Method not allowed' },
    { status: 405 }
  );
}
