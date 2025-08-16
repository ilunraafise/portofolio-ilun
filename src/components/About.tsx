import { Code, Lightbulb, Palette, Users } from 'lucide-react';

const About = () => {
  const highlights = [
    {
      icon: <Code className="w-6 h-6" />,
      title: "Full-stack Web Development",
      description: "Creating end-to-end web solutions with Laravel, MySql, Tailwind CSS, React Js & Vue Js"
    },
    {
      icon: <Palette className="w-6 h-6" />,
      title: "UI/UX Design",
      description: "Designing intuitive and user-friendly interfaces with Figma"
    },
    {
      icon: <Lightbulb className="w-6 h-6" />,
      title: "Problem Solving",
      description: "Translating complex needs into efficient digital solutions"
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "Collaboration & Leadership",
      description: "Experience working with teams and contributing in organizational roles"
    }
  ];

  return (
    <section id="about" className="py-20 bg-secondary/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
            About Me
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Get to know more about my journey, skills, and passion for development
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className="animate-slide-up">
            <h3 className="text-2xl font-semibold text-primary mb-6">
              Crafting Digital Experiences
            </h3>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                Hello, my name Ilun Raafi Septian, i am an Information Systems graduate with a strong interest in UI/UX Design and Full-Stack Web Development. 
                With an educational background that combines technology, design, and system analysis, 
                I have the ability to build digital solutions that are functional while having an optimal user experience.
              </p>
              <p>
                I have experience as a Computer Officer at the Ministry of State Secretariat of the Republic of Indonesia & as a Analyst Infrastructure Management & Optimization at the PT Pertamina Gas, 
                Staff of the Research & Development Division of the Information Systems Student Association, 
                as well as participating in UI/UX Design Certified Independent Study at GreatEdu. In the academic process, 
                I worked on various projects, including the development of a web-based Computer-Based Test (CBT) using Laravel, MySQL, Tailwind CSS, and Figma. 
                My expertise includes interface design, system development, and digital product testing and optimization.
              </p>
              <p>
                I am known as a detail-oriented person, quick to adapt, and happy to learn new technologies. Every project I work on is always oriented towards user needs and system efficiency. 
                My goal is to develop a career in technology by contributing to the creation of digital products that are innovative, useful, and have a positive impact on society.
              </p>
            </div>
          </div>

          {/* Highlights Grid */}
          <div className="grid sm:grid-cols-2 gap-6 animate-slide-up">
            {highlights.map((item, index) => (
              <div
                key={index}
                className="gradient-card p-6 rounded-xl shadow-elegant hover:shadow-hover transition-all duration-300 group"
              >
                <div className="text-accent mb-4 group-hover:scale-110 transition-transform duration-300">
                  {item.icon}
                </div>
                <h4 className="text-lg font-semibold text-primary mb-2">
                  {item.title}
                </h4>
                <p className="text-muted-foreground text-sm">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;