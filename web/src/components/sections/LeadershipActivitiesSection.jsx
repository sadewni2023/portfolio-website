import React from 'react';
import { motion } from 'framer-motion';
import { Crown, Medal, Users, Trophy, Star, ArrowRight } from 'lucide-react';

function LeadershipActivitiesSection() {
    const activities = [
        {
            institution: 'Dharmasoka College, Ambalangoda',
            roles: [
                {
                    title: 'Senior Prefect',
                    date: '2019 - 2020',
                    icon: Crown,
                    description: 'Entrusted with maintaining discipline and representing the student body at the highest level.',
                    color: 'text-amber-400'
                },
                {
                    title: 'Captain of Netball Team',
                    date: '2019 - 2020',
                    icon: Trophy,
                    description: 'Led the school netball team to multiple victories through strategic planning and team coordination.',
                    color: 'text-blue-400'
                },
                {
                    title: 'Former Member of Basketball Team',
                    date: '2011 - 2016',
                    icon: Users,
                    description: 'Active participant in competitive basketball, developing foundational teamwork and athletic skills.',
                    color: 'text-slate-400'
                }
            ]
        },
        {
            institution: 'Informatics Institute of Technology (IIT)',
            roles: [
                {
                    title: 'Vice Captain of Netball Team',
                    date: '2025 - Present',
                    icon: Medal,
                    description: 'Currently serving as second-in-command, driving team performance and fostering a culture of excellence.',
                    color: 'text-emerald-400'
                }
            ]
        }
    ];

    return (
        <section id="leadership" className="py-32 relative">
            <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="mb-24 text-center lg:text-left"
                >
                    <h2 className="text-4xl md:text-6xl font-black mb-6 uppercase tracking-tighter">
                        Leadership & <span className="text-gradient">Activities</span>
                    </h2>
                </motion.div>

                <div className="space-y-40">
                    {activities.map((group, groupIndex) => (
                        <div key={groupIndex} className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24">
                            {/* Sticky Institution Header */}
                            <div className="lg:col-span-4 lg:sticky lg:top-32 h-fit">
                                <div className="space-y-6">
                                    <div className="w-12 h-1 bg-gradient-to-r from-primary to-accent" />
                                    <h3 className="text-3xl font-bold leading-tight text-foreground/90">
                                        {group.institution}
                                    </h3>
                                    <p className="text-muted-foreground">
                                        Developing leadership and teamwork skills in a competitive environment.
                                    </p>
                                </div>
                            </div>

                            {/* Scrolling Roles */}
                            <div className="lg:col-span-8 space-y-8">
                                {group.roles.map((role, roleIndex) => (
                                    <motion.div
                                        key={roleIndex}
                                        initial={{ opacity: 0, x: 20 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ duration: 0.5, delay: roleIndex * 0.1 }}
                                        className="group flex flex-col sm:flex-row gap-8 p-8 rounded-[2rem] glassmorphism border border-white/5 hover:border-white/10 transition-all duration-300"
                                    >
                                        <div className="flex-shrink-0">
                                            <div className="w-16 h-16 rounded-2xl bg-white/5 flex items-center justify-center border border-white/10 group-hover:bg-white/10 transition-colors">
                                                <role.icon className={`w-8 h-8 ${role.color}`} />
                                            </div>
                                        </div>
                                        
                                        <div className="flex-grow space-y-4">
                                            <div className="flex flex-wrap justify-between items-start gap-4">
                                                <h4 className="text-2xl font-bold group-hover:text-white transition-colors">
                                                    {role.title}
                                                </h4>
                                                <span className="text-sm font-bold text-muted-foreground/60 px-4 py-1.5 rounded-full bg-white/5 border border-white/10">
                                                    {role.date}
                                                </span>
                                            </div>
                                            <p className="text-lg text-muted-foreground leading-relaxed">
                                                {role.description}
                                            </p>
                                            <div className="flex items-center gap-2 text-accent font-bold text-sm uppercase tracking-wider opacity-0 group-hover:opacity-100 transition-opacity">
                                                Active Impact <ArrowRight className="w-4 h-4" />
                                            </div>
                                        </div>
                                    </motion.div>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default LeadershipActivitiesSection;