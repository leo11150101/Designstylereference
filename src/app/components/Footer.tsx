import { Command } from 'lucide-react';

export function Footer() {
  return (
    <footer className="border-t border-zinc-200 bg-white py-16">
      <div className="mx-auto max-w-7xl px-6 grid grid-cols-2 md:grid-cols-6 gap-8 mb-12">
        <div className="col-span-2 md:col-span-2">
          <a href="#" className="flex items-center gap-2 font-bold text-zinc-900 mb-4">
            <div className="flex h-6 w-6 items-center justify-center rounded bg-zinc-900 text-white">
              <Command className="h-4 w-4" />
            </div>
            <span>麦谷智云</span>
          </a>
          <p className="text-sm text-zinc-500 max-w-xs">
            万物互联，让世界更美好。<br />提供一站式车载双应用服务与端到端解决方案。
          </p>
        </div>
        <div>
          <h4 className="font-semibold text-zinc-900 mb-4 text-sm">产品</h4>
          <ul className="space-y-3 text-sm text-zinc-500">
            <li><a href="#" className="hover:text-[#2d8cf0] transition-colors">MLink OS</a></li>
            <li><a href="#" className="hover:text-[#2d8cf0] transition-colors">实时音视频</a></li>
            <li><a href="#" className="hover:text-[#2d8cf0] transition-colors">AI 算法</a></li>
            <li><a href="#" className="hover:text-[#2d8cf0] transition-colors">增值云服务</a></li>
          </ul>
        </div>
        <div>
          <h4 className="font-semibold text-zinc-900 mb-4 text-sm">开发者</h4>
          <ul className="space-y-3 text-sm text-zinc-500">
            <li><a href="#" className="hover:text-[#2d8cf0] transition-colors">开发文档</a></li>
            <li><a href="#" className="hover:text-[#2d8cf0] transition-colors">API 参考</a></li>
            <li><a href="#" className="hover:text-[#2d8cf0] transition-colors">SDK 下载</a></li>
            <li><a href="#" className="hover:text-[#2d8cf0] transition-colors">设备接入指南</a></li>
          </ul>
        </div>
        <div>
          <h4 className="font-semibold text-zinc-900 mb-4 text-sm">解决方案</h4>
          <ul className="space-y-3 text-sm text-zinc-500">
            <li><a href="#" className="hover:text-[#2d8cf0] transition-colors">智慧城市</a></li>
            <li><a href="#" className="hover:text-[#2d8cf0] transition-colors">物流运输</a></li>
            <li><a href="#" className="hover:text-[#2d8cf0] transition-colors">政企车队</a></li>
          </ul>
        </div>
        <div>
          <h4 className="font-semibold text-zinc-900 mb-4 text-sm">关于</h4>
          <ul className="space-y-3 text-sm text-zinc-500">
            <li><a href="#" className="hover:text-[#2d8cf0] transition-colors">关于麦谷</a></li>
            <li><a href="#" className="hover:text-[#2d8cf0] transition-colors">联系我们</a></li>
          </ul>
        </div>
      </div>
      <div className="mx-auto max-w-7xl px-6 text-sm text-zinc-400 border-t border-zinc-100 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
        <p>© 2024 深圳市麦谷科技有限公司. All rights reserved.</p>
        <p>粤ICP备10218155号-1</p>
      </div>
    </footer>
  );
}