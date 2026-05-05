import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { toast } from 'sonner';

function ContactSection() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });
    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
            toast.error("Please fill in all fields.");
            return;
        }

        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(formData.email)) {
            toast.error("Please enter a valid email address.");
            return;
        }

        setIsSubmitting(true);

        // Simulate submission and store in localStorage
        setTimeout(() => {
            const messages = JSON.parse(localStorage.getItem('contactMessages') || '[]');
            messages.push({ ...formData, date: new Date().toISOString() });
            localStorage.setItem('contactMessages', JSON.stringify(messages));

            toast.success("Message sent successfully!");
            setFormData({ name: '', email: '', message: '' });
            setIsSubmitting(false);
        }, 1000);
    };

    const contactInfo = [
        { icon: Mail, label: 'Email', value: 'infosadewni@gmail.com', href: 'mailto:infosadewni@gmail.com' },
        { icon: Phone, label: 'Phone', value: '+70 366 5350', href: 'tel:+703665350' },
        { icon: MapPin, label: 'Location', value: 'Ambalangoda, Galle', href: null }
    ];

    return (
        <section id="contact" className="py-24 relative">
            <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl md:text-5xl font-bold mb-6">
                        Let's <span className="text-gradient">Connect</span>
                    </h2>
                    <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                        Whether you have a project in mind, an opportunity to discuss, or just want to say hello, I'm all ears.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20">

                    {/* Contact Form */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="lg:col-span-7"
                    >
                        <div className="glassmorphism p-8 md:p-10 rounded-3xl relative overflow-hidden">
                            <div className="absolute -top-10 -right-10 w-32 h-32 bg-primary/20 rounded-full blur-2xl" />

                            <h3 className="text-2xl font-bold mb-8">Send a Message</h3>

                            <form onSubmit={handleSubmit} className="space-y-6 relative z-10">
                                <div className="space-y-2">
                                    <Label htmlFor="name" className="text-foreground/80 font-medium ml-1">Name</Label>
                                    <Input
                                        id="name"
                                        name="name"
                                        type="text"
                                        value={formData.name}
                                        onChange={handleChange}
                                        placeholder="John Doe"
                                        className="bg-background/50 border-white/10 focus:border-accent focus:ring-1 focus:ring-accent transition-all h-12 rounded-xl text-white placeholder:text-muted-foreground/50"
                                        required
                                    />
                                </div>

                                <div className="space-y-2">
                                    <Label htmlFor="email" className="text-foreground/80 font-medium ml-1">Email</Label>
                                    <Input
                                        id="email"
                                        name="email"
                                        type="email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        placeholder="john@example.com"
                                        className="bg-background/50 border-white/10 focus:border-accent focus:ring-1 focus:ring-accent transition-all h-12 rounded-xl text-white placeholder:text-muted-foreground/50"
                                        required
                                    />
                                </div>

                                <div className="space-y-2">
                                    <Label htmlFor="message" className="text-foreground/80 font-medium ml-1">Message</Label>
                                    <Textarea
                                        id="message"
                                        name="message"
                                        value={formData.message}
                                        onChange={handleChange}
                                        placeholder="Tell me about your project..."
                                        rows={5}
                                        className="bg-background/50 border-white/10 focus:border-accent focus:ring-1 focus:ring-accent transition-all rounded-xl text-white placeholder:text-muted-foreground/50 resize-none"
                                        required
                                    />
                                </div>

                                <Button
                                    type="submit"
                                    size="lg"
                                    disabled={isSubmitting}
                                    className="w-full h-14 text-base bg-gradient-to-r from-primary to-accent hover:opacity-90 text-white border-0 shadow-[0_0_20px_-5px_rgba(var(--accent),0.5)] transition-all duration-300 hover:scale-[1.02] rounded-xl font-bold mt-4"
                                >
                                    {isSubmitting ? (
                                        <span className="opacity-80">Sending...</span>
                                    ) : (
                                        <>
                                            Send Message
                                            <Send className="ml-2 h-5 w-5" />
                                        </>
                                    )}
                                </Button>
                            </form>
                        </div>
                    </motion.div>

                    {/* Contact Info Sidebar */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.3 }}
                        className="lg:col-span-5 flex flex-col justify-center space-y-8"
                    >
                        <div>
                            <h3 className="text-2xl font-bold mb-8">Contact Information</h3>
                            <div className="space-y-6">
                                {contactInfo.map((info, index) => (
                                    <div key={index} className="flex items-center gap-5 group">
                                        <div className="flex-shrink-0 w-14 h-14 rounded-2xl glassmorphism flex items-center justify-center group-hover:bg-accent/20 group-hover:border-accent/40 transition-all duration-300 group-hover:scale-110">
                                            <info.icon className="h-6 w-6 text-accent" />
                                        </div>
                                        <div>
                                            <p className="text-sm font-medium text-muted-foreground mb-1">{info.label}</p>
                                            {info.href ? (
                                                <a href={info.href} className="text-lg font-bold text-foreground hover:text-accent transition-colors">
                                                    {info.value}
                                                </a>
                                            ) : (
                                                <p className="text-lg font-bold text-foreground">{info.value}</p>
                                            )}
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className="pt-8 border-t border-white/10 mt-8">
                            <h4 className="text-lg font-bold mb-3">Availability</h4>
                            <p className="text-muted-foreground leading-relaxed">
                                I am actively seeking new opportunities. Let's discuss how my technical skills can bring value to your team.
                            </p>
                        </div>
                    </motion.div>

                </div>
            </div>
        </section>
    );
}

export default ContactSection;