import { Search, Github, Sun, Command, ChevronDown } from 'lucide-react';
import { Link, useLocation } from 'react-router';

export function Header() {
  const location = useLocation();
  const isProductActive = isMLink || 
    location.pathname === '/mrts' || 
    location.pathname === '/location-cloud' || 
    location.pathname.startsWith('/ai-algorithm') ||
    location.pathname === '/data-masking' ||
    location.pathname === '/dsm' ||
    location.pathname === '/adas';

  return (
    <header className="sticky top-0 z-50 w-full border-b border-zinc-200 bg-white/90 backdrop-blur-sm">
      <div className="mx-auto flex h-14 max-w-7xl items-center justify-between px-6">
        <div className="flex items-center gap-8">
          <Link to="/" className="flex items-center gap-2 font-bold text-zinc-900">
            <div className="flex h-6 w-6 items-center justify-center rounded bg-zinc-900 text-white">
              <Command className="h-4 w-4" />
            </div>
            <span>麦谷智云</span>
          </Link>
          <nav className="hidden md:flex items-center gap-6 text-sm font-medium text-zinc-500">
            <Link 
              to="/" 
              className={`${!isProductActive && location.pathname === '/' ? 'text-[#2d8cf0]' : 'hover:text-[#2d8cf0] transition-colors'}`}
            >
              开放平台
            </Link>
                        <div className="relative group flex items-center gap-1 cursor-default hover:text-[#2d8cf0] transition-colors">
              <span className={`${isProductActive ? 'text-[#2d8cf0]' : ''}`}>产品介绍</span>
              <ChevronDown className="w-3 h-3 opacity-50 group-hover:rotate-180 transition-transform duration-300" />
              
              <div className="absolute top-full -left-4 pt-4 opacity-0 translate-y-2 pointer-events-none group-hover:opacity-100 group-hover:translate-y-0 group-hover:pointer-events-auto transition-all duration-300 z-50">
                <div className="bg-white border border-zinc-100 shadow-[0_20px_50px_rgba(0,0,0,0.1)] rounded-2xl p-2 w-56 flex flex-col gap-0.5">
                  <Link to="/mlink-os" className="flex items-center justify-between px-4 py-2.5 rounded-xl text-sm font-bold text-zinc-600 hover:text-[#2d8cf0] hover:bg-[#2d8cf0]/5 transition-all group/item">
                    设备开发 <span className="text-[10px] opacity-30 font-mono tracking-tighter">MLink OS</span>
                  </Link>
                  <Link to="/mrts" className="flex items-center justify-between px-4 py-2.5 rounded-xl text-sm font-bold text-zinc-600 hover:text-[#2d8cf0] hover:bg-[#2d8cf0]/5 transition-all group/item">
                    实时流媒体MRTS <span className="text-[10px] opacity-30 font-mono tracking-tighter">MRTS</span>
                  </Link>
                  <Link to="/ai-algorithm" className="flex items-center justify-between px-4 py-2.5 rounded-xl text-sm font-bold text-zinc-600 hover:text-[#2d8cf0] hover:bg-[#2d8cf0]/5 transition-all group/item">
                    AI算法 <span className="text-[10px] opacity-30 font-mono tracking-tighter">AI</span>
                  </Link>
                  <Link to="/cloud-services" className="flex items-center justify-between px-4 py-2.5 rounded-xl text-sm font-bold text-zinc-600 hover:text-[#2d8cf0] hover:bg-[#2d8cf0]/5 transition-all group/item">
                    增值云服务 <span className="text-[10px] opacity-30 font-mono tracking-tighter">VAS</span>
                  </Link>
                  <Link to="/location-cloud" className="flex items-center justify-between px-4 py-2.5 rounded-xl text-sm font-bold text-zinc-600 hover:text-[#2d8cf0] hover:bg-[#2d8cf0]/5 transition-all group/item">
                    位置云服务 <span className="text-[10px] opacity-30 font-mono tracking-tighter">LBS</span>
                  </Link>
                  <Link to="/protection" className="flex items-center justify-between px-4 py-2.5 rounded-xl text-sm font-bold text-zinc-600 hover:text-[#2d8cf0] hover:bg-[#2d8cf0]/5 transition-all group/item">
                    麦联保驾 <span className="text-[10px] opacity-30 font-mono tracking-tighter">Care</span>
                  </Link>
                  <Link to="/jiluzhe" className="flex items-center justify-between px-4 py-2.5 rounded-xl text-sm font-bold text-zinc-600 hover:text-[#2d8cf0] hover:bg-[#2d8cf0]/5 transition-all group/item">
                    记路者 <span className="text-[10px] opacity-30 font-mono tracking-tighter">App</span>
                  </Link>
                </div>
              </div>
            </div>
            <a href="#" className="hover:text-[#2d8cf0] transition-colors">解决方案</a>
            <a href="#" className="hover:text-[#2d8cf0] transition-colors">开发者社区</a>
          </nav>
        </div>
        <div className="flex items-center gap-4">
          <button className="hidden md:flex items-center gap-2 rounded-lg border border-zinc-200 bg-zinc-50 px-3 py-1.5 text-sm text-zinc-500 hover:bg-zinc-100 transition-colors">
            <Search className="h-4 w-4" />
            <span>搜索文档...</span>
            <kbd className="hidden sm:inline-block ml-4 rounded bg-white px-1.5 py-0.5 text-[10px] font-medium border border-zinc-200">⌘K</kbd>
          </button>
          <div className="flex items-center gap-3 border-l border-zinc-200 pl-4 text-zinc-500">
            <a href="#" className="hover:text-[#2d8cf0] transition-colors"><Github className="h-4 w-4" /></a>
            <button className="hover:text-[#2d8cf0] transition-colors"><Sun className="h-4 w-4" /></button>
            <button className="ml-2 rounded-full bg-[#2d8cf0] px-4 py-1.5 text-xs font-semibold text-white hover:bg-[#2074d6] transition-colors">加入我们</button>
          </div>
        </div>
      </div>
    </header>
  );
}
