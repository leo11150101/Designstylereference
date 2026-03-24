import { Settings, Shield, Zap } from 'lucide-react';

export function InteractiveDemo() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-24 border-t border-zinc-200">
      <div className="grid md:grid-cols-2 gap-16 items-center">
        <div>
          <h2 className="text-3xl font-bold tracking-tight text-zinc-900 mb-6">
            为什么选择麦谷智云？
          </h2>
          <p className="text-lg text-zinc-500 mb-10">
            凭借多年的技术沉淀与海量设备接入经验，我们为您的业务保驾护航。
          </p>

          <div className="space-y-8">
            <div className="flex gap-4">
              <div className="flex-shrink-0 mt-1">
                <div className="flex h-8 w-8 items-center justify-center rounded-lg border border-zinc-200 bg-white shadow-sm">
                  <Zap className="h-4 w-4 text-[#2d8cf0]" />
                </div>
              </div>
              <div>
                <h4 className="font-semibold text-zinc-900">高可用高稳定</h4>
                <p className="mt-1 text-sm text-zinc-500">服务可用性高达 99.9%，持续稳定为您提供核心支持。</p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="flex-shrink-0 mt-1">
                <div className="flex h-8 w-8 items-center justify-center rounded-lg border border-zinc-200 bg-white shadow-sm">
                  <Shield className="h-4 w-4 text-[#2d8cf0]" />
                </div>
              </div>
              <div>
                <h4 className="font-semibold text-zinc-900">多重安全保障</h4>
                <p className="mt-1 text-sm text-zinc-500">通过多项信息安全认证，提供全级别的数据隐私保护。</p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="flex-shrink-0 mt-1">
                <div className="flex h-8 w-8 items-center justify-center rounded-lg border border-zinc-200 bg-white shadow-sm">
                  <Settings className="h-4 w-4 text-[#2d8cf0]" />
                </div>
              </div>
              <div>
                <h4 className="font-semibold text-zinc-900">高效技术支持</h4>
                <p className="mt-1 text-sm text-zinc-500">一对一开发对接全方位支持服务，帮助业务最快路径落地。</p>
              </div>
            </div>
          </div>
        </div>

        <div className="rounded-2xl border border-zinc-200 bg-white p-6 md:p-8 flex flex-col gap-6">

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
              { label: 'API 平均延迟', value: '12ms', width: 'w-1/4' },
              { label: '视频上行可用率', value: '99.99%', width: 'w-full' },
              { label: '在线设备数', value: '240 万+', width: 'w-3/4' },
            ].map(({ label, value, width }) => (
              <div key={label}>
                <div className="flex justify-between text-sm mb-2">
                  <span className="text-zinc-500">{label}</span>
                  <span className="text-zinc-900 font-mono font-medium">{value}</span>
                </div>
                <div className="h-1.5 w-full bg-zinc-100 rounded-full overflow-hidden">
                  <div className={`h-full bg-[#2d8cf0] ${width} rounded-full`}></div>
                </div>
              </div>
            ))}
          </div>

          {/* Divider */}
          <div className="border-t border-zinc-100" />

          {/* Capability tags */}
          <div className="flex flex-wrap gap-2">
            {['高可用', '多协议', '实时流媒体', 'AI 算法', '安全加密', '弹性扩缩容'].map(tag => (
              <span key={tag} className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-xs border border-zinc-200 text-zinc-500 bg-zinc-50">
                <span className="w-1 h-1 rounded-full bg-[#2d8cf0]" />
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}