import React from 'react';
import { motion } from 'framer-motion';
import { Download } from 'lucide-react';
import { Button } from '@/components/ui/button';

function HeroSection() {
    const roles = ['Full-Stack Developer', 'Software Engineer', 'UI/UX Designer'];
    const [currentRoleIndex, setCurrentRoleIndex] = React.useState(0);
    const [displayedText, setDisplayedText] = React.useState('');
    const [isDeleting, setIsDeleting] = React.useState(false);

    React.useEffect(() => {
        let timer;
        const currentRole = roles[currentRoleIndex];
        
        // Typing speed or Deleting speed
        const speed = isDeleting ? 30 : 60;

        if (!isDeleting && displayedText === currentRole) {
            // Wait 2 seconds before starting to delete
            timer = setTimeout(() => setIsDeleting(true), 2000);
        } else if (isDeleting && displayedText === '') {
            setIsDeleting(false);
            setCurrentRoleIndex((prev) => (prev + 1) % roles.length);
        } else {
            timer = setTimeout(() => {
                setDisplayedText(prev => 
                    isDeleting 
                        ? currentRole.substring(0, prev.length - 1)
                        : currentRole.substring(0, prev.length + 1)
                );
            }, speed);
        }

        return () => clearTimeout(timer);
    }, [displayedText, isDeleting, currentRoleIndex]);

    const handleDownloadCV = () => {
        const link = document.createElement('a');
        link.href = '#';
        link.download = 'Sadewni_Mendis_CV.pdf';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };

    return (
        <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
            {/* Video Background */}
            <div className="video-bg-container">
                <video
                    key="hero-video-shutterstock"
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="w-full h-full object-cover opacity-20"
                >
                    <source src="https://ak.picdn.net/shutterstock/videos/11745611/preview/11745611.mp4" type="video/mp4" />
                </video>
                <div className="absolute inset-0 bg-gradient-to-b from-background/90 via-background/70 to-background backdrop-blur-[2px]"></div>
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary/10 via-transparent to-transparent"></div>
            </div>

            <div className="relative z-10 container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-20">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">

                    {/* Text Content */}
                    <motion.div
                        initial={{ opacity: 0, y: 40 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                        className="lg:col-span-8 text-center lg:text-left"
                    >
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ delay: 0.2, duration: 0.5 }}
                            className="inline-flex items-center gap-2 px-4 py-2 rounded-full glassmorphism mb-8 border-white/10"
                        >
                            <span className="w-2 h-2 rounded-full bg-accent animate-pulse"></span>
                            <span className="text-sm font-medium text-foreground tracking-wide uppercase">Available for opportunities</span>
                        </motion.div>

                        <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold mb-6 drop-shadow-2xl">
                            <span className="block text-2xl md:text-3xl font-medium text-muted-foreground mb-4 uppercase tracking-widest">
                                Hello, I'm
                            </span>
                            <span className="text-gradient">Sadewni Mendis</span>
                        </h1>

                        <h2 className="text-2xl md:text-3xl font-bold text-foreground/90 mb-8 leading-tight min-h-[40px] flex items-center justify-center lg:justify-start">
                            <span className="text-gradient min-w-[200px]">
                                {displayedText}
                            </span>
                            <span className="w-[3px] h-[30px] bg-accent ml-2 animate-pulse inline-block align-middle"></span>
                        </h2>

                        <p className="text-lg text-muted-foreground leading-relaxed max-w-2xl mx-auto lg:mx-0 mb-10">
                            Engineering elegant solutions for complex digital challenges. I build scalable applications that blend powerful functionality with stunning, intuitive user interfaces.
                        </p>

                        <Button
                            size="lg"
                            onClick={handleDownloadCV}
                            className="h-14 px-8 text-base bg-gradient-to-r from-primary to-accent hover:opacity-90 text-white border-0 shadow-[0_0_30px_-5px_rgba(var(--accent),0.4)] transition-all duration-300 hover:scale-105 rounded-full"
                        >
                            <Download className="mr-2 h-5 w-5" />
                            Download CV
                        </Button>
                    </motion.div>

                    {/* Subtle Floating Image */}
                    <motion.div
                        initial={{ opacity: 0, x: 40, rotate: 5 }}
                        animate={{ opacity: 1, x: 0, rotate: 2 }}
                        transition={{ duration: 1, delay: 0.4, type: "spring" }}
                        className="lg:col-span-4 hidden lg:flex justify-end"
                    >
                        <div className="relative w-64 h-80">
                            <div className="absolute inset-0 bg-gradient-to-tr from-primary to-accent rounded-2xl blur-2xl opacity-20 animate-pulse"></div>
                            <div className="relative w-full h-full rounded-2xl overflow-hidden glassmorphism p-2 transform transition-transform duration-500 hover:scale-[1.02] hover:rotate-0 shadow-2xl">
                                <img
                                    src="/profile_hero.jpg"
                                    alt="Sadewni Mendis"
                                    className="w-full h-full rounded-xl object-cover hover:scale-105 transition-all duration-500"
                                />
                            </div>
                        </div>
                    </motion.div>

                </div>
            </div>
        </section>
    );
}

export default HeroSection;
