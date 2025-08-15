import { ExternalLink, Github } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface ProjectCardProps {
  title: string;
  description: string;
  image: string;
  technologies: string[];
  liveUrl?: string;
  githubUrl?: string;
}

const ProjectCard = ({ title, description, image, technologies, liveUrl, githubUrl }: ProjectCardProps) => {
  return (
    <div className="gradient-card rounded-xl overflow-hidden shadow-elegant hover:shadow-hover transition-all duration-300 group">
      {/* Project Image */}
      <div className="relative overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
        />
        <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
      </div>

      {/* Project Info */}
      <div className="p-6">
        <h3 className="text-xl font-semibold text-primary mb-3 group-hover:text-accent transition-colors duration-300">
          {title}
        </h3>
        <p className="text-muted-foreground mb-4 leading-relaxed">
          {description}
        </p>

        {/* Technologies */}
        <div className="flex flex-wrap gap-2 mb-6">
          {technologies.map((tech, index) => (
            <span
              key={index}
              className="px-3 py-1 bg-accent/10 text-accent text-sm rounded-full border border-accent/20"
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Action Buttons */}
        <div className="flex gap-3">
          {liveUrl && (
            <Button
              size="sm"
              className="bg-accent hover:bg-accent/90 text-accent-foreground flex-1"
              onClick={() => window.open(liveUrl, '_blank')}
            >
              <ExternalLink className="mr-2" size={16} />
              Live Demo
            </Button>
          )}
          {githubUrl && (
            <Button
              variant="outline"
              size="sm"
              className="border-primary text-primary hover:bg-primary hover:text-primary-foreground flex-1"
              onClick={() => window.open(githubUrl, '_blank')}
            >
              <Github className="mr-2" size={16} />
              GitHub
            </Button>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;