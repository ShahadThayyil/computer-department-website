import React, { useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(ScrollTrigger);

const CoreFoundation = () => {
  const container = useRef();
  const editorialSection = useRef();
  const nbaSection = useRef();

  useGSAP(() => {
    const isMobile = window.innerWidth < 768;

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: container.current,
        start: "top top",
        end: "+=300%", // Long scroll for two distinct reveals
        pin: true,
        scrub: 1.2,
      }
    });

    // 1. Editorial Content Fade Out
    tl.to(editorialSection.current, {
      y: -60,
      opacity: 0,
      filter: "blur(10px)",
      duration: 1,
    })

    // 2. NBA Tag Center Reveal (The "Statement" moment)
    .fromTo(nbaSection.current, 
      { opacity: 0, scale: 0.9, y: 40 },
      { opacity: 1, scale: 1, y: 0, duration: 1 }
    )

    // 3. The Smooth Shutter Fade Out
    // Lifts the entire container and fades it to reveal the next section
    .to(container.current, {
      y: -100,
      opacity: 0,
      duration: 1.5,
      ease: "power2.inOut"
    }, "+=0.5");

  }, { scope: container });

  return (
    <section 
      ref={container} 
      className="relative h-screen w-full bg-[#FAF9F6] overflow-hidden"
    >
      {/* --- LAYER 1: SIMPLE EDITORIAL LAYOUT --- */}
      <div 
        ref={editorialSection} 
        className="absolute inset-0 z-10 flex flex-col items-center justify-center px-8"
      >
        <div className="max-w-4xl w-full">
          <h2 className="text-6xl md:text-[9vw] font-black uppercase tracking-tighter leading-[0.8] mb-12">
            Legacy <br /> 
            <span className="text-transparent" style={{ WebkitTextStroke: '1.5px #1A1A1A' }}>Defined.</span>
          </h2>
          
          <div className="flex flex-col md:flex-row gap-12 items-start md:items-end justify-between border-t border-black/10 pt-10">
            <p className="text-sm md:text-base font-medium max-w-xs text-black/50 leading-relaxed uppercase tracking-widest">
              Architecting digital frontiers with structural logic since 1988.
            </p>
            <div className="flex gap-16">
              <div>
                <span className="block text-5xl font-black italic">35.</span>
                <span className="text-[9px] font-bold uppercase tracking-[0.4em] text-black/30">Years</span>
              </div>
              <div>
                <span className="block text-5xl font-black italic">1K+</span>
                <span className="text-[9px] font-bold uppercase tracking-[0.4em] text-black/30">Alumni</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* --- LAYER 2: MINIMAL NBA TAG (The White Space Moment) --- */}
      <div 
        ref={nbaSection} 
        className="absolute inset-0 z-20 flex flex-col items-center justify-center pointer-events-none opacity-0"
      >
        <div className="flex flex-col items-center text-center">
          <div className="w-[1px] h-24 bg-black/10 mb-8" />
          <h3 className="text-4xl md:text-7xl font-black uppercase tracking-tighter text-[#1A1A1A]">
            NBA <br /> ACCREDITED
          </h3>
          <p className="mt-6 text-[10px] md:text-xs font-bold tracking-[0.6em] uppercase text-black/30">
            Global Engineering Standards
          </p>
          <div className="w-[1px] h-24 bg-black/10 mt-8" />
        </div>
      </div>
    </section>
  );
};

export default CoreFoundation;