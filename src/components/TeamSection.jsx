import { useEffect, useRef, forwardRef, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Team1 from '../assets/Team1.webp';
import Team2 from '../assets/Team2.webp';
import Team3 from '../assets/Team3.webp';

gsap.registerPlugin(ScrollTrigger);

// Component for individual review cards with truncation
const ReviewCard = ({ review, maxLength = 150 }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const shouldTruncate = review.text.length > maxLength;
  
  const displayText = shouldTruncate && !isExpanded 
    ? review.text.slice(0, maxLength).trim() + '...'
    : review.text;

  const handleMoreClick = () => {
    if (review.link) {
      window.open(review.link, '_blank', 'noopener,noreferrer');
    } else {
      setIsExpanded(!isExpanded);
    }
  };

  return (
    <div className="bg-[#EDE8D1] rounded-xl p-4 md:p-6 relative">
      <div className="flex items-center mb-3">
        <div className="w-10 h-10 bg-[#152945] rounded-full flex items-center justify-center text-white font-bold text-sm">
          {review.initials}
        </div>
        <div className="ml-3">
          <h4 className="font-semibold text-[#152945] text-sm">{review.name}</h4>
          <div className="flex text-yellow-400 text-xs">⭐⭐⭐⭐⭐</div>
        </div>
      </div>
      <p className="text-[#152945]/80 text-sm leading-relaxed">
        "{displayText}"
        {shouldTruncate && (
          <button
            onClick={handleMoreClick}
            className="text-[#152945] hover:text-[#E7CD87] font-semibold ml-1 underline transition-colors duration-200 cursor-pointer"
          >
            {isExpanded ? 'show less' : 'more'}
          </button>
        )}
      </p>
      <div className="absolute top-2 right-2 text-[#E7CD87] text-lg">"</div>
    </div>
  );
};

const TeamSection = forwardRef((props, ref) => {
  const headerRef = useRef(null);
  const cardsRef = useRef(null);

  // Reviews data with links
  const reviews = [
    {
      id: 1,
      name: "Pawandeep Singh",
      initials: "PS",
      text: "Highly Recommend JP Mortgage Solution! Great experience from start to finish. The team at JP Mortgage Solution was professional, knowledgeable, and made the whole process smooth and stress-free. They found the best deal for me and explained everything clearly. Would definitely recommend!",
      link: "https://www.google.com/maps/place/JP+Mortgage+Solutions/@53.4930497,-113.4416911,646m/data=!3m2!1e3!5s0x53a018ed8a8f2cad:0x4ddc14f78be72090!4m8!3m7!1s0x53a01d5649cdffc9:0xfe6a3afd46945fba!8m2!3d53.4930497!4d-113.4391162!9m1!1b1!16s%2Fg%2F11n7ywx_j6?entry=ttu&g_ep=EgoyMDI1MDkzMC4wIKXMDSoASAFQAw%3D%3D"
    },
    {
      id: 2,
      name: "Jaspreet Goraya",
      initials: "JG",
      text: "We had a truly brilliant experience with JP Mortgages. From the very beginning, the team showed professionalism and a genuine commitment to helping us find the right solution for our mortgage investment. A special mention goes to Perry Gogia for his brilliant financial expertise and the receptionist Prathna, who was incredibly welcoming, friendly, and supportive throughout the process. She made us feel comfortable and well looked after from the first phone call to the final steps. The whole team demonstrated excellent financial knowledge and guided us clearly through what could have been a very overwhelming process. Their skills, patience, and ability to explain everything in detail gave us real confidence and peace of mind. We are very happy with the service we received and would highly recommend JP Mortgages to anyone looking for trustworthy, knowledgeable, and client-focused mortgage advice.",
      link: "https://www.google.com/maps/place/JP+Mortgage+Solutions/@53.4930497,-113.4416911,646m/data=!3m2!1e3!5s0x53a018ed8a8f2cad:0x4ddc14f78be72090!4m8!3m7!1s0x53a01d5649cdffc9:0xfe6a3afd46945fba!8m2!3d53.4930497!4d-113.4391162!9m1!1b1!16s%2Fg%2F11n7ywx_j6?entry=ttu&g_ep=EgoyMDI1MDkzMC4wIKXMDSoASAFQAw%3D%3D"
    },
    {
      id: 3,
      name: "DANCIN PIZZA YARROW",
      initials: "DP",
      text: "We had an incredible experience working with JP Mortgages! Our refinancing journey was far from simple, but Perry truly took it to another level. His expertise, dedication, and problem-solving skills made all the difference in securing approval from Servus Bank for our store. Perry and his team went above and beyond, ensuring the process was smooth and stress-free. If you're looking for a mortgage professional who will go the extra mile, JP Mortgages is the way to go! Highly recommended. Thank you Team JP Mortgages 🙏",
      link: "https://www.google.com/maps/place/JP+Mortgage+Solutions/@53.4930497,-113.4416911,646m/data=!3m2!1e3!5s0x53a018ed8a8f2cad:0x4ddc14f78be72090!4m8!3m7!1s0x53a01d5649cdffc9:0xfe6a3afd46945fba!8m2!3d53.4930497!4d-113.4391162!9m1!1b1!16s%2Fg%2F11n7ywx_j6?entry=ttu&g_ep=EgoyMDI1MDkzMC4wIKXMDSoASAFQAw%3D%3D"
    }
  ];

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
                  src={Team1}
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
                  src={Team2}
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
                  src={Team3}
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

        {/* Google Reviews */}
        <div className="mt-8 md:mt-16 bg-white rounded-2xl md:rounded-3xl p-6 md:p-8 lg:p-12 shadow-lg">
          <div className="text-center mb-6 md:mb-8">
            <h3 className="text-2xl md:text-3xl font-bold text-[#152945] mb-2">
              What Our <span className="text-[#E7CD87]">Clients Say</span>
            </h3>
            <div className="flex items-center justify-center gap-2 mb-4">
              <div className="flex text-yellow-400 text-xl">
                ⭐⭐⭐⭐⭐
              </div>
              <span className="text-[#152945] font-semibold">5/5 on Google</span>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
            {reviews.map((review) => (
              <ReviewCard key={review.id} review={review} maxLength={150} />
            ))}
          </div>

          {/* Google Reviews CTA */}
          <div className="text-center mt-6 md:mt-8">
            <a
              href="https://www.google.com/maps/place/JP+Mortgage+Solutions/@53.4930497,-113.4416911,646m/data=!3m2!1e3!5s0x53a018ed8a8f2cad:0x4ddc14f78be72090!4m8!3m7!1s0x53a01d5649cdffc9:0xfe6a3afd46945fba!8m2!3d53.4930497!4d-113.4391162!9m1!1b1!16s%2Fg%2F11n7ywx_j6?entry=ttu&g_ep=EgoyMDI1MDkzMC4wIKXMDSoASAFQAw%3D%3D"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-[#152945] text-white font-medium px-6 py-3 rounded-full hover:bg-[#E7CD87] hover:text-[#152945] transition-all duration-300 text-sm"
            >
              Read More Reviews on Google
            </a>
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