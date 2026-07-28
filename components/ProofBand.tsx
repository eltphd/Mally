import styles from './ProofBand.module.css';

const stats = [
  { n: '7', l: 'Organizations aligned — applicant, subrecipients, clinical and school partners' },
  { n: '3', l: 'Ohio county sites structured into one coordinated program design' },
  { n: '19', l: 'Days from first working meeting to submitted federal application' },
];

export default function ProofBand() {
  return (
    <section className={styles.proof} aria-label="Most recent engagement">
      <div className={styles.header}>
        <div className={styles.eyebrow}>Most Recent Build · July 2026</div>
        <h2 className={styles.title}>
          First meeting to submitted federal application —{' '}
          <span className={styles.titleAccent}>in 19 days.</span>
        </h2>
        <p className={styles.body}>
          A seven-organization coalition serving youth mental health across three Ohio counties.
          One multi-year federal application: full narratives, budget architecture, subaward
          structure, attachments, and live portal submission — with the evaluation plan designed
          in from page one, not bolted on at reporting time.
        </p>
        <p className={styles.insight}>
          Every fact the application needed already lived in the partnership — the letters, the
          numbers, the credentials, the relationships. Our work was assembling it in the register
          funders require. <em>Your partnership is already the grant infrastructure. We make it
          fundable.</em>
        </p>
      </div>

      <div className={styles.stats}>
        {stats.map((s) => (
          <div key={s.n} className={styles.stat}>
            <div className={styles.statN}>{s.n}</div>
            <div className={styles.statL}>{s.l}</div>
          </div>
        ))}
      </div>
    </section>
  );
}
