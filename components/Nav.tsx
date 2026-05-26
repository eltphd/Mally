import styles from './Nav.module.css';

export default function Nav() {
  return (
    <nav className={styles.nav}>
      <div className={styles.logo}>
        Measurement<span className={styles.logoAccent}> Ally</span>
      </div>
      <div className={styles.links}>
        <a href="/#services">Services</a>
        <a href="/work">Our Work</a>
        <a href="/#about">About</a>
        <a href="/platform">Platform</a>
        <a href="/#contact" className={styles.cta}>Start a Conversation</a>
      </div>
    </nav>
  );
}
