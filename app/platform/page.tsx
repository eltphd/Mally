import styles from './platform.module.css';

export const metadata = {
  title: 'Platform — Measurement Ally',
  description:
    'Measurement Ally is building a suite of SaaS tools and ethical AI workflows for nonprofits, researchers, and community organizations.',
};

export default function Platform() {
  return (
    <main className={styles.page}>
      <div className={styles.inner}>
        <div className={styles.eyebrow}>In Development</div>
        <h1 className={styles.headline}>
          The infrastructure layer between community knowledge and the capital that should follow it.
        </h1>
        <p className={styles.body}>
          Measurement Ally is building a suite of SaaS tools and ethical AI workflows for nonprofits,
          researchers, and community organizations — moving evaluation from one-off reports to living,
          longitudinal systems.
        </p>
        <ul className={styles.list}>
          <li>Data ingestion and knowledge systems</li>
          <li>Ethical AI-assisted analysis and synthesis</li>
          <li>Research-aligned measurement tooling</li>
          <li>Grant and reporting automation infrastructure</li>
        </ul>
        <div className={styles.deliveryModes}>
          Delivery modes: SaaS tools · Custom builds · Licensed systems
        </div>
        <div className={styles.statusRow}>
          <span className={styles.badge}>In active development</span>
          <span className={styles.statusText}>
            Available for early partnership conversations.
          </span>
        </div>
        <a href="/#contact" className={styles.cta}>
          Talk to us about early access
        </a>
      </div>
    </main>
  );
}
