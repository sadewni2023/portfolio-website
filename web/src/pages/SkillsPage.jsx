import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import Header from '@/components/Header.jsx';
import Footer from '@/components/Footer.jsx';
import SkillCategory from '@/components/SkillCategory.jsx';

function SkillsPage() {
    const skillCategories = [
        {
            title: 'Languages',
            skills: ['Java', 'Python', 'JavaScript', 'TypeScript', 'SQL', 'PHP', 'HTML', 'CSS'],
            className: 'md:col-span-2 md:row-span-2'
        },
        {
            title: 'Frontend & Cross-Platform',
            skills: ['React', 'Next.js', 'React Native', 'Three.js', 'Tailwind CSS'],
            className: 'md:col-span-1'
        },
        {
            title: 'Backend & API Design',
            skills: ['Node.js', 'Express.js', '.NET', 'Spring Boot'],
            className: 'md:col-span-1'
        },
        {
            title: 'Database & BaaS',
            skills: ['PostgreSQL', 'MySQL', 'MongoDB', 'Supabase', 'Firebase'],
            className: 'md:col-span-1'
        },
        {
            title: 'UI/UX & Prototyping',
            skills: ['Wireframing', 'Figma', 'Axure', 'Human Centered Design'],
            className: 'md:col-span-1'
        },
        {
            title: 'Version Control & Agile',
            skills: ['Git', 'GitHub', 'Agile Team Workflows'],
            className: 'md:col-span-2'
        }
    ];

    return (
        <>
            <Helmet>
                <title>Skills & Expertise - Sadewni Mendis</title>
                <meta name="description" content="Technical skills and professional expertise of Sadewni Mendis in full-stack development." />
            </Helmet>

            <div className="min-h-screen flex flex-col bg-background selection:bg-accent/30 selection:text-white">
                <Header />

                <main className="flex-1 pt-32 pb-20">
                    <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

                        {/* Page Header */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6 }}
                            className="text-center mb-20 relative"
                        >
                            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-accent/20 rounded-full blur-[100px] -z-10 pointer-events-none" />
                            <h1 className="mb-6">
                                Technical <span className="text-gradient">Arsenal</span>
                            </h1>
                            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                                A comprehensive overview of my technical capabilities, structured to build robust, end-to-end digital experiences.
                            </p>
                        </motion.div>

                        {/* Bento Grid */}
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 auto-rows-[minmax(250px,auto)]">
                            {skillCategories.map((category, index) => (
                                <SkillCategory
                                    key={index}
                                    title={category.title}
                                    skills={category.skills}
                                    className={category.className}
                                    index={index}
                                />
                            ))}
                        </div>

                        {/* Decorative Divider */}
                        <div className="my-24 h-px w-full bg-gradient-to-r from-transparent via-white/10 to-transparent" />

                        {/* Continuous Learning Section */}
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                            className="relative rounded-3xl p-1 lg:p-[2px] bg-gradient-to-br from-primary/30 via-transparent to-accent/30 overflow-hidden"
                        >
                            <div className="glass-panel rounded-[22px] p-10 md:p-16 text-center">
                                <h2 className="text-3xl font-bold mb-6">Always Evolving</h2>
                                <p className="text-lg text-muted-foreground max-w-3xl mx-auto mb-10 leading-relaxed">
                                    Technology never stands still, and neither do I. I'm constantly exploring emerging paradigms to bring the best possible tools to my projects.
                                </p>
                                <div className="flex flex-wrap justify-center gap-4">
                                    {['Learning: Next.js App Router', 'Exploring: GraphQL & Apollo', 'Interest: Cloud Architecture (AWS)'].map((tag, i) => (
                                        <div key={i} className="px-6 py-3 rounded-xl bg-white/5 border border-white/10 text-foreground font-medium backdrop-blur-md">
                                            {tag}
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </motion.div>

                    </div>
                </main>

                <Footer />
            </div>
        </>
    );
}

export default SkillsPage;