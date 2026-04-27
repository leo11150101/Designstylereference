import { motion, AnimatePresence } from "motion/react";
import { Cpu, Cloud, Server, Zap, ShieldCheck, Terminal as TerminalIcon, Globe, Lock, Share2 } from "lucide-react";

function GraphicFrame({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="relative w-full h-full bg-zinc-950 flex flex-col overflow-hidden font-mono border border-zinc-800 shadow-2xl">
      {/* Terminal Header */}
      <div className="flex items-center justify-between px-4 py-2 bg-zinc-900 border-b border-zinc-800 z-30">
        <div className="flex gap-1.5">
          <div className="w-2.5 h-2.5 rounded-full bg-red-500/50" />
          <div className="w-2.5 h-2.5 rounded-full bg-amber-500/50" />
          <div className="w-2.5 h-2.5 rounded-full bg-emerald-500/50" />
        </div>
        <div className="text-[10px] text-zinc-500 font-bold tracking-widest uppercase">
          {title}
        </div>
        <div className="w-12" /> {/* Spacer */}
      </div>

      {/* Background Dots */}
      <div className="absolute inset-0 z-0 opacity-[0.15]" 
           style={{ 
             backgroundImage: 'radial-gradient(#2d8cf0 0.5px, transparent 0.5px)', 
             backgroundSize: '24px 24px' 
           }} />

      <div className="relative flex-1 z-10">
        {children}
      </div>
    </div>
  );
}

export function DeviceAccessGraphic() {
  return (
    <GraphicFrame title="DEVICE_PROTOCOL_STACK">
      <div className="absolute inset-0 flex items-center justify-around px-8">
        
        {/* Left: Device Schematic */}
        <div className="relative flex flex-col items-center gap-4">
          <motion.div 
            className="w-32 h-44 rounded-xl border border-zinc-700 bg-zinc-900/80 backdrop-blur-md relative overflow-hidden p-3"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
          >
            <div className="absolute inset-0 opacity-10 bg-[linear-gradient(rgba(45,140,240,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(45,140,240,0.1)_1px,transparent_1px)] bg-[size:10px_10px]" />
            
            <div className="flex justify-between items-start mb-4">
              <Cpu className="w-5 h-5 text-[#2d8cf0]" />
              <div className="text-[8px] text-emerald-500 animate-pulse">● LIVE</div>
            </div>
            
            <div className="space-y-2">
              <div className="h-1 w-full bg-zinc-800 rounded-full overflow-hidden">
                <motion.div 
                  className="h-full bg-[#2d8cf0]"
                  animate={{ width: ["20%", "80%", "45%"] }}
                  transition={{ duration: 3, repeat: Infinity }}
                />
              </div>
              <div className="h-1 w-2/3 bg-zinc-800 rounded-full overflow-hidden">
                <motion.div 
                  className="h-full bg-zinc-600"
                  animate={{ width: ["40%", "10%", "60%"] }}
                  transition={{ duration: 4, repeat: Infinity }}
                />
              </div>
            </div>

            <div className="mt-6 space-y-1">
              <div className="text-[7px] text-zinc-500 uppercase">Chipset: MTK-8665</div>
              <div className="text-[7px] text-zinc-500 uppercase">Kernel: MLink-v4</div>
              <div className="text-[7px] text-zinc-500 uppercase">Auth: AES-256</div>
            </div>

            <div className="absolute bottom-3 right-3">
              <Lock className="w-3 h-3 text-zinc-700" />
            </div>
          </motion.div>
          <span className="text-[9px] text-zinc-500 font-bold tracking-widest uppercase">Hardware Edge</span>
        </div>

        {/* Center: Protocol Bridge */}
        <div className="relative flex flex-col items-center justify-center h-full flex-1 max-w-[120px]">
          <svg className="w-full h-32 overflow-visible">
            <defs>
              <marker id="arrow" markerWidth="10" markerHeight="10" refX="8" refY="3" orient="auto" markerUnits="strokeWidth">
                <path d="M0,0 L0,6 L9,3 z" fill="#2d8cf0" />
              </marker>
            </defs>
            <motion.path 
              d="M 0 64 H 120" 
              stroke="#2d8cf0" 
              strokeWidth="1.5" 
              strokeDasharray="4 6"
              fill="none"
              animate={{ strokeDashoffset: [0, -20] }}
              transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
            />
            {/* Packet Animation */}
            <AnimatePresence>
              {[0, 1].map((i) => (
                <motion.circle
                  key={i}
                  r="3"
                  fill="#2d8cf0"
                  initial={{ cx: 0, cy: 64, opacity: 0 }}
                  animate={{ cx: 120, opacity: [0, 1, 1, 0] }}
                  transition={{ 
                    duration: 2, 
                    repeat: Infinity, 
                    delay: i * 1,
                    ease: "easeInOut" 
                  }}
                  className="shadow-[0_0_10px_#2d8cf0]"
                />
              ))}
            </AnimatePresence>
          </svg>
          <div className="absolute px-2 py-1 bg-zinc-900 border border-zinc-800 rounded text-[8px] text-[#2d8cf0] font-bold shadow-xl">
            JT/T808 STACK
          </div>
        </div>

        {/* Right: Cloud Platform Interface */}
        <div className="relative flex flex-col items-center gap-4">
          <motion.div 
            className="w-32 h-44 rounded-xl border border-[#2d8cf0]/30 bg-zinc-900/80 backdrop-blur-md relative overflow-hidden p-3"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
          >
            <div className="absolute top-0 right-0 w-16 h-16 bg-[#2d8cf0]/5 rounded-full blur-xl" />
            
            <div className="flex justify-between items-start mb-4">
              <Server className="w-5 h-5 text-[#2d8cf0]" />
              <ShieldCheck className="w-4 h-4 text-emerald-500/50" />
            </div>

            <div className="space-y-3">
              {[0, 1, 2].map((i) => (
                <div key={i} className="space-y-1">
                  <div className="flex justify-between text-[6px] text-zinc-500">
                    <span>NODE_SZ_0{i+1}</span>
                    <span>99%</span>
                  </div>
                  <div className="h-0.5 w-full bg-zinc-800 rounded-full">
                    <motion.div 
                      className="h-full bg-emerald-500"
                      initial={{ width: "0%" }}
                      animate={{ width: "95%" }}
                      transition={{ delay: 0.5 + i * 0.2, duration: 1 }}
                    />
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-8">
              <div className="text-[7px] text-zinc-400 font-bold mb-1">REALTIME_LOGS</div>
              <div className="text-[5px] text-zinc-600 font-mono leading-tight">
                {`> ACK_RECEIVED`}<br />
                {`> POS_UPDATE_OK`}<br />
                {`> SESSION_ACTIVE`}
              </div>
            </div>
          </motion.div>
          <span className="text-[9px] text-[#2d8cf0] font-bold tracking-widest uppercase">MLink Cloud</span>
        </div>

      </div>

      {/* Decorative Overlays */}
      <div className="absolute bottom-4 left-4 text-[7px] text-zinc-700 uppercase tracking-tighter">
        Connection: Encrypted (TLS 1.3) <br />
        Protocol: JT/T808, JT/T1078
      </div>
    </GraphicFrame>
  );
}

export function CloudAccessGraphic() {
  return (
    <GraphicFrame title="CLOUD_INTERCONNECT_API">
      <div className="absolute inset-0 flex flex-col items-center justify-center p-8">
        
        <div className="relative w-full max-w-md flex items-center justify-between">
          
          {/* Connector SVG - Full Width within max-w-md */}
          <div className="absolute inset-0 z-0 pointer-events-none">
            <svg className="w-full h-full overflow-visible" viewBox="0 0 400 160">
              <defs>
                <linearGradient id="gradBlue" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="transparent" />
                  <stop offset="50%" stopColor="#2d8cf0" />
                  <stop offset="100%" stopColor="transparent" />
                </linearGradient>
              </defs>
              
              {/* Top Path: Partner -> MLink */}
              <motion.path 
                d="M 40 80 C 100 20, 300 20, 360 80" 
                stroke="url(#gradBlue)" 
                strokeWidth="1.5" 
                fill="none" 
                strokeDasharray="5 5"
                initial={{ pathLength: 0, opacity: 0 }}
                animate={{ pathLength: 1, opacity: 0.3 }}
                transition={{ duration: 2, repeat: Infinity }}
              />
              
              {/* Bottom Path: MLink -> Partner */}
              <motion.path 
                d="M 360 80 C 300 140, 100 140, 40 80" 
                stroke="url(#gradBlue)" 
                strokeWidth="1.5" 
                fill="none" 
                strokeDasharray="5 5"
                initial={{ pathLength: 0, opacity: 0 }}
                animate={{ pathLength: 1, opacity: 0.3 }}
                transition={{ duration: 2, repeat: Infinity, delay: 1 }}
              />

              {/* Data Packet Along Top Path */}
              <motion.circle
                r="3"
                fill="#2d8cf0"
                className="shadow-[0_0_10px_#2d8cf0]"
              >
                <animateMotion 
                  dur="2.5s" 
                  repeatCount="indefinite" 
                  path="M 40 80 C 100 20, 300 20, 360 80"
                  calcMode="spline"
                  keySplines="0.42 0 0.58 1"
                />
              </motion.circle>

              {/* Data Packet Along Bottom Path */}
              <motion.circle
                r="3"
                fill="#10b981"
                className="shadow-[0_0_10px_#10b981]"
              >
                <animateMotion 
                  dur="2.5s" 
                  begin="1.25s"
                  repeatCount="indefinite" 
                  path="M 360 80 C 300 140, 100 140, 40 80"
                  calcMode="spline"
                  keySplines="0.42 0 0.58 1"
                />
              </motion.circle>
            </svg>
          </div>

          {/* Left: Partner Cloud */}
          <motion.div 
            className="flex flex-col items-center gap-2 z-10 w-20"
            whileHover={{ y: -5 }}
          >
            <div className="w-16 h-16 rounded-2xl border border-zinc-800 bg-zinc-900 flex items-center justify-center shadow-2xl">
              <Globe className="w-6 h-6 text-zinc-600" />
            </div>
            <span className="text-[8px] font-bold text-zinc-600 uppercase tracking-widest">Partner</span>
          </motion.div>

          {/* Center Method Tag */}
          <motion.div 
            className="z-20 px-2 py-0.5 rounded bg-[#2d8cf0]/10 border border-[#2d8cf0]/20 text-[6px] text-[#2d8cf0] font-bold"
            animate={{ opacity: [0.5, 1, 0.5] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            POST /v1/data/sync
          </motion.div>

          {/* Right: MLink Cloud */}
          <motion.div 
            className="flex flex-col items-center gap-2 z-10 w-20"
            whileHover={{ y: -5 }}
          >
            <div className="w-16 h-16 rounded-2xl border border-[#2d8cf0]/50 bg-[#2d8cf0]/10 flex items-center justify-center relative shadow-2xl shadow-[#2d8cf0]/10">
              <Share2 className="w-6 h-6 text-[#2d8cf0]" />
              <div className="absolute -top-1 -right-1 w-4 h-4 rounded bg-[#2d8cf0] flex items-center justify-center">
                <Zap className="w-2 h-2 text-white" />
              </div>
            </div>
            <span className="text-[8px] font-bold text-[#2d8cf0] uppercase tracking-widest">MLink</span>
          </motion.div>

        </div>

        {/* Bottom Feature Cards */}
        <div className="grid grid-cols-3 gap-3 w-full mt-12 px-4">
          {[
            { label: 'Latency', value: '18ms', icon: <Zap className="w-2.5 h-2.5" /> },
            { label: 'Security', value: 'OAuth 2.0', icon: <Lock className="w-2.5 h-2.5" /> },
            { label: 'Throughput', value: '25k rps', icon: <Server className="w-2.5 h-2.5" /> },
          ].map((stat, idx) => (
            <div key={idx} className="p-2 rounded-lg border border-zinc-800 bg-zinc-900/30 flex flex-col gap-1">
              <div className="flex items-center gap-1.5 text-zinc-600">
                {stat.icon}
                <span className="text-[6px] uppercase font-bold tracking-wider">{stat.label}</span>
              </div>
              <div className="text-[8px] text-zinc-300 font-bold">{stat.value}</div>
            </div>
          ))}
        </div>

      </div>
    </GraphicFrame>
  );
}
