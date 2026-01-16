"use client";

import { motion } from "framer-motion";

const projects = [
  { id: "01", title: "Project One", category: "Web Design", gradient: "from-neutral-800 to-neutral-900" },
  { id: "02", title: "Project Two", category: "Development", gradient: "from-orange-900/40 to-neutral-900" },
  { id: "03", title: "Project Three", category: "Branding", gradient: "from-blue-900/40 to-neutral-900" },
  { id: "04", title: "Project Four", category: "Mobile App", gradient: "from-green-900/40 to-neutral-900" },
  { id: "05", title: "Project Five", category: "Strategy", gradient: "from-purple-900/40 to-neutral-900" },
];

export function ProjectGrid() {
  return (
    <div className="w-full h-full flex items-end">
      <div className="grid grid-cols-5 gap-4 w-full h-full">
        {projects.map((project, index) => (
          <motion.div
            key={project.id}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 + index * 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="group cursor-pointer flex flex-col justify-end h-full"
          >
            {/* Image Placeholder */}
            <div className="relative w-full aspect-[16/9] mb-2 overflow-hidden bg-neutral-900">
               <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-80 group-hover:opacity-100 transition-opacity duration-500`} />
               {/* Optional: Add actual images here if available */}
               <div className="absolute inset-0 border border-white/10 group-hover:border-white/30 transition-colors duration-500" />
            </div>
            
            {/* Label */}
            <div className="flex items-baseline space-x-2 text-neutral-500 text-[10px] md:text-xs font-mono uppercase tracking-widest">
              <span>[{project.id}]</span>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
