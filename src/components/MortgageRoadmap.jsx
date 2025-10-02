import { useEffect, useRef, forwardRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const MortgageRoadmap = forwardRef((props, ref) => {
  const headerRef = useRef(null);
  const timelineRef = useRef(null);
  const ctaRef = useRef(null);
  const summaryRef = useRef(null);

  useEffect(() => {
    const elements = [headerRef, timelineRef, ctaRef, summaryRef];
    
    elements.forEach((elementRef, index) => {
      if (elementRef.current) {
        gsap.fromTo(
          elementRef.current,
          { 
            opacity: 0, 
            y: 50,
            scale: 0.95
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

    // Animate timeline steps individually
    if (timelineRef.current) {
      const steps = timelineRef.current.querySelectorAll('.timeline-step');
      gsap.fromTo(
        steps,
        { 
          opacity: 0, 
          x: (index) => index % 2 === 0 ? -100 : 100,
          scale: 0.8
        },
        {
          opacity: 1,
          x: 0,
          scale: 1,
          duration: 0.8,
          stagger: 0.3,
          ease: "power2.out",
          scrollTrigger: {
            trigger: timelineRef.current,
            start: "top 60%",
            toggleActions: "play none none reverse",
          },
        }
      );
    }
  }, [ref]);

  const steps = [
    {
      number: 1,
      title: "Contact Us",
      description: "Reach out to us at your convenience so we can gain a clear understanding of your financial situation, needs, and long-term goals. We'll arrange a time that works best for you.",
      icon: "📞",
      color: "from-[#152945] to-[#E7CD87]"
    },
    {
      number: 2,
      title: "Be Prepared",
      description: "Before our meeting, please take the time to gather and send us all relevant financial documents and information. The more comprehensive the details, the better we can assist you.",
      icon: "📋",
      color: "from-[#E7CD87] to-[#EDE8D1]"
    },
    {
      number: 3,
      title: "Fact Find",
      description: "During our meeting, we'll have an in-depth conversation about your financial circumstances. This allows us to recommend a mortgage product that is perfectly tailored to your specific needs.",
      icon: "🔍",
      color: "from-[#152945] to-[#E7CD87]"
    },
    {
      number: 4,
      title: "Happy To Proceed?",
      description: "Once you're satisfied with our proposal, we'll connect you with a qualified conveyancer. They will manage all the legal aspects of your property purchase.",
      icon: "✓",
      color: "from-[#E7CD87] to-[#152945]"
    },
    {
      number: 5,
      title: "Mortgage Offer",
      description: "Relax while we handle the mortgage application process for you. We'll keep you updated every step of the way as we submit and manage your application.",
      icon: "📄",
      color: "from-[#152945] to-[#E7CD87]"
    },
    {
      number: 6,
      title: "Completion Date",
      description: "On completion day, funds will be transferred from your lender to finalize the purchase. You'll receive your keys and can celebrate the start of your new chapter!",
      icon: "🏠",
      color: "from-[#E7CD87] to-[#EDE8D1]"
    }
  ];

  return (
    <section ref={ref} className="py-12 md:py-20 bg-[#EDE8D1]">
      <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-16">
        
        {/* Section Header */}
        <div ref={headerRef} className="text-center mb-8 md:mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-[#152945] mb-4 md:mb-6 px-4">
            The roadmap to completing <br className="hidden md:block" />
            <span className="text-[#E7CD87]">your mortgage...</span>
          </h2>
          <p className="text-lg md:text-xl text-[#152945]/80 max-w-3xl mx-auto px-4">
            Our proven 6-step process ensures a smooth and stress-free mortgage experience. 
            We guide you through every stage, from initial contact to receiving your keys.
          </p>
        </div>

        {/* Timeline */}
        <div ref={timelineRef} className="relative">
          {/* Connecting Line */}
          <div className="hidden lg:block absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-[#152945] via-[#E7CD87] to-[#152945] opacity-20"></div>
          
          {/* Steps */}
          <div className="space-y-8 md:space-y-12 lg:space-y-20">
            {steps.map((step, index) => (
              <div 
                key={step.number}
                className={`timeline-step flex flex-col lg:flex-row items-center gap-6 md:gap-8 lg:gap-16 ${
                  index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'
                }`}
              >
                {/* Content Card */}
                <div className="flex-1 w-full">
                  <div className="bg-white rounded-2xl md:rounded-3xl p-6 md:p-8 lg:p-10 shadow-lg hover:shadow-2xl transition-all duration-500 hover:scale-105 group">
                    <div className="flex items-start gap-3 md:gap-4 mb-4 md:mb-6">
                      <div className={`w-10 h-10 md:w-12 md:h-12 bg-gradient-to-br ${step.color} rounded-lg md:rounded-xl flex items-center justify-center text-white font-bold text-base md:text-lg shrink-0 group-hover:scale-110 transition-transform duration-300`}>
                        {step.number}
                      </div>
                      <div className="flex-1">
                        <h3 className="text-lg md:text-xl lg:text-2xl font-bold text-[#152945] mb-2 md:mb-3">
                          Step {step.number}: {step.title}
                        </h3>
                        <p className="text-[#152945]/80 leading-relaxed text-sm md:text-base">
                          {step.description}
                        </p>
                      </div>
                    </div>
                    
                    {/* Progress Indicator */}
                    <div className="flex items-center justify-between mt-4 md:mt-6 pt-4 md:pt-6 border-t border-[#152945]/10">
                      <div className="flex items-center text-[#152945]/60 text-xs md:text-sm">
                        <span className="mr-2">Progress:</span>
                        <div className="w-20 md:w-32 h-2 bg-[#152945]/10 rounded-full overflow-hidden">
                          <div 
                            className={`h-full bg-gradient-to-r ${step.color} rounded-full transition-all duration-1000`}
                            style={{ width: `${(step.number / 6) * 100}%` }}
                          ></div>
                        </div>
                        <span className="ml-2">{Math.round((step.number / 6) * 100)}%</span>
                      </div>
                      <div className="text-xl md:text-2xl text-[#152945] font-bold">{step.icon}</div>
                    </div>
                  </div>
                </div>

                {/* Central Icon Circle */}
                <div className="relative">
                  <div className={`w-16 h-16 md:w-20 md:h-20 bg-gradient-to-br ${step.color} rounded-full flex items-center justify-center shadow-xl border-4 border-white group hover:scale-110 transition-transform duration-300`}>
                    <span className="text-2xl md:text-3xl text-white font-bold">{step.icon}</span>
                  </div>
                  
                  {/* Step Number Badge */}
                  <div className="absolute -top-1 -right-1 md:-top-2 md:-right-2 w-6 h-6 md:w-8 md:h-8 bg-[#152945] text-white rounded-full flex items-center justify-center text-xs md:text-sm font-bold shadow-lg">
                    {step.number}
                  </div>
                </div>

                {/* Spacer for alignment */}
                <div className="flex-1 w-full lg:block hidden"></div>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom CTA */}
        <div ref={ctaRef} className="mt-12 md:mt-20 text-center">
          <div className="bg-gradient-to-r from-[#152945] to-[#E7CD87] rounded-2xl md:rounded-3xl p-6 md:p-8 lg:p-12 text-white">
            <h3 className="text-2xl md:text-3xl font-bold mb-3 md:mb-4">
              Ready to Start Your Mortgage Journey?
            </h3>
            <p className="text-[#EDE8D1] text-base md:text-lg mb-6 md:mb-8 max-w-2xl mx-auto px-4">
              Take the first step today. Our expert team is ready to guide you through 
              this proven process and help you secure the perfect mortgage solution.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center px-4">
              <button 
                onClick={() => document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })}
                className="bg-white text-[#152945] font-bold px-6 md:px-8 py-3 md:py-4 rounded-full hover:bg-[#EDE8D1] transition-all duration-300 shadow-lg text-sm md:text-base"
              >
                Start Step 1: Contact Us
              </button>
              <button 
                onClick={() => document.getElementById('mortgage-calculator').scrollIntoView({ behavior: 'smooth' })}
                className="border-2 border-white text-white font-bold px-6 md:px-8 py-3 md:py-4 rounded-full hover:bg-white hover:text-[#152945] transition-all duration-300 text-sm md:text-base"
              >
                Calculate Your Mortgage
              </button>
            </div>
          </div>
        </div>

        {/* Process Summary */}
        <div ref={summaryRef} className="mt-8 md:mt-16 grid grid-cols-3 md:grid-cols-6 gap-3 md:gap-4">
          {steps.map((step) => (
            <div key={step.number} className="text-center">
              <div className={`w-12 h-12 md:w-16 md:h-16 bg-gradient-to-br ${step.color} rounded-full flex items-center justify-center mx-auto mb-2 md:mb-3 text-lg md:text-2xl`}>
                <span className="text-white font-bold">{step.icon}</span>
              </div>
              <div className="text-xs md:text-sm font-semibold text-[#152945]">{step.title}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
});

MortgageRoadmap.displayName = 'MortgageRoadmap';
export default MortgageRoadmap;