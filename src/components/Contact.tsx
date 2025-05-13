import React, { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Mail, Github, Linkedin, Loader2 } from 'lucide-react';
import { useToast } from '@/components/ui/use-toast';

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prevData => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Basic validation
    if (!formData.name || !formData.email || !formData.subject || !formData.message) {
      toast({
        title: "Error",
        description: "Please fill in all fields",
        variant: "destructive"
      });
      return;
    }

    // Email validation
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(formData.email)) {
      toast({
        title: "Error",
        description: "Please enter a valid email address",
        variant: "destructive"
      });
      return;
    }

    setIsSubmitting(true);

    try {
      const response = await fetch("https://formspree.io/f/meqbvwrw", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          subject: formData.subject,
          message: formData.message,
        }),
      });

      if (response.ok) {
        toast({
          title: "Message sent!",
          description: "Thank you for your message. I'll get back to you soon.",
        });
        
        // Clear form
        setFormData({
          name: '',
          email: '',
          subject: '',
          message: ''
        });
      } else {
        throw new Error('Failed to send message');
      }
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to send message. Please try again later.",
        variant: "destructive"
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-16 px-4 max-w-6xl mx-auto">
      <h2 className="section-title">Get In Touch</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
        <Card className="h-full">
          <CardContent className="pt-6">
            <h3 className="text-xl font-semibold mb-6">Contact Information</h3>
            
            <div className="space-y-6">
              <div className="flex items-center gap-3">
                <Mail className="h-5 w-5 text-primary" />
                <a href="mailto:mehadireaz@gmail.com" className="hover:text-primary transition-colors">mehadireaz@gmail.com</a>
              </div>
              
              <div className="flex items-center gap-3">
                <Github className="h-5 w-5 text-primary" />
                <a href="https://github.com/MehadiReaz" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">
                  github.com/MehadiReaz
                </a>
              </div>
              
              <div className="flex items-center gap-3">
                <Linkedin className="h-5 w-5 text-primary" />
                <a href="https://linkedin.com/in/mehadi-hasan-reaz" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">
                  linkedin.com/in/mehadi-hasan-reaz
                </a>
              </div>
            </div>
            
            <div className="mt-8">
              <h4 className="font-medium mb-3">Connect with me</h4>
              <div className="flex gap-3">
                <Button variant="outline" size="icon" asChild>
                  <a href="https://github.com/MehadiReaz" target="_blank" rel="noopener noreferrer">
                    <Github className="h-4 w-4" />
                  </a>
                </Button>
                <Button variant="outline" size="icon" asChild>
                  <a href="https://linkedin.com/in/mehadi-hasan-reaz" target="_blank" rel="noopener noreferrer">
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
            
            <form className="space-y-4" onSubmit={handleSubmit}>
              <div>
                <Input 
                  placeholder="Your Name" 
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                />
              </div>
              
              <div>
                <Input 
                  type="email" 
                  placeholder="Your Email" 
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                />
              </div>
              
              <div>
                <Input 
                  placeholder="Subject" 
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                />
              </div>
              
              <div>
                <Textarea 
                  placeholder="Your Message" 
                  className="min-h-[120px]"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                />
              </div>
              
              <Button 
                className="w-full" 
                type="submit"
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  <>
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    Sending...
                  </>
                ) : (
                  'Send Message'
                )}
              </Button>
            </form>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default Contact;
