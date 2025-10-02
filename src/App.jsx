import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
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

gsap.registerPlugin(ScrollTrigger);

export default function App() {
  const heroRef = useRef(null);
  const processSectionRef = useRef(null);
  const servicesAboutRef = useRef(null);
  const whyTrustUsRef = useRef(null);
  const mortgageServicesRef = useRef(null);
  const mortgageRoadmapRef = useRef(null);
  const teamSectionRef = useRef(null);
  const contactSectionRef = useRef(null);
  const mortgageCalculatorRef = useRef(null);
  const smartPlansRef = useRef(null);
  const flexibleRatesRef = useRef(null);
  const trustedSupportRef = useRef(null);
  const footerRef = useRef(null);

  useEffect(() => {
    // Force scroll to absolute top with multiple methods
    const scrollToTop = () => {
      // Method 1: Direct window scroll
      window.scrollTo({
        top: 0,
        left: 0,
        behavior: 'instant'
      });
      
      // Method 2: Document scroll
      document.documentElement.scrollTop = 0;
      document.body.scrollTop = 0;
      
      // Method 3: Set scroll position on body
      document.body.style.scrollTop = '0px';
      document.documentElement.style.scrollTop = '0px';
    };

    // Execute immediately
    scrollToTop();
    
    // Execute after a brief delay to ensure DOM is ready
    setTimeout(scrollToTop, 10);
    
    // Execute after animations might have started
    setTimeout(scrollToTop, 100);
    
    // Add window load event listener for additional safety
    const handleWindowLoad = () => {
      scrollToTop();
    };
    
    window.addEventListener('load', handleWindowLoad);
    
    // Disable scroll restoration
    if ('scrollRestoration' in history) {
      history.scrollRestoration = 'manual';
    }

    const refs = [
      heroRef, 
      processSectionRef, 
      servicesAboutRef, 
      whyTrustUsRef, 
      mortgageServicesRef,
      mortgageRoadmapRef,
      teamSectionRef,
      contactSectionRef,
      mortgageCalculatorRef,
      smartPlansRef, 
      flexibleRatesRef, 
      trustedSupportRef,
      footerRef
    ];
    
    refs.forEach((ref) => {
      if (!ref.current) return;
      
      gsap.fromTo(
        ref.current,
        { opacity: 0, y: 100 },
        {
          opacity: 1,
          y: 0,
          duration: 1.2,
          scrollTrigger: {
            trigger: ref.current,
            start: "top 80%", // when section hits 80% of viewport
            toggleActions: "play none none reverse",
          },
        }
      );
    });

    // Cleanup
    return () => {
      window.removeEventListener('load', handleWindowLoad);
    };
  }, []);

  return (
    <div className="font-sans min-h-screen">
      {/* Fixed Mobile Navbar */}
      <div className="md:hidden fixed top-2 left-2 right-2 z-50">
        <Navbar />
      </div>
      
      <div className="flex flex-col min-h-screen">
        <div className="flex-1">
          <Hero ref={heroRef} />
          <ProcessSection ref={processSectionRef} />
          <ServicesAbout ref={servicesAboutRef} />
          <WhyTrustUs ref={whyTrustUsRef} />
          <MortgageServices ref={mortgageServicesRef} />
          <MortgageRoadmap ref={mortgageRoadmapRef} />
          <TeamSection ref={teamSectionRef} />
          <ContactSection ref={contactSectionRef} />
          <MortgageCalculator ref={mortgageCalculatorRef} />
        </div>
        <Footer ref={footerRef} />
      </div>
    </div>
  );
}
