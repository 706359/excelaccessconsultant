'use client';

import { useEffect } from 'react';
import { BRAND_LOGO } from '../../config/brand';

const SEO = ({
  title = 'Excel VBA Consultant | Access Database Expert',
  description = 'Professional Excel VBA & Access database consultant based in the USA. 20+ years experience. Serving clients across the United States and worldwide. Free consultation.',
  keywords = 'excel vba consultant, access database consultant, USA Excel consultant, Excel consulting, Access consulting, Excel automation, worldwide Excel Access consulting, Excel VBA consultant USA',
  ogTitle = 'Excel VBA Consultant & Access Database Consultant | ExcelAccessConsultant',
  image = BRAND_LOGO.src,
  url = 'https://excelaccessconsultant.com',
  type = 'website',
}) => {
  useEffect(() => {
    document.title = title;

    const updateMetaTag = (name, content, isProperty = false) => {
      const attribute = isProperty ? 'property' : 'name';
      let meta = document.querySelector(`meta[${attribute}="${name}"]`);

      if (!meta) {
        meta = document.createElement('meta');
        meta.setAttribute(attribute, name);
        document.head.appendChild(meta);
      }

      meta.setAttribute('content', content);
    };

    updateMetaTag('title', title);
    updateMetaTag('description', description);
    updateMetaTag('keywords', keywords);

    updateMetaTag('og:title', ogTitle, true);
    updateMetaTag('og:description', description, true);
    updateMetaTag('og:image', `${url}${image}`, true);
    updateMetaTag('og:url', url, true);
    updateMetaTag('og:type', type, true);

    updateMetaTag('twitter:card', 'summary_large_image');
    updateMetaTag('twitter:title', ogTitle);
    updateMetaTag('twitter:description', description);
    updateMetaTag('twitter:image', `${url}${image}`);

    updateMetaTag('og:site_name', 'ExcelAccessConsultant', true);

    let canonical = document.querySelector('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement('link');
      canonical.setAttribute('rel', 'canonical');
      document.head.appendChild(canonical);
    }
    canonical.setAttribute('href', url);
  }, [title, description, keywords, ogTitle, image, url, type]);

  return null;
};

export default SEO;
