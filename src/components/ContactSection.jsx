import { useState, useEffect, useRef, forwardRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const ContactSection = forwardRef((props, ref) => {
  const headerRef = useRef(null);
  const formRef = useRef(null);
  const infoRef = useRef(null);

  useEffect(() => {
    const elements = [headerRef, formRef, infoRef];
    
    elements.forEach((elementRef, index) => {
      if (elementRef.current) {
        gsap.fromTo(
          elementRef.current,
          { opacity: 0, y: 50, x: index === 1 ? -30 : index === 2 ? 30 : 0 },
          {
            opacity: 1,
            y: 0,
            x: 0,
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

  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState('');

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('');

    try {
      // Create FormData object for Web3Forms
      const formDataToSubmit = new FormData();
      
      // Add Web3Forms access key (you'll need to get this from https://web3forms.com)
      formDataToSubmit.append('access_key', '0b3a8762-f6f0-452c-81f7-bb5e6e589e42'); // Replace with your actual access key
      
      // Add form fields
      formDataToSubmit.append('name', formData.name);
      formDataToSubmit.append('phone', formData.phone);
      formDataToSubmit.append('email', formData.email);
      formDataToSubmit.append('message', formData.message);
      
      // Add additional metadata
      formDataToSubmit.append('subject', 'New Contact Form Submission - JP Mortgage Solutions');
      formDataToSubmit.append('from_name', formData.name);
      formDataToSubmit.append('source', 'JP Mortgage Solutions Website');
      formDataToSubmit.append('timestamp', new Date().toLocaleString());
      
      // Submit to Web3Forms
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        body: formDataToSubmit
      });

      const result = await response.json();

      if (result.success) {
        setSubmitStatus('success');
        setFormData({ name: '', phone: '', email: '', message: '' });
      } else {
        console.error('Web3Forms error:', result);
        setSubmitStatus('error');
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section ref={ref} id="contact" className="py-12 md:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-16">
        
        {/* Section Header */}
        <div ref={headerRef} className="text-center mb-8 md:mb-16">
          <h2 className="text-2xl md:text-4xl lg:text-5xl font-black text-[#152945] mb-4 md:mb-6">
            Contact <span className="text-[#E7CD87]">Us</span>
          </h2>
          <p className="text-base md:text-xl text-[#152945]/80 max-w-3xl mx-auto px-4">
            Get in touch if you are looking for residential or commercial mortgage, business loan, 
            we will do our best to assist to make it a smooth process for you.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 md:gap-16 items-start">
          
          {/* Contact Form */}
          <div ref={formRef} className="bg-[#EDE8D1] rounded-2xl md:rounded-3xl p-6 md:p-8 lg:p-12 order-2 lg:order-1">
            <h3 className="text-xl md:text-2xl font-bold text-[#152945] mb-6 md:mb-8">Send us a message</h3>
            
            <form onSubmit={handleSubmit} className="space-y-4 md:space-y-6">
              {/* Web3Forms Access Key - Hidden Field */}
              <input type="hidden" name="access_key" value="YOUR_WEB3FORMS_ACCESS_KEY" />
              
              {/* Additional Web3Forms Configuration */}
              <input type="hidden" name="subject" value="New Contact Form Submission - JP Mortgage Solutions" />
              <input type="hidden" name="from_name" value="JP Mortgage Solutions Website" />
              <input type="hidden" name="redirect" value="https://web3forms.com/success" />
              
              {/* Name Field */}
              <div>
                <label htmlFor="name" className="block text-[#152945] font-semibold mb-2 md:mb-3 text-sm md:text-base">
                  Name *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                  className="w-full px-3 md:px-4 py-3 md:py-4 rounded-lg md:rounded-xl border-2 border-[#152945]/20 focus:border-[#E7CD87] focus:outline-none bg-white text-[#152945] placeholder-[#152945]/50 transition-colors duration-300 text-sm md:text-base"
                  placeholder="Enter your full name"
                />
              </div>

              {/* Phone Field */}
              <div>
                <label htmlFor="phone" className="block text-[#152945] font-semibold mb-2 md:mb-3 text-sm md:text-base">
                  Phone *
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  required
                  className="w-full px-3 md:px-4 py-3 md:py-4 rounded-lg md:rounded-xl border-2 border-[#152945]/20 focus:border-[#E7CD87] focus:outline-none bg-white text-[#152945] placeholder-[#152945]/50 transition-colors duration-300 text-sm md:text-base"
                  placeholder="Enter your phone number"
                />
              </div>

              {/* Email Field */}
              <div>
                <label htmlFor="email" className="block text-[#152945] font-semibold mb-2 md:mb-3 text-sm md:text-base">
                  Email *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  className="w-full px-3 md:px-4 py-3 md:py-4 rounded-lg md:rounded-xl border-2 border-[#152945]/20 focus:border-[#E7CD87] focus:outline-none bg-white text-[#152945] placeholder-[#152945]/50 transition-colors duration-300 text-sm md:text-base"
                  placeholder="Enter your email address"
                />
              </div>

              {/* Message Field */}
              <div>
                <label htmlFor="message" className="block text-[#152945] font-semibold mb-2 md:mb-3 text-sm md:text-base">
                  Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                  rows={4}
                  className="w-full px-3 md:px-4 py-3 md:py-4 rounded-lg md:rounded-xl border-2 border-[#152945]/20 focus:border-[#E7CD87] focus:outline-none bg-white text-[#152945] placeholder-[#152945]/50 transition-colors duration-300 resize-vertical text-sm md:text-base"
                  placeholder="Tell us about your mortgage or financing needs..."
                />
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-[#152945] text-white font-bold py-3 md:py-4 px-6 md:px-8 rounded-lg md:rounded-xl hover:bg-[#E7CD87] hover:text-[#152945] transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed shadow-lg cursor-pointer text-sm md:text-base"
              >
                {isSubmitting ? (
                  <span className="flex items-center justify-center">
                    <span className="animate-spin mr-2">⌛</span>
                    SENDING...
                  </span>
                ) : (
                  'SUBMIT'
                )}
              </button>

              {/* Status Messages */}
              {submitStatus === 'success' && (
                <div className="bg-green-100 border border-green-400 text-green-700 px-3 md:px-4 py-2 md:py-3 rounded-lg md:rounded-xl text-sm md:text-base">
                  ✅ Thank you! Your message has been sent successfully. We'll get back to you soon.
                </div>
              )}
              
              {submitStatus === 'error' && (
                <div className="bg-red-100 border border-red-400 text-red-700 px-3 md:px-4 py-2 md:py-3 rounded-lg md:rounded-xl text-sm md:text-base">
                  ❌ Sorry, there was an error sending your message. Please try again or contact us directly.
                </div>
              )}
            </form>
          </div>

          {/* Contact Information */}
          <div ref={infoRef} className="space-y-6 md:space-y-8 order-1 lg:order-2">
            {/* Contact Header */}
            <div className="bg-gradient-to-br from-[#152945] to-[#E7CD87] rounded-2xl md:rounded-3xl p-6 md:p-8 text-white">
              <h3 className="text-xl md:text-2xl font-bold mb-3 md:mb-4">Get in Touch</h3>
              <p className="text-[#EDE8D1] leading-relaxed text-sm md:text-base">
                Ready to start your mortgage journey? Our team is here to help you every step of the way. 
                Reach out using any of the methods below.
              </p>
            </div>

            {/* Contact Details */}
            <div className="space-y-4 md:space-y-6">
              
              {/* Email */}
              <div className="bg-[#EDE8D1] rounded-xl md:rounded-2xl p-4 md:p-6 hover:shadow-lg transition-shadow duration-300">
                <div className="flex items-center mb-2 md:mb-3">
                  <div className="w-10 h-10 md:w-12 md:h-12 bg-[#152945] rounded-full flex items-center justify-center mr-3 md:mr-4 flex-shrink-0">
                    <span className="text-white text-lg md:text-xl">📧</span>
                  </div>
                  <h4 className="text-base md:text-lg font-bold text-[#152945]">Email</h4>
                </div>
                <a 
                  href="mailto:admin@jpmortgagesolutions.ca"
                  className="text-[#152945] hover:text-[#E7CD87] transition-colors duration-300 font-medium cursor-pointer text-sm md:text-base break-all"
                >
                  admin@jpmortgagesolutions.ca
                </a>
              </div>

              {/* Phone */}
              <div className="bg-[#EDE8D1] rounded-xl md:rounded-2xl p-4 md:p-6 hover:shadow-lg transition-shadow duration-300">
                <div className="flex items-center mb-2 md:mb-3">
                  <div className="w-10 h-10 md:w-12 md:h-12 bg-[#152945] rounded-full flex items-center justify-center mr-3 md:mr-4 flex-shrink-0">
                    <span className="text-white text-lg md:text-xl">📱</span>
                  </div>
                  <h4 className="text-base md:text-lg font-bold text-[#152945]">Phone</h4>
                </div>
                <a 
                  href="tel:+17803627172"
                  className="text-[#152945] hover:text-[#E7CD87] transition-colors duration-300 font-medium cursor-pointer text-sm md:text-base"
                >
                  +1-780-362-7172
                </a>
              </div>

              {/* Address */}
              <div className="bg-[#EDE8D1] rounded-xl md:rounded-2xl p-4 md:p-6 hover:shadow-lg transition-shadow duration-300">
                <div className="flex items-center mb-2 md:mb-3">
                  <div className="w-10 h-10 md:w-12 md:h-12 bg-[#152945] rounded-full flex items-center justify-center mr-3 md:mr-4 flex-shrink-0">
                    <span className="text-white text-lg md:text-xl">📍</span>
                  </div>
                  <h4 className="text-base md:text-lg font-bold text-[#152945]">Address</h4>
                </div>
                <address className="text-[#152945] not-italic leading-relaxed text-sm md:text-base">
                  5708 72 Street NW,
                  Edmonton, AB T6B 3J4,
                  Canada
                </address>
              </div>
            </div>

            {/* Business Hours */}
            {/* <div className="bg-[#152945] rounded-xl md:rounded-2xl p-4 md:p-6 text-white">
              <div className="flex items-center mb-3 md:mb-4">
                <div className="w-10 h-10 md:w-12 md:h-12 bg-[#E7CD87] rounded-full flex items-center justify-center mr-3 md:mr-4 flex-shrink-0">
                  <span className="text-[#152945] text-lg md:text-xl">🕐</span>
                </div>
                <h4 className="text-base md:text-lg font-bold">Business Hours</h4>
              </div>
              <div className="space-y-1 md:space-y-2 text-[#EDE8D1] text-sm md:text-base">
                <div className="flex justify-between">
                  <span>Monday - Friday:</span>
                  <span>9:00 AM - 6:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span>Saturday:</span>
                  <span>10:00 AM - 4:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span>Sunday:</span>
                  <span>By Appointment</span>
                </div>
              </div>
            </div> */}
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="mt-8 md:mt-16 text-center">
          <div className="bg-[#E7CD87] rounded-2xl md:rounded-3xl p-6 md:p-8 lg:p-12">
            <h3 className="text-xl md:text-2xl lg:text-3xl font-bold text-[#152945] mb-3 md:mb-4">
              Ready to Get Started?
            </h3>
            <p className="text-[#152945]/80 text-sm md:text-lg mb-6 md:mb-8 max-w-2xl mx-auto px-4">
              Don't wait to secure your dream home or business opportunity. 
              Our expert team is ready to help you navigate your financing options.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center px-4">
              <button 
                onClick={() => document.getElementById('mortgage-calculator').scrollIntoView({ behavior: 'smooth' })}
                className="bg-[#152945] text-white font-bold px-6 md:px-8 py-3 md:py-4 rounded-full hover:bg-white hover:text-[#152945] transition-all duration-300 shadow-lg cursor-pointer text-sm md:text-base"
              >
                Calculate Your Mortgage
              </button>
              <a 
                href="tel:+17803627172"
                className="border-2 border-[#152945] text-[#152945] font-bold px-6 md:px-8 py-3 md:py-4 rounded-full hover:bg-[#152945] hover:text-white transition-all duration-300 inline-block text-center cursor-pointer text-sm md:text-base"
              >
                Call Us Now
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
});

ContactSection.displayName = 'ContactSection';
export default ContactSection;