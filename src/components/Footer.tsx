import { Heart } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary text-primary-foreground py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-center items-center">
          <p className="text-primary-foreground/80 flex items-center justify-center">
            © {currentYear} Made with{' '}
            {' by Ilun Raafi Septian'}
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;