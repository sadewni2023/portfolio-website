import React from 'react';
import { motion } from 'framer-motion';
import { Badge } from '@/components/ui/badge';
import { ArrowUpRight } from 'lucide-react';

function ProjectCard({ title, description, technologies, image, link, index }) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            className="group relative flex flex-col overflow-hidden rounded-3xl glassmorphism h-full transition-all duration-500 hover:shadow-2xl hover:shadow-primary/20 hover:-translate-y-2"
        >
            <div className="relative h-64 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent z-10" />
                <img
                    src={image || `https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&w=800&q=80`}
                    alt={title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
            </div>

            <div className="relative z-20 flex flex-col flex-grow p-8 -mt-12">
                <h3 className="text-2xl font-bold mb-3 group-hover:text-accent transition-colors duration-300">
                    {title}
                </h3>

                <p className="text-muted-foreground leading-relaxed mb-8 flex-grow">
                    {description}
                </p>

                <div className="mt-auto space-y-6">
                    <div className="flex flex-wrap gap-2">
                        {technologies.map((tech, idx) => (
                            <Badge
                                key={idx}
                                variant="secondary"
                                className="bg-white/5 hover:bg-accent/20 hover:text-accent border border-white/10 transition-all duration-300 backdrop-blur-sm px-3 py-1 text-xs"
                            >
                                {tech}
                            </Badge>
                        ))}
                    </div>

                    <a
                        href={link || '#'}
                        className="inline-flex items-center gap-2 text-sm font-semibold text-foreground hover:text-accent transition-colors duration-300"
                    >
                        View Project <ArrowUpRight className="h-4 w-4" />
                    </a>
                </div>
            </div>
        </motion.div>
    );
}

export default ProjectCard;