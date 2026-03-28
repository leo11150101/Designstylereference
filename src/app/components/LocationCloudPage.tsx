import { 
  ArrowRight, 
  MapPin, 
  History, 
  Navigation, 
  ShieldAlert, 
  LineChart, 
  Activity,
  Database,
  ChevronRight,
  Code,
  Terminal,
  Server,
  Cpu,
  Globe,
  Wifi,
  Bell,
  Settings,
  ShieldCheck,
  FileText,
  BarChart3,
  Send,
  Video,
  Smartphone,
  Search,
  MessageSquare,
  Zap,
  BookOpen
} from 'lucide-react';
import { motion } from 'motion/react';
import { ImageWithFallback } from './figma/ImageWithFallback';

import imgDataPushHero from 'figma:asset/6592cba3b51e09647d7cc623dd4764e0990e03f0.png';

export function LocationCloudPage() {
  const engineStats = [
    { label: '并发接入', value: '10M+', sub: '百万级高并发承载' },
    { label: '位置延时', value: '<50ms', sub: '毫秒级计算推送' },
    { label: '轨迹压缩', value: '80%', sub: '存储资源极限优化' },
    { label: '服务可用性', value: '99.99%', sub: '分布式多活架构' },
  ];

  const engineFunctions = [
    { icon: <Navigation className="w-5 h-5" />, title: '实时轨迹监控', desc: '全量轨迹秒级刷新，支持百万车机同时在线。', size: 'col-span-2' },
    { icon: <ShieldAlert className="w-5 h-5" />, title: '电子围栏', desc: '自定义多边形围栏，毫秒级进出告警推送。', size: 'col-span-1' },
    { icon: <History className="w-5 h-5" />, title: '轨迹回放', desc: '平滑轨迹处理算法，还原真实行驶轨迹。', size: 'col-span-1' },
    { icon: <Database className="w-5 h-5" />, title: '轨迹冷热存储', desc: '冷热数据自动分离，支持 5 年历史轨迹离线快查。', size: 'col-span-2' },
    { icon: <LineChart className="w-5 h-5" />, title: '行程解析', desc: '解析停车点、超速段、急转弯等驾驶行为。', size: 'col-span-1' },
    { icon: <Activity className="w-5 h-5" />, title: '告警系统', desc: '离线、异常停留、设备损坏实时反馈。', size: 'col-span-2' },
  ];

  const subscriptionAdvantages = [
    { icon: <Settings className="w-6 h-6" />, title: '订阅配置', desc: '一键配置订阅规则，实时推送业务数据，灵活应对多变业务需求。' },
    { icon: <Code className="w-6 h-6" />, title: 'SDK 支持', desc: '提供全语言 SDK 支持，实现端对端解密，深度保障数据传输安全。' },
    { icon: <Zap className="w-6 h-6" />, title: '快速部署', desc: '支持多种协议服务，通过 Docker 一键快速完成客户端数据环境部署。' },
    { icon: <Bell className="w-6 h-6" />, title: '积压报警', desc: '提供实时数据积压堆积报警功能，有效防止由于网络波动引起的数据延迟风险。' },
  ];

  const subscriptionFeatures = [
    { icon: <History className="w-5 h-5" />, title: '数据订阅推送', desc: '订阅各时间段设备数据到达，确保用户根据数据时间顺序进行精准数据展现。' },
    { icon: <ShieldAlert className="w-5 h-5" />, title: '报警数据推送', desc: '订阅设备产生异常报警数据，及时推送通知至前端，极大降低资产损失风险。' },
    { icon: <LineChart className="w-5 h-5" />, title: '驾驶行为分析推送', desc: '实时推送车辆驾驶行为等九类数据，为用户提供全维度的驾驶行为分析报告。' },
    { icon: <ShieldCheck className="w-5 h-5" />, title: '主动安全数据推送', desc: '订阅各场景主动安全数据，提供企业主动预防体系的实时动态信息支持。' },
    { icon: <Video className="w-5 h-5" />, title: '多媒体数据推送', desc: '支持图片和视频原始数据订阅推送，满足用户对于实时视像信息的检索需求。' },
    { icon: <Activity className="w-5 h-5" />, title: '积压监控告警', desc: '实时采集数据流堆积情况，有效防止系统数据丢失，保障业务运营的高稳定性。' },
  ];

  const scenarios = [
    { title: '场景化业务开发', desc: '符合车联网行业数据订阅二次开发标准，助力合作伙伴快速构建上层行业应用。', image: 'https://images.unsplash.com/photo-1562811950-41d4a4944a4b?auto=format&fit=crop&q=80&w=1080' },
    { title: '多维数据挖掘', desc: '对企业资产进行全量轨迹管理与保养业务数据分析，深度挖掘沉淀数据的核心价值。', image: 'https://images.unsplash.com/photo-1647019766641-2c7cf0c19a11?auto=format&fit=crop&q=80&w=1080' },
    { title: '双向交互控制', desc: '基于订阅服务发送实时指令到硬件设备，实现车辆的远程控制、参数调优与高效交互。', image: 'https://images.unsplash.com/photo-1684141402511-3666ae53f25f?auto=format&fit=crop&q=80&w=1080' },
  ];

  const apiSample = `{
  "deviceId": "MG-8829-X",
  "timestamp": 1774403681,
  "location": {
    "lat": 22.5428,
    "lng": 113.9592,
    "altitude": 12.5,
    "precision": "HD"
  },
  "status": "MOVING",
  "speed": 62.5,
  "events": ["FENCE_EXIT"]
}`;

  return (
    <div className="bg-white text-zinc-900 selection:bg-[#2d8cf0]/10 selection:text-[#2d8cf0]">
      {/* 1. Hero Section */}
      <section className="relative pt-32 pb-24 overflow-hidden bg-white">
        <div className="absolute inset-0 opacity-[0.03] pointer-events-none">
          <div className="absolute inset-0" style={{ backgroundImage: 'linear-gradient(#2d8cf0 1px, transparent 1px), linear-gradient(90deg, #2d8cf0 1px, transparent 1px)', backgroundSize: '60px 60px' }}></div>
        </div>
        
        <div className="mx-auto max-w-7xl px-6 relative z-10">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#2d8cf0]/10 border border-[#2d8cf0]/20 text-[#2d8cf0] text-[10px] font-bold uppercase tracking-widest mb-8">
                <Globe className="w-3 h-3" /> Global Space Infrastructure
              </div>
              <h1 className="text-5xl lg:text-7xl font-black tracking-tight mb-8 leading-[1.1]">
                位置云 <br />
                <span className="text-[#2d8cf0]">PaaS 基础设施</span>
              </h1>
              <p className="text-xl text-zinc-500 mb-12 leading-relaxed max-w-xl">
                为全球开发者构建的高可用定位引擎。从百万车辆的轨迹归集到毫秒级的电子围栏响应，我们提供极致、稳定的空间数据底座。
              </p>
              <div className="flex flex-wrap gap-4">
                <button className="px-10 py-5 bg-[#2d8cf0] text-white font-black rounded-2xl shadow-2xl shadow-[#2d8cf0]/20 hover:bg-[#2074d6] hover:-translate-y-1 transition-all flex items-center gap-3">
                  开始集成 <ArrowRight className="w-5 h-5" />
                </button>
                <button className="px-10 py-5 bg-white text-zinc-600 font-bold rounded-2xl border border-zinc-200 hover:bg-zinc-50 transition-all flex items-center gap-3">
                  查看技术文档
                </button>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: 0.2 }}
              className="relative"
            >
              <div className="aspect-square rounded-[3rem] bg-zinc-50 border border-zinc-100 p-8 relative overflow-hidden">
                <div className="grid grid-cols-6 grid-rows-6 gap-4 h-full">
                  {Array.from({ length: 36 }).map((_, i) => (
                    <div key={i} className="w-full h-full rounded bg-[#2d8cf0]/5 border border-[#2d8cf0]/10" />
                  ))}
                </div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-40 h-40 rounded-full bg-white shadow-2xl flex flex-col items-center justify-center text-[#2d8cf0] border border-zinc-100 animate-pulse">
                    <MapPin className="w-16 h-16" />
                    <span className="text-[10px] font-black mt-2 tracking-widest uppercase">Target Locked</span>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 2. Stats Bar */}
      <section className="py-20 bg-[#fafafa] border-y border-zinc-100">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {engineStats.map((s, i) => (
              <div key={i} className="p-8 bg-white border border-zinc-200/50 rounded-3xl hover:shadow-xl transition-all group">
                <div className="text-4xl font-black text-[#2d8cf0] mb-2 group-hover:scale-110 transition-transform origin-left">{s.value}</div>
                <div className="font-bold text-zinc-900 text-sm mb-1">{s.label}</div>
                <div className="text-[10px] text-zinc-400 font-bold uppercase tracking-widest">{s.sub}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. Core Capabilities (Bento) */}
      <section className="py-24 bg-white">
        <div className="mx-auto max-w-7xl px-6">
          <div className="text-center mb-20">
            <h2 className="text-4xl font-black mb-4 tracking-tight">核心能力矩阵</h2>
            <p className="text-zinc-500">专为高并发、大规模物联网环境设计的空间数据引擎</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {engineFunctions.map((f, i) => (
              <motion.div 
                key={i} 
                className={`${f.size} group p-10 rounded-[2.5rem] bg-zinc-50 border border-zinc-100 hover:bg-white hover:border-[#2d8cf0]/30 hover:shadow-2xl transition-all duration-500`}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
              >
                <div className="w-12 h-12 rounded-xl bg-white shadow-sm flex items-center justify-center text-[#2d8cf0] mb-8 group-hover:bg-[#2d8cf0] group-hover:text-white transition-all duration-500">
                  {f.icon}
                </div>
                <h3 className="text-2xl font-black mb-4">{f.title}</h3>
                <p className="text-zinc-500 text-sm leading-relaxed mb-8">{f.desc}</p>
                <button className="flex items-center gap-2 text-xs font-bold text-[#2d8cf0] group-hover:gap-4 transition-all uppercase tracking-widest">
                  Tech Specs <ChevronRight className="w-4 h-4" />
                </button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Data Subscription & Push (New Integrated Section) */}
      <section className="py-24 bg-[#fafafa] border-y border-zinc-100 overflow-hidden">
        <div className="mx-auto max-w-7xl px-6">
          <div className="flex flex-col lg:flex-row items-center gap-20 mb-24">
            <div className="flex-1 space-y-8">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#2d8cf0]/10 border border-[#2d8cf0]/20 text-[#2d8cf0] text-[10px] font-bold uppercase tracking-widest">
                <Zap className="w-3 h-3" /> Real-time Data Pipeline
              </div>
              <h2 className="text-4xl lg:text-6xl font-black text-zinc-900 leading-tight">
                数据订阅推送
              </h2>
              <p className="text-xl text-zinc-500 leading-relaxed">
                高效的数据流服务，专为设备上报的数据订阅而生。通过位置云系统，您可以快速配置各种推送规则，满足不同维度的业务分析需求。
              </p>
              
              <div className="grid sm:grid-cols-2 gap-8 pt-6">
                {subscriptionAdvantages.map((adv, i) => (
                  <div key={i} className="space-y-3">
                    <div className="text-[#2d8cf0]">{adv.icon}</div>
                    <h4 className="font-black text-zinc-900">{adv.title}</h4>
                    <p className="text-sm text-zinc-400 leading-relaxed">{adv.desc}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="flex-1 w-full max-w-2xl">
              <motion.div 
                className="relative group p-1 bg-white border border-zinc-200 rounded-[3rem] overflow-hidden shadow-2xl"
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
              >
                <div className="aspect-[16/11] rounded-[2.8rem] overflow-hidden">
                  <ImageWithFallback src={imgDataPushHero} alt="Data Push" className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105" />
                </div>
              </motion.div>
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {subscriptionFeatures.map((feat, i) => (
              <motion.div 
                key={i} 
                className="p-8 rounded-3xl bg-white border border-zinc-200/50 hover:border-[#2d8cf0]/30 transition-all group flex gap-6 items-start"
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
              >
                <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-zinc-50 flex items-center justify-center text-[#2d8cf0] group-hover:bg-[#2d8cf0] group-hover:text-white transition-all">
                  {feat.icon}
                </div>
                <div>
                  <h4 className="font-bold text-zinc-900 mb-2">{feat.title}</h4>
                  <p className="text-xs text-zinc-500 leading-relaxed">{feat.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. Applicable Scenarios */}
      <section className="py-24 bg-white">
        <div className="mx-auto max-w-7xl px-6 text-center">
          <h2 className="text-4xl font-black mb-20 tracking-tight">行业应用场景</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {scenarios.map((scene, i) => (
              <motion.div 
                key={i} 
                className="group relative rounded-[2.5rem] overflow-hidden aspect-[4/5] border border-zinc-100 shadow-xl"
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
              >
                <ImageWithFallback src={scene.image} alt={scene.title} className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110" />
                <div className="absolute inset-0 bg-gradient-to-t from-zinc-900 via-zinc-900/40 to-transparent opacity-90" />
                <div className="absolute bottom-0 left-0 right-0 p-10 text-left">
                  <h3 className="text-2xl font-black text-white mb-4">{scene.title}</h3>
                  <p className="text-sm text-white/70 leading-relaxed">{scene.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. Developer Experience: API Preview */}
      <section className="py-24 bg-zinc-900 text-white overflow-hidden">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <div className="space-y-10">
              <div className="w-14 h-14 rounded-2xl bg-[#2d8cf0]/20 flex items-center justify-center text-[#2d8cf0]">
                <Code className="w-7 h-7" />
              </div>
              <h2 className="text-4xl lg:text-5xl font-black leading-tight">面向开发者的 <br /> 标准化输出</h2>
              <p className="text-lg opacity-50 leading-relaxed max-w-lg">
                位置云提供极简的 API 设计。无论是轨迹拉取、围栏告警还是行程分析，标准化的 JSON 输出让您的业务系统接入仅需数行代码。
              </p>
              <div className="grid sm:grid-cols-2 gap-8">
                {[
                  { icon: <Server className="w-5 h-5" />, title: 'RESTful API', desc: '丰富的多语言 SDK 与文档支持。' },
                  { icon: <Wifi className="w-5 h-5" />, title: 'Webhook 推送', desc: '告警事件毫秒级同步至您的系统。' },
                ].map((item, i) => (
                  <div key={i} className="space-y-3">
                    <div className="text-[#2d8cf0]">{item.icon}</div>
                    <div className="font-bold text-sm">{item.title}</div>
                    <div className="text-xs opacity-40">{item.desc}</div>
                  </div>
                ))}
              </div>
            </div>
            
            <motion.div 
              className="relative p-1 rounded-[2rem] bg-white/5 border border-white/10 overflow-hidden shadow-2xl"
              initial={{ x: 50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: true }}
            >
              <div className="absolute top-0 left-0 w-full h-10 bg-white/5 border-b border-white/10 flex items-center px-4 gap-2">
                <div className="w-2 h-2 rounded-full bg-red-500/50" />
                <div className="w-2 h-2 rounded-full bg-amber-500/50" />
                <div className="w-2 h-2 rounded-full bg-emerald-500/50" />
                <div className="ml-4 text-[10px] opacity-20 font-mono tracking-widest">GET /v1/location/realtime</div>
              </div>
              <pre className="p-8 pt-16 text-xs font-mono text-[#2d8cf0]/90 overflow-x-auto leading-relaxed">
                <code>{apiSample}</code>
              </pre>
            </motion.div>
          </div>
        </div>
      </section>



      {/* 8. Final CTA */}
      <section className="py-24 bg-white border-t border-zinc-100">
        <div className="mx-auto max-w-7xl px-6">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="group relative border border-zinc-200 bg-zinc-900 rounded-[4rem] overflow-hidden flex flex-col lg:flex-row items-stretch shadow-2xl"
          >
            <div className="flex-1 p-8 lg:p-20 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#2d8cf0]/10 blur-[150px] -translate-y-1/2 translate-x-1/2" />
              <div className="relative z-10 space-y-10">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-[#2d8cf0] animate-pulse" />
                  <span className="text-[10px] font-black uppercase tracking-[0.4em] text-[#2d8cf0]">Infrastructure Ready</span>
                </div>
                <h2 className="text-4xl lg:text-6xl font-black text-white leading-tight">
                  构建您的 <br />
                  <span className="text-[#2d8cf0]">高并发位置基座</span>
                </h2>
                <p className="text-zinc-400 text-xl leading-relaxed max-w-xl">
                  麦谷位置云通过极致的并发处理能力与毫秒级的推送响应，助力开发者快速构建高性能的车联网与物联网应用。
                </p>
                <div className="flex flex-wrap gap-6 pt-6">
                  <button className="px-12 py-6 bg-[#2d8cf0] text-white font-black rounded-3xl flex items-center gap-3 hover:bg-[#1a76d2] transition-all active:scale-95 shadow-2xl shadow-[#2d8cf0]/30">
                    立即免费试用 <Zap className="w-6 h-6" />
                  </button>
                  <button className="px-12 py-6 bg-white/5 border border-white/10 text-white font-black rounded-3xl flex items-center gap-3 hover:bg-white/10 transition-all active:scale-95">
                    商务合作咨询 <MessageSquare className="w-6 h-6" />
                  </button>
                </div>
              </div>
            </div>
            
            <div className="lg:w-[450px] bg-zinc-800/40 p-8 lg:p-20 flex flex-col justify-center border-l border-white/5">
              <div className="space-y-12">
                <div className="flex items-center gap-6 group/item">
                  <div className="w-14 h-14 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-zinc-500 group-hover/item:text-[#2d8cf0] transition-colors">
                    <ShieldCheck className="w-7 h-7" />
                  </div>
                  <div>
                    <h4 className="text-white font-black text-lg">金融级安全</h4>
                    <p className="text-sm text-zinc-500 mt-1">三级等保与全链路加密</p>
                  </div>
                </div>
                <div className="flex items-center gap-6 group/item">
                  <div className="w-14 h-14 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-zinc-500 group-hover/item:text-[#2d8cf0] transition-colors">
                    <Activity className="w-7 h-7" />
                  </div>
                  <div>
                    <h4 className="text-white font-black text-lg">高可用架构</h4>
                    <p className="text-sm text-zinc-500 mt-1">99.99% 服务可用性保证</p>
                  </div>
                </div>
                <div className="pt-10 border-t border-white/5">
                  <div className="flex items-center gap-3 text-zinc-500 text-[10px] font-black uppercase tracking-[0.3em]">
                    <Zap className="w-4 h-4 text-[#2d8cf0]" />
                    <span>Powered by MLink Cloud</span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
