import React from 'react';
import { motion } from 'framer-motion';
import { Trophy, Medal, Star, ChevronRight } from 'lucide-react';

function AwardsSection() {
    const awards = [
        { title: 'Extravaganza Netball Tournament', achievement: '2nd Runner-Up', year: '2024', type: 'bronze', category: 'Tournament' },
        { title: 'Southern Province School Games Netball', achievement: '1st Place', year: '2019', type: 'gold', category: 'Provincial' },
        { title: 'Southern Province School Games Netball', achievement: '1st Place', year: '2018', type: 'gold', category: 'Provincial' },
        { title: 'Southern Province School Games Netball', achievement: '2nd Place', year: '2017', type: 'silver', category: 'Provincial' },
        { title: 'Southern Province School Games Netball', achievement: '1st Place', year: '2016', type: 'gold', category: 'Provincial' },
        { title: 'Sri Lanka Schools Netball National Championship', achievement: '2nd Place', year: '2018', type: 'silver', category: 'National' },
        { title: 'Sri Lanka Schools Netball National Championship', achievement: '1st Place', year: '2017', type: 'gold', category: 'National' },
        { title: 'Sri Lanka Schools Netball National Championship', achievement: '1st Place', year: '2016', type: 'gold', category: 'National' },
        { title: 'Colours Awards - Dharmasoka College', achievement: 'Colours Awards', year: '2016-2019', type: 'accent', category: 'Special' }
    ];

    const getIcon = (type) => {
        switch (type) {
            case 'gold': return <Trophy className="w-5 h-5 text-amber-400" />;
            case 'silver': return <Medal className="w-5 h-5 text-slate-300" />;
            case 'bronze': return <Medal className="w-5 h-5 text-orange-500" />;
            default: return <Star className="w-5 h-5 text-primary" />;
        }
    };

    return (
        <section id="awards" className="py-32 relative">
            <div className="container mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-24"
                >
                    <h2 className="text-4xl md:text-5xl font-bold mb-6">
                        Awards & <span className="text-gradient">Achievements</span>
                    </h2>
                    <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                        A distinguished record of athletic excellence and competitive success across various levels.
                    </p>
                </motion.div>

                <div className="glassmorphism rounded-[2.5rem] overflow-hidden border border-white/5">
                    {/* Header - Hidden on mobile */}
                    <div className="hidden md:grid grid-cols-12 gap-4 px-8 py-6 bg-white/5 border-b border-white/5 text-xs font-black uppercase tracking-[0.2em] text-muted-foreground/60">
                        <div className="col-span-2 text-center">Year</div>
                        <div className="col-span-1"></div>
                        <div className="col-span-6">Tournament / Award</div>
                        <div className="col-span-3 text-right">Achievement</div>
                    </div>

                    <div className="divide-y divide-white/5">
                        {awards.map((award, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.4, delay: index * 0.05 }}
                                className="group grid grid-cols-1 md:grid-cols-12 gap-4 px-8 py-8 md:py-6 items-center hover:bg-white/[0.03] transition-all duration-300"
                            >
                                {/* Year */}
                                <div className="col-span-1 md:col-span-2 text-center">
                                    <span className="text-lg font-black text-foreground/40 group-hover:text-accent transition-colors">
                                        {award.year}
                                    </span>
                                </div>

                                {/* Icon */}
                                <div className="hidden md:flex col-span-1 justify-center">
                                    <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center border border-white/10 group-hover:scale-110 transition-transform">
                                        {getIcon(award.type)}
                                    </div>
                                </div>

                                {/* Title */}
                                <div className="col-span-1 md:col-span-6">
                                    <div className="flex items-center gap-3 md:hidden mb-2">
                                        <div className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center border border-white/10">
                                            {getIcon(award.type)}
                                        </div>
                                        <span className="text-xs font-bold uppercase tracking-widest text-muted-foreground/60">{award.category}</span>
                                    </div>
                                    <h3 className="text-lg md:text-xl font-bold text-foreground/90 group-hover:text-white transition-colors leading-tight">
                                        {award.title}
                                    </h3>
                                    <span className="hidden md:inline-block text-[10px] font-black uppercase tracking-tighter text-muted-foreground/40 mt-1">
                                        {award.category} Level
                                    </span>
                                </div>

                                {/* Achievement */}
                                <div className="col-span-1 md:col-span-3 text-right">
                                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 group-hover:border-accent/30 transition-colors">
                                        <span className="text-sm font-black uppercase tracking-widest text-foreground">
                                            {award.achievement}
                                        </span>
                                        <ChevronRight className="w-4 h-4 text-muted-foreground/40 group-hover:text-accent transition-colors" />
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}

export default AwardsSection;