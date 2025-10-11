import { forwardRef } from 'react';

const ProcessSection = forwardRef((props, ref) => {

  return (
    <section ref={ref} className="py-20 bg-[#EDE8D1]">
      <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-16">
        {/* Section Header */}
        <div className="text-center mb-0 md:mb-0">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-[#152945] mb-4 md:mb-6 leading-tight">
            Get ready for a smooth &<br className="hidden sm:block" />
            <span className="text-[#E7CD87]">stress-free process</span>
          </h2>
          <p className="text-lg md:text-xl text-[#152945]/80 max-w-4xl mx-auto leading-relaxed px-4">
            Mortgage and protection products can be complicated – different features, different rates, 
            different prices, and different benefits. We'll simplify things, taking out the jargon and 
            the stress, making it a smooth process from start to finish.
          </p>
        </div>

        {/* Stats Grid */}
        {/* <div ref={cardsRef} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 lg:gap-12"> */}
          {/* Mortgage Lenders */}
          {/* <div className="text-center group">
            <div className="bg-white rounded-2xl md:rounded-3xl p-6 md:p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 mb-3 md:mb-4">
              <div className="text-4xl md:text-5xl lg:text-6xl font-black text-[#152945] mb-2">
                120+
              </div>
              <div className="w-10 md:w-12 h-1 bg-[#E7CD87] mx-auto mb-3 md:mb-4 rounded-full"></div>
              <div className="text-base md:text-lg font-bold text-[#152945]">
                Mortgage Lenders
              </div>
            </div>
            <p className="text-sm text-[#152945]/70 leading-relaxed px-2">
              Access to the widest range of mortgage providers in the market
            </p>
          </div> */}

          {/* Tailored Service */}
          {/* <div className="text-center group">
            <div className="bg-white rounded-2xl md:rounded-3xl p-6 md:p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 mb-3 md:mb-4">
              <div className="text-4xl md:text-5xl lg:text-6xl font-black text-[#152945] mb-2">
                100%
              </div>
              <div className="w-10 md:w-12 h-1 bg-[#E7CD87] mx-auto mb-3 md:mb-4 rounded-full"></div>
              <div className="text-base md:text-lg font-bold text-[#152945]">
                Tailored Service
              </div>
            </div>
            <p className="text-sm text-[#152945]/70 leading-relaxed px-2">
              Completely personalized approach to meet your unique needs
            </p>
          </div> */}

          {/* Available Insurers */}
          {/* <div className="text-center group">
            <div className="bg-white rounded-2xl md:rounded-3xl p-6 md:p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 mb-4">
              <div className="text-4xl md:text-5xl lg:text-6xl font-black text-[#152945] mb-2">
                20+
              </div>
              <div className="w-12 h-1 bg-[#E7CD87] mx-auto mb-4 rounded-full"></div>
              <div className="text-lg font-bold text-[#152945]">
                Available Insurers
              </div>
            </div>
            <p className="text-sm text-[#152945]/70 leading-relaxed">
              Comprehensive protection options from leading insurance providers
            </p>
          </div> */}

          {/* Mortgage Products */}
          {/* <div className="text-center group">
            <div className="bg-white rounded-2xl md:rounded-3xl p-6 md:p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 mb-4">
              <div className="text-4xl md:text-5xl lg:text-6xl font-black text-[#152945] mb-2">
                12k+
              </div>
              <div className="w-12 h-1 bg-[#E7CD87] mx-auto mb-4 rounded-full"></div>
              <div className="text-lg font-bold text-[#152945]">
                Mortgage Products
              </div>
            </div>
            <p className="text-sm text-[#152945]/70 leading-relaxed">
              Extensive selection ensuring we find the perfect fit for you
            </p>
          </div>
        </div> */}

        {/* Bottom CTA */}
        {/* <div ref={ctaRef} className="text-center mt-16"> */}
          {/* <div className="inline-flex items-center bg-[#152945] text-white px-6 py-3 rounded-full mb-6">
            <span className="mr-2">✨</span>
            <span className="font-semibold">Trusted by thousands of homeowners</span>
          </div> */}
          {/* <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-[#E7CD87] text-[#152945] font-bold px-8 py-4 rounded-full hover:bg-[#152945] hover:text-white transition-all duration-300 shadow-lg">
              Start Your Journey
            </button>
            <button className="border-2 border-[#152945] text-[#152945] font-bold px-8 py-4 rounded-full hover:bg-[#152945] hover:text-white transition-all duration-300">
              Learn More About Us
            </button>
          </div> */}
        {/* </div> */}
      </div>
    </section>
  );
});

ProcessSection.displayName = 'ProcessSection';
export default ProcessSection;