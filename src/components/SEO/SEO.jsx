import { useEffect } from 'react';

const SEO = ({ 
  title = 'ExcelAccessConsultant - Expert Excel & Access Consulting Services',
  description = 'Professional Excel and Access consulting services. Custom automation, database development, VBA programming, and data management solutions. 15+ years of experience. Free consultation available.',
  keywords = 'Excel consulting, Access consulting, Excel automation, Access database, VBA programming, data management, Excel macros, database development, business automation',
  image = '/logo.png',
  url = 'https://excelaccessconsultant.com',
  type = 'website'
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
    updateMetaTag('og:title', title, true);
    updateMetaTag('og:description', description, true);
    updateMetaTag('og:image', `${url}${image}`, true);
    updateMetaTag('og:url', url, true);
    updateMetaTag('og:type', type, true);

    // Update Twitter tags
    updateMetaTag('twitter:title', title, true);
    updateMetaTag('twitter:description', description, true);
    updateMetaTag('twitter:image', `${url}${image}`, true);

    // Update canonical URL
    let canonical = document.querySelector('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement('link');
      canonical.setAttribute('rel', 'canonical');
      document.head.appendChild(canonical);
    }
    canonical.setAttribute('href', url);
  }, [title, description, keywords, image, url, type]);

  return null;
};

export default SEO;

