export function trackEvent(eventName, params = {}) {
  if (typeof window !== 'undefined' && typeof window.gtag === 'function') {
    window.gtag('event', eventName, params);
  }
}

export function trackPhoneClick(location = 'unknown') {
  trackEvent('phone_click', { event_category: 'conversion', location });
}

export function trackEmailClick(location = 'unknown') {
  trackEvent('email_link_click', { event_category: 'conversion', location });
}

export function trackFormSubmit(service = '') {
  trackEvent('form_submit', { event_category: 'conversion', service });
}

export function trackCaseStudyView(slug) {
  trackEvent('case_study_view', { event_category: 'engagement', slug });
}

export function trackServicePageView(service) {
  trackEvent('service_page_view', { event_category: 'engagement', service });
}

export function trackLeadMagnetSignup(resource = '') {
  trackEvent('lead_magnet_signup', { event_category: 'conversion', resource });
}

export function trackCalculatorUse(annualSavings) {
  trackEvent('calculator_use', { event_category: 'conversion', annual_savings: annualSavings });
}

export function trackBlogRead(slug) {
  trackEvent('blog_read', { event_category: 'engagement', slug });
}
