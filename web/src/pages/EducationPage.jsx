import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import Header from '@/components/Header.jsx';
import Footer from '@/components/Footer.jsx';
import EducationCard from '@/components/EducationCard.jsx';
import AwardBadge from '@/components/AwardBadge.jsx';

function EducationPage() {
    const education = [
        {
            institution: 'University of Westminster',
            degree: 'BSc (Hons) Computer Science',
            period: '2020 - 2024',
            description: 'Specialized in modern software engineering practices, algorithm design, and scalable architectures. Graduated with honors, demonstrating excellence in both theoretical computer science and practical application development.'
        },
        {
            institution: 'IIT Campus',
            degree: 'Foundation Certificate in Higher Education',
            period: '2019 - 2020',
            description: 'Preparatory program focusing on advanced mathematics and core programming fundamentals.'
        }
    ];

    const awards = [];

    return (
        <>
            <Helmet>
                <title>Education & Awards - Sadewni Mendis</title>
                <meta name="description" content="Academic background and achievements of Sadewni Mendis." />
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
                            className="text-center mb-24"
                        >
                            <h1 className="mb-6">
                                Academic <span className="text-gradient">Journey</span>
                            </h1>
                            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                                A strong foundation in computer science theory paired with leadership in extracurricular achievements.
                            </p>
                        </motion.div>

                        {/* Layout: Timeline + Awards Grid */}
                        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">

                            {/* Education Timeline */}
                            <div className={awards.length > 0 ? "lg:col-span-7" : "lg:col-span-12"}>
                                <h2 className="text-3xl font-bold mb-10 flex items-center gap-4">
                                    <span className="w-8 h-1 bg-gradient-to-r from-primary to-accent rounded-full" />
                                    Education
                                </h2>
                                <div className="ml-2">
                                    {education.map((edu, index) => (
                                        <EducationCard
                                            key={index}
                                            institution={edu.institution}
                                            degree={edu.degree}
                                            period={edu.period}
                                            description={edu.description}
                                            index={index}
                                        />
                                    ))}
                                </div>
                            </div>

                            {/* Awards Sidebar */}
                            {awards.length > 0 && (
                                <div className="lg:col-span-5">
                                    <h2 className="text-3xl font-bold mb-10 flex items-center gap-4">
                                        <span className="w-8 h-1 bg-gradient-to-r from-accent to-primary rounded-full" />
                                        Achievements
                                    </h2>
                                    <div className="flex flex-col gap-6">
                                        {awards.map((award, index) => (
                                            <AwardBadge
                                                key={index}
                                                title={award.title}
                                                achievement={award.achievement}
                                                year={award.year}
                                                index={index}
                                            />
                                        ))}
                                    </div>
                                </div>
                            )}

                        </div>
                    </div>
                </main>

                <Footer />
            </div>
        </>
    );
}

export default EducationPage;