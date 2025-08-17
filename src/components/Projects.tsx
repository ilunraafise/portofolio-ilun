import ProjectCard from './ProjectCard';
import project1 from '@/assets/project-cbt.png';
import project2 from '@/assets/project-waste-wallet.png';
import project3 from '@/assets/project-dmetro.png';
import project4 from '@/assets/project-jakaya.png';


const Projects = () => {
  const projects = [
    {
      title: "Exam Online Computer-Based-Test (CBT) 2025",
      description: "An online exam platform (CBT) built with Laravel, MySQL, and Tailwind CSS. Features include user authentication, question bank management, automated scoring, and an intuitive admin dashboard for schools.",
      image: project1,
      technologies: ["Laravel", "MySQL", "Tailwind CSS", "Blade", "Figma"],
      liveUrl: "https://mi-islamiyah-guppi.site",
      githubUrl: "https://github.com/ilunraafise/ujian"
    },
    {
      title: "Waste Wallet Trash Bank App - Figma 2024",
      description: "Collaborating with the team to develop a waste wallet trash bank app for the final independent study at Merdeka University.",
      image: project2,
      technologies: ["Figma", "UX Research", "Prototyping", "Collaboration", "UI Design"],
      liveUrl: "https://www.figma.com/proto/cFJCxoeU0I0LeSKdyXBfBc/%F0%9F%91%8F-Wastewallet---Team-1?node-id=845-6960&t=BfsLsOQ49cbytGIZ-1&scaling=scale-down&content-scaling=fixed&page-id=720%3A10812&starting-point-node-id=845%3A6657",
    },
    {
      title: "D'Metro Intuitiva App 2024",
      description: "Built a real-time bus tracking solution in collaboration with the team, designed to improve accessibility and convenience for daily commuters.",
      image: project3,
      technologies: ["Figma", "UX Research", "Prototyping", "Collaboration", "UI Design"],
      liveUrl: "https://www.figma.com/proto/RsBhdkbrEvu9a8wuMmi1c6/Project-Intuitiva?node-id=239-6919&t=F2nYQqScbIamEuwm-1&scaling=scale-down&content-scaling=fixed&page-id=170%3A1619&starting-point-node-id=170%3A1621",
    },
    {
      title: "Jakarta Raya Katering JAKAYA 2024",
      description: "Developing an app design for food ordering in Jakarta, this project is to fulfill the requirements for obtaining a BNSP System Analyst certificate.",
      image: project4,
      technologies: ["Figma", "UX Research", "Prototyping", "UI Design"],
      liveUrl: "https://www.figma.com/proto/t47QTNTYJs0LRUd5NnYNiB/BNSP?node-id=11-1062&p=f&t=lqXejsJkaY8GgR5G-1&scaling=scale-down&content-scaling=fixed&page-id=11%3A1057&starting-point-node-id=11%3A1058&show-proto-sidebar=1",
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
            A selection of recent projects demonstrating my expertise in web development and design
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
            onClick={() => window.open('https://github.com/ilunraafise', '_blank')}
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