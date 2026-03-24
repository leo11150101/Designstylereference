import { Search, Github, Sun, Command } from 'lucide-react';

export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-zinc-200 bg-white/90 backdrop-blur-sm">
      <div className="mx-auto flex h-14 max-w-7xl items-center justify-between px-6">
        <div className="flex items-center gap-8">
          <a href="#" className="flex items-center gap-2 font-bold text-zinc-900">
            <div className="flex h-6 w-6 items-center justify-center rounded bg-zinc-900 text-white">
              <Command className="h-4 w-4" />
            </div>
            <span>麦谷智云</span>
          </a>
          <nav className="hidden md:flex items-center gap-6 text-sm font-medium text-zinc-500">
            <a href="#" className="text-[#2d8cf0]">开放平台</a>
            <a href="#" className="hover:text-[#2d8cf0] transition-colors">开发文档</a>
            <a href="#" className="hover:text-[#2d8cf0] transition-colors">解决方案</a>
            <a href="#" className="hover:text-[#2d8cf0] transition-colors">博客</a>
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
          </div>
        </div>
      </div>
    </header>
  );
}