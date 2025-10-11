import { useEffect, useRef, forwardRef } from 'react';
import { createMobileResponsiveAnimation, createStaggeredAnimation, refreshScrollTrigger } from '../utils/animations';

const MortgageServices = forwardRef((props, ref) => {
  const headerRef = useRef(null);
  const cardsRef = useRef(null);
  const ctaRef = useRef(null);
  const highlightsRef = useRef(null);

  useEffect(() => {
    const elements = [
      { ref: headerRef, delay: 0 },
      { ref: cardsRef, delay: 0.2 },
      { ref: ctaRef, delay: 0.4 },
      { ref: highlightsRef, delay: 0.6 }
    ];
    
    elements.forEach(({ ref: elementRef, delay }) => {
      createMobileResponsiveAnimation(elementRef.current, ref, {
        from: { opacity: 0, y: 50, scale: 0.95 },
        to: { opacity: 1, y: 0, scale: 1 },
        duration: 0.8,
        delay,
        triggerStart: "top 85%"
      });
    });

    // Animate service cards individually
    if (cardsRef.current && cardsRef.current.children.length > 0) {
      createStaggeredAnimation(cardsRef.current.children, cardsRef, {
        from: { opacity: 0, y: 60, scale: 0.9 },
        to: { opacity: 1, y: 0, scale: 1 },
        duration: 0.8,
        stagger: 0.2,
        triggerStart: "top 85%"
      });
    }

    refreshScrollTrigger();
  }, [ref]);

  return (
    <section ref={ref} id="services" className="py-12 md:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-16">
        
        {/* Section Header */}
        <div ref={headerRef} className="text-center mb-8 md:mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-[#152945] mb-4 md:mb-6 px-4">
            Our <span className="text-[#E7CD87]">Mortgage & Loan</span> Services
          </h2>
          <p className="text-lg md:text-xl text-[#152945]/80 max-w-3xl mx-auto px-4">
            Comprehensive financing solutions tailored to meet your residential, commercial, and business needs. 
            From first-time buyers to seasoned investors, we have the expertise to help you succeed.
          </p>
        </div>

        {/* Services Grid */}
        <div ref={cardsRef} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          
          {/* Residential Mortgage */}
          <div className="group flex">
            <div className="bg-[#EDE8D1] rounded-2xl md:rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 hover:scale-105 flex flex-col w-full">
              {/* Image Header */}
              <div className="h-40 md:h-48 bg-gradient-to-br from-[#152945] to-[#E7CD87] relative overflow-hidden">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center text-white">
                    <div className="text-5xl md:text-6xl mb-2 md:mb-4">🏠</div>
                    {/* <div className="text-xs md:text-sm font-medium opacity-80">White and red house</div> */}
                  </div>
                </div>
                <div className="absolute top-2 md:top-4 left-2 md:left-4 bg-white/20 backdrop-blur-sm px-2 md:px-3 py-1 rounded-full text-white text-xs font-semibold">
                  Most Popular
                </div>
              </div>
              
              {/* Content */}
              <div className="p-6 md:p-8 flex-1 flex flex-col">
                <h3 className="text-xl md:text-2xl font-bold text-[#152945] mb-4 md:mb-6">
                  Residential Mortgage
                </h3>
                
                <div className="space-y-2 md:space-y-3">
                  <div className="flex items-center text-[#152945] text-sm md:text-base">
                    <span className="w-2 h-2 bg-[#E7CD87] rounded-full mr-3"></span>
                    <span className="font-medium">First-Time Home Buyers</span>
                  </div>
                  <div className="flex items-center text-[#152945] text-sm md:text-base">
                    <span className="w-2 h-2 bg-[#E7CD87] rounded-full mr-3"></span>
                    <span className="font-medium">Renewal</span>
                  </div>
                  <div className="flex items-center text-[#152945] text-sm md:text-base">
                    <span className="w-2 h-2 bg-[#E7CD87] rounded-full mr-3"></span>
                    <span className="font-medium">New to Canada</span>
                  </div>
                  <div className="flex items-center text-[#152945] text-sm md:text-base">
                    <span className="w-2 h-2 bg-[#E7CD87] rounded-full mr-3"></span>
                    <span className="font-medium">Self-Employed</span>
                  </div>
                  <div className="flex items-center text-[#152945] text-sm md:text-base">
                    <span className="w-2 h-2 bg-[#E7CD87] rounded-full mr-3"></span>
                    <span className="font-medium">Construction/Draw</span>
                  </div>
                  <div className="flex items-center text-[#152945] text-sm md:text-base">
                    <span className="w-2 h-2 bg-[#E7CD87] rounded-full mr-3"></span>
                    <span className="font-medium">Equity Take-out</span>
                  </div>
                  <div className="flex items-center text-[#152945] text-sm md:text-base">
                    <span className="w-2 h-2 bg-[#E7CD87] rounded-full mr-3"></span>
                    <span className="font-medium">Refinance</span>
                  </div>
                  <div className="flex items-center text-[#152945] text-sm md:text-base">
                    <span className="w-2 h-2 bg-[#E7CD87] rounded-full mr-3"></span>
                    <span className="font-medium">Rental/Investment Property</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Commercial Mortgage */}
          <div className="group flex">
            <div className="bg-[#152945] rounded-2xl md:rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 hover:scale-105 text-white flex flex-col w-full">
              {/* Image Header */}
              <div className="h-40 md:h-48 bg-gradient-to-br from-[#E7CD87] to-[#EDE8D1] relative overflow-hidden">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center text-[#152945]">
                    <div className="text-5xl md:text-6xl mb-2 md:mb-4">🏢</div>
                    {/* <div className="text-xs md:text-sm font-medium opacity-80">Gray concrete building under blue sky</div> */}
                  </div>
                </div>
                <div className="absolute top-2 md:top-4 left-2 md:left-4 bg-[#152945]/20 backdrop-blur-sm px-2 md:px-3 py-1 rounded-full text-[#152945] text-xs font-semibold">
                  Professional
                </div>
              </div>
              
              {/* Content */}
              <div className="p-6 md:p-8 flex-1 flex flex-col">
                <h3 className="text-xl md:text-2xl font-bold mb-4 md:mb-6">
                  Commercial Mortgage
                </h3>
                
                <div className="space-y-2 md:space-y-3">
                  <div className="flex items-center text-sm md:text-base">
                    <span className="w-2 h-2 bg-[#E7CD87] rounded-full mr-3"></span>
                    <span className="font-medium">Real Estate</span>
                  </div>
                  <div className="flex items-center text-sm md:text-base">
                    <span className="w-2 h-2 bg-[#E7CD87] rounded-full mr-3"></span>
                    <span className="font-medium">Construction</span>
                  </div>
                  <div className="flex items-center text-sm md:text-base">
                    <span className="w-2 h-2 bg-[#E7CD87] rounded-full mr-3"></span>
                    <span className="font-medium">CMHC</span>
                  </div>
                  <div className="flex items-center text-sm md:text-base">
                    <span className="w-2 h-2 bg-[#E7CD87] rounded-full mr-3"></span>
                    <span className="font-medium">Purchase</span>
                  </div>
                  <div className="flex items-center text-sm md:text-base">
                    <span className="w-2 h-2 bg-[#E7CD87] rounded-full mr-3"></span>
                    <span className="font-medium">Refinance</span>
                  </div>
                  <div className="flex items-center text-sm md:text-base">
                    <span className="w-2 h-2 bg-[#E7CD87] rounded-full mr-3"></span>
                    <span className="font-medium">Investment Property</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Loans */}
          <div className="group flex">
            <div className="bg-[#E7CD87] rounded-2xl md:rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 hover:scale-105 text-[#152945] flex flex-col w-full">
              {/* Image Header */}
              <div className="h-40 md:h-48 bg-gradient-to-br from-[#152945] to-[#EDE8D1] relative overflow-hidden">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center text-white">
                    <div className="text-5xl md:text-6xl mb-2 md:mb-4">💼</div>
                    {/* <div className="text-xs md:text-sm font-medium opacity-80">Business & Equipment Financing</div> */}
                  </div>
                </div>
                <div className="absolute top-2 md:top-4 left-2 md:left-4 bg-white/20 backdrop-blur-sm px-2 md:px-3 py-1 rounded-full text-white text-xs font-semibold">
                  Business Focus
                </div>
              </div>
              
              {/* Content */}
              <div className="p-6 md:p-8 flex-1 flex flex-col">
                <h3 className="text-xl md:text-2xl font-bold mb-4 md:mb-6">
                  Loans
                </h3>
                
                <div className="space-y-2 md:space-y-3">
                  <div className="flex items-center text-sm md:text-base">
                    <span className="w-2 h-2 bg-[#152945] rounded-full mr-3"></span>
                    <span className="font-medium">New Business</span>
                  </div>
                  <div className="flex items-center text-sm md:text-base">
                    <span className="w-2 h-2 bg-[#152945] rounded-full mr-3"></span>
                    <span className="font-medium">Business Refinance</span>
                  </div>
                  <div className="flex items-center text-sm md:text-base">
                    <span className="w-2 h-2 bg-[#152945] rounded-full mr-3"></span>
                    <span className="font-medium">Leasehold Improvements</span>
                  </div>
                  <div className="flex items-center text-sm md:text-base">
                    <span className="w-2 h-2 bg-[#152945] rounded-full mr-3"></span>
                    <span className="font-medium">Working Capital</span>
                  </div>
                  <div className="flex items-center text-sm md:text-base">
                    <span className="w-2 h-2 bg-[#152945] rounded-full mr-3"></span>
                    <span className="font-medium">Equipment</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom CTA Section */}
        <div ref={ctaRef} className="mt-8 md:mt-16 bg-gradient-to-r from-[#152945] to-[#E7CD87] rounded-2xl md:rounded-3xl p-6 md:p-12 text-center text-white">
          <h3 className="text-2xl md:text-3xl font-bold mb-3 md:mb-4">
            Not sure which option is right for you?
          </h3>
          <p className="text-[#EDE8D1] text-base md:text-lg mb-6 md:mb-8 max-w-2xl mx-auto px-4">
            Our experienced team will analyze your unique situation and recommend the best financing solution 
            to meet your specific needs and goals.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center px-4">
            <button 
              onClick={() => document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })}
              className="bg-white text-[#152945] font-bold px-6 md:px-8 py-3 md:py-4 rounded-full hover:bg-[#EDE8D1] transition-all duration-300 shadow-lg text-sm md:text-base"
            >
              Contact Us
            </button>
            <button 
              onClick={() => document.getElementById('mortgage-calculator').scrollIntoView({ behavior: 'smooth' })}
              className="border-2 border-white text-white font-bold px-6 md:px-8 py-3 md:py-4 rounded-full hover:bg-white hover:text-[#152945] transition-all duration-300 text-sm md:text-base"
            >
              Try Our Calculator
            </button>
          </div>
        </div>

        {/* Service Highlights */}
        {/* <div ref={highlightsRef} className="mt-8 md:mt-16 grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-8 text-center">
          <div>
            <div className="bg-[#EDE8D1] w-12 h-12 md:w-16 md:h-16 rounded-full flex items-center justify-center mx-auto mb-3 md:mb-4">
              <span className="text-xl md:text-2xl">🏠</span>
            </div>
            <h4 className="font-bold text-[#152945] mb-1 md:mb-2 text-sm md:text-base">Residential</h4>
            <p className="text-xs md:text-sm text-[#152945]/70">8 specialized services</p>
          </div>
          <div>
            <div className="bg-[#EDE8D1] w-12 h-12 md:w-16 md:h-16 rounded-full flex items-center justify-center mx-auto mb-3 md:mb-4">
              <span className="text-xl md:text-2xl">🏢</span>
            </div>
            <h4 className="font-bold text-[#152945] mb-1 md:mb-2 text-sm md:text-base">Commercial</h4>
            <p className="text-xs md:text-sm text-[#152945]/70">6 professional solutions</p>
          </div>
          <div>
            <div className="bg-[#EDE8D1] w-12 h-12 md:w-16 md:h-16 rounded-full flex items-center justify-center mx-auto mb-3 md:mb-4">
              <span className="text-xl md:text-2xl">💼</span>
            </div>
            <h4 className="font-bold text-[#152945] mb-1 md:mb-2 text-sm md:text-base">Business Loans</h4>
            <p className="text-xs md:text-sm text-[#152945]/70">5 financing options</p>
          </div>
          <div>
            <div className="bg-[#EDE8D1] w-12 h-12 md:w-16 md:h-16 rounded-full flex items-center justify-center mx-auto mb-3 md:mb-4">
              <span className="text-xl md:text-2xl">🤝</span>
            </div>
            <h4 className="font-bold text-[#152945] mb-1 md:mb-2 text-sm md:text-base">Expert Guidance</h4>
            <p className="text-xs md:text-sm text-[#152945]/70">Personalized advice</p>
          </div>
        </div> */}
      </div>
    </section>
  );
});

MortgageServices.displayName = 'MortgageServices';
export default MortgageServices;