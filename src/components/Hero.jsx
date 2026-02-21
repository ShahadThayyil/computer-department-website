import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const Hero = () => {
  const { scrollY } = useScroll();
  
  // Parallax shift for that extra layer of depth when scrolling
  const xLeft = useTransform(scrollY, [0, 1000], [0, -200]);
  const xRight = useTransform(scrollY, [0, 1000], [0, 200]);
  const opacity = useTransform(scrollY, [0, 300], [1, 0]);

  const images = [
    "https://images.unsplash.com/photo-1591405351990-4726e331f141?auto=format&fit=crop&q=80&w=800",
    "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&q=80&w=800",
    "https://images.unsplash.com/photo-1581092580497-e0d23cbdf1dc?auto=format&fit=crop&q=80&w=800",
    "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=800",
  ];

  // We double the images to create a seamless loop
  const duplicatedImages = [...images, ...images, ...images];

  return (
    <section className="relative h-screen w-full flex flex-col items-center justify-center bg-[#FAF9F5] overflow-hidden selection:bg-[#D95D39] selection:text-white md:pt-30">
      
      {/* 1. BACKGROUND KINETIC GRID (Infinite Loop) */}
      <div className="absolute inset-0 flex flex-col justify-center gap-4 md:gap-8 opacity-[0.12] pointer-events-none">
        
        {/* Row 1: Moving Left */}
        <div className="flex overflow-hidden">
          <motion.div 
            style={{ x: xLeft }}
            animate={{ x: ["0%", "-50%"] }}
            transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
            className="flex gap-4 md:gap-8 whitespace-nowrap"
          >
            {duplicatedImages.map((src, i) => (
              <div key={i} className="w-[300px] h-[180px] md:w-[500px] md:h-[300px] rounded-2xl md:rounded-[2rem] border-2 md:border-4 border-[#1A1A18] overflow-hidden grayscale">
                <img src={src} className="w-full h-full object-cover" alt="SSM Polytechnic" />
              </div>
            ))}
          </motion.div>
        </div>
        
        {/* Row 2: Moving Right */}
        <div className="flex overflow-hidden">
          <motion.div 
            style={{ x: xRight }}
            animate={{ x: ["-50%", "0%"] }}
            transition={{ duration: 35, repeat: Infinity, ease: "linear" }}
            className="flex gap-4 md:gap-8 whitespace-nowrap"
          >
            {duplicatedImages.map((src, i) => (
              <div key={i} className="w-[300px] h-[180px] md:w-[500px] md:h-[300px] rounded-2xl md:rounded-[2rem] border-2 md:border-4 border-[#1A1A18] overflow-hidden grayscale">
                <img src={src} className="w-full h-full object-cover" alt="SSM Labs" />
              </div>
            ))}
          </motion.div>
        </div>

      </div>

      {/* 2. CENTRAL CONTENT ANCHOR */}
      <div className="relative z-10 container mx-auto px-6 flex flex-col items-center text-center">
        
        {/* Removed Badge per request */}

        {/* Massive Responsive Headline */}
        <motion.h1 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="text-[15vw] lg:text-[9rem] font-black text-[#1A1A18] leading-[0.8] tracking-tighter mb-8 md:mb-12"
        >
          ENGINEER <br />
          <span className="text-transparent" style={{ WebkitTextStroke: '1.5px #1A1A18' }}>YOUR WAY.</span>
        </motion.h1>

        {/* Responsive Content Block */}
        <div className="max-w-3xl">
          <p className="text-lg md:text-3xl font-black text-[#1A1A18] leading-tight mb-8 md:mb-12">
            Providing top-quality education and <br className="hidden md:block"/> high-end placements since 1988.
          </p>
          
          <div className="flex flex-col md:flex-row items-center justify-center gap-6 md:gap-8">
            <button className="w-full md:w-auto group relative bg-[#D95D39] text-white px-10 md:px-12 py-4 md:py-5 font-black text-xs uppercase tracking-widest overflow-hidden transition-all shadow-[6px_6px_0px_#1A1A18]">
              <span className="relative z-10">Start Your Journey</span>
              <div className="absolute inset-0 bg-[#1A1A18] translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
            </button>
            
            <div className="text-center md:text-left md:border-l-4 border-[#1A1A18] md:pl-6">
              <p className="text-[10px] md:text-xs font-black text-[#4A4843] uppercase tracking-widest">Department Of</p>
              <p className="text-xs md:text-sm font-black text-[#1A1A18] uppercase">Computer Engineering</p>
            </div>
          </div>
        </div>
      </div>

      {/* 3. SCROLL INDICATOR (Hides on Mobile for Cleanliness) */}
      <motion.div 
        style={{ opacity }}
        className="hidden md:flex absolute bottom-10 left-10 items-center gap-4 rotate-[-90deg] origin-left"
      >
        <span className="font-mono text-[10px] font-black tracking-widest text-[#1A1A18]/40 uppercase">
          Slide_to_Scan
        </span>
        <div className="w-20 h-px bg-[#1A1A18]/20"></div>
      </motion.div>

    </section>
  );
};

export default Hero;