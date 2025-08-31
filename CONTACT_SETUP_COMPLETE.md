# 🚀 Contact Form Email Setup - Quick Start

## What's Been Implemented
✅ **Automatic Email Sending** - Contact form now sends emails directly to your Gmail  
✅ **Professional Email Template** - Beautiful HTML emails with your portfolio's cyberpunk theme  
✅ **Error Handling** - Proper validation and user feedback  
✅ **Gmail Integration** - Uses Gmail SMTP with App Password authentication  

## ⚡ Next Steps (5 minutes setup)

### 1. Set Up Your Gmail Credentials
Open `.env.local` and replace with your actual information:
```bash
EMAIL_USER=your-actual-email@gmail.com
EMAIL_PASS=your-gmail-app-password
```

### 2. Create Gmail App Password
1. Go to: https://myaccount.google.com/security
2. Enable "2-Step Verification" if not already enabled
3. Click "App passwords" → "Mail" → "Other (custom name)"
4. Enter "Portfolio Website" 
5. Copy the 16-character password (e.g., `abcd efgh ijkl mnop`)
6. Use this as your `EMAIL_PASS`

### 3. Test It Out
1. Save your `.env.local` file
2. Run `pnpm dev`
3. Fill out your contact form
4. Check your Gmail inbox!

## 📧 How It Works
- Someone fills out your contact form
- Email automatically sent to your Gmail with their message
- Beautiful HTML template with sender's details
- Click "Reply" to respond directly to them
- All form validation happens server-side for security

## 🎨 Email Features
- **Cyberpunk Theme** - Matches your portfolio design
- **Responsive Layout** - Looks great on mobile and desktop
- **Sender Info** - Name, email, subject, and message clearly displayed
- **Reply-To Setup** - Easy to respond to inquiries
- **Timestamp** - Know exactly when messages were sent

## 🔒 Security
- Server-side validation prevents spam
- Gmail App Passwords are more secure than regular passwords
- Environment variables keep credentials safe
- Input sanitization prevents XSS attacks

---
**Need help?** Check the detailed guide in `EMAIL_SETUP.md`
