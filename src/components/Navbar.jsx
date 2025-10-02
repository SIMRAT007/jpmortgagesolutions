import { useState } from 'react';

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
    }
    // Close mobile menu after navigation
    setIsMobileMenuOpen(false);
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className="w-full bg-[#EDE8D1] rounded-full shadow-md px-4 md:px-8 py-4 relative z-50">
      <div className="flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center space-x-2 md:space-x-3">
          <img 
            src="/src/assets/logo.jpeg" 
            alt="JP Mortgage Solutions Logo" 
            className="w-10 h-10 md:w-14 md:h-14 object-contain bg-white p-1 rounded-full shadow-sm"
          />
          <span className="text-sm md:text-lg font-bold tracking-wide text-[#152945]">
            <span className="hidden sm:inline">JP MORTGAGE SOLUTIONS</span>
            <span className="sm:hidden">JP MORTGAGE</span>
          </span>
        </div>

        {/* Desktop Links */}
        <ul className="hidden lg:flex space-x-6 xl:space-x-10 text-[#152945] font-medium">
          <li 
            onClick={() => scrollToSection('hero')}
            className="hover:text-[#E7CD87] cursor-pointer transition-colors"
          >
            HOME
          </li>
          <li 
            onClick={() => scrollToSection('about')}
            className="hover:text-[#E7CD87] cursor-pointer transition-colors"
          >
            ABOUT
          </li>
          <li 
            onClick={() => scrollToSection('services')}
            className="hover:text-[#E7CD87] cursor-pointer transition-colors"
          >
            SERVICES
          </li>
          <li 
            onClick={() => scrollToSection('team')}
            className="hover:text-[#E7CD87] cursor-pointer transition-colors"
          >
            OUR TEAM
          </li>
        </ul>

        {/* Desktop Button */}
        <button 
          onClick={() => scrollToSection('contact')}
          className="hidden md:block bg-[#152945] text-white font-medium px-4 lg:px-6 py-2 rounded-full hover:bg-[#E7CD87] hover:text-[#152945] transition-all duration-300 cursor-pointer text-sm lg:text-base"
        >
          <span className="hidden lg:inline">SEND US A MESSAGE</span>
          <span className="lg:hidden">CONTACT</span>
        </button>

        {/* Mobile Menu Button */}
        <button 
          onClick={toggleMobileMenu}
          className="lg:hidden flex flex-col items-center justify-center w-8 h-8 space-y-1 cursor-pointer"
          aria-label="Toggle mobile menu"
        >
          <div className={`w-6 h-0.5 bg-[#152945] transition-all duration-300 ${isMobileMenuOpen ? 'rotate-45 translate-y-1.5' : ''}`}></div>
          <div className={`w-6 h-0.5 bg-[#152945] transition-all duration-300 ${isMobileMenuOpen ? 'opacity-0' : ''}`}></div>
          <div className={`w-6 h-0.5 bg-[#152945] transition-all duration-300 ${isMobileMenuOpen ? '-rotate-45 -translate-y-1.5' : ''}`}></div>
        </button>
      </div>

      {/* Mobile Menu */}
      <div className={`lg:hidden absolute top-full left-0 right-0 mt-2 bg-[#EDE8D1] rounded-2xl shadow-xl transition-all duration-300 overflow-hidden z-50 ${
        isMobileMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
      }`}>
        <div className="p-6 space-y-4">
          {/* Mobile Navigation Links */}
          <div className="space-y-3">
            <div 
              onClick={() => scrollToSection('hero')}
              className="block py-3 px-4 text-[#152945] font-medium hover:bg-white hover:text-[#E7CD87] rounded-xl cursor-pointer transition-all duration-300"
            >
              HOME
            </div>
            <div 
              onClick={() => scrollToSection('about')}
              className="block py-3 px-4 text-[#152945] font-medium hover:bg-white hover:text-[#E7CD87] rounded-xl cursor-pointer transition-all duration-300"
            >
              ABOUT
            </div>
            <div 
              onClick={() => scrollToSection('services')}
              className="block py-3 px-4 text-[#152945] font-medium hover:bg-white hover:text-[#E7CD87] rounded-xl cursor-pointer transition-all duration-300"
            >
              SERVICES
            </div>
            <div 
              onClick={() => scrollToSection('team')}
              className="block py-3 px-4 text-[#152945] font-medium hover:bg-white hover:text-[#E7CD87] rounded-xl cursor-pointer transition-all duration-300"
            >
              OUR TEAM
            </div>
          </div>
          
          {/* Mobile Contact Button */}
          <button 
            onClick={() => scrollToSection('contact')}
            className="w-full bg-[#152945] text-white font-medium py-3 px-6 rounded-xl hover:bg-[#E7CD87] hover:text-[#152945] transition-all duration-300 cursor-pointer"
          >
            SEND US A MESSAGE
          </button>
        </div>
      </div>
    </nav>
  );
}