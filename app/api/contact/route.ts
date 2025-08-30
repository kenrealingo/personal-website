/**
 * Contact Form API Route
 * Handles form submissions from the contact form
 */

import { NextRequest, NextResponse } from 'next/server';
import { z } from 'zod';

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

    // Here you would typically:
    // 1. Save to database
    // 2. Send email notification
    // 3. Integration with email services (SendGrid, Mailgun, etc.)
    
    // For demo purposes, just log the data
    console.log('Contact form submission:', {
      name,
      email,
      subject,
      message,
      timestamp: new Date().toISOString(),
    });

    // Simulate processing delay
    await new Promise(resolve => setTimeout(resolve, 1000));

    // You can integrate with email services here
    // Example: await sendEmail({ name, email, subject, message });

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
