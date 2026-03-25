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
  Wifi
} from 'lucide-react';
import { motion } from 'motion/react';

export function LocationCloudPage() {
  const stats = [
    { label: '并发接入', value: '10M+', sub: '百万级高并发承载' },
    { label: '位置延时', value: '<50ms', sub: '毫秒级计算推送' },
    { label: '轨迹压缩', value: '80%', sub: '存储资源极限优化' },
    { label: '服务可用性', value: '99.99%', sub: '分布式多活架构' },
  ];

  const functions = [
    { icon: <Navigation className="w-5 h-5" />, title: '实时轨迹监控', desc: '全量轨迹秒级刷新，支持百万车机同时在线。', size: 'col-span-2' },
    { icon: <ShieldAlert className="w-5 h-5" />, title: '电子围栏', desc: '自定义多边形围栏，毫秒级进出告警推送。', size: 'col-span-1' },
    { icon: <History className="w-5 h-5" />, title: '轨迹回放', desc: '平滑轨迹处理算法，还原真实行驶轨迹。', size: 'col-span-1' },
    { icon: <Database className="w-5 h-5" />, title: '轨迹冷热存储', desc: '冷热数据自动分离，支持 5 年历史轨迹离线快查。', size: 'col-span-2' },
    { icon: <LineChart className="w-5 h-5" />, title: '行程解析', desc: '解析停车点、超速段、急转弯等驾驶行为。', size: 'col-span-1' },
    { icon: <Activity className="w-5 h-5" />, title: '告警系统', desc: '离线、异常停留、设备损坏实时反馈。', size: 'col-span-2' },
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
    <div className="bg-[#fcfcfc] text-zinc-900 selection:bg-[#2d8cf0]/10 selection:text-[#2d8cf0]">
      {/* Precision Hero Section */}
      <section className="relative pt-32 pb-24 overflow-hidden border-b border-zinc-100 bg-white">
        <div className="absolute inset-0 opacity-[0.05] pointer-events-none">
          <div className="absolute inset-0" style={{ backgroundImage: 'linear-gradient(#2d8cf0 1px, transparent 1px), linear-gradient(90deg, #2d8cf0 1px, transparent 1px)', backgroundSize: '60px 60px' }}></div>
        </div>
        
        <div className="mx-auto max-w-7xl px-6 relative z-10">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#2d8cf0]/10 border border-[#2d8cf0]/20 text-[#2d8cf0] text-xs font-bold uppercase tracking-widest mb-8">
                <Globe className="w-3 h-3" /> Global Precision Network
              </div>
              <h1 className="text-5xl lg:text-7xl font-black tracking-tight mb-8 leading-[1.1]">
                位置云 <br />
                <span className="text-[#2d8cf0]">PaaS 基础设施</span>
              </h1>
              <p className="text-xl text-zinc-500 mb-12 leading-relaxed max-w-xl">
                为开发者构建的全球高可用定位引擎。从百万车辆的轨迹归集到毫秒级的电子围栏响应，我们提供极致、稳定的空间数据底座。
              </p>
              <div className="flex items-center gap-6">
                <button className="px-10 py-5 bg-[#2d8cf0] text-white font-black rounded-2xl shadow-2xl shadow-[#2d8cf0]/20 hover:bg-[#2074d6] hover:-translate-y-1 transition-all flex items-center gap-3">
                  开始集成 <ArrowRight className="w-5 h-5" />
                </button>
                
              </div>
            </motion.div>

            {/* Visual Asset: Simulated Data Matrix */}
            
          </div>
        </div>
      </section>

      {/* Industrial Stats Section */}
      <section className="py-24 bg-[#fafafa] border-b border-zinc-100">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((s, i) => (
              <motion.div 
                key={i} 
                className="p-8 bg-white border border-zinc-100 rounded-[2rem] hover:shadow-xl transition-all"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
              >
                <div className="text-4xl font-black text-[#2d8cf0] mb-2">{s.value}</div>
                <div className="font-bold text-zinc-900 mb-1">{s.label}</div>
                <div className="text-xs text-zinc-400">{s.sub}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Bento Functions Grid */}
      <section className="py-24 bg-white">
        <div className="mx-auto max-w-7xl px-6">
          <div className="text-center mb-20">
            <h2 className="text-4xl font-black mb-4">核心能力矩阵</h2>
            <p className="text-zinc-500">专为高并发车联网环境设计的空间数据引擎</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {functions.map((f, i) => (
              <motion.div 
                key={i} 
                className={`${f.size} group p-10 rounded-[2.5rem] bg-zinc-50 border border-zinc-100 hover:bg-white hover:border-[#2d8cf0]/30 hover:shadow-2xl transition-all duration-500`}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
              >
                <div className="w-12 h-12 rounded-xl bg-white shadow-sm flex items-center justify-center text-[#2d8cf0] mb-8 group-hover:bg-[#2d8cf0] group-hover:text-white transition-all duration-500">
                  {f.icon}
                </div>
                <h3 className="text-2xl font-black mb-4">{f.title}</h3>
                <p className="text-zinc-500 leading-relaxed mb-6">{f.desc}</p>
                <button className="flex items-center gap-2 text-sm font-bold text-[#2d8cf0] group-hover:gap-4 transition-all">
                  技术详解 <ChevronRight className="w-4 h-4" />
                </button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Developer Experience: API Preview */}
      <section className="py-24 bg-zinc-900 text-white overflow-hidden">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <div>
              <div className="w-12 h-12 rounded-xl bg-[#2d8cf0]/20 flex items-center justify-center text-[#2d8cf0] mb-8">
                <Code className="w-6 h-6" />
              </div>
              <h2 className="text-4xl font-black mb-8 leading-tight">面向开发者的 <br /> 标准化输出</h2>
              <p className="text-lg opacity-50 mb-10 leading-relaxed">
                我们深知数据格式一致性的重要性。位置云提供标准化的 API 响应与结构化数据推送，无论是轨迹点、围栏告警还是行程分析，都能轻松接入您的业务逻辑。
              </p>
              <div className="space-y-6">
                {[
                  { icon: <Server className="w-5 h-5" />, title: '标准 RESTful API', desc: '丰富的文档与多语言 SDK 支持。' },
                  { icon: <Wifi className="w-5 h-5" />, title: 'Webhook 实时推送', desc: '告警与状态变更毫秒级送达。' },
                  { icon: <Cpu className="w-5 h-5" />, title: '边缘节点预处理', desc: '原始数据在边缘侧自动纠偏与压缩。' },
                ].map((item, i) => (
                  <div key={i} className="flex gap-6 items-start">
                    <div className="flex-shrink-0 text-[#2d8cf0] mt-1">{item.icon}</div>
                    <div>
                      <div className="font-bold mb-1">{item.title}</div>
                      <div className="text-sm opacity-40">{item.desc}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            <motion.div 
              className="relative p-1 rounded-3xl bg-white/5 border border-white/10 overflow-hidden"
              initial={{ x: 50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: true }}
            >
              <div className="absolute top-0 left-0 w-full h-10 bg-white/5 border-b border-white/10 flex items-center px-4 gap-2">
                <div className="w-3 h-3 rounded-full bg-red-500/50" />
                <div className="w-3 h-3 rounded-full bg-amber-500/50" />
                <div className="w-3 h-3 rounded-full bg-emerald-500/50" />
                <div className="ml-4 text-[10px] opacity-30 font-mono">GET /v1/devices/status</div>
              </div>
              <pre className="p-8 pt-16 text-sm font-mono text-[#2d8cf0]/80 overflow-x-auto">
                <code>{apiSample}</code>
              </pre>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Enterprise-Grade Security */}
      <section className="py-24 bg-white">
        <div className="mx-auto max-w-7xl px-6">
          <div className="flex flex-col lg:flex-row gap-12 items-center p-12 lg:p-20 rounded-[4rem] border border-zinc-100 bg-[#fafafa]">
            <div className="flex-1">
              <h2 className="text-4xl font-black mb-8 leading-tight">安全与稳定性，<br /> 是我们的底线</h2>
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <div className="font-bold text-zinc-900 mb-3 flex items-center gap-2">
                    <ShieldAlert className="w-5 h-5 text-[#2d8cf0]" /> 数据加密
                  </div>
                  <p className="text-zinc-500 text-sm">全链路数据加密传输，支持私有化部署。符合车联网信息安全标准。</p>
                </div>
                <div>
                  <div className="font-bold text-zinc-900 mb-3 flex items-center gap-2">
                    <Activity className="w-5 h-5 text-[#2d8cf0]" /> 容灾多活
                  </div>
                  <p className="text-zinc-500 text-sm">全球分布式节点部署，支持跨区域自动容灾切换，确保业务永续。</p>
                </div>
              </div>
            </div>
            <div className="flex-shrink-0">
              <button className="px-10 py-5 bg-zinc-900 text-white font-black rounded-2xl hover:scale-105 active:scale-95 transition-all">
                立即咨询企业版方案
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
