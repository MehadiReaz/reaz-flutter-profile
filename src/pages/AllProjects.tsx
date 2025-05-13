import React, { useEffect, useState } from 'react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ExternalLink, ArrowLeft } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { 
  Pagination, 
  PaginationContent, 
  PaginationItem, 
  PaginationLink, 
  PaginationNext, 
  PaginationPrevious 
} from '@/components/ui/pagination';

const AllProjects = () => {
  const navigate = useNavigate();
  const [currentPage, setCurrentPage] = useState(1);
  const [animatedItems, setAnimatedItems] = useState<boolean[]>([]);
  
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
      image: '/uploads/smarthrm.webp'
    },
    {
      title: 'Snakebite Emergency App',
      description: 'Life-saving app with antivenom hospital contacts and first aid guides',
      tech: 'Flutter, Geolocation, GetX',
      links: [
        { title: 'Google Play', url: 'https://play.google.com/store/apps/details?id=com.smartsoftware.snakebite&hl=bn' },
        { title: 'App Store', url: 'https://apps.apple.com/us/app/snake-bite-awareness-app/id6504925995' }
      ],
      image: '/uploads/snakebite.webp'
    },
    {
      title: 'Kokonte',
      description: 'Buy and sell a wide range of items across various categories.',
      tech: 'Flutter, Getx, Firebase',
      links: [
        { title: 'Google Play', url: 'https://play.google.com/store/apps/details?id=com.kokonte.app&hl=en_US' }
      ],
      image: '/uploads/kokonte.jpeg'
    },
    {
      title: 'MemberME',
      description: 'MemberMe is the ultimate networking tool for professionals, leveraging NFC and AI to create lasting connections.',
      tech: 'Flutter, Getx, Stripe, Paypal, OpenAI',
      links: [
        { title: 'Google Play', url: 'https://play.google.com/store/apps/details?id=com.memberme.app.membermeapps&hl=en_US' }
      ],
      image: '/uploads/memberme.png'
    },
    {
      title: 'E-Commerce Dashboard',
      description: 'Admin dashboard for managing products, orders, and customers',
      tech: 'Flutter, Provider, Firebase, REST API',
      links: [
        { title: 'View Demo', url: '#' }
      ],
      image: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b'
    },
    {
      title: 'Fitness Tracker App',
      description: 'Track workouts, nutrition, and progress with customizable plans',
      tech: 'Flutter, BLoC, SQLite, Health API',
      links: [
        { title: 'Google Play', url: '#' }
      ],
      image: 'https://images.unsplash.com/photo-1517836357463-d25dfeac3438'
    },
    {
      title: 'Weather Forecast App',
      description: 'Real-time weather updates with 7-day forecasts and location tracking',
      tech: 'Flutter, GetX, OpenWeather API, Geolocation',
      links: [
        { title: 'Demo Link', url: '#' }
      ],
      image: 'https://images.unsplash.com/photo-1584267385494-9fdd9a71ad75'
    }
  ];
  
  const itemsPerPage = 4;
  const totalPages = Math.ceil(projects.length / itemsPerPage);
  const currentProjects = projects.slice(
    (currentPage - 1) * itemsPerPage, 
    currentPage * itemsPerPage
  );
  
  useEffect(() => {
    // Initialize animation states
    setAnimatedItems(Array(currentProjects.length).fill(false));
    
    // Trigger animations sequentially
    const timeout = setTimeout(() => {
      currentProjects.forEach((_, index) => {
        setTimeout(() => {
          setAnimatedItems(prev => {
            const newState = [...prev];
            newState[index] = true;
            return newState;
          });
        }, index * 200);
      });
    }, 300);
    
    return () => clearTimeout(timeout);
  }, [currentPage, currentProjects.length]);

  return (
    <div className="min-h-screen bg-background py-16 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="flex items-center mb-8">
          <Button 
            variant="ghost" 
            onClick={() => navigate('/')} 
            className="mr-4"
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Home
          </Button>
          
          <h1 className="text-3xl font-bold text-primary">All Projects</h1>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
          {currentProjects.map((project, index) => (
            <Card 
              key={index} 
              className={`overflow-hidden glass-card transform transition-all duration-700 ${
                animatedItems[index] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
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
        
        {totalPages > 1 && (
          <Pagination className="mt-12">
            <PaginationContent>
              {currentPage > 1 && (
                <PaginationItem>
                  <PaginationPrevious onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))} />
                </PaginationItem>
              )}
              
              {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                <PaginationItem key={page}>
                  <PaginationLink 
                    onClick={() => setCurrentPage(page)}
                    isActive={page === currentPage}
                  >
                    {page}
                  </PaginationLink>
                </PaginationItem>
              ))}
              
              {currentPage < totalPages && (
                <PaginationItem>
                  <PaginationNext onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))} />
                </PaginationItem>
              )}
            </PaginationContent>
          </Pagination>
        )}
      </div>
    </div>
  );
};

export default AllProjects;
