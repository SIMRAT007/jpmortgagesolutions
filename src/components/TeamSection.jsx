import { forwardRef, useState, useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/autoplay';

import { getAllTeamMembers } from '../../backend/services/teamsService';

// Default team images as fallback
import Team1 from '../assets/Team1.webp';
import Team2 from '../assets/Team2.webp';
import Team3 from '../assets/Team3.webp';
import Team4 from '../assets/Team4.jpeg';
import Team5 from '../assets/Team5.jpeg';
import Team6 from '../assets/Team6.jpeg';
import Team7 from '../assets/Team7.jpeg';

// Component for individual team member cards
const TeamMemberCard = ({ member }) => {
  const gradientClasses = [
    'from-[#152945] to-[#E7CD87]',
    'from-[#E7CD87] to-[#EDE8D1]',
    'from-[#152945] via-[#E7CD87] to-[#152945]',
    'from-[#EDE8D1] to-[#152945]',
    'from-[#E7CD87] via-[#152945] to-[#E7CD87]',
    'from-[#152945] to-[#EDE8D1]',
    'from-[#E7CD87] to-[#152945]'
  ];

  const gradientClass = gradientClasses[member.id % gradientClasses.length];

  return (
    <div className="group h-full md:my-7 md:mx-5 mx-8">
      <div className="bg-white rounded-2xl md:rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 hover:scale-105 h-full flex flex-col min-h-[550px] md:min-h-[700px]">
        {/* Image Container */}
        <div className={`h-64 md:h-80 bg-gradient-to-br ${gradientClass} relative overflow-hidden`}>
          {member.image ? (
            <img
              src={member.image}
              alt={member.name}
              className="absolute inset-0 w-full h-full object-fit md:object-fit"
            />
          ) : (
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-24 h-24 md:w-32 md:h-32 bg-white/20 rounded-full flex items-center justify-center">
                <span className="text-white text-2xl md:text-4xl font-bold">{member.initials}</span>
              </div>
            </div>
          )}
          <div className="absolute inset-0 bg-black/30"></div>
          <div className="absolute bottom-3 right-3 md:bottom-4 md:right-4 w-8 h-8 md:w-12 md:h-12 bg-white/10 rounded-full"></div>
          <div className="absolute top-1/2 right-4 md:right-8 w-4 h-4 md:w-6 md:h-6 bg-white/20 rounded-full"></div>
        </div>

        {/* Content */}
        <div className="p-6 md:p-8 text-center flex-grow flex flex-col">
          <h3 className="text-xl md:text-2xl font-bold text-[#152945] mb-2">
            {member.name}
          </h3>
          <p className="text-[#E7CD87] font-semibold text-base md:text-lg mb-3 md:mb-4">{member.position}</p>
          <p className="text-[#152945]/80 leading-relaxed mb-4 md:mb-6 flex-grow text-sm md:text-base">
            {member.description}
          </p>
        </div>
      </div>
    </div>
  );
};

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
    <div className="bg-[#EDE8D1] rounded-xl p-4 md:p-6 relative md:min-h-[220px] min-h-[200px]">
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
  const [teamMembers, setTeamMembers] = useState([]);
  const [loading, setLoading] = useState(true);

  const MapLink = "https://maps.app.goo.gl/Qv1GbrqeTCScEpcm9"

  // Default/fallback team data
  const defaultTeamMembers = [
    {
      id: 1,
      name: "Perminder (Perry) Gogia",
      position: "Broker",
      image: Team1,
      initials: "PG",
      description: "Founder and lead broker with extensive experience in mortgage and financing solutions. Perry is dedicated to helping clients achieve their homeownership dreams with personalized service."
    },
    {
      id: 2,
      name: "Doug Walker",
      position: "Mortgage Associate",
      image: Team2,
      initials: "DW",
      description: "Experienced mortgage professional specializing in residential lending and client relations. Doug brings dedication and expertise to every transaction with exceptional attention to detail."
    },
    {
      id: 3,
      name: "Rahul Brahmbhatt",
      position: "Mortgage Associate",
      image: Team3,
      initials: "RB",
      description: "Skilled mortgage associate with a focus on helping clients navigate complex financing needs. Rahul provides thorough analysis and personalized service throughout the entire process."
    },
    {
      id: 4,
      name: "Chamkaur Singh",
      position: "Mortgage Associate",
      image: Team4,
      initials: "CS",
      description: "Experienced mortgage professional who specializes in helping clients achieve their homeownership goals. Chamkaur provides comprehensive support and personalized solutions for diverse financing needs."
    },
    {
      id: 5,
      name: "Sarbjit Singh",
      position: "Mortgage Associate",
      image: Team5,
      initials: "SS",
      description: "Knowledgeable mortgage associate with expertise in residential financing and client relations. Sarbjit is dedicated to making the mortgage process smooth and accessible for all clients."
    },
    {
      id: 6,
      name: "Sivaraj Swaminathan",
      position: "Mortgage Associate",
      image: Team6,
      initials: "SS",
      description: "Professional mortgage associate with a strong background in financial services and client support. Sivaraj brings analytical skills and personalized attention to help clients secure the best mortgage solutions."
    },
    {
      id: 7,
      name: "Mantaj Dhillon",
      position: "Mortgage Associate",
      image: Team7,
      initials: "MD",
      description: "Dedicated mortgage associate committed to providing exceptional client service and expert guidance through the mortgage process. Mantaj brings professionalism and attention to detail to every transaction."
    } 
  ];

  // Fetch team members from Firebase
  useEffect(() => {
    const fetchTeamMembers = async () => {
      try {
        const result = await getAllTeamMembers();
        if (result.success && result.data.length > 0) {
          // Sort by order field
          const sorted = result.data.sort((a, b) => (a.order || 0) - (b.order || 0));
          setTeamMembers(sorted);
        } else {
          // Use default data if Firebase is empty
          setTeamMembers(defaultTeamMembers);
        }
      } catch (error) {
        console.error('Error fetching team members:', error);
        // Use default data on error
        setTeamMembers(defaultTeamMembers);
      } finally {
        setLoading(false);
      }
    };

    fetchTeamMembers();
  }, []);

  const reviews = [
    {
      id: 1,
      name: "Pawandeep Singh",
      initials: "PS",
      text: "Highly Recommend JP Mortgage Solution! Great experience from start to finish. The team at JP Mortgage Solution was professional, knowledgeable, and made the whole process smooth and stress-free. They found the best deal for me and explained everything clearly. Would definitely recommend!",
      link: MapLink
    },
    {
      id: 2,
      name: "Jaspreet Goraya",
      initials: "JG",
      text: "We had a truly brilliant experience with JP Mortgages. From the very beginning, the team showed professionalism and a genuine commitment to helping us find the right solution for our mortgage investment. A special mention goes to Perry for his exceptional service.",
      link: MapLink
    },
    {
      id: 3,
      name: "DANCIN PIZZA YARROW",
      initials: "DP",
      text: "We had an incredible experience working with JP Mortgages! Our refinancing journey was far from simple, but Perry truly took it to another level. His expertise, dedication, and problem-solving skills made all the difference.",
      link: MapLink
    },
    {
      id: 4,
      name: "Gagan Singh Takkar",
      initials: "GT",
      text: "I recently worked with Perry for my home loan, and I couldn't be more pleased with the experience. From start to finish, their team was professional, responsive, and knowledgeable. They guided me through every step of the mortgage process.",
      link: MapLink
    },
    {
      id: 5,
      name: "Gurpreet Dhillon",
      initials: "GD",
      text: "Perry is very professional and informative towards his work. He helps me to get mortgage done for my house. I really appreciate your hard work and honesty. We will definitely will go back to him if buying any property in future, he is extremely great person to talk and to get advice.",
      link: MapLink
    },
    {
      id: 6,
      name: "Chamkaur Singh Bains",
      initials: "CB",
      text: "Had a Great experience working with Perry. He helped me to get my business loan and my home mortgage in 1 shot. He made this super easy and quick for me. Perry gave me some good advice which made me satisfied with his work and effort. Much appreciated for your honesty and hard work.",
      link: MapLink
    },
    {
      id: 7,
      name: "Jasjot Singh",
      initials: "JS",
      text: "Getting approved made everything feel real—now I can finally buy my dream home! Big Thanks to JP Mortgage solutions",
      link: MapLink
    },
    {
      id: 8,
      name: "Parry VFC",
      initials: "PV",
      text: "I had dealt with Jazz there and she's brilliant in what she does. She has immense of knowledge of commercial real estate and businesses. It was a great experience to deal in commercial business with her. Thanks Jazz!",
      link: MapLink
    },
    {
      id: 9,
      name: "Senthil Kumar",
      initials: "SK",
      text: "We were very happy with the experience and support perry provided. He was honest and reliable. Our questions were answered clearly and explained in a way that we understood each step. Highly recommend",
      link: MapLink
    },
    {
      id: 10,
      name: "Nikhil Kohli",
      initials: "NK",
      text: "I got my mortgage from them and they are very helpful & reliable. Recommended everybody.",
      link: MapLink
    },
    {
      id: 11,
      name: "Priya Raja",
      initials: "PR",
      text: "Highly recommends JP solutions those who have hard time with mortgages and buying property they are guiding and helping like brother and sister. Perry and Jazz always welcoming us. We want to go with them in the future also.",
      link: MapLink
    },
    {
      id: 12,
      name: "Navraj Brar",
      initials: "NB",
      text: "Great experience, Perry helped us to get our first business and we are super happy",
      link: MapLink
    },
    {
      id: 13,
      name: "Destiny Changers",
      initials: "DC",
      text: "Excellent service in Edmonton they help client and proper guidance for their mortgage.",
      link: MapLink
    },
    {
      id: 14,
      name: "Joshveer Atwal",
      initials: "JA",
      text: "I appreciate his help in my business loan. He is an expert of his field",
      link: MapLink
    },
    {
      id: 15,
      name: "Raja Kamaraj",
      initials: "RK",
      text: "They are very helpful and detail oriented. Kind and honest recommends to all.",
      link: MapLink
    },
    {
      id: 16,
      name: "Harpreet Singh",
      initials: "HS",
      text: "Awesome service no where to look beyond. Perry is the best to deal with. Wonderful person to talk to extremely informative",
      link: MapLink
    },
    {
      id: 17,
      name: "Ashpreet Singh",
      initials: "AS",
      text: "Very professional and amazing service provider. He values his clients and understand their needs.",
      link: MapLink
    },
    {
      id: 18,
      name: "Kashmiri Chonkriay",
      initials: "KC",
      text: "Very good service and friendly",
      link: MapLink
    },
    {
      id: 19,
      name: "Surinder Pal Singh",
      initials: "SP",
      text: "Very professional team 👍",
      link: MapLink
    },
    {
      id: 20,
      name: "Inderjeet Pinky",
      initials: "IP",
      text: "Excellent customer services",
      link: MapLink
    }
  ];

  return (
    <section ref={ref} id="team" className="py-12 md:py-20 bg-[#EDE8D1] team-section">
      <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-16">

        {/* Section Header */}
        <div className="text-center mb-8 md:mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-[#152945] mb-4 md:mb-6 px-4">
            Meet Our <span className="text-[#E7CD87]">Expert Team</span>
          </h2>
          <p className="text-lg md:text-xl text-[#152945]/80 max-w-3xl mx-auto px-4">
            Our experienced professionals are dedicated to providing you with personalized mortgage solutions
            and exceptional service throughout your financial journey.
          </p>
        </div>

        {/* ✅ Swiper Carousel for Team Members */}
        <Swiper
          modules={[Autoplay]}
          spaceBetween={30}
          slidesPerView={1}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          loop={true}
          breakpoints={{
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
          className="pb-12"
          style={{
            '--swiper-slide-height': '100%'
          }}
        >
          {teamMembers.map((member) => (
            <SwiperSlide key={member.id} className="h-auto">
              <TeamMemberCard member={member} />
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Google Reviews */}
        <div className="mt-8 md:mt-16 bg-white rounded-2xl md:rounded-3xl p-6 md:p-8 lg:p-12 shadow-lg">
          <div className="text-center mb-6 md:mb-8">
            <h3 className="text-2xl md:text-3xl font-bold text-[#152945] mb-2">
              What Our <span className="text-[#E7CD87]">Clients Say</span>
            </h3>
            <div className="flex items-center justify-center gap-2 mb-4">
              <div className="flex text-yellow-400 text-xl">⭐⭐⭐⭐⭐</div>
              <span className="text-[#152945] font-semibold">5/5 on Google</span>
            </div>
          </div>

          {/* ✅ Swiper Carousel for Reviews */}
          <Swiper
            modules={[Autoplay]}
            spaceBetween={24}
            slidesPerView={1}
            autoplay={{
              delay: 4000,
              disableOnInteraction: false,
            }}
            loop={true}
            breakpoints={{
              768: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
            }}
            className="pb-8"
          >
            {reviews.map((review) => (
              <SwiperSlide key={review.id}>
                <ReviewCard review={review} maxLength={150} />
              </SwiperSlide>
            ))}
          </Swiper>

          <div className="text-center mt-6 md:mt-8">
            <a
              href={MapLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-[#152945] text-white font-medium px-6 py-3 rounded-full hover:bg-[#E7CD87] hover:text-[#152945] transition-all duration-300 text-sm"
            >
              Read More Reviews on Google
            </a>
          </div>
        </div>
      </div>
    </section>
  );
});

TeamSection.displayName = 'TeamSection';
export default TeamSection;
