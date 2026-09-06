import Nav from '@/components/Nav';
import Footer from '@/components/Footer';
import styles from './portal.module.css';

export const metadata = {
  title: 'Private Client Portal — Measurement Ally',
  description:
    'Every Measurement Ally engagement comes with a private client portal: where things stand, what needs you, and nothing else. Request one for your organization.',
};

const PORTAL_URL = 'https://app.measurementally.com';

const requestHref = `mailto:erica@measurementally.com?subject=${encodeURIComponent(
  'Request a client portal — Measurement Ally',
)}&body=${encodeURIComponent(
  'Hi Dr. Tartt,\n\nOrganization:\nWhat we would track (grants, a manuscript, program outcomes, other):\nCurrent funders or deadlines:\nWho needs to see it:\nBest way to reach me:\n',
)}`;

const doors = [
  {
    kicker: 'Grants',
    name: 'Every application, where it stands',
    body: 'Stage and dollars for each request, deadlines for the next 60 days, compliance documents that flag themselves before a funder sees them, and organization facts verified once and reused everywhere.',
  },
  {
    kicker: 'Manuscripts',
    name: 'A reading room for your book',
    body: 'One part per screen, every word exactly as you wrote it, the editor’s notes in the margin, and Keep / Cut / Move buttons that record your call the moment you press one.',
  },
  {
    kicker: 'Evaluation',
    name: 'Outcomes over years, not one cycle',
    body: 'Program results on the BASE Framework, traceable to the voice, form or file they came from, ready for a board deck or a funder report.',
  },
  {
    kicker: 'Witness',
    name: 'A weekly board for one person',
    body: 'Four short statuses and a note, shared with one person you trust, on a link with no login. Built for the work that only gets finished when someone is looking with love.',
  },
];

const steps = [
  {
    n: '1',
    name: 'We build it from what you already have',
    body: 'Your tracker, your documents, your data. Nothing is retyped and nothing is invented. The portal reads from the same record we work in.',
  },
  {
    n: '2',
    name: 'You sign in with your email',
    body: 'No password, no software. A sign-in link arrives within a minute. Save the portal to your phone and it opens like an app.',
  },
  {
    n: '3',
    name: 'A person approves before anything posts',
    body: 'Every update is drafted, then approved by a human, then published to your door. The first thing you see is what is waiting on you. If it is empty, you are clear.',
  },
];

export default function PortalPage() {
  return (
    <>
      <Nav />

      <section className={styles.hero}>
        <div className={styles.heroInner}>
          <div className={styles.eyebrow}>MALLY &middot; Private Client Portal</div>
          <h1 className={styles.title}>
            Your own door<br />into the work.
          </h1>
          <p className={styles.sub}>
            Every Measurement Ally engagement comes with a private portal: where things stand, what needs
            you, and nothing else. One link, no password, opens on your phone.
          </p>
          <div className={styles.actions}>
            <a href={requestHref} className={styles.btnPrimary}>Request a Portal</a>
            <a href={PORTAL_URL} className={styles.btnGhost}>Client Sign-In</a>
          </div>
          <div className={styles.trust}>
            <span>Grants &middot; Manuscripts &middot; Evaluation &middot; Witness boards</span>
          </div>
        </div>
      </section>

      <section className={styles.doors}>
        <div className={styles.sectionHead}>
          <div className={styles.eyebrowDark}>What Your Door Opens Onto</div>
          <h2 className={styles.h2}>
            One platform.<br />A different room for every kind of work.
          </h2>
          <p className={styles.lede}>
            The engagement decides what you see. An executive director sees grants. An author sees a
            book. Nobody sees another client&rsquo;s work, ever.
          </p>
        </div>
        <div className={styles.grid}>
          {doors.map((d) => (
            <div key={d.kicker} className={styles.card}>
              <div className={styles.kicker}>{d.kicker}</div>
              <div className={styles.cardName}>{d.name}</div>
              <p className={styles.cardBody}>{d.body}</p>
            </div>
          ))}
        </div>
      </section>

      <section className={styles.how}>
        <div className={styles.sectionHead}>
          <div className={styles.eyebrowDark}>How It Works</div>
          <h2 className={styles.h2}>Three things, and nothing to learn.</h2>
        </div>
        <ol className={styles.steps}>
          {steps.map((s) => (
            <li key={s.n} className={styles.step}>
              <div className={styles.stepN}>{s.n}</div>
              <div>
                <div className={styles.stepName}>{s.name}</div>
                <p className={styles.stepBody}>{s.body}</p>
              </div>
            </li>
          ))}
        </ol>
      </section>

      <section className={styles.offer}>
        <div className={styles.sectionHead}>
          <div className={styles.eyebrowDark}>How To Get One</div>
          <h2 className={styles.h2}>Included with a partnership.<br />Available on retainer.</h2>
        </div>
        <div className={styles.offerGrid}>
          <div className={styles.offerCard}>
            <div className={styles.kicker}>Included</div>
            <div className={styles.offerName}>Impact Partnership and Strategic Alliance</div>
            <p className={styles.cardBody}>
              Every program-cycle or multi-year engagement comes with a portal from day one. Your
              tracker, documents and updates live there for the life of the work.
            </p>
            <a href="/#tiers" className={styles.textLink}>See engagement tiers &rarr;</a>
          </div>
          <div className={`${styles.offerCard} ${styles.offerFeatured}`}>
            <div className={styles.kicker}>Portal Retainer</div>
            <div className={styles.offerName}>Already funded and just need the door?</div>
            <p className={styles.cardBody}>
              A monthly retainer keeps your grant tracker, compliance documents and client updates
              current, with a person approving every post. Scoped in one call, priced to what you
              actually track.
            </p>
            <a href={requestHref} className={styles.btnPrimarySmall}>Ask About a Retainer</a>
          </div>
          <div className={styles.offerCard}>
            <div className={styles.kicker}>Not Sure Yet</div>
            <div className={styles.offerName}>Start with an Evidence Sprint</div>
            <p className={styles.cardBody}>
              Two weeks, fixed scope, one deliverable, and a written go or no-go on what a portal
              would hold for you.
            </p>
            <a href="/#tiers" className={styles.textLink}>Evidence Sprint &rarr;</a>
          </div>
        </div>
      </section>

      <section className={styles.cta}>
        <h2 className={styles.ctaHeadline}>Ready for a door of your own?</h2>
        <p className={styles.ctaSub}>
          Tell us what you track and who needs to see it. We reply with what the portal would hold and
          what it would cost.
        </p>
        <div className={styles.actions}>
          <a href={requestHref} className={styles.btnPrimary}>Request a Portal</a>
        </div>
        <p className={styles.ctaFine}>
          Already a client? <a href={PORTAL_URL}>Sign in at app.measurementally.com</a>
        </p>
      </section>

      <Footer />
    </>
  );
}
