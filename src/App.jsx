import { useEffect } from "react";
import { 
  Hero, 
  ProcessSection,
  ServicesAbout,
  WhyTrustUs,
  MortgageServices,
  MortgageRoadmap,
  TeamSection,
  ContactSection,
  MortgageCalculator,
  Footer,
  Navbar 
} from "./components";

export default function App() {
  useEffect(() => {
    // Simple scroll to top on page load only
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
    
    // Disable scroll restoration
    if ('scrollRestoration' in history) {
      history.scrollRestoration = 'manual';
    }
  }, []);

  return (
    <div className="font-sans">
      {/* Fixed Mobile Navbar */}
      <div className="navbar-container fixed top-2 left-1 right-1 sm:top-5 sm:left-2 sm:right-2 z-50 w-[95%] mx-auto">
        <Navbar />
      </div>
      
      <main>
        <Hero />
        <ProcessSection />
        <ServicesAbout />
        <WhyTrustUs />
        <MortgageServices />
        <MortgageRoadmap />
        <TeamSection />
        <ContactSection />
        <MortgageCalculator />
        <Footer />
      </main>
    </div>
  );
}
