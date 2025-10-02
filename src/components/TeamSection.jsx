import { useEffect, useRef, forwardRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const TeamSection = forwardRef((props, ref) => {
  const headerRef = useRef(null);
  const cardsRef = useRef(null);

  useEffect(() => {
    if (headerRef.current) {
      gsap.fromTo(
        headerRef.current,
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: "power2.out",
          scrollTrigger: {
            trigger: ref?.current || headerRef.current,
            start: "top 80%",
            toggleActions: "play none none reverse",
          },
        }
      );
    }

    if (cardsRef.current) {
      const cards = cardsRef.current.children;
      gsap.fromTo(
        cards,
        { opacity: 0, y: 60, scale: 0.9 },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.8,
          stagger: 0.2,
          ease: "power2.out",
          scrollTrigger: {
            trigger: cardsRef.current,
            start: "top 80%",
            toggleActions: "play none none reverse",
          },
        }
      );
    }
  }, [ref]);

  return (
    <section ref={ref} id="team" className="py-12 md:py-20 bg-[#EDE8D1] team-section">
      <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-16">
        
        {/* Section Header */}
        <div ref={headerRef} className="text-center mb-8 md:mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-[#152945] mb-4 md:mb-6 px-4">
            Meet Our <span className="text-[#E7CD87]">Expert Team</span>
          </h2>
          <p className="text-lg md:text-xl text-[#152945]/80 max-w-3xl mx-auto px-4">
            Our experienced professionals are dedicated to providing you with personalized mortgage solutions 
            and exceptional service throughout your financial journey.
          </p>
        </div>

        {/* Team Grid */}
        <div ref={cardsRef} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 lg:gap-12">
          
          {/* Perminder (Perry) Gogia - Broker */}
          <div className="group">
            <div className="bg-white rounded-2xl md:rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 hover:scale-105 h-full flex flex-col">
              {/* Image Container */}
              <div className="h-64 md:h-80 bg-gradient-to-br from-[#152945] to-[#E7CD87] relative overflow-hidden">
                {/* Team member image */}
                <img 
                  src="/src/assets/Team1.webp" 
                  alt="Perminder (Perry) Gogia"
                  className="absolute inset-0 w-full h-full object-cover"
                />
                {/* Dark overlay */}
                <div className="absolute inset-0 bg-black/30"></div>
                
                {/* Broker Badge */}
                <div className="absolute top-3 left-3 md:top-4 md:left-4 bg-[#E7CD87] text-[#152945] px-3 py-1 md:px-4 md:py-2 rounded-full text-xs md:text-sm font-bold shadow-lg">
                  Broker
                </div>
                
                {/* Decorative Elements */}
                <div className="absolute bottom-3 right-3 md:bottom-4 md:right-4 w-8 h-8 md:w-12 md:h-12 bg-white/10 rounded-full"></div>
                <div className="absolute top-1/2 right-4 md:right-8 w-4 h-4 md:w-6 md:h-6 bg-white/20 rounded-full"></div>
              </div>
              
              {/* Content */}
              <div className="p-6 md:p-8 text-center flex-grow flex flex-col">
                <h3 className="text-xl md:text-2xl font-bold text-[#152945] mb-2">
                  Perminder (Perry) Gogia
                </h3>
                <p className="text-[#E7CD87] font-semibold text-base md:text-lg mb-3 md:mb-4">Broker</p>
                <p className="text-[#152945]/80 leading-relaxed mb-4 md:mb-6 flex-grow text-sm md:text-base">
                  Founder and lead broker with extensive experience in mortgage and financing solutions. 
                  Perry is dedicated to helping clients achieve their homeownership dreams with personalized service.
                </p>
              </div>
            </div>
          </div>

          {/* Doug Walker - Mortgage Associate */}
          <div className="group">
            <div className="bg-white rounded-2xl md:rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 hover:scale-105 h-full flex flex-col">
              {/* Image Container */}
              <div className="h-64 md:h-80 bg-gradient-to-br from-[#E7CD87] to-[#EDE8D1] relative overflow-hidden">
                {/* Team member image */}
                <img 
                  src="/src/assets/Team2.webp" 
                  alt="Doug Walker"
                  className="absolute inset-0 w-full h-full object-cover"
                />
                {/* Dark overlay */}
                <div className="absolute inset-0 bg-black/30"></div>
                
                {/* Associate Badge */}
                <div className="absolute top-3 left-3 md:top-4 md:left-4 bg-[#152945] text-white px-3 py-1 md:px-4 md:py-2 rounded-full text-xs md:text-sm font-bold shadow-lg">
                  Mortgage Associate
                </div>
                
                {/* Decorative Elements */}
                <div className="absolute bottom-3 right-3 md:bottom-4 md:right-4 w-8 h-8 md:w-12 md:h-12 bg-[#152945]/10 rounded-full"></div>
                <div className="absolute top-1/2 right-4 md:right-8 w-4 h-4 md:w-6 md:h-6 bg-[#152945]/20 rounded-full"></div>
              </div>
              
              {/* Content */}
              <div className="p-6 md:p-8 text-center flex-grow flex flex-col">
                <h3 className="text-xl md:text-2xl font-bold text-[#152945] mb-2">
                  Doug Walker
                </h3>
                <p className="text-[#E7CD87] font-semibold text-base md:text-lg mb-3 md:mb-4">Mortgage Associate</p>
                <p className="text-[#152945]/80 leading-relaxed mb-4 md:mb-6 flex-grow text-sm md:text-base">
                  Experienced mortgage professional specializing in residential lending and client relations. 
                  Doug brings dedication and expertise to every transaction with exceptional attention to detail.
                </p>
              </div>
            </div>
          </div>

          {/* Rahul Brahmbhatt - Mortgage Associate */}
          <div className="group">
            <div className="bg-white rounded-2xl md:rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 hover:scale-105 h-full flex flex-col">
              {/* Image Container */}
              <div className="h-64 md:h-80 bg-gradient-to-br from-[#152945] via-[#E7CD87] to-[#152945] relative overflow-hidden">
                {/* Team member image */}
                <img 
                  src="/src/assets/Team3.webp" 
                  alt="Rahul Brahmbhatt"
                  className="absolute inset-0 w-full h-full object-cover"
                />
                {/* Dark overlay */}
                <div className="absolute inset-0 bg-black/30"></div>
                
                {/* Associate Badge */}
                <div className="absolute top-3 left-3 md:top-4 md:left-4 bg-white text-[#152945] px-3 py-1 md:px-4 md:py-2 rounded-full text-xs md:text-sm font-bold shadow-lg">
                  Mortgage Associate
                </div>
                
                {/* Decorative Elements */}
                <div className="absolute bottom-3 right-3 md:bottom-4 md:right-4 w-8 h-8 md:w-12 md:h-12 bg-white/10 rounded-full"></div>
                <div className="absolute top-1/2 right-4 md:right-8 w-4 h-4 md:w-6 md:h-6 bg-white/20 rounded-full"></div>
              </div>
              
              {/* Content */}
              <div className="p-6 md:p-8 text-center flex-grow flex flex-col">
                <h3 className="text-xl md:text-2xl font-bold text-[#152945] mb-2">
                  Rahul Brahmbhatt
                </h3>
                <p className="text-[#E7CD87] font-semibold text-base md:text-lg mb-3 md:mb-4">Mortgage Associate</p>
                <p className="text-[#152945]/80 leading-relaxed mb-4 md:mb-6 flex-grow text-sm md:text-base">
                  Skilled mortgage associate with a focus on helping clients navigate complex financing needs. 
                  Rahul provides thorough analysis and personalized service throughout the entire process.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Team Stats */}
        <div className="mt-8 md:mt-16 bg-gradient-to-r from-[#152945] to-[#E7CD87] rounded-2xl md:rounded-3xl p-6 md:p-8 lg:p-12">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-8 text-center text-white">
            <div>
              <div className="text-2xl md:text-3xl lg:text-4xl font-black mb-1 md:mb-2">3</div>
              <div className="text-[#EDE8D1] text-xs md:text-sm font-medium">Expert Team Members</div>
            </div>
            <div>
              <div className="text-2xl md:text-3xl lg:text-4xl font-black mb-1 md:mb-2">15+</div>
              <div className="text-[#EDE8D1] text-xs md:text-sm font-medium">Years Combined Experience</div>
            </div>
            <div>
              <div className="text-2xl md:text-3xl lg:text-4xl font-black mb-1 md:mb-2">500+</div>
              <div className="text-[#EDE8D1] text-xs md:text-sm font-medium">Successful Transactions</div>
            </div>
            <div>
              <div className="text-2xl md:text-3xl lg:text-4xl font-black mb-1 md:mb-2">24/7</div>
              <div className="text-[#EDE8D1] text-xs md:text-sm font-medium">Client Support</div>
            </div>
          </div>
        </div>

        {/* Bottom CTA */}
        {/* <div className="text-center mt-8 md:mt-12">
          <h3 className="text-xl md:text-2xl font-bold text-[#152945] mb-3 md:mb-4 px-4">
            Ready to work with our expert team?
          </h3>
          <p className="text-[#152945]/80 mb-6 md:mb-8 max-w-2xl mx-auto px-4 text-sm md:text-base">
            Our experienced professionals are here to guide you through every step of your mortgage journey. 
            Contact us today to get started.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center px-4">
            <button className="bg-[#152945] text-white font-bold px-6 md:px-8 py-3 md:py-4 rounded-full hover:bg-[#E7CD87] hover:text-[#152945] transition-all duration-300 shadow-lg text-sm md:text-base">
              Schedule Team Consultation
            </button>
            <button className="border-2 border-[#152945] text-[#152945] font-bold px-6 md:px-8 py-3 md:py-4 rounded-full hover:bg-[#152945] hover:text-white transition-all duration-300 text-sm md:text-base">
              Learn About Our Process
            </button>
          </div>
        </div> */}
      </div>
    </section>
  );
});

TeamSection.displayName = 'TeamSection';
export default TeamSection;