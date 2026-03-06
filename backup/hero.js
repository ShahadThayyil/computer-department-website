import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const Hero = () => {
  const { scrollY } = useScroll();

  const textY = useTransform(scrollY, [0, 500], [0, 200]);
  const tagY = useTransform(scrollY, [0, 500], [0, -50]); 
  const tagScale = useTransform(scrollY, [0, 500], [0.85, 1.1]);

  return (
    <section className="relative h-screen w-full bg-black overflow-hidden flex flex-col items-center justify-center selection:bg-[#FF4D00] md:pt-44">
      
      {/* 1. TOP SAFE ZONE */}
      <div className="absolute top-0 left-0 w-full h-[20vh] md:h-[30vh] bg-gradient-to-b from-black via-black/95 to-transparent z-[60] pointer-events-none"></div>

      {/* 2. MAIN CONTENT STACK */}
      <motion.div 
        style={{ y: textY }}
        className="relative z-10 w-full h-full flex flex-col items-center justify-center px-6"
      >
        
        {/* --- MOBILE ONLY: GEOMETRIC LOOK --- */}
    {/* --- MOBILE ONLY: GEOMETRIC LOOK --- */}
<div className="md:hidden flex flex-col items-center w-full space-y-6">
  
  {/* Modern Header Labels */}
  <div className="flex justify-between w-full border-l-2 border-[#FF4D00] pl-4">
    <div className="flex flex-col">
      <span className="font-mono text-[10px] text-[#FF4D00] leading-none">EST. 1988</span>
      <span className="font-mono text-[8px] text-[#8A8A8A] uppercase tracking-tighter">Verified_System</span>
    </div>
    <span className="font-mono text-[10px] text-[#8A8A8A] self-end">SSM_CORE.v3</span>
  </div>

  {/* MODERN CLIP-PATH SHAPE */}
  <div 
    className="relative w-full h-[40vh] bg-[#FF4D00]/10 overflow-hidden"
    style={{ 
      clipPath: 'polygon(10% 0, 100% 0, 90% 100%, 0% 100%)' // Diagonal Parallel Shape
    }}
  >
    {/* Internal Stroke effect for the shape */}
    <div 
      className="absolute inset-0 border-x-2 border-[#FF4D00]/30 z-20 pointer-events-none"
      style={{ clipPath: 'polygon(10% 0, 100% 0, 90% 100%, 0% 100%)' }}
    ></div>

    <video 
      autoPlay muted loop playsInline 
      className="absolute inset-0 w-full h-full object-cover grayscale-[20%] contrast-125"
    >
      <source src="/video.mp4" type="video/mp4" />
    </video>

    {/* Overlay Text */}
    <div className="absolute inset-0 flex items-center justify-center">
      <h2 className="text-white font-black text-7xl tracking-tighter mix-blend-overlay opacity-80">
        VISION
      </h2>
    </div>
  </div>

  {/* Bottom Content */}
  <div className="w-full flex flex-col items-end">
    <h2 className="text-[#FF4D00] font-black text-5xl tracking-tighter italic leading-none">
      LEGACY
    </h2>
    <div className="h-[1px] w-24 bg-[#FF4D00] mt-2"></div>
    <p className="font-mono text-[7px] text-[#8A8A8A] mt-3 tracking-[0.2em] uppercase text-right max-w-[200px]">
      Advancing digital frontiers through <br/> architectural precision.
    </p>
  </div>
</div>

        {/* --- DESKTOP ONLY: ORIGINAL STROKE/MASK LOOK --- */}
        <div className="hidden md:flex flex-col items-center">
          <div className="relative inline-block text-center w-full">
            <div className="relative flex items-center justify-center bg-black overflow-hidden">
              <video autoPlay muted loop playsInline className="absolute inset-0 w-full h-full object-cover scale-110 pointer-events-none">
                <source src="/video.mp4" type="video/mp4" />
              </video>
              <div className="relative">
                <h2 className="relative z-10 text-[24vw] font-black leading-none tracking-tighter select-none bg-black text-white mix-blend-multiply px-4 before:content-[''] before:absolute before:inset-[-100%] before:bg-black before:z-[-1]">
                  VISION
                </h2>
                <h2 className="absolute inset-0 z-20 text-[24vw] font-black leading-none tracking-tighter select-none px-4 pointer-events-none text-transparent"
                  style={{ WebkitTextStroke: '2px #FF4D00' }}>
                  VISION
                </h2>
              </div>
            </div>
            <h2 className="text-[24vw] font-black text-transparent leading-none tracking-tighter select-none mt-[-2vw]" 
              style={{ WebkitTextStroke: '1px #FF4D00' }}>
              EST_1988
            </h2>
          </div>
        </div>

      </motion.div>

      {/* 3. TECHNICAL ID TAG (Shared but adapted) */}
      

      {/* 4. ATMOSPHERIC LIGHTING */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-[#FF4D00]/5 blur-[80px] md:blur-[180px] rounded-full pointer-events-none animate-pulse"></div>

      {/* 5. BOTTOM TRANSITION */}
      <div className="absolute bottom-0 left-0 w-full h-[10vh] md:h-[15vh] bg-gradient-to-t from-[#000000] to-transparent z-[60]"></div>
      
    </section>
  );
};

export default Hero;