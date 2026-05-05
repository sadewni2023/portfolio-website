import React from 'react';
import { Github, Linkedin, Mail, MapPin, Phone } from 'lucide-react';

function Footer() {
  return (
    <footer className="relative border-t border-white/10 bg-background overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-accent/50 to-transparent"></div>
      
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <div className="space-y-4">
            <span className="text-2xl font-bold text-gradient inline-block">
              Sadewni Mendis
            </span>
            <p className="text-base text-muted-foreground max-w-xs leading-relaxed">
              Crafting premium digital experiences through innovative full-stack development.
            </p>
          </div>

          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-foreground">Get in Touch</h4>
            <div className="space-y-3">
              <a href="mailto:infosadewni@gmail.com" className="flex items-center gap-3 text-muted-foreground transition-all duration-300 hover:text-accent hover:translate-x-1">
                <div className="p-2 rounded-lg bg-white/5 border border-white/5"><Mail className="h-4 w-4" /></div>
                infosadewni@gmail.com
              </a>
              <div className="flex items-center gap-3 text-muted-foreground">
                <div className="p-2 rounded-lg bg-white/5 border border-white/5"><Phone className="h-4 w-4" /></div>
                +70 366 5350
              </div>
              <div className="flex items-center gap-3 text-muted-foreground">
                <div className="p-2 rounded-lg bg-white/5 border border-white/5"><MapPin className="h-4 w-4" /></div>
                Ambalangoda, Galle
              </div>
            </div>
          </div>

          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-foreground">Connect</h4>
            <div className="flex gap-4">
              <a href="https://github.com/Sadewni" target="_blank" rel="noopener noreferrer" className="p-3 rounded-xl bg-white/5 border border-white/5 text-muted-foreground transition-all duration-300 hover:text-accent hover:bg-accent/10 hover:border-accent/30 hover:-translate-y-1 shadow-lg" aria-label="GitHub">
                <Github className="h-5 w-5" />
              </a>
              <a href="https://linkedin.com/in/Sadewni" target="_blank" rel="noopener noreferrer" className="p-3 rounded-xl bg-white/5 border border-white/5 text-muted-foreground transition-all duration-300 hover:text-accent hover:bg-accent/10 hover:border-accent/30 hover:-translate-y-1 shadow-lg" aria-label="LinkedIn">
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-white/10 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Sadewni Mendis. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;