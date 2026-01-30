import { useEffect } from 'react';

const SEO = ({
  title = 'Excel VBA Consultant | Access Database Expert',
  description = 'Excel VBA & Access database consultant. 20+ years. Fix broken spreadsheets, build stable databases, automate tasks. Nationwide service. Free consultation.',
  keywords = 'excel vba consultant, access database consultant, Excel consulting, Access consulting, Excel automation, VBA programming, MS Access database, Excel expert, Access expert, database repair, spreadsheet automation, Excel macros, Access database development, Excel VBA consultant Utah, Access database consultant Springville',
  ogTitle = 'Excel VBA Consultant & Access Database Consultant | ExcelAccessConsultant',
  image = '/logo.png',
  url = 'https://excelaccessconsultant.com',
  type = 'website',
}) => {
  useEffect(() => {
    // Update document title
    document.title = title;

    // Update or create meta tags
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

    // Update primary meta tags
    updateMetaTag('title', title);
    updateMetaTag('description', description);
    updateMetaTag('keywords', keywords);

    // Update Open Graph tags
    updateMetaTag('og:title', ogTitle, true);
    updateMetaTag('og:description', description, true);
    updateMetaTag('og:image', `${url}${image}`, true);
    updateMetaTag('og:url', url, true);
    updateMetaTag('og:type', type, true);

    // Update Twitter tags (Twitter uses name= not property=)
    updateMetaTag('twitter:card', 'summary_large_image');
    updateMetaTag('twitter:title', ogTitle);
    updateMetaTag('twitter:description', description);
    updateMetaTag('twitter:image', `${url}${image}`);
    
    // Update og:site_name
    updateMetaTag('og:site_name', 'ExcelAccessConsultant', true);

    // Update canonical URL
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
