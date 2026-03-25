import { 
  ArrowRight, 
  Mic, 
  Sun, 
  Settings, 
  FileText, 
  ChevronRight,
  User,
  Eye,
  Smoking,
  Phone,
  Droplets,
  LogOut,
  ShieldCheck,
  VideoOff,
  Search,
  Users
} from 'lucide-react';
import { motion } from 'motion/react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import imgDSMHero from "figma:asset/3640923d63c694ccc41113de4ad81bdf24c9766b.png";

export function DSMPage() {
  const advantages = [
    { 
      icon: <Mic className="w-6 h-6 text-[#2d8cf0]" />, 
      title: '智能语音提示', 
      desc: '通过摄像头实时监控驾驶员行为。当监测到违规行为时，系统会发出语音提示，从而提高行车安全。' 
    },
    { 
      icon: <Sun className="w-6 h-6 text-[#2d8cf0]" />, 
      title: '全天候适应', 
      desc: '适应各种天气与光照条件。确保系统在白天或夜晚下稳定、可靠地监控驾驶员状态。' 
    },
    { 
      icon: <Settings className="w-6 h-6 text-[#2d8cf0]" />, 
      title: '灵敏度调整', 
      desc: '根据驾驶员的驾驶习惯调整灵敏度，提供更个性化的监控方案。' 
    }
  ];

  const scenarios = [
    {
      title: '设备算法组成的闭环系统',
      desc: '将监控到的各种违规行为实时反馈给监管平台，为监管者提供有力依据。',
      image: "https://images.unsplash.com/photo-1744199770431-8048f20dedf8?q=80&w=1080"
    },
    {
      title: '辅助驾驶',
      desc: '与车辆控制系统联动，提高行车安全性，降低事故率。',
      image: "https://images.unsplash.com/photo-1706493339408-c955c21b46ee?q=80&w=1080"
    }
  ];

  const functions = [
    { icon: <User className="w-5 h-5" />, title: '驾驶员疲劳驾驶', desc: '经深度视频特征分析，当检测驾驶员闭眼状态时间大于设定阈值时发出预警。' },
    { icon: <Eye className="w-5 h-5" />, title: '驾驶员打哈欠', desc: '监测驾驶员嘴部动作，当哈欠动作频率过高时进行疲劳预警。' },
    { icon: <Smoking className="w-5 h-5" />, title: '驾驶员抽烟', desc: '实时分析车内视频流，检测并告警驾驶员驾驶期间抽烟行为。' },
    { icon: <Phone className="w-5 h-5" />, title: '驾驶员打电话、玩手机', desc: '识别驾驶员接打手持电话及长时间操作手机屏幕的违规动作。' },
    { icon: <Droplets className="w-5 h-5" />, title: '驾驶员喝水', desc: '检测驾驶员驾驶期间喝水、吃东西等可能影响驾驶安全的行为。' },
    { icon: <LogOut className="w-5 h-5" />, title: '驾驶员离岗/视线偏离', desc: '检测驾驶员视线长时间偏离正前方或身体离开驾驶位的情况。' },
    { icon: <ShieldCheck className="w-5 h-5" />, title: '驾驶员不系安全带', desc: '利用算法自动识别驾驶员是否规范佩戴三点式安全带。' },
    { icon: <VideoOff className="w-5 h-5" />, title: '驾驶员摄像头遮挡', desc: '当 DSM 摄像头被遮挡导致无法正常监控时，系统立即发出告警。' },
    { icon: <Search className="w-5 h-5" />, title: '驾驶员检测不到位', desc: '算法无法有效提取驾驶员面部特征时触发检测状态异常提示。' },
    { icon: <Users className="w-5 h-5" />, title: '驾驶员换人', desc: '通过人脸比对技术检测当前驾驶员是否与授权人员一致，严防非授权驾驶。' }
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
                驾驶员状态监测 (DSM)
              </h1>
              <p className="text-lg text-zinc-500 mb-10 leading-relaxed max-w-lg font-medium">
                对驾驶员驾驶期间的状态进行全方位的实时监控与提醒。利用高精度 AI 视觉算法，保障驾驶安全，杜绝违规驾驶。
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
              <ImageWithFallback src={imgDSMHero} alt="DSM AI Illustration" className="w-full h-auto drop-shadow-2xl" />
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
