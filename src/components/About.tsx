
import React, { useEffect, useRef } from 'react';
import { Card, CardContent } from '@/components/ui/card';

const About = () => {
  const sectionRef = useRef<HTMLElement>(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('opacity-100');
          entry.target.classList.remove('opacity-0', 'translate-y-10');
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

  return (
    <section 
      id="about" 
      ref={sectionRef}
      className="py-16 px-4 max-w-6xl mx-auto opacity-0 translate-y-10 transition-all duration-700"
    >
      <h2 className="section-title">About Me</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8">
        <div className="md:col-span-2">
          <p className="text-lg mb-4">
            I'm a passionate Flutter Developer currently working full-time at Dhaka Softwares, with previous 
            experience at Smart Software Limited. My expertise lies in building high-performance mobile 
            applications using Flutter, Dart, and modern architectures like MVVM.
          </p>
          
          <p className="text-lg mb-4">
            I'm also exploring Kotlin, Java, and Go for future projects to expand my toolkit and create
            even more efficient and scalable solutions.
          </p>
          
          <div className="flex flex-col gap-2 mt-6">
            <div className="flex items-center gap-2 hover:translate-x-2 transition-transform">
              <span className="text-primary">🔹</span>
              <span>Over 2.5+ years of professional development experience</span>
            </div>
            <div className="flex items-center gap-2 hover:translate-x-2 transition-transform">
              <span className="text-primary">🔹</span>
              <span>Specialized in E-Commerce, HRM, and Custom apps</span>
            </div>
            <div className="flex items-center gap-2 hover:translate-x-2 transition-transform">
              <span className="text-primary">🔹</span>
              <span>Strong background in clean architecture and state management</span>
            </div>
          </div>
        </div>
        
        <div>
          <Card className="glass-card">
            <CardContent className="pt-6">
              <h3 className="text-xl font-semibold mb-4">Core Expertise</h3>
              
              <div className="space-y-3">
                <div className="transform transition-all hover:scale-105">
                  <p className="font-medium">Mobile Development</p>
                  <div className="w-full bg-muted rounded-full h-2 mt-1">
                    <div className="bg-primary h-2 rounded-full w-[95%] skill-bar skill-bar-1"></div>
                  </div>
                </div>
                
                <div className="transform transition-all hover:scale-105">
                  <p className="font-medium">Flutter & Dart</p>
                  <div className="w-full bg-muted rounded-full h-2 mt-1">
                    <div className="bg-primary h-2 rounded-full w-[90%] skill-bar skill-bar-2"></div>
                  </div>
                </div>
                
                <div className="transform transition-all hover:scale-105">
                  <p className="font-medium">App Architecture</p>
                  <div className="w-full bg-muted rounded-full h-2 mt-1">
                    <div className="bg-primary h-2 rounded-full w-[85%] skill-bar skill-bar-3"></div>
                  </div>
                </div>
                
                <div className="transform transition-all hover:scale-105">
                  <p className="font-medium">State Management</p>
                  <div className="w-full bg-muted rounded-full h-2 mt-1">
                    <div className="bg-primary h-2 rounded-full w-[88%] skill-bar skill-bar-4"></div>
                  </div>
                </div>
                
                <div className="transform transition-all hover:scale-105">
                  <p className="font-medium">Firebase Integration</p>
                  <div className="w-full bg-muted rounded-full h-2 mt-1">
                    <div className="bg-primary h-2 rounded-full w-[80%] skill-bar skill-bar-5"></div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
      
      {/* Moving the inline styles to the index.css file instead of using style jsx */}
    </section>
  );
};

export default About;
