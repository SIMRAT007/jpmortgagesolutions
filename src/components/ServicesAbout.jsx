import { forwardRef } from 'react';

const ServicesAbout = forwardRef((props, ref) => {

  return (
    <section ref={ref} id="about" className="py-12 md:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-16">
        
        {/* Services Section */}
        <div className="mb-12 md:mb-20">
          {/* Services Header */}
          <div className="text-center mb-8 md:mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-[#152945] mb-4 md:mb-6">
              Our <span className="text-[#E7CD87]">Complete Process</span>
            </h2>
            <p className="text-lg md:text-xl text-[#152945]/80 max-w-3xl mx-auto px-4">
              From initial planning to final possession, we guide you through every step of your mortgage journey with expertise and dedication.
            </p>
          </div>

          {/* Services Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            
            {/* Planning (Pre-Approval) */}
            <div className="group hover:scale-105 transition-all duration-300">
              <div className="bg-[#EDE8D1] rounded-2xl md:rounded-3xl p-6 md:p-8 h-full shadow-lg hover:shadow-xl transition-all duration-300">
                <div className="bg-[#152945] w-12 h-12 md:w-16 md:h-16 rounded-xl md:rounded-2xl flex items-center justify-center mb-4 md:mb-6 group-hover:bg-[#E7CD87] transition-colors duration-300">
                  <span className="text-xl md:text-2xl text-white group-hover:text-[#152945]">📋</span>
                </div>
                <h3 className="text-xl md:text-2xl font-bold text-[#152945] mb-3 md:mb-4">
                  Planning <span className="text-[#E7CD87]">(Pre-Approval)</span>
                </h3>
                <p className="text-[#152945]/80 leading-relaxed">
                  We assist in navigating the complexities of the home buying process by obtaining pre-approval in advance, 
                  allowing for a thorough evaluation and minimizing hassle.
                </p>
                <div className="mt-6 flex items-center text-[#E7CD87] font-semibold group-hover:text-[#152945] transition-colors duration-300">
                  <span>Step 1</span>
                  <span className="ml-2">→</span>
                </div>
              </div>
            </div>

            {/* Financing (Mortgage) */}
            <div className="group hover:scale-105 transition-all duration-300">
              <div className="bg-[#152945] rounded-2xl md:rounded-3xl p-6 md:p-8 h-full shadow-lg hover:shadow-xl transition-all duration-300">
                <div className="bg-[#E7CD87] w-12 h-12 md:w-16 md:h-16 rounded-xl md:rounded-2xl flex items-center justify-center mb-4 md:mb-6 group-hover:bg-white transition-colors duration-300">
                  <span className="text-xl md:text-2xl text-[#152945]">💰</span>
                </div>
                <h3 className="text-xl md:text-2xl font-bold text-white mb-3 md:mb-4">
                  Financing <span className="text-[#E7CD87]">(Mortgage)</span>
                </h3>
                <p className="text-white/90 leading-relaxed">
                  We provide accurate and timely financial services, managing each file with dedicated support and attention 
                  while securing the best financing options tailored to your needs.
                </p>
                <div className="mt-6 flex items-center text-[#E7CD87] font-semibold">
                  <span>Step 2</span>
                  <span className="ml-2">→</span>
                </div>
              </div>
            </div>

            {/* Closing (Possession) */}
            <div className="group hover:scale-105 transition-all duration-300">
              <div className="bg-[#E7CD87] rounded-2xl md:rounded-3xl p-6 md:p-8 h-full shadow-lg hover:shadow-xl transition-all duration-300">
                <div className="bg-[#152945] w-12 h-12 md:w-16 md:h-16 rounded-xl md:rounded-2xl flex items-center justify-center mb-4 md:mb-6 group-hover:bg-white transition-colors duration-300">
                  <span className="text-xl md:text-2xl text-white group-hover:text-[#152945]">🗝️</span>
                </div>
                <h3 className="text-xl md:text-2xl font-bold text-[#152945] mb-3 md:mb-4">
                  Closing <span className="text-[#152945]">(Possession)</span>
                </h3>
                <p className="text-[#152945]/90 leading-relaxed">
                  We streamline the process of closing, ensuring timely possession so you can receive the keys to your new home, 
                property, or business without any delays. We ensure a seamless transition.
                </p>
                <div className="mt-6 flex items-center text-[#152945] font-semibold">
                  <span>Step 3</span>
                  <span className="ml-2">✓</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* About Section */}
        <div className="bg-gradient-to-br from-[#152945] to-[#E7CD87] rounded-2xl md:rounded-3xl p-6 md:p-12 lg:p-16 text-white">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-center">
            
            {/* About Content */}
            <div>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-black mb-6 md:mb-8">
                About <span className="text-[#EDE8D1]">JP Mortgage Solutions</span>
              </h2>
              <p className="text-[#EDE8D1] text-base md:text-lg leading-relaxed mb-6 md:mb-8">
                JP Mortgage Solutions (JPMS) was founded in Edmonton, Alberta, in 2025 by Perry Gogia, a Mortgage Specialist 
                with experience dating back to 2021. At JPMS, our goal is to provide personalized mortgage and financing 
                solutions that are tailored to your needs. We offer expert guidance and professional advice to ensure you 
                make well-informed decisions throughout your financial journey.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-3 md:gap-4">
                <button 
                  onClick={() => document.querySelector('.team-section') && document.querySelector('.team-section').scrollIntoView({ behavior: 'smooth' })}
                  className="bg-[#EDE8D1] text-[#152945] font-bold px-6 md:px-8 py-3 md:py-4 rounded-full hover:bg-white transition-all duration-300 shadow-lg text-sm md:text-base"
                >
                  Meet Our Team
                </button>
                <button 
                  onClick={() => document.getElementById('why-trust-us').scrollIntoView({ behavior: 'smooth' })}
                  className="border-2 border-[#EDE8D1] text-[#EDE8D1] font-bold px-6 md:px-8 py-3 md:py-4 rounded-full hover:bg-[#EDE8D1] hover:text-[#152945] transition-all duration-300 text-sm md:text-base"
                >
                  Why Trust Us?
                </button>
              </div>
            </div>

            {/* Mission & Vision */}
            <div className="space-y-6 md:space-y-8">
              
              {/* Mission */}
              <div className="bg-white/10 backdrop-blur-sm rounded-xl md:rounded-2xl p-4 md:p-6 border border-white/20">
                <div className="flex items-center mb-3 md:mb-4">
                  <div className="bg-[#EDE8D1] w-10 h-10 md:w-12 md:h-12 rounded-full flex items-center justify-center mr-3 md:mr-4">
                    <span className="text-lg md:text-xl text-[#152945]">🎯</span>
                  </div>
                  <h3 className="text-xl md:text-2xl font-bold text-[#EDE8D1]">Mission</h3>
                </div>
                <p className="text-white/90 leading-relaxed">
                  Through exceptional customer service and expert guidance, we aim to build strong, long-lasting relationships 
                  with both our clients and lenders. Our goal is to become one of the city's most trusted partners for mortgage 
                  and financing solutions, working together to achieve mutual success.
                </p>
              </div>

              {/* Vision */}
              <div className="bg-white/10 backdrop-blur-sm rounded-xl md:rounded-2xl p-4 md:p-6 border border-white/20">
                <div className="flex items-center mb-3 md:mb-4">
                  <div className="bg-[#EDE8D1] w-10 h-10 md:w-12 md:h-12 rounded-full flex items-center justify-center mr-3 md:mr-4">
                    <span className="text-lg md:text-xl text-[#152945]">👁️</span>
                  </div>
                  <h3 className="text-xl md:text-2xl font-bold text-[#EDE8D1]">Vision</h3>
                </div>
                <p className="text-white/90 leading-relaxed">
                  To become your first choice for your mortgage and other financing needs, ensuring a stress-free and smooth 
                  transaction process every time.
                </p>
              </div>
            </div>
          </div>

          {/* Bottom Stats */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 mt-8 md:mt-12 pt-8 md:pt-12 border-t border-white/20">
            <div className="text-center">
              <div className="text-2xl md:text-3xl font-black text-[#EDE8D1] mb-1 md:mb-2">2025</div>
              <div className="text-xs md:text-sm text-white/80 font-medium">Founded</div>
            </div>
            <div className="text-center">
              <div className="text-2xl md:text-3xl font-black text-[#EDE8D1] mb-1 md:mb-2">4+</div>
              <div className="text-xs md:text-sm text-white/80 font-medium">Years Experience</div>
            </div>
            <div className="text-center">
              <div className="text-2xl md:text-3xl font-black text-[#EDE8D1] mb-1 md:mb-2">Edmonton</div>
              <div className="text-xs md:text-sm text-white/80 font-medium">Based</div>
            </div>
            <div className="text-center">
              <div className="text-2xl md:text-3xl font-black text-[#EDE8D1] mb-1 md:mb-2">100%</div>
              <div className="text-xs md:text-sm text-white/80 font-medium">Dedicated</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
});

ServicesAbout.displayName = 'ServicesAbout';
export default ServicesAbout;