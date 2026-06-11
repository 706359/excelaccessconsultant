export const SITE_URL = 'https://excelaccessconsultant.com';

/** Manrope first; Plus Jakarta Sans if Manrope fails to load */
export const FONT_FAMILY =
  "'Manrope', 'Plus Jakarta Sans', system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif";

export const FONT_DISPLAY = FONT_FAMILY;
export const FONT_SANS = FONT_FAMILY;

/** Logo wordmark + site brand colors */
export const BRAND_COLORS = {
  excel: '#1B5E20',
  access: '#8B1A1A',
  navy: '#0F172A',
  charcoal: '#2D2D2D',
  background: '#F8FAFC',
  text: '#2D2D2D',
};

export const BRAND_LOGO = {
  src: '/eaclogo.png',
  png: '/logo.png',
  webp: '/logo.webp',
  width: 1100,
  height: 198,
  alt: 'ExcelAccessConsultant – Excel & Access Consulting',
};

export const BRAND_LOGO_OG = {
  url: `${SITE_URL}${BRAND_LOGO.src}`,
  width: BRAND_LOGO.width,
  height: BRAND_LOGO.height,
  alt: 'ExcelAccessConsultant',
};
