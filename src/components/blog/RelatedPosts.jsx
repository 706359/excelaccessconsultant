import { POST_SHORT_TITLES, RELATED_POSTS } from '../../constants/relatedContent';

/** Server-rendered related posts; anchors = shortTitle. Plain <a href>. */
export default function RelatedPosts({ slug }) {
  const related = RELATED_POSTS[slug] || [];
  if (related.length === 0) return null;

  return (
    <aside className='related-posts' aria-label='Related posts'>
      <h2>Related posts</h2>
      <ul>
        {related.map((target) => (
          <li key={target}>
            <a href={`/blog/${target}`}>{POST_SHORT_TITLES[target] || target}</a>
          </li>
        ))}
      </ul>
    </aside>
  );
}
