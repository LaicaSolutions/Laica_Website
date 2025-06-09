import { useEffect, useRef } from 'react';
import { FaRocket } from 'react-icons/fa';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const TimelineSection = () => {
  const sectionRef = useRef(null);
  const titleRef = useRef(null);
  const timelineRef = useRef(null);
  const rocketRef = useRef(null);
  
  useEffect(() => {
    const ctx = gsap.context(() => {
      // Title animation
      gsap.from(titleRef.current, { 
        opacity: 0,
        y: -30,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
          toggleActions: "play none none none"
        },
        duration: 1
      });

      // Timeline items animation
      gsap.from(timelineRef.current.children, { 
        opacity: 0,
        scale: 0.8,
        stagger: 0.15,
        scrollTrigger: {
          trigger: timelineRef.current,
          start: "top 85%",
          toggleActions: "play none none none"
        },
        duration: 0.8,
        ease: "back.out(1.7)"
      });
      
      // Rocket animation along the path
      gsap.to(rocketRef.current, {
        motionPath: {
          path: "#timeline-path",
          align: "#timeline-path",
          alignOrigin: [0.5, 0.5],
          autoRotate: true
        },
        duration: 8,
        ease: "power1.inOut",
        scrollTrigger: {
          trigger: timelineRef.current,
          start: "top bottom",
          end: "bottom top",
          scrub: 1
        }
      });
      
    }, sectionRef);
    
    return () => ctx.revert();
  }, []);

  const timelineEvents = [
    {
      year: "2023",
      title: "Lift Off",
      description: "Laica was founded with a vision to reconnect families through meaningful offline experiences."
    },
    {
      year: "2023",
      title: "Acceleration Program",
      description: "Selected for the SpaceTech Accelerator to develop our platform and methodology."
    },
    {
      year: "2024",
      title: "MVP Launch",
      description: "First version released to 100 test families with incredible feedback."
    },
    {
      year: "2024",
      title: "Growing Community",
      description: "Expanding our user base and refining our activities based on real family experiences."
    },
    {
      year: "2025",
      title: "The Future",
      description: "Expanding globally to help families everywhere reclaim their connection."
    }
  ];

  return (
    <div 
      ref={sectionRef} 
      className="relative min-h-screen flex items-center py-20 overflow-hidden"
    >
      {/* Comet background */}
      <div className="absolute inset-0">
        {[...Array(10)].map((_, i) => (
          <div 
            key={i}
            className="absolute bg-gradient-to-r from-[#7FDBDA] to-transparent rounded-full blur-sm"
            style={{
              width: `${Math.random() * 150 + 50}px`,
              height: `${Math.random() * 5 + 2}px`,
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 40}%`,
              opacity: Math.random() * 0.4 + 0.1,
              transform: `rotate(${Math.random() * 20 - 10}deg)`
            }}
          ></div>
        ))}
      </div>
      
      {/* Planet backdrop */}
      <div className="absolute left-[-10%] bottom-[-20%] w-[30vw] h-[30vw] rounded-full bg-gradient-to-t from-[#4B3F72]/30 to-transparent"></div>

      <div className="container mx-auto px-4 z-10">
        <div className="text-center mb-16">
          <h2 
            ref={titleRef}
            className="font-baloo text-3xl md:text-4xl lg:text-5xl font-bold text-[#F9F9F9] mb-6"
          >
            Our <span className="text-[#7FDBDA]">Intergalactic</span> Journey
          </h2>
          <p className="font-inter text-xl text-[#F9F9F9]/80 max-w-3xl mx-auto">
            From liftoff to real-world impact, every step counts in our mission to reconnect families.
          </p>
        </div>

        {/* Timeline */}
        <div className="relative max-w-5xl mx-auto mt-20 px-4">
          {/* Timeline path */}
          <svg className="absolute top-0 left-0 w-full h-full" style={{ zIndex: -1 }}>
            <path 
              id="timeline-path"
              d="M50,20 Q150,50 250,30 Q350,10 450,40 Q550,70 650,50 Q750,30 850,60 Q950,90 1050,70"
              stroke="#7FDBDA" 
              strokeWidth="3" 
              strokeDasharray="5,5" 
              fill="none" 
            />
          </svg>
          
          {/* Rocket that moves along the path */}
          <div 
            ref={rocketRef} 
            className="absolute -left-4 top-0 w-8 h-8 flex items-center justify-center"
          >
            <FaRocket className="text-[#FFC857] text-2xl transform -rotate-45" />
            <div className="absolute w-8 h-4 bg-gradient-to-r from-[#FFC857]/80 to-transparent rounded-full blur-sm -z-10"></div>
          </div>
          
          {/* Timeline events */}
          <div ref={timelineRef} className="relative">
            {timelineEvents.map((event, index) => (
              <div 
                key={index} 
                className="relative mb-20 flex flex-col items-center"
                style={{ 
                  marginLeft: `${(index % 2 === 0 ? 5 : 50) + index * 10}%`,
                  marginTop: `${index % 2 === 0 ? 0 : 80}px`
                }}
              >
                {/* Planet milestone */}
                <div className={`
                  w-24 h-24 rounded-full flex items-center justify-center relative
                  ${index % 2 === 0 ? 'bg-gradient-to-br from-[#4B3F72]/70 to-[#0D1B2A]' : 'bg-gradient-to-tl from-[#7FDBDA]/60 to-[#0D1B2A]'}
                `}>
                  <div className={`w-20 h-20 rounded-full flex items-center justify-center bg-gradient-to-r ${index === timelineEvents.length - 1 ? 'from-[#FFC857]/40 to-[#0D1B2A]' : 'from-[#0D1B2A] to-[#0D1B2A]'}`}>
                    <span className="font-baloo text-lg font-bold text-[#F9F9F9]">{event.year}</span>
                  </div>
                  {/* Planet crater/features */}
                  <div className="absolute top-[15%] right-[20%] w-3 h-3 rounded-full bg-[#0D1B2A]/60"></div>
                  <div className="absolute bottom-[25%] left-[15%] w-2 h-2 rounded-full bg-[#0D1B2A]/60"></div>
                </div>
                
                <div className="mt-4 text-center max-w-xs">
                  <h3 className="font-baloo text-xl font-bold text-[#FFC857] mb-2">
                    {event.title}
                  </h3>
                  <p className="font-inter text-[#F9F9F9]/80 text-sm">
                    {event.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TimelineSection;