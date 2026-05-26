import styles from './Footer.module.css';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.logo}>
        Measurement<span className={styles.logoAccent}> Ally</span>
      </div>
      <div className={styles.copyWrap}>
        <div className={styles.copy}>© 2026 Measurement Ally · Canal Winchester, OH</div>
        <div className={styles.legal}>
          US-Squared Research Institute (USS²) and Measurement Ally are separate legal entities.
          Measurement Ally is a for-profit company. Research insights from USS² may inform product
          design where appropriate and with safeguards.
        </div>
      </div>
      <div className={styles.links}>
        <a href="/#services">Services</a>
        <a href="/work">Work</a>
        <a href="/#about">About</a>
        <a href="/#contact">Contact</a>
      </div>
    </footer>
  );
}
