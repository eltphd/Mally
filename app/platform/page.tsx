import Nav from '@/components/Nav';
import Footer from '@/components/Footer';
import styles from './platform.module.css';

export const metadata = {
  title: 'Platform — Measurement Ally',
  description:
    'Measurement Ally is building a suite of SaaS tools and ethical AI workflows for nonprofits, researchers, and community organizations.',
};

/* ─── CSS-only dashboard mockup ─── */
function DashboardMockup() {
  return (
    <div className={styles.mockupWrap} aria-hidden="true">
      {/* Browser chrome */}
      <div className={styles.browser}>
        <div className={styles.browserBar}>
          <div className={styles.browserDots}>
            <span /><span /><span />
          </div>
          <div className={styles.browserUrl}>app.measurementally.com</div>
          <div className={styles.browserSpacer} />
        </div>

        {/* App shell */}
        <div className={styles.appShell}>

          {/* Left sidebar */}
          <aside className={styles.sidebar}>
            <div className={styles.sidebarBrand}>Mally</div>
            <nav className={styles.sidebarNav}>
              <div className={`${styles.sidebarItem} ${styles.sidebarItemActive}`}>
                <span className={styles.sidebarDot} />Dashboard
              </div>
              <div className={styles.sidebarItem}>
                <span className={styles.sidebarDot} />Reports
              </div>
              <div className={styles.sidebarItem}>
                <span className={styles.sidebarDot} />Analytics
              </div>
              <div className={styles.sidebarItem}>
                <span className={styles.sidebarDot} />Data Sources
              </div>
              <div className={styles.sidebarItem}>
                <span className={styles.sidebarDot} />Settings
              </div>
            </nav>
          </aside>

          {/* Main area */}
          <main className={styles.appMain}>

            {/* Stat cards */}
            <div className={styles.statRow}>
              <div className={styles.statCard}>
                <div className={styles.statN}>34</div>
                <div className={styles.statL}>Reports generated</div>
              </div>
              <div className={styles.statCard}>
                <div className={`${styles.statN} ${styles.statNGold}`}>89%</div>
                <div className={styles.statL}>Outcome documented</div>
              </div>
              <div className={styles.statCard}>
                <div className={styles.statN}>6</div>
                <div className={styles.statL}>Years longitudinal</div>
              </div>
            </div>

            {/* Chart area */}
            <div className={styles.chartWrap}>
              <div className={styles.chartLabel}>Program reach · Year over year</div>
              <div className={styles.chartBars}>
                <div className={styles.chartRow}>
                  <span className={styles.chartYr}>2020</span>
                  <div className={styles.chartTrack}>
                    <div className={styles.chartFill} style={{ width: '38%' }} />
                  </div>
                  <span className={styles.chartVal}>2,100</span>
                </div>
                <div className={styles.chartRow}>
                  <span className={styles.chartYr}>2021</span>
                  <div className={styles.chartTrack}>
                    <div className={styles.chartFill} style={{ width: '52%' }} />
                  </div>
                  <span className={styles.chartVal}>3,900</span>
                </div>
                <div className={styles.chartRow}>
                  <span className={styles.chartYr}>2022</span>
                  <div className={styles.chartTrack}>
                    <div className={styles.chartFill} style={{ width: '68%' }} />
                  </div>
                  <span className={styles.chartVal}>6,200</span>
                </div>
                <div className={styles.chartRow}>
                  <span className={styles.chartYr}>2023</span>
                  <div className={styles.chartTrack}>
                    <div className={`${styles.chartFill} ${styles.chartFillGold}`} style={{ width: '100%' }} />
                  </div>
                  <span className={`${styles.chartVal} ${styles.chartValGold}`}>22,194</span>
                </div>
              </div>
            </div>

            {/* Bottom row: AI insight chip */}
            <div className={styles.insightRow}>
              <div className={styles.insightChip}>
                <span className={styles.insightPulse} />
                AI analysis ready · 3 narrative drafts available
              </div>
              <div className={styles.insightAction}>View report →</div>
            </div>

          </main>
        </div>
      </div>
    </div>
  );
}

/* ─── Page ─── */
export default function Platform() {
  return (
    <>
      <Nav />
      <div className={styles.page}>

        {/* Mockup hero section */}
        <section className={styles.mockupSection}>
          <DashboardMockup />
        </section>

        {/* Content section */}
        <section className={styles.contentSection}>
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
        </section>

      </div>
      <Footer />
    </>
  );
}
