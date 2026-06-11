'use client';

import { useEffect } from 'react';

const BASE = 'https://excelaccessconsultant.com';

export default function BreadcrumbSchema({ items }) {
  useEffect(() => {
    if (!items?.length) return;

    const schema = {
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement: items.map((item, index) => ({
        '@type': 'ListItem',
        position: index + 1,
        name: item.label,
        item: item.path === '/' ? `${BASE}/` : `${BASE}${item.path}`,
      })),
    };

    const scriptId = 'breadcrumb-schema';
    let script = document.getElementById(scriptId);
    if (!script) {
      script = document.createElement('script');
      script.id = scriptId;
      script.type = 'application/ld+json';
      document.head.appendChild(script);
    }
    script.textContent = JSON.stringify(schema);

    return () => {
      document.getElementById(scriptId)?.remove();
    };
  }, [items]);

  return null;
}
