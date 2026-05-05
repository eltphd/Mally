import Nav from '@/components/Nav';
import Hero from '@/components/Hero';
import StatementBand from '@/components/StatementBand';
import Services from '@/components/Services';
import CaseStudy from '@/components/CaseStudy';
import Difference from '@/components/Difference';
import About from '@/components/About';
import CtaSection from '@/components/CtaSection';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <>
      <Nav />
      <Hero />
      <StatementBand />
      <Services />
      <CaseStudy />
      <Difference />
      <About />
      <CtaSection />
      <Footer />
    </>
  );
}
