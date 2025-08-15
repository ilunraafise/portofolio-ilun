import { Code, Coffee, Lightbulb, Users } from 'lucide-react';

const About = () => {
  const highlights = [
    {
      icon: <Code className="w-6 h-6" />,
      title: "3+ Years Experience",
      description: "Building scalable web applications"
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "Team Collaboration",
      description: "Working with cross-functional teams"
    },
    {
      icon: <Lightbulb className="w-6 h-6" />,
      title: "Problem Solving",
      description: "Finding creative solutions to challenges"
    },
    {
      icon: <Coffee className="w-6 h-6" />,
      title: "Continuous Learning",
      description: "Always exploring new technologies"
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
                Hello! I'm John, a passionate full-stack developer with over 3 years of experience 
                in creating modern web applications. My journey in tech started with a curiosity 
                about how websites work, and it has evolved into a deep love for problem-solving 
                and building solutions that impact users positively.
              </p>
              <p>
                I specialize in React, Node.js, and modern web technologies, but I'm always eager 
                to learn new tools and frameworks. When I'm not coding, you'll find me exploring 
                the latest tech trends, contributing to open-source projects, or sharing knowledge 
                with the developer community.
              </p>
              <p>
                I believe in writing clean, maintainable code and creating user experiences that 
                are both beautiful and functional. Let's build something amazing together!
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