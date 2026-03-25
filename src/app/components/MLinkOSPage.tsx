import { ArrowRight, ChevronRight, Cpu, LayoutGrid, Layers, Code, HardDrive, Smartphone, Video, Wifi, Globe, Send, ShieldCheck, Box, Bell, Download, BookOpen, ExternalLink, Activity, Terminal, Database, Cloud } from 'lucide-react';
import { motion } from 'motion/react';
import { ImageWithFallback } from './figma/ImageWithFallback';

export function MLinkOSPage() {
  const advantages = [
    { icon: <Wifi className="w-6 h-6" />, title: '快速上云', desc: '支持 JT/T808、MQTT 等行业标准协议，极速建立云端互连。' },
    { icon: <Layers className="w-6 h-6" />, title: '分层可裁剪', desc: '基于模块化设计，完美适配不同规格的硬件资源配置。' },
    { icon: <Cpu className="w-6 h-6" />, title: '多平台适配', desc: '深度适配主流芯片，提供业界领先的系统稳定性。' },
    { icon: <Code className="w-6 h-6" />, title: '低代码集成', desc: '丰富的 API 与 SDK 接口，大幅缩短产品研发周期。' },
    { icon: <Smartphone className="w-6 h-6" />, title: '跨端闭环', desc: '提供 APP、小程序及多端 SDK，实现全场景业务闭环。' },
    { icon: <ShieldCheck className="w-6 h-6" />, title: '安全可靠', desc: '多重加密与权限校验，保障物联网通信的安全底座。' },
  ];

  const subNav = [
    { id: 'hero', label: '产品概览' },
    { id: 'stack', label: '技术架构' },
    { id: 'scenarios', label: '行业应用' },
    { id: 'features', label: '核心功能' },
  ];

  const stats = [
    { label: '支持内核', value: '3+', sub: 'Linux / Android / RTOS' },
    { label: '芯片适配', value: '100+', sub: '主流方案全覆盖' },
    { label: '接入设备', value: '10M+', sub: '大规模量产验证' },
    { label: '集成周期', value: '2w', sub: '极速上手部署' },
  ];

  const features = [
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

  return (
    <div className="bg-[#fafafa] text-zinc-900 selection:bg-[#2d8cf0]/10 selection:text-[#2d8cf0]">
      {/* Hero Section - Futuristic Minimalist */}
      <section id="hero" className="relative pt-20 pb-24 overflow-hidden bg-white border-b border-zinc-100">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full max-w-7xl opacity-[0.05] pointer-events-none">
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
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#2d8cf0]/10 border border-[#2d8cf0]/20 text-[#2d8cf0] text-xs font-bold uppercase tracking-widest mb-8">
                <Terminal className="w-3 h-3" /> Next-Gen IoT OS
              </div>
              <h1 className="text-5xl lg:text-7xl font-black tracking-tight text-zinc-900 mb-8 leading-[1.1]">
                MLink OS <br />
                <span className="text-[#2d8cf0]">智连万物</span> 的核心底座
              </h1>
              <p className="text-xl text-zinc-500 mb-12 leading-relaxed max-w-2xl mx-auto lg:mx-0">
                专为车载联网与 IPC 硬件定制。基于跨平台架构，为开发者提供从底层内核到云端生态的一站式操作系统解决方案。
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
                <button className="w-full sm:w-auto px-8 py-4 bg-[#2d8cf0] text-white font-bold rounded-xl shadow-xl shadow-[#2d8cf0]/20 hover:bg-[#2074d6] hover:-translate-y-1 transition-all flex items-center justify-center gap-2">
                  开始使用 <ArrowRight className="w-5 h-5" />
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
              <div className="relative p-2 rounded-[2.5rem] bg-zinc-900 shadow-2xl overflow-hidden group">
                {/* Simulated UI Content */}
                <div className="bg-zinc-800 rounded-[2rem] overflow-hidden aspect-[4/3] relative">
                  <div className="absolute inset-0 bg-zinc-950 overflow-hidden">
      <div className="absolute inset-0 opacity-[0.08]" style={{ backgroundImage: 'linear-gradient(#2d8cf0 0.5px, transparent 0.5px), linear-gradient(90deg, #2d8cf0 0.5px, transparent 0.5px)', backgroundSize: '32px 32px' }}></div>
      <div className="absolute inset-0 bg-gradient-to-tr from-zinc-950 via-transparent to-[#2d8cf0]/10"></div>
    </div>
                  <div className="absolute top-4 left-6 flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-red-500"></div>
                    <div className="w-2 h-2 rounded-full bg-amber-500"></div>
                    <div className="w-2 h-2 rounded-full bg-emerald-500"></div>
                  </div>
                  <div className="flex flex-col items-center justify-center h-full px-12 text-center text-white space-y-6">
                    <div className="h-16 w-16 rounded-2xl bg-[#2d8cf0] flex items-center justify-center shadow-lg shadow-[#2d8cf0]/30 animate-pulse">
                      <Activity className="w-8 h-8" />
                    </div>
                    <div>
                      <div className="text-lg font-bold">System Online</div>
                      <div className="text-xs opacity-50 font-mono mt-1">系统版本: v4.2.0-LTS 稳定版</div>
                    </div>
                    <div className="w-full h-1.5 bg-zinc-700 rounded-full overflow-hidden">
                      <motion.div 
                        className="h-full bg-[#2d8cf0]" 
                        initial={{ width: "0%" }}
                        animate={{ width: "75%" }}
                        transition={{ duration: 2, repeat: Infinity, repeatType: "reverse" }}
                      />
                    </div>
                    <div className="grid grid-cols-2 gap-4 w-full">
                      <div className="p-3 bg-white/5 rounded-xl border border-white/10 text-xs font-mono">
                        CPU: 12%
                      </div>
                      <div className="p-3 bg-white/5 rounded-xl border border-white/10 text-xs font-mono">
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
            className="grid grid-cols-2 lg:grid-cols-4 gap-8 mt-24 py-12 border-t border-zinc-100"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
          >
            {stats.map((s, i) => (
              <div key={i} className="text-center lg:text-left">
                <div className="text-3xl font-black text-zinc-900 mb-1">{s.value}</div>
                <div className="text-sm font-bold text-[#2d8cf0] uppercase tracking-wide mb-1">{s.label}</div>
                <div className="text-xs text-zinc-400">{s.sub}</div>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Product Advantages - Bento Grid */}
      <section className="py-24 bg-white border-b border-zinc-100">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mb-20 text-center lg:text-left flex flex-col lg:flex-row items-end justify-between gap-8">
            <div className="max-w-2xl">
              <h2 className="text-4xl font-bold tracking-tight text-zinc-900 mb-6">更进一步的产品优势</h2>
              <p className="text-lg text-zinc-500">通过标准化的技术架构，我们重新定义了硬件的智能化边界。</p>
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {advantages.map((adv, i) => (
              <motion.div 
                key={i} 
                className="group p-10 rounded-[2rem] bg-[#fafafa] border border-zinc-100 hover:bg-white hover:border-[#2d8cf0]/30 hover:shadow-2xl hover:shadow-[#2d8cf0]/10 transition-all duration-500"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
              >
                <div className="mb-8 flex h-16 w-16 items-center justify-center rounded-2xl bg-white text-[#2d8cf0] shadow-sm group-hover:bg-[#2d8cf0] group-hover:text-white transition-all duration-500">
                  {adv.icon}
                </div>
                <h3 className="text-2xl font-bold text-zinc-900 mb-4">{adv.title}</h3>
                <p className="text-zinc-500 leading-relaxed">{adv.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Tech Stack - Layered Visualization */}
      <section id="stack" className="py-24 bg-zinc-900 text-white overflow-hidden relative">
        <div className="absolute inset-0 opacity-10 pointer-events-none">
          <ImageWithFallback src="https://images.unsplash.com/photo-1772258986603-7256a0b0efe8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080" alt="background" className="w-full h-full object-cover" />
        </div>
        
        <div className="mx-auto max-w-7xl px-6 relative z-10">
          <div className="flex flex-col lg:flex-row gap-16 items-center">
            <div className="flex-1">
              <h2 className="text-4xl font-bold mb-8">纵深防御的技术架构</h2>
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
                      <span className="font-bold text-sm tracking-widest uppercase opacity-60">Level 0{4 - i}</span>
                      <div className={`h-2 w-12 rounded-full ${layer.color}`}></div>
                    </div>
                    <h4 className="text-xl font-bold mb-3">{layer.title}</h4>
                    <div className="flex flex-wrap gap-2">
                      {layer.items.map(item => (
                        <span key={item} className="px-3 py-1 rounded-full bg-white/5 text-xs border border-white/10 text-white/80">{item}</span>
                      ))}
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
            
            <div className="flex-1 w-full lg:flex hidden justify-center">
              <div className="relative">
                {/* Visual Stack Decoration */}
                <div className="w-80 h-[500px] border-[10px] border-white/5 rounded-[3rem] relative">
                  <motion.div 
                    className="absolute inset-x-8 top-10 h-32 bg-[#2d8cf0] rounded-2xl shadow-2xl shadow-[#2d8cf0]/50"
                    animate={{ y: [0, -10, 0] }}
                    transition={{ duration: 4, repeat: Infinity }}
                  ></motion.div>
                  <motion.div 
                    className="absolute inset-x-8 top-48 h-32 bg-[#2d8cf0]/70 rounded-2xl"
                    animate={{ y: [0, -5, 0] }}
                    transition={{ duration: 4, repeat: Infinity, delay: 0.5 }}
                  ></motion.div>
                  <motion.div 
                    className="absolute inset-x-8 top-[344px] h-32 bg-[#2d8cf0]/40 rounded-2xl"
                    animate={{ y: [0, -3, 0] }}
                    transition={{ duration: 4, repeat: Infinity, delay: 1 }}
                  ></motion.div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Features - Icon Grid */}
      <section id="features" className="py-24 bg-white">
        <div className="mx-auto max-w-7xl px-6 text-center">
          <h2 className="text-4xl font-bold mb-20">全场景原子化能力</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {features.map((f, i) => (
              <motion.div 
                key={i} 
                className="flex items-start gap-8 p-10 rounded-3xl bg-[#fafafa] border border-zinc-100 group hover:bg-white hover:shadow-xl hover:border-[#2d8cf0]/20 transition-all text-left"
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
              >
                <div className="flex-shrink-0 w-14 h-14 rounded-2xl bg-white border border-zinc-200 flex items-center justify-center text-[#2d8cf0] group-hover:bg-[#2d8cf0] group-hover:text-white transition-all duration-500">
                  {f.icon}
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-3">{f.title}</h3>
                  <p className="text-zinc-500 text-sm leading-relaxed mb-6">{f.desc}</p>
                  <div className="flex flex-wrap gap-2">
                    {f.tags.map(tag => (
                      <span key={tag} className="text-[10px] font-bold tracking-wider uppercase px-2 py-1 rounded bg-zinc-200/50 text-zinc-500">{tag}</span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="py-24 bg-[#2d8cf0]">
        <div className="mx-auto max-w-5xl px-6 text-center text-white selection:bg-white selection:text-[#2d8cf0]">
          <h2 className="text-4xl md:text-5xl font-black mb-8 leading-tight">准备好开启智能互连了吗？</h2>
          <p className="text-xl opacity-80 mb-12 max-w-2xl mx-auto">加入麦谷智云，与全球千万级设备共同成长，构建更智能的物联网未来。</p>
          <div className="flex flex-wrap justify-center gap-6">
            <button className="px-10 py-5 bg-white text-[#2d8cf0] font-black rounded-2xl shadow-2xl hover:bg-zinc-100 hover:-translate-y-1 transition-all">
              立即注册账号
            </button>
            <button className="px-10 py-5 bg-[#2d8cf0] text-white border-2 border-white/20 font-black rounded-2xl hover:bg-white/10 transition-all flex items-center gap-2">
              <Download className="w-5 h-5" /> 下载开发者 SDK
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
