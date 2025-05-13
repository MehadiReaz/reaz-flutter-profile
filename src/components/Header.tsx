
import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowDown } from 'lucide-react';

const Header = () => {
  const scrollToContact = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="min-h-[90vh] flex flex-col items-center justify-center text-center px-4 relative">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-secondary/5 -z-10" />
      
      <h1 className="text-4xl md:text-6xl font-bold mb-4 animate-fade-in bg-gradient-to-br from-primary to-secondary bg-clip-text text-transparent">
        Mehadi Hasan Reaz
      </h1>
      
      <h2 className="text-2xl md:text-3xl text-muted-foreground mb-6 opacity-0 animate-fade-in-delay-1">
        Flutter Developer
      </h2>
      
      <p className="max-w-2xl text-lg mb-8 opacity-0 animate-fade-in-delay-2">
        Building high-performance mobile applications with Flutter, Dart, and modern architectures.
        Passionate about clean code and delivering exceptional user experiences.
      </p>
      
      <div className="flex flex-wrap gap-4 justify-center opacity-0 animate-fade-in-delay-3">
        <Button 
          onClick={scrollToContact} 
          className="bg-primary hover:bg-primary/90 animate-pulse-glow shadow-lg"
        >
          Contact Me
        </Button>
        <Button 
          variant="outline" 
          className="border-primary/30 hover:bg-primary/10 backdrop-blur-sm"
          onClick={() => {
            const projectsSection = document.getElementById('projects');
            if (projectsSection) {
              projectsSection.scrollIntoView({ behavior: 'smooth' });
            }
          }}
        >
          View Projects
        </Button>
      </div>
      
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-float">
        <Button variant="ghost" size="icon" onClick={() => {
          const aboutSection = document.getElementById('about');
          if (aboutSection) {
            aboutSection.scrollIntoView({ behavior: 'smooth' });
          }
        }}>
          <ArrowDown className="h-6 w-6" />
        </Button>
      </div>
    </header>
  );
};

export default Header;
