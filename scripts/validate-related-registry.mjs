import {
  CASE_SHORT_TITLES,
  POST_RELATED_CASE,
  POST_SHORT_TITLES,
  RELATED_CASES,
  RELATED_POSTS,
} from '../src/constants/relatedContent.js';

function validateGraph(kind, relatedMap, shortTitles, knownSlugs, { maxRelated = 3 } = {}) {
  const errors = [];
  for (const slug of knownSlugs) {
    if (!shortTitles[slug]) errors.push(`${kind} ${slug}: missing shortTitle`);
    const related = relatedMap[slug];
    if (!related) {
      errors.push(`${kind} ${slug}: missing related array`);
      continue;
    }
    if (related.length < 2 || related.length > maxRelated) {
      errors.push(`${kind} ${slug}: related length ${related.length} (need 2–${maxRelated})`);
    }
    for (const target of related) {
      if (!knownSlugs.includes(target)) errors.push(`${kind} ${slug}: unknown related ${target}`);
      if (target === slug) errors.push(`${kind} ${slug}: self-reference`);
      if (!shortTitles[target]) errors.push(`${kind} ${slug}: related ${target} missing shortTitle`);
    }
  }
  for (const slug of Object.keys(relatedMap)) {
    if (!knownSlugs.includes(slug)) errors.push(`${kind} related key unknown: ${slug}`);
  }
  return errors;
}

const postSlugs = Object.keys(POST_SHORT_TITLES);
const caseSlugs = Object.keys(CASE_SHORT_TITLES);
const errors = [
  ...validateGraph('post', RELATED_POSTS, POST_SHORT_TITLES, postSlugs),
  ...validateGraph('case', RELATED_CASES, CASE_SHORT_TITLES, caseSlugs, { maxRelated: 4 }),
];

for (const [slug, caseSlug] of Object.entries(POST_RELATED_CASE)) {
  if (!postSlugs.includes(slug)) errors.push(`postRelatedCase ${slug}: unknown post`);
  if (!caseSlugs.includes(caseSlug)) errors.push(`postRelatedCase ${slug}: unknown case ${caseSlug}`);
  if (!CASE_SHORT_TITLES[caseSlug]) {
    errors.push(`postRelatedCase ${slug}: case ${caseSlug} missing shortTitle`);
  }
}

if (errors.length) {
  console.error('Related registry validation failed:');
  for (const e of errors) console.error(' -', e);
  process.exit(1);
}

console.log(`Related registry OK (${postSlugs.length} posts, ${caseSlugs.length} cases)`);
