# Profile Photo Upload Instructions

## Your profile photo should be placed here as:
- `profile-photo.jpg` or `profile-photo.png`

## How to upload your profile photo:

1. **Save your "profile photo.jpg" file** to this exact location:
   `C:\Users\HP\Documents\personal-website\public\images\profile-photo.jpg`

2. **The photo will be used in:**
   - About section (main profile image)
   - Navigation/header (if we add one)
   - Contact section (optional)

## Recommended specifications:
- **Size**: 400x400px to 800x800px (square format works best)
- **Format**: JPG or PNG
- **File size**: Under 500KB for optimal loading
- **Style**: Professional headshot or casual portrait

## Usage in components:
```tsx
<Image 
  src="/images/profile-photo.jpg" 
  alt="Ken Realingo Profile Photo"
  width={400}
  height={400}
  className="rounded-full"
/>
```
