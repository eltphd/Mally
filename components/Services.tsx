import styles from './Services.module.css';

const services = [
  {
    num: '01',
    name: 'Impact Reports',
    desc: "Big, clear, board-ready narratives that visualize your program's reach and outcomes over time. Not just what happened this year — what your work has built across years. Designed to be shared, presented, and remembered.",
    tag: 'Annual · Multi-year · Longitudinal',
  },
  {
    num: '02',
    name: 'Funder-Ready Data Narratives',
    desc: 'We translate your outcomes into the language grant makers require — evidence-based, methodologically sound, and compelling. The same story, told in the register that survives a program officer\'s scrutiny.',
    tag: 'Grant Reports · LOI Support · Funder Briefs',
  },
  {
    num: '03',
    name: 'Outcome Tracking Systems',
    desc: "You've been collecting data for years. SurveyMonkey responses, intake forms, attendance records. We operationalize what you already have — building systems that surface patterns, track progress, and produce reports without starting from scratch every cycle.",
    tag: 'Data Systems · Survey Analysis · Dashboards',
  },
  {
    num: '04',
    name: 'Strategic Consultation',
    desc: "Program design, evaluation strategy, logic model development. We think with you — about what you're trying to prove, what you're measuring, and how to structure your work so the evidence builds naturally. This is the conversation most evaluation firms skip. We turn validated research and real-world needs into working systems, not abstract theory.",
    tag: 'Logic Models · Program Design · Strategy',
  },
];

export default function Services() {
  return (
    <section className={styles.services} id="services">
      <div className={styles.header}>
        <div>
          <div className={styles.eyebrow}>What We Do</div>
          <h2 className={styles.title}>
            Four ways we turn<br />your work into evidence
          </h2>
        </div>
        <div className={styles.headerBody}>
          We embed early — before the grant is written, before the program launches — so measurement
          is built in from the start, not scrambled at reporting time. Every engagement is designed
          to produce something you can actually use.
        </div>
      </div>

      <div className={styles.grid}>
        {services.map((s) => (
          <div key={s.num} className={styles.item}>
            <div className={styles.num}>{s.num}</div>
            <div className={styles.name}>{s.name}</div>
            <div className={styles.desc}>{s.desc}</div>
            <div className={styles.tag}>{s.tag}</div>
          </div>
        ))}
      </div>
    </section>
  );
}
