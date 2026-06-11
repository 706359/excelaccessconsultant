const path = require('path');

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [],
  },
  trailingSlash: false,
  env: {
    CUSTOM_KEY: process.env.CUSTOM_KEY,
  },
  // www -> non-www and http -> https redirects should be handled at DNS/hosting level (Vercel, Cloudflare)
  async redirects() {
    return [
      { source: '/og-image.png', destination: '/eaclogo.png', permanent: true },
      { source: '/favicon.png', destination: '/favicon-32x32.png', permanent: true },
      { source: '/index.html', destination: '/', permanent: true },
      { source: '/about.html', destination: '/about', permanent: true },
      { source: '/contact.html', destination: '/contact', permanent: true },
      { source: '/faq.html', destination: '/faq', permanent: true },
      { source: '/thank-you.html', destination: '/thank-you', permanent: true },
      { source: '/privacy-policy.html', destination: '/privacy-policy', permanent: true },
      { source: '/free-resources.html', destination: '/free-resources', permanent: true },
      { source: '/blog/index.html', destination: '/blog', permanent: true },
      { source: '/case-studies/index.html', destination: '/case-studies', permanent: true },
      { source: '/resources/faq.html', destination: '/resources/faq', permanent: true },
      {
        source: '/resources/free-checklist.html',
        destination: '/resources/free-checklist',
        permanent: true,
      },
      {
        source: '/resources/calculator.html',
        destination: '/resources/calculator',
        permanent: true,
      },
      { source: '/excel-consultant.php', destination: '/excel-automation', permanent: true },
      { source: '/excel-expert.php', destination: '/excel-automation', permanent: true },
      { source: '/excel-formulas.php', destination: '/excel-automation', permanent: true },
      { source: '/access-expert_lp1.php', destination: '/access-consulting', permanent: true },
      { source: '/access-specialist.php', destination: '/access-consulting', permanent: true },
      { source: '/access_developer.php', destination: '/access-consulting', permanent: true },
      { source: '/access_developer_lp1.php', destination: '/access-consulting', permanent: true },
      { source: '/access_developer_lp2.php', destination: '/access-consulting', permanent: true },
      { source: '/excel_developer.php', destination: '/vba-development', permanent: true },
      { source: '/excel_developer_lp1.php', destination: '/vba-development', permanent: true },
      { source: '/excel_developer_lp2.php', destination: '/vba-development', permanent: true },
      { source: '/excel_custom.php', destination: '/excel-automation', permanent: true },
      { source: '/excel_custom_lp1.php', destination: '/excel-automation', permanent: true },
      { source: '/macro_experts.php', destination: '/vba-development', permanent: true },
      { source: '/macro_experts_lp1.php', destination: '/vba-development', permanent: true },
      { source: '/ms-excel-consultant.php', destination: '/excel-automation', permanent: true },
      { source: '/ms-excel-consultant_lp1.php', destination: '/excel-automation', permanent: true },
      { source: '/:slug.php', destination: '/', permanent: true },
    ];
  },
  async headers() {
    return [
      {
        source: '/:path*',
        headers: [
          { key: 'X-Frame-Options', value: 'DENY' },
          { key: 'X-Content-Type-Options', value: 'nosniff' },
          { key: 'Referrer-Policy', value: 'strict-origin-when-cross-origin' },
        ],
      },
    ];
  },
  webpack: (config) => {
    config.resolve.alias['@'] = path.join(__dirname, 'src');
    return config;
  },
  turbopack: {},
};

module.exports = nextConfig;
