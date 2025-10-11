import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

// Mobile detection
export const isMobileDevice = () => {
  return window.innerWidth <= 768 || 
         /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
};

// Touch device detection
export const isTouchDevice = () => {
  return 'ontouchstart' in window || navigator.maxTouchPoints > 0;
};

export const createMobileResponsiveAnimation = (element, ref, options = {}) => {
  if (!element) return;

  const isMobile = isMobileDevice();
  const isTouch = isTouchDevice();
  const {
    from = { opacity: 0, y: 50 },
    to = { opacity: 1, y: 0 },
    duration = 0.8,
    delay = 0,
    triggerStart = "top 85%",
    skipScrollTriggerOnMobile = true
  } = options;

  // Ensure element is visible by default
  gsap.set(element, { opacity: 1, y: 0 });

  if ((isMobile || isTouch) && skipScrollTriggerOnMobile) {
    // Simple animation for mobile without ScrollTrigger
    gsap.fromTo(element, 
      { ...from, opacity: 0 }, 
      {
        ...to,
        opacity: 1,
        duration: duration * 0.5, // Much faster on mobile
        delay: delay * 0.3, // Reduced delay on mobile
        ease: "power2.out",
        // Ensure visibility
        onComplete: () => {
          gsap.set(element, { opacity: 1, y: 0, clearProps: "all" });
        }
      }
    );
  } else {
    // Full ScrollTrigger animation for desktop
    gsap.fromTo(element, from, {
      ...to,
      duration,
      delay,
      ease: "power2.out",
      scrollTrigger: {
        trigger: ref?.current || element,
        start: triggerStart,
        toggleActions: "play none none reverse",
        invalidateOnRefresh: true,
        refreshPriority: -1,
        // Fallback to ensure visibility
        onRefresh: () => {
          if (isMobileDevice()) {
            gsap.set(element, { opacity: 1, y: 0, clearProps: "all" });
          }
        }
      }
    });
  }
};

export const createStaggeredAnimation = (elements, ref, options = {}) => {
  if (!elements || elements.length === 0) return;

  const isMobile = isMobileDevice();
  const isTouch = isTouchDevice();
  const {
    from = { opacity: 0, y: 30 },
    to = { opacity: 1, y: 0 },
    duration = 0.6,
    stagger = 0.15,
    triggerStart = "top 85%",
    skipScrollTriggerOnMobile = true
  } = options;

  // Ensure elements are visible by default
  gsap.set(elements, { opacity: 1, y: 0 });

  if ((isMobile || isTouch) && skipScrollTriggerOnMobile) {
    // Simple staggered animation for mobile
    gsap.fromTo(elements, 
      { ...from, opacity: 0 }, 
      {
        ...to,
        opacity: 1,
        duration: duration * 0.5,
        stagger: stagger * 0.3,
        ease: "power2.out",
        onComplete: () => {
          gsap.set(elements, { opacity: 1, y: 0, clearProps: "all" });
        }
      }
    );
  } else {
    // Full ScrollTrigger staggered animation for desktop
    gsap.fromTo(elements, from, {
      ...to,
      duration,
      stagger,
      ease: "power2.out",
      scrollTrigger: {
        trigger: ref?.current || elements[0],
        start: triggerStart,
        toggleActions: "play none none reverse",
        invalidateOnRefresh: true,
        refreshPriority: -1,
        onRefresh: () => {
          if (isMobileDevice()) {
            gsap.set(elements, { opacity: 1, y: 0, clearProps: "all" });
          }
        }
      }
    });
  }
};

export const refreshScrollTrigger = () => {
  if (ScrollTrigger) {
    // Kill all triggers on mobile to prevent conflicts
    if (isMobileDevice()) {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    } else {
      ScrollTrigger.refresh();
    }
  }
};

export const killAllScrollTriggers = () => {
  if (ScrollTrigger) {
    ScrollTrigger.getAll().forEach(trigger => trigger.kill());
  }
};

// Ensure all elements are visible on mobile
export const ensureMobileVisibility = () => {
  if (isMobileDevice()) {
    const sections = document.querySelectorAll('section, .section, main > *');
    sections.forEach(section => {
      gsap.set(section, { opacity: 1, y: 0, scale: 1, clearProps: "all" });
    });
  }
};