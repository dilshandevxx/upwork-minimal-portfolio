"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { GridOverlay } from "./GridOverlay";
import { ProjectGrid } from "./ProjectGrid";
import Link from "next/link";
import { cn } from "@/lib/utils";

const navItems = [
  { name: "[ WORK ]", href: "#work", active: true },
  { name: "INFO", href: "#info" },
  { name: "ARCHIVE", href: "#archive" },
];

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
    <main className="relative h-screen w-screen bg-[#050505] text-[#e5e5e5] overflow-hidden flex flex-col justify-between p-[1.5vw]">
      <GridOverlay />

      {/* --- TOP ROW: Header/Nav --- */}
      <header className="relative z-50 flex justify-between items-start font-mono text-[0.8vw] tracking-[0.15em] uppercase text-neutral-400">
        <div className="flex flex-col">
          <span className="text-[#e5e5e5] font-semibold">RYLAN PHILLIPS</span>
        </div>

        <nav className="flex gap-[3vw]">
          {navItems.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className={cn(
                "hover:text-white transition-colors duration-300",
                item.active && "text-[#ccff00]"
              )}
            >
              {item.name}
            </Link>
          ))}
        </nav>
      </header>


      {/* --- MIDDLE ROW: Main Title + Info --- */}
      <div className="relative z-10 flex-grow w-full flex flex-col justify-center">
        <div className="w-full grid grid-cols-5 h-fit items-end">
            
            {/* Title Area (Col 1-3) */}
            <div className="col-span-3 flex flex-col leading-[0.8] mix-blend-difference">
                <motion.h1 
                  initial={{ y: "100%" }}
                  animate={{ y: 0 }}
                  transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
                  className="text-[14vw] font-medium tracking-[-0.04em] text-white block overflow-hidden"
                >
                  RYLAN
                </motion.h1>
                <motion.h1 
                  initial={{ y: "100%" }}
                  animate={{ y: 0 }}
                  transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
                  className="text-[14vw] font-medium tracking-[-0.04em] text-white block overflow-hidden ml-[0.5vw]"
                >
                  PHILLIPS
                </motion.h1>
            </div>

            {/* Info Area (Col 4) */}
            <div className="col-span-1 pl-4 pb-4 flex flex-col justify-end">
                 <div className="font-mono text-[0.7vw] tracking-[0.15em] text-neutral-400 uppercase flex flex-col gap-[0.2vw]">
                    <p className="text-[#e5e5e5]">DESIGNER &</p>
                    <p className="text-[#e5e5e5]">DEVELOPER</p>
                 </div>
            </div>

            {/* Info Area (Col 5) */}
            <div className="col-span-1 pl-4 pb-4 flex flex-col justify-end">
                 <div className="font-mono text-[0.7vw] tracking-[0.15em] text-neutral-400 uppercase flex flex-col gap-[0.2vw]">
                    <p className="text-[#e5e5e5]">VIENNA, AT</p>
                    <p className="text-[#e5e5e5]">{time}</p>
                 </div>
            </div>

        </div>
      </div>


      {/* --- BOTTOM ROW: Project Grid --- */}
      <div className="relative z-10 w-full h-[25vh] pb-[1vh]">
        <ProjectGrid />
      </div>

    </main>
  );
}
