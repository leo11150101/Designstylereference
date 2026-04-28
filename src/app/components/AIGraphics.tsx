import { motion } from "motion/react";
import { ShieldCheck, Eye, Activity, User, Car, Lock, Search, AlertCircle, Bell, Video } from "lucide-react";

export function DataMaskingGraphic() {
  return (
    <div className="relative w-full h-full flex items-center justify-center bg-zinc-950 overflow-hidden font-mono">
      {/* Scanning Grid */}
      <div className="absolute inset-0 opacity-10 bg-[linear-gradient(rgba(45,140,240,0.2)_1px,transparent_1px),linear-gradient(90deg,rgba(45,140,240,0.2)_1px,transparent_1px)] bg-[size:20px_20px]" />
      
      <div className="relative w-[80%] aspect-video border border-zinc-800 rounded-lg bg-zinc-900/50 backdrop-blur-sm p-4 overflow-hidden">
        {/* Viewport UI */}
        <div className="absolute top-2 left-2 flex gap-1">
          <div className="w-1 h-1 rounded-full bg-red-500 animate-pulse" />
          <div className="text-[6px] text-zinc-500 uppercase tracking-tighter">REC // 4K 60FPS</div>
        </div>

        {/* Mock Car with Data Masking */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="relative w-48 h-24 border border-zinc-800 rounded-lg flex items-center justify-center">
            <Car className="w-12 h-12 text-zinc-700" />
            
            {/* Masking Overlays */}
            <motion.div 
              className="absolute top-4 left-6 w-8 h-8 bg-[#2d8cf0]/20 border border-[#2d8cf0]/40 flex items-center justify-center backdrop-blur-sm"
              animate={{ opacity: [0.5, 1, 0.5] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <div className="text-[4px] text-[#2d8cf0] font-bold">FACE_MSK</div>
              <motion.div className="absolute inset-0 bg-[#2d8cf0]/10" animate={{ scale: [1, 1.2, 1], opacity: [0, 0.5, 0] }} transition={{ duration: 1.5, repeat: Infinity }} />
            </motion.div>

            <motion.div 
              className="absolute bottom-6 right-6 w-12 h-4 bg-zinc-900 border border-zinc-700 flex items-center justify-center"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
            >
              <div className="w-full h-full bg-zinc-800/80 flex items-center justify-center px-1">
                <div className="h-0.5 w-full bg-zinc-700 rounded-full overflow-hidden">
                  <motion.div className="h-full bg-[#2d8cf0]" animate={{ width: ["0%", "100%"] }} transition={{ duration: 0.5, repeat: Infinity, repeatDelay: 1 }} />
                </div>
              </div>
              <div className="absolute -top-3 right-0 text-[4px] text-emerald-500 font-bold">PLATE_BLURRED</div>
            </motion.div>
          </div>
        </div>

        {/* Floating Code Snippets */}
        <div className="absolute bottom-2 left-2 space-y-0.5">
          <div className="text-[5px] text-emerald-500/60 font-mono leading-none">{"> analyze_frame(stream_01)"}</div>
          <div className="text-[5px] text-[#2d8cf0]/60 font-mono leading-none">{"> detect_objects: 1 car, 1 face"}</div>
          <div className="text-[5px] text-zinc-600 font-mono leading-none">{"> apply_mask: aes_iv_vector"}</div>
        </div>
      </div>
    </div>
  );
}

export function DSMGraphic() {
  return (
    <div className="relative w-full h-full flex items-center justify-center bg-zinc-950 overflow-hidden font-mono">
      <div className="absolute inset-0 opacity-[0.05]" style={{ backgroundImage: 'radial-gradient(#2d8cf0 1px, transparent 1px)', backgroundSize: '16px 16px' }} />
      
      <div className="relative w-48 h-48 border border-zinc-800 rounded-full flex items-center justify-center">
        {/* Radar Rings */}
        {[1, 2, 3].map((i) => (
          <motion.div
            key={i}
            className="absolute border border-[#2d8cf0]/20 rounded-full"
            style={{ width: `${i * 33}%`, height: `${i * 33}%` }}
            animate={{ opacity: [0.1, 0.3, 0.1], scale: [1, 1.02, 1] }}
            transition={{ duration: 3, delay: i, repeat: Infinity }}
          />
        ))}

        <div className="relative z-10 flex flex-col items-center">
          <motion.div
            animate={{ scale: [1, 1.05, 1] }}
            transition={{ duration: 4, repeat: Infinity }}
          >
            <User className="w-12 h-12 text-[#2d8cf0]" />
          </motion.div>
          <div className="mt-2 px-2 py-0.5 bg-[#2d8cf0]/10 border border-[#2d8cf0]/30 rounded text-[7px] text-[#2d8cf0] font-bold">
            DRIVER_SCAN: ACTIVE
          </div>
        </div>

        {/* Status Indicators */}
        <div className="absolute top-4 right-4 text-right">
          <div className="flex items-center gap-1 justify-end">
            <span className="text-[6px] text-zinc-500 font-bold">EYE_CLOSURE</span>
            <div className="w-8 h-1 bg-zinc-800 rounded-full overflow-hidden">
              <motion.div className="h-full bg-emerald-500" animate={{ width: ["10%", "30%", "15%"] }} transition={{ duration: 2, repeat: Infinity }} />
            </div>
          </div>
          <div className="flex items-center gap-1 justify-end mt-1">
            <span className="text-[6px] text-zinc-500 font-bold">FATIGUE_LVL</span>
            <div className="w-8 h-1 bg-zinc-800 rounded-full overflow-hidden">
              <motion.div className="h-full bg-[#2d8cf0]" animate={{ width: ["5%", "15%", "8%"] }} transition={{ duration: 3, repeat: Infinity }} />
            </div>
          </div>
        </div>

        {/* Alerts */}
        <motion.div 
          className="absolute bottom-8 left-0 right-0 flex justify-center"
          animate={{ y: [0, -2, 0], opacity: [0.3, 1, 0.3] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <div className="flex items-center gap-1 text-[5px] text-amber-500 bg-amber-500/5 px-2 py-1 border border-amber-500/20 rounded-full uppercase tracking-widest font-bold">
            <Bell className="w-2 h-2" /> Smoking Detected
          </div>
        </motion.div>
      </div>
    </div>
  );
}

export function ADASGraphic() {
  return (
    <div className="relative w-full h-full bg-zinc-950 flex flex-col items-center justify-center p-8 overflow-hidden font-mono">
      {/* Road Perspective */}
      <div className="relative w-full h-40 border-b-2 border-zinc-800 flex justify-center items-end">
        <svg className="absolute inset-0 w-full h-full opacity-30" viewBox="0 0 400 160">
          <path d="M150 160 L180 0 M250 160 L220 0" stroke="white" strokeWidth="0.5" strokeDasharray="4 4" />
          <path d="M0 160 L180 80 M400 160 L220 80" stroke="#2d8cf0" strokeWidth="0.5" opacity="0.2" />
        </svg>

        {/* Lead Car */}
        <motion.div 
          className="relative z-10 mb-4"
          animate={{ y: [0, -2, 0], scale: [1, 0.98, 1] }}
          transition={{ duration: 4, repeat: Infinity }}
        >
          <div className="w-24 h-12 bg-zinc-900 border border-zinc-700 rounded-lg flex items-center justify-center relative">
            <Car className="w-8 h-8 text-zinc-600" />
            
            {/* Distance Tag */}
            <div className="absolute -top-8 left-1/2 -translate-x-1/2 flex flex-col items-center">
              <div className="text-[6px] text-emerald-500 font-bold px-1.5 py-0.5 border border-emerald-500/30 rounded bg-emerald-500/5">
                DIST: 24.5m
              </div>
              <div className="w-[1px] h-3 bg-emerald-500/50" />
            </div>
          </div>
        </motion.div>

        {/* Warning Lines */}
        <div className="absolute inset-x-0 bottom-4 h-24 overflow-hidden pointer-events-none">
          <motion.div 
            className="w-full h-full bg-[repeating-linear-gradient(90deg,transparent,transparent_20px,rgba(45,140,240,0.05)_20px,rgba(45,140,240,0.05)_40px)]"
            animate={{ x: [0, -40] }}
            transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
          />
        </div>
      </div>

      {/* Control Interface */}
      <div className="mt-6 w-full max-w-sm grid grid-cols-3 gap-2">
        {['LDW', 'FCW', 'PCW'].map((type) => (
          <div key={type} className="p-2 border border-zinc-800 bg-zinc-900/50 rounded flex flex-col items-center gap-1">
            <div className="text-[5px] text-zinc-500 font-bold uppercase tracking-widest">{type}</div>
            <div className="w-full h-0.5 bg-zinc-800 rounded-full overflow-hidden">
              <motion.div 
                className={`h-full ${type === 'FCW' ? 'bg-amber-500' : 'bg-[#2d8cf0]'}`} 
                animate={{ opacity: [0.5, 1, 0.5] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              />
            </div>
            <div className="text-[6px] text-zinc-400 font-bold">ENABLED</div>
          </div>
        ))}
      </div>

      {/* HUD Info */}
      <div className="absolute top-4 left-4 flex items-center gap-2">
        <Activity className="w-3 h-3 text-[#2d8cf0]" />
        <span className="text-[6px] text-zinc-500 font-bold uppercase tracking-widest">System Engine V4.2</span>
      </div>
    </div>
  );
}
