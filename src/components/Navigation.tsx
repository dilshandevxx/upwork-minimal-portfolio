"use client";

import Link from "next/link";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

const navItems = [
  { name: "[ WORK ]", href: "#work", active: true },
  { name: "INFO", href: "#info" },
  { name: "ARCHIVE", href: "#archive" },
];

export function Navigation() {
  return (
    <motion.nav 
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      className="fixed top-0 left-0 w-full z-50 px-8 py-8 flex justify-between items-start text-xs font-mono uppercase tracking-widest text-neutral-400"
    >
      <div className="flex flex-col">
        <span className="text-white font-bold tracking-widest">RYLAN PHILLIPS</span>
      </div>

      <div className="flex gap-12">
        {navItems.map((item) => (
          <Link
            key={item.name}
            href={item.href}
            className={cn(
              "hover:text-white transition-colors duration-300",
              item.active && "text-[#ccff00]" /* Acid green color from design */
            )}
          >
            {item.name}
          </Link>
        ))}
      </div>
    </motion.nav>
  );
}
