# Cloudflare Turnstile Setup Guide

## What is Cloudflare Turnstile?

Cloudflare Turnstile is a privacy-focused, free CAPTCHA alternative that provides bot protection without tracking users.

## Setup Instructions

### Step 1: Get Your Site Key

1. Go to [Cloudflare Dashboard](https://dash.cloudflare.com/)
2. Navigate to **Turnstile** section
3. Click **Add Site**
4. Enter your domain (e.g., `excelaccessconsultant.com`)
5. Choose widget mode:
   - **Managed** (recommended) - Automatically shows challenge when needed
   - **Non-interactive** - Always invisible
   - **Invisible** - Shows challenge only when suspicious
6. Copy your **Site Key** and **Secret Key**

### Step 2: Update Your Code

1. Open `src/App.jsx`
2. Find the line with `sitekey: '1x00000000000000000000AA'` (currently using test key)
3. Replace the test key with your actual site key from Cloudflare

**Current (Test Key - for development only):**

```javascript
sitekey: '1x00000000000000000000AA', // Test key - always passes
```

**Production (Your actual key):**

```javascript
sitekey: '0x4AAAAAAABkMYinukE1F0zA', // Replace with your actual key from Cloudflare
```

**Note:** The test key `1x00000000000000000000AA` works for development but always passes validation. You MUST replace it with your production key before going live.

### Step 3: Test

1. Start your development server: `npm run dev`
2. Navigate to the contact form
3. You should see the Turnstile widget
4. Complete the challenge and submit the form

## Features

- ✅ Privacy-focused (no tracking)
- ✅ Free forever
- ✅ GDPR compliant
- ✅ Works on mobile devices
- ✅ Better UX than traditional CAPTCHAs

## Troubleshooting

**Widget not showing?**

- Make sure the Turnstile script is loaded in `index.html`
- Check browser console for errors
- Verify your site key is correct

**Token validation failing?**

- Ensure you're using the correct site key
- Check that your domain matches the one registered in Cloudflare

## Additional Resources

- [Cloudflare Turnstile Documentation](https://developers.cloudflare.com/turnstile/)
- [Turnstile Dashboard](https://dash.cloudflare.com/?to=/:account/turnstile)
