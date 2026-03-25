import { 
  ArrowRight, 
  ShieldCheck, 
  Eye, 
  Activity, 
  ChevronRight 
} from 'lucide-react';
import { motion } from 'motion/react';
import { Link } from 'react-router';
import { ImageWithFallback } from './figma/ImageWithFallback';

import imgDataMasking from "figma:asset/71f46bb8aa3b7741d045d4bb44168524fcfb3138.png";
import imgDSM from "figma:asset/3640923d63c694ccc41113de4ad81bdf24c9766b.png";
import imgADAS from "figma:asset/d0398f3c47d9d3f872c49b96619b5748e41bb99a.png";

export function AIAlgorithmPage() {
  const algorithms = [
    {
      title: "数据脱敏算法",
      desc: "智能化处理图片和视频数据中的个人信息，实现高效、合规的隐私遮蔽。",
      image: imgDataMasking,
      link: "/ai-algorithm/data-masking",
      icon: <ShieldCheck className="w-5 h-5" />,
      features: ["人脸脱敏", "车牌脱敏", "合规性保障"]
    },
    {
      title: "驾驶员状态监测 (DSM)",
      desc: "利用 AI 视觉算法实时监控驾驶员疲劳、抽烟、打电话等危险驾驶行为。",
      image: imgDSM,
      link: "/ai-algorithm/dsm",
      icon: <Eye className="w-5 h-5" />,
      features: ["疲劳驾驶监测", "违规行为告警", "全天候适应"]
    },
    {
      title: "高级辅助驾驶 (ADAS)",
      desc: "提供前向碰撞预警、车道偏离提醒等功能，提升行车安全性。",
      image: imgADAS,
      link: "/ai-algorithm/adas",
      icon: <Activity className="w-5 h-5" />,
      features: ["前向碰撞预警", "车道偏离预警", "行人检测"]
    }
  ];

  return (
    <div className="bg-[#fcfcfc] min-h-screen">
      <section className="pt-32 pb-20 bg-white border-b border-zinc-100">
        <div className="mx-auto max-w-7xl px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#2d8cf0] mb-4 block">
              AI Intelligent Algorithms
            </span>
            <h1 className="text-4xl lg:text-6xl font-black tracking-tight text-zinc-900 mb-8">
              人工智能 <span className="text-[#2d8cf0]">视觉算法</span>
            </h1>
            <p className="text-xl text-zinc-500 max-w-2xl mx-auto leading-relaxed">
              麦谷智云 AI 视觉算法系列，专注于车载与工业场景。通过深度学习与视觉识别技术，为您的业务提供智能化、精准的决策支持。
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid md:grid-cols-3 gap-8">
            {algorithms.map((algo, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="group flex flex-col h-full bg-white rounded-[2.5rem] border border-zinc-100 overflow-hidden hover:shadow-2xl hover:border-[#2d8cf0]/20 transition-all duration-500"
              >
                <div className="aspect-[4/3] overflow-hidden bg-zinc-50 p-8 flex items-center justify-center">
                  <ImageWithFallback 
                    src={algo.image} 
                    alt={algo.title} 
                    className="w-full h-auto object-contain drop-shadow-lg group-hover:scale-110 transition-transform duration-700" 
                  />
                </div>
                <div className="p-10 flex-1 flex flex-col">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-10 h-10 rounded-xl bg-[#2d8cf0]/10 text-[#2d8cf0] flex items-center justify-center">
                      {algo.icon}
                    </div>
                    <h2 className="text-2xl font-black">{algo.title}</h2>
                  </div>
                  <p className="text-zinc-500 text-sm leading-relaxed mb-8 flex-1">
                    {algo.desc}
                  </p>
                  <div className="space-y-3 mb-10">
                    {algo.features.map((feat, fi) => (
                      <div key={fi} className="flex items-center gap-2 text-xs font-bold text-zinc-400">
                        <div className="w-1.5 h-1.5 rounded-full bg-[#2d8cf0]" />
                        {feat}
                      </div>
                    ))}
                  </div>
                  <Link 
                    to={algo.link}
                    className="flex items-center justify-between px-6 py-4 rounded-2xl bg-zinc-50 group-hover:bg-[#2d8cf0] text-zinc-600 group-hover:text-white transition-all font-bold"
                  >
                    查看详情 <ChevronRight className="w-4 h-4" />
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
