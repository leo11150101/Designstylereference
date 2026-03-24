import { Settings, Shield, Zap } from 'lucide-react';
import { motion } from 'motion/react';

export function InteractiveDemo() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: { opacity: 1, x: 0 }
  };

  return (
    <section className="mx-auto max-w-7xl px-6 py-24 border-t border-zinc-200">
      <div className="grid md:grid-cols-2 gap-16 items-center">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <motion.h2 
            variants={itemVariants}
            className="text-3xl font-bold tracking-tight text-zinc-900 mb-6"
          >
            为什么选择麦谷智云？
          </motion.h2>
          <motion.p 
            variants={itemVariants}
            className="text-lg text-zinc-500 mb-10"
          >
            凭借多年的技术沉淀与海量设备接入经验，我们为您的业务保驾护航。
          </motion.p>

          <div className="space-y-8">
            {[
              { icon: <Zap className="h-4 w-4 text-[#2d8cf0]" />, title: '高可用高稳定', desc: '服务可用性高达 99.9%，持续稳定为您提供核心支持。' },
              { icon: <Shield className="h-4 w-4 text-[#2d8cf0]" />, title: '多重安全保障', desc: '通过多项信息安全认证，提供全级别的数据隐私保护。' },
              { icon: <Settings className="h-4 w-4 text-[#2d8cf0]" />, title: '高效技术支持', desc: '一对一开发对接全方位支持服务，帮助业务最快路径落地。' }
            ].map((feature, i) => (
              <motion.div 
                key={i} 
                variants={itemVariants}
                className="flex gap-4"
              >
                <div className="flex-shrink-0 mt-1">
                  <div className="flex h-8 w-8 items-center justify-center rounded-lg border border-zinc-200 bg-white shadow-sm">
                    {feature.icon}
                  </div>
                </div>
                <div>
                  <h4 className="font-semibold text-zinc-900">{feature.title}</h4>
                  <p className="mt-1 text-sm text-zinc-500">{feature.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="rounded-2xl border border-zinc-200 bg-white p-6 md:p-8 flex flex-col gap-6 shadow-sm"
        >
          {/* Header */}
          <div className="flex items-center justify-between">
            <span className="text-sm font-semibold text-zinc-900">服务状态</span>
            <div className="flex items-center gap-1.5 text-xs text-green-600 font-medium">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
              </span>
              全部系统正常
            </div>
          </div>

          {/* Metrics */}
          <div className="flex flex-col gap-5">
            {[
              { label: 'API 平均延迟', value: '12ms', width: '25%' },
              { label: '视频上行可用率', value: '99.99%', width: '100%' },
              { label: '在线设备数', value: '240 万+', width: '75%' },
            ].map(({ label, value, width }) => (
              <div key={label}>
                <div className="flex justify-between text-sm mb-2">
                  <span className="text-zinc-500">{label}</span>
                  <span className="text-zinc-900 font-mono font-medium">{value}</span>
                </div>
                <div className="h-1.5 w-full bg-zinc-100 rounded-full overflow-hidden">
                  <motion.div 
                    initial={{ width: 0 }}
                    whileInView={{ width }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, delay: 0.5, ease: "easeOut" }}
                    className="h-full bg-[#2d8cf0] rounded-full"
                  />
                </div>
              </div>
            ))}
          </div>

          {/* Divider */}
          <div className="border-t border-zinc-100" />

          {/* Capability tags */}
          <div className="flex flex-wrap gap-2">
            {['高可用', '多协议', '实时流媒体', 'AI 算法', '安全加密', '弹性扩缩容'].map((tag, i) => (
              <motion.span 
                key={tag} 
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.8 + (i * 0.05) }}
                className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-xs border border-zinc-200 text-zinc-500 bg-zinc-50"
              >
                <span className="w-1 h-1 rounded-full bg-[#2d8cf0]" />
                {tag}
              </motion.span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
