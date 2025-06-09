/**
 * Smooth scrolling utility for navigating to different sections
 * @param {string} targetId - The ID of the target element to scroll to
 * @param {Object} options - Scrolling options
 */
export const scrollToSection = (targetId, options = {}) => {
  const defaults = {
    duration: 1, // in seconds
    offset: 0, // offset from top in pixels
    ease: "power3.inOut", // easing function
  };

  const config = { ...defaults, ...options };
  const targetElement = document.getElementById(targetId);

  if (!targetElement) {
    console.warn(`Target element with ID "${targetId}" not found.`);
    return;
  }

  // Calculate the target position
  const targetPosition = targetElement.getBoundingClientRect().top + window.pageYOffset + config.offset;

  // Use window.scrollTo with smooth behavior for non-GSAP fallback
  if (typeof window !== 'undefined') {
    try {
      // Use GSAP for smooth scrolling with custom easing
      import('gsap').then((gsap) => {
        gsap.default.to(window, {
          duration: config.duration,
          scrollTo: {
            y: targetPosition,
            autoKill: false
          },
          ease: config.ease,
          onComplete: () => {
            if (options.onComplete) {
              options.onComplete();
            }
          }
        });
      }).catch(() => {
        // Fallback to standard smooth scrolling if GSAP fails
        window.scrollTo({
          top: targetPosition,
          behavior: 'smooth'
        });
      });
    } catch (error) {
      // Fallback for environments where dynamic imports aren't supported
      window.scrollTo({
        top: targetPosition,
        behavior: 'smooth'
      });
    }
  }
};

/**
 * Initializes scroll event listeners for navigation items
 * @param {string} navLinkSelector - CSS selector for navigation links
 * @param {Object} options - Scrolling options
 */
export const initSmoothScrolling = (navLinkSelector = 'a[href^="#"]', options = {}) => {
  const navLinks = document.querySelectorAll(navLinkSelector);

  navLinks.forEach(link => {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      
      // Extract target section ID from the href attribute
      const targetId = link.getAttribute('href').substring(1);
      
      // Scroll to the target section
      scrollToSection(targetId, options);
    });
  });
};

/**
 * Updates active navigation state based on scroll position
 * @param {string} navLinkSelector - CSS selector for navigation links
 * @param {string} activeClass - CSS class to apply to active navigation items
 * @param {number} offset - Offset for determining active section
 */
export const updateActiveNavOnScroll = (navLinkSelector = 'a[href^="#"]', activeClass = 'active', offset = 100) => {
  const sections = [];
  const navLinks = document.querySelectorAll(navLinkSelector);
  
  // Collect all sections targeted by navigation links
  navLinks.forEach(link => {
    const targetId = link.getAttribute('href').substring(1);
    const section = document.getElementById(targetId);
    if (section) {
      sections.push({ id: targetId, element: section, link });
    }
  });
  
  // Update active state on scroll
  const handleScroll = () => {
    const scrollPosition = window.scrollY + offset;
    
    // Find the current section
    for (let i = 0; i < sections.length; i++) {
      const { element, link } = sections[i];
      const nextSection = sections[i + 1];
      
      const sectionTop = element.offsetTop;
      const sectionHeight = element.offsetHeight;
      
      const isLastSection = i === sections.length - 1;
      const isInSection = scrollPosition >= sectionTop && 
        (isLastSection || scrollPosition < nextSection.element.offsetTop);
      
      if (isInSection) {
        // Remove active class from all links
        navLinks.forEach(link => link.classList.remove(activeClass));
        // Add active class to current link
        link.classList.add(activeClass);
        break;
      }
    }
  };
  
  // Add scroll event listener
  window.addEventListener('scroll', handleScroll);
  
  // Initial check
  handleScroll();
  
  // Return function to remove event listener
  return () => {
    window.removeEventListener('scroll', handleScroll);
  };
};