import Image from 'next/image';
import styles from './About.module.css';

const creds = [
  'PhD, University of California Santa Barbara — Quantitative Methodology, 2023',
  <>Co-author, <em>Psychological Methods</em> — &ldquo;Ten Frequently Asked Questions About Latent Transition Analysis&rdquo; (2023)</>,
  <>Dissertation: &ldquo;Unraveling an Epidemic of Hopelessness: A Latent Class Analysis of Black Adolescent Student Experiences&rdquo; — UC Santa Barbara, 2023</>,
  <>Manuscript under review, <em>Review of Research in Education</em> — AI-Assisted QuantCrit Meta-Synthesis</>,
  'Research Director, US-Squared Research Institute — 501(c)(3) education research nonprofit',
  '20+ years in education research, evaluation, and community-centered practice',
];

export default function About() {
  return (
    <section className={styles.about} id="about">
      <div>
        <div className={styles.eyebrow}>Founded By</div>
        <h2 className={styles.name}>Dr. Erica L. Tartt, PhD</h2>
        <p className={styles.body}>
          Measurement Ally was built on a simple observation:{' '}
          <strong>
            community organizations doing transformational work for youth are consistently
            underfunded because they can&rsquo;t prove impact in the language funders require.
          </strong>{' '}
          Not because the impact isn&rsquo;t there — because the measurement infrastructure
          isn&rsquo;t.
          <br />
          <br />
          Dr. Tartt&rsquo;s doctoral research used Latent Class Analysis on over 7,000 Black
          adolescents drawn from national CDC data — demonstrating that the patterns of suppressed
          resilience and unrecognized brilliance are structural, not individual. That research is the
          foundation of every evaluation framework Measurement Ally builds.
        </p>
        <div className={styles.creds}>
          {creds.map((c, i) => (
            <div key={i} className={styles.credItem}>
              <div className={styles.credDot} />
              <div className={styles.credText}>{c}</div>
            </div>
          ))}
        </div>
      </div>

      <div className={styles.photoColumn}>
        <div className={styles.photoWrap}>
          <Image
            src="/dr-tartt.png"
            alt="Dr. Erica L. Tartt, PhD — Founder & CEO, Measurement Ally"
            width={480}
            height={600}
            className={styles.photo}
            priority
          />
          <div className={styles.photoCaption}>
            Dr. Erica L. Tartt, PhD<br />
            <span>Founder &amp; CEO · Measurement Ally</span>
          </div>
        </div>
      </div>
    </section>
  );
}
