import React, { useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(ScrollTrigger);

const Hero = () => {
  const container = useRef();
  const contentWrapper = useRef();
  const mainText = useRef();
  const subText = useRef();
  const revealShield = useRef();

  useGSAP(() => {
    const isMobile = window.innerWidth < 768;
    
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: container.current,
        start: "top top",
        end: "+=200%", 
        pin: true,
        scrub: 1,
      }
    });

    // 1. Deconstruct the text content
    tl.to(mainText.current, {
      y: isMobile ? -60 : -100,
      scale: 0.8,
      opacity: 0,
      filter: "blur(15px)",
      ease: "power2.in"
    })
    .to(subText.current, {
      y: 40,
      opacity: 0,
      ease: "power2.in"
    }, "<")
    
    // 2. The Modern Transition: The "Shield" lift
    // This creates the effect of the Hero section being "pulled up" 
    // to reveal the next section of the website.
    .to(revealShield.current, {
      yPercent: -100,
      ease: "power2.inOut"
    }, "-=0.3")

    // 3. Optional: Subtle parallax for the bottom UI
    .to(".bottom-ui", {
      opacity: 0,
      y: 20,
      ease: "power1.out"
    }, 0);

  }, { scope: container });

  return (
    <div ref={container} className="relative h-[100dvh] w-full bg-[#FAF9F6] overflow-hidden">
      
      {/* --- REVEAL SHIELD (The 'Curtain' that slides up) --- */}
      <div 
        ref={revealShield}
        className="absolute inset-0 z-50 bg-[#FAF9F6] flex flex-col items-center justify-center"
      >
        {/* CENTERED TEXT CONTENT */}
        <div ref={contentWrapper} className="text-center px-6">
          <div ref={mainText} className="will-change-transform">
            <h1 className="text-5xl sm:text-7xl md:text-[10vw] lg:text-[12vw] font-black text-[#1A1A1A] leading-[0.85] tracking-tighter uppercase">
              Binary<br />
              <span className="text-transparent" style={{ WebkitTextStroke: '1px #1A1A1A' }}>
                Vision
              </span>
            </h1>
          </div>
          
          <div ref={subText} className="mt-4 md:mt-8">
            <p className="text-[9px] md:text-xs font-bold tracking-[0.4em] uppercase text-black/40 mb-3">
              Computer Engineering Dept.
            </p>
            <div className="h-[1px] w-12 md:w-24 bg-black/20 mx-auto" />
          </div>
        </div>

        {/* BOTTOM UI INSIDE THE SHIELD */}
        <div className="bottom-ui absolute bottom-6 md:bottom-12 w-full px-8 md:px-12 flex flex-col md:flex-row justify-between items-center md:items-end gap-6">
          <div className="max-w-[240px] md:max-w-[180px] text-center md:text-left">
            <p className="text-[8px] md:text-[9px] font-bold text-black/30 uppercase leading-relaxed tracking-widest">
              Innovating through structured complexity and architectural logic.
            </p>
          </div>
          
          <button className="w-full md:w-auto px-8 py-4 bg-[#1A1A1A] text-[#FAF9F6] text-[10px] font-bold uppercase tracking-[0.3em]">
            Enter Department
          </button>
        </div>
      </div>

      {/* --- THE NEXT SECTION PREVIEW (Shown as you scroll) --- */}
      <div className="absolute inset-0 z-10 bg-white flex items-center justify-center p-12">
        <div className="max-w-4xl grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
                <h2 className="text-4xl font-black uppercase tracking-tighter">The Laboratory</h2>
                <p className="text-sm text-black/60 leading-relaxed">
                    Our department is a sanctuary for those who view code as the new brick and mortar. 
                    From quantum computing to architectural software design, we build the foundations.
                </p>
            </div>
            <div className="aspect-video bg-neutral-100 overflow-hidden shadow-2xl">
                <img 
                    src="https://images.unsplash.com/photo-1517048676732-d65bc937f952?auto=format&fit=crop&q=80&w=2000" 
                    className="w-full h-full object-cover grayscale opacity-50"
                    alt="Next Section Preview"
                />
            </div>
        </div>
      </div>

    </div>
  );
};

export default Hero;