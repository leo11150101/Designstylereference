import { useState } from 'react';
import {
  Cpu, Radio, Wifi, Cloud, Video, Code2,
  Car, ScanFace, ShieldCheck, CloudLightning, HardDrive, Bookmark, MapPin, Bell
} from 'lucide-react';

const NAV_ITEMS = [
  { id: 'device-dev',  label: '设备开发' },
  { id: 'device-conn', label: '设备接入' },
  { id: 'mrts',        label: '实时流媒体MRTS' },
  { id: 'ai',          label: 'AI算法' },
  { id: 'cloud-plus',  label: '增值云服务' },
  { id: 'location',    label: '位置云服务' },
];

interface Product {
  name: string;
  desc: string;
}

interface Section {
  id: string;
  title: string;
  products: Product[];
}

const SECTIONS: Section[] = [
  {
    id: 'device-dev',
    title: '设备开发',
    products: [
      {
        name: 'Mlink OS',
        desc: '一个专为车联网和PC设备量身定制的操作系统。基于Android&Linux内核，致力于提供无缝连接和广泛适应性，覆盖多样化的应用场景。',
      },
    ],
  },
  {
    id: 'device-conn',
    title: '设备接入',
    products: [
      {
        name: '部标接入',
        desc: '支持设备以部标JT/T808、905等标准协议和私有协议的接入方式。',
      },
      {
        name: '云云接入',
        desc: '通过平台和平台之间对接，实现平台能力的快速赋能。',
      },
    ],
  },
  {
    id: 'mrts',
    title: '实时流媒体MRTS',
    products: [
      {
        name: 'MRTS',
        desc: '最轻量的车载网设备实时音视频产品，并可以扩展到IPC领域。',
      },
      {
        name: '视频开发套件',
        desc: '支持播放实时视频、回放历史录像（SD卡/录像机）云存储；和JavaScript插件。',
      },
    ],
  },
  {
    id: 'ai',
    title: 'AI算法',
    products: [
      {
        name: 'ADAS',
        desc: '可在设备端集成的高级辅助驾驶AI算法。',
      },
      {
        name: 'DSM',
        desc: '可在设备端集成的驾驶员状态监控AI算法。',
      },
      {
        name: '数据脱敏',
        desc: '车载场景的图片和视频数据脱敏处理AI算法。',
      },
    ],
  },
  {
    id: 'cloud-plus',
    title: '增值云服务',
    products: [
      {
        name: '事件云存储',
        desc: '车辆行驶关键事件实时自动上云存储。',
      },
      {
        name: '云盘',
        desc: '设备录像全量上云存储。',
      },
      {
        name: '云收藏',
        desc: '图片和视频永久收藏解决方案，一键操作。',
      },
    ],
  },
  {
    id: 'location',
    title: '位置云服务',
    products: [
      {
        name: '位置云服务',
        desc: '位置云服务历经多年老客户的车载LBS（位置服务）技术的应用产品。',
      },
      {
        name: '数据订阅推送',
        desc: '一键配置，实时推送，灵活高效多样化数据的订阅推送。',
      },
    ],
  },
];

const PALETTES = [
  { bg: 'bg-[#2d8cf0]/10', text: 'text-[#2d8cf0]',   dot: 'bg-[#2d8cf0]'   },
  { bg: 'bg-emerald-50',   text: 'text-emerald-600', dot: 'bg-emerald-500' },
  { bg: 'bg-violet-50',    text: 'text-violet-600',  dot: 'bg-violet-500'  },
  { bg: 'bg-orange-50',    text: 'text-orange-500',  dot: 'bg-orange-400'  },
  { bg: 'bg-rose-50',      text: 'text-rose-500',    dot: 'bg-rose-400'    },
  { bg: 'bg-zinc-100',     text: 'text-zinc-500',    dot: 'bg-zinc-400'    },
];

export function AllProducts() {
  const [activeId, setActiveId] = useState('device-dev');

  const activeSection = SECTIONS.find(s => s.id === activeId)!;

  return (
    <section className="border-t border-zinc-100 bg-white py-20">
      <div className="mx-auto max-w-7xl px-6">

        {/* Section Header */}
        <div className="mb-12 flex items-center justify-between">
          <div>
            <h2 className="text-2xl font-semibold text-zinc-900 tracking-tight">了解所有开放平台产品</h2>
            <p className="mt-1.5 text-sm text-zinc-400">覆盖车联网全链路能力，按需选用，快速集成。</p>
          </div>
          <span className="hidden sm:inline-flex items-center gap-1.5 text-xs text-zinc-400 border border-zinc-200 rounded-full px-3 py-1.5">
            <span className="w-1.5 h-1.5 rounded-full bg-[#2d8cf0] animate-pulse" />
            {SECTIONS.reduce((acc, s) => acc + s.products.length, 0)} 项开放能力
          </span>
        </div>

        {/* Bento Grid */}
        {(() => {
          // Icon map: product name → Lucide icon + color
          const iconMap: Record<string, { icon: React.ReactNode; color: string; bg: string }> = {
            'Mlink OS':   { icon: <Cpu className="w-5 h-5" />,           color: 'text-[#2d8cf0]',   bg: 'bg-[#2d8cf0]/10' },
            '部标接入':   { icon: <Radio className="w-4 h-4" />,         color: 'text-blue-600',    bg: 'bg-blue-50' },
            '云云接入':   { icon: <Wifi className="w-4 h-4" />,          color: 'text-sky-500',     bg: 'bg-sky-50' },
            'MRTS':       { icon: <Video className="w-4 h-4" />,         color: 'text-violet-600',  bg: 'bg-violet-50' },
            '视频开发套件':{ icon: <Code2 className="w-4 h-4" />,        color: 'text-emerald-600', bg: 'bg-emerald-50' },
            'ADAS':       { icon: <Car className="w-4 h-4" />,           color: 'text-orange-500',  bg: 'bg-orange-50' },
            'DSM':        { icon: <ScanFace className="w-4 h-4" />,      color: 'text-rose-500',    bg: 'bg-rose-50' },
            '数据脱敏':   { icon: <ShieldCheck className="w-4 h-4" />,   color: 'text-teal-600',    bg: 'bg-teal-50' },
            '事件云存储': { icon: <CloudLightning className="w-4 h-4" />,color: 'text-[#2d8cf0]',   bg: 'bg-[#2d8cf0]/10' },
            '云盘':       { icon: <HardDrive className="w-4 h-4" />,     color: 'text-indigo-500',  bg: 'bg-indigo-50' },
            '云收藏':     { icon: <Bookmark className="w-4 h-4" />,      color: 'text-pink-500',    bg: 'bg-pink-50' },
            '位置云服务': { icon: <MapPin className="w-4 h-4" />,        color: 'text-[#2d8cf0]',   bg: 'bg-[#2d8cf0]/10' },
            '数据订阅推送':{ icon: <Bell className="w-4 h-4" />,         color: 'text-amber-500',   bg: 'bg-amber-50' },
          };

          const ProductIcon = ({ name, size = 'sm' }: { name: string; size?: 'sm' | 'lg' }) => {
            const meta = iconMap[name] ?? { icon: <Cpu className="w-4 h-4" />, color: 'text-zinc-400', bg: 'bg-zinc-100' };
            const dim = size === 'lg' ? 'w-11 h-11' : 'w-8 h-8';
            return (
              <div className={`flex-shrink-0 ${dim} rounded-xl ${meta.bg} flex items-center justify-center ${meta.color}`}>
                {meta.icon}
              </div>
            );
          };

          return (
            <div className="grid grid-cols-3 gap-3">

              {/* ── 01 设备开发 · 全宽特色格 ── */}
              {(() => {
                const sec = SECTIONS[0];
                const p = sec.products[0];
                return (
                  <div className="col-span-3 group relative overflow-hidden rounded-2xl border border-[#2d8cf0]/20 bg-[#2d8cf0]/[0.04] hover:bg-[#2d8cf0]/[0.07] transition-colors p-8 flex items-start justify-between gap-8 cursor-pointer">
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-4 mb-5">
                        <ProductIcon name={p.name} size="lg" />
                        <div>
                          <p className="text-[10px] font-semibold uppercase tracking-widest text-[#2d8cf0]/60">设备开发</p>
                          <p className="text-lg font-semibold text-zinc-900">{p.name}</p>
                        </div>
                      </div>
                      <p className="text-sm text-zinc-500 leading-relaxed max-w-xl">{p.desc}</p>
                    </div>
                    <div className="hidden lg:flex flex-wrap gap-2 max-w-xs justify-end items-start pt-1">
                      {['Android', 'Linux', '车联网', 'PC设备', '多场景', '无缝连接'].map(tag => (
                        <span key={tag} className="px-2.5 py-1 rounded-full text-[11px] border border-[#2d8cf0]/20 text-[#2d8cf0]/60 bg-white">{tag}</span>
                      ))}
                    </div>
                    <svg className="absolute right-6 bottom-6 w-4 h-4 text-[#2d8cf0]/30 group-hover:text-[#2d8cf0]/70 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25" />
                    </svg>
                  </div>
                );
              })()}

              {/* ── 02 设备接入 ── */}
              {(() => {
                const sec = SECTIONS[1];
                return (
                  <div className="col-span-1 rounded-2xl border border-zinc-200 bg-white p-6 flex flex-col gap-5">
                    <div className="flex items-baseline gap-2">
                      <span className="text-3xl font-black text-zinc-100 leading-none select-none">02</span>
                      <p className="text-xs font-semibold uppercase tracking-widest text-zinc-400">{sec.title}</p>
                    </div>
                    <div className="flex flex-col gap-4">
                      {sec.products.map((p) => (
                        <div key={p.name} className="group/item flex items-start gap-3 cursor-pointer">
                          <ProductIcon name={p.name} />
                          <div>
                            <p className="text-sm font-semibold text-zinc-800 group-hover/item:text-zinc-950 transition-colors">{p.name}</p>
                            <p className="text-xs text-zinc-400 leading-relaxed mt-0.5">{p.desc}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                );
              })()}

              {/* ── 03 实时流媒体 ── */}
              {(() => {
                const sec = SECTIONS[2];
                return (
                  <div className="col-span-1 rounded-2xl border border-zinc-200 bg-white p-6 flex flex-col gap-5">
                    <div className="flex items-baseline gap-2">
                      <span className="text-3xl font-black text-zinc-100 leading-none select-none">03</span>
                      <p className="text-xs font-semibold uppercase tracking-widest text-zinc-400">{sec.title}</p>
                    </div>
                    <div className="flex flex-col gap-4">
                      {sec.products.map((p) => (
                        <div key={p.name} className="group/item flex items-start gap-3 cursor-pointer">
                          <ProductIcon name={p.name} />
                          <div>
                            <p className="text-sm font-semibold text-zinc-800 group-hover/item:text-zinc-950 transition-colors">{p.name}</p>
                            <p className="text-xs text-zinc-400 leading-relaxed mt-0.5">{p.desc}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                );
              })()}

              {/* ── 04 AI算法 ── */}
              {(() => {
                const sec = SECTIONS[3];
                return (
                  <div className="col-span-1 rounded-2xl border border-zinc-200 bg-white p-6 flex flex-col gap-5">
                    <div className="flex items-baseline gap-2">
                      <span className="text-3xl font-black text-zinc-100 leading-none select-none">04</span>
                      <p className="text-xs font-semibold uppercase tracking-widest text-zinc-400">{sec.title}</p>
                    </div>
                    <div className="flex flex-col gap-4">
                      {sec.products.map((p) => (
                        <div key={p.name} className="group/item flex items-start gap-3 cursor-pointer">
                          <ProductIcon name={p.name} />
                          <div>
                            <p className="text-sm font-semibold text-zinc-800 group-hover/item:text-zinc-950 transition-colors">{p.name}</p>
                            <p className="text-xs text-zinc-400 leading-relaxed mt-0.5">{p.desc}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                );
              })()}

              {/* ── 05 增值云服务 · 宽格 ── */}
              {(() => {
                const sec = SECTIONS[4];
                return (
                  <div className="col-span-2 rounded-2xl border border-[#2d8cf0]/15 bg-[#2d8cf0]/[0.04] p-6 flex flex-col gap-5">
                    <div className="flex items-baseline gap-2">
                      <span className="text-3xl font-black text-[#2d8cf0]/10 leading-none select-none">05</span>
                      <p className="text-xs font-semibold uppercase tracking-widest text-[#2d8cf0]/50">{sec.title}</p>
                    </div>
                    <div className="grid grid-cols-3 gap-3">
                      {sec.products.map((p) => (
                        <div key={p.name} className="group/item rounded-xl border border-[#2d8cf0]/10 bg-white hover:border-[#2d8cf0]/30 transition-colors p-4 cursor-pointer">
                          <div className="mb-3">
                            <ProductIcon name={p.name} />
                          </div>
                          <p className="text-sm font-semibold text-zinc-800 mb-1">{p.name}</p>
                          <p className="text-xs text-zinc-400 leading-relaxed">{p.desc}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                );
              })()}

              {/* ── 06 位置云服务 ── */}
              {(() => {
                const sec = SECTIONS[5];
                return (
                  <div className="col-span-1 rounded-2xl border border-zinc-200 bg-white p-6 flex flex-col gap-5">
                    <div className="flex items-baseline gap-2">
                      <span className="text-3xl font-black text-zinc-100 leading-none select-none">06</span>
                      <p className="text-xs font-semibold uppercase tracking-widest text-zinc-400">{sec.title}</p>
                    </div>
                    <div className="flex flex-col gap-4">
                      {sec.products.map((p) => (
                        <div key={p.name} className="group/item flex items-start gap-3 cursor-pointer">
                          <ProductIcon name={p.name} />
                          <div>
                            <p className="text-sm font-semibold text-zinc-800 group-hover/item:text-zinc-950 transition-colors">{p.name}</p>
                            <p className="text-xs text-zinc-400 leading-relaxed mt-0.5">{p.desc}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                );
              })()}

            </div>
          );
        })()}
      </div>
    </section>
  );
}