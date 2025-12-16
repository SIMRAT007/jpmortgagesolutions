import { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
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
import AdminLogin from "./components/admin/AdminLogin";
import AdminDashboard from "./components/admin/AdminDashboard";
import ProtectedRoute from "./components/admin/ProtectedRoute";

function HomePage() {
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

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/admin/login" element={<AdminLogin />} />
        <Route 
          path="/admin/dashboard" 
          element={
            <ProtectedRoute>
              <AdminDashboard />
            </ProtectedRoute>
          } 
        />
      </Routes>
    </Router>
  );
}
