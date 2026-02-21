import React from 'react';
import { motion } from 'framer-motion';

const Labs = () => {
  const labFacilities = [
    {
      name: "ADVANCED_PROG_UNIT",
      id: "LAB.01",
      description: "The core coding environment equipped with the latest IDEs for C, C++, Java, and Python development.",
      specs: ["INTEL CORE I7", "16GB RAM", "DUAL MONITOR"],
      image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&q=80&w=1500"
    },
    {
      name: "FULL_STACK_DEV_LAB",
      id: "LAB.02",
      description: "Dedicated space for full-stack web development and Android/iOS application building.",
      specs: ["REACT/NODE READY", "ANDROID STUDIO", "MAC/PC HYBRID"],
      image: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&q=80&w=1500"
    },
    {
      name: "NETWORK_INFRA_NODE",
      id: "LAB.03",
      description: "Hands-on infrastructure for learning PC hardware assembly, server configuration, and Cisco networking.",
      specs: ["CISCO ROUTERS", "SERVER RACKS", "DIAGNOSTIC TOOLS"],
      image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc51?auto=format&fit=crop&q=80&w=1500"
    },
    {
      name: "IOT_HARDWARE_LAB",
      id: "LAB.04",
      description: "Hardware-meets-software workspace for building smart devices, embedded systems, and robotics.",
      specs: ["ARDUINO/PI KITS", "8086 PROCESSORS", "SENSOR ARRAYS"],
      image: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&q=80&w=1500"
    }
  ];

  return (
    <div className="bg-[#FAF9F5] min-h-screen pt-44 pb-32 selection:bg-[#D95D39] selection:text-white">
      
      {/* --- HERO: BOLD SECTION --- */}
      <section className="px-6 mb-32">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row lg:items-end justify-between gap-12">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            className="max-w-4xl"
          >
            <span className="font-mono text-xs font-black tracking-[0.4em] text-[#D95D39] uppercase mb-6 block">
              // PRODUCTION_ENVIRONMENTS
            </span>
            <h1 className="text-6xl md:text-9xl font-black text-[#1A1A18] tracking-tighter leading-[0.85] mb-12">
              THE <br />
              <span className="text-transparent" style={{ WebkitTextStroke: '2px #1A1A18' }}>STATIONS.</span>
            </h1>
          </motion.div>
        </div>
      </section>

      {/* --- LABS DIRECTORY: ALTERNATING LARGE CARDS --- */}
      <section className="px-6 mb-44">
        <div className="max-w-7xl mx-auto space-y-40">
          {labFacilities.map((lab, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              className={`flex flex-col ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} items-center gap-12`}
            >
              {/* Image Side: Industrial Border */}
              <div className="w-full lg:w-2/3 relative group">
                <div className="aspect-video bg-[#E3E0D5] border-4 border-[#1A1A18] rounded-[2rem] overflow-hidden shadow-[20px_20px_0px_#1A1A18] transition-transform duration-700">
                  <img 
                    src={lab.image} 
                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-1000" 
                    alt={lab.name} 
                  />
                  <div className="absolute top-6 left-6 bg-[#1A1A18] text-[#FAF9F5] font-mono text-[10px] px-3 py-1 rounded">
                    UNIT_ID: {lab.id}
                  </div>
                </div>
              </div>

              {/* Data Side: Technical Spec Sheet */}
              <div className="w-full lg:w-1/3">
                <h2 className="text-4xl font-black text-[#1A1A18] tracking-tighter mb-6 uppercase">
                  {lab.name}
                </h2>
                <p className="text-lg font-bold text-[#4A4843] mb-8 leading-snug">
                  {lab.description}
                </p>
                
                <div className="bg-[#FAF9F5] border-4 border-[#1A1A18] p-8 rounded-3xl shadow-[8px_8px_0px_#D95D39]">
                  <h4 className="font-mono text-[10px] font-black text-[#D95D39] mb-4 uppercase tracking-widest">TECHNICAL_SPECS</h4>
                  <ul className="space-y-3">
                    {lab.specs.map((spec, i) => (
                      <li key={i} className="flex items-center gap-3 font-mono text-xs font-black text-[#1A1A18]">
                        <span className="w-2 h-2 bg-[#D95D39]"></span>
                        {spec}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* --- ECOSYSTEM FEATURES: DATA TABLE STYLE --- */}
      <section className="px-6">
        <div className="max-w-7xl mx-auto border-t-4 border-[#1A1A18] pt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            { title: "GIGABIT_NET", desc: "Gigabit Ethernet and campus-wide high-speed Wi-Fi." },
            { title: "CLOUD_NODE", desc: "Access to department-hosted servers for project deployment." },
            { title: "MODERN_STACK", desc: "Fully licensed, industry-standard software and tools." },
            { title: "SMART_CLASS", desc: "Digital classrooms with immersive audio-visual tech." }
          ].map((feature, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              className="group border-b-4 border-[#1A1A18]/10 hover:border-[#D95D39] pb-8 transition-all"
            >
              <h4 className="text-xl font-black text-[#1A1A18] mb-4 group-hover:text-[#D95D39] transition-colors">
                {feature.title}
              </h4>
              <p className="text-sm font-bold text-[#4A4843] leading-snug">
                {feature.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Labs;