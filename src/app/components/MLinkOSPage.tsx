import { 
  ArrowRight, 
  Cpu, 
  Layers, 
  Code, 
  HardDrive, 
  Smartphone, 
  Video, 
  Wifi, 
  Globe, 
  ShieldCheck, 
  Terminal, 
  Database, 
  Cloud,
  Zap,
  Maximize,
  BarChart3,
  Users,
  Settings,
  Activity,
  Box,
  FileText,
  Search,
  MessageSquare,
  ChevronRight,
  Download,
  BookOpen
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { useState } from 'react';

import imgCloudIntegrationHero from "figma:asset/f55f113bdcf1b014fe84fc2068764bcfdbf27dcf.png";
import imgDeviceIntegrationHero from "figma:asset/3d32dbf053243759d0efc09c7f12d2a197f62a38.png";

export function MLinkOSPage() {
  const [activeIntegration, setActiveIntegration] = useState<'device' | 'cloud'>('device');

  // --- Original MLink OS Data ---
  const osStats = [
    { label: '支持内核', value: '3+', sub: 'Linux / Android / RTOS' },
    { label: '芯片适配', value: '100+', sub: '主流方案全覆盖' },
    { label: '接入设备', value: '10M+', sub: '大规模量产验证' },
    { label: '集成周期', value: '2w', sub: '极速上手部署' },
  ];

  const osAdvantages = [
    { icon: <Wifi className="w-6 h-6" />, title: '快速上云', desc: '支持 JT/T808、MQTT 等行业标准协议，极速建立云端互连。' },
    { icon: <Layers className="w-6 h-6" />, title: '分层可裁剪', desc: '基于模块化设计，完美适配不同规格的硬件资源配置。' },
    { icon: <Cpu className="w-6 h-6" />, title: '多平台适配', desc: '深度适配主流芯片，提供业界领先的系统稳定性。' },
    { icon: <Code className="w-6 h-6" />, title: '低代码集成', desc: '丰富的 API 与 SDK 接口，大幅缩短产品研发周期。' },
    { icon: <Smartphone className="w-6 h-6" />, title: '跨端闭环', desc: '提供 APP、小程序及多端 SDK，实现全场景业务闭环。' },
    { icon: <ShieldCheck className="w-6 h-6" />, title: '安全可靠', desc: '多重加密与权限校验，保障物联网通信的安全底座。' },
  ];

  const osFeatures = [
    { 
      title: 'MRTS 流媒体引擎', 
      icon: <Video className="w-5 h-5" />, 
      desc: '提供毫秒级延迟的视频直播、双向语音对讲及云端回放能力。',
      tags: ['TCP/UDP', 'RTMP', 'GB28181']
    },
    { 
      title: '全球化 OTA 服务', 
      icon: <Download className="w-5 h-5" />, 
      desc: '支持断点续传、差分升级及灰度发布，确保设备持续进化。',
      tags: ['灰度发布', '全量升级', '安全校验']
    },
    { 
      title: '智能存储矩阵', 
      icon: <Database className="w-5 h-5" />, 
      desc: '灵活的事件云存储、全量云存储方案，保障数据永不丢失。',
      tags: ['事件录像', '云端检索', '自动覆盖']
    },
    { 
      title: '全维度状态监控', 
      icon: <Activity className="w-5 h-5" />, 
      desc: '实时监测 CPU、内存、网络状态，多级异常告警即时触达。',
      tags: ['指标可视化', '远程诊断', '异常报警']
    },
  ];

  // --- New Integration Data ---
  const deviceIntegration = {
    title: "部标设备接入",
    tagline: "Standard Device Protocol Integration",
    desc: "支持部标 JT/T808、JT/T1078、809 等标准协议的高效接入。为各类智能硬件提供稳定的上云通道，实现设备全生命周期管理。",
    heroImg: imgDeviceIntegrationHero,
    advantages: [
      { icon: <ShieldCheck className="w-5 h-5" />, title: "功能全量", desc: "完整覆盖部标协议所有核心功能与扩展。" },
      { icon: <Maximize className="w-5 h-5" />, title: "扩展方便", desc: "支持自定义协议私有扩展与动态下发。" },
      { icon: <Zap className="w-5 h-5" />, title: "极高并发", desc: "分布式架构支持千万级设备同时在线接入。" },
      { icon: <Database className="w-5 h-5" />, title: "海量数据处理", desc: "毫秒级处理海量位置与报警轨迹数据。" },
      { icon: <Activity className="w-5 h-5" />, title: "服务高可用", desc: "多活集群架构，保障服务全年 99.9% 稳定。" },
      { icon: <Code className="w-5 h-5" />, title: "SDK 极速接入", desc: "提供全语言 SDK，助力业务逻辑快速开发。" },
    ],
    features: [
      { icon: <Wifi className="w-5 h-5" />, title: "标准部标协议接入", desc: "支持 JT/T808、809、905 等主流行业标准。" },
      { icon: <Video className="w-5 h-5" />, title: "部标音视频协议接入", desc: "深度集成 JT/T1078 流媒体协议，秒级开图。" },
      { icon: <Box className="w-5 h-5" />, title: "设备全量管理", desc: "从入库、激活到远程控制的全流程管理后台。" },
      { icon: <Zap className="w-5 h-5" />, title: "设备远程 OTA", desc: "支持差分升级与全量发布，确保固件实时演进。" },
    ]
  };

  const cloudIntegration = {
    title: "云云接入",
    tagline: "Cloud-to-Cloud Platform Interconnect",
    desc: "通过平台与平台之间的对接，实现业务能力的深度打通。无需设备直连，通过 API 快速获取并集成第三方平台能力。",
    heroImg: imgCloudIntegrationHero,
    advantages: [
      { icon: <Maximize className="w-5 h-5" />, title: "平台功能扩展", desc: "基于麦谷云丰富的功能组件，快速扩展既有平台能力。" },
      { icon: <Zap className="w-5 h-5" />, title: "平台性能扩展", desc: "依托麦谷分布式存储与计算，分担既有平台压力。" },
      { icon: <Users className="w-5 h-5" />, title: "用户运营能力扩展", desc: "引入成熟的用户运营工具链，提升用户粘性与价值。" },
      { icon: <BarChart3 className="w-5 h-5" />, title: "数据的快速变现", desc: "整合多维数据源，挖掘数据背后的深层商业价值。" },
    ],
    features: [
      { icon: <Code className="w-5 h-5" />, title: "OpenAPI 对接", desc: "提供标准化 RESTful API，快速完成平台集成。" },
      { icon: <ShieldCheck className="w-5 h-5" />, title: "部标 JT/T809 协议支持", desc: "支持跨级、跨平台政府监管协议数据转发。" },
      { icon: <Video className="w-5 h-5" />, title: "音视频交互能力", desc: "打通云端实时音视频链路，实现跨平台通话。" },
      { icon: <Globe className="w-5 h-5" />, title: "位置服务深度打通", desc: "集成 LBS 纠偏、围栏及轨迹回放等核心服务。" },
    ]
  };

  const currentIntegration = activeIntegration === 'device' ? deviceIntegration : cloudIntegration;

  return (
    <div className="bg-white text-zinc-900 selection:bg-[#2d8cf0]/10 selection:text-[#2d8cf0]">
      
      {/* 1. Original MLink OS Hero Section */}
      <section className="relative pt-24 pb-20 overflow-hidden bg-white">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full max-w-7xl opacity-[0.03] pointer-events-none">
          <div className="absolute inset-0" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, #2d8cf0 1px, transparent 0)', backgroundSize: '40px 40px' }}></div>
        </div>
        
        <div className="mx-auto max-w-7xl px-6 relative z-10">
          <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
            <motion.div 
              className="flex-1 text-center lg:text-left"
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#2d8cf0]/10 border border-[#2d8cf0]/20 text-[#2d8cf0] text-[10px] font-bold uppercase tracking-widest mb-8">
                <Terminal className="w-3 h-3" /> Next-Gen IoT OS
              </div>
              <h1 className="text-5xl lg:text-7xl font-black tracking-tight text-zinc-900 mb-8 leading-[1.1]">
                MLink OS <br />
                <span className="text-[#2d8cf0]">智连万物</span> 的核心底座
              </h1>
              <p className="text-xl text-zinc-500 mb-10 leading-relaxed max-w-2xl mx-auto lg:mx-0">
                专为车载联网与 IPC 硬件定制。基于跨平台架构，为开发者提供从底层内核到云端生态的一站式操作系统解决方案。
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
                <button className="w-full sm:w-auto px-8 py-4 bg-[#2d8cf0] text-white font-bold rounded-xl shadow-xl shadow-[#2d8cf0]/20 hover:bg-[#2074d6] hover:-translate-y-1 transition-all flex items-center justify-center gap-2">
                  立即申请接入 <ArrowRight className="w-5 h-5" />
                </button>
                <button className="w-full sm:w-auto px-8 py-4 bg-white text-zinc-600 font-bold rounded-xl border border-zinc-200 hover:bg-zinc-50 transition-all flex items-center justify-center gap-2">
                  查看技术文档
                </button>
              </div>
            </motion.div>

            <motion.div 
              className="flex-1 w-full max-w-xl"
              initial={{ opacity: 0, scale: 0.9, y: 30 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.2 }}
            >
              <div className="relative p-1 rounded-[2.5rem] bg-zinc-900 shadow-2xl overflow-hidden group">
                <div className="bg-zinc-800 rounded-[2.3rem] overflow-hidden aspect-[4/3] relative">
                  <div className="absolute inset-0 bg-zinc-950 overflow-hidden">
                    <div className="absolute inset-0 opacity-[0.08]" style={{ backgroundImage: 'linear-gradient(#2d8cf0 0.5px, transparent 0.5px), linear-gradient(90deg, #2d8cf0 0.5px, transparent 0.5px)', backgroundSize: '32px 32px' }}></div>
                  </div>
                  <div className="absolute top-4 left-6 flex items-center gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-red-500 opacity-50"></div>
                    <div className="w-1.5 h-1.5 rounded-full bg-amber-500 opacity-50"></div>
                    <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 opacity-50"></div>
                  </div>
                  <div className="flex flex-col items-center justify-center h-full px-12 text-center text-white space-y-6">
                    <div className="h-14 w-14 rounded-2xl bg-[#2d8cf0] flex items-center justify-center shadow-lg shadow-[#2d8cf0]/30 animate-pulse">
                      <Activity className="w-7 h-7" />
                    </div>
                    <div>
                      <div className="text-lg font-bold">System Online</div>
                      <div className="text-[10px] opacity-40 font-mono mt-1">v4.2.0-LTS STABLE</div>
                    </div>
                    <div className="w-full h-1 bg-zinc-700 rounded-full overflow-hidden">
                      <motion.div 
                        className="h-full bg-[#2d8cf0]" 
                        initial={{ width: "0%" }}
                        animate={{ width: "75%" }}
                        transition={{ duration: 2, repeat: Infinity, repeatType: "reverse" }}
                      />
                    </div>
                    <div className="grid grid-cols-2 gap-4 w-full">
                      <div className="p-3 bg-white/5 rounded-xl border border-white/10 text-[10px] font-mono opacity-60">
                        CPU: 12%
                      </div>
                      <div className="p-3 bg-white/5 rounded-xl border border-white/10 text-[10px] font-mono opacity-60">
                        RAM: 245MB
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Stats Bar */}
          <motion.div 
            className="grid grid-cols-2 lg:grid-cols-4 gap-8 mt-20 py-10 border-t border-zinc-100"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
          >
            {osStats.map((s, i) => (
              <div key={i} className="text-center lg:text-left">
                <div className="text-3xl font-black text-zinc-900 mb-1">{s.value}</div>
                <div className="text-[10px] font-bold text-[#2d8cf0] uppercase tracking-widest mb-1">{s.label}</div>
                <div className="text-[10px] text-zinc-400 font-medium">{s.sub}</div>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* 2. Original Product Advantages (Bento Grid) */}
      <section className="py-24 bg-[#fafafa] border-y border-zinc-100">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mb-16 text-center">
            <h2 className="text-3xl font-black text-zinc-900 mb-4 tracking-tight">更进一步的产品优势</h2>
            <p className="text-zinc-500">通过标准化的技术架构，我们重新定义了硬件的智能化边界。</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {osAdvantages.map((adv, i) => (
              <motion.div 
                key={i} 
                className="group p-10 rounded-[2.5rem] bg-white border border-zinc-200/60 hover:border-[#2d8cf0]/30 hover:shadow-2xl hover:shadow-[#2d8cf0]/5 transition-all duration-500"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
              >
                <div className="mb-8 flex h-14 w-14 items-center justify-center rounded-2xl bg-zinc-50 text-[#2d8cf0] group-hover:bg-[#2d8cf0] group-hover:text-white transition-all duration-500">
                  {adv.icon}
                </div>
                <h3 className="text-xl font-bold text-zinc-900 mb-4">{adv.title}</h3>
                <p className="text-sm text-zinc-500 leading-relaxed">{adv.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. New Integration Solutions Section (Toggle-able) */}
      <section className="py-24 bg-white overflow-hidden">
        <div className="mx-auto max-w-7xl px-6">
          <div className="text-center mb-16">
            <span className="text-[#2d8cf0] text-[10px] font-bold uppercase tracking-[0.3em] mb-4 block">Deployment Solutions</span>
            <h2 className="text-4xl font-black text-zinc-900 mb-12 tracking-tight">灵活的集成接入方案</h2>
            
            {/* Toggle Switch */}
            <div className="inline-flex p-1.5 bg-zinc-100 rounded-2xl mb-16 border border-zinc-200">
              <button 
                onClick={() => setActiveIntegration('device')}
                className={`px-8 py-3 rounded-xl text-sm font-bold transition-all ${activeIntegration === 'device' ? 'bg-white text-[#2d8cf0] shadow-sm' : 'text-zinc-400 hover:text-zinc-600'}`}
              >
                部标设备接入
              </button>
              <button 
                onClick={() => setActiveIntegration('cloud')}
                className={`px-8 py-3 rounded-xl text-sm font-bold transition-all ${activeIntegration === 'cloud' ? 'bg-white text-[#2d8cf0] shadow-sm' : 'text-zinc-400 hover:text-zinc-600'}`}
              >
                云云接入
              </button>
            </div>
          </div>

          <AnimatePresence mode="wait">
            <motion.div 
              key={activeIntegration}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4 }}
              className="space-y-24"
            >
              {/* Solution Hero */}
              <div className={`flex flex-col lg:flex-row items-center gap-16 ${activeIntegration === 'cloud' ? 'lg:flex-row-reverse' : ''}`}>
                <div className="flex-1 space-y-8">
                  <span className="inline-block px-3 py-1 rounded-full bg-[#2d8cf0]/5 text-[#2d8cf0] text-[10px] font-bold uppercase tracking-widest">
                    {currentIntegration.tagline}
                  </span>
                  <h3 className="text-3xl lg:text-5xl font-black text-zinc-900 leading-tight">
                    {currentIntegration.title}
                  </h3>
                  <p className="text-lg text-zinc-500 leading-relaxed">
                    {currentIntegration.desc}
                  </p>
                  
                  {/* Advantages Sub-grid */}
                  <div className="grid sm:grid-cols-2 gap-6 pt-4">
                    {currentIntegration.advantages.slice(0, 4).map((adv, idx) => (
                      <div key={idx} className="flex gap-4 items-start">
                        <div className="mt-1 text-[#2d8cf0]">{adv.icon}</div>
                        <div>
                          <p className="font-bold text-zinc-900 text-sm">{adv.title}</p>
                          <p className="text-xs text-zinc-400 mt-1">{adv.desc}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="flex-1 w-full max-w-xl">
                  <div className="relative group p-1 bg-zinc-50 border border-zinc-100 rounded-[2.5rem] overflow-hidden shadow-sm">
                    <div className="relative aspect-[4/3] rounded-[2.3rem] overflow-hidden bg-white border border-zinc-100">
                      <ImageWithFallback src={currentIntegration.heroImg} alt={currentIntegration.title} className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105" />
                    </div>
                  </div>
                </div>
              </div>

              {/* Functional Mini-grid */}
              <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
                {currentIntegration.features.map((feat, idx) => (
                  <div key={idx} className="p-6 rounded-2xl bg-[#fafafa] border border-zinc-200/50 hover:bg-white hover:border-[#2d8cf0]/20 transition-all flex items-center gap-4">
                    <div className="w-10 h-10 rounded-lg bg-white shadow-sm flex items-center justify-center text-[#2d8cf0]">
                      {feat.icon}
                    </div>
                    <div>
                      <h4 className="font-bold text-xs text-zinc-900">{feat.title}</h4>
                      <p className="text-[10px] text-zinc-400 mt-0.5">{feat.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </section>

      {/* 4. Original Tech Stack (Layered Visualization) */}
      <section className="py-24 bg-zinc-900 text-white overflow-hidden relative">
        <div className="absolute inset-0 opacity-10 pointer-events-none">
          <ImageWithFallback src="https://images.unsplash.com/photo-1772258986603-7256a0b0efe8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080" alt="background" className="w-full h-full object-cover" />
        </div>
        
        <div className="mx-auto max-w-7xl px-6 relative z-10">
          <div className="flex flex-col lg:flex-row gap-16 items-center">
            <div className="flex-1">
              <h2 className="text-4xl font-bold mb-12">纵深防御的技术架构</h2>
              <div className="space-y-6">
                {[
                  { title: '云端应用层', items: ['云端管理平台', '数据可视化看板', '开发者开放平台', '行业应用 SDK', '计费与运营中心'], color: 'bg-[#2d8cf0]' },
                  { title: 'MLink 框架接口层', items: ['MRTS 音视频 SDK', '远程指令控制', '云端存储接口', '消息推送总线', '设备影子 API'], color: 'bg-[#2d8cf0]/80' },
                  { title: '核心服务层', items: ['全球 OTA 升级', '设备接入鉴权', '实时监控告警', '安全防护引擎', '自动化诊断工具'], color: 'bg-[#2d8cf0]/60' },
                  { title: '系统内核层', items: ['Android / Linux / RTOS', '硬件抽象层(HAL)', '安全启动校验', '驱动适配框架', '极致内存优化'], color: 'bg-[#2d8cf0]/40' },
                ].map((layer, i) => (
                  <motion.div 
                    key={i} 
                    className="p-6 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm group hover:border-[#2d8cf0]/50 transition-all"
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                  >
                    <div className="flex items-center justify-between mb-4">
                      <span className="font-bold text-[10px] tracking-widest uppercase opacity-40">Level 0{4 - i}</span>
                      <div className={`h-1.5 w-10 rounded-full ${layer.color}`}></div>
                    </div>
                    <h4 className="text-xl font-bold mb-3">{layer.title}</h4>
                    <div className="flex flex-wrap gap-2">
                      {layer.items.map(item => (
                        <span key={item} className="px-3 py-1 rounded-full bg-white/5 text-[10px] border border-white/10 text-white/60">{item}</span>
                      ))}
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
            
            <div className="flex-1 w-full lg:flex hidden justify-center">
              <div className="relative">
                <div className="w-72 h-[450px] border-[8px] border-white/5 rounded-[3rem] relative">
                  <motion.div 
                    className="absolute inset-x-8 top-10 h-28 bg-[#2d8cf0] rounded-2xl shadow-2xl shadow-[#2d8cf0]/40"
                    animate={{ y: [0, -10, 0] }}
                    transition={{ duration: 4, repeat: Infinity }}
                  ></motion.div>
                  <motion.div 
                    className="absolute inset-x-8 top-44 h-28 bg-[#2d8cf0]/70 rounded-2xl"
                    animate={{ y: [0, -5, 0] }}
                    transition={{ duration: 4, repeat: Infinity, delay: 0.5 }}
                  ></motion.div>
                  <motion.div 
                    className="absolute inset-x-8 top-[312px] h-28 bg-[#2d8cf0]/40 rounded-2xl"
                    animate={{ y: [0, -3, 0] }}
                    transition={{ duration: 4, repeat: Infinity, delay: 1 }}
                  ></motion.div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. Original Core Features Grid */}
      <section className="py-24 bg-white border-b border-zinc-100">
        <div className="mx-auto max-w-7xl px-6 text-center">
          <h2 className="text-3xl font-black text-zinc-900 mb-20 tracking-tight">全场景原子化能力</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {osFeatures.map((f, i) => (
              <motion.div 
                key={i} 
                className="flex items-start gap-8 p-10 rounded-[2.5rem] bg-[#fafafa] border border-zinc-200/50 group hover:bg-white hover:shadow-xl hover:border-[#2d8cf0]/20 transition-all text-left"
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
              >
                <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-white border border-zinc-200 flex items-center justify-center text-[#2d8cf0] group-hover:bg-[#2d8cf0] group-hover:text-white transition-all duration-500">
                  {f.icon}
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-3">{f.title}</h3>
                  <p className="text-zinc-500 text-sm leading-relaxed mb-6">{f.desc}</p>
                  <div className="flex flex-wrap gap-2">
                    {f.tags.map(tag => (
                      <span key={tag} className="text-[10px] font-bold tracking-wider uppercase px-2 py-1 rounded bg-zinc-200/50 text-zinc-400">{tag}</span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. Improved Final CTA */}
      <section className="py-24 bg-white">
        <div className="mx-auto max-w-7xl px-6">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="group relative border border-zinc-200 bg-zinc-900 rounded-[3rem] overflow-hidden flex flex-col lg:flex-row items-stretch shadow-2xl"
          >
            <div className="flex-1 p-8 lg:p-20 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#2d8cf0]/10 blur-[120px] -translate-y-1/2 translate-x-1/2" />
              <div className="relative z-10 space-y-8">
                <div className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#2d8cf0] animate-pulse" />
                  <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-[#2d8cf0]">MLink OS Ecosystem</span>
                </div>
                <h2 className="text-3xl lg:text-5xl font-black text-white leading-tight">
                  开启您的 <br />
                  <span className="text-[#2d8cf0]">智连万物之旅</span>
                </h2>
                <p className="text-zinc-400 text-lg leading-relaxed max-w-xl">
                  无论您是直连硬件设备还是寻求云端能力共享，麦谷智云都能为您提供最专业的技术底座与服务保障。
                </p>
                <div className="flex flex-wrap gap-6 pt-4">
                  <button className="px-10 py-5 bg-[#2d8cf0] text-white font-black rounded-2xl flex items-center gap-3 hover:bg-[#1a76d2] transition-all active:scale-95">
                    立即注册 <Zap className="w-5 h-5" />
                  </button>
                  <button className="px-10 py-5 bg-white/5 border border-white/10 text-white font-black rounded-2xl flex items-center gap-3 hover:bg-white/10 transition-all active:scale-95">
                    技术咨询 <MessageSquare className="w-5 h-5" />
                  </button>
                </div>
              </div>
            </div>
            <div className="lg:w-[400px] bg-zinc-800/50 p-8 lg:p-16 flex flex-col justify-center border-l border-white/5">
              <div className="space-y-10">
                <div className="flex items-center gap-4 group/item">
                  <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-zinc-500 group-hover/item:text-[#2d8cf0] transition-colors">
                    <BookOpen className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-white font-bold text-sm">开发文档</h4>
                    <p className="text-xs text-zinc-500 mt-1">详细的 API 与 SDK 说明</p>
                  </div>
                </div>
                <div className="flex items-center gap-4 group/item">
                  <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-zinc-500 group-hover/item:text-[#2d8cf0] transition-colors">
                    <Download className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-white font-bold text-sm">资源下载</h4>
                    <p className="text-xs text-zinc-500 mt-1">最新版系统镜像与工具</p>
                  </div>
                </div>
                <div className="pt-8 border-t border-white/5">
                  <div className="flex items-center gap-3 text-zinc-500 text-[10px] font-bold uppercase tracking-widest">
                    <ShieldCheck className="w-4 h-4 text-emerald-500" />
                    <span>Multi-Layer Security Certified</span>
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
