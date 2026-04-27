import { motion } from "motion/react";
import { Video, Activity, Globe, Cpu, Database, MapPin, Shield } from "lucide-react";

interface TechGraphicProps {
  type: string;
}

export function TechGraphic({ type }: TechGraphicProps) {
  switch (type) {
    case "mrts":
      return <MRTSGraphic />;
    case "mlink":
      return <MLinkGraphic />;
    case "ai":
      return <AIGraphic />;
    case "lbs":
      return <LBSGraphic />;
    case "cloud-plus":
      return <CloudGraphic />;
    case "hero-0":
      return <HeroNetworkGraphic />;
    case "hero-1":
      return <HeroDataGraphic />;
    case "hero-2":
      return <HeroOSGraphic />;
    default:
      return <div className="w-full h-full bg-zinc-900 rounded-2xl" />;
  }
}

function HeroNetworkGraphic() {
  return (
    <div className="relative w-full h-full bg-white overflow-hidden flex items-center justify-center">
      <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'radial-gradient(#2d8cf0 1.5px, transparent 1.5px)', backgroundSize: '40px 40px' }} />
      <motion.div 
        className="relative w-[600px] h-[600px]"
        animate={{ rotate: 360 }}
        transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
      >
        <div className="absolute inset-0 border border-[#2d8cf0]/20 rounded-full" />
        <div className="absolute inset-20 border border-[#2d8cf0]/15 rounded-full" />
        <div className="absolute inset-40 border border-[#2d8cf0]/10 rounded-full" />
      </motion.div>
      <div className="absolute flex flex-col items-center gap-4 opacity-20">
        <Globe className="w-32 h-32 text-[#2d8cf0]" />
        <div className="h-[2px] w-48 bg-linear-to-r from-transparent via-[#2d8cf0] to-transparent" />
      </div>
    </div>
  );
}

function HeroDataGraphic() {
  return (
    <div className="relative w-full h-full bg-white overflow-hidden flex items-center justify-center">
      <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'linear-gradient(45deg, #2d8cf0 1px, transparent 1px), linear-gradient(-45deg, #2d8cf0 1px, transparent 1px)', backgroundSize: '60px 60px' }} />
      <div className="flex gap-12 opacity-20">
        {[0, 1, 2, 3, 4].map((i) => (
          <motion.div 
            key={i}
            className="w-[1px] h-64 bg-linear-to-b from-transparent via-[#2d8cf0] to-transparent"
            animate={{ opacity: [0.3, 1, 0.3], scaleY: [0.8, 1.2, 0.8] }}
            transition={{ delay: i * 0.2, duration: 2, repeat: Infinity }}
          />
        ))}
      </div>
    </div>
  );
}

function HeroOSGraphic() {
  return (
    <div className="relative w-full h-full bg-white overflow-hidden flex items-center justify-center">
      <div className="absolute inset-0 opacity-[0.05]" style={{ backgroundImage: 'linear-gradient(#2d8cf0 1px, transparent 1px), linear-gradient(to right, #2d8cf0 1px, transparent 1px)', backgroundSize: '100px 100px' }} />
      <div className="relative opacity-20">
        <Cpu className="w-64 h-64 text-[#2d8cf0]" />
        <motion.div 
          className="absolute inset-0 border-2 border-[#2d8cf0] rounded-xl"
          animate={{ scale: [1, 1.1, 1], opacity: [0.5, 0.2, 0.5] }}
          transition={{ duration: 4, repeat: Infinity }}
        />
      </div>
    </div>
  );
}

function GridBackground() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-20">
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#2d8cf0_1px,transparent_1px),linear-gradient(to_bottom,#2d8cf0_1px,transparent_1px)] bg-[size:40px_40px]" />
    </div>
  );
}

function MRTSGraphic() {
  return (
    <div className="relative w-full h-full bg-zinc-950 rounded-2xl overflow-hidden flex items-center justify-center font-mono text-xs">
      <GridBackground />
      
      {/* Header Info */}
      <div className="absolute top-6 left-6 flex items-center gap-2">
        <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
        <span className="text-zinc-100 font-bold uppercase tracking-widest">MRTS_CORE // LIVE_STREAM</span>
      </div>
      <div className="absolute top-10 left-10 text-[8px] text-zinc-500">
        NODE: CLUSTER_SZ_04 // RTC_MODE
      </div>

      <div className="absolute top-6 right-6 flex gap-8">
        <div className="text-center">
          <div className="text-zinc-500 text-[10px] mb-1">FPS</div>
          <div className="text-zinc-100 font-bold">60.0</div>
        </div>
        <div className="text-center">
          <div className="text-zinc-500 text-[10px] mb-1">LATENCY</div>
          <div className="text-[#2d8cf0] font-bold">82ms</div>
        </div>
      </div>

      {/* Center Camera Icon with Circles */}
      <div className="relative">
        <motion.div 
          className="absolute inset-0 border border-[#2d8cf0]/30 rounded-full"
          animate={{ scale: [1, 1.5], opacity: [0.5, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        />
        <div className="relative w-24 h-24 rounded-full border border-zinc-800 flex items-center justify-center bg-zinc-900/50 backdrop-blur-sm">
          <Video className="w-8 h-8 text-[#2d8cf0]" />
          
          {/* Rotating dot */}
          <motion.div 
            className="absolute inset-0"
            animate={{ rotate: 360 }}
            transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
          >
            <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-1.5 h-1.5 rounded-full bg-[#2d8cf0] shadow-[0_0_8px_#2d8cf0]" />
          </motion.div>
        </div>
      </div>

      {/* Footer Info */}
      <div className="absolute bottom-6 left-6 flex gap-8">
        <div>
          <div className="text-zinc-500 text-[10px] mb-1">BITRATE</div>
          <div className="text-zinc-100 font-bold">4.52 <span className="text-zinc-500 text-[8px] font-normal">Mbps</span></div>
        </div>
        <div>
          <div className="text-zinc-500 text-[10px] mb-1">CODEC</div>
          <div className="text-zinc-100 font-bold">H.265 <span className="text-zinc-500 text-[8px] font-normal">HEVC</span></div>
        </div>
      </div>

      {/* Random Dots */}
      <div className="absolute top-1/4 left-1/4 w-1 h-1 rounded-full bg-zinc-600" />
      <div className="absolute bottom-1/3 right-1/4 w-1 h-1 rounded-full bg-zinc-600" />
      <div className="absolute top-1/2 right-1/6 w-1 h-1 rounded-full bg-zinc-600" />
    </div>
  );
}

function MLinkGraphic() {
  return (
    <div className="relative w-full h-full bg-zinc-950 rounded-2xl overflow-hidden flex items-center justify-center font-mono text-xs text-zinc-400">
      <GridBackground />
      <div className="absolute top-6 left-6 text-zinc-100 font-bold tracking-widest uppercase">MLink_OS // KERNEL</div>
      <div className="w-48 h-32 border border-zinc-800 rounded-lg p-3 bg-zinc-900/40 relative">
        <div className="flex justify-between mb-4">
          <Cpu className="w-4 h-4 text-[#2d8cf0]" />
          <div className="flex gap-1">
            <div className="w-1 h-3 bg-[#2d8cf0]/40 rounded-full" />
            <div className="w-1 h-3 bg-[#2d8cf0] rounded-full" />
            <div className="w-1 h-3 bg-[#2d8cf0]/20 rounded-full" />
          </div>
        </div>
        <div className="space-y-2">
          <div className="h-1 w-full bg-zinc-800 rounded-full overflow-hidden">
            <motion.div 
              className="h-full bg-[#2d8cf0]"
              animate={{ width: ["10%", "85%", "40%"] }}
              transition={{ duration: 3, repeat: Infinity }}
            />
          </div>
          <div className="h-1 w-full bg-zinc-800 rounded-full overflow-hidden">
            <motion.div 
              className="h-full bg-emerald-500"
              animate={{ width: ["30%", "60%", "20%"] }}
              transition={{ duration: 4, repeat: Infinity }}
            />
          </div>
        </div>
        <div className="mt-4 text-[8px] opacity-50 overflow-hidden whitespace-nowrap">
          {`> Loading stack... OK`} <br />
          {`> Mounting filesystem... OK`} <br />
          {`> Protocol MQTT 3.1.1 active`}
        </div>
      </div>
    </div>
  );
}

function AIGraphic() {
  return (
    <div className="relative w-full h-full bg-zinc-950 rounded-2xl overflow-hidden flex items-center justify-center font-mono text-xs">
      <GridBackground />
      <div className="absolute top-6 left-6 text-zinc-100 font-bold tracking-widest uppercase">AI_ENGINE // VISION</div>
      
      <div className="relative w-48 h-48 border border-zinc-800 flex items-center justify-center">
        <div className="absolute inset-0 bg-linear-to-b from-[#2d8cf0]/5 to-transparent" />
        <Shield className="w-12 h-12 text-[#2d8cf0] opacity-50" />
        
        {/* Scanning line */}
        <motion.div 
          className="absolute top-0 left-0 w-full h-[1px] bg-[#2d8cf0] shadow-[0_0_10px_#2d8cf0]"
          animate={{ top: ["0%", "100%", "0%"] }}
          transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
        />
        
        {/* Detection box */}
        <motion.div 
          className="absolute border-2 border-emerald-500/50"
          animate={{ 
            top: ["20%", "40%", "25%"],
            left: ["30%", "50%", "35%"],
            width: ["40px", "60px", "45px"],
            height: ["30px", "50px", "35px"]
          }}
          transition={{ duration: 5, repeat: Infinity }}
        >
          <span className="absolute -top-4 left-0 text-[8px] bg-emerald-500 text-white px-1">PLATE_042</span>
        </motion.div>
      </div>
    </div>
  );
}

function LBSGraphic() {
  return (
    <div className="relative w-full h-full bg-zinc-950 rounded-2xl overflow-hidden flex items-center justify-center font-mono text-xs">
      <GridBackground />
      <div className="absolute top-6 left-6 text-zinc-100 font-bold tracking-widest uppercase">LBS_GEO // GLOBAL</div>
      
      <div className="relative w-64 h-40 opacity-50">
        <Globe className="w-full h-full text-zinc-800" />
        <motion.div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
          animate={{ scale: [1, 1.2, 1] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <MapPin className="w-6 h-6 text-[#2d8cf0]" />
        </motion.div>
        
        {/* Connections */}
        <svg className="absolute inset-0 w-full h-full pointer-events-none">
          <motion.path 
            d="M 50 80 Q 120 20 200 100" 
            stroke="#2d8cf0" 
            strokeWidth="1" 
            fill="none" 
            strokeDasharray="4 2"
            animate={{ strokeDashoffset: [20, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
          />
        </svg>
      </div>
    </div>
  );
}

function CloudGraphic() {
  return (
    <div className="relative w-full h-full bg-zinc-950 rounded-2xl overflow-hidden flex items-center justify-center font-mono text-xs">
      <GridBackground />
      <div className="absolute top-6 left-6 text-zinc-100 font-bold tracking-widest uppercase">CLOUD_SYNC // VAULT</div>
      
      <div className="flex flex-col items-center gap-4">
        <Database className="w-16 h-16 text-[#2d8cf0]" />
        <div className="flex gap-2">
          {[0, 1, 2].map((i) => (
            <motion.div 
              key={i}
              className="w-2 h-2 bg-zinc-800 rounded-full"
              animate={{ backgroundColor: ["#27272a", "#2d8cf0", "#27272a"] }}
              transition={{ delay: i * 0.3, duration: 1, repeat: Infinity }}
            />
          ))}
        </div>
        <div className="text-[10px] text-zinc-500 uppercase tracking-tighter">Synchronizing encrypted packets...</div>
      </div>
    </div>
  );
}
