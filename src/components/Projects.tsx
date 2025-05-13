import React, { useEffect, useRef } from 'react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ExternalLink } from 'lucide-react';
import { Link } from 'react-router-dom';

const Projects = () => {
  const sectionRef = useRef<HTMLElement>(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('opacity-100');
          entry.target.classList.remove('opacity-0', 'translate-y-10');
          
          const cards = entry.target.querySelectorAll('.project-card');
          cards.forEach((card, index) => {
            setTimeout(() => {
              card.classList.add('opacity-100');
              card.classList.remove('opacity-0', 'translate-y-10');
            }, index * 200);
          });
        }
      },
      { threshold: 0.1 }
    );
    
    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }
    
    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  const projects = [
    {
      title: 'Dazzle - Multi-brand Gadget Store',
      description: 'E-Commerce app featuring phones, tablets, MacBooks with secure checkout',
      tech: 'Flutter, GetX, Firebase, SSLcommerz, BKash',
      links: [
        { title: 'Website', url: 'https://dazzle.com.bd' }
      ],
      image: '/uploads/dazzle.png'
    },
    {
      title: 'Smart HRM',
      description: 'Enterprise HR solution for payroll, attendance, and leave management',
      tech: 'Flutter, SQLite, REST API, GetX',
      links: [
        { title: 'Google Play', url: 'https://play.google.com/store/apps/details?id=com.smartsoftware.hrm&hl=bn' },
        { title: 'App Store', url: 'https://apps.apple.com/us/app/smart-hrm/id1643284472' }
      ],
      image: '/uploads/hrm.png'
    },
    {
      title: 'Snakebite Emergency App',
      description: 'Life-saving app with antivenom hospital contacts and first aid guides',
      tech: 'Flutter, Geolocation, GetX',
      links: [
        { title: 'Google Play', url: 'https://play.google.com/store/apps/details?id=com.smartsoftware.snakebite&hl=bn' },
        { title: 'App Store', url: 'https://apps.apple.com/us/app/snake-bite-awareness-app/id6504925995' }
      ],
      image: '/uploads/snakebite.png'
    }
  ];

  return (
    <section 
      id="projects" 
      ref={sectionRef}
      className="py-16 px-4 max-w-6xl mx-auto opacity-0 translate-y-10 transition-all duration-700"
    >
      <h2 className="section-title">Featured Projects</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
        {projects.map((project, index) => (
          <Card 
            key={index} 
            className="project-card overflow-hidden glass-card opacity-0 translate-y-10 transition-all duration-700"
          >
            <div className="h-48 overflow-hidden">
              <img 
                src={project.image} 
                alt={project.title} 
                className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
              />
            </div>
            
            <CardHeader>
              <CardTitle className="text-primary">{project.title}</CardTitle>
              <CardDescription className="text-foreground/70">{project.description}</CardDescription>
            </CardHeader>
            
            <CardContent>
              <div className="mb-4">
                <p className="text-sm font-medium text-muted-foreground">Technologies:</p>
                <p className="text-foreground/80">{project.tech}</p>
              </div>
            </CardContent>
            
            <CardFooter className="flex gap-2">
              {project.links.map((link, idx) => (
                <Button key={idx} variant="outline" size="sm" asChild className="border-primary/30 hover:bg-primary/10">
                  <a href={link.url} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1">
                    {link.title}
                    <ExternalLink className="h-3 w-3" />
                  </a>
                </Button>
              ))}
            </CardFooter>
          </Card>
        ))}
      </div>
      
      <div className="text-center mt-12">
        <Button variant="secondary" className="animate-pulse-glow">
          <Link to="/projects" className="flex items-center gap-2">
            View All Projects
            <ExternalLink className="h-4 w-4" />
          </Link>
        </Button>
      </div>
    </section>
  );
};

export default Projects;
