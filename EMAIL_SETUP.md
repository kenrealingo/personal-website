# Email Setup Guide for Contact Form

## Quick Setup Steps

### 1. Gmail Configuration
Your contact form will automatically send emails to your Gmail account when someone submits a message.

### 2. Environment Variables Setup
1. Open `.env.local` in your project root
2. Replace the placeholder values:
   ```
   EMAIL_USER=your-actual-email@gmail.com
   EMAIL_PASS=your-gmail-app-password
   ```

### 3. Gmail App Password Setup
**Important**: You need a Gmail App Password (not your regular password)

#### Steps to create Gmail App Password:
1. Go to your Google Account settings: https://myaccount.google.com
2. Click "Security" in the left sidebar
3. Under "How you sign in to Google," click "2-Step Verification"
   - If not enabled, enable it first
4. At the bottom, click "App passwords"
5. Select "Mail" and "Other (custom name)"
6. Enter "Portfolio Website" as the name
7. Click "Generate"
8. Copy the 16-character password (format: abcd efgh ijkl mnop)
9. Use this password in your EMAIL_PASS environment variable

### 4. Test Your Setup
1. Save your .env.local file
2. Restart your development server: `pnpm dev`
3. Fill out your contact form
4. Check your Gmail inbox for the message

## Email Features
- ✅ **Automatic Email Delivery** - Messages sent directly to your Gmail
- 🎨 **Styled Email Template** - Beautiful HTML emails with cyberpunk theme
- 📱 **Reply-To Setup** - Click reply to respond directly to the sender
- 🔒 **Form Validation** - Server-side validation for security
- ⚡ **Real-time Status** - Loading and success states in the form

## Troubleshooting
- **Authentication Error**: Double-check your Gmail App Password
- **Email Not Received**: Check spam folder, verify EMAIL_USER is correct
- **Form Not Submitting**: Check browser console for errors

## Security Notes
- Never commit your .env.local file to Git
- Use Gmail App Passwords, not your regular password
- The EMAIL_PASS should be 16 characters with spaces
