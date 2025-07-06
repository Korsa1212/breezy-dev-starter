import { ExternalLink, Github } from 'lucide-react';
import { Button } from './ui/button';
import { Card, CardContent } from './ui/card';

interface ProjectCardProps {
  title: string;
  description: string;
  image: string;
  technologies: string[];
  githubUrl?: string;
  liveUrl?: string;
  featured?: boolean;
}

const ProjectCard = ({ 
  title, 
  description, 
  image, 
  technologies, 
  githubUrl, 
  liveUrl, 
  featured = false 
}: ProjectCardProps) => {
  return (
    <Card className={`group overflow-hidden transition-all duration-300 hover:shadow-medium hover:-translate-y-2 ${
      featured ? 'ring-2 ring-primary/20' : ''
    }`}>
      <div className="relative overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-hero-gradient opacity-0 group-hover:opacity-90 transition-opacity duration-300 flex items-center justify-center">
          <div className="flex space-x-4">
            {githubUrl && (
              <Button
                variant="secondary"
                size="icon"
                asChild
                className="bg-background/90 hover:bg-background"
              >
                <a href={githubUrl} target="_blank" rel="noopener noreferrer">
                  <Github className="h-4 w-4" />
                </a>
              </Button>
            )}
            {liveUrl && (
              <Button
                variant="secondary"
                size="icon"
                asChild
                className="bg-background/90 hover:bg-background"
              >
                <a href={liveUrl} target="_blank" rel="noopener noreferrer">
                  <ExternalLink className="h-4 w-4" />
                </a>
              </Button>
            )}
          </div>
        </div>
        {featured && (
          <div className="absolute top-4 left-4">
            <span className="bg-primary text-primary-foreground text-xs font-semibold px-2 py-1 rounded-full">
              Featured
            </span>
          </div>
        )}
      </div>
      <CardContent className="p-6">
        <h3 className="font-semibold text-lg mb-2 group-hover:text-primary transition-colors duration-300">
          {title}
        </h3>
        <p className="text-muted-foreground mb-4 text-sm leading-relaxed">
          {description}
        </p>
        <div className="flex flex-wrap gap-2">
          {technologies.map((tech) => (
            <span
              key={tech}
              className="bg-secondary text-secondary-foreground text-xs px-2 py-1 rounded-md font-medium"
            >
              {tech}
            </span>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default ProjectCard;