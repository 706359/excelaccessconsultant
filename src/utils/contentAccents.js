const ACCESS_SERVICE_PREFIXES = [
  '/access-consulting',
  '/database-migration',
  '/access-database-repair',
];

const ACCESS_BLOG_CATEGORIES = ['Access Database', 'Database Migration'];

export function getServiceAccent(relatedService) {
  return ACCESS_SERVICE_PREFIXES.some((path) => relatedService?.startsWith(path))
    ? 'secondary'
    : 'primary';
}

export function getBlogAccent(category) {
  return ACCESS_BLOG_CATEGORIES.some((label) => category?.includes(label))
    ? 'secondary'
    : 'primary';
}

export function parseMetricTransform(value) {
  if (!value?.includes('→')) return null;
  const [before, after] = value.split('→').map((part) => part.trim());
  return before && after ? { before, after } : null;
}

export function firstSentence(text) {
  if (!text) return '';
  const match = text.match(/^[^.!?]+[.!?]/);
  return match ? match[0] : text.slice(0, 140);
}

/** Card fields for case study index grids */
export function getCaseStudyCardDisplay(study) {
  const transformMetric = study.metrics.find((m) => m.value.includes('→'));
  const transform = parseMetricTransform(transformMetric?.value);
  const highlightMetric =
    study.metrics.find((m) => !m.value.includes('→') && m.label !== 'Timeline') ||
    study.metrics[0];

  return {
    accent: getServiceAccent(study.relatedService),
    transform,
    highlightValue: highlightMetric?.value,
    highlightLabel: highlightMetric?.label,
    excerpt: firstSentence(study.outcome),
  };
}
