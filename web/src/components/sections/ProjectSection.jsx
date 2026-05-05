import React from 'react';
import { motion } from 'framer-motion';
import ProjectCard from '@/components/ProjectCard.jsx';

function ProjectsSection() {
    const projects = [
        {
            title: 'ArchionLabs',
            description: 'AI-driven architectural platform converting 2D floor plans into 3D models with crowd simulation and accessibility compliance checking.',
            technologies: ['Python', 'Next.js', 'Three.js', 'Node.js', 'Express.js', 'Firebase'],
            image: '/projects/archionlabs.png',
            link: '#'
        },
        {
            title: 'SpaceLy',
            description: 'High-performance real estate SPA allowing users to search and filter properties with premium amenities and interactive features.',
            technologies: ['React.js', 'JavaScript', 'HTML5', 'CSS3', 'Jest'],
            image: '/projects/spacely.png',
            link: 'https://github.com/sadewni2023/SpaceLy'
        },
        {
            title: 'Smart Campus API',
            description: 'JAX-RS based RESTful API for a Smart Campus Sensor and Room Management System, focusing on modular architecture and scalability.',
            technologies: ['Java', 'JAX-RS', 'RESTful APIs', 'Maven'],
            image: '/projects/smart_campus.png',
            link: 'https://github.com/sadewni2023/Smart-Campus-REST-API'
        },
        {
            title: 'Farmly',
            description: 'Responsive e-commerce platform showcasing Sri Lankan organic products with a focus on intuitive front-end design and community engagement.',
            technologies: ['HTML5', 'CSS3', 'JavaScript'],
            image: '/projects/farmly.png',
            link: 'https://github.com/sadewni2023/Farmly'
        },
        {
            title: 'Urban Bikes',
            description: 'High-fidelity interactive prototype for an eco-friendly traffic management and e-bike sharing system.',
            technologies: ['Figma', 'UI/UX Design', 'Prototyping'],
            image: '/projects/urban_bikes.png',
            link: '#'
        }
    ];

    return (
        <section id="projects" className="py-24 relative">
            <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl md:text-5xl font-bold mb-6">
                        Featured <span className="text-gradient">Projects</span>
                    </h2>
                    <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                        A curated selection of solutions I've architected, focusing on complex problem-solving and exquisite user experiences.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
                    {projects.map((project, index) => (
                        <ProjectCard
                            key={index}
                            title={project.title}
                            description={project.description}
                            technologies={project.technologies}
                            image={project.image}
                            link={project.link}
                            index={index}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
}

export default ProjectsSection;