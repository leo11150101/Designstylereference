import { useState } from 'react';
import { UploadCloud, Layers, Cpu, Code, Settings, Wifi, Globe, Send, Bell, Box } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

import imgMlinkOs from "figma:asset/fd9d4b0f4851bda2cd7b68be3a207e2403024c95.png";
import imgMrts from "figma:asset/45808d870a467bbe152a69c708e0f6e2d6780f38.png";
import imgData from "figma:asset/57dacfb955a5f3a978b2d14c89a0bbca81965b82.png";

const TABS = [
  { id: 'mlink', label: 'MLink OS' },
  { id: 'mrts', label: '麦谷实时流媒体MRTS' },
  { id: 'data', label: '数据订阅推送' },
];

export function ProductCatalog() {
  const [activeTab, setActiveTab] = useState(TABS[0].id);

  return (
    <section className="mx-auto max-w-7xl px-6 py-24 border-t border-zinc-200">
      <div className="mb-12 text-center">
        <h2 className="text-3xl font-bold tracking-tight text-zinc-900">核心能力</h2>
        <p className="mt-4 text-zinc-500">满足从设备端到云端的多样化需求，无缝集成您的业务。</p>
      </div>

      <div className="rounded-2xl border border-zinc-200 bg-white overflow-hidden shadow-sm">
        {/* Tabs Header */}
        <div className="flex border-b border-zinc-200 overflow-x-auto bg-zinc-50/50">
          {TABS.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`flex-1 whitespace-nowrap px-6 py-4 text-sm font-medium transition-colors border-b-2 ${
                activeTab === tab.id
                  ? 'border-[#2d8cf0] text-[#2d8cf0] bg-white'
                  : 'border-transparent text-zinc-500 hover:text-zinc-900 hover:bg-zinc-100'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Tab Content */}
        <div className="p-8 lg:p-12">
          {activeTab === 'mlink' && (
            <div className="grid lg:grid-cols-2 gap-12 items-start">
              <div className="rounded-xl border border-zinc-200 overflow-hidden min-h-[400px]">
                <img src={imgMlinkOs} alt="MLink OS Architecture" className="w-full h-full object-cover" />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-zinc-900 mb-2">MLink OS</h3>
                <p className="text-zinc-500 mb-8">一个专为车载联网和IPC设备量身定制的操作系统</p>
                <button className="rounded-lg bg-[#2d8cf0] px-6 py-2.5 text-sm font-medium text-white hover:bg-[#2074d6] transition-colors mb-12 shadow-sm">
                  了解详情
                </button>

                <div className="space-y-8">
                  <h4 className="text-sm font-bold text-zinc-900 border-b border-zinc-100 pb-2">产品优势</h4>
                  <div className="grid gap-6">
                    <div className="flex gap-4">
                      <div className="mt-1 flex-shrink-0 flex h-8 w-8 items-center justify-center rounded-lg bg-blue-50 text-[#2d8cf0]">
                        <UploadCloud className="w-4 h-4"/>
                      </div>
                      <div>
                        <div className="font-semibold text-zinc-900 text-sm">设备快速上云</div>
                        <div className="text-zinc-500 text-sm mt-1">协议支持：JT/T808 905标准协议、MQTT协议、麦谷私有协议</div>
                      </div>
                    </div>
                    <div className="flex gap-4">
                      <div className="mt-1 flex-shrink-0 flex h-8 w-8 items-center justify-center rounded-lg bg-blue-50 text-[#2d8cf0]">
                        <Layers className="w-4 h-4"/>
                      </div>
                      <div>
                        <div className="font-semibold text-zinc-900 text-sm">分层设计，可裁剪</div>
                        <div className="text-zinc-500 text-sm mt-1">分层设计，灵活裁剪以适应不同应用场景和资源配置</div>
                      </div>
                    </div>
                    <div className="flex gap-4">
                      <div className="mt-1 flex-shrink-0 flex h-8 w-8 items-center justify-center rounded-lg bg-blue-50 text-[#2d8cf0]">
                        <Cpu className="w-4 h-4"/>
                      </div>
                      <div>
                        <div className="font-semibold text-zinc-900 text-sm">多芯片平台支持</div>
                        <div className="text-zinc-500 text-sm mt-1">经验丰富：支持主流芯片方案，确保产品稳定可靠</div>
                      </div>
                    </div>
                    <div className="flex gap-4">
                      <div className="mt-1 flex-shrink-0 flex h-8 w-8 items-center justify-center rounded-lg bg-blue-50 text-[#2d8cf0]">
                        <Code className="w-4 h-4"/>
                      </div>
                      <div>
                        <div className="font-semibold text-zinc-900 text-sm">跨平台、低代码</div>
                        <div className="text-zinc-500 text-sm mt-1">支持多系统：Android、Linux、RTOS。低代码开发，集成快捷便捷</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'mrts' && (
            <div className="grid lg:grid-cols-2 gap-12 items-start">
              <div className="rounded-xl border border-zinc-200 overflow-hidden min-h-[400px]">
                <img src={imgMrts} alt="MRTS Video Stream" className="w-full h-full object-cover" />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-zinc-900 mb-2">麦谷实时流媒体MRTS</h3>
                <p className="text-zinc-500 mb-8">快速部署，高质量、实时的视频直播</p>
                <button className="rounded-lg bg-[#2d8cf0] px-6 py-2.5 text-sm font-medium text-white hover:bg-[#2074d6] transition-colors mb-12 shadow-sm">
                  了解详情
                </button>

                <div className="space-y-8">
                  <h4 className="text-sm font-bold text-zinc-900 border-b border-zinc-100 pb-2">产品优势</h4>
                  <div className="grid gap-6">
                    <div className="flex gap-4">
                      <div className="mt-1 flex-shrink-0 flex h-8 w-8 items-center justify-center rounded-lg bg-blue-50 text-[#2d8cf0]">
                        <Settings className="w-4 h-4"/>
                      </div>
                      <div>
                        <div className="font-semibold text-zinc-900 text-sm">支持多种流媒体传输协议</div>
                        <div className="text-zinc-500 text-sm mt-1">TCP UDP HTTP Websocket RTMP JT1078 HTTP-FLV SRT GB28181</div>
                      </div>
                    </div>
                    <div className="flex gap-4">
                      <div className="mt-1 flex-shrink-0 flex h-8 w-8 items-center justify-center rounded-lg bg-blue-50 text-[#2d8cf0]">
                        <Wifi className="w-4 h-4"/>
                      </div>
                      <div>
                        <div className="font-semibold text-zinc-900 text-sm">低延时和稳定性</div>
                        <div className="text-zinc-500 text-sm mt-1">设备SDK内置先进的编码器，支持高效编码和压缩，优化弱网传输，保证数据高效传输和稳定</div>
                      </div>
                    </div>
                    <div className="flex gap-4">
                      <div className="mt-1 flex-shrink-0 flex h-8 w-8 items-center justify-center rounded-lg bg-blue-50 text-[#2d8cf0]">
                        <Globe className="w-4 h-4"/>
                      </div>
                      <div>
                        <div className="font-semibold text-zinc-900 text-sm">全球部署和就近接入</div>
                        <div className="text-zinc-500 text-sm mt-1">支持国内和海外部署，基于地理位置就近接入，最大限度降低传输损耗，保证传输性能</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'data' && (
            <div className="grid lg:grid-cols-2 gap-12 items-start">
              <div className="rounded-xl border border-zinc-200 overflow-hidden min-h-[400px]">
                <img src={imgData} alt="Data Subscription Dashboard" className="w-full h-full object-cover" />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-zinc-900 mb-2">数据订阅推送</h3>
                <p className="text-zinc-500 mb-8">一项高效而灵活的服务，专为设备上报的数据而设计</p>
                <button className="rounded-lg bg-[#2d8cf0] px-6 py-2.5 text-sm font-medium text-white hover:bg-[#2074d6] transition-colors mb-12 shadow-sm">
                  了解详情
                </button>

                <div className="space-y-8">
                  <h4 className="text-sm font-bold text-zinc-900 border-b border-zinc-100 pb-2">产品优势</h4>
                  <div className="grid gap-6">
                    <div className="flex gap-4">
                      <div className="mt-1 flex-shrink-0 flex h-8 w-8 items-center justify-center rounded-lg bg-blue-50 text-[#2d8cf0]">
                        <Send className="w-4 h-4"/>
                      </div>
                      <div>
                        <div className="font-semibold text-zinc-900 text-sm">订阅配置</div>
                        <div className="text-zinc-500 text-sm mt-1">一键配置订阅，实时低延时推送</div>
                      </div>
                    </div>
                    <div className="flex gap-4">
                      <div className="mt-1 flex-shrink-0 flex h-8 w-8 items-center justify-center rounded-lg bg-blue-50 text-[#2d8cf0]">
                        <Box className="w-4 h-4"/>
                      </div>
                      <div>
                        <div className="font-semibold text-zinc-900 text-sm">SDK支持</div>
                        <div className="text-zinc-500 text-sm mt-1">提供SDK，实现数据接收服务快速开发</div>
                      </div>
                    </div>
                    <div className="flex gap-4">
                      <div className="mt-1 flex-shrink-0 flex h-8 w-8 items-center justify-center rounded-lg bg-blue-50 text-[#2d8cf0]">
                        <UploadCloud className="w-4 h-4"/>
                      </div>
                      <div>
                        <div className="font-semibold text-zinc-900 text-sm">推送服务部署</div>
                        <div className="text-zinc-500 text-sm mt-1">提供数据接收服务，Docker一键实现客户服务器部署</div>
                      </div>
                    </div>
                    <div className="flex gap-4">
                      <div className="mt-1 flex-shrink-0 flex h-8 w-8 items-center justify-center rounded-lg bg-blue-50 text-[#2d8cf0]">
                        <Bell className="w-4 h-4"/>
                      </div>
                      <div>
                        <div className="font-semibold text-zinc-900 text-sm">积压报警</div>
                        <div className="text-zinc-500 text-sm mt-1">提供数据积压预警服务，防止数据延时和丢失</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}