import styles from './StatementBand.module.css';

export default function StatementBand() {
  return (
    <div className={styles.band}>
      <div className={styles.mark}>&ldquo;</div>
      <div>
        <div className={styles.text}>
          Most evaluation tools are built to find what&rsquo;s missing. Ours are built to find
          what&rsquo;s present.
        </div>
        <div className={styles.attr}>
          Dr. Erica L. Tartt, PhD — Founder, Measurement Ally
        </div>
      </div>
    </div>
  );
}
