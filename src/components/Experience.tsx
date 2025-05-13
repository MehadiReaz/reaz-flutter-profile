
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Briefcase } from 'lucide-react';

const Experience = () => {
  const experiences = [
    {
      company: 'Dhaka Softwares',
      position: 'App Developer',
      period: '2024-Present',
      responsibilities: [
        'Developing scalable mobile applications for enterprise clients',
        'Implementing clean architecture and performance optimizations',
        'Provide E-Commerce solution to renowned brand in Bangladesh'
      ]
    },
    {
      company: 'Smart Software Limited',
      position: 'Jr. Software Engineer',
      period: 'Jun 2023 - Dec 2023',
      responsibilities: [
        'Deployed 4+ major releases for HRM applications',
        'Built government awareness apps which share knowledge about snakes'
      ]
    }
  ];

  return (
    <section id="experience" className="py-16 px-4 bg-muted/30">
      <div className="max-w-6xl mx-auto">
        <h2 className="section-title">Professional Experience</h2>
        
        <div className="mt-12">
          {experiences.map((exp, index) => (
            <div key={index} className="timeline-item">
              <div className="timeline-dot"></div>
              <Card className="mb-6">
                <CardContent className="pt-6">
                  <div className="flex items-center justify-between flex-wrap gap-2 mb-3">
                    <div className="flex items-center gap-2">
                      <Briefcase className="h-5 w-5 text-primary" />
                      <h3 className="text-xl font-bold">{exp.company}</h3>
                    </div>
                    <span className="text-sm bg-secondary/10 text-secondary px-3 py-1 rounded-full">
                      {exp.period}
                    </span>
                  </div>
                  
                  <h4 className="text-lg font-semibold text-muted-foreground mb-4">{exp.position}</h4>
                  
                  <ul className="space-y-2">
                    {exp.responsibilities.map((resp, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <span className="text-primary mt-1">•</span>
                        <span>{resp}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
