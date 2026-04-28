import { motion } from "motion/react";
import { 
  Car, 
  Video, 
  Smartphone, 
  Database, 
  LineChart, 
  Zap, 
  MapPin, 
  Share2, 
  Search,
  Activity,
  Box,
  Globe
} from "lucide-react";

export function CarBrandGraphic() {
  return (
    <div className="relative w-full h-full bg-zinc-900 flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 opacity-10 bg-[linear-gradient(rgba(45,140,240,0.2)_1px,transparent_1px),linear-gradient(90deg,rgba(45,140,240,0.2)_1px,transparent_1px)] bg-[size:16px_16px]" />
      <motion.div 
        animate={{ y: [0, -4, 0] }} 
        transition={{ duration: 4, repeat: Infinity }}
        className="relative z-10"
      >
        <Car className="w-20 h-20 text-[#2d8cf0]" />
        <div className="absolute -top-4 -right-4 flex items-center gap-1.5 px-2 py-1 bg-[#2d8cf0] rounded text-[8px] font-bold text-white shadow-xl shadow-[#2d8cf0]/20">
          <Zap className="w-2 h-2" /> LIVE_CONNECT
        </div>
      </motion.div>
      <div className="absolute bottom-6 flex gap-4">
        {[0, 1, 2].map(i => (
          <motion.div key={i} className="w-8 h-1 bg-[#2d8cf0]/20 rounded-full overflow-hidden">
            <motion.div className="h-full bg-[#2d8cf0]" animate={{ x: ['-100%', '100%'] }} transition={{ duration: 2, delay: i * 0.4, repeat: Infinity }} />
          </motion.div>
        ))}
      </div>
    </div>
  );
}

export function IPCameraGraphic() {
  return (
    <div className="relative w-full h-full bg-zinc-900 flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 opacity-5" style={{ backgroundImage: 'radial-gradient(#2d8cf0 1px, transparent 1px)', backgroundSize: '12px 12px' }} />
      <div className="relative p-6 border border-zinc-700 rounded-3xl bg-zinc-800/50 backdrop-blur-sm">
        <Video className="w-16 h-16 text-[#2d8cf0]" />
        <motion.div 
          className="absolute inset-0 rounded-3xl border-2 border-[#2d8cf0]/0"
          animate={{ borderColor: ['rgba(45,140,240,0)', 'rgba(45,140,240,0.3)', 'rgba(45,140,240,0)'] }}
          transition={{ duration: 2, repeat: Infinity }}
        />
      </div>
      <div className="absolute top-4 right-4 flex flex-col items-end gap-1">
        <div className="text-[6px] text-emerald-500 font-mono">STREAM: ON</div>
        <div className="text-[6px] text-zinc-500 font-mono">CODEC: H.265</div>
      </div>
    </div>
  );
}

export function MobileStreamGraphic() {
  return (
    <div className="relative w-full h-full bg-zinc-900 flex items-center justify-center overflow-hidden">
      <div className="w-24 h-44 border-4 border-zinc-700 rounded-[2rem] relative bg-zinc-950 p-2">
        <div className="w-full h-full border border-zinc-800 rounded-[1.5rem] overflow-hidden relative">
          <div className="absolute top-2 left-1/2 -translate-x-1/2 w-8 h-1 bg-zinc-800 rounded-full" />
          <div className="absolute inset-0 flex items-center justify-center">
            <Smartphone className="w-8 h-8 text-zinc-800" />
          </div>
          <motion.div 
            className="absolute bottom-4 left-4 right-4 h-12 bg-[#2d8cf0]/10 border border-[#2d8cf0]/20 rounded-lg flex items-center justify-center"
            animate={{ opacity: [0.3, 0.7, 0.3] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <Share2 className="w-4 h-4 text-[#2d8cf0]" />
          </motion.div>
        </div>
      </div>
    </div>
  );
}

export function DataPipelineGraphic() {
  return (
    <div className="relative w-full h-full bg-zinc-950 flex flex-col items-center justify-center p-12 overflow-hidden">
      <div className="w-full max-w-sm flex items-center justify-between relative">
        <div className="absolute inset-x-0 top-1/2 -translate-y-1/2 h-0.5 bg-zinc-800 border-dashed border-t border-zinc-700" />
        
        <div className="relative z-10 w-20 h-20 rounded-2xl bg-zinc-900 border border-zinc-800 flex items-center justify-center shadow-2xl">
          <Database className="w-8 h-8 text-zinc-500" />
        </div>
        
        <div className="flex-1 flex justify-around px-8">
          {[0, 1, 2].map(i => (
            <motion.div 
              key={i}
              className="w-2 h-2 rounded-full bg-[#2d8cf0] shadow-[0_0_10px_#2d8cf0]"
              initial={{ x: -100, opacity: 0 }}
              animate={{ x: 100, opacity: [0, 1, 0] }}
              transition={{ duration: 2, delay: i * 0.6, repeat: Infinity, ease: "linear" }}
            />
          ))}
        </div>

        <div className="relative z-10 w-20 h-20 rounded-2xl bg-[#2d8cf0]/10 border border-[#2d8cf0]/50 flex items-center justify-center shadow-2xl">
          <Share2 className="w-8 h-8 text-[#2d8cf0]" />
        </div>
      </div>
      <div className="mt-12 text-[8px] font-mono text-zinc-600 flex gap-4">
        <span>PUBSUB_V2_ACTIVE</span>
        <span className="text-emerald-500">TPS: 12,400</span>
      </div>
    </div>
  );
}

export function ScenarioDevGraphic() {
  return (
    <div className="relative w-full h-full bg-zinc-900 flex items-center justify-center overflow-hidden">
      <div className="grid grid-cols-2 gap-2 w-32">
        {[0, 1, 2, 3].map(i => (
          <motion.div 
            key={i} 
            className="aspect-square bg-zinc-800 border border-zinc-700 rounded-xl flex items-center justify-center p-2"
            whileHover={{ borderColor: '#2d8cf0', backgroundColor: 'rgba(45,140,240,0.05)' }}
          >
            {i === 0 && <Box className="w-6 h-6 text-zinc-600" />}
            {i === 1 && <Search className="w-6 h-6 text-zinc-600" />}
            {i === 2 && <Activity className="w-6 h-6 text-zinc-600" />}
            {i === 3 && <Zap className="w-6 h-6 text-[#2d8cf0]" />}
          </motion.div>
        ))}
      </div>
    </div>
  );
}

export function DataMiningGraphic() {
  return (
    <div className="relative w-full h-full bg-zinc-900 flex items-center justify-center overflow-hidden">
      <div className="w-40 h-40 relative">
        <svg className="w-full h-full" viewBox="0 0 100 100">
          <motion.circle 
            cx="50" cy="50" r="40" 
            stroke="#2d8cf0" strokeWidth="0.5" strokeDasharray="2 2" fill="none" opacity="0.2" 
          />
          <motion.path 
            d="M 20 50 Q 50 20 80 50 T 110 50" 
            stroke="#2d8cf0" strokeWidth="1" fill="none" opacity="0.3" 
            animate={{ pathOffset: [0, 1] }} 
            transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
          />
        </svg>
        <div className="absolute inset-0 flex items-center justify-center">
          <LineChart className="w-12 h-12 text-[#2d8cf0]" />
        </div>
      </div>
    </div>
  );
}

export function InteractiveControlGraphic() {
  return (
    <div className="relative w-full h-full bg-zinc-900 flex items-center justify-center overflow-hidden">
      <div className="relative">
        <div className="w-20 h-20 rounded-full border border-zinc-700 flex items-center justify-center">
          <MapPin className="w-10 h-10 text-zinc-600" />
        </div>
        <motion.div 
          className="absolute -top-6 -right-6 w-12 h-12 rounded-xl bg-[#2d8cf0] shadow-lg flex items-center justify-center"
          animate={{ scale: [1, 1.1, 1] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <Zap className="w-6 h-6 text-white" />
        </motion.div>
        <svg className="absolute inset-0 w-32 h-32 -left-6 -top-6 pointer-events-none overflow-visible">
          <motion.circle 
            cx="16" cy="16" r="48" 
            stroke="#2d8cf0" strokeWidth="0.5" fill="none" strokeDasharray="4 4" 
            animate={{ rotate: 360 }} 
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          />
        </svg>
      </div>
    </div>
  );
}
