import React from 'react';

const TechMarquee = () => {
  // Cleaned up, professional engineering stack
  const techStack = [
    "SYSTEM_ARCHITECTURE", "KERNEL_LEVEL_C", "LOW_LEVEL_PROGRAMMING", 
    "FULL_STACK_DEVELOPMENT", "NEURAL_NETWORKS", "HARDWARE_INTERFACING", 
    "DISTRIBUTED_SYSTEMS", "NETWORK_SECURITY", "DATABASE_DESIGN"
  ];

  return (
    <section className="py-6 bg-[#FAF9F5] border-y-4 border-[#1A1A18] overflow-hidden relative flex items-center group">
      
      {/* Structural Background Pattern to match Hero */}
      <div className="absolute inset-0 bg-[linear-gradient(90deg,#E3E0D5_1px,transparent_1px)] bg-[size:100px_100px] opacity-20 pointer-events-none"></div>
      
      <style>
        {`
          @keyframes brutal-scroll {
            0% { transform: translateX(0); }
            100% { transform: translateX(-50%); }
          }
          .animate-brutal {
            animation: brutal-scroll 30s linear infinite;
          }
        `}
      </style>
      
      {/* The scrolling container - Fast, sharp, and high contrast */}
      <div className="flex w-max animate-brutal group-hover:[animation-play-state:paused] transition-all">
          {[...techStack, ...techStack].map((tech, index) => (
            <div 
              key={index} 
              className="flex items-center"
            >
              {/* Thick Industrial Divider */}
              <div className="mx-10 w-3 h-3 bg-[#D95D39] rotate-45 border border-[#1A1A18]"></div>
              
              <div className="text-2xl md:text-3xl font-black tracking-tighter text-[#1A1A18] hover:text-[#D95D39] transition-colors duration-200 cursor-default flex items-center gap-4">
                <span className="opacity-20 font-mono text-sm">[ {index < 9 ? `0${index + 1}` : index + 1} ]</span>
                {tech}
              </div>
            </div>
          ))}
      </div>

      {/* Solid Black "End Cap" - Breaking the traditional fade */}
      <div className="absolute right-0 top-0 bottom-0 w-12 bg-gradient-to-l from-[#FAF9F5] to-transparent z-10 pointer-events-none"></div>
    </section>
  );
};

export default TechMarquee;