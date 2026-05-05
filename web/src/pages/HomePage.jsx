import React from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { ArrowRight, Code2, Sparkles, Layers, Cpu } from 'lucide-react';
import Header from '@/components/Header.jsx';
import Footer from '@/components/Footer.jsx';

function HomePage() {
    return (
        <>
            <Helmet>
                <title>Sadewni Mendis - Premium Full-Stack Developer</title>
                <meta name="description" content="Portfolio of Sadewni Mendis, a passionate full-stack developer specializing in modern web technologies and innovative solutions." />
            </Helmet>

            <div className="min-h-screen flex flex-col bg-background selection:bg-accent/30 selection:text-white">
                <Header />

                <main className="flex-1">
                    {/* Hero Section */}
                    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
                        {/* Background Layer */}
                        <div className="absolute inset-0 z-0">
                            <img
                                src="https://images.unsplash.com/photo-1699060463533-94ceb428c67f?auto=format&fit=crop&q=80"
                                alt="Abstract digital tech background"
                                className="w-full h-full object-cover opacity-30 object-center"
                            />
                            <div className="absolute inset-0 bg-gradient-to-b from-background/40 via-background/80 to-background backdrop-blur-[2px]"></div>
                            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-primary/20 via-transparent to-transparent"></div>
                        </div>

                        {/* Floating Elements (Decorative) */}
                        <motion.div
                            animate={{ y: [0, -20, 0], rotate: [0, 5, 0] }}
                            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                            className="absolute top-1/4 left-[10%] w-32 h-32 bg-primary/20 rounded-full blur-3xl pointer-events-none"
                        />
                        <motion.div
                            animate={{ y: [0, 30, 0], rotate: [0, -5, 0] }}
                            transition={{ duration: 8, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                            className="absolute bottom-1/4 right-[10%] w-48 h-48 bg-accent/20 rounded-full blur-3xl pointer-events-none"
                        />

                        {/* Content */}
                        <div className="relative z-10 container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                            <motion.div
                                initial={{ opacity: 0, y: 40 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.8, ease: "easeOut" }}
                                className="max-w-4xl mx-auto text-center"
                            >
                                <motion.div
                                    initial={{ opacity: 0, scale: 0.9 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    transition={{ delay: 0.2, duration: 0.5 }}
                                    className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-panel border-white/20 mb-8 shadow-[0_0_20px_rgba(var(--accent),0.2)]"
                                >
                                    <Sparkles className="h-4 w-4 text-accent" />
                                    <span className="text-sm font-medium text-foreground tracking-wide uppercase">Available for opportunities</span>
                                </motion.div>

                                <h1 className="mb-6 drop-shadow-2xl">
                                    <span className="block text-xl md:text-2xl font-medium text-muted-foreground mb-4 uppercase tracking-widest">
                                        Hello, I'm
                                    </span>
                                    <span className="text-gradient">Sadewni Mendis</span>
                                </h1>

                                <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-foreground/90 mb-8 leading-tight max-w-3xl mx-auto">
                                    Engineering elegant solutions for complex digital challenges.
                                </h2>

                                <p className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-2xl mx-auto mb-12">
                                    Specializing in full-stack development, I build scalable applications
                                    that blend powerful functionality with stunning, intuitive user interfaces.
                                </p>

                                <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
                                    <Link to="/projects">
                                        <Button
                                            size="lg"
                                            className="h-14 px-8 text-base bg-gradient-to-r from-primary to-accent hover:opacity-90 text-white border-0 shadow-[0_0_30px_-5px_rgba(var(--accent),0.4)] transition-all duration-300 hover:scale-105 rounded-full"
                                        >
                                            Explore My Work
                                            <ArrowRight className="ml-2 h-5 w-5" />
                                        </Button>
                                    </Link>
                                    <Link to="/contact">
                                        <Button
                                            size="lg"
                                            variant="outline"
                                            className="h-14 px-8 text-base glass-panel border-white/20 text-foreground hover:bg-white/10 transition-all duration-300 hover:scale-105 rounded-full"
                                        >
                                            Get in Touch
                                        </Button>
                                    </Link>
                                </div>
                            </motion.div>

                            {/* Profile Image for HomePage Hero */}
                            <motion.div
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ delay: 0.6, duration: 0.8 }}
                                className="mt-16 flex justify-center"
                            >
                                <div className="relative w-48 h-48 md:w-64 md:h-64">
                                    <div className="absolute inset-0 bg-gradient-to-tr from-primary to-accent rounded-full blur-2xl opacity-20 animate-pulse"></div>
                                    <div className="relative w-full h-full rounded-full overflow-hidden glass-panel p-2 shadow-2xl">
                                        <img
                                            src="/profile_hero.jpg"
                                            alt="Sadewni Mendis"
                                            className="w-full h-full rounded-full object-cover hover:scale-105 transition-all duration-500"
                                        />
                                    </div>
                                </div>
                            </motion.div>
                        </div>

                        {/* Scroll Indicator */}
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 1.5, duration: 1 }}
                            className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10"
                        >
                            <div className="w-6 h-10 rounded-full border-2 border-white/20 flex items-start justify-center p-2 backdrop-blur-sm bg-white/5">
                                <motion.div
                                    animate={{ y: [0, 12, 0] }}
                                    transition={{ duration: 1.5, repeat: Infinity }}
                                    className="w-1.5 h-1.5 rounded-full bg-accent shadow-[0_0_10px_rgba(var(--accent),0.8)]"
                                />
                            </div>
                        </motion.div>
                    </section>

                    {/* Featured Expertise Section */}
                    <section className="py-32 relative">
                        <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6 }}
                                className="text-center mb-20"
                            >
                                <h2 className="mb-4">
                                    <span className="text-gradient">Technical Expertise</span>
                                </h2>
                                <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                                    Mastering the modern stack to deliver robust, scalable, and beautiful applications.
                                </p>
                            </motion.div>

                            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                                <motion.div
                                    initial={{ opacity: 0, y: 30 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.6, delay: 0.1 }}
                                    className="glass-card rounded-3xl p-10 text-center group"
                                >
                                    <div className="w-16 h-16 mx-auto bg-gradient-to-br from-primary/20 to-accent/20 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500">
                                        <Layers className="h-8 w-8 text-accent" />
                                    </div>
                                    <h3 className="text-2xl font-bold mb-4">Frontend & UI/UX</h3>
                                    <p className="text-muted-foreground leading-relaxed">
                                        Expertise in React, Next.js, and Three.js for 3D visualization. Proficient in UI/UX design using Figma and Axure for human-centered prototyping.
                                    </p>
                                </motion.div>

                                <motion.div
                                    initial={{ opacity: 0, y: 30 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.6, delay: 0.2 }}
                                    className="glass-card rounded-3xl p-10 text-center group"
                                >
                                    <div className="w-16 h-16 mx-auto bg-gradient-to-br from-primary/20 to-accent/20 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500">
                                        <Cpu className="h-8 w-8 text-accent" />
                                    </div>
                                    <h3 className="text-2xl font-bold mb-4">Backend & Systems</h3>
                                    <p className="text-muted-foreground leading-relaxed">
                                        Architecting robust solutions with Node.js, .NET, and Spring Boot. Skilled in PostgreSQL, MongoDB, and Supabase for scalable data management.
                                    </p>
                                </motion.div>

                                <motion.div
                                    initial={{ opacity: 0, y: 30 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.6, delay: 0.3 }}
                                    className="glass-card rounded-3xl p-10 text-center group"
                                >
                                    <div className="w-16 h-16 mx-auto bg-gradient-to-br from-primary/20 to-accent/20 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500">
                                        <Code2 className="h-8 w-8 text-accent" />
                                    </div>
                                    <h3 className="text-2xl font-bold mb-4">Core & Workflow</h3>
                                    <p className="text-muted-foreground leading-relaxed">
                                        Proficient in Java, Python, and TypeScript. Expert in Git/GitHub and Agile workflows, with a strong focus on analytical problem-solving.
                                    </p>
                                </motion.div>
                            </div>
                        </div>
                    </section>
                </main>

                <Footer />
            </div>
        </>
    );
}

export default HomePage;