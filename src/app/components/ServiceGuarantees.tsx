import { Server, ShieldCheck, Zap, FileText } from 'lucide-react';

export function ServiceGuarantees() {
  return (
    <div className="flex flex-col">
      <section className="mx-auto max-w-7xl px-6 py-24 w-full text-center">
        <h2 className="text-2xl md:text-3xl font-bold tracking-tight text-zinc-900 mb-16">
          安全、可靠的服务
        </h2>
        <div className="grid md:grid-cols-3 gap-12">
          <div className="flex flex-col items-center">
            <div className="mb-6 flex h-20 w-20 items-center justify-center rounded-2xl bg-blue-50 text-blue-600">
              <Server className="h-10 w-10" />
            </div>
            <h3 className="text-lg font-bold text-zinc-900 mb-3">高可用高稳定的服务</h3>
            <p className="text-sm text-zinc-600 leading-relaxed max-w-xs text-center">
              麦谷多年的技术沉淀，持续稳定的为您提供服务，服务可用性高达99.9%
            </p>
          </div>
          <div className="flex flex-col items-center">
            <div className="mb-6 flex h-20 w-20 items-center justify-center rounded-2xl bg-blue-50 text-blue-600">
              <ShieldCheck className="h-10 w-10" />
            </div>
            <h3 className="text-lg font-bold text-zinc-900 mb-3">安全保障的数据云服务</h3>
            <p className="text-sm text-zinc-600 leading-relaxed max-w-xs text-center">
              通过多项信息安全认证，全面级别高的数据隐私保护和安全防御
            </p>
          </div>
          <div className="flex flex-col items-center">
            <div className="mb-6 flex h-20 w-20 items-center justify-center rounded-2xl bg-blue-50 text-blue-600">
              <Zap className="h-10 w-10" />
            </div>
            <h3 className="text-lg font-bold text-zinc-900 mb-3">高效的技术支持服务</h3>
            <p className="text-sm text-zinc-600 leading-relaxed max-w-xs text-center">
              一对一提供开发对接全方位的技术支持服务，帮助您以最快路径应用落地
            </p>
          </div>
        </div>
      </section>

      <section className="bg-zinc-50 border-y border-zinc-200 py-24 w-full">
         <div className="mx-auto max-w-7xl px-6 text-center">
           <h2 className="text-2xl md:text-3xl font-bold tracking-tight text-zinc-900 mb-12">
            文档与工具
          </h2>
          <div className="flex justify-center">
            <div className="rounded-xl border border-zinc-200 bg-white p-8 hover:border-blue-600 transition-colors cursor-pointer w-72 text-left group shadow-sm">
              <div className="flex items-center gap-3 mb-2">
                <FileText className="text-zinc-400 group-hover:text-blue-600 transition-colors h-6 w-6"/>
                <span className="font-bold text-zinc-900 text-lg">产品介绍</span>
              </div>
              <p className="text-sm text-zinc-500 pl-9">介绍产品功能和特点</p>
            </div>
          </div>
         </div>
      </section>
    </div>
  );
}