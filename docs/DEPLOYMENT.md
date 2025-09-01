# 🚀 Deployment Guide

Complete guide for deploying your portfolio website to various platforms with optimal performance and SEO.

## ⚡ Quick Deploy (5 minutes)

### **Vercel (Recommended)**
[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new)

1. **Push to GitHub**
   ```bash
   git add .
   git commit -m "Portfolio ready for deployment"
   git push origin main
   ```

2. **Connect to Vercel**
   - Visit [vercel.com](https://vercel.com)
   - Import your GitHub repository
   - Deploy automatically

3. **Custom Domain (Optional)**
   - Add your domain in Vercel dashboard
   - Update DNS records as instructed

## 🏗️ Pre-Deployment Checklist

### **Content & SEO**
- [ ] All placeholder content replaced with your information
- [ ] Profile photo optimized (WebP, <200KB)
- [ ] Project screenshots added and optimized
- [ ] Meta tags updated in `app/layout.tsx`
- [ ] Social media preview images generated
- [ ] Contact form configured and tested
- [ ] All links verified and working

### **Performance**
- [ ] Images optimized (WebP format, proper sizes)
- [ ] Fonts loading efficiently
- [ ] No console errors or warnings
- [ ] Lighthouse score 90+ (Performance, Accessibility, SEO)
- [ ] Mobile responsiveness tested on real devices

### **Technical**
- [ ] Environment variables configured
- [ ] Error boundaries implemented
- [ ] 404 page customized
- [ ] Analytics tracking set up
- [ ] Sitemap generated
- [ ] robots.txt configured

## 🌐 Deployment Platforms

### **1. Vercel (Recommended for Next.js)**

**Advantages:**
- Zero-configuration Next.js deployment
- Automatic CDN and edge functions
- Preview deployments for every PR
- Custom domains with SSL
- Analytics and Web Vitals monitoring

**Setup Process:**
```bash
# Install Vercel CLI (optional)
npm i -g vercel

# Login and deploy
vercel login
vercel --prod
```

**Environment Variables:**
```bash
# In Vercel dashboard, add:
CONTACT_EMAIL=your@email.com
FORM_API_KEY=your_form_key
NEXT_PUBLIC_GA_ID=your_analytics_id
```

### **2. Netlify**

**Advantages:**
- Form handling without backend
- Split testing capabilities
- Deploy previews
- Edge functions

**Setup Process:**
1. Build the static version:
   ```bash
   pnpm build
   pnpm export
   ```

2. Deploy to Netlify:
   - Drag `out/` folder to netlify.com/drop
   - Or connect GitHub repository

**Netlify Configuration:**
```toml
# netlify.toml
[build]
  command = "pnpm build && pnpm export"
  publish = "out"

[[headers]]
  for = "/*"
  [headers.values]
    X-Frame-Options = "DENY"
    X-XSS-Protection = "1; mode=block"
    X-Content-Type-Options = "nosniff"
```

### **3. GitHub Pages**

**Setup Process:**
```bash
# Install gh-pages
pnpm add -D gh-pages

# Add to package.json scripts
"scripts": {
  "deploy": "next build && next export && gh-pages -d out"
}

# Deploy
pnpm deploy
```

**GitHub Actions Workflow:**
```yaml
# .github/workflows/deploy.yml
name: Deploy to GitHub Pages
on:
  push:
    branches: [main]

jobs:
  build-and-deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - uses: actions/setup-node@v4
        with:
          node-version: '18'
          cache: 'pnpm'
      
      - run: pnpm install
      - run: pnpm build
      - run: pnpm export
      
      - uses: peaceiris/actions-gh-pages@v3
        with:
          github_token: ${{ secrets.GITHUB_TOKEN }}
          publish_dir: ./out
```

## 🔧 Performance Optimization

### **Image Optimization**
```typescript
// next.config.ts
const nextConfig = {
  images: {
    formats: ['image/webp', 'image/avif'],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
  },
  // Enable experimental features for better performance
  experimental: {
    optimizeCss: true,
    optimizePackageImports: ['lucide-react'],
  },
};
```

### **Bundle Analysis**
```bash
# Install bundle analyzer
pnpm add -D @next/bundle-analyzer

# Analyze bundle size
ANALYZE=true pnpm build
```

### **Performance Monitoring**
```typescript
// app/layout.tsx - Add Web Vitals tracking
export function reportWebVitals(metric: NextWebVitalsMetric) {
  // Send to analytics service
  gtag('event', metric.name, {
    event_category: 'Web Vitals',
    value: Math.round(metric.name === 'CLS' ? metric.value * 1000 : metric.value),
    event_label: metric.id,
    non_interaction: true,
  });
}
```

## 🔍 SEO Configuration

### **Meta Tags & Open Graph**
```typescript
// app/layout.tsx
export const metadata: Metadata = {
  title: {
    default: 'Your Name - Professional Portfolio',
    template: '%s | Your Name'
  },
  description: 'Experienced [Your Role] specializing in [Your Skills]. View my portfolio and get in touch for opportunities.',
  keywords: ['your', 'relevant', 'keywords', 'here'],
  authors: [{ name: 'Your Name', url: 'https://yourwebsite.com' }],
  creator: 'Your Name',
  publisher: 'Your Name',
  
  metadataBase: new URL('https://yourwebsite.com'),
  alternates: {
    canonical: '/',
  },
  
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://yourwebsite.com',
    title: 'Your Name - Professional Portfolio',
    description: 'Your professional description here',
    siteName: 'Your Name Portfolio',
    images: [
      {
        url: '/og-image.jpg', // 1200x630px
        width: 1200,
        height: 630,
        alt: 'Your Name - Portfolio Preview',
      },
    ],
  },
  
  twitter: {
    card: 'summary_large_image',
    title: 'Your Name - Professional Portfolio',
    description: 'Your professional description here',
    creator: '@yourtwitterhandle',
    images: ['/og-image.jpg'],
  },
  
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};
```

### **Structured Data**
```typescript
// app/layout.tsx - Add JSON-LD structured data
const structuredData = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: 'Your Full Name',
  jobTitle: 'Your Professional Title',
  description: 'Your bio and expertise',
  url: 'https://yourwebsite.com',
  image: 'https://yourwebsite.com/profile-photo.jpg',
  sameAs: [
    'https://github.com/yourusername',
    'https://linkedin.com/in/yourusername',
    'https://twitter.com/yourusername',
  ],
  worksFor: {
    '@type': 'Organization',
    name: 'Your Company (if applicable)',
  },
};

// Add to head
<script
  type="application/ld+json"
  dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
/>
```

## 📊 Analytics & Monitoring

### **Google Analytics 4**
```typescript
// lib/gtag.ts
export const GA_TRACKING_ID = process.env.NEXT_PUBLIC_GA_ID;

export const pageview = (url: string) => {
  window.gtag('config', GA_TRACKING_ID!, {
    page_path: url,
  });
};

export const event = ({ action, category, label, value }: {
  action: string;
  category: string;
  label?: string;
  value?: number;
}) => {
  window.gtag('event', action, {
    event_category: category,
    event_label: label,
    value: value,
  });
};
```

### **Contact Form Analytics**
```typescript
// Track form submissions
const handleSubmit = async (data: ContactFormData) => {
  // Track form start
  gtag('event', 'contact_form_submit', {
    event_category: 'engagement',
    event_label: 'contact_form',
  });
  
  // Submit form...
};
```

## 🔒 Security & Best Practices

### **Content Security Policy**
```typescript
// next.config.ts
const securityHeaders = [
  {
    key: 'X-DNS-Prefetch-Control',
    value: 'on'
  },
  {
    key: 'Strict-Transport-Security',
    value: 'max-age=63072000; includeSubDomains; preload'
  },
  {
    key: 'X-Frame-Options',
    value: 'DENY'
  },
  {
    key: 'X-Content-Type-Options',
    value: 'nosniff'
  },
  {
    key: 'Referrer-Policy',
    value: 'origin-when-cross-origin'
  },
];

module.exports = {
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: securityHeaders,
      },
    ];
  },
};
```

### **Environment Variables**
```bash
# .env.local (never commit)
CONTACT_EMAIL=your@email.com
FORM_API_KEY=your_secret_key
NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX
NEXT_PUBLIC_SITE_URL=https://yourwebsite.com

# .env.example (commit this)
CONTACT_EMAIL=your.email@example.com
FORM_API_KEY=your_form_service_api_key
NEXT_PUBLIC_GA_ID=your_google_analytics_id
NEXT_PUBLIC_SITE_URL=https://yoursite.com
```

## 📱 Domain & DNS Setup

### **Custom Domain Configuration**

1. **Purchase Domain**: Namecheap, GoDaddy, Google Domains
2. **DNS Configuration**:
   ```
   # For Vercel
   Type: CNAME
   Name: www
   Value: cname.vercel-dns.com
   
   Type: A
   Name: @
   Value: 76.76.19.61
   ```

3. **SSL Certificate**: Automatic with most platforms

### **Subdomain Setup** (Optional)
```
# For portfolio subdomain
portfolio.yourdomain.com → CNAME → your-vercel-app.vercel.app
```

## 🧪 Testing & Quality Assurance

### **Testing Checklist**
- [ ] **Lighthouse Audit**: Score 90+ in all categories
- [ ] **Mobile Testing**: Test on real devices
- [ ] **Cross-browser**: Chrome, Firefox, Safari, Edge
- [ ] **Load Testing**: Test with slow network conditions
- [ ] **Accessibility**: Screen reader compatibility
- [ ] **Form Testing**: Contact form submission works
- [ ] **Link Checking**: All internal and external links work

### **Automated Testing**
```bash
# Install testing dependencies
pnpm add -D playwright @playwright/test

# Run tests
npx playwright test
```

```typescript
// tests/homepage.spec.ts
import { test, expect } from '@playwright/test';

test('homepage loads and displays correctly', async ({ page }) => {
  await page.goto('/');
  await expect(page.locator('h1')).toContainText('Your Name');
  await expect(page.locator('[data-testid="hero-section"]')).toBeVisible();
  
  // Test responsive behavior
  await page.setViewportSize({ width: 375, height: 667 });
  await expect(page.locator('nav')).toBeVisible();
});
```

## 🚀 Launch Day Checklist

### **Final Verification**
- [ ] All content is accurate and up-to-date
- [ ] Images are optimized and loading properly
- [ ] Contact form sends emails successfully
- [ ] All links are working (use broken link checker)
- [ ] Mobile experience is smooth on multiple devices
- [ ] Page load speed is under 3 seconds
- [ ] No console errors in production
- [ ] Analytics tracking is working
- [ ] Social media previews look good
- [ ] SEO meta tags are complete

### **Post-Launch**
- [ ] Submit sitemap to Google Search Console
- [ ] Set up Google My Business (if applicable)
- [ ] Share on social media platforms
- [ ] Update LinkedIn and other profiles with website link
- [ ] Monitor analytics and performance
- [ ] Gather feedback and iterate

---

🎉 **Congratulations!** Your portfolio is now live and ready to impress potential employers and clients!

**Need help?** Check the troubleshooting section in the main README or create an issue.
