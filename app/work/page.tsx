import type { Metadata } from 'next';
import Nav from '@/components/Nav';
import Footer from '@/components/Footer';
import styles from './work.module.css';

export const metadata: Metadata = {
  title: 'Our Work — Measurement Ally',
  description:
    'Applied research reports, funder briefs, and data narratives built for community mental health organizations. Browse the work before you reach out.',
  keywords: [
    'community mental health research reports',
    'funder brief data visualization',
    'NAMI Franklin County Mental Health First Aid',
    'Black youth mental health Ohio',
    'measurement ally portfolio',
    'Dr. Erica Tartt research',
  ],
};

/* ─── Data ─── */
type Format = 'Interactive' | 'PDF';

interface PortfolioItem {
  id: string;
  partner: string;
  partnerSub: string;
  type: string;
  year: string;
  title: string;
  description: string;
  metrics: { value: string; label: string }[];
  tags: string[];
  format: Format;
  href: string;
  previewBg: string;
  accentHex: string;
}

const WORK: PortfolioItem[] = [
  {
    id: 'nami-mhfa-brief',
    partner: 'NAMI Franklin County',
    partnerSub: 'Mental Health First Aid Program · Franklin County, OH',
    type: 'Funder Brief',
    year: '2026',
    title: "Building Franklin County's Frontline Mental Health Response Network",
    description:
      'Four years of Mental Health First Aid training data — completions, demographic equity, and delivery consistency across six bi-monthly periods — turned into a compelling investment case. Designed to convert funders before the first meeting by demonstrating that the hard work is already done, and the network is ready to scale.',
    metrics: [
      { value: '862',  label: 'Community members trained' },
      { value: '149%', label: 'Growth 2022–2025' },
      { value: '62%',  label: 'Participants of color' },
    ],
    tags: ['Mental Health First Aid', 'Longitudinal Data', 'Equity Analysis', 'Franklin County'],
    format: 'Interactive',
    href: '/work/nami-mhfa-brief.html',
    previewBg: 'linear-gradient(160deg, #0b1628 0%, #14213D 55%, #1e3060 100%)',
    accentHex: '#FCA311',
  },
  {
    id: 'ohmas-research',
    partner: 'OHMAS',
    partnerSub: 'Ohio Healthy Minds Adolescent Study · Statewide',
    type: 'Research Report',
    year: '2024',
    title: 'Research2Conversation: A Community-Led Initiative on Black Adolescent Suicide in Ohio',
    description:
      "Community engagement documentation spanning Columbus, Cincinnati, and Cleveland. Translates alarming Black youth suicide statistics — a 36% rise in the past decade among ages 10–19 — into accessible narratives co-created with educators, parents, faith leaders, behavioral health professionals, and youth. Built to drive policy and practice alignment across stakeholder groups.",
    metrics: [
      { value: '3',   label: 'Ohio cities engaged' },
      { value: '5+',  label: 'Distinct stakeholder groups' },
      { value: '36%', label: 'Rise in Black youth suicide rates cited' },
    ],
    tags: ['Black Youth Mental Health', 'Community Engagement', 'Ohio', 'Policy Alignment'],
    format: 'PDF',
    href: '/work/ohmas-research.pdf',
    previewBg: 'linear-gradient(160deg, #08060f 0%, #0D0B1A 50%, #1a0f2e 100%)',
    accentHex: '#9B7FD4',
  },
];

/* ─── Card preview ─── */
function CardPreview({ item }: { item: PortfolioItem }) {
  return (
    <div
      className={styles.cardPreview}
      style={{ background: item.previewBg }}
      aria-hidden="true"
    >
      {/* Ghost big number for texture */}
      <span className={styles.previewGhost}>{item.metrics[0].value}</span>

      {/* Type badge + year */}
      <div className={styles.cardPreviewBadges}>
        <span className={styles.typeBadge}>{item.type}</span>
        <span className={styles.yearBadge}>{item.year}</span>
      </div>

      {/* Mini stat strip */}
      <div className={styles.previewStats}>
        {item.metrics.map((m) => (
          <div key={m.label} className={styles.previewStat}>
            <div
              className={styles.previewStatN}
              style={{ color: item.accentHex }}
            >
              {m.value}
            </div>
            <div className={styles.previewStatL}>{m.label}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

/* ─── Portfolio card ─── */
function WorkCard({ item }: { item: PortfolioItem }) {
  const isInteractive = item.format === 'Interactive';

  return (
    <article className={styles.card}>
      <CardPreview item={item} />

      <div className={styles.cardBody}>
        {/* Partner */}
        <div className={styles.cardPartner}>{item.partner}</div>
        <div className={styles.cardPartnerSub}>{item.partnerSub}</div>

        {/* Title */}
        <div className={styles.cardTitle}>&ldquo;{item.title}&rdquo;</div>

        {/* Description */}
        <p className={styles.cardDesc}>{item.description}</p>

        {/* Tags */}
        <div className={styles.cardTags}>
          {item.tags.map((tag) => (
            <span key={tag} className={styles.tag}>{tag}</span>
          ))}
        </div>

        {/* Footer */}
        <div className={styles.cardFooter}>
          <span
            className={`${styles.formatBadge} ${
              isInteractive ? styles.formatInteractive : styles.formatPdf
            }`}
          >
            {isInteractive ? '⚡ Interactive' : '⬇ PDF'}
          </span>

          <a
            href={item.href}
            target={isInteractive ? '_blank' : undefined}
            rel={isInteractive ? 'noopener noreferrer' : undefined}
            className={styles.cardCta}
            aria-label={`View full ${item.type.toLowerCase()}: ${item.partner}`}
          >
            View the work
            <svg
              className={styles.cardCtaArrow}
              width="15"
              height="15"
              viewBox="0 0 15 15"
              fill="none"
              aria-hidden="true"
            >
              <path
                d="M2.5 7.5h10M9 3.5l4 4-4 4"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </a>
        </div>
      </div>
    </article>
  );
}

/* ─── Page ─── */
export default function WorkPage() {
  return (
    <div className={styles.page}>
      <Nav />

      {/* Hero */}
      <section className={styles.hero} aria-label="Portfolio overview">
        <div className={styles.heroInner}>
          <p className={styles.eyebrow}>Measurement Ally · Partner Portfolio</p>
          <h1 className={styles.heroHeadline}>
            The work,{' '}
            <span className={styles.heroHeadlineItalic}>in full.</span>
          </h1>
          <p className={styles.heroSub}>
            Reports, funder briefs, and research narratives built for community mental health
            organizations — the kind of evidence that opens doors, moves boards, and sustains
            the work. Browse everything before you reach out.
          </p>
        </div>
      </section>

      {/* Portfolio grid */}
      <section className={styles.portfolioSection} aria-label="Portfolio items">
        <div className={styles.portfolioMeta}>
          <span className={styles.portfolioCount}>
            {WORK.length} pieces &mdash; most recent first
          </span>
        </div>

        <div className={styles.portfolioGrid}>
          {WORK.map((item) => (
            <WorkCard key={item.id} item={item} />
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className={styles.ctaSection} aria-label="Work with Measurement Ally">
        <p className={styles.ctaEyebrow}>Work with Dr. Tartt</p>
        <h2 className={styles.ctaHeadline}>
          Every piece starts with{' '}
          <span className={styles.ctaHeadlineItalic}>a conversation.</span>
        </h2>
        <p className={styles.ctaBody}>
          Research reports, funder briefs, community dashboards, and longitudinal narratives —
          built from the data you already have. If what you saw above resonates, let&rsquo;s talk.
        </p>
        <div className={styles.ctaButtons}>
          <a
            href="mailto:erica@measurementally.com?subject=Partnership%20Inquiry"
            className={styles.ctaBtnPrimary}
          >
            Start a Conversation →
          </a>
          <a href="/#services" className={styles.ctaBtnGhost}>
            See All Services
          </a>
        </div>
        <p className={styles.ctaEmail}>erica@measurementally.com</p>
      </section>

      <Footer />
    </div>
  );
}
