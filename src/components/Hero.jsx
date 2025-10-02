import { useEffect, useRef, forwardRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Navbar from './Navbar';

gsap.registerPlugin(ScrollTrigger);

const Hero = forwardRef((props, ref) => {
  const badgeRef = useRef(null);
  const titleRef = useRef(null);
  const subtitleRef = useRef(null);
  const buttonsRef = useRef(null);
  const statsRef = useRef(null);
  const cardRef = useRef(null);

  useEffect(() => {
    const elements = [badgeRef, titleRef, subtitleRef, buttonsRef, statsRef, cardRef];
    
    elements.forEach((elementRef, index) => {
      if (elementRef.current) {
        gsap.fromTo(
          elementRef.current,
          { 
            opacity: 0, 
            y: 50,
            scale: 0.9
          },
          {
            opacity: 1,
            y: 0,
            scale: 1,
            duration: 0.8,
            delay: index * 0.2,
            ease: "power2.out",
            scrollTrigger: {
              trigger: ref?.current || elementRef.current,
              start: "top 80%",
              toggleActions: "play none none reverse",
            },
          }
        );
      }
    });
  }, [ref]);

  return (
    <section ref={ref} id="hero" className="min-h-screen flex flex-col bg-gradient-to-br from-[#152945] via-[#152945] to-[#E7CD87] text-white relative overflow-hidden pt-26 md:pt-0">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-10 w-32 h-32 border-2 border-white rounded-full"></div>
        <div className="absolute top-32 right-20 w-20 h-20 border border-[#E7CD87] rounded-lg rotate-45"></div>
        <div className="absolute bottom-20 left-1/4 w-16 h-16 border border-white rounded-full"></div>
        <div className="absolute bottom-40 right-10 w-24 h-24 border-2 border-[#E7CD87] rounded-lg rotate-12"></div>
      </div>

      {/* Navbar positioned at the top with padding */}
      <div className="pt-8 px-8 relative z-50 md:block hidden">
        <Navbar />
      </div>
      
      {/* Hero content */}
      <div className="flex-1 flex items-center justify-between px-8 lg:px-16 xl:px-28 relative z-10">
        {/* Left Content */}
        <div className="flex-1 max-w-3xl">
          <div ref={badgeRef} className="inline-block bg-[#E7CD87] text-[#152945] px-4 py-2 rounded-full text-sm font-semibold mb-6">
            🏡 Trusted by 50,000+ families
          </div>
          
          <h1 ref={titleRef} className="text-5xl lg:text-7xl font-bold mb-6 leading-tight">
            Your Dream Home
            <span className="block text-[#E7CD87]">Starts Here</span>
          </h1>
          
          <p ref={subtitleRef} className="text-xl lg:text-2xl text-[#EDE8D1] mb-8 leading-relaxed max-w-2xl">
            Get pre-approved in minutes with our smart mortgage solutions. 
            Competitive rates, expert guidance, and a seamless digital experience.
          </p>
          
          {/* CTA Buttons */}
          <div ref={buttonsRef} className="flex flex-col sm:flex-row gap-4 mb-12">
            <button className="bg-[#E7CD87] text-[#152945] font-bold px-8 py-4 rounded-full hover:bg-white hover:scale-105 transition-all duration-300 shadow-lg">
              Talk Us Now
            </button>
            <button 
              onClick={() => document.getElementById('mortgage-calculator').scrollIntoView({ behavior: 'smooth' })}
              className="border-2 border-[#EDE8D1] text-[#EDE8D1] font-semibold px-8 py-4 rounded-full hover:bg-[#EDE8D1] hover:text-[#152945] transition-all duration-300"
            >
              Calculate Payments
            </button>
          </div>
          
          {/* Stats */}
          <div ref={statsRef} className="flex justify-between gap-4 text-[#EDE8D1] max-w-md mb-8 md:mb-12">
            <div className="text-center flex-1">
              <div className="text-xl md:text-2xl font-bold text-[#E7CD87]">2.99%</div>
              <div className="text-xs md:text-sm">Starting APR</div>
            </div>
            <div className="text-center flex-1">
              <div className="text-xl md:text-2xl font-bold text-[#E7CD87]">24hrs</div>
              <div className="text-xs md:text-sm">Approval Time</div>
            </div>
            <div className="text-center flex-1">
              <div className="text-xl md:text-2xl font-bold text-[#E7CD87]">$0</div>
              <div className="text-xs md:text-sm">Application Fee</div>
            </div>
          </div>
        </div>
        
        {/* Right Content - Visual Element */}
        <div className="hidden lg:flex flex-1 justify-center items-center">
          <div ref={cardRef} className="relative group">
            {/* Main Card - Made Bigger */}
            <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-3xl p-10 w-[420px] transform rotate-3 hover:rotate-0 transition-all duration-500 hover:scale-105 relative overflow-hidden">
              {/* Shine Effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent opacity-0 group-hover:opacity-100 transform -translate-x-full group-hover:translate-x-full transition-all duration-1000 ease-out"></div>
              
              <div className="bg-gradient-to-r from-[#E7CD87] to-[#EDE8D1] rounded-2xl p-8 mb-8 relative z-10">
                <div className="text-[#152945] font-bold text-xl mb-3">Monthly Payment</div>
                <div className="text-[#152945] text-4xl font-bold">$2,847</div>
                <div className="text-[#152945]/70 text-base">for $450,000 home</div>
              </div>
              
              <div className="space-y-5 relative z-10">
                <div className="flex justify-between text-[#EDE8D1] text-lg">
                  <span>Principal & Interest</span>
                  <span className="font-semibold">$2,247</span>
                </div>
                <div className="flex justify-between text-[#EDE8D1] text-lg">
                  <span>Property Tax</span>
                  <span className="font-semibold">$375</span>
                </div>
                <div className="flex justify-between text-[#EDE8D1] text-lg">
                  <span>Insurance</span>
                  <span className="font-semibold">$225</span>
                </div>
                <div className="border-t border-white/20 pt-5 flex justify-between text-white font-bold text-xl">
                  <span>Total Monthly</span>
                  <span>$2,847</span>
                </div>
              </div>
            </div>
            
            {/* Floating Elements */}
            <div className="absolute -top-4 -right-4 bg-[#E7CD87] text-[#152945] p-4 rounded-full font-bold shadow-lg animate-bounce">
              ✓
            </div>
            <div className="absolute -bottom-4 -left-4 bg-white/20 backdrop-blur-sm text-white p-4 rounded-full font-bold shadow-lg">
              🏠
            </div>
          </div>
        </div>
      </div>
      
      {/* Bottom Section with Scroll Indicator */}
      <div className="pb-6 md:pb-8 flex justify-center relative z-10">
        <div className="flex flex-col items-center text-[#EDE8D1]">
          <span className="text-xs md:text-sm mb-2">Scroll to explore</span>
          <div className="w-5 h-8 md:w-6 md:h-10 border-2 border-[#EDE8D1] rounded-full flex justify-center">
            <div className="w-1 h-2 md:h-3 bg-[#EDE8D1] rounded-full mt-1 md:mt-2 animate-bounce"></div>
          </div>
        </div>
      </div>
    </section>
  );
});

Hero.displayName = 'Hero';
export default Hero;