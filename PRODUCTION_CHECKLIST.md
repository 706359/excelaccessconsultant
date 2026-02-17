# Production launch checklist

Use this before going live.

## Already done

- [x] Production build passes (`npm run build`)
- [x] Custom 404 page
- [x] Security headers (X-Frame-Options, X-Content-Type-Options, Referrer-Policy)
- [x] Contact API rate limit (5 req / 15 min per IP)
- [x] Server metadata (title, description, canonical) on all main pages
- [x] Dynamic sitemap at `/sitemap.xml`
- [x] Health check at `GET /api/health`
- [x] `.env.example` for required variables
- [x] No PII logged in production (contact form)
- [x] All images have alt text
- [x] GA4 (G-9ZT461HGG8) and consent flow
- [x] `robots.txt` with sitemap URL

## Before you deploy

1. **Environment**
   - Copy `.env.example` to `.env` (or set env in your host).
   - Set `SMTP_HOST`, `SMTP_USER`, `SMTP_PASS` (and optionally `SMTP_PORT`, `FROM_EMAIL`, `TO_EMAIL`) so contact form and auto-reply work.
   - Set `PORT` if your host doesn’t provide it (e.g. 5063).

2. **SSL**
   - Serve the site over HTTPS. If using a reverse proxy (e.g. Nginx, Cloudflare), ensure SSL is configured there.

3. **Domain**
   - Point excelaccessconsultant.com to your server and confirm `metadataBase` / canonicals match the live URL.

4. **Optional**
   - Run `npm run lint` and fix any issues; when ready, set `eslint.ignoreDuringBuilds: false` in `next.config.js` so the build fails on lint.
   - Submit `https://excelaccessconsultant.com/sitemap.xml` in Google Search Console.

## Verdict

The app is **production-ready** from a code and build perspective. Fulfill the “Before you deploy” steps (env, SSL, domain) and you’re good to go.
