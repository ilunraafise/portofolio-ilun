import ProjectCard from './ProjectCard';
import project1 from '@/assets/project-1.jpg';
import project2 from '@/assets/project-2.jpg';
import project3 from '@/assets/project-3.jpg';

const Projects = () => {
  const projects = [
    {
      title: "E-Commerce Platform",
      description: "A full-stack e-commerce solution built with React, Node.js, and PostgreSQL. Features include user authentication, payment integration, and admin dashboard.",
      image: project1,
      technologies: ["React", "Node.js", "PostgreSQL", "Stripe", "Tailwind CSS"],
      liveUrl: "https://example.com",
      githubUrl: "https://github.com/johndoe/ecommerce-platform"
    },
    {
      title: "Task Management App",
      description: "A collaborative project management tool with real-time updates, drag-and-drop functionality, and team collaboration features.",
      image: project2,
      technologies: ["React", "TypeScript", "Firebase", "Material-UI", "Socket.io"],
      liveUrl: "https://example.com",
      githubUrl: "https://github.com/johndoe/task-manager"
    },
    {
      title: "Weather Forecast App",
      description: "A responsive weather application with location-based forecasts, interactive maps, and detailed weather analytics.",
      image: project3,
      technologies: ["React", "Weather API", "Chart.js", "CSS3", "PWA"],
      liveUrl: "https://example.com",
      githubUrl: "https://github.com/johndoe/weather-app"
    }
  ];

  return (
    <section id="projects" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
            Featured Projects
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A showcase of my recent work and the technologies I love working with
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="animate-slide-up" style={{ animationDelay: `${index * 0.1}s` }}>
              <ProjectCard {...project} />
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-12 animate-fade-in">
          <p className="text-muted-foreground mb-4">
            Want to see more of my work?
          </p>
          <button
            onClick={() => window.open('https://github.com/johndoe', '_blank')}
            className="text-accent hover:text-accent/80 font-medium transition-colors duration-300"
          >
            View all projects on GitHub →
          </button>
        </div>
      </div>
    </section>
  );
};

export default Projects;