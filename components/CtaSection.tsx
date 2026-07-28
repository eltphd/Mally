import styles from './CtaSection.module.css';

export default function CtaSection() {
  return (
    <section className={styles.cta} id="contact">
      <h2 className={styles.headline}>
        Ready to make your<br />impact impossible to ignore?
      </h2>
      <p className={styles.sub}>
        Let&rsquo;s start with a conversation about what you&rsquo;re trying to prove and who needs
        to see it.
      </p>
      <div className={styles.actions}>
        <a
          href={`mailto:erica@measurementally.com?subject=${encodeURIComponent('Measurement Ally — Start a Conversation')}&body=${encodeURIComponent('Hi Dr. Tartt,\n\nOrganization:\nWhat we need:\nDeadline (if any):\nData we already have (even if messy):\n')}`}
          className={styles.btnPrimary}
        >
          Send a Message
        </a>
      </div>
      <div className={styles.contactRow}>
        <div className={styles.contactItem}>
          <div className={styles.contactLabel}>Email</div>
          <div className={styles.contactValue}>erica@measurementally.com</div>
        </div>
        <div className={styles.contactItem}>
          <div className={styles.contactLabel}>Phone</div>
          <div className={styles.contactValue}>614.647.4554</div>
        </div>
        <div className={styles.contactItem}>
          <div className={styles.contactLabel}>Web</div>
          <div className={styles.contactValue}>measurementally.com</div>
        </div>
      </div>
    </section>
  );
}
