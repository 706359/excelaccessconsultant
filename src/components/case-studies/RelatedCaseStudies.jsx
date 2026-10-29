import { CASE_SHORT_TITLES, RELATED_CASES } from '../../constants/relatedContent';

/** Server-rendered related cases; anchors = shortTitle. Plain <a href>. */
export default function RelatedCaseStudies({ slug }) {
  const related = RELATED_CASES[slug] || [];
  if (related.length === 0) return null;

  return (
    <aside className='related-cases' aria-label='Related case studies'>
      <h2>Related case studies</h2>
      <ul>
        {related.map((target) => (
          <li key={target}>
            <a href={`/case-studies/${target}`}>{CASE_SHORT_TITLES[target] || target}</a>
          </li>
        ))}
      </ul>
    </aside>
  );
}
