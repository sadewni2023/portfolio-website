import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Award, BookOpen, Trophy } from 'lucide-react';

function EducationSection() {
    const education = [
        {
            type: 'degree',
            icon: GraduationCap,
            title: 'BSc (Hons) Computer Science',
            organization: 'University of Westminster',
            date: '2020 - 2024',
            description: 'Specialized in modern software engineering practices, algorithm design, and scalable architectures. Graduated with honors.'
        },
        {
            type: 'degree',
            icon: BookOpen,
            title: 'Foundation Certificate in Higher Education',
            organization: 'IIT Campus',
            date: '2019 - 2020',
            description: 'Preparatory program focusing on advanced mathematics and core programming fundamentals.'
        },
        {
            type: 'degree',
            icon: BookOpen,
            title: 'Secondary Education',
            organization: 'Dharmasoka College',
            date: '2014 - 2019',
            description: 'Completed advanced level studies with focus on mathematics and science subjects.'
        }
    ];

    return (
        <section id="education" className="py-24 relative">
            <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl md:text-5xl font-bold mb-6">
                        Academic <span className="text-gradient">Journey</span>
                    </h2>
                    <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                        A strong foundation in computer science theory paired with leadership in extracurricular achievements.
                    </p>
                </motion.div>

                <div className="relative max-w-4xl mx-auto">
                    {/* Central Timeline Line (Desktop) */}
                    <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-primary via-accent to-transparent -translate-x-1/2" />

                    <div className="space-y-12">
                        {education.map((item, index) => {
                            const isEven = index % 2 === 0;
                            return (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, y: 30 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true, margin: "-50px" }}
                                    transition={{ duration: 0.6, delay: index * 0.1 }}
                                    className={`relative flex flex-col md:flex-row items-center ${isEven ? 'md:flex-row-reverse' : ''}`}
                                >
                                    {/* Timeline Dot */}
                                    <div className="hidden md:flex absolute left-1/2 -translate-x-1/2 w-12 h-12 rounded-full glassmorphism items-center justify-center z-10 border-accent/50 shadow-[0_0_15px_rgba(var(--accent),0.3)]">
                                        <item.icon className="w-5 h-5 text-accent" />
                                    </div>

                                    {/* Content Card */}
                                    <div className={`w-full md:w-5/12 ${isEven ? 'md:pl-12' : 'md:pr-12'}`}>
                                        <div className="glassmorphism rounded-3xl p-8 relative overflow-hidden group hover:bg-white/10 transition-colors duration-300">
                                            <div className="md:hidden w-10 h-10 rounded-full bg-white/5 flex items-center justify-center mb-4 border border-white/10">
                                                <item.icon className="w-5 h-5 text-accent" />
                                            </div>

                                            <span className="inline-block px-3 py-1 rounded-full bg-accent/10 text-accent text-xs font-bold tracking-wider uppercase mb-4">
                                                {item.date}
                                            </span>
                                            <h3 className="text-2xl font-bold mb-2">{item.title}</h3>
                                            <h4 className="text-lg font-medium text-muted-foreground mb-4">{item.organization}</h4>
                                            <p className="text-foreground/80 leading-relaxed">
                                                {item.description}
                                            </p>
                                        </div>
                                    </div>
                                </motion.div>
                            );
                        })}
                    </div>
                </div>
            </div>
        </section>
    );
}

export default EducationSection;