import { UploadCloud, Layers, Cpu, Code, Settings, Wifi, Globe, Send, Bell, Box, ArrowRight } from 'lucide-react';
import { motion } from 'motion/react';

import imgMlinkOs from "figma:asset/fd9d4b0f4851bda2cd7b68be3a207e2403024c95.png";
import imgMrts from "figma:asset/45808d870a467bbe152a69c708e0f6e2d6780f38.png";
import imgData from "figma:asset/57dacfb955a5f3a978b2d14c89a0bbca81965b82.png";

export function ProductCatalog() {
  const capabilities = [
    {
      id: 'mlink',
      title: 'MLink OS',
      tagline: '专为车载联网和IPC设备量身定制的操作系统',
      image: imgMlinkOs,
      features: [
        { icon: <UploadCloud className="w-4 h-4"/>, title: '设备快速上云', desc: '支持 JT/T808 905、MQTT 及麦谷私有协议' },
        { icon: <Layers className="w-4 h-4"/>, title: '分层可裁剪', desc: '灵活裁剪以适应不同应用场景和资源配置' },
        { icon: <Cpu className="w-4 h-4"/>, title: '多芯片支持', desc: '适配主流芯片方案，确保产品稳定可靠' },
        { icon: <Code className="w-4 h-4"/>, title: '跨平台低代码', desc: '支持 Android、Linux、RTOS，集成高效' }
      ],
      color: '#2d8cf0'
    },
    {
      id: 'mrts',
      title: '麦谷实时流媒体MRTS',
      tagline: '高质量、低延迟的全球视频直播与点播服务',
      image: imgMrts,
      features: [
        { icon: <Settings className="w-4 h-4"/>, title: '多协议传输', desc: 'TCP/UDP/RTMP/GB28181/FLV 全面支持' },
        { icon: <Wifi className="w-4 h-4"/>, title: '弱网优化', desc: 'SDK 内置高效编码与压缩，优化弱网稳定性' },
        { icon: <Globe className="w-4 h-4"/>, title: '全球加速', desc: '全球节点部署，基于地理位置就近接入' }
      ],
      color: '#2d8cf0'
    },
    {
      id: 'data',
      title: '数据订阅推送',
      tagline: '高效灵活的设备数据上报、订阅与推送服务',
      image: imgData,
      features: [
        { icon: <Send className="w-4 h-4"/>, title: '一键订阅', desc: '实时低延时推送，满足多样化业务需求' },
        { icon: <Box className="w-4 h-4"/>, title: '开发 SDK', desc: '提供完善的 SDK，实现接收端快速开发' },
        { icon: <Bell className="w-4 h-4"/>, title: '积压报警', desc: '预警服务防止数据延时，确保数据不丢失' }
      ],
      color: '#2d8cf0'
    }
  ];

  return (
    <section className="mx-auto max-w-7xl px-6 py-24 border-t border-zinc-200 bg-zinc-50/30">
      <motion.div 
        className="mb-16"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#2d8cf0] mb-3 block">Platform Capability</span>
        <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-zinc-900">三大核心技术支柱</h2>
        <p className="mt-4 text-zinc-500 max-w-2xl">
          从底层系统到实时传输，再到云端数据处理，麦谷智云提供全链条的原子化能力，助力开发者快速构建物联网生态。
        </p>
      </motion.div>

      <div className="space-y-32">
        {capabilities.map((cap, index) => (
          <div key={cap.id} className={`flex flex-col gap-12 lg:gap-20 ${index % 2 === 1 ? 'lg:flex-row-reverse' : 'lg:flex-row'} items-center`}>
            {/* Left Content */}
            <motion.div 
              className="flex-1 space-y-8"
              initial={{ opacity: 0, x: index % 2 === 0 ? -40 : 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.7, ease: "easeOut" }}
            >
              <div>
                <h3 className="text-2xl md:text-3xl font-bold text-zinc-900 mb-4">{cap.title}</h3>
                <p className="text-lg text-zinc-500">{cap.tagline}</p>
              </div>

              <div className="grid sm:grid-cols-2 gap-8">
                {cap.features.map((feature, fIndex) => (
                  <div key={fIndex} className="group cursor-default">
                    <div className="mb-3 flex h-9 w-9 items-center justify-center rounded-lg bg-white border border-zinc-200 text-[#2d8cf0] shadow-xs group-hover:border-[#2d8cf0]/30 transition-colors">
                      {feature.icon}
                    </div>
                    <h4 className="font-semibold text-zinc-900 mb-1">{feature.title}</h4>
                    <p className="text-sm text-zinc-500 leading-relaxed">{feature.desc}</p>
                  </div>
                ))}
              </div>

              <div className="pt-4">
                <button className="inline-flex items-center gap-2 rounded-lg bg-[#2d8cf0] px-5 py-2.5 text-sm font-semibold text-white hover:bg-[#2074d6] transition-colors shadow-sm active:scale-95">
                  探索 {cap.title} <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </motion.div>

            {/* Right Image/Graphic */}
            <motion.div 
              className="flex-1 w-full"
              initial={{ opacity: 0, x: index % 2 === 0 ? 40 : -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.7, ease: "easeOut", delay: 0.1 }}
            >
              <div className="relative group">
                {/* Decorative background shape */}
                <div className="absolute -inset-4 bg-zinc-100/50 rounded-3xl -z-10 group-hover:bg-[#2d8cf0]/5 transition-colors duration-500"></div>
                
                <div className="overflow-hidden rounded-2xl border border-zinc-200 bg-white shadow-sm transition-all duration-500 group-hover:shadow-xl group-hover:border-zinc-300">
                  <img 
                    src={cap.image} 
                    alt={cap.title} 
                    className="w-full h-auto object-cover transform transition-transform duration-1000 group-hover:scale-105"
                  />
                  
                  {/* Glass-like overlay info (Fumadocs style detail) */}
                  <div className="absolute bottom-4 right-4 bg-white/80 backdrop-blur-md border border-white/40 px-3 py-1.5 rounded-full shadow-sm">
                    <span className="text-[10px] font-bold text-[#2d8cf0] uppercase tracking-wider">M-Capability {index + 1}</span>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        ))}
      </div>
    </section>
  );
}
