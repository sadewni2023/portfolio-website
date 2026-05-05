import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Calendar } from 'lucide-react';

function EducationCard({ institution, degree, period, description, index }) {
    return (
        <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            className="relative pl-12 pb-12 group"
        >
            {/* Timeline Line */}
            <div className="absolute left-[11px] top-8 bottom-0 w-[2px] bg-gradient-to-b from-accent/50 to-transparent group-last:hidden" />

            {/* Timeline Dot */}
            <div className="absolute left-0 top-1 w-6 h-6 rounded-full bg-background border-2 border-accent flex items-center justify-center shadow-[0_0_15px_rgba(0,0,0,0.5)] shadow-accent/20 z-10 group-hover:scale-125 transition-transform duration-300">
                <div className="w-2 h-2 rounded-full bg-accent" />
            </div>

            {/* Card Content */}
            <div className="glass-card rounded-2xl p-8 relative overflow-hidden">
                <div className="absolute -right-8 -top-8 w-32 h-32 bg-accent/5 rounded-full blur-2xl group-hover:bg-accent/10 transition-colors duration-500" />

                <div className="relative z-10">
                    <h3 className="text-2xl font-bold mb-2 group-hover:text-accent transition-colors duration-300">
                        {degree}
                    </h3>

                    <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4 mb-4">
                        <p className="text-lg font-medium text-foreground/90 flex items-center gap-2">
                            <GraduationCap className="h-5 w-5 text-accent" />
                            {institution}
                        </p>
                        <span className="hidden sm:inline text-white/20">•</span>
                        <div className="flex items-center gap-2 text-sm text-accent/80 font-medium px-3 py-1 rounded-full bg-accent/10 border border-accent/20 w-fit">
                            <Calendar className="h-4 w-4" />
                            {period}
                        </div>
                    </div>

                    {description && (
                        <p className="text-muted-foreground leading-relaxed">
                            {description}
                        </p>
                    )}
                </div>
            </div>
        </motion.div>
    );
}

export default EducationCard;