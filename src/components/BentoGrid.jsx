import React from 'react';
import { motion } from 'framer-motion';

const BentoGrid = () => {
  return (
    <section className="py-32 bg-[#FAF9F5] relative px-6 border-t-4 border-[#1A1A18]">
      
      {/* Structural Background Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(#E3E0D5_1px,transparent_1px),linear-gradient(90deg,#E3E0D5_1px,transparent_1px)] bg-[size:32px_32px] opacity-20 pointer-events-none"></div>

      <div className="max-w-[1400px] mx-auto relative z-10">
        
        {/* Editorial Header */}
        <div className="mb-20 flex flex-col md:flex-row md:items-end justify-between gap-8">
          <div className="max-w-2xl">
            <span className="font-mono text-xs font-black tracking-[0.3em] text-[#D95D39] uppercase mb-4 block">
              // DATA_SNAPSHOT.02
            </span>
            <h2 className="text-6xl md:text-8xl font-black text-[#1A1A18] tracking-tighter leading-none">
              CORE <br />
              <span className="text-transparent" style={{ WebkitTextStroke: '2px #1A1A18' }}>METRICS.</span>
            </h2>
          </div>
          <p className="text-xl font-bold text-[#4A4843] max-w-sm leading-tight border-l-4 border-[#D95D39] pl-6">
            A legacy of raw power, driven by decades of structural innovation.
          </p>
        </div>

        {/* Bento Grid: Industrial Style */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 auto-rows-[300px]">
          
          {/* Card 1: Legacy (Spans 8 columns) */}
          <motion.div 
            whileHover={{ y: -5 }}
            className="md:col-span-8 bg-[#1A1A18] rounded-[2rem] p-10 flex flex-col justify-between relative overflow-hidden group border-b-[12px] border-r-[12px] border-[#D95D39]"
          >
            <div className="flex justify-between items-start">
              <span className="font-mono text-[10px] text-[#FAF9F5]/40 tracking-widest uppercase">System_Runtime</span>
              <div className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center">
                <div className="w-2 h-2 rounded-full bg-[#D95D39] animate-pulse"></div>
              </div>
            </div>
            <div>
              <h3 className="text-7xl md:text-9xl font-black text-[#FAF9F5] tracking-tighter leading-none">35+ YRS</h3>
              <p className="text-[#D95D39] font-mono text-sm tracking-widest mt-4 uppercase">Academic_Excellence_Verified</p>
            </div>
          </motion.div>

          {/* Card 2: Accreditation (Spans 4 columns) */}
          <motion.div 
            whileHover={{ y: -5 }}
            className="md:col-span-4 bg-[#FAF9F5] border-4 border-[#1A1A18] rounded-[2rem] p-10 flex flex-col items-center justify-center text-center shadow-[10px_10px_0px_#1A1A18]"
          >
            <div className="w-20 h-20 bg-[#D95D39] rounded-3xl mb-6 flex items-center justify-center transform rotate-3 shadow-lg">
              <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
              </svg>
            </div>
            <h3 className="text-3xl font-black text-[#1A1A18] leading-tight mb-2 uppercase tracking-tighter">NBA & <br/>AICTE</h3>
            <p className="font-mono text-[10px] font-bold text-[#4A4843] tracking-widest">STATUS: ACCREDITED</p>
          </motion.div>

          {/* Card 3: Community (Spans 4 columns) */}
          <motion.div 
            whileHover={{ y: -5 }}
            className="md:col-span-4 bg-[#D95D39] rounded-[2rem] p-10 flex flex-col justify-end border-4 border-[#1A1A18] shadow-[10px_10px_0px_#1A1A18]"
          >
            <h3 className="text-7xl font-black text-[#FAF9F5] tracking-tighter leading-none mb-4">1000+</h3>
            <p className="text-[#1A1A18] font-black text-xl leading-none uppercase">ALUMNI <br/>NETWORK</p>
            <div className="mt-6 w-full h-1 bg-[#1A1A18]/20 relative">
               <div className="absolute top-0 left-0 h-full w-full bg-[#1A1A18]"></div>
            </div>
          </motion.div>

          {/* Card 4: Infrastructure (Spans 8 columns) */}
          <motion.div 
            whileHover={{ y: -5 }}
            className="md:col-span-8 bg-[#FAF9F5] border-4 border-[#1A1A18] rounded-[2rem] overflow-hidden relative group shadow-[10px_10px_0px_#1A1A18]"
          >
            <div className="absolute inset-0 grayscale group-hover:grayscale-0 transition-all duration-700 opacity-40 group-hover:opacity-100">
               <img 
                 src="https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&q=80&w=1500" 
                 alt="Labs"
                 className="w-full h-full object-cover"
               />
            </div>
            
            <div className="relative z-10 h-full p-10 flex flex-col justify-between bg-gradient-to-t from-[#FAF9F5] via-transparent to-transparent">
               <span className="font-mono text-[10px] font-bold text-[#1A1A18] bg-[#FAF9F5] border-2 border-[#1A1A18] self-start px-3 py-1 rounded-md">
                 MODULE_INFRASTRUCTURE
               </span>
               <div>
                 <h3 className="text-5xl font-black text-[#1A1A18] tracking-tighter leading-none mb-4 uppercase">Advanced Hardware <br/>Environments</h3>
                 <p className="text-[#4A4843] font-bold max-w-sm">Industry-spec laboratories for raw processing and system design.</p>
               </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default BentoGrid;