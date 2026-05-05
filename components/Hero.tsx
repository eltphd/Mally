import styles from './Hero.module.css';

export default function Hero() {
  return (
    <section className={styles.hero}>
      <div className={styles.left}>
        <div className={styles.eyebrow}>Community Impact · Evidence-Based Practice</div>
        <h1 className={styles.headline}>
          Your data is already<br />
          telling a story.<br />
          <em>Let&rsquo;s make your<br />funders hear it.</em>
        </h1>
        <p className={styles.body}>
          You do transformational work. Measurement Ally translates what you do into the language
          that sustains it — rigorous, human, funder-ready evidence built from the data you already
          have.
        </p>
        <div className={styles.actions}>
          <a href="#contact" className={styles.btnPrimary}>Start a Conversation</a>
          <a href="#work" className={styles.btnGhost}>See our work</a>
        </div>
      </div>

      <div className={styles.right}>
        <div className={styles.statRow}>
          <div className={styles.statNumber}>
            22,194<sup>+</sup>
          </div>
          <div className={styles.statLabel}>Young people whose impact we&rsquo;ve helped make visible</div>
          <div className={styles.statSource}>NAMI Franklin County — Ending the Silence Program</div>
        </div>
        <div className={styles.statRow}>
          <div className={styles.statNumber}>6</div>
          <div className={styles.statLabel}>
            Years of untouched SurveyMonkey data — operationalized into a longitudinal impact report
          </div>
          <div className={styles.statSource}>From surveys to board-ready narrative</div>
        </div>
        <div className={`${styles.statRow} ${styles.statRowLast}`}>
          <div className={styles.statNumber}>
            200<sup>%</sup>
          </div>
          <div className={styles.statLabel}>
            Post-COVID program growth — documented, visualized, funder-ready
          </div>
          <div className={styles.statSource}>NAMI Franklin County, 2021–2025</div>
        </div>
      </div>
    </section>
  );
}
