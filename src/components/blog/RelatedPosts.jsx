import {
  CASE_SHORT_TITLES,
  POST_RELATED_CASE,
  POST_SHORT_TITLES,
  RELATED_POSTS,
} from '../../constants/relatedContent';

/** Server-rendered related posts (+ optional related case); anchors = shortTitle. Plain <a href>. */
export default function RelatedPosts({ slug }) {
  const related = RELATED_POSTS[slug] || [];
  const relatedCase = POST_RELATED_CASE[slug] || null;
  if (related.length === 0 && !relatedCase) return null;

  return (
    <aside className='related-posts' aria-label='Related posts'>
      <h2>Related posts</h2>
      <ul>
        {related.map((target) => (
          <li key={target}>
            <a href={`/blog/${target}`}>{POST_SHORT_TITLES[target] || target}</a>
          </li>
        ))}
        {relatedCase ? (
          <li key={`case-${relatedCase}`}>
            <a href={`/case-studies/${relatedCase}`}>
              {CASE_SHORT_TITLES[relatedCase] || relatedCase}
            </a>
          </li>
        ) : null}
      </ul>
    </aside>
  );
}
