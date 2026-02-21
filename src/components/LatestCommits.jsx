import React from 'react';
import { motion } from 'framer-motion';

const LatestCommits = () => {
  const logs = [
    {
      date: "FEB 15, 2026",
      id: "LOG.001",
      type: "EVENT",
      title: "State-level Hackathon: CodeSprint 2026",
      desc: "SSM Polytechnic hosts a 24-hour coding marathon. Students from across Kerala compete to build sustainable tech solutions."
    },
    {
      date: "FEB 05, 2026",
      id: "LOG.002",
      type: "PUBLICATION",
      title: "The Public Dairy: Issue 12 Released",
      desc: "The latest edition of our department magazine is out, featuring articles on AI, Web3, and student startup journeys."
    },
    {
      date: "JAN 28, 2026",
      id: "LOG.003",
      type: "WORKSHOP",
      title: "Advanced React & GSAP Masterclass",
      desc: "A hands-on weekend workshop led by industry experts to help students master modern frontend web development."
    }
  ];

  return (
    <section className="py-32 bg-[#FAF9F5] relative px-6 overflow-hidden border-t-4 border-[#1A1A18]">
      
      {/* Structural Vertical Axis */}
      <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-1 md:w-2 bg-[#1A1A18] z-0"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Editorial Header */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-24 text-center"
        >
          <span className="font-mono text-xs font-black tracking-[0.4em] text-[#D95D39] uppercase mb-4 block">
            // LIVE_SYSTEM_FEED
          </span>
          <h2 className="text-6xl md:text-8xl font-black text-[#1A1A18] tracking-tighter leading-none">
            LATEST <br />
            <span className="text-transparent" style={{ WebkitTextStroke: '2px #1A1A18' }}>COMMITS.</span>
          </h2>
        </motion.div>

        {/* Timeline Stack */}
        <div className="space-y-12">
          {logs.map((log, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className={`flex flex-col ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} items-center gap-8 md:gap-0`}
            >
              {/* Content Card */}
              <div className="w-full md:w-[45%]">
                <div className="bg-white border-4 border-[#1A1A18] p-8 rounded-3xl shadow-[8px_8px_0px_#1A1A18] hover:shadow-none hover:translate-x-1 hover:translate-y-1 transition-all group">
                  <div className="flex justify-between items-center mb-6">
                    <span className="font-mono text-[10px] font-black text-[#D95D39] uppercase tracking-widest">[{log.id}]</span>
                    <span className="bg-[#1A1A18] text-[#FAF9F5] text-[10px] font-black px-3 py-1 rounded-full uppercase tracking-widest">{log.type}</span>
                  </div>
                  <h3 className="text-2xl md:text-3xl font-black text-[#1A1A18] leading-tight mb-4 uppercase tracking-tighter">
                    {log.title}
                  </h3>
                  <p className="text-[#4A4843] font-bold mb-8 leading-snug">
                    {log.desc}
                  </p>
                  <button className="flex items-center gap-3 text-[#1A1A18] font-black text-xs tracking-widest uppercase group/btn">
                    <span className="border-b-2 border-[#1A1A18] group-hover/btn:text-[#D95D39] group-hover/btn:border-[#D95D39] transition-all">READ_ENTRY</span>
                    <svg className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </button>
                </div>
              </div>

              {/* Central Junction Point */}
              <div className="hidden md:flex w-[10%] justify-center relative">
                <div className="w-6 h-6 bg-[#D95D39] border-4 border-[#1A1A18] rotate-45 z-20"></div>
                {/* Horizontal Connector */}
                <div className="absolute top-1/2 w-full h-1 bg-[#1A1A18] -z-10"></div>
              </div>

              {/* Date Label */}
              <div className={`w-full md:w-[45%] text-center ${index % 2 === 0 ? 'md:text-left md:pl-12' : 'md:text-right md:pr-12'}`}>
                <span className="text-4xl md:text-6xl font-black text-[#1A1A18] opacity-10 tracking-tighter italic">
                  {log.date}
                </span>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Action Button */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="mt-24 text-center"
        >
          <button className="bg-[#1A1A18] text-[#FAF9F5] font-black text-sm tracking-widest px-12 py-5 rounded-full hover:bg-[#D95D39] transition-colors border-b-8 border-[#D95D39]/30">
            LOAD_ALL_LOGS
          </button>
        </motion.div>

      </div>
    </section>
  );
};

export default LatestCommits;