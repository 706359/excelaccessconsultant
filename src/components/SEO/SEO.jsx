import { useEffect } from 'react';

const SEO = ({
  title = 'Excel and Access Consulting That Actually Works | ExcelAccessConsultant',
  description = 'Excel and Access consulting that actually works. 20+ years of experience fixing broken spreadsheets, building stable databases, and automating repetitive tasks. Free consultation available.',
  keywords = 'Excel consulting, Access consulting, Excel automation, VBA programming, MS Access database, Excel expert, Access expert, database repair, spreadsheet automation, Excel macros, Access database development',
  ogTitle = 'Excel and Access Consulting That Actually Works',
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

    // Update Twitter tags
    updateMetaTag('twitter:title', ogTitle, true);
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
  }, [title, description, keywords, ogTitle, image, url, type]);

  return null;
};

export default SEO;
