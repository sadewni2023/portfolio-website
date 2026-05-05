import React from 'react';
import { motion } from 'framer-motion';
import { Trophy } from 'lucide-react';

function AwardBadge({ title, achievement, year, index }) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay: index * 0.1 }}
      className="group glass-card rounded-2xl p-6 relative overflow-hidden"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-accent/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      
      <div className="relative z-10 flex items-start gap-4">
        <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-gradient-to-br from-primary to-accent flex items-center justify-center shadow-lg shadow-accent/20 group-hover:scale-110 transition-transform duration-300">
          <Trophy className="h-6 w-6 text-white" />
        </div>
        
        <div className="flex-1 min-w-0">
          <h4 className="text-lg font-bold mb-1 group-hover:text-accent transition-colors duration-300">
            {title}
          </h4>
          <p className="text-muted-foreground font-medium mb-2">{achievement}</p>
          {year && (
            <span className="inline-flex items-center justify-center px-2.5 py-0.5 rounded-full text-xs font-semibold bg-white/5 border border-white/10 text-foreground/70">
              {year}
            </span>
          )}
        </div>
      </div>
    </motion.div>
  );
}

export default AwardBadge;