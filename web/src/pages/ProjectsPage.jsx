import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import Header from '@/components/Header.jsx';
import Footer from '@/components/Footer.jsx';
import ProjectCard from '@/components/ProjectCard.jsx';

function ProjectsPage() {
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
    }
  ];

  return (
    <>
      <Helmet>
        <title>Featured Work - Sadewni Mendis</title>
        <meta name="description" content="Portfolio of premium web applications and software projects built by Sadewni Mendis." />
      </Helmet>

      <div className="min-h-screen flex flex-col bg-background selection:bg-accent/30 selection:text-white">
        <Header />
        
        <main className="flex-1 pt-32 pb-20">
          <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            
            {/* Header */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center mb-20"
            >
              <h1 className="mb-6">
                Featured <span className="text-gradient">Projects</span>
              </h1>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                A curated selection of solutions I've architected, focusing on complex problem-solving and exquisite user experiences.
              </p>
            </motion.div>

            {/* Projects Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14">
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
        </main>

        <Footer />
      </div>
    </>
  );
}

export default ProjectsPage;