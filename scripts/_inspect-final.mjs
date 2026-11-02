const base = 'http://127.0.0.1:5063';

const free = await (await fetch(`${base}/free-resources`)).text();
const h1 = (free.match(/<h1[^>]*>([\s\S]*?)<\/h1>/) || [])[1]?.replace(/<[^>]+>/g, '').trim();
const titles = [...free.matchAll(/lead-magnet-card__title[^>]*>([^<]+)/g)].map((m) => m[1]);
const dls = [...new Set([...free.matchAll(/\/downloads\/[a-z0-9_.-]+/gi)].map((m) => m[0]))];
const features = [...free.matchAll(/lead-magnet-card__subtitle[^>]*>([^<]+)/g)].map((m) => m[1]);
console.log(JSON.stringify({ h1, titles, features, downloads: dls }, null, 2));

const home = await (await fetch(`${base}/`)).text();
const logoLinks = [...home.matchAll(/<a\b[^>]*href="\/"[^>]*>[\s\S]*?<\/a>/gi)].map((m) => {
  const tag = m[0];
  return {
    aria: (tag.match(/aria-label="([^"]*)"/i) || [])[1] || null,
    hasImg: /<img/i.test(tag),
    imgAlt: (tag.match(/alt="([^"]*)"/i) || [])[1] || null,
    visibleText: tag.replace(/<[^>]+>/g, '').replace(/\s+/g, ' ').trim().slice(0, 60),
    snippet: tag.slice(0, 220),
  };
});
console.log('LOGOS', JSON.stringify(logoLinks, null, 2));
