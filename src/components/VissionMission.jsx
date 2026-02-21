import React from 'react';
import { motion } from 'framer-motion';

const VisionMission = () => {
  // Animation variants for scroll-triggered entry
  const fadeInUp = {
    initial: { opacity: 0, y: 60 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, margin: "-100px" },
    transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] }
  };

  const missionItems = [
    { id: "M.01", text: "Impart knowledge to identify, analyze, and develop software solutions for real-life problems." },
    { id: "M.02", text: "Equip students with modern tools aligned with current IT industry trends." },
    { id: "M.03", text: "Engage students in socially and environmentally relevant projects to inculcate social values." }
  ];

  return (
    <section className="py-32 bg-[#FAF9F5] relative px-6 overflow-hidden">
      
      {/* Background Vertical Blueprint Line */}
      <div className="absolute left-1/2 top-0 bottom-0 w-px bg-[#1A1A18]/10 hidden lg:block"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* --- SECTION HEADER --- */}
        <motion.div 
          {...fadeInUp}
          className="mb-32 text-center lg:text-left max-w-3xl"
        >
          <span className="font-mono text-xs font-black tracking-[0.4em] text-[#D95D39] uppercase mb-6 block">
            // OPERATING_PHILOSOPHY
          </span>
          <h2 className="text-6xl md:text-8xl font-black text-[#1A1A18] tracking-tighter leading-[0.85] mb-8">
            MOLDING <br />
            <span className="text-transparent" style={{ WebkitTextStroke: '2px #1A1A18' }}>CREATORS.</span>
          </h2>
          <p className="text-xl font-bold text-[#4A4843] max-w-lg leading-snug">
            We don't just teach syntax. We architect problem solvers for the global silicon landscape.
          </p>
        </motion.div>

        {/* --- VISION BLOCK: LARGE SCALE --- */}
        <motion.div 
          {...fadeInUp}
          className="relative mb-40 flex justify-center lg:justify-start"
        >
          <div className="bg-[#1A1A18] text-[#FAF9F5] p-10 md:p-16 rounded-[2rem] md:rounded-[4rem] max-w-4xl border-b-[16px] border-r-[16px] border-[#D95D39] relative group">
            <span className="absolute -top-6 -left-6 bg-[#D95D39] text-[#FAF9F5] font-black px-6 py-2 rounded-lg rotate-[-5deg] shadow-lg">
              CORE_VISION
            </span>
            <p className="text-3xl md:text-5xl font-black tracking-tight leading-tight">
              To mould competent and committed computer engineers by transforming them from technology <span className="text-[#D95D39]">users</span> into technology <span className="text-[#D95D39]">creators.</span>
            </p>
          </div>
        </motion.div>

        {/* --- MISSION BLOCK: STACKED MODULES --- */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          <motion.div 
            {...fadeInUp}
            className="lg:col-span-4 lg:sticky lg:top-40"
          >
            <h3 className="text-4xl font-black text-[#1A1A18] tracking-tighter uppercase mb-4">
              The Mission <br />Deployment
            </h3>
            <div className="w-20 h-2 bg-[#D95D39]"></div>
          </motion.div>

          <div className="lg:col-span-8 space-y-6">
            {missionItems.map((item, index) => (
              <motion.div 
                key={item.id}
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="bg-white border-4 border-[#1A1A18] p-8 rounded-3xl flex gap-8 items-start shadow-[8px_8px_0px_#1A1A18] hover:shadow-none hover:translate-x-1 hover:translate-y-1 transition-all group"
              >
                <span className="font-mono text-xl font-black text-[#D95D39] group-hover:rotate-12 transition-transform">
                  [{item.id}]
                </span>
                <p className="text-xl font-bold text-[#1A1A18] leading-snug">
                  {item.text}
                </p>
              </motion.div>
            ))}
          </div>
        </div>

      </div>

      {/* Industrial Accents */}
      <div className="absolute bottom-0 right-0 p-12 opacity-10 hidden lg:block">
        <svg className="w-64 h-64 text-[#1A1A18]" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
        </svg>
      </div>
    </section>
  );
};

export default VisionMission;