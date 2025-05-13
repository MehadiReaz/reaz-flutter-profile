
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';

const About = () => {
  return (
    <section id="about" className="py-16 px-4 max-w-6xl mx-auto">
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
            <div className="flex items-center gap-2">
              <span className="text-primary">🔹</span>
              <span>Over 2.5+ years of professional development experience</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-primary">🔹</span>
              <span>Specialized in E-Commerce, HRM, and Custom apps</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-primary">🔹</span>
              <span>Strong background in clean architecture and state management</span>
            </div>
          </div>
        </div>
        
        <div>
          <Card>
            <CardContent className="pt-6">
              <h3 className="text-xl font-semibold mb-4">Core Expertise</h3>
              
              <div className="space-y-3">
                <div>
                  <p className="font-medium">Mobile Development</p>
                  <div className="w-full bg-muted rounded-full h-2">
                    <div className="bg-primary h-2 rounded-full w-[95%]"></div>
                  </div>
                </div>
                
                <div>
                  <p className="font-medium">Flutter & Dart</p>
                  <div className="w-full bg-muted rounded-full h-2">
                    <div className="bg-primary h-2 rounded-full w-[90%]"></div>
                  </div>
                </div>
                
                <div>
                  <p className="font-medium">App Architecture</p>
                  <div className="w-full bg-muted rounded-full h-2">
                    <div className="bg-primary h-2 rounded-full w-[85%]"></div>
                  </div>
                </div>
                
                <div>
                  <p className="font-medium">State Management</p>
                  <div className="w-full bg-muted rounded-full h-2">
                    <div className="bg-primary h-2 rounded-full w-[88%]"></div>
                  </div>
                </div>
                
                <div>
                  <p className="font-medium">Firebase Integration</p>
                  <div className="w-full bg-muted rounded-full h-2">
                    <div className="bg-primary h-2 rounded-full w-[80%]"></div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default About;
