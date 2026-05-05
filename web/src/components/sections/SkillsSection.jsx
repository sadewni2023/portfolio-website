import React from 'react';
import { motion } from 'framer-motion';
import { Code2, Server, Layout, Database, Palette, GitBranch, Users } from 'lucide-react';
import SkillCategory from '@/components/SkillCategory.jsx';

function SkillsSection() {
    const skillCategories = [
        {
            title: 'Languages',
            icon: Code2,
            colorVar: '--skill-lang',
            skills: [
                { name: 'Java', level: 85 },
                { name: 'Python', level: 85 },
                { name: 'JavaScript', level: 90 },
                { name: 'TypeScript', level: 85 },
                { name: 'SQL', level: 80 },
                { name: 'PHP', level: 75 }
            ]
        },
        {
            title: 'Frontend',
            icon: Layout,
            colorVar: '--skill-front',
            skills: [
                { name: 'React', level: 95 },
                { name: 'Next.js', level: 90 },
                { name: 'React Native', level: 85 },
                { name: 'Three.js', level: 80 },
                { name: 'Tailwind CSS', level: 95 }
            ]
        },
        {
            title: 'Backend',
            icon: Server,
            colorVar: '--skill-back',
            skills: [
                { name: 'Node.js', level: 85 },
                { name: 'Spring Boot', level: 80 },
                { name: '.NET', level: 75 },
                { name: 'Express.js', level: 90 }
            ]
        },
        {
            title: 'Database & BaaS',
            icon: Database,
            colorVar: '--skill-data',
            skills: [
                { name: 'PostgreSQL', level: 85 },
                { name: 'MySQL', level: 85 },
                { name: 'MongoDB', level: 80 },
                { name: 'Supabase', level: 90 },
                { name: 'Firebase', level: 85 }
            ]
        },
        {
            title: 'UI/UX Design',
            icon: Palette,
            colorVar: '--skill-ui',
            skills: [
                { name: 'Figma', level: 90 },
                { name: 'Axure', level: 80 },
                { name: 'Wireframing', level: 85 },
                { name: 'Human Centered Design', level: 85 }
            ]
        },
        {
            title: 'Version Control',
            icon: GitBranch,
            colorVar: '--skill-tools',
            skills: [
                { name: 'Git', level: 90 },
                { name: 'GitHub', level: 90 },
                { name: 'Agile Workflows', level: 85 }
            ]
        }
    ];

    return (
        <section id="skills" className="py-24 relative">
            <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl md:text-5xl font-bold mb-6">
                        Technical <span className="text-gradient">Arsenal</span>
                    </h2>
                    <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                        A comprehensive overview of my technical capabilities, structured to build robust, end-to-end digital experiences.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {skillCategories.map((category, index) => (
                        <SkillCategory
                            key={index}
                            title={category.title}
                            icon={category.icon}
                            colorVar={category.colorVar}
                            skills={category.skills}
                            index={index}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
}

export default SkillsSection;