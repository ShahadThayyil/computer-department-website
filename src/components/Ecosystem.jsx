import React from 'react';
import { motion } from 'framer-motion';

const Ecosystem = () => {
  const initiatives = [
    {
      title: "LEADS VENTURE LAB",
      id: "ENV.01",
      description: "Where ideas turn into MVPs. An incubation space dedicated to student-led tech projects and software development.",
      accent: "border-[#D95D39]"
    },
    {
      title: "STARTUPS @ TBI",
      id: "ENV.02",
      description: "Technology Business Incubator. We support student entrepreneurs in building sustainable tech companies right from the campus.",
      accent: "border-[#1A1A18]"
    },
    {
      title: "IEDC CENTRE",
      id: "ENV.03",
      description: "Innovation and Entrepreneurship Development Centre. Fostering a culture of innovation and helping students patent their ideas.",
      accent: "border-[#D95D39]"
    },
    {
      title: "µLEARN NETWORK",
      id: "ENV.04",
      description: "An active peer-to-peer learning community where students collaborate, code, and level up their industry skills together.",
      accent: "border-[#1A1A18]"
    }
  ];

  return (
    <section className="py-32 bg-[#FAF9F5] border-t-4 border-[#1A1A18] relative px-6 overflow-hidden">
      
      {/* Structural Background - Vertical Rule */}
      <div className="absolute left-[10%] top-0 bottom-0 w-px bg-[#1A1A18]/5 hidden lg:block"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Editorial Header */}
        <div className="mb-24 flex flex-col lg:flex-row lg:items-end justify-between gap-12">
          <div className="max-w-3xl">
            <span className="font-mono text-xs font-black tracking-[0.4em] text-[#D95D39] uppercase mb-6 block">
              // CONNECTED_INFRASTRUCTURE
            </span>
            <h2 className="text-6xl md:text-8xl font-black text-[#1A1A18] tracking-tighter leading-[0.85]">
              THE <br />
              <span className="text-transparent" style={{ WebkitTextStroke: '2px #1A1A18' }}>ECOSYSTEM.</span>
            </h2>
          </div>
          <div className="lg:w-1/3">
            <p className="text-xl font-bold text-[#4A4843] leading-tight">
              Beyond the classroom. Join communities built for raw production and industry-scale collaboration.
            </p>
          </div>
        </div>

        {/* Industrial Folder-Style Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-[#1A1A18] border-4 border-[#1A1A18] shadow-[15px_15px_0px_#D95D39]">
          {initiatives.map((item, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="group relative bg-[#FAF9F5] p-10 md:p-14 flex flex-col justify-between min-h-[400px] hover:bg-[#F4F2EC] transition-colors"
            >
              <div className="flex justify-between items-start mb-12">
                <span className="font-mono text-sm font-black text-[#D95D39]">[{item.id}]</span>
                <div className={`w-16 h-1 bg-[#1A1A18] group-hover:w-24 group-hover:bg-[#D95D39] transition-all duration-500`}></div>
              </div>

              <div>
                <h3 className="text-4xl md:text-5xl font-black text-[#1A1A18] tracking-tighter mb-6 leading-none">
                  {item.title}
                </h3>
                <p className="text-[#4A4843] text-lg font-bold leading-snug max-w-sm mb-10">
                  {item.description}
                </p>
                
                {/* Tactical CTA */}
                <button className="flex items-center gap-4 text-[#1A1A18] font-black text-xs tracking-widest uppercase group/btn">
                  <span className="border-b-2 border-[#1A1A18] group-hover/btn:border-[#D95D39] group-hover/btn:text-[#D95D39] transition-all">
                    Initiate Connection
                  </span>
                  <svg className="w-5 h-5 group-hover/btn:translate-x-2 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </button>
              </div>
            </motion.div>
          ))}
        </div>
        
      </div>
      
      {/* Editorial Tech Details */}
      <div className="mt-20 max-w-7xl mx-auto flex justify-between items-center opacity-30 px-2 font-mono text-[10px] font-bold text-[#1A1A18]">
        <p>STAKEHOLDER_ACCESS: ENABLED</p>
        <p>ENCRYPTION: AES_256</p>
        <p>NETWORK_STATUS: OPERATIONAL</p>
      </div>
    </section>
  );
};

export default Ecosystem;