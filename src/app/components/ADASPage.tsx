import { 
  ArrowRight, 
  MapPin, 
  AlertTriangle, 
  Zap, 
  FileText, 
  ChevronRight,
  Navigation,
  Target,
  Car,
  Users,
  Waypoints,
  Activity
} from 'lucide-react';
import { motion } from 'motion/react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import imgADASHero from "figma:asset/d0398f3c47d9d3f872c49b96619b5748e41bb99a.png";

export function ADASPage() {
  const advantages = [
    { 
      icon: <Navigation className="w-6 h-6 text-[#2d8cf0]" />, 
      title: '车道偏离智能提示', 
      desc: '通过摄像头实时监控车道线。当监测到车辆发生非主观意愿偏离时，系统会发出预警。' 
    },
    { 
      icon: <Target className="w-6 h-6 text-[#2d8cf0]" />, 
      title: '智能碰撞预警', 
      desc: '识别前方障碍物并预警。有效减少追尾等交通事故的发生。' 
    },
    { 
      icon: <Users className="w-6 h-6 text-[#2d8cf0]" />, 
      title: '行人碰撞报警', 
      desc: '识别前方行人并预警。在复杂路况下为驾驶员提供额外的安全保障。' 
    }
  ];

  const scenarios = [
    {
      title: '设备算法组成的闭环系统',
      desc: '将预警信息实时反馈给监管平台，实现对行车风险的闭环管理。',
      image: "https://images.unsplash.com/photo-1706493339408-c955c21b46ee?q=80&w=1080"
    },
    {
      title: '辅助驾驶',
      desc: '为驾驶员提供全方位的信息辅助，降低驾驶强度，提高行车安全性。',
      image: "https://images.unsplash.com/photo-1718784492504-b57e8a88c725?q=80&w=1080"
    }
  ];

  const functions = [
    { icon: <AlertTriangle className="w-5 h-5" />, title: '前向碰撞预警', desc: '根据当前车速及与前车间距，判断可能发生碰撞时发出紧急告警。' },
    { icon: <Activity className="w-5 h-5" />, title: '车距过近预警', desc: '实时监测与前车的相对距离，保持安全跟车距离提醒。' },
    { icon: <Waypoints className="w-5 h-5" />, title: '车道偏离预警', desc: '检测车辆在未打转向灯的情况下偏离车道行驶的行为。' },
    { icon: <Zap className="w-5 h-5" />, title: '前车启动预警', desc: '红绿灯路口等候时，前方车辆已启动，提醒本车及时跟上。' },
    { icon: <Users className="w-5 h-5" />, title: '行人碰撞预警', desc: '针对车辆正前方的行人、非机动车进行识别，并判定碰撞风险。' },
    { icon: <Car className="w-5 h-5" />, title: '频繁变道预警', desc: '监控短时间内的连续并线行为，针对危险驾驶倾向进行预警。' }
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
              <h1 className="text-4xl lg:text-6xl font-black tracking-tight mb-6 leading-tight text-zinc-900">
                高级辅助驾驶 (ADAS)
              </h1>
              <p className="text-lg text-zinc-500 mb-10 leading-relaxed max-w-lg font-medium">
                对潜在危险情况发出预警或干预车辆行驶。集成多种视觉识别算法，打造全方位的智能行车守护系统。
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
              <ImageWithFallback src={imgADASHero} alt="ADAS AI Illustration" className="w-full h-auto drop-shadow-2xl" />
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
