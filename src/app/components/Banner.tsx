import { ArrowRight, Cloud, Zap, ShieldCheck } from 'lucide-react';
import { motion } from 'motion/react';

export function Banner() {
  return (
    <section className="relative overflow-hidden bg-[#2d8cf0]/[0.04] py-20 border-t border-zinc-100">
      {/* Subtle Background Elements - Full Width */}
      <motion.div 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 0.08 }}
        viewport={{ once: true }}
        transition={{ duration: 1.5 }}
        className="absolute top-0 left-0 h-full w-full pointer-events-none overflow-hidden"
      >
        <div className="absolute -top-1/4 -left-1/4 h-[150%] w-[150%] rotate-12 bg-linear-to-b from-[#2d8cf0]/20 to-transparent"></div>
      </motion.div>

      <div className="mx-auto max-w-7xl px-6 relative z-10">
        <motion.div 
          className="flex flex-col items-center text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          {/* Feature Badges */}
          <div className="mb-8 flex flex-wrap justify-center gap-3">
            {[
              { icon: <Cloud className="h-3.5 w-3.5 text-[#2d8cf0]" />, label: '海量汇聚' },
              { icon: <Zap className="h-3.5 w-3.5 text-[#2d8cf0]" />, label: '极速接入' },
              { icon: <ShieldCheck className="h-3.5 w-3.5 text-[#2d8cf0]" />, label: '合规稳定' }
            ].map((badge, i) => (
              <motion.div 
                key={badge.label}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 + (i * 0.1) }}
                className="flex items-center gap-1.5 rounded-full border border-zinc-100 bg-white px-3 py-1 text-[12px] font-medium text-zinc-600 shadow-sm"
              >
                {badge.icon}
                <span>{badge.label}</span>
              </motion.div>
            ))}
          </div>

          <motion.h2 
            className="mb-6 text-3xl font-bold tracking-tight text-zinc-900 md:text-5xl lg:text-6xl"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.6 }}
          >准备好接入<span className="text-[#2d8cf0]">麦谷智云</span>了吗？</motion.h2>
          
          <motion.p 
            className="mx-auto mb-10 max-w-2xl text-lg text-zinc-500 leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4, duration: 0.6 }}
          >
            体验开放平台为您的车载与 IOT 设备带来的全面能力提升，<br className="hidden md:block" />
            几行代码即可快速完成设备上云，开启智联新纪元。
          </motion.p>

          <motion.div 
            className="flex flex-col items-center gap-4 sm:flex-row sm:justify-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5, duration: 0.6 }}
          >
            <button className="group relative flex items-center justify-center gap-2 rounded-xl bg-[#2d8cf0] px-8 py-4 text-base font-semibold text-white transition-all hover:bg-[#2074d6] hover:shadow-lg hover:shadow-[#2d8cf0]/20 active:scale-[0.98]">
              立即免费试用
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </button>
            <button className="flex items-center justify-center rounded-xl border border-zinc-200 bg-white px-8 py-4 text-base font-semibold text-zinc-900 transition-all hover:bg-zinc-50 hover:border-zinc-300 active:scale-[0.98]">
              预约产品演示
            </button>
          </motion.div>

          <motion.div 
            className="mt-12 flex items-center gap-4 text-sm text-zinc-400"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.8, duration: 1 }}
          >
            <span className="flex items-center gap-1.5">
              <div className="h-1.5 w-1.5 rounded-full bg-emerald-500"></div>
              系统状态正常
            </span>
            <span className="h-4 w-px bg-zinc-200"></span>
            <span>已接入设备 1,000,000+</span>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
