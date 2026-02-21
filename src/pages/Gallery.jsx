import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Gallery = () => {
  const [activeFilter, setActiveFilter] = useState('All');
  const [selectedImage, setSelectedImage] = useState(null);

  const filters = ['All', 'Labs', 'Hackathons', 'Projects', 'Campus'];

  const images = [
    { id: 1, src: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&w=800&q=80", category: "Labs", title: "PROG_UNIT_01", desc: "Students working on full-stack web projects." },
    { id: 2, src: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=800&q=80", category: "Hackathons", title: "CODESPRINT_26", desc: "24-hour continuous coding marathon." },
    { id: 3, src: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&w=800&q=80", category: "Projects", title: "SMART_MIRROR_IOT", desc: "Final year hardware-software integration project." },
    { id: 4, src: "https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&w=800&q=80", category: "Hackathons", title: "ARCH_PLANNING", desc: "Whiteboarding system architecture." },
    { id: 5, src: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=800&q=80", category: "Labs", title: "SERVER_CONFIG", desc: "Setting up local networks in the Hardware Lab." },
    { id: 6, src: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=800&q=80", category: "Campus", title: "ULEARN_SESSION", desc: "µLearn peer-to-peer coding session." },
    { id: 7, src: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=800&q=80", category: "Projects", title: "ROBOTIC_ARM_V1", desc: "Microprocessor lab testing." },
  ];

  const filteredImages = activeFilter === 'All' 
    ? images 
    : images.filter(img => img.category === activeFilter);

  return (
    <div className="bg-[#FAF9F5] min-h-screen pt-44 pb-32 selection:bg-[#D95D39] selection:text-white">
      
      {/* --- HERO: BOLD ARCHIVE HEADER --- */}
      <section className="px-6 mb-24">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row lg:items-end justify-between gap-12">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            className="max-w-4xl"
          >
            <span className="font-mono text-xs font-black tracking-[0.4em] text-[#D95D39] uppercase mb-6 block">
              // VISUAL_ASSETS_LOG
            </span>
            <h1 className="text-6xl md:text-9xl font-black text-[#1A1A18] tracking-tighter leading-[0.85] mb-12">
              THE <br />
              <span className="text-transparent" style={{ WebkitTextStroke: '2px #1A1A18' }}>GALLERY.</span>
            </h1>
          </motion.div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-6">
        
        {/* --- COMMAND BAR (FILTER) --- */}
        <div className="flex flex-wrap gap-3 mb-16 border-b-4 border-[#1A1A18] pb-8">
          {filters.map((filter) => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={`px-8 py-3 rounded-xl font-black text-xs tracking-widest transition-all border-4 ${
                activeFilter === filter 
                  ? 'bg-[#1A1A18] text-[#FAF9F5] border-[#1A1A18] shadow-[6px_6px_0px_#D95D39]' 
                  : 'bg-transparent text-[#1A1A18] border-transparent hover:border-[#1A1A18]/20'
              }`}
            >
              {filter.toUpperCase()}
            </button>
          ))}
        </div>

        {/* --- EDITORIAL IMAGE GRID --- */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence mode="popLayout">
            {filteredImages.map((img) => (
              <motion.div 
                layout
                key={img.id}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                className="group relative cursor-pointer"
                onClick={() => setSelectedImage(img)}
              >
                {/* Image Frame */}
                <div className="aspect-square bg-[#E3E0D5] border-4 border-[#1A1A18] rounded-[2rem] overflow-hidden shadow-[10px_10px_0px_#1A1A18] group-hover:shadow-[10px_10px_0px_#D95D39] transition-all duration-300">
                  <img 
                    src={img.src} 
                    alt={img.title} 
                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
                  />
                  
                  {/* Tactical Data Overlay */}
                  <div className="absolute top-4 left-4 bg-[#1A1A18] text-[#FAF9F5] font-mono text-[10px] px-3 py-1 rounded">
                    TAG: {img.category.toUpperCase()}
                  </div>
                </div>

                {/* Caption Block */}
                <div className="mt-4 px-2">
                  <h3 className="text-xl font-black text-[#1A1A18] tracking-tighter uppercase leading-none">{img.title}</h3>
                  <p className="text-[#4A4843] font-bold text-xs mt-2 opacity-60">{img.desc}</p>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* Empty State */}
        {filteredImages.length === 0 && (
          <div className="text-center py-40 border-4 border-dashed border-[#1A1A18]/20 rounded-[3rem]">
            <span className="font-mono text-[#1A1A18]/40 font-black tracking-widest uppercase">
              // NO_RECORDS_FOUND_IN_THIS_SECTOR
            </span>
          </div>
        )}
      </div>

      {/* --- LIGHTBOX: BRUTALIST STYLE --- */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-[#1A1A18]/95 backdrop-blur-xl flex items-center justify-center p-6 md:p-12"
            onClick={() => setSelectedImage(null)}
          >
            <button className="absolute top-10 right-10 text-[#FAF9F5] hover:text-[#D95D39] transition-colors">
              <svg className="w-12 h-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            <motion.div 
              initial={{ scale: 0.9, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              className="max-w-6xl w-full bg-[#FAF9F5] border-[12px] border-[#1A1A18] rounded-[3rem] overflow-hidden shadow-2xl flex flex-col lg:flex-row"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="lg:w-2/3 h-[40vh] lg:h-[70vh] border-b-[12px] lg:border-b-0 lg:border-r-[12px] border-[#1A1A18]">
                <img src={selectedImage.src} className="w-full h-full object-cover" alt={selectedImage.title} />
              </div>
              <div className="lg:w-1/3 p-10 flex flex-col justify-center">
                <span className="font-mono text-xs font-black text-[#D95D39] mb-4 uppercase tracking-[0.3em]">
                  // MEDIA_DETAILS
                </span>
                <h3 className="text-4xl md:text-5xl font-black text-[#1A1A18] tracking-tighter leading-none mb-6 uppercase">
                  {selectedImage.title}
                </h3>
                <p className="text-xl font-bold text-[#4A4843] leading-snug mb-10">
                  {selectedImage.desc}
                </p>
                <div className="font-mono text-[10px] font-black text-[#1A1A18]/40">
                  CATEGORY: {selectedImage.category.toUpperCase()} <br />
                  SECTOR: SSMP_CE_DATA_LOG
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Gallery;