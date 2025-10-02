import { useEffect, useRef, forwardRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Footer = forwardRef((props, ref) => {
  const contentRef = useRef(null);

  useEffect(() => {
    if (contentRef.current) {
      gsap.fromTo(
        contentRef.current,
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: "power2.out",
          scrollTrigger: {
            trigger: ref?.current || contentRef.current,
            start: "top 90%",
            toggleActions: "play none none reverse",
          },
        }
      );
    }
  }, [ref]);

  return (
    <footer ref={ref} className="bg-[#152945] text-white py-16 relative z-10">
      <div ref={contentRef} className="max-w-7xl mx-auto px-8 lg:px-16">
        {/* Main Footer Content */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12 mb-12">
          
          {/* Company Info */}
          <div className="lg:col-span-2">
            <div className="mb-6">
              <h3 className="text-2xl font-bold text-[#E7CD87] mb-4">JP Mortgage Solutions</h3>
              <p className="text-[#EDE8D1] leading-relaxed">
                Your trusted partner in securing the perfect mortgage solution. We provide expert guidance 
                and personalized service to help you achieve your homeownership dreams.
              </p>
            </div>
            
            {/* Contact Info */}
            <div className="space-y-3">
              <div className="flex items-center text-[#EDE8D1]">
                <span className="mr-3">📍</span>
                <span>5708 72 Street NW, Edmonton, AB T6B 3J4</span>
              </div>
              <div className="flex items-center text-[#EDE8D1]">
                <span className="mr-3">📞</span>
                <span>+1-780-362-7172</span>
              </div>
              <div className="flex items-center text-[#EDE8D1]">
                <span className="mr-3">✉️</span>
                <span>info@jpmortgagesolutions.ca</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold text-[#E7CD87] mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <button 
                  onClick={() => document.getElementById('mortgage-calculator').scrollIntoView({ behavior: 'smooth' })}
                  className="text-[#EDE8D1] hover:text-[#E7CD87] transition-colors duration-300"
                >
                  Mortgage Calculator
                </button>
              </li>
              <li>
                <button 
                  onClick={() => document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })}
                  className="text-[#EDE8D1] hover:text-[#E7CD87] transition-colors duration-300"
                >
                  Contact Us
                </button>
              </li>
              <li>
                <a href="#services" className="text-[#EDE8D1] hover:text-[#E7CD87] transition-colors duration-300">
                  Our Services
                </a>
              </li>
              <li>
                <a href="#team" className="text-[#EDE8D1] hover:text-[#E7CD87] transition-colors duration-300">
                  Meet Our Team
                </a>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold text-[#E7CD87] mb-4">Services</h4>
            <ul className="space-y-2">
              <li className="text-[#EDE8D1]">Residential Mortgages</li>
              <li className="text-[#EDE8D1]">Commercial Loans</li>
              <li className="text-[#EDE8D1]">Refinancing</li>
              <li className="text-[#EDE8D1]">First-Time Buyer Programs</li>
              <li className="text-[#EDE8D1]">Investment Properties</li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-[#E7CD87]/20 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-[#EDE8D1] mb-4 md:mb-0">
              © 2025 JP Mortgage Solutions. All rights reserved.
            </div>
            
            {/* Business Hours */}
            {/* <div className="text-[#EDE8D1] text-sm">
              <span className="font-semibold text-[#E7CD87]">Business Hours:</span> Mon-Fri 9AM-6PM, Sat 10AM-4PM
            </div> */}
          </div>
          
          {/* License Info */}
          <div className="mt-4 text-center text-[#EDE8D1]/70 text-sm">
            Licensed Mortgage Broker | FSRA License
          </div>
        </div>
      </div>
    </footer>
  );
});

Footer.displayName = 'Footer';
export default Footer;