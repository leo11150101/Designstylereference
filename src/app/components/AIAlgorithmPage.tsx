import { 
  ArrowRight, 
  ShieldCheck, 
  Eye, 
  Activity, 
  ChevronRight,
  Cloud,
  Cpu,
  Monitor,
  UserCheck,
  CreditCard,
  Mic,
  Sun,
  Settings,
  User,
  Cigarette,
  Phone,
  Droplets,
  LogOut,
  VideoOff,
  Search,
  Users,
  Navigation,
  Target,
  AlertTriangle,
  Zap,
  Waypoints,
  FileText,
  Car
} from 'lucide-react';
import { motion } from 'motion/react';
import { ImageWithFallback } from './figma/ImageWithFallback';

export function AIAlgorithmPage() {
  const sections = [
    {
      id: "data-masking",
      title: "数据脱敏算法",
      tagline: "智能化处理图片和视频数据中的个人信息",
      desc: "通过深度学习算法，实现对人脸、车牌等隐私数据的秒级遮蔽，符合 GDPR 等合规性要求。",
      image: "https://images.unsplash.com/photo-1678466272132-ded8f248f172?auto=format&fit=crop&q=80&w=1080",
      icon: <ShieldCheck className="w-6 h-6" />,
      advantages: [
        { icon: <Cloud className="w-5 h-5" />, title: "云端接口", desc: "支持多种开发方式接入。" },
        { icon: <Cpu className="w-5 h-5" />, title: "设备嵌入", desc: "端侧算法实现隐私脱敏。" },
        { icon: <Monitor className="w-5 h-5" />, title: "独立部署", desc: "支持各种业务环境部署。" },
      ],
      features: [
        { icon: <UserCheck className="w-4 h-4" />, title: "人脸脱敏", desc: "精准识别视频/图片中的人脸区域。" },
        { icon: <CreditCard className="w-4 h-4" />, title: "车牌脱敏", desc: "多角度识别各类车辆牌照信息。" },
      ]
    },
    {
      id: "dsm",
      title: "驾驶员状态监测 (DSM)",
      tagline: "全方位的实时监控与行为预警",
      desc: "利用 AI 视觉算法实时监控驾驶员疲劳、抽烟、打电话等危险驾驶行为，保障行车安全。",
      image: "https://images.unsplash.com/photo-1744199770431-8048f20dedf8?auto=format&fit=crop&q=80&w=1080",
      icon: <Eye className="w-6 h-6" />,
      advantages: [
        { icon: <Mic className="w-5 h-5" />, title: "语音提示", desc: "实时违规行为语音反馈。" },
        { icon: <Sun className="w-5 h-5" />, title: "全天候", desc: "适应各种天气与光照条件。" },
        { icon: <Settings className="w-5 h-5" />, title: "灵敏度", desc: "可根据驾驶习惯个性化调整。" },
      ],
      features: [
        { icon: <User className="w-4 h-4" />, title: "疲劳驾驶", desc: "深度分析闭眼状态及哈欠频率。" },
        { icon: <Cigarette className="w-4 h-4" />, title: "违规行为", desc: "监测抽烟、打电话、喝水等动作。" },
        { icon: <ShieldCheck className="w-4 h-4" />, title: "安全带检测", desc: "识别是否规范佩戴三点式安全带。" },
        { icon: <Users className="w-4 h-4" />, title: "��脸比对", desc: "确保驾驶员身份一致性。" },
      ]
    },
    {
      id: "adas",
      title: "高级辅助驾驶 (ADAS)",
      tagline: "智能行车守护系统",
      desc: "提供前向碰撞预警、车道偏离提醒等功能，集成多种识别算法，降低驾驶强度。",
      image: "https://images.unsplash.com/photo-1684141402511-3666ae53f25f?auto=format&fit=crop&q=80&w=1080",
      icon: <Activity className="w-6 h-6" />,
      advantages: [
        { icon: <Navigation className="w-5 h-5" />, title: "车道监测", desc: "实时监控非主观车道偏离。" },
        { icon: <Target className="w-5 h-5" />, title: "碰撞预警", desc: "智能识别障碍物并及时提醒。" },
        { icon: <Users className="w-5 h-5" />, title: "行人保护", desc: "复杂路况行人碰撞风险预警。" },
      ],
      features: [
        { icon: <AlertTriangle className="w-4 h-4" />, title: "前向碰撞", desc: "根据车速及车距判断碰撞风险。" },
        { icon: <Waypoints className="w-4 h-4" />, title: "车道偏离", desc: "未打灯偏离行驶行为检测。" },
        { icon: <Zap className="w-4 h-4" />, title: "前车启动", desc: "红绿灯路口启动及时提醒。" },
        { icon: <Car className="w-4 h-4" />, title: "频繁变道", desc: "监控危险变道倾向并预警。" },
      ]
    }
  ];

  return (
    <div className="bg-white min-h-screen">
      {/* Hero Section */}
      <section className="pt-32 pb-24 border-b border-zinc-100">
        <div className="mx-auto max-w-7xl px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#2d8cf0] mb-4 block">
              AI Intelligent Algorithms
            </span>
            <h1 className="text-4xl lg:text-6xl font-black tracking-tight text-zinc-900 mb-8">
              人工智能 <span className="text-[#2d8cf0]">视觉算法全集</span>
            </h1>
            <p className="text-xl text-zinc-500 max-w-3xl mx-auto leading-relaxed">
              麦谷智云 AI 视觉算法系列，整合数据脱敏、驾驶监测与辅助驾驶三大核心能力。通过深度学习与视觉识别技术，为车载与工业场景提供全链条智能化支撑。
            </p>
          </motion.div>
        </div>
      </section>



      {/* Algorithm Sections */}
      <div className="divide-y divide-zinc-100">
        {sections.map((section, index) => (
          <section key={section.id} id={section.id} className={`py-24 scroll-mt-24 border-b border-zinc-100 ${index % 2 === 1 ? 'bg-zinc-50' : 'bg-white'}`}>
            <div className="mx-auto max-w-7xl px-6">
              <div className={`flex flex-col lg:flex-row gap-16 items-center ${index % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}>
                {/* Visual */}
                <motion.div 
                  className="flex-1 w-full"
                  initial={{ opacity: 0, x: index % 2 === 0 ? -40 : 40 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                >
                  <div className="relative aspect-[4/3] bg-zinc-50 rounded-[2.5rem] border border-zinc-100 p-12 flex items-center justify-center group">
                    <ImageWithFallback 
                      src={section.image} 
                      alt={section.title} 
                      className="w-full h-auto max-h-full object-contain drop-shadow-2xl group-hover:scale-105 transition-transform duration-700" 
                    />
                    <div className="absolute top-8 left-8 w-14 h-14 rounded-2xl bg-white shadow-sm flex items-center justify-center text-[#2d8cf0]">
                      {section.icon}
                    </div>
                  </div>
                </motion.div>

                {/* Content */}
                <motion.div 
                  className="flex-1 space-y-10"
                  initial={{ opacity: 0, x: index % 2 === 0 ? 40 : -40 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                >
                  <div>
                    <h2 className="text-3xl font-black text-zinc-900 mb-4">{section.title}</h2>
                    <p className="text-[#2d8cf0] font-bold mb-6">{section.tagline}</p>
                    <p className="text-zinc-500 leading-relaxed text-lg">{section.desc}</p>
                  </div>

                  {/* Advantages Grid */}
                  <div className="grid sm:grid-cols-3 gap-6">
                    {section.advantages.map((adv, ai) => (
                      <div key={ai} className="p-5 rounded-2xl bg-zinc-50/50 border border-zinc-100">
                        <div className="text-[#2d8cf0] mb-3">{adv.icon}</div>
                        <h3 className="font-black text-sm mb-1">{adv.title}</h3>
                        <p className="text-zinc-400 text-xs leading-relaxed">{adv.desc}</p>
                      </div>
                    ))}
                  </div>

                  {/* Core Features */}
                  <div className="space-y-4">
                    <h4 className="text-xs font-bold uppercase tracking-widest text-zinc-400 mb-4">核心算法功能</h4>
                    <div className="grid sm:grid-cols-2 gap-4">
                      {section.features.map((feat, fi) => (
                        <div key={fi} className="flex items-start gap-4 p-4 rounded-xl border border-zinc-100 hover:border-[#2d8cf0]/20 transition-colors">
                          <div className="mt-1 w-6 h-6 rounded-lg bg-zinc-50 flex items-center justify-center text-[#2d8cf0]">
                            {feat.icon}
                          </div>
                          <div>
                            <p className="font-bold text-sm text-zinc-900">{feat.title}</p>
                            <p className="text-xs text-zinc-400">{feat.desc}</p>
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

      {/* Bottom Documentation Section */}
      <section id="docs" className="py-24 bg-zinc-50 border-t border-zinc-200">
        <div className="mx-auto max-w-7xl px-6">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="group relative border border-zinc-200 bg-white rounded-2xl overflow-hidden flex flex-col lg:flex-row items-stretch"
          >
            {/* 左侧内容区：强调工业感和文档属性 */}
            <div className="flex-1 p-8 lg:p-16 border-b lg:border-b-0 lg:border-r border-zinc-100 relative">
              <div className="flex items-center gap-2 mb-8">
                <div className="w-2 h-2 rounded-full bg-[#2d8cf0] animate-pulse" />
                <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-zinc-400">Developer Portal Active</span>
              </div>
              <h2 className="text-3xl lg:text-4xl font-black text-zinc-900 mb-6 tracking-tight leading-tight">
                即刻开启 <br />
                <span className="text-[#2d8cf0]">麦谷 AI 视觉集成</span>
              </h2>
              <p className="text-zinc-500 text-lg leading-relaxed max-w-xl">
                获取完善的集成工具链，从端侧 SDK 采集到云端 API 分析，全方位加速您的业务智能化升级。我们提供生产级的稳定性和详尽的开发支持。
              </p>
              
              {/* 背景装饰：极简网格线 */}
              <div className="absolute top-0 right-0 w-32 h-32 border-r border-t border-zinc-50 pointer-events-none" />
            </div>
            
            {/* 右侧操作区：扁平化功能卡片 */}
            <div className="lg:w-[400px] bg-zinc-50/50 p-8 lg:p-12 flex flex-col justify-center gap-4 relative">
              <button className="group w-full py-5 px-8 bg-[#2d8cf0] text-white font-bold rounded-xl flex items-center justify-between transition-all hover:bg-[#1a76d2] active:scale-[0.98]">
                <span className="tracking-wide">获取开发文档</span>
                <FileText className="w-5 h-5 opacity-70 group-hover:opacity-100 transition-opacity" />
              </button>
              
              <button className="group w-full py-5 px-8 bg-white border border-zinc-200 text-zinc-900 font-bold rounded-xl flex items-center justify-between transition-all hover:border-[#2d8cf0] hover:text-[#2d8cf0] active:scale-[0.98]">
                <span className="tracking-wide">联系技术支持</span>
                <ArrowRight className="w-5 h-5 opacity-30 group-hover:opacity-100 transition-opacity" />
              </button>
              
              <div className="mt-4 pt-6 border-t border-zinc-200/60 flex items-center justify-between text-[10px] font-bold uppercase tracking-widest text-zinc-400">
                <span>Response Time: &lt; 24H</span>
                <span className="flex items-center gap-1">
                  <div className="w-1 h-1 rounded-full bg-emerald-500" /> API: Normal
                </span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
