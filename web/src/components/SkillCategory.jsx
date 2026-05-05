import React from 'react';
import { motion } from 'framer-motion';

function SkillCategory({ title, icon: Icon, colorVar, skills, index }) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="group relative glassmorphism rounded-3xl p-6 md:p-8 overflow-hidden transition-all duration-500 hover:shadow-2xl hover:-translate-y-1"
            style={{
                boxShadow: `0 4px 30px -5px hsla(var(${colorVar}), 0.1)`
            }}
        >
            {/* Dynamic Gradient Background Overlay */}
            <div
                className="absolute -top-24 -right-24 w-48 h-48 rounded-full blur-3xl opacity-20 group-hover:opacity-40 transition-opacity duration-500 pointer-events-none"
                style={{ backgroundColor: `hsl(var(${colorVar}))` }}
            />

            {/* Top Border Accent */}
            <div
                className="absolute top-0 left-0 right-0 h-1 opacity-70"
                style={{ backgroundImage: `linear-gradient(to right, transparent, hsl(var(${colorVar})), transparent)` }}
            />

            <div className="relative z-10">
                <div className="flex items-center gap-4 mb-8">
                    <div
                        className="w-12 h-12 rounded-2xl flex items-center justify-center shadow-lg"
                        style={{
                            backgroundColor: `hsla(var(${colorVar}), 0.15)`,
                            border: `1px solid hsla(var(${colorVar}), 0.3)`,
                            color: `hsl(var(${colorVar}))`
                        }}
                    >
                        <Icon className="w-6 h-6" />
                    </div>
                    <h3 className="text-2xl font-bold tracking-tight">{title}</h3>
                </div>

                <div className="space-y-5">
                    {skills.map((skill, idx) => (
                        <div key={idx} className="space-y-2">
                            <div className="flex justify-between items-center text-sm font-medium">
                                <span className="text-foreground/90">{skill.name}</span>
                                <span className="text-muted-foreground">{skill.level}%</span>
                            </div>
                            {/* Progress Bar */}
                            <div className="h-1.5 w-full bg-white/5 rounded-full overflow-hidden">
                                <motion.div
                                    initial={{ width: 0 }}
                                    whileInView={{ width: `${skill.level}%` }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 1, delay: 0.2 + (idx * 0.1), ease: "easeOut" }}
                                    className="h-full rounded-full relative"
                                    style={{ backgroundColor: `hsl(var(${colorVar}))` }}
                                >
                                    <div className="absolute right-0 top-0 bottom-0 w-4 bg-white/30 blur-[2px]" />
                                </motion.div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </motion.div>
    );
}

export default SkillCategory;