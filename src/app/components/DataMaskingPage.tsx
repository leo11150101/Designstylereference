import { 
  ArrowRight, 
  ShieldCheck, 
  Cloud, 
  Monitor, 
  Cpu, 
  FileText, 
  ChevronRight,
  UserCheck,
  CreditCard
} from 'lucide-react';
import { motion } from 'motion/react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import imgDataMaskingHero from "figma:asset/71f46bb8aa3b7741d045d4bb44168524fcfb3138.png";

export function DataMaskingPage() {
  const advantages = [
    { 
      icon: <Cloud className="w-6 h-6 text-[#2d8cf0]" />, 
      title: '云端接口', 
      desc: '提供云端接口，支持多种开发方式。' 
    },
    { 
      icon: <Cpu className="w-6 h-6 text-[#2d8cf0]" />, 
      title: '设备嵌入', 
      desc: '设备端算法嵌入，在设备端完成个人信息脱敏。' 
    },
    { 
      icon: <Monitor className="w-6 h-6 text-[#2d8cf0]" />, 
      title: '轻量独立部署', 
      desc: '支持轻量独立部署在各种业务环境（如云端、网站等）。' 
    }
  ];

  const scenarios = [
    {
      title: '图片脱敏处理',
      desc: '自动识别并遮蔽图片中的人脸、车牌等敏感信息，无需人工辅助。',
      image: "https://images.unsplash.com/photo-1621042431779-c71d161ec02a?q=80&w=1080"
    },
    {
      title: '合规性保障',
      desc: '符合 GDPR 等法律法规，保障数据在采集、存储、流转过程中的安全性与个人隐私。',
      image: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?q=80&w=1080"
    }
  ];

  const functions = [
    { icon: <UserCheck className="w-5 h-5" />, title: '人脸脱敏', desc: '精准识别视频/图片中的人脸区域并进行马赛克或模糊处理。' },
    { icon: <CreditCard className="w-5 h-5" />, title: '车牌脱敏', desc: '全天候、多角度识别各类车辆牌照信息并执行脱敏操作。' }
  ];

  return (
    <div className="bg-[#fcfcfc] text-zinc-900 selection:bg-[#2d8cf0]/10 selection:text-[#2d8cf0]">
      {/* Hero Section */}
      <section className="relative pt-24 pb-16 overflow-hidden bg-white">
        <div className="mx-auto max-w-7xl px-6 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-4xl lg:text-6xl font-black tracking-tight mb-6 leading-tight">
                数据脱敏算法
              </h1>
              <p className="text-lg text-zinc-500 mb-10 leading-relaxed max-w-lg font-medium">
                智能化处理图片和视频数据中的个人信息。通过深度学习算法，实现对人脸、车牌等隐私数据的秒级遮蔽。
              </p>
              <button className="px-8 py-4 bg-[#2d8cf0] text-white font-bold rounded-xl shadow-xl shadow-[#2d8cf0]/20 hover:bg-[#2074d6] transition-all flex items-center gap-3">
                开发文档 <ArrowRight className="w-4 h-4" />
              </button>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1 }}
              className="relative"
            >
              <ImageWithFallback src={imgDataMaskingHero} alt="Data Masking AI Illustration" className="w-full h-auto drop-shadow-2xl" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Sub Nav */}
      <div className="sticky top-[56px] z-40 w-full border-b border-zinc-100 bg-white/80 backdrop-blur-md">
        <div className="mx-auto max-w-7xl px-6 flex items-center gap-8 h-14 overflow-x-auto whitespace-nowrap scrollbar-hide">
          <a href="#advantages" className="text-sm font-bold text-[#2d8cf0] border-b-2 border-[#2d8cf0] h-full flex items-center">产品优势</a>
          <a href="#scenarios" className="text-sm font-bold text-zinc-400 hover:text-zinc-600 h-full flex items-center transition-colors">适用场景</a>
          <a href="#functions" className="text-sm font-bold text-zinc-400 hover:text-zinc-600 h-full flex items-center transition-colors">功能介绍</a>
          <a href="#docs" className="text-sm font-bold text-zinc-400 hover:text-zinc-600 h-full flex items-center transition-colors">文档与工具</a>
        </div>
      </div>

      {/* Product Advantages */}
      <section id="advantages" className="py-24 bg-white">
        <div className="mx-auto max-w-7xl px-6 text-center mb-16">
          <h2 className="text-3xl font-black mb-4">产品优势</h2>
        </div>
        <div className="mx-auto max-w-7xl px-6 grid md:grid-cols-3 gap-12">
          {advantages.map((item, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="flex flex-col items-center text-center p-8 rounded-3xl bg-zinc-50 border border-zinc-100"
            >
              <div className="mb-6 p-4 rounded-2xl bg-white shadow-sm">{item.icon}</div>
              <h3 className="text-xl font-black mb-3">{item.title}</h3>
              <p className="text-zinc-500 text-sm leading-relaxed">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Application Scenarios */}
      <section id="scenarios" className="py-24 bg-zinc-50">
        <div className="mx-auto max-w-7xl px-6 text-center mb-16">
          <h2 className="text-3xl font-black mb-4">适用场景</h2>
        </div>
        <div className="mx-auto max-w-7xl px-6 grid md:grid-cols-2 gap-8">
          {scenarios.map((item, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="group overflow-hidden rounded-[2rem] bg-white border border-zinc-100 hover:shadow-2xl transition-all duration-500"
            >
              <div className="aspect-[16/9] overflow-hidden">
                <ImageWithFallback src={item.image} alt={item.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
              </div>
              <div className="p-8">
                <h3 className="text-xl font-black mb-3">{item.title}</h3>
                <p className="text-zinc-500 text-sm leading-relaxed">{item.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Function Introduction */}
      <section id="functions" className="py-24 bg-white">
        <div className="mx-auto max-w-7xl px-6 text-center mb-16">
          <h2 className="text-3xl font-black mb-4">功能介绍</h2>
        </div>
        <div className="mx-auto max-w-5xl px-6 space-y-4">
          {functions.map((item, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="flex items-center gap-6 p-8 rounded-2xl bg-zinc-50 border border-zinc-100 hover:bg-white hover:border-[#2d8cf0]/30 transition-all duration-300"
            >
              <div className="w-12 h-12 rounded-xl bg-white shadow-sm flex items-center justify-center text-[#2d8cf0]">
                {item.icon}
              </div>
              <div>
                <h3 className="font-black text-lg">{item.title}</h3>
                <p className="text-zinc-400 text-sm">{item.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Docs & Tools */}
      <section id="docs" className="py-24 bg-zinc-50 border-t border-zinc-100">
        <div className="mx-auto max-w-7xl px-6 text-center mb-16">
          <h2 className="text-3xl font-black mb-4">文档与工具</h2>
        </div>
        <div className="mx-auto max-w-md px-6">
          <div className="group p-8 rounded-3xl bg-white border border-zinc-100 hover:border-[#2d8cf0]/30 transition-all">
            <div className="flex items-center gap-4 mb-4">
              <div className="p-3 rounded-xl bg-[#2d8cf0]/10 text-[#2d8cf0]">
                <FileText className="w-6 h-6" />
              </div>
              <div>
                <h3 className="font-black">产品介绍</h3>
                <p className="text-xs text-zinc-400 uppercase tracking-widest mt-1 font-mono">Documentation</p>
              </div>
            </div>
            <p className="text-zinc-500 text-sm mb-6 leading-relaxed">介绍产品的基本功能、核心能力以及快速接入指南。</p>
            <button className="flex items-center gap-2 text-sm font-bold text-[#2d8cf0] group-hover:gap-4 transition-all">
              立即查看 <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
