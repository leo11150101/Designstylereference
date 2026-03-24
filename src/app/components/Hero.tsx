import { useState, useEffect } from 'react';
import { ChevronRight, ChevronLeft } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

export function Hero() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [bgIndex, setBgIndex] = useState(0);

  const carouselImages = [
    "https://images.unsplash.com/photo-1758411898502-013b0cd3421c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb25uZWN0ZWQlMjBjYXIlMjBkYXNoYm9hcmQlMjBtb2Rlcm58ZW58MXx8fHwxNzc0MjUxODI1fDA&ixlib=rb-4.1.0&q=80&w=1080",
    "https://images.unsplash.com/photo-1768907813740-e82a02ba40ec?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzbWFydCUyMGNhciUyMGRpZ2l0YWwlMjBkYXNoYm9hcmQlMjB1aXxlbnwxfHx8fDE3NzQyNTUwNzF8MA&ixlib=rb-4.1.0&q=80&w=1080",
    "https://images.unsplash.com/photo-1773901211515-098f765b1acf?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmdXR1cmlzdGljJTIwY2l0eSUyMHRyYWZmaWMlMjBkYXRoJTIwc2NyZWVufGVufDF8fHx8MTc3NDI1NTA3MXww&ixlib=rb-4.1.0&q=80&w=1080"
  ];

  const bgImages = [
    "https://images.unsplash.com/photo-1713857297379-6fc26e70f581?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbnRlcm5ldCUyMG9mJTIwdGhpbmdzJTIwbmV0d29yayUyMGNvbm5lY3Rpb24lMjBsaWdodHxlbnwxfHx8fDE3NzQyNTU5OTV8MA&ixlib=rb-4.1.0&q=80&w=1080",
    "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
    "https://images.unsplash.com/photo-1451187580459-43490279c0fa?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
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
            key={src}
            className={`absolute inset-0 bg-center bg-cover bg-no-repeat transition-opacity duration-1000 ease-in-out ${
              index === bgIndex ? 'opacity-100' : 'opacity-0'
            }`}
            style={{
              backgroundImage: `url('${src}')`,
              maskImage: 'linear-gradient(to bottom, rgba(0,0,0,0.6) 0%, rgba(0,0,0,0.3) 40%, transparent 75%)',
              WebkitMaskImage: 'linear-gradient(to bottom, rgba(0,0,0,0.6) 0%, rgba(0,0,0,0.3) 40%, transparent 75%)'
            }}
          />
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
        <a href="#" className="inline-flex items-center gap-2 rounded-full border border-zinc-200 bg-white/80 backdrop-blur-sm px-3 py-1 text-sm font-medium text-zinc-600 hover:bg-white transition-colors mb-8">
          <span className="flex h-2 w-2 rounded-full bg-[#2d8cf0]"></span>
          全新版本 v2.0 现已发布
          <ChevronRight className="h-4 w-4 text-zinc-400" />
        </a>
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight text-zinc-900 mb-6 max-w-4xl leading-[1.1]">
          构建优秀的<br className="md:hidden" />车载云端生态
        </h1>
        <p className="text-lg md:text-xl text-zinc-500 mb-10 max-w-2xl">
          专为车载设备和 IOT 设备量身定制的操作系统。提供实时流媒体、增值云服务与全面开发套件。
        </p>
        <div className="flex flex-wrap items-center justify-center gap-4 mb-20">
          <button className="rounded-lg bg-[#2d8cf0] px-6 py-3 text-sm font-medium text-white hover:bg-[#2074d6] transition-colors shadow-sm">
            快速开始
          </button>
          <button className="rounded-lg border border-zinc-200 bg-white px-6 py-3 text-sm font-medium text-zinc-900 hover:bg-zinc-50 transition-colors">
            阅读文档
          </button>
        </div>

        {/* Mock Dashboard Graphic with Real Image */}
        <div className="w-full max-w-5xl rounded-xl border border-zinc-200 bg-white overflow-hidden text-left flex flex-col shadow-sm">
          <div className="flex flex-1 overflow-hidden h-[400px] md:h-[600px] relative bg-zinc-900">
            <div className="absolute inset-0 bg-black">
              {carouselImages.map((src, index) => (
                <div
                  key={src}
                  className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
                    index === currentImageIndex ? 'opacity-100 z-10' : 'opacity-0 z-0'
                  }`}
                >
                  <ImageWithFallback
                    src={src}
                    alt={`Carousel Image ${index + 1}`}
                    className="w-full h-full object-cover"
                  />
                </div>
              ))}
            </div>

            <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent pointer-events-none"></div>

            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 z-20 pointer-events-none">
              {carouselImages.map((_, index) => (
                <span
                  key={index}
                  className={`block h-1.5 rounded-full transition-all duration-500 ${
                    index === currentImageIndex ? 'w-6 bg-white' : 'w-1.5 bg-white/40'
                  }`}
                />
              ))}
            </div>

            <div className="absolute bottom-6 left-6 right-6 flex gap-4 pointer-events-none">
              <div className="bg-white/90 backdrop-blur border border-white/20 p-4 rounded-lg shadow-sm w-48 hidden md:block">
                <div className="text-xs font-semibold text-zinc-500 uppercase tracking-wide mb-1">Vehicle Status</div>
                <div className="text-lg font-bold text-zinc-900 flex items-center gap-2">
                  <span className="h-2 w-2 rounded-full bg-green-500"></span> Online
                </div>
              </div>
              <div className="bg-white/90 backdrop-blur border border-white/20 p-4 rounded-lg shadow-sm w-48 hidden md:block">
                <div className="text-xs font-semibold text-zinc-500 uppercase tracking-wide mb-1">Network</div>
                <div className="text-lg font-bold text-[#2d8cf0]">5G / MRTS</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
