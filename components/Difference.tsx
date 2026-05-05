import styles from './Difference.module.css';

const items = [
  {
    num: '01',
    title: 'Justice-Centered Methodology',
    body: 'Our evaluation frameworks are built on QuantCrit methodology — a justice-centered approach that asks not "what is missing?" but "what is present?" When measurement tools are designed to find deficits, they find deficits. Ours are designed to surface the brilliance already in your data.',
  },
  {
    num: '02',
    title: 'Longitudinal by Design',
    body: "Single-year snapshots don't build funder trust. Trend data does. We build outcome tracking systems that show your growth over time — giving funders the evidence they need to make multi-year investments in your work, not just one-cycle grants.",
  },
  {
    num: '03',
    title: 'Two Languages. One Report.',
    body: "Your community knows what you do. Your funders need to see how you know it works. We write in both registers simultaneously — so your impact report feels true to your voice and passes rigorous funder review. You don't have to choose between the two.",
  },
];

export default function Difference() {
  return (
    <section className={styles.difference}>
      <div>
        <div className={styles.eyebrow}>The Measurement Ally Difference</div>
        <h2 className={styles.title}>
          Built differently.<br />On purpose.
        </h2>
      </div>
      <div className={styles.grid}>
        {items.map((item) => (
          <div key={item.num} className={styles.item}>
            <div className={styles.num}>{item.num}</div>
            <div className={styles.itemTitle}>{item.title}</div>
            <div className={styles.itemBody}>{item.body}</div>
          </div>
        ))}
      </div>
    </section>
  );
}
