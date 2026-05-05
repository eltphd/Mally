import styles from './CaseStudy.module.css';

const metrics = [
  {
    n: <>22,194<span className={styles.metricSmall}>+</span></>,
    l: 'Total participants served across all years — made visible in one place for the first time',
  },
  {
    n: '90%',
    l: 'Of youth participants know warning signs of mental health conditions — a core program goal, now documented longitudinally',
  },
  {
    n: <>30<span className={styles.metricSmall}>+</span></>,
    l: 'Partner schools across Central Ohio — reach visualized for the first time in program history',
  },
  {
    n: '6',
    l: "Years of previously unoperationalized data — now a longitudinal narrative their funders can follow",
  },
];

export default function CaseStudy() {
  return (
    <section className={styles.caseStudy} id="work">
      <div>
        <div className={styles.eyebrow}>Client Story</div>
        <div className={styles.org}>NAMI Franklin County</div>
        <div className={styles.subtitle}>
          Central Ohio · Mental Health Education · Youth-Serving Nonprofit
        </div>
        <p className={styles.body}>
          NAMI Franklin County had been running their <em>Ending the Silence</em> program since 2018
          — collecting SurveyMonkey responses from every school visit, every year. The data existed.{' '}
          <strong>The story didn&rsquo;t.</strong>
          <br />
          <br />
          Measurement Ally operationalized six years of participant data into a longitudinal impact
          report documenting program reach, learning outcomes, demographic representation, and
          year-over-year growth across more than 30 Central Ohio schools. The result was a
          board-ready, funder-ready, community-ready document that made{' '}
          <strong>200% post-COVID program growth</strong> visible for the first time.
        </p>
        <div className={styles.insight}>
          &ldquo;They had years of SurveyMonkey responses sitting in an account. We turned it into a
          story their board could present, their funders could trust, and their community could be
          proud of.&rdquo;
        </div>
      </div>

      <div className={styles.metrics}>
        {metrics.map((m, i) => (
          <div key={i} className={i === metrics.length - 1 ? `${styles.metric} ${styles.metricLast}` : styles.metric}>
            <div className={styles.metricN}>{m.n}</div>
            <div className={styles.metricL}>{m.l}</div>
          </div>
        ))}
      </div>
    </section>
  );
}
