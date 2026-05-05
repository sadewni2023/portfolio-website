import React from 'react';
import { motion } from 'framer-motion';
import { Award, ExternalLink, ShieldCheck, Zap } from 'lucide-react';

function CertificatesSection() {
    const certificates = [
        {
            title: 'Building a reactive app with Angular and Spring Boot 2',
            provider: 'LinkedIn Learning',
            year: '2026',
            size: 'lg',
            gradient: 'from-cyan-500/20 to-blue-600/20',
            icon: Zap
        },
        {
            title: 'Learning C++',
            provider: 'LinkedIn Learning',
            year: '2026',
            size: 'sm',
            gradient: 'from-purple-500/20 to-indigo-600/20',
            icon: Award
        },
        {
            title: 'Web design for beginners',
            provider: 'University of Moratuwa',
            year: '2025',
            size: 'sm',
            gradient: 'from-orange-500/20 to-pink-600/20',
            icon: Award
        },
        {
            title: 'Python for Beginners',
            provider: 'University of Moratuwa',
            year: '2024',
            size: 'md',
            gradient: 'from-emerald-500/20 to-teal-600/20',
            icon: ShieldCheck
        }
    ];

    return (
        <section id="certificates" className="py-32 relative overflow-hidden bg-background/30">
            <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-20"
                >
                    <h2 className="text-4xl md:text-5xl font-bold mb-6">
                        Professional <span className="text-gradient">Certifications</span>
                    </h2>
                    <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                        A dynamic gallery of my verified professional certifications and academic milestones.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[250px]">
                    {certificates.map((cert, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className={`group relative rounded-[2.5rem] p-8 glassmorphism border border-white/5 hover:border-white/20 transition-all duration-500 shadow-2xl overflow-hidden bg-gradient-to-br ${cert.gradient} ${
                                cert.size === 'lg' ? 'md:col-span-2 md:row-span-1' : 
                                cert.size === 'md' ? 'md:col-span-1 md:row-span-1' : 
                                'md:col-span-1 md:row-span-1'
                            }`}
                        >
                            <div className="absolute top-0 right-0 p-8 opacity-5 group-hover:opacity-10 transition-opacity">
                                <cert.icon className="w-32 h-32" />
                            </div>

                            <div className="relative z-10 flex flex-col h-full justify-between">
                                <div>
                                    <div className="flex justify-between items-center mb-6">
                                        <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center border border-white/10">
                                            <cert.icon className="w-6 h-6 text-accent" />
                                        </div>
                                        <span className="text-xs font-black text-muted-foreground/60 uppercase tracking-widest">{cert.year}</span>
                                    </div>
                                    <h3 className={`font-bold leading-tight group-hover:text-white transition-colors ${cert.size === 'lg' ? 'text-3xl' : 'text-xl'}`}>
                                        {cert.title}
                                    </h3>
                                </div>
                                
                                <div className="flex items-center justify-between mt-4">
                                    <p className="text-sm font-medium text-muted-foreground">{cert.provider}</p>
                                    <motion.div whileHover={{ scale: 1.1 }} className="text-accent/60 group-hover:text-accent">
                                        <ExternalLink className="w-5 h-5" />
                                    </motion.div>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default CertificatesSection;