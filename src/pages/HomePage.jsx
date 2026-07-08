import HeroSection from '../components/landing/HeroSection';
import AboutSection from '../components/landing/AboutSection';
import WorksSection from '../components/landing/WorksSection';
import ContactSection from '../components/landing/ContactSection';
import Footer from '../components/common/Footer';

function HomePage() {
  return (
    <>
      <HeroSection />
      <AboutSection />
      <WorksSection />
      <ContactSection />
      <Footer />
    </>
  );
}

export default HomePage;
