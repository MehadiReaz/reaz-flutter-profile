
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { GraduationCap } from 'lucide-react';

const Education = () => {
  return (
    <section id="education" className="py-16 px-4 bg-muted/30">
      <div className="max-w-6xl mx-auto">
        <h2 className="section-title">Education & Publications</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
          <Card>
            <CardContent className="pt-6">
              <div className="flex items-center gap-3 mb-4">
                <GraduationCap className="h-6 w-6 text-primary" />
                <h3 className="text-xl font-bold">Education</h3>
              </div>
              
              <div className="mb-2">
                <h4 className="text-lg font-semibold">BSc. in Computer Science and Engineering</h4>
                <p className="text-muted-foreground">American International University-Bangladesh</p>
                <p className="text-sm">2020 - 2024</p>
              </div>
            </CardContent>
          </Card>
          
          <Card>
            <CardContent className="pt-6">
              <div className="flex items-center gap-3 mb-4">
                <GraduationCap className="h-6 w-6 text-primary" />
                <h3 className="text-xl font-bold">Publications</h3>
              </div>
              
              <div>
                <h4 className="text-lg font-semibold">An Efficient Cloud-Powered Bidding Marketplace</h4>
                <p className="text-muted-foreground mt-1">
                  Merging cloud computing with traditional bidding systems
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Education;
