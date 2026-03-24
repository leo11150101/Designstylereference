import Slider from 'react-slick';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

// Custom Arrow Components
function SampleNextArrow(props: any) {
  const { className, style, onClick } = props;
  return (
    <button
      className="absolute top-1/2 -right-4 md:-right-6 -translate-y-1/2 z-10 flex h-10 w-10 items-center justify-center rounded-full border border-zinc-200 bg-white text-zinc-600 shadow-sm hover:text-[#2d8cf0] hover:border-[#2d8cf0] transition-colors"
      onClick={onClick}
      aria-label="Next slide"
    >
      <ChevronRight className="h-5 w-5" />
    </button>
  );
}

function SamplePrevArrow(props: any) {
  const { className, style, onClick } = props;
  return (
    <button
      className="absolute top-1/2 -left-4 md:-left-6 -translate-y-1/2 z-10 flex h-10 w-10 items-center justify-center rounded-full border border-zinc-200 bg-white text-zinc-600 shadow-sm hover:text-[#2d8cf0] hover:border-[#2d8cf0] transition-colors"
      onClick={onClick}
      aria-label="Previous slide"
    >
      <ChevronLeft className="h-5 w-5" />
    </button>
  );
}

export function CaseStudies() {
  const cases = [
    { 
      title: '执法巡逻车', 
      image: "https://images.unsplash.com/photo-1759933633339-2382db138c2f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwb2xpY2UlMjBjYXIlMjBwYXRyb2wlMjBuaWdodHxlbnwxfHx8fDE3NzQyNTE4Mjd8MA&ixlib=rb-4.1.0&q=80&w=1080",
      desc: '杜绝公车私用，执法过程全程可视化，重点定时定线巡查。' 
    },
    { 
      title: '网约车与出租车', 
      image: "https://images.unsplash.com/photo-1713699892870-13709f11b555?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx5ZWxsb3clMjB0YXhpJTIwY2l0eSUyMG1vZGVybnxlbnwxfHx8fDE3NzQyNTE4MzJ8MA&ixlib=rb-4.1.0&q=80&w=1080",
      desc: '实时轨迹监控与异常行为报警，保障司乘双方安全。' 
    },
    { 
      title: '物流运输车', 
      image: "https://images.unsplash.com/photo-1766561994067-dbd575e1cff2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsb2dpc3RpY3MlMjB0cnVjayUyMGZsZWV0JTIwaGlnaHdheXxlbnwxfHx8fDE3NzQyNTE4MjV8MA&ixlib=rb-4.1.0&q=80&w=1080",
      desc: '全链路货物跟踪，疲劳驾驶识别与车队调度管理优化。' 
    },
    { 
      title: '两客一危车辆', 
      image: "https://images.unsplash.com/photo-1643686978040-beac9782e58b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkYXNoY2FtJTIwZHJpdmVyJTIwdmlld3xlbnwxfHx8fDE3NzQyNTE4MzJ8MA&ixlib=rb-4.1.0&q=80&w=1080",
      desc: '严格部标合规监控，实时视频流拉取与紧急事件云存储。' 
    },
    {
      title: '共享出行与微客',
      image: "https://images.unsplash.com/photo-1774109647894-fd615ee2a11d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzaGFyZWQlMjBiaWN5Y2xlJTIwY2l0eSUyMG1vZGVybnxlbnwxfHx8fDE3NzQyNTI0MzZ8MA&ixlib=rb-4.1.0&q=80&w=1080",
      desc: '海量设备位置汇聚、低功耗通信及精细化运营分析。'
    },
    {
      title: '重型工程机械',
      image: "https://images.unsplash.com/photo-1762889597634-264f0907820b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoZWF2eSUyMGNvbnN0cnVjdGlvbiUyMG1hY2hpbmVyeXxlbnwxfHx8fDE3NzQyNTI0MzZ8MA&ixlib=rb-4.1.0&q=80&w=1080",
      desc: '复杂工况下的设备状态回传，实现远程诊断与预测性维护。'
    }
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: false
        }
      }
    ]
  };

  return (
    <section className="mx-auto max-w-7xl px-6 py-24 border-t border-zinc-200">
      <div className="text-center mb-16">
        <h2 className="text-3xl font-bold tracking-tight text-zinc-900">赋能各行各业</h2>
        <p className="mt-4 text-zinc-500">成功案例覆盖多种车辆与物联网应用场景。</p>
      </div>

      <div className="relative px-2">
        <Slider {...settings} className="case-studies-slider">
          {cases.map((item, i) => (
            <div key={i} className="px-3 pb-8">
              <div className="rounded-xl border border-zinc-200 bg-white overflow-hidden hover:shadow-md transition-all cursor-default flex flex-col group h-full">
                <div className="h-44 w-full relative bg-zinc-100 border-b border-zinc-200 overflow-hidden">
                   <ImageWithFallback 
                     src={item.image}
                     alt={item.title}
                     className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                   />
                   <div className="absolute inset-0 bg-black/10 transition-opacity group-hover:bg-transparent"></div>
                </div>
                <div className="p-6 flex-1 flex flex-col bg-white">
                   <h3 className="text-lg font-bold text-zinc-900 mb-2">{item.title}</h3>
                   <p className="text-sm text-zinc-500 leading-relaxed">{item.desc}</p>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
      
      {/* Add custom styling for slick dots to match Fumadocs minimal flat style */}
      <style>{`
        .case-studies-slider .slick-dots bottom {
           bottom: -10px;
        }
        .case-studies-slider .slick-dots li button:before {
          font-size: 8px;
          color: #a1a1aa;
          opacity: 0.5;
        }
        .case-studies-slider .slick-dots li.slick-active button:before {
          color: #2d8cf0;
          opacity: 1;
        }
      `}</style>
    </section>
  );
}