import styles from './Tiers.module.css';

const tiers = [
  {
    num: 'Tier 1',
    name: 'Evidence Sprint',
    price: '$750–$2,000',
    tagline: "You have a deadline. We have a framework. Let’s produce one high-impact deliverable — fast.",
    timeline: '2–4 weeks · Fixed scope',
    idealFor: 'Funder brief, LOI data narrative, single-cycle impact summary, or logic model audit.',
    includes: null,
    featured: false,
  },
  {
    num: 'Tier 2',
    name: 'Impact Partnership',
    price: '$7,500–$20,000',
    tagline: 'We embed in your program cycle — operationalizing your data and building the evidence infrastructure that sustains your funding.',
    timeline: 'Program-cycle engagement',
    idealFor: null,
    includes: [
      'Outcome tracking system setup',
      'Longitudinal data operationalization',
      'Impact report (board + funder-ready)',
      'Up to two revision cycles',
    ],
    featured: true,
  },
  {
    num: 'Tier 3',
    name: 'Strategic Alliance',
    price: '$30,000+',
    tagline: 'Full evaluation architecture — from program design through multi-year funder narrative — built as an ongoing partnership.',
    timeline: 'Ongoing · Multi-year',
    idealFor: null,
    includes: [
      'Evaluation strategy',
      'Logic model development',
      'Data system build',
      'Annual reporting',
      'Retained consultation access',
    ],
    featured: false,
  },
];

export default function Tiers() {
  return (
    <section className={styles.tiers} id="tiers">
      <div className={styles.header}>
        <div className={styles.eyebrow}>How We Engage</div>
        <h2 className={styles.title}>
          The right scope<br />for where you are
        </h2>
        <p className={styles.subtitle}>
          Every engagement is fixed in scope and priced transparently — so you know exactly what
          you're getting before we begin.
        </p>
      </div>

      <div className={styles.grid}>
        {tiers.map((t) => (
          <div
            key={t.num}
            className={`${styles.card} ${t.featured ? styles.featured : ''}`}
          >
            {t.featured && <div className={styles.featuredBadge}>Most Common</div>}
            <div className={styles.tierLabel}>{t.num}</div>
            <div className={styles.tierName}>{t.name}</div>
            <div className={styles.price}>{t.price}</div>
            <p className={styles.tagline}>{t.tagline}</p>
            <div className={styles.timeline}>{t.timeline}</div>

            {t.idealFor && (
              <div className={styles.idealFor}>
                <span className={styles.idealLabel}>Ideal for:</span> {t.idealFor}
              </div>
            )}

            {t.includes && (
              <ul className={styles.includes}>
                {t.includes.map((item) => (
                  <li key={item} className={styles.includeItem}>
                    <span className={styles.check}>—</span>
                    {item}
                  </li>
                ))}
              </ul>
            )}

            <a
              href={`mailto:erica@measurementally.com?subject=${encodeURIComponent(`Inquiry — ${t.num}: ${t.name}`)}&body=${encodeURIComponent('Hi Dr. Tartt,\n\nOrganization:\nWhat we need:\nDeadline (if any):\nData we already have (even if messy):\n')}`}
              className={`${styles.btn} ${t.featured ? styles.btnFeatured : ''}`}
            >
              Start a Conversation
            </a>
          </div>
        ))}
      </div>

      <p className={styles.footnote}>
        Not sure which tier fits? We'll figure it out together.{' '}
        <a href="mailto:erica@measurementally.com">Send a message →</a>
      </p>
    </section>
  );
}
