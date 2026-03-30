import { 
  ArrowRight, 
  Video, 
  Wifi, 
  Clock, 
  Globe, 
  Rocket, 
  Code, 
  PlayCircle, 
  History, 
  Mic2, 
  Camera, 
  Layers, 
  Cloud, 
  FileText, 
  BookOpen, 
  ChevronRight,
  Shield,
  Activity
} from 'lucide-react';
import { motion } from 'motion/react';
import { ImageWithFallback } from './figma/ImageWithFallback';

export function MRTSPage() {
  const advantages = [
    { 
      icon: <Wifi className="w-6 h-6" />, 
      title: '支持多种传输协议', 
      desc: 'TS、HLS、RTMP、HTTP-FLV、RTC、RTSP、WebRTC 等。',
      tags: ['RTMP', 'WebRTC', 'RTSP']
    },
    { 
      icon: <Layers className="w-6 h-6" />, 
      title: '支持多种音视频格式', 
      desc: 'PCM、G711A、G711U、MP3、AAC、H264、H265、JPEG、MJPEG 等。',
      tags: ['H.265', 'AAC', 'YUV420']
    },
    { 
      icon: <Clock className="w-6 h-6" />, 
      title: '低延时和稳定性', 
      desc: '端到端平均延迟小于 2s，在高丢包率环境下依然保持流畅。',
      tags: ['< 2s 延迟', '抗丢包']
    },
    { 
      icon: <Globe className="w-6 h-6" />, 
      title: '全球部署就近接入', 
      desc: '分布式节点集群，通过智能调度确保全球用户极速访问。',
      tags: ['边缘计算', '智能调度']
    },
    { 
      icon: <Rocket className="w-6 h-6" />, 
      title: '一键快速独立部署', 
      desc: '支持云原生 Docker 部署与公私有云环境，分钟级快速上线。',
      tags: ['Docker', '私有化部署']
    },
    { 
      icon: <Code className="w-6 h-6" />, 
      title: '丰富的 SDK', 
      desc: '全平台覆盖，提供 Android、iOS、Web、微信小程序原生 SDK。',
      tags: ['全平台', 'SDK']
    },
  ];

  const scenarios = [
    { 
      image: "https://images.unsplash.com/photo-1762700315913-1a1e43da23b8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080", 
      title: '车联网与品牌商', 
      desc: '提供百万级并发的车机推流与远程预览能力，赋能智慧出行。' 
    },
    { 
      image: "https://images.unsplash.com/photo-1461175128502-8b13d90ee1ec?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080", 
      title: '传统 IP 摄像机', 
      desc: '旧设备一键升级流媒体云服务，实现跨网预览与录像回放。' 
    },
    { 
      image: "https://images.unsplash.com/photo-1737107917757-ba84495569a2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080", 
      title: '移动推流应用', 
      desc: '适配手机摄像头推流，支持直播带货、现场查勘等多种业务场景。' 
    },
  ];

  const functions = [
    { icon: <PlayCircle className="w-5 h-5" />, title: '视频实时直播', desc: '秒开低延迟，支持多路并发同时在线预览。' },
    { icon: <History className="w-5 h-5" />, title: '历史录像回放', desc: '云端与设备端双向录像回放，支持断点续传。' },
    { icon: <Mic2 className="w-5 h-5" />, title: '双向语音对讲', desc: '支持回声消除与环境噪声抑制，高清语音对讲体验。' },
    { icon: <Camera className="w-5 h-5" />, title: '图片与视频抓拍', desc: '事件触发实时抓拍上传，云端随时查阅历史快照。' },
    { icon: <Layers className="w-5 h-5" />, title: '视频水印设置', desc: '支持时间戳、Logo 等多种水印格式叠加显示。' },
    { icon: <Cloud className="w-5 h-5" />, title: '重大事件云存储', desc: '核心数据云端备份，金融级安全加密存储，永不丢失。' },
  ];

  const stats = [
    { label: '支持协议', value: '10+', sub: '主流流媒体全覆盖' },
    { label: '平均延迟', value: '<2s', sub: '端到端极致体验' },
    { label: '全球节点', value: '500+', sub: '就近接入能力' },
    { label: '并发能力', value: '百万级', sub: '高可用集群架构' },
  ];

  return (
    <div className="bg-white text-zinc-900 selection:bg-[#2d8cf0]/10 selection:text-[#2d8cf0]">
      {/* Hero Section */}
      <section className="relative pt-32 pb-24 overflow-hidden border-b border-zinc-100">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full max-w-7xl opacity-[0.03] pointer-events-none">
          <div className="absolute inset-0" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, #2d8cf0 1px, transparent 0)', backgroundSize: '40px 40px' }}></div>
        </div>
        
        <div className="mx-auto max-w-7xl px-6 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#2d8cf0]/10 border border-[#2d8cf0]/20 text-[#2d8cf0] text-xs font-bold uppercase tracking-widest mb-8">
              <Activity className="w-3 h-3" /> Real-time Media Engine
            </div>
            <h1 className="text-5xl lg:text-7xl font-black tracking-tight text-zinc-900 mb-8 leading-tight">
              麦谷实时流媒体 <br />
              <span className="text-[#2d8cf0]">MRTS</span> 核心引擎
            </h1>
            <p className="text-xl text-zinc-500 mb-12 leading-relaxed max-w-3xl mx-auto">
              赋能千万级车载联网与监控设备的实时流媒体产品。不仅支持广泛的协议格式，更能实现全球范围内极速、稳定的音视频分发。
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <button className="w-full sm:w-auto px-10 py-5 bg-[#2d8cf0] text-white font-bold rounded-2xl shadow-xl shadow-[#2d8cf0]/20 hover:bg-[#2074d6] hover:-translate-y-1 transition-all flex items-center justify-center gap-2">
                开发文档 <ArrowRight className="w-5 h-5" />
              </button>
              <button className="w-full sm:w-auto px-10 py-5 bg-white text-zinc-600 font-bold rounded-2xl border border-zinc-200 hover:bg-zinc-50 transition-all flex items-center justify-center gap-2">
                获取方案
              </button>
            </div>
          </motion.div>

          {/* Visualization Placeholder */}
          <motion.div 
            className="mt-20 max-w-6xl mx-auto p-4 rounded-[3.5rem] bg-zinc-50 border border-zinc-200/50 shadow-sm"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
          >
            <div className="bg-zinc-950 rounded-[3rem] overflow-hidden flex flex-col lg:flex-row min-h-[500px] relative">
              {/* Left: Video/Radar Canvas Section */}
              <div className="flex-[2] relative p-10 flex flex-col border-b lg:border-b-0 lg:border-r border-white/5">
                {/* Tech Grid Overlay */}
                <div className="absolute inset-0 opacity-[0.05]" style={{ backgroundImage: 'linear-gradient(#2d8cf0 1px, transparent 1px), linear-gradient(90deg, #2d8cf0 1px, transparent 1px)', backgroundSize: '48px 48px' }}></div>
                
                {/* Header Info */}
                <div className="relative z-10 flex justify-between items-start mb-auto">
                  <div className="space-y-1">
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                      <span className="text-[10px] font-black text-white uppercase tracking-[0.2em]">MRTS 核心 // 实时流媒体</span>
                    </div>
                    <p className="text-[10px] text-white/30 font-mono">节点: 华南集群_04 // RTC模式</p>
                  </div>
                  <div className="flex gap-6 items-center">
                    <div className="text-right">
                      <div className="text-[10px] text-white/30 font-bold uppercase mb-1">帧率</div>
                      <div className="text-white font-mono text-xs">60.0</div>
                    </div>
                    <div className="w-px h-6 bg-white/10" />
                    <div className="text-right">
                      <div className="text-[10px] text-white/30 font-bold uppercase mb-1">延时</div>
                      <div className="text-[#2d8cf0] font-mono text-xs">82ms</div>
                    </div>
                  </div>
                </div>

                {/* Central Visual: Pulse/Radar */}
                <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                  <div className="relative">
                    <motion.div 
                      animate={{ scale: [1, 2.5], opacity: [0.3, 0] }}
                      transition={{ duration: 4, repeat: Infinity, ease: "easeOut" }}
                      className="absolute inset-0 border border-[#2d8cf0]/20 rounded-full"
                    />
                    <motion.div 
                      animate={{ scale: [1, 1.8], opacity: [0.2, 0] }}
                      transition={{ duration: 4, delay: 1.5, repeat: Infinity, ease: "easeOut" }}
                      className="absolute inset-0 border border-[#2d8cf0]/20 rounded-full"
                    />
                    <div className="relative z-10 w-32 h-32 rounded-full bg-zinc-900 border border-[#2d8cf0]/20 flex items-center justify-center shadow-2xl shadow-[#2d8cf0]/20">
                      <Video className="w-10 h-10 text-[#2d8cf0]" />
                      <motion.div 
                        animate={{ rotate: 360 }}
                        transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
                        className="absolute inset-0 rounded-full border-t border-[#2d8cf0]/40"
                      />
                    </div>
                  </div>
                </div>

                {/* Footer Controls/Status */}
                <div className="relative z-10 flex justify-between items-end mt-auto">
                  <div className="flex gap-8">
                    <div className="space-y-1 text-left">
                      <div className="text-[10px] text-white/30 font-bold uppercase">码率</div>
                      <div className="text-white font-mono text-sm tracking-tight">4.52 <span className="text-[8px] opacity-40">Mbps</span></div>
                    </div>
                    <div className="space-y-1 text-left">
                      <div className="text-[10px] text-white/30 font-bold uppercase">编码格式</div>
                      <div className="text-white font-mono text-sm tracking-tight">H.265 <span className="text-[8px] opacity-40">HEVC</span></div>
                    </div>
                  </div>
                  <div className="flex gap-2 p-1 bg-white/5 rounded-xl border border-white/10">
                    <div className="w-10 h-7 bg-[#2d8cf0] rounded-lg flex items-center justify-center shadow-lg shadow-[#2d8cf0]/20">
                      <div className="w-1.5 h-1.5 rounded-full bg-white animate-pulse" />
                    </div>
                    <div className="w-10 h-7 hover:bg-white/10 rounded-lg flex items-center justify-center transition-colors">
                      <div className="w-3 h-3 border-2 border-white/20 rounded-sm" />
                    </div>
                  </div>
                </div>
              </div>

              {/* Right: Telemetry Panel */}
              <div className="lg:w-80 bg-zinc-900/50 p-10 flex flex-col justify-between">
                <div>
                  <h4 className="text-[10px] font-black text-white/50 uppercase tracking-[0.3em] mb-12 flex items-center gap-2">
                    <Activity className="w-4 h-4 text-[#2d8cf0]" /> 引擎数据分析
                  </h4>

                  <div className="space-y-6">
                    {[
                      { label: '信号强度', value: '极佳', color: 'text-emerald-500' },
                      { label: '加密协议', value: 'TLS 1.3', color: 'text-[#2d8cf0]' },
                      { label: '抖动', value: '2.4ms', color: 'text-white' },
                      { label: '丢包率', value: '0.00%', color: 'text-emerald-500' },
                    ].map((item, idx) => (
                      <div key={idx} className="flex justify-between items-center group">
                        <span className="text-[10px] text-white/40 font-bold uppercase group-hover:text-white/60 transition-colors">{item.label}</span>
                        <span className={`text-xs font-mono font-bold ${item.color}`}>{item.value}</span>
                      </div>
                    ))}
                  </div>

                  <div className="mt-12 pt-10 border-t border-white/5 space-y-5">
                    <div className="flex justify-between items-end">
                      <span className="text-[10px] text-white/30 font-bold uppercase">缓存水位线</span>
                      <span className="text-[10px] text-[#2d8cf0] font-mono tracking-widest">14.2%</span>
                    </div>
                    <div className="h-1 bg-white/5 rounded-full overflow-hidden">
                      <motion.div 
                        initial={{ width: 0 }}
                        animate={{ width: '14.2%' }}
                        className="h-full bg-[#2d8cf0]"
                      />
                    </div>
                  </div>
                </div>

                <button className="mt-12 w-full py-5 bg-[#2d8cf0] text-white text-[10px] font-black rounded-2xl uppercase tracking-[0.3em] shadow-2xl shadow-[#2d8cf0]/20 hover:bg-[#1a76d2] hover:-translate-y-1 transition-all active:scale-95 flex items-center justify-center gap-3">
                  <PlayCircle className="w-5 h-5" /> 同步流媒体
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Advantage Section */}
      <section className="py-24 bg-zinc-50 border-y border-zinc-100">
        <div className="mx-auto max-w-7xl px-6">
          <div className="text-center mb-20">
            <h2 className="text-4xl font-bold mb-6">产品优势</h2>
            <p className="text-zinc-500 max-w-2xl mx-auto">基于分布式流媒体集群架构，为您提供从协议解析、负载均衡到终端播放的全链路支撑。</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {advantages.map((adv, i) => (
              <motion.div 
                key={i} 
                className="group p-8 rounded-[2rem] bg-white border border-zinc-200/50 hover:border-[#2d8cf0]/30 hover:shadow-2xl hover:shadow-[#2d8cf0]/10 transition-all duration-500"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
              >
                <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-zinc-50 text-[#2d8cf0] group-hover:bg-[#2d8cf0] group-hover:text-white transition-all duration-500">
                  {adv.icon}
                </div>
                <h3 className="text-xl font-bold mb-3">{adv.title}</h3>
                <p className="text-zinc-500 text-sm leading-relaxed mb-6">{adv.desc}</p>
                <div className="flex flex-wrap gap-2">
                  {adv.tags.map(tag => (
                    <span key={tag} className="text-[10px] font-bold tracking-wider uppercase px-2 py-1 rounded bg-zinc-100 text-zinc-500 group-hover:bg-zinc-50 transition-colors">{tag}</span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Scenarios */}
      <section className="py-24 bg-white">
        <div className="mx-auto max-w-7xl px-6">
          <div className="text-center mb-20">
            <h2 className="text-4xl font-bold mb-6">适用场景</h2>
            <p className="text-zinc-500 max-w-2xl mx-auto">广泛适配多种行业硬件，打通端云链路，实现全场景智能化覆盖。</p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {scenarios.map((s, i) => (
              <motion.div 
                key={i} 
                className="group rounded-3xl overflow-hidden border border-zinc-200/50 hover:border-[#2d8cf0]/30 transition-all shadow-sm hover:shadow-2xl"
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
              >
                <div className="aspect-video relative overflow-hidden">
                  <ImageWithFallback src={s.image} alt={s.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                  <div className="absolute bottom-6 left-6 text-white">
                    <h3 className="text-2xl font-bold">{s.title}</h3>
                  </div>
                </div>
                <div className="p-8">
                  <p className="text-zinc-500 leading-relaxed mb-6">{s.desc}</p>
                  <button className="flex items-center gap-2 text-sm font-bold text-[#2d8cf0] group-hover:gap-4 transition-all">
                    了解更多 <ChevronRight className="w-4 h-4" />
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Feature List - Modular Design */}
      <section className="py-24 bg-zinc-950 text-white overflow-hidden">
        <div className="mx-auto max-w-7xl px-6 relative">
          <div className="flex flex-col lg:flex-row gap-16 items-center">
            <div className="flex-1">
              <h2 className="text-4xl font-bold mb-8">功能介绍</h2>
              <div className="grid gap-4">
                {functions.map((f, i) => (
                  <motion.div 
                    key={i} 
                    className="flex items-center gap-6 p-6 rounded-2xl bg-white/5 border border-white/10 hover:border-[#2d8cf0]/50 transition-all group"
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.05 }}
                  >
                    <div className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center text-[#2d8cf0] group-hover:bg-[#2d8cf0] group-hover:text-white transition-all">
                      {f.icon}
                    </div>
                    <div>
                      <div className="font-bold mb-1">{f.title}</div>
                      <div className="text-sm opacity-50">{f.desc}</div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
            <div className="flex-1 lg:flex hidden justify-center">
              <div className="w-full max-w-md aspect-square rounded-[3rem] border border-white/10 p-8 flex flex-col justify-between relative overflow-hidden group">
                <div className="absolute inset-0 bg-[#2d8cf0]/5 animate-pulse"></div>
                <div className="flex items-center justify-between relative z-10">
                  <div className="text-xs tracking-widest uppercase opacity-40">系统核心数据分析</div>
                  <Activity className="w-5 h-5 text-[#2d8cf0]" />
                </div>
                <div className="relative z-10 space-y-4">
                  <div className="h-2 w-full bg-white/10 rounded-full overflow-hidden">
                    <motion.div className="h-full bg-[#2d8cf0]" animate={{ width: ['20%', '90%', '40%'] }} transition={{ duration: 5, repeat: Infinity }} />
                  </div>
                  <div className="h-2 w-2/3 bg-white/10 rounded-full overflow-hidden">
                    <motion.div className="h-full bg-[#2d8cf0]" animate={{ width: ['40%', '60%', '20%'] }} transition={{ duration: 4, repeat: Infinity, delay: 0.5 }} />
                  </div>
                  <div className="h-2 w-full bg-white/10 rounded-full overflow-hidden">
                    <motion.div className="h-full bg-[#2d8cf0]" animate={{ width: ['10%', '80%', '50%'] }} transition={{ duration: 6, repeat: Infinity, delay: 1 }} />
                  </div>
                </div>
                <div className="relative z-10">
                  <div className="text-4xl font-black mb-2">99.9%</div>
                  <div className="text-xs opacity-40 uppercase">可靠性指标</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Docs & Tools */}
      <section className="py-24 bg-white">
        <div className="mx-auto max-w-7xl px-6">
          <div className="text-center mb-20">
            <h2 className="text-4xl font-bold mb-6">安全合规与稳定性保障</h2>
            <p className="text-zinc-500 max-w-2xl mx-auto">我们提供金融级的安全防护与 99.99% 的可用性承诺，确保每一路流媒体的安全与流畅。</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              { 
                icon: <Shield className="w-6 h-6" />, 
                title: '传输安全', 
                desc: '采用 AES-256 与 DTLS/SRTP 协议加密，确保视频流不被监听。' 
              },
              { 
                icon: <Activity className="w-6 h-6" />, 
                title: '弱网自适应', 
                desc: '内置 FEC 与 ARQ 技术，在 30% 高丢包环境下依然流畅播放。' 
              },
              { 
                icon: <Cloud className="w-6 h-6" />, 
                title: '高可用架构', 
                desc: '全球分布式节点多活部署，支持分钟级节点故障自愈。' 
              },
              { 
                icon: <Globe className="w-6 h-6" />, 
                title: '合规与隐私', 
                desc: '深度适配 TISAX、GDPR 等标准，满足车联网核心数据安全要求。' 
              }
            ].map((item, i) => (
              <motion.div 
                key={i}
                className="p-8 rounded-3xl bg-zinc-50 border border-zinc-200/50 hover:bg-white hover:border-[#2d8cf0]/20 hover:shadow-xl transition-all duration-300"
                whileHover={{ y: -5 }}
              >
                <div className="w-12 h-12 rounded-xl bg-white shadow-sm flex items-center justify-center text-[#2d8cf0] mb-6">
                  {item.icon}
                </div>
                <h3 className="text-lg font-bold mb-3">{item.title}</h3>
                <p className="text-zinc-500 text-sm leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-24 bg-zinc-950 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-[#2d8cf0]/10 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-black/10 rounded-full translate-y-1/2 -translate-x-1/2 blur-3xl"></div>
        
        <div className="mx-auto max-w-5xl px-6 text-center text-white relative z-10 selection:bg-white selection:text-[#2d8cf0]">
          <h2 className="text-4xl md:text-5xl font-black mb-8 leading-tight">即刻接入 <span className="text-[#2d8cf0]">MRTS 流媒体引擎</span></h2>
          <p className="text-xl opacity-80 mb-12 max-w-2xl mx-auto">无论是在线直播、远程监控还是双向语音，MRTS 都能为您提供稳定可靠的技术支持。</p>
          <div className="flex flex-wrap justify-center gap-6">
            <button className="px-10 py-5 bg-[#2d8cf0] text-white font-black rounded-2xl shadow-2xl hover:bg-[#2074d6] hover:-translate-y-1 transition-all">
              联系销售定制方案
            </button>
            <button className="px-10 py-5 bg-transparent text-white border-2 border-white/30 font-black rounded-2xl hover:bg-white/10 transition-all">
              申请试用 SDK
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
