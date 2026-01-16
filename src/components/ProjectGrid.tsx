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
    <div className="w-full px-8 pb-8 mt-auto z-10 relative">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
        {projects.map((project, index) => (
          <motion.div
            key={project.id}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 + index * 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="group cursor-pointer"
          >
            {/* Image Placeholder */}
            <div className={`aspect-[4/3] w-full bg-gradient-to-br ${project.gradient} border border-neutral-800/50 rounded-sm mb-4 relative overflow-hidden group-hover:border-neutral-600 transition-colors duration-500`}>
                <div className="absolute inset-0 bg-neutral-900/20 group-hover:bg-transparent transition-colors duration-500" />
            </div>
            
            {/* Label */}
            <div className="flex items-baseline space-x-2 text-neutral-500 text-xs font-mono uppercase">
              <span>[{project.id}]</span>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
