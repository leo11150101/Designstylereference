import { 
  ArrowRight, 
  Database, 
  HardDrive, 
  Bookmark, 
  CloudUpload, 
  Share2, 
  ShieldCheck, 
  Zap, 
  FileText,
  Lock,
  RefreshCw,
  Search,
  LayoutGrid,
  Video
} from 'lucide-react';
import { motion } from 'motion/react';
import { ImageWithFallback } from './figma/ImageWithFallback';

export function CloudServicesPage() {
  const services = [
    {
      id: "event-storage",
      title: "事件云存储",
      tagline: "Event-Triggered Cloud Backup",
      desc: "针对行车过程中的碰撞、急刹或紧急报警等关键事件，系统自动将相关的视频和图片实时上传至云端，确保核心证据永久留存，不受设备损坏或丢失影响。",
      image: "https://images.unsplash.com/photo-1515018993613-681b765562d1?auto=format&fit=crop&q=80&w=1080",
      icon: <Video className="w-6 h-6" />,
      highlights: [
        { icon: <CloudUpload className="w-5 h-5" />, title: "极速上传", desc: "事件触发后毫秒级启动上传任务。" },
        { icon: <Lock className="w-5 h-5" />, title: "安全加密", desc: "采用金融级加密技术保障视频隐私。" },
        { icon: <ShieldCheck className="w-5 h-5" />, title: "合规存证", desc: "符合司法取证标准的数据留存规范。" },
      ],
      features: [
        { icon: <Zap className="w-4 h-4" />, title: "自动触发", desc: "由算法识别异常行为并自动备份。" },
        { icon: <Search className="w-4 h-4" />, title: "远程回放", desc: "随时随地在线预览及下载事件片段。" },
        { icon: <LayoutGrid className="w-4 h-4" />, title: "多级存储", desc: "支持热、冷数据的分级生命周期管理。" },
      ]
    },
    {
      id: "cloud-drive",
      title: "云盘服务",
      tagline: "Secure File Storage & Sync",
      desc: "为车企及行业客户提供定制化的云端文件管理方案。支持海量驾驶记录、轨迹文件及车载多媒体资料的存储，通过多端同步技术，实现手机、车机、PC三端数据互通。",
      image: "https://images.unsplash.com/photo-1759752394755-1241472b589d?auto=format&fit=crop&q=80&w=1080",
      icon: <HardDrive className="w-6 h-6" />,
      highlights: [
        { icon: <RefreshCw className="w-5 h-5" />, title: "无缝同步", desc: "跨设备文件实时更新，体验连贯。" },
        { icon: <Share2 className="w-5 h-5" />, title: "高效共享", desc: "支持团队协作与外部链接安全分享。" },
        { icon: <Database className="w-5 h-5" />, title: "扩容灵活", desc: "支持PB级弹性扩容，按需分配空间。" },
      ],
      features: [
        { icon: <FileText className="w-4 h-4" />, title: "全格式支持", desc: "完美兼容各类文档、音视频及数据包。" },
        { icon: <Search className="w-4 h-4" />, title: "全局检索", desc: "毫秒级全文搜索定位核心文件。" },
        { icon: <ShieldCheck className="w-4 h-4" />, title: "版本控制", desc: "提供多版本备份，支持误删恢复。" },
      ]
    },
    {
      id: "cloud-favorites",
      title: "云收藏",
      tagline: "Unified Metadata Management",
      desc: "一站式解决海量业务数据的标记与分类需求。无论是感兴趣的地点（POI）、特殊的驾驶行为片段，还是重要的异常告警，均可一键收藏至云端，建立个性化知识库。",
      image: "https://images.unsplash.com/photo-1674683685332-894bed153f19?auto=format&fit=crop&q=80&w=1080",
      icon: <Bookmark className="w-6 h-6" />,
      highlights: [
        { icon: <LayoutGrid className="w-5 h-5" />, title: "多维标签", desc: "支持自定义标签体系进行分类管理。" },
        { icon: <Zap className="w-5 h-5" />, title: "轻量集成", desc: "提供标准API，一行代码即可接入收藏功能。" },
        { icon: <Search className="w-5 h-5" />, title: "精准定位", desc: "通过元数据进行精细化筛选与导出。" },
      ],
      features: [
        { icon: <Bookmark className="w-4 h-4" />, title: "一键收藏", desc: "简化用户操作，降低数据流失率。" },
        { icon: <RefreshCw className="w-4 h-4" />, title: "实时更新", desc: "云端状态实时同步，多点触发一致。" },
        { icon: <LayoutGrid className="w-4 h-4" />, title: "统计分析", desc: "基于收藏偏好生成业务热度报告。" },
      ]
    }
  ];

  return (
    <div className="bg-white min-h-screen">
      {/* Hero Section */}
      <section className="pt-32 pb-24 border-b border-zinc-100 overflow-hidden relative">
        <div className="mx-auto max-w-7xl px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#2d8cf0] mb-4 block">
              Value-Added Cloud Services
            </span>
            <h1 className="text-4xl lg:text-6xl font-black tracking-tight text-zinc-900 mb-8">
              多维 <span className="text-[#2d8cf0]">增值云服务</span>
            </h1>
            <p className="text-xl text-zinc-500 max-w-3xl mx-auto leading-relaxed">
              麦谷智云增值系列，为车联网与物联网应用提供全方位的云端赋能。通过事件存证、文件托管与数据收藏，打造闭环的数字化服务体验。
            </p>
          </motion.div>
        </div>
        
        {/* Decorative Grid Background */}
        <div className="absolute inset-0 opacity-[0.03] pointer-events-none" 
             style={{ backgroundImage: 'radial-gradient(#2d8cf0 1px, transparent 0)', backgroundSize: '40px 40px' }} />
      </section>

      {/* Services List */}
      <div className="divide-y divide-zinc-100">
        {services.map((service, index) => (
          <section key={service.id} id={service.id} className={`py-24 scroll-mt-24 overflow-hidden border-b border-zinc-100 ${index % 2 === 1 ? 'bg-zinc-50' : 'bg-white'}`}>
            <div className="mx-auto max-w-7xl px-6">
              <div className={`flex flex-col lg:flex-row gap-20 items-center ${index % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}>
                {/* Visual Representation */}
                <motion.div 
                  className="flex-1 w-full"
                  initial={{ opacity: 0, x: index % 2 === 0 ? -40 : 40 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                >
                  <div className="relative group">
                    <div className="absolute -inset-4 bg-zinc-50 rounded-[3rem] -z-10 transition-colors group-hover:bg-zinc-100/80" />
                    <div className="relative aspect-video rounded-2xl overflow-hidden border border-zinc-200 bg-white shadow-sm flex items-center justify-center">
                      <ImageWithFallback 
                        src={service.image} 
                        alt={service.title} 
                        className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105" 
                      />
                      <div className="absolute top-6 left-6 w-12 h-12 rounded-xl bg-white shadow-sm flex items-center justify-center text-[#2d8cf0] border border-zinc-100">
                        {service.icon}
                      </div>
                    </div>
                  </div>
                </motion.div>

                {/* Content Details */}
                <motion.div 
                  className="flex-1 space-y-10"
                  initial={{ opacity: 0, x: index % 2 === 0 ? 40 : -40 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                >
                  <div>
                    <h2 className="text-3xl font-black text-zinc-900 mb-4 tracking-tight">{service.title}</h2>
                    <p className="text-[#2d8cf0] font-bold text-xs uppercase tracking-widest mb-6">{service.tagline}</p>
                    <p className="text-zinc-500 leading-relaxed text-lg">{service.desc}</p>
                  </div>

                  {/* Highlights Grid */}
                  <div className="grid sm:grid-cols-3 gap-6">
                    {service.highlights.map((item, hi) => (
                      <div key={hi} className="space-y-3">
                        <div className="text-[#2d8cf0] p-2 bg-zinc-50 rounded-lg inline-block">{item.icon}</div>
                        <h3 className="font-bold text-sm text-zinc-900">{item.title}</h3>
                        <p className="text-zinc-400 text-xs leading-relaxed">{item.desc}</p>
                      </div>
                    ))}
                  </div>

                  {/* Additional Features List */}
                  <div className="pt-8 border-t border-zinc-100">
                    <div className="grid sm:grid-cols-2 gap-x-12 gap-y-6">
                      {service.features.map((feat, fi) => (
                        <div key={fi} className="flex items-start gap-4 group/feat">
                          <div className="mt-1 p-1.5 rounded-md bg-zinc-50 text-zinc-400 group-hover/feat:text-[#2d8cf0] group-hover/feat:bg-[#2d8cf0]/5 transition-all">
                            {feat.icon}
                          </div>
                          <div>
                            <p className="font-bold text-sm text-zinc-800">{feat.title}</p>
                            <p className="text-xs text-zinc-400 mt-1">{feat.desc}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </motion.div>
              </div>
            </div>
          </section>
        ))}
      </div>

      {/* Call to Action - Developer Portal Style */}
      <section className="py-24 bg-white border-t border-zinc-100">
        <div className="mx-auto max-w-7xl px-6">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="group relative border border-zinc-200 bg-zinc-50/30 rounded-3xl overflow-hidden flex flex-col lg:flex-row items-stretch shadow-sm"
          >
            <div className="flex-1 p-8 lg:p-16 border-b lg:border-b-0 lg:border-r border-zinc-100 relative">
              <div className="flex items-center gap-2 mb-8">
                <div className="w-2 h-2 rounded-full bg-[#2d8cf0] animate-pulse" />
                <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-zinc-400">Cloud API Node: Shenzhen-1</span>
              </div>
              <h2 className="text-3xl lg:text-4xl font-black text-zinc-900 mb-6 tracking-tight leading-tight">
                即刻构建 <br />
                <span className="text-[#2d8cf0]">弹性云端存储架构</span>
              </h2>
              <p className="text-zinc-500 text-lg leading-relaxed max-w-xl">
                通过我们标准化的云服务 API 与 SDK，您可以快速为您的设备或 App 添加云存储、自动备份及收藏能力。支持高并发接入，保障 TB 级数据的秒级响应。
              </p>
              
              <div className="absolute top-0 right-0 w-32 h-32 border-r border-t border-zinc-100/50 pointer-events-none" />
            </div>
            
            <div className="lg:w-[400px] p-8 lg:p-12 flex flex-col justify-center gap-4 relative bg-white">
              <button className="group w-full py-5 px-8 bg-[#2d8cf0] text-white font-bold rounded-2xl flex items-center justify-between transition-all hover:bg-[#1a76d2] active:scale-[0.98]">
                <span className="tracking-wide">API 调用文档</span>
                <FileText className="w-5 h-5 opacity-70 group-hover:opacity-100 transition-opacity" />
              </button>
              
              <button className="group w-full py-5 px-8 bg-zinc-50 border border-zinc-200 text-zinc-900 font-bold rounded-2xl flex items-center justify-between transition-all hover:border-[#2d8cf0] hover:text-[#2d8cf0] active:scale-[0.98]">
                <span className="tracking-wide">咨询存储方案</span>
                <ArrowRight className="w-5 h-5 opacity-30 group-hover:opacity-100 transition-opacity" />
              </button>
              
              <div className="mt-4 pt-6 border-t border-zinc-100 flex items-center justify-between text-[10px] font-bold uppercase tracking-widest text-zinc-400">
                <span>Storage SLA: 99.99%</span>
                <span className="flex items-center gap-1">
                  <div className="w-1 h-1 rounded-full bg-emerald-500" /> Online
                </span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
