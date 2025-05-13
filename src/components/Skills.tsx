
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';

const Skills = () => {
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
    <section id="skills" className="py-16 px-4 max-w-6xl mx-auto">
      <h2 className="section-title">Technical Skills</h2>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
        {skillCategories.map((category, index) => (
          <Card key={index} className="h-full">
            <CardContent className="pt-6">
              <h3 className="text-xl font-semibold mb-4 text-primary">{category.category}</h3>
              
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, idx) => (
                  <span 
                    key={idx}
                    className="bg-secondary/10 text-secondary px-3 py-1 rounded-full text-sm"
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
