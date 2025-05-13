import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Mail, Github, Linkedin } from 'lucide-react';
const Contact = () => {
  return <section id="contact" className="py-16 px-4 max-w-6xl mx-auto">
      <h2 className="section-title">Get In Touch</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
        <Card className="h-full">
          <CardContent className="pt-6">
            <h3 className="text-xl font-semibold mb-6">Contact Information</h3>
            
            <div className="space-y-6">
              <div className="flex items-center gap-3">
                <Mail className="h-5 w-5 text-primary" />
                <a href="mailto:contact@mehadihasan.dev" className="hover:text-primary transition-colors">mehadireaz@gmail.com</a>
              </div>
              
              <div className="flex items-center gap-3">
                <Github className="h-5 w-5 text-primary" />
                <a href="https://github.com/mehadihasan" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">
                  github.com/mehadihasan
                </a>
              </div>
              
              <div className="flex items-center gap-3">
                <Linkedin className="h-5 w-5 text-primary" />
                <a href="https://linkedin.com/in/mehadihasan" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">
                  linkedin.com/in/mehadihasan
                </a>
              </div>
            </div>
            
            <div className="mt-8">
              <h4 className="font-medium mb-3">Connect with me</h4>
              <div className="flex gap-3">
                <Button variant="outline" size="icon" asChild>
                  <a href="https://github.com/mehadihasan" target="_blank" rel="noopener noreferrer">
                    <Github className="h-4 w-4" />
                  </a>
                </Button>
                <Button variant="outline" size="icon" asChild>
                  <a href="https://linkedin.com/in/mehadihasan" target="_blank" rel="noopener noreferrer">
                    <Linkedin className="h-4 w-4" />
                  </a>
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>
        
        <Card>
          <CardContent className="pt-6">
            <h3 className="text-xl font-semibold mb-6">Send Me a Message</h3>
            
            <form className="space-y-4">
              <div>
                <Input placeholder="Your Name" />
              </div>
              
              <div>
                <Input type="email" placeholder="Your Email" />
              </div>
              
              <div>
                <Input placeholder="Subject" />
              </div>
              
              <div>
                <Textarea placeholder="Your Message" className="min-h-[120px]" />
              </div>
              
              <Button className="w-full">Send Message</Button>
            </form>
          </CardContent>
        </Card>
      </div>
    </section>;
};
export default Contact;