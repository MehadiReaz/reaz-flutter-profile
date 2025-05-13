
import React, { useEffect, useRef } from 'react';
import { Card, CardContent } from '@/components/ui/card';

const Skills = () => {
  const sectionRef = useRef<HTMLElement>(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('opacity-100');
          entry.target.classList.remove('opacity-0', 'translate-y-10');
          
          const cards = entry.target.querySelectorAll('.skill-card');
          cards.forEach((card, index) => {
            setTimeout(() => {
              card.classList.add('opacity-100');
              card.classList.remove('opacity-0', 'scale-95');
            }, index * 150);
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

  const skillCategories = [
    {
      category: 'Mobile Development',
      skills: ['Flutter', 'Dart', 'Android', 'iOS', 'MVVM Architecture', 'Clean Architecture']
    },
    {
      category: 'State Management',
      skills: ['GetX', 'Provider', 'Bloc', 'Riverpod', 'MobX']
    },
    {
      category: 'Backend & Databases',
      skills: ['Firebase', 'REST API', 'GraphQL', 'SQLite', 'Hive']
    },
    {
      category: 'Tools & Others',
      skills: ['Git', 'Figma', 'CI/CD', 'App Performance', 'Responsive Design', 'App Optimization']
    },
    {
      category: 'Exploring',
      skills: ['Kotlin', 'Java', 'Go', 'SwiftUI']
    }
  ];

  return (
    <section 
      id="skills" 
      ref={sectionRef}
      className="py-16 px-4 max-w-6xl mx-auto opacity-0 translate-y-10 transition-all duration-700"
    >
      <h2 className="section-title">Technical Skills</h2>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
        {skillCategories.map((category, index) => (
          <Card 
            key={index} 
            className="h-full skill-card glass-card opacity-0 scale-95 transition-all duration-500"
          >
            <CardContent className="pt-6">
              <h3 className="text-xl font-semibold mb-4 text-primary">{category.category}</h3>
              
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, idx) => (
                  <span 
                    key={idx}
                    className="bg-secondary/20 text-secondary hover:bg-secondary/30 px-3 py-1 rounded-full text-sm transition-colors"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
};

export default Skills;
