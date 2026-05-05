import React from 'react';
import { motion } from 'framer-motion';
import { Code2, Users, Lightbulb } from 'lucide-react';

function AboutSection() {
    const highlights = [
        {
            icon: Code2,
            title: 'Frontend Passion',
            description: 'Deep expertise in creating intuitive and responsive user interfaces with modern frameworks.'
        },
        {
            icon: Users,
            title: 'Leadership',
            description: 'Proven track record in leading teams and projects, from academic roles to collaborative initiatives.'
        },
        {
            icon: Lightbulb,
            title: 'Problem-Solving',
            description: 'Analytical approach to tackling complex challenges with innovative solutions and clean code.'
        }
    ];

    return (
        <section id="about" className="py-24 relative">
            <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl md:text-5xl font-bold mb-6">
                        About <span className="text-gradient">Me</span>
                    </h2>
                </motion.div>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">

                    {/* Profile Image & Contact */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="lg:col-span-5 flex flex-col items-center"
                    >
                        <div className="relative w-64 h-64 md:w-80 md:h-80">
                            <div className="absolute inset-0 bg-gradient-to-tr from-primary to-accent rounded-full blur-2xl opacity-30 animate-pulse"></div>
                            <div className="relative w-full h-full rounded-full glassmorphism p-2">
                                <img
                                    src="/about_profile.jpg"
                                    alt="Sadewni Mendis Profile"
                                    className="w-full h-full rounded-full object-cover"
                                />
                            </div>
                        </div>


                    </motion.div>

                    {/* Bio & Highlights */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="lg:col-span-7"
                    >
                        <div className="glassmorphism rounded-3xl p-8 md:p-10 mb-8">
                            <p className="text-lg md:text-xl text-foreground/90 leading-relaxed">
                                Dedicated Computer Science undergraduate with a strong foundation in coding, system design, and best practices. Passionate about Frontend Development and UI/UX. Proven ability to thrive in fast-paced, growth-driven environments through university sports leadership and collaborative projects.
                            </p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                            {highlights.map((item, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.5, delay: 0.3 + (index * 0.1) }}
                                    className="glassmorphism rounded-2xl p-6 hover:bg-white/10 transition-colors duration-300"
                                >
                                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center mb-4">
                                        <item.icon className="h-6 w-6 text-accent" />
                                    </div>
                                    <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                                    <p className="text-sm text-muted-foreground leading-relaxed">{item.description}</p>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>

                </div>
            </div>
        </section>
    );
}

export default AboutSection;