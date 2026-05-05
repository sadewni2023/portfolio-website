import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Download, Zap, Users, Lightbulb } from 'lucide-react';
import Header from '@/components/Header.jsx';
import Footer from '@/components/Footer.jsx';

function AboutPage() {
    const highlights = [
        {
            icon: Zap,
            title: 'Frontend passion',
            description: 'Deep expertise in creating intuitive and responsive user interfaces with modern frameworks like React, Angular, and Flutter'
        },
        {
            icon: Users,
            title: 'Leadership experience',
            description: 'Proven track record in leading teams and projects, from academic roles to collaborative development initiatives'
        },
        {
            icon: Lightbulb,
            title: 'Problem-solving mindset',
            description: 'Analytical approach to tackling complex challenges with innovative solutions and clean, maintainable code'
        }
    ];

    return (
        <>
            <Helmet>
                <title>About - Sadewni Mendis</title>
                <meta name="description" content="Learn more about Sadewni Mendis, a passionate full-stack developer with expertise in frontend technologies, leadership experience, and a problem-solving mindset." />
            </Helmet>

            <div className="min-h-screen flex flex-col">
                <Header />

                <main className="flex-1">
                    {/* Hero Section */}
                    <section className="py-20 bg-gradient-to-br from-primary/5 via-background to-accent/5">
                        <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6 }}
                                className="text-center mb-12"
                            >
                                <h1
                                    className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6"
                                    style={{ letterSpacing: '-0.02em' }}
                                >
                                    About me
                                </h1>
                                <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                                    A dedicated developer committed to building exceptional digital experiences
                                </p>
                            </motion.div>
                        </div>
                    </section>

                    {/* Profile Section */}
                    <section className="py-20">
                        <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                                <motion.div
                                    initial={{ opacity: 0, x: -20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.6 }}
                                >
                                    <h2 className="text-3xl md:text-4xl font-bold leading-tight mb-6" style={{ letterSpacing: '-0.02em' }}>
                                        Hello, I'm Sadewni
                                    </h2>
                                    <div className="space-y-4 text-base leading-relaxed text-muted-foreground">
                                        <p>
                                            I'm a full-stack developer and recent Computer Science graduate from the University of Westminster,
                                            passionate about creating innovative digital solutions that make a real impact.
                                        </p>
                                        <p>
                                            My journey in technology has been driven by curiosity and a desire to solve complex problems.
                                            I specialize in building modern web applications using cutting-edge technologies, with a particular
                                            focus on creating intuitive user experiences and scalable backend systems.
                                        </p>
                                        <p>
                                            Beyond coding, I'm committed to continuous learning and staying current with industry trends.
                                            I believe in writing clean, maintainable code and collaborating effectively with teams to deliver
                                            exceptional results.
                                        </p>
                                        <p>
                                            When I'm not developing, you'll find me exploring new technologies, contributing to open-source
                                            projects, or mentoring aspiring developers in my community.
                                        </p>
                                    </div>

                                    <div className="mt-8">
                                        <Button
                                            size="lg"
                                            className="transition-all duration-200 active:scale-[0.98]"
                                        >
                                            <Download className="mr-2 h-5 w-5" />
                                            Download resume
                                        </Button>
                                    </div>
                                </motion.div>

                                <motion.div
                                    initial={{ opacity: 0, x: 20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.6 }}
                                    className="relative"
                                >
                                    <div className="aspect-[4/5] rounded-2xl overflow-hidden glassmorphism p-2 shadow-2xl relative group">
                                        <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-accent/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                                        <img 
                                            src="/about_profile.jpg" 
                                            alt="Sadewni Mendis Professional"
                                            className="w-full h-full object-cover rounded-xl transition-transform duration-700 group-hover:scale-110"
                                        />
                                    </div>
                                </motion.div>
                            </div>
                        </div>
                    </section>

                    {/* Key Highlights */}
                    <section className="py-20 bg-muted">
                        <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6 }}
                                className="text-center mb-12"
                            >
                                <h2 className="text-3xl md:text-4xl font-bold leading-tight mb-4" style={{ letterSpacing: '-0.02em' }}>
                                    What I bring to the table
                                </h2>
                                <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
                                    Core strengths that define my approach to development
                                </p>
                            </motion.div>

                            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                                {highlights.map((highlight, index) => (
                                    <motion.div
                                        key={index}
                                        initial={{ opacity: 0, y: 20 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ duration: 0.5, delay: index * 0.1 }}
                                        className="bg-card rounded-2xl p-6 shadow-lg transition-all duration-300 hover:shadow-xl"
                                    >
                                        <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center mb-4">
                                            <highlight.icon className="h-6 w-6 text-accent" />
                                        </div>
                                        <h3 className="text-xl font-semibold mb-3 leading-snug">{highlight.title}</h3>
                                        <p className="text-base text-muted-foreground leading-relaxed">
                                            {highlight.description}
                                        </p>
                                    </motion.div>
                                ))}
                            </div>
                        </div>
                    </section>
                </main>

                <Footer />
            </div>
        </>
    );
}

export default AboutPage;