import { Download, Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';
import profilePhoto from '@/assets/foto-profile-background.jpg';

const Hero = () => {
  const handleDownloadCV = () => {
    // Placeholder for CV download functionality
    console.log('Download CV clicked');
  };

  const handleContactMe = () => {
    const contactSection = document.querySelector('#contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center pt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center animate-fade-in">
          {/* Profile Photo */}
          <div className="mb-8">
            <img
              src={profilePhoto}
              alt="Ilun Raafi Profile"
              className="w-40 h-40 md:w-60 md:h-60 rounded-full mx-auto shadow-elegant border-4 border-accent/20 hover:scale-105 transition-transform duration-300"
            />
          </div>

          {/* Name and Title */}
          <h1 className="text-4xl md:text-6xl font-bold text-primary mb-4">
            Ilun Raafi Septian
          </h1>
          <h2 className="text-xl md:text-2xl text-accent font-medium mb-6">
            Software Development & UI/UX Design Enthusiast
          </h2>

          {/* Description */}
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8 leading-relaxed">
            I am an Information Systems graduate with a focus on UI/UX Design and Web Development. 
            Experienced in working on projects from interface design to system implementation, 
            including web-based CBT using Laravel, MySQL, Tailwind CSS, and Figma.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button
              onClick={handleDownloadCV}
              size="lg"
              className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-3 text-lg shadow-elegant hover:shadow-hover transition-all duration-300"
            >
              <Download className="mr-2" size={20} />
              Download CV
            </Button>
            <Button
              onClick={handleContactMe}
              variant="outline"
              size="lg"
              className="border-accent text-accent hover:bg-accent hover:text-accent-foreground px-8 py-3 text-lg transition-all duration-300"
            >
              <Mail className="mr-2" size={20} />
              Contact Me
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;