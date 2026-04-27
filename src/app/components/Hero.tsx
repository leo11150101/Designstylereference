import { useState, useEffect } from 'react';
import { ChevronRight, ChevronLeft } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { motion } from 'motion/react';
import { TechGraphic } from './TechGraphic';

export function Hero() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [bgIndex, setBgIndex] = useState(0);

  const carouselImages = [
    "https://images.unsplash.com/photo-1634743556192-d19f0c69ff3a?auto=format&fit=crop&q=80&w=1080",
    "https://images.unsplash.com/photo-1581088657139-d5a5cce14c87?auto=format&fit=crop&q=80&w=1080",
    "https://images.unsplash.com/photo-1674683685332-894bed153f19?auto=format&fit=crop&q=80&w=1080"
  ];

  const bgImages = [
    "https://images.unsplash.com/photo-1763929154494-a3d6eba05282?auto=format&fit=crop&q=80&w=1920",
    "https://images.unsplash.com/photo-1726419152177-45a50f96c312?auto=format&fit=crop&q=80&w=1920",
    "https://images.unsplash.com/photo-1767477665610-006b0171453b?auto=format&fit=crop&q=80&w=1920",
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % carouselImages.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  const bgPrev = () => setBgIndex((prev) => (prev - 1 + bgImages.length) % bgImages.length);
  const bgNext = () => setBgIndex((prev) => (prev + 1) % bgImages.length);

  return (
    <section className="relative w-full pt-24 pb-16 md:pt-32 md:pb-24 border-b border-zinc-100">
      {/* Background Carousel with Prev/Next buttons - Now Full Width */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        {bgImages.map((src, index) => (
          <div
            key={index}
            className={`absolute inset-0 bg-center bg-cover bg-no-repeat transition-opacity duration-1000 ease-in-out z-0 ${
              index === bgIndex ? 'opacity-100' : 'opacity-0'
            }`}
            style={{
              backgroundImage: `url('${bgImages[index]}')`,
              maskImage: 'linear-gradient(to bottom, black 0%, rgba(0,0,0,0.4) 50%, transparent 100%)',
              WebkitMaskImage: 'linear-gradient(to bottom, black 0%, rgba(0,0,0,0.4) 50%, transparent 100%)'
            }}
          >
            <div className="absolute inset-0 bg-white/40" />
          </div>
        ))}

        {/* Prev / Next buttons */}
        <button
          onClick={bgPrev}
          className="absolute left-3 top-1/2 -translate-y-1/2 z-10 flex items-center justify-center w-8 h-8 rounded-full bg-white/60 hover:bg-white/90 border border-zinc-200 text-zinc-600 hover:text-zinc-900 transition-all shadow-sm"
          aria-label="上一张背景"
        >
          <ChevronLeft className="w-4 h-4" />
        </button>
        <button
          onClick={bgNext}
          className="absolute right-3 top-1/2 -translate-y-1/2 z-10 flex items-center justify-center w-8 h-8 rounded-full bg-white/60 hover:bg-white/90 border border-zinc-200 text-zinc-600 hover:text-zinc-900 transition-all shadow-sm"
          aria-label="下一张背景"
        >
          <ChevronRight className="w-4 h-4" />
        </button>

        {/* Dot indicators */}
        <div className="absolute bottom-3 left-1/2 -translate-x-1/2 z-10 flex gap-1.5 pointer-events-none">
          {bgImages.map((_, i) => (
            <span
              key={i}
              className={`block h-1 rounded-full transition-all duration-500 ${
                i === bgIndex ? 'w-5 bg-zinc-500' : 'w-1.5 bg-zinc-300'
              }`}
            />
          ))}
        </div>
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-6 flex flex-col items-center text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <a href="#" className="inline-flex items-center gap-2 rounded-full border border-zinc-200 bg-white/80 backdrop-blur-sm px-3 py-1 text-sm font-medium text-zinc-600 hover:bg-white transition-colors mb-8">
            <span className="flex h-2 w-2 rounded-full bg-[#2d8cf0]"></span>
            全新版本 v2.0 现已发布
            <ChevronRight className="h-4 w-4 text-zinc-400" />
          </a>
        </motion.div>

        <motion.h1 
          className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight text-zinc-900 mb-6 max-w-4xl leading-[1.1]"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          构建优秀的<br className="md:hidden" />车载云端生态
        </motion.h1>

        <motion.p 
          className="text-lg md:text-xl text-zinc-500 mb-10 max-w-2xl"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          专为车载设备和 IOT 设备量身定制的操作系统。提供实时流媒体、增值云服务与全面开发套件。
        </motion.p>

        <motion.div 
          className="flex flex-wrap items-center justify-center gap-4 mb-20"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <button className="rounded-lg bg-[#2d8cf0] px-6 py-3 text-sm font-medium text-white hover:bg-[#2074d6] transition-colors shadow-sm active:scale-95">
            快速开始
          </button>
          <button className="rounded-lg border border-zinc-200 bg-white px-6 py-3 text-sm font-medium text-zinc-900 hover:bg-zinc-50 transition-colors active:scale-95">
            阅读文档
          </button>
        </motion.div>

        {/* Mock Dashboard Graphic with Real Image */}
        
      </div>
    </section>
  );
}
