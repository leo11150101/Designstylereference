import { useState, useEffect } from 'react';
import { ChevronUp } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export function BackToTop() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 400) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.button
          initial={{ opacity: 0, y: 20, scale: 0.8 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 20, scale: 0.8 }}
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 z-50 group"
          aria-label="Back to top"
        >
          <div className="relative">
            {/* Outer Ring */}
            <div className="absolute -inset-2 bg-[#2d8cf0]/10 rounded-full blur-md opacity-0 group-hover:opacity-100 transition-opacity" />
            
            {/* Main Button */}
            <div className="relative w-12 h-12 bg-white border border-zinc-200 rounded-xl shadow-xl flex items-center justify-center text-[#2d8cf0] transition-all group-hover:border-[#2d8cf0] group-hover:-translate-y-1">
              <ChevronUp className="w-6 h-6 transition-transform group-hover:scale-110" />
              
              {/* Corner Accents (Industrial Style) */}
              <div className="absolute top-1 left-1 w-1.5 h-1.5 border-t border-l border-zinc-200 group-hover:border-[#2d8cf0]/40" />
              <div className="absolute bottom-1 right-1 w-1.5 h-1.5 border-b border-r border-zinc-200 group-hover:border-[#2d8cf0]/40" />
            </div>

            {/* Status Label (Fumadocs style) */}
            <div className="absolute right-full mr-4 top-1/2 -translate-y-1/2 px-2 py-1 bg-zinc-900 text-white text-[9px] font-black uppercase tracking-widest rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
              Scroll to top
            </div>
          </div>
        </motion.button>
      )}
    </AnimatePresence>
  );
}
