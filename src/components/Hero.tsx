"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { GridOverlay } from "./GridOverlay";
import { Navigation } from "./Navigation";
import { ProjectGrid } from "./ProjectGrid";

export function Hero() {
  const [time, setTime] = useState("");

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      setTime(now.toLocaleTimeString("en-US", { hour12: false }));
    };
    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <main className="relative min-h-screen bg-[#050505] text-white overflow-hidden flex flex-col justify-between">
      <GridOverlay />
      <Navigation />

      {/* Main Content Area */}
      <div className="relative z-10 flex-grow flex flex-col justify-end px-8 mt-24 lg:mt-32 pb-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 w-full">
          
          {/* Main Title Area */}
          <div className="lg:col-span-8 flex flex-col justify-end">
             <div className="overflow-hidden">
                <motion.h1 
                  initial={{ y: "100%" }}
                  animate={{ y: 0 }}
                  transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
                  className="text-[15.5vw] leading-[0.8] font-medium tracking-tighter"
                >
                  RYLAN
                </motion.h1>
             </div>
             <div className="overflow-hidden">
                <motion.h1 
                  initial={{ y: "100%" }}
                  animate={{ y: 0 }}
                  transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
                  className="text-[15.5vw] leading-[0.8] font-medium tracking-tighter ml-[0.5vw]"
                >
                  PHILLIPS
                </motion.h1>
             </div>
          </div>

          {/* Right Side Info Area */}
          <div className="lg:col-span-4 flex flex-col justify-between h-full min-h-[30vh] lg:min-h-auto pt-8 lg:pt-24 pb-4">
             {/* Spacer / Top Info */}
             <div className="hidden lg:block"></div>

             {/* Role Info */}
             <motion.div 
               initial={{ opacity: 0 }}
               animate={{ opacity: 1 }}
               transition={{ duration: 1, delay: 0.5 }}
               className="font-mono text-sm tracking-widest text-neutral-400 uppercase flex flex-col gap-1"
             >
                <p>Designer &</p>
                <p>Developer</p>
             </motion.div>

             {/* Location & Time */}
             <motion.div 
               initial={{ opacity: 0 }}
               animate={{ opacity: 1 }}
               transition={{ duration: 1, delay: 0.6 }}
               className="font-mono text-sm tracking-widest text-neutral-400 uppercase flex flex-col gap-1 mt-8 lg:mt-auto"
             >
                <p>Vienna, At</p>
                <p>{time}</p>
             </motion.div>
          </div>
        </div>
      </div>

      <ProjectGrid />
    </main>
  );
}
