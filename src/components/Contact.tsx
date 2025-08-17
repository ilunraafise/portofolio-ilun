import { Mail, Phone, MapPin, Github, Linkedin} from 'lucide-react';
import ContactForm from './ContactForm';

const Contact = () => {
  const contactInfo = [
    {
      icon: <Mail className="w-6 h-6" />,
      label: "Email",
      value: "businessforilun@gmail.com",
      href: "mailto:businessforilun@gmail.com"
    },
    {
      icon: <Phone className="w-6 h-6" />,
      label: "Phone/Whats App",
      value: "+62895606008376",
      href: "https://wa.me/62895606008376"
    },
    {
      icon: <MapPin className="w-6 h-6" />,
      label: "Location",
      value: "Depok, Jawa Barat",
      href: null
    }
  ];

  const socialLinks = [
    {
      icon: <Github className="w-6 h-6" />,
      label: "GitHub",
      href: "https://github.com/ilunraafise"
    },
    {
      icon: <Linkedin className="w-6 h-6" />,
      label: "LinkedIn",
      href: "https://www.linkedin.com/in/ilunraafiseptian/"
    },
  ];

  return (
    <section id="contact" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
            Get In Touch
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Looking for a developer to bring your ideas to life? Let's discuss how I can help with your next project.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="animate-slide-up">
            <h3 className="text-2xl font-semibold text-primary mb-6">
              Let's Connect
            </h3>
            <p className="text-muted-foreground mb-8 leading-relaxed">
              Have a question about my work, an idea for a project, or just want to connect? 
              I'd love to hear from you I'm always open to new conversations and opportunities.
            </p>

            {/* Contact Details */}
            <div className="space-y-4 mb-8">
              {contactInfo.map((item, index) => (
                <div key={index} className="flex items-center group">
                  <div className="text-accent mr-4 group-hover:scale-110 transition-transform duration-300">
                    {item.icon}
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">{item.label}</p>
                    {item.href ? (
                      <a
                        href={item.href}
                        className="text-primary font-medium hover:text-accent transition-colors duration-300"
                      >
                        {item.value}
                      </a>
                    ) : (
                      <p className="text-primary font-medium">{item.value}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>

            {/* Social Links */}
            <div>
              <p className="text-sm text-muted-foreground mb-4">Follow me on:</p>
              <div className="flex space-x-4">
                {socialLinks.map((link, index) => (
                  <a
                    key={index}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-muted-foreground hover:text-accent p-2 rounded-lg hover:bg-accent/10 transition-all duration-300 group"
                    aria-label={link.label}
                  >
                    <div className="group-hover:scale-110 transition-transform duration-300">
                      {link.icon}
                    </div>
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="animate-slide-up">
            <h3 className="text-2xl font-semibold text-primary mb-6">
              Send a Message
            </h3>
            <ContactForm />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;