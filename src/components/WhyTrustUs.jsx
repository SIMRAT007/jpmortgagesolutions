import { useEffect, useRef, forwardRef } from 'react';
import { createMobileResponsiveAnimation, createStaggeredAnimation, refreshScrollTrigger } from '../utils/animations';

const WhyTrustUs = forwardRef((props, ref) => {
  const headerRef = useRef(null);
  const cardsRef = useRef(null);
  const ctaRef = useRef(null);

  useEffect(() => {
    const elements = [
      { ref: headerRef, delay: 0 },
      { ref: cardsRef, delay: 0.2 },
      { ref: ctaRef, delay: 0.4 }
    ];
    
    elements.forEach(({ ref: elementRef, delay }) => {
      createMobileResponsiveAnimation(elementRef.current, ref, {
        from: { opacity: 0, y: 50 },
        to: { opacity: 1, y: 0 },
        duration: 0.8,
        delay,
        triggerStart: "top 85%"
      });
    });

    // Animate cards individually
    if (cardsRef.current && cardsRef.current.children.length > 0) {
      createStaggeredAnimation(cardsRef.current.children, cardsRef, {
        from: { opacity: 0, y: 40, scale: 0.95 },
        to: { opacity: 1, y: 0, scale: 1 },
        duration: 0.6,
        stagger: 0.15,
        triggerStart: "top 85%"
      });
    }

    refreshScrollTrigger();
  }, [ref]);

  return (
    <section ref={ref} id="why-trust-us" className="py-12 md:py-20 bg-[#EDE8D1]">
      <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-16">
        
        {/* Section Header */}
        <div ref={headerRef} className="text-center mb-8 md:mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-[#152945] mb-4 md:mb-6 px-4">
            Why Our Clients <span className="text-[#E7CD87]">Trust Us?</span>
          </h2>
          <p className="text-lg md:text-xl text-[#152945]/80 max-w-3xl mx-auto px-4">
            Built on a foundation of expertise, personalized service, and proactive planning, 
            we've earned the trust of countless clients throughout their financial journey.
          </p>
        </div>

        {/* Trust Features Grid */}
        <div ref={cardsRef} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 mb-8 md:mb-16">
          
          {/* Expertise You Can Trust */}
          <div className="group">
            <div className="bg-white rounded-2xl md:rounded-3xl p-6 md:p-8 h-full shadow-lg hover:shadow-2xl transition-all duration-500 hover:scale-105 relative overflow-hidden">
              {/* Background Accent */}
              <div className="absolute top-0 right-0 w-16 h-16 md:w-20 md:h-20 bg-[#E7CD87]/10 rounded-full -mr-8 md:-mr-10 -mt-8 md:-mt-10"></div>
              
              {/* Icon */}
              <div className="bg-gradient-to-br from-[#152945] to-[#E7CD87] w-12 h-12 md:w-16 md:h-16 rounded-xl md:rounded-2xl flex items-center justify-center mb-4 md:mb-6 group-hover:scale-110 transition-transform duration-300">
                <span className="text-xl md:text-2xl text-white">🎓</span>
              </div>
              
              <h3 className="text-xl md:text-2xl font-bold text-[#152945] mb-3 md:mb-4">
                Expertise You Can <span className="text-[#E7CD87]">Trust</span>
              </h3>
              
              <p className="text-[#152945]/80 leading-relaxed mb-4 md:mb-6 text-sm md:text-base">
                Our team of certified professionals brings years of experience and deep knowledge of the mortgage & financing industry, 
                ensuring you receive reliable advice and solutions.
              </p>
              
              {/* Feature Highlights */}
              <div className="space-y-2">
                <div className="flex items-center text-sm text-[#152945]/70">
                  <span className="w-2 h-2 bg-[#E7CD87] rounded-full mr-3"></span>
                  <span>Certified professionals</span>
                </div>
                <div className="flex items-center text-sm text-[#152945]/70">
                  <span className="w-2 h-2 bg-[#E7CD87] rounded-full mr-3"></span>
                  <span>Years of experience</span>
                </div>
                <div className="flex items-center text-sm text-[#152945]/70">
                  <span className="w-2 h-2 bg-[#E7CD87] rounded-full mr-3"></span>
                  <span>Industry expertise</span>
                </div>
              </div>
            </div>
          </div>

          {/* Personalized Service */}
          <div className="group">
            <div className="bg-gradient-to-br from-[#152945] to-[#E7CD87] rounded-2xl md:rounded-3xl p-6 md:p-8 h-full shadow-lg hover:shadow-2xl transition-all duration-500 hover:scale-105 text-white relative overflow-hidden">
              {/* Background Accent */}
              <div className="absolute bottom-0 left-0 w-20 h-20 md:w-24 md:h-24 bg-white/10 rounded-full -ml-10 md:-ml-12 -mb-10 md:-mb-12"></div>
              
              {/* Icon */}
              <div className="bg-white/20 backdrop-blur-sm w-12 h-12 md:w-16 md:h-16 rounded-xl md:rounded-2xl flex items-center justify-center mb-4 md:mb-6 group-hover:scale-110 transition-transform duration-300 border border-white/30">
                <span className="text-xl md:text-2xl">🤝</span>
              </div>
              
              <h3 className="text-xl md:text-2xl font-bold mb-3 md:mb-4">
                Personalized <span className="text-[#EDE8D1]">Service</span>
              </h3>
              
              <p className="text-white/90 leading-relaxed mb-4 md:mb-6 text-sm md:text-base">
                We believe in building long-lasting relationships. Our tailored approach means we take the time to understand your unique 
                financial situation and goals, providing customized strategies to help you succeed.
              </p>
              
              {/* Feature Highlights */}
              <div className="space-y-2">
                <div className="flex items-center text-sm text-white/80">
                  <span className="w-2 h-2 bg-[#EDE8D1] rounded-full mr-3"></span>
                  <span>Long-lasting relationships</span>
                </div>
                <div className="flex items-center text-sm text-white/80">
                  <span className="w-2 h-2 bg-[#EDE8D1] rounded-full mr-3"></span>
                  <span>Tailored approach</span>
                </div>
                <div className="flex items-center text-sm text-white/80">
                  <span className="w-2 h-2 bg-[#EDE8D1] rounded-full mr-3"></span>
                  <span>Customized strategies</span>
                </div>
              </div>
            </div>
          </div>

          {/* Proactive Planning */}
          <div className="group">
            <div className="bg-white rounded-2xl md:rounded-3xl p-6 md:p-8 h-full shadow-lg hover:shadow-2xl transition-all duration-500 hover:scale-105 relative overflow-hidden">
              {/* Background Accent */}
              <div className="absolute top-0 left-0 w-12 h-12 md:w-16 md:h-16 bg-[#152945]/5 rounded-full -ml-6 md:-ml-8 -mt-6 md:-mt-8"></div>
              
              {/* Icon */}
              <div className="bg-[#E7CD87] w-12 h-12 md:w-16 md:h-16 rounded-xl md:rounded-2xl flex items-center justify-center mb-4 md:mb-6 group-hover:scale-110 transition-transform duration-300">
                <span className="text-xl md:text-2xl text-[#152945]">📋</span>
              </div>
              
              <h3 className="text-xl md:text-2xl font-bold text-[#152945] mb-3 md:mb-4">
                Proactive <span className="text-[#E7CD87]">Planning</span>
              </h3>
              
              <p className="text-[#152945]/80 leading-relaxed mb-4 md:mb-6 text-sm md:text-base">
                We proactively plan to ensure that we anticipate your needs, strategize effectively, and guide you through every step of the process, 
                helping you secure the best financial solutions for your future.
              </p>
              
              {/* Feature Highlights */}
              <div className="space-y-2">
                <div className="flex items-center text-sm text-[#152945]/70">
                  <span className="w-2 h-2 bg-[#E7CD87] rounded-full mr-3"></span>
                  <span>Anticipate your needs</span>
                </div>
                <div className="flex items-center text-sm text-[#152945]/70">
                  <span className="w-2 h-2 bg-[#E7CD87] rounded-full mr-3"></span>
                  <span>Strategic planning</span>
                </div>
                <div className="flex items-center text-sm text-[#152945]/70">
                  <span className="w-2 h-2 bg-[#E7CD87] rounded-full mr-3"></span>
                  <span>Step-by-step guidance</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Trust Indicators */}
        <div ref={ctaRef} className="bg-white rounded-2xl md:rounded-3xl p-6 md:p-8 lg:p-12 shadow-lg">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-8 text-center">
            <div>
              <div className="text-2xl md:text-3xl lg:text-4xl font-black text-[#152945] mb-1 md:mb-2">99.9%</div>
              <div className="text-xs md:text-sm text-[#152945]/70 font-medium">Client Satisfaction</div>
            </div>
            <div>
              <div className="text-2xl md:text-3xl lg:text-4xl font-black text-[#152945] mb-1 md:mb-2">1000+</div>
              <div className="text-xs md:text-sm text-[#152945]/70 font-medium">Happy Clients</div>
            </div>
            <div>
              <div className="text-2xl md:text-3xl lg:text-4xl font-black text-[#152945] mb-1 md:mb-2">4.9★</div>
              <div className="text-xs md:text-sm text-[#152945]/70 font-medium">Average Rating</div>
            </div>
            <div>
              <div className="text-2xl md:text-3xl lg:text-4xl font-black text-[#152945] mb-1 md:mb-2">$20M+</div>
              <div className="text-xs md:text-sm text-[#152945]/70 font-medium">Loans Processed</div>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        {/* <div className="text-center mt-8 md:mt-12">
          <h3 className="text-xl md:text-2xl font-bold text-[#152945] mb-3 md:mb-4 px-4">
            Ready to experience the difference?
          </h3>
          <p className="text-[#152945]/80 mb-6 md:mb-8 max-w-2xl mx-auto px-4 text-sm md:text-base">
            Join hundreds of satisfied clients who have trusted us with their mortgage and financing needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center px-4">
            <button className="bg-[#152945] text-white font-bold px-6 md:px-8 py-3 md:py-4 rounded-full hover:bg-[#E7CD87] hover:text-[#152945] transition-all duration-300 shadow-lg text-sm md:text-base">
              Get Started Today
            </button>
            <button className="border-2 border-[#152945] text-[#152945] font-bold px-6 md:px-8 py-3 md:py-4 rounded-full hover:bg-[#152945] hover:text-white transition-all duration-300 text-sm md:text-base">
              Read Client Reviews
            </button>
          </div>
        </div> */}
      </div>
    </section>
  );
});

WhyTrustUs.displayName = 'WhyTrustUs';
export default WhyTrustUs;