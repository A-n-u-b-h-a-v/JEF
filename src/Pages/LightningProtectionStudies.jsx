import React, { useState, useEffect, useRef } from "react";
import MainFooter from '../Components/Footer/MainFooter';
import gsap from 'gsap';
import {Link } from 'react-router-dom';
import Navbar from "../Components/Navbar/Navbar";

const LightningProtectionStudies = () => {


  useEffect(() => {
    gsap.utils.toArray('.Y-axis-text-Title-Service2').forEach((element) => {
        gsap.fromTo(
            element,
            { opacity: 0 , y: 50 },
            {   y: 0,
                opacity: 1,
                duration: 0.8,
                scrollTrigger: {
                    trigger: element,
                    stagger: 0.6,
                    start: 'top 100%',
                    toggleActions: 'play none none none',
                      },
                  }
              );
          });
      }, []);

  // Testimonials


      useEffect(() => {
        gsap.fromTo(
          gsap.utils.toArray('.Y-axis-Testimonials'),
          { opacity: 0, y: 100 },
          {
            y: 0,
            opacity: 1,
            duration: 1.1,
            stagger: 0.3,
            scrollTrigger: {
              trigger: '.Testimonials',
              start: 'top 80%',
              end: 'bottom 20%',
              toggleActions: 'play none none none',
            },
          }
        );
      }, []);


// For Key Components

      useEffect(() => {
        gsap.fromTo(
          gsap.utils.toArray('.Y-axis-card-anm'),
          { opacity: 0, y: 100 },
          {
            y: 0,
            opacity: 1,
            duration: 1.1,
            stagger: 0.3,
            scrollTrigger: {
              trigger: '.card-slider',
              start: 'top 80%',
              end: 'bottom 20%',
              toggleActions: 'play none none none',
            },
          }
        );
      }, []);

      // Our Services Animation 

      useEffect(() => {
        gsap.fromTo(
          gsap.utils.toArray('.Y-axis-Service-anm'),
          { opacity: 0, y: 100 },
          {
            y: 0,
            opacity: 1,
            duration: 1.1,
            stagger: 0.3,
            scrollTrigger: {
              trigger: '.circle-slider',
              start: 'top 60%',
              end: 'bottom 20%',
              toggleActions: 'play none none none',
            },
          }
        );
      }, []);




  useEffect(() => {
    
    gsap.utils.toArray('.ContactUsAnimation').forEach((element) => {
        gsap.fromTo(
            element,
            { opacity: 0 , y: 50 },
            {   y: 0,
                opacity: 1,
                duration: 0.8,
                stagger: 0.2,
                scrollTrigger: {
                    trigger: element,
                    start: 'top 70%',
                    toggleActions: 'play none none none',
                      },
                  }
              );
          });
      }, []);



  const services = [
    { image: '', text: '' },
    { image: '', text: '' },
    { image: '', text: '' },
    { image: './HomePageImg/WhatWeDoSection/Earthing Studies 2.png', text: 'Earthing studies' },
    { image: './HomePageImg/WhatWeDoSection/Lightning Protection 2.png', text: 'Lightning protection system studies' },
    { image: './HomePageImg/WhatWeDoSection/Power System Studies 2.png', text: 'Power system studies' },
    { image: '', text: '' },
    { image: '', text: '' },
    { image: '', text: '' },
    { image: '', text: '' },
    { image: '', text: '' },
    { image: '', text: '' },
    { image: '', text: '' },
    { image: './HomePageImg/WhatWeDoSection/Power Quality and Root cause Analysis 2.png', text: 'Power quality & root cause analysis' },
    { image: './HomePageImg/WhatWeDoSection/Instrumentation Earthing 2.png', text: 'Instrumentation earthing' },
    { image: '', text: '' },
    { image: '', text: '' },
    { image: '', text: '' },
    { image: '', text: '' },
  ];
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const [backgroundImage, setBackgroundImage] = useState('');
  const serviceRefs = useRef([]);
  const imgRef = useRef(null);

  useEffect(() => {
    const img = imgRef.current;
    if (img) {
      gsap.fromTo(img, 
        { opacity: 0 }, 
        { 
          opacity: 1, 
          duration: 2.5,
          ease: 'power2.inOut'
        }
      );
    }
  }, [imgRef]);

  const handleMouseEnter = (index, image) => {
    setHoveredIndex(index);
    setBackgroundImage(image);
  };

  const handleMouseLeave = () => {
    setHoveredIndex(null);
    setBackgroundImage('');
  };

  useEffect(() => {
    serviceRefs.current = serviceRefs.current.slice(0, services.length);
  }, [services]);

  useEffect(() => {
    serviceRefs.current.forEach((ref, index) => {
      if (ref) {
        if (index === hoveredIndex && services[index]?.text !== '') {
          gsap.to(ref, { scale: 1.3, opacity: 1, duration: 0.2, ease: 'power2.inOut' });
        } else {
          gsap.to(ref, {
            scale: hoveredIndex !== null ? 0.9 : 1,
            opacity: hoveredIndex !== null ? 0.5 : 1,
            // border: hoveredIndex !== null && services[index]?.text === '' ? '1px solid white' : '',
            backgroundColor: hoveredIndex !== null && services[index]?.text === '' ? 'transparent' : '',
            duration: 0.2,
            ease: 'power2.inOut'
          });
        }
      }
    });
  }, [hoveredIndex, services]);


      const navItems = [
        { label: 'HOME', isActive: true },
        { label: 'SERVICES', isActive: true },
        { label: 'LIGHTNING PROTECTION STUDIES', isActive: false },
      ];

      const [activeIndex, setActiveIndex] = useState(0);

      const handleClick = (index) => {
        setActiveIndex(index);
      };
    
      const benefitItems = [
        "ABOUT Earthing studies",
        'What is an Earthing/Grounding System Studies',
        'Earthing/Grounding System Studies',
        'Our Certifications and Expertise',
        'Detailed Study Reports and Analysis',
        'Benefits of Professional Earthing/Grounding System Studies',
      ];

      const components = [
        
        {
          imageSrc: './SerivePage/01.png',
          title: 'Risk Assessment',
          description: 'Using Risk Assessment Software to compare calculated risk against tolerable risk levels as per IEC 62305-2.',
        },
        {
          imageSrc: './SerivePage/02.png',
          title: 'Lightning Protection System (LPS) Design',
          description: 'Selecting from a choice of methods like the Rolling Sphere, Protection Angle, and Mesh Methods to design effective LPS.',
        },
        {
          imageSrc: './SerivePage/03.png',
          title: 'Surge Protection Devices (SPD):',
          description: 'Selecting Class I, II, and III SPDs at various levels of the electrical distribution system to protect against conducted surges.',
        },
        {
          imageSrc: './SerivePage/04.png',
          title: 'Additional Mitigation Techniques',
          description: 'Using equi-potential bonding, warning notices, and other best engineering practices to further reduce risk.',
        },
            ]

      const buttons = [
        { text: 'CONTACT US', className: 'bg-red-700' }
      ];
    

  return (
   <>
    
    < Navbar/>

    {/* Landing Img Section */}

    <section className="flex overflow-hidden h-screen flex-col bg-white">
      <div className="flex relative flex-col w-full h-screen max-md:pb-24 max-md:max-w-full">
        <img
          loading="lazy"
          src="./SerivePage/Lightning Protection 1.png"
          alt=""
          className="object-cover absolute inset-0 size-full"
        />
        <div className="flex inset-y-3/4 lg:inset-x-20 p-4 relative flex-col self-center w-full max-md:mt-10 max-md:max-w-full mb-0 mx-40 max-w-full max-md:mb-2.5">
          <h1 className="Y-axis-text-Title-Service2 uppercase lg:text-5xl md:text-4xl text-3xl font-bold my-auto tracking-wider text-white max-md:max-w-full max-md:text-4xl">
          Lightning Protection Studies
          </h1>
          <div className="Y-axis-text-Title-Service2 flex gap-6 items-center self-start mt-8 text-lg uppercase text-neutral-900  max-md:mt-10">
            
            <button className="px-5 lg:px-10 self-stretch  py-2 lg:py-3 my-auto bg-white border border-solid border-zinc-900 border-opacity-10 text-lg hover:bg-red-700 hover:text-white uppercase 2xl:min-h-[64px] rounded-[50px]">
              Get in touch
            </button>
          </div>
        </div>
      </div>
    </section>



    {/* Contact Us section */}



    <section className="flex h-auto -mb-11 md:mb-0 overflow-hidden flex-col bg-stone-900">
      <div className="flex overflow-hidden flex-col w-full bg-white max-md:max-w-full" />
      <nav className="flex flex-col justify-center py-6 px-24 w-full bg-zinc-800 min-h-[64px] max-md:px-5 max-md:max-w-full">
        <div className="flex w-full max-md:max-w-full">
          <div className="flex items-center h-full min-w-[240px]">
            {navItems.map((item, index) => (
              <div key={index} className="flex items-center self-stretch my-auto">
                <div className={`self-stretch my-auto text-xs tracking-wide leading-none uppercase whitespace-nowrap ${item.isActive ? 'text-red-700' : 'text-neutral-300'}`}>
                  {item.label}
                </div>
                {item.isActive && (
                  <div className="flex flex-col self-stretch px-2.5 my-auto w-[27px]">
                    <div className="flex items-center w-[7px]">
                      <div className="flex flex-col justify-center self-stretch my-auto min-h-[7px] w-[7px]">
                        <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/98403646f26f29fd8d19e6e57b2e9f8b5de2f748795475a0d9039378b1786404?placeholderIfAbsent=true&apiKey=7904fd7afaaf4ee2b0837ab86d91b244" alt="" className="object-contain flex-1 w-full aspect-square" />
                      </div>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </nav>
      <div className="ContactUsAnimation flex justify-center items-end self-center px-80 mt-24 max-w-full min-h-[80px] w-[770px] max-md:px-5 max-md:mt-10">
        <img loading="lazy" src="./SerivePage/LighningLogo.png" alt="Earthing Studies Logo" className="object-contain w-16 aspect-square" />
      </div>
      <header className="flex p-4 ContactUsAnimation flex-col items-center self-center mt-10 w-full text-base text-center text-white max-w-[1391px] max-md:mt-10 max-md:max-w-full">
        <h1 className=" flex flex-col max-w-full text-2xl font-medium uppercase leading-relaxed tracking-wider w-[1071px]">
          <div className="w-full max-md:max-w-full">
          Lightning Protection Studies and <br /> System Testing Services
          </div>
        </h1>
        <p className="self-stretch mt-12 font-light max-md:mt-10 max-md:max-w-full">
          JEF specializes in providing comprehensive Lightning Protection Studies to ensure the safety <br />
          and protection of your structures from lightning strikes. Our experienced team uses advanced <br />
          methodologies and standards to deliver effective lightning protection solutions as per IEC <br />
          standards for both existing and new structures.
        </p>
      </header>
      <div className="ContactUsAnimation flex flex-col self-center mt-14 max-w-full text-sm md:text-base leading-6 text-center text-red-700 w-[770px] max-md:mt-10">
        <p className="px-56 w-full max-md:px-5 max-md:max-w-full">
          Get in touch for Real-Life Case Studies and Testimonials
        </p>
        <div className="flex mt-2.5 w-full min-h-[24px] max-md:max-w-full" />
      </div>
      <button className="ContactUsAnimation flex gap-3.5 justify-center items-center self-center py-4 px-10 max-w-full text-sm tracking-wider leading-none text-center text-white uppercase border border-white border-solid rounded-[60px]">
        <span className="self-stretch my-auto">CONTACT US</span>
        <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/ad33562234bc92238f0281eafa23a9b3c49a837f5ae8d3662c67bc1d8b919e14?placeholderIfAbsent=true&apiKey=7904fd7afaaf4ee2b0837ab86d91b244" alt="" className="object-contain shrink-0 self-stretch my-auto w-6 aspect-square" />
      </button>
   </section>

    

   

      <section>
          < VerticalCarousel />
      </section>



    

      <section>
        < CarouselSection components={components} />
      </section>


      <section>
        <div className={` h-full bg-slate-900`}>
          <div 
            className=" w-full h-full py-20 mainSection bg-stone-900 overflow-hidden relative">
            {backgroundImage && (
              <div className="absolute inset-0 w-full h-full ">
                <img
                  ref={imgRef}
                  src={backgroundImage}
                  alt=""
                  className="absolute inset-0 w-full h-full object-cover"
                />
              </div>
            )}
            <section className="flex overflow-hidden flex-col text-base leading-6 text-center text-white uppercase w-full relative z-10">
              <h2 className="self-center text-3xl font-semibold leading-none text-red-700 tracking-[4.53px] max-md:max-w-full max-md:text-4xl">
                Our Services
              </h2>
              <div className="circle-slider flex flex-wrap justify-center mt-20 max-md:mt-10 w-full h-[39vh] lg:h-[55vh]">
                <div className='Y-axis-Service-anm flex items-center gap-x-2 md:gap-x-5 lg:gap-x-10 circleChild'>
                  {services.slice(0, 9).map((service, index) => (
                    <ServiceItem
                      key={index}
                      text={service.text}
                      image={service.image}
                      ref={(el) => (serviceRefs.current[index] = el)}
                      onMouseEnter={() => handleMouseEnter(index, service.image)}
                      onMouseLeave={handleMouseLeave}
                    />
                  ))}
                </div>
                <div className='Y-axis-Service-anm flex gap-x-2 md:gap-x-5 lg:gap-x-10'>
                  {services.slice(9).map((service, index) => (
                    <ServiceItem
                      key={index + 9}
                      text={service.text}
                      image={service.image}
                      ref={(el) => (serviceRefs.current[index + 9] = el)}
                      onMouseEnter={() => handleMouseEnter(index + 9, service.image)}
                      onMouseLeave={handleMouseLeave}
                    />
                  ))}
                </div>
              </div>
            </section>
            </div>
        </div>
      </section>



  <section>
    < TestimonialsSection />
  </section>

 
    < MainFooter />
   </>
  )
}


const testimonials = [
  "We are thankful to the JEF Techno's team for clearing many of our doubts related to lightning protection. LPS audit was conducted for our plant that happened successfully.",
  "JEF supported us in providing very innovative and practical solutions to earthing and lightning protection systems. Every input from the team was with proper technical justification and in line with national & international standards.",
  "We have been associated with JEF Techno for the last 5 years. Product Quality and After Sales Service provided by them is up to the mark.",
  "We have taken JEF’s technical expertise for Lightning Protection System for our Bangalore Warehouse. While working with them, we got to know that lightning protection is just not some product, it’s a complete solution."
];

function TestimonialsSection() {
  const [currentTestimonialIndex, setCurrentTestimonialIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimonialIndex((prevIndex) =>
        prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
      );
    }, 3000); // Adjust the duration as needed

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="flex overflow-hidden flex-col text-center text-white w-full">
      <div className="flex overflow-hidden flex-col justify-center w-full h-[532px] max-md:max-w-full">
        <div className="flex overflow-hidden flex-col w-full bg-white max-md:max-w-full">
          <div className="flex relative flex-col justify-center items-center px-5 sm:px-10 md:px-20 py-20 w-full min-h-[532px]">
            <img 
              loading="lazy" 
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/f8e06a7d505c4129965e4c18c8e0cb8829849853aeb8e18090ea753ccccfdc6f?placeholderIfAbsent=true&apiKey=7904fd7afaaf4ee2b0837ab86d91b244" 
              alt="Background for testimonials section" 
              className="object-cover absolute inset-0 size-full"
            />
            <div className="Testimonials gap-5 flex Y-axis-Testimonials relative flex-col max-w-full w-full md:w-[679px]">
              <h2 className="self-center text-base tracking-widest leading-snug">
                TESTIMONIALS
              </h2>
              <h3 className="mt-8 text-2xl sm:text-3xl md:text-4xl font-normal uppercase tracking-widest max-md:max-w-full">
                WHAT OUR CUSTOMERS SAY
              </h3>
              <div className="testimonial-slider mt-[5%]">
                <p
                  className="testimonial-slide"
                  style={{
                    transform: `translateX(-${currentTestimonialIndex * 100}%)`,
                  }}
                >
                  {testimonials.map((text, index) => (
                    <span key={index} className="testimonial-text text-gray-400">
                      {text}
                    </span>
                  ))}
                </p>
                </div>
                <div className="flex flex-wrap justify-center mt-10 max-w-full tracking-wider text-white uppercase w-full   mx-auto">
              <Link to={'/GetInTouchForm'}>
               <button className={`flex overflow-hidden justify-center bg-red-700 items-center self-center px-16 md:px-14 py-3 my-auto border border-solid border-zinc-800 border-opacity-10 min-h-[55px] rounded-[60px] `}>
                        CONTACT US
                </button>
               </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section> 
  );
}



const ServiceItem = React.forwardRef(({ text, onMouseEnter, onMouseLeave }, ref) => {
  return (
    <div
  ref={ref}
  className={`flex w-[7.2rem] h-[7.2rem] md:h-[11rem] md:w-[11rem] lg:w-[13rem] lg:h-[13rem] rounded-full items-center justify-center p-[0.5%] lg:p-[1.5%] transition-all duration-300 
    ${text === "" ? "bg-transparent" : "border border-solid hover:bg-red-600"}`}
  onMouseEnter={() => {
    if (text !== "") {
      onMouseEnter();
    }
  }}
  onMouseLeave={() => {
    if (text !== "") {
      onMouseLeave();
    }
  }}
>
  <span className="text-center text-[60%] md:text-sm ">{text}</span>
</div>

  );
});






function CarouselSection({ components }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [visibleCards, setVisibleCards] = useState(1); // Default to 1 for mobile
  const totalCards = components.length;

  // Function to handle the right click (move forward)
  const handleCarouselClickRight = () => {
    setCurrentIndex((prevIndex) => {
      return (prevIndex + 1) % totalCards; // Move forward one card
    });
  };

  // Function to handle the left click (move backward)
  const handleCarouselClickLeft = () => {
    setCurrentIndex((prevIndex) => {
      return (prevIndex - 1 + totalCards) % totalCards; // Move backward one card
    });
  };

  // Update the number of visible cards based on screen size
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 640) {
        setVisibleCards(1); // Mobile
      } else if (window.innerWidth <= 1024) {
        setVisibleCards(2); // Medium
      } else {
        setVisibleCards(3); // Large
      }
    };

    handleResize(); // Set initial value
    window.addEventListener('resize', handleResize); // Listen for resize events

    return () => window.removeEventListener('resize', handleResize); // Cleanup listener
  }, []);

  return (
    <section className="flex xl:px-[100px] lg:px-[60px] flex-col items-start px-5 pt-16 pb-32 bg-black">
      <div className="flex flex-wrap gap-5 justify-between w-full">
        <h2 className="md:text-3xl text-2xl font-bold leading-none text-red-700 uppercase">
          KEY COMPONENTS OF THE STUDY
        </h2>
        <div className="flex self-end flex-col min-h-[60px]">
          <div className="flex gap-5 items-start w-full max-w-[140px]">
            {/* Left Arrow Button */}
            <div className="flex justify-center items-center min-h-[60px] w-[60px]">
              <button onClick={handleCarouselClickLeft}>
                <div className="flex overflow-hidden flex-1 shrink justify-center items-center self-stretch p-5 my-auto w-full border border-white border-solid basis-0 min-h-[60px] rounded-[60px]">
                  <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/150914823e04aa0b72d10dfe3eaaf22d38b599636111c8b7ad6e80476980a940?placeholderIfAbsent=true&apiKey=7904fd7afaaf4ee2b0837ab86d91b244"
                    alt="Left Arrow"
                    className="object-contain flex-1 w-6 aspect-square"
                  />
                </div>
              </button>
            </div>
            {/* Right Arrow Button */}
            <div className="flex justify-center items-center min-h-[60px] w-[60px]">
              <button onClick={handleCarouselClickRight}>
                <div className="flex overflow-hidden flex-1 shrink justify-center items-center self-stretch px-5 my-auto bg-white border border-solid basis-0 border-zinc-900 border-opacity-10 h-[60px] min-h-[60px] rounded-[60px] w-[60px]">
                  <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/5bcda9453f93d58b48e207cfd8d3b19c69b7c4768fd9e522cbaaea6950c4e4b3?placeholderIfAbsent=true&apiKey=7904fd7afaaf4ee2b0837ab86d91b244"
                    alt="Right Arrow"
                    className="object-contain flex-1 w-6 aspect-square"
                  />
                </div>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Carousel Section */}
      <div className="card-slider flex justify-center items-center mt-10 w-full overflow-hidden">
        {/* Carousel wrapper */}
        <div
          className="flex transition-transform duration-500 ease-in-out"
          style={{
            transform: `translateX(-${(currentIndex * 100) / visibleCards}%)`, // Move based on currentIndex and visibleCards
            width: `${totalCards * (100 / visibleCards)}%`, // Total width based on total cards and visible cards
          }}
        >
          {components.map((component) => (
            <div
              key={component.title}
              className="Y-axis-card-anm flex overflow-hidden flex-col self-center sm:self-start items-center sm:items-start w-full "
              style={{
                flex: `0 0 ${100 / visibleCards}%`, // Adjust width of each card based on visibleCards
              }}
            >
              <img src={component.imageSrc} alt={component.title} className="h-[3rem]" />
              <h3 className="text-red-700 font-normal w-[80vw] sm:w-[90%] text-2xl sm:text-start my-5 text-center">{component.title}</h3>
              <p className=" text-gray-400 text-center w-[80vw] sm:w-[70%] font-thin lg:w-[80%] sm:text-start text-lg max-w-screen-xl">{component.description}</p>
            </div>
            
            
          ))}
        </div>
      </div>

    </section>
  );
}














const VerticalCarousel = () => {
  const benefitItems = [
    "ABOUT Lightning Protection Study?",
    "Importance of Lightning Protection Studies",
    "Our Approach to Lightning Protection Study Service",
    "Our Certifications and Expertise",
    "Detailed Study Reports and Analysis",
    "Benefits of Professional Earthing/Grounding System Studies",
  ];

  const cardContents = [
    {
      imgSrc:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/6ea8583cc00a44231bfb61be46e3517321fdd08d7a42dfe22fc28df7bfdc2e24?placeholderIfAbsent=true&apiKey=7904fd7afaaf4ee2b0837ab86d91b244",
      title: "What is a Lightning Protection Study?",
      description:
        "A Lightning Protection Study involves evaluating the adequacy and effectiveness of existing lightning protection systems. It includes risk assessment, system design and implementable protective measures to safeguard structures & equipment from lightning-induced damage.",
    },
    {
      imgSrc:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/6ea8583cc00a44231bfb61be46e3517321fdd08d7a42dfe22fc28df7bfdc2e24?placeholderIfAbsent=true&apiKey=7904fd7afaaf4ee2b0837ab86d91b244",
      title: "Importance of Lightning Protection Studies",
      description:
        `Proper lightning protection is crucial for: | Ensuring the safety of personnel and equipment by preventing lightning-related
      hazards. | Complying with international standards such as IEC 62305 and local regulations.|Reducing the risk of fire, equipment damage, and operational downtime.|Protecting critical infrastructure and maintaining service continuity.`,
    },
    {
      imgSrc:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/6ea8583cc00a44231bfb61be46e3517321fdd08d7a42dfe22fc28df7bfdc2e24?placeholderIfAbsent=true&apiKey=7904fd7afaaf4ee2b0837ab86d91b244",
      title: "Our Approach to Lightning Protection Study Service",
      description:
      "At JEF, our Lightning Protection Studies encompass a range of key services:|Risk Assessment: Evaluating the risk of lightning strikes to determine the need for protection and the level of protection required.|System Design: Designing external and internal lightning protection systems based on the assessed risk and protection levels.|Implementation: One team will always have an eye; ensure the designs recommended will be practically implementable at the specific site factoring in all possible constraints and special requirements.|Cost: Our solutions will be cost optimal and our BOQ will always reflect the most effective cost for a given project."  
    },
    {
      imgSrc:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/6ea8583cc00a44231bfb61be46e3517321fdd08d7a42dfe22fc28df7bfdc2e24?placeholderIfAbsent=true&apiKey=7904fd7afaaf4ee2b0837ab86d91b244",
      title: "Our Certifications and Expertise",
      description:
      "JEF’s team is certified and trained in the latest standards and practices, including:|IS/IEC 62305: Comprehensive guidelines for lightning protection, risk management, and system design."
    },
    {
      imgSrc:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/6ea8583cc00a44231bfb61be46e3517321fdd08d7a42dfe22fc28df7bfdc2e24?placeholderIfAbsent=true&apiKey=7904fd7afaaf4ee2b0837ab86d91b244",
      title: "Detailed Study Reports and Analysis",
      description:
        `Our detailed reports include : |Comprehensive documentation of findings, measurements, and observations|Summary of compliance with relevant standards and recommendations for improvements.|Actionable insights for optimizing system safety and protection against lightning`,
    },
    {
      imgSrc:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/6ea8583cc00a44231bfb61be46e3517321fdd08d7a42dfe22fc28df7bfdc2e24?placeholderIfAbsent=true&apiKey=7904fd7afaaf4ee2b0837ab86d91b244",
      title: "Benefits of Professional Earthing/Grounding System Studies",
      description:
        "| Enhanced Safety: Reducing the risk of lightning-related hazards and protecting personnel and equipment.| Operational Reliability:Ensuring uninterrupted operations and protecting critical infrastructure |Standards Compliance: Meeting international and local regulations for lightning protection systems.|Cost Savings: Preventing costly damage and downtime through effective lightning protection measures.",
    },
  ];

  const [activeIndex, setActiveIndex] = useState(0);

  const handleClick = (index) => {
    setActiveIndex(index);
  };

  return (
    <section>
      <div className="overflow-hidden py-20 w-full bg-stone-900 max-md:pt-24 max-md:pl-5 max-md:mt-10 max-md:max-w-full">
        <div className="flex w-[95%] gap-5 max-md:flex-col">
          {/* Left Side: Benefit Items */}
          <div className="flex flex-col lg:w-[44%] max-md:ml-0 max-md:w-full">
            <ul className="hidden lg:flex flex-col mx-auto justify-center space-y-5 max-w-full text-sm leading-6 text-gray-400 w-[90%] lg:w-[70%] max-md:pl-5 max-md:ml-2.5">
              {benefitItems.map((item, index) => (
                <li
                  key={index}
                  className={`flex transition-all duration-300 ease-in-out items-start w-full rounded-xl cursor-pointer ${
                    activeIndex === index
                      ? "text-white md:text-xl xl:text-2xl font-semibold h-32 xl:h-56"
                      : "h-auto text-base"
                  }`}
                  onClick={() => handleClick(index)}
                >
                  {activeIndex === index && (
                    <div className="bg-red-500 w-1 h-full mr-4"></div>
                  )}
                  <div
                    className={`xl:w-[80%] uppercase min-w-[20%] ${
                      activeIndex === index ? "text-white" : "text-gray-400"
                    }`}
                  >
                    {item}
                  </div>
                </li>
              ))}
            </ul>
          </div>

          {/* Right Side: Vertical Carousel Content */}
          <div className="relative flex flex-col w-[56%] max-sm:h-[70vh] overflow-hidden max-md:ml-0 max-md:w-full">
            <div
              className="absolute transition-transform duration-500 ease-in-out"
              style={{ transform: `translateY(-${(activeIndex * 100)/6}%)`}}
            >
              {cardContents.map((content, index) => (
                  <div
                    key={index}
                    className="flex flex-col items-start text-2xl  md:text-3xl text-red-700 h-screen max-md:max-w-full"
                  >
                    <img
                      loading="lazy"
                      src={content.imgSrc}
                      alt={content.title}
                      className="object-contain max-w-full aspect-[1.77] w-[6rem] xl:w-[124px] transition-opacity duration-500 ease-in-out"
                    />
                    <ul className="lg:hidden flex flex-col mx-auto justify-center space-y-5 my-4 max-w-full text-sm leading-6 text-gray-400 w-[90%] ">
                        {benefitItems.slice(0, 1).map((item, index) => (
                          <li
                            key={index}
                            className={`flex transition-all duration-300 ease-in-out items-start w-full rounded-xl cursor-pointer ${
                              activeIndex === index
                                ? "text-white text-lg lg:text-2xl h-14 lg:h-24"
                                : "h-auto text-base"
                            }`}
                            onClick={() => handleClick(index)}
                          >
                            {activeIndex === index && (
                              <div className="bg-red-500 w-1 h-full mr-4"></div>
                            )}
                            <div
                              className={`w-[80%] uppercase min-w-[20%] ${
                                activeIndex === index ? "text-white" : "text-gray-400"
                              }`}
                            >
                              {item}
                            </div>
                          </li>
                        ))}
                      </ul>


                    <h2 className="mt-6 lg:w-[80%] md:text-2xl xl:text-3xl font-semibold ml-5 lg:ml-0 tracking-[4.53px] lg:leading-[60px] uppercase max-md:max-w-full">
                      {content.title}
                    </h2>
                    <div className="mt-10 max-md:max-w-full">
                      <div className="flex gap-5 max-md:flex-col">
                        <div className="flex h-auto flex-col w-full max-md:w-full">
                          {/* Splitting description by period and inserting line breaks with bullet */}
                          {content.description.split("|").map((sentence, idx) => (
                          <div key={idx} className="flex items-start">
                            <span className="leading-9 tracking-widest text-white max-md:max-w-full">
                              {idx > 0 && "•"} {/* Add bullet point for new lines */}
                            </span>
                            <p className="ml-4 text-base font-light lg:leading-7 tracking-widest text-white max-md:max-w-full">
                              {["Enhanced Safety:", "Operational Reliability:", "Standards Compliance:", "Cost Savings:"].includes(sentence.trim())
                                ? (
                                  <span className="text-red-500 !important">{sentence.trim()}</span> // Add the color red forcibly
                                ) : (
                                  sentence.trim() // Render the rest of the text as normal
                                )}
                            </p>



                          </div>
                        ))}



                        </div>
                      </div>
                    </div>
                  </div>
                ))}

            </div>
          </div>

          {/* Additional Image Section */}
          <div className="ml-5 w-[45%] max-md:ml-0 max-md:w-full">
            <div className="flex flex-col grow justify-center my-[6%] max-md:mt-10 max-md:max-w-full">
              <img
                loading="lazy"
                src="./SerivePage/magna-discovery.jpg.png"
                alt="Earthing/Grounding System Illustration"
                className="object-cover w-full h-full aspect-[0.96] max-md:max-w-full"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};











export default LightningProtectionStudies