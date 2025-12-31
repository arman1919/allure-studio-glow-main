import { motion } from 'framer-motion';
import { Instagram, Facebook, Twitter, ArrowUp } from 'lucide-react';
import Logo from './Logo';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const socialLinks = [
    { icon: Instagram, href: '#', label: 'Instagram' },
    { icon: Facebook, href: '#', label: 'Facebook' },
    { icon: Twitter, href: '#', label: 'Twitter' },
  ];

  const quickLinks = [
    { label: 'Our Services', id: 'services' },
    { label: 'Our Works', id: 'works' },
    { label: 'Contact', id: 'contact' },
  ];

  return (
    <footer className="bg-card py-16 md:py-20 border-t border-border/50">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-12 mb-12">
          {/* Brand Column */}
          <div>
            <Logo onClick={scrollToTop} className="mb-6" />
            <p className="font-sans text-sm text-muted-foreground leading-relaxed max-w-xs">
              Where artistry meets luxury. Experience the transformation 
              you deserve at Lumière Beauty Studio.
            </p>
            
            {/* Social Links */}
            <div className="flex gap-4 mt-6">
              {socialLinks.map((social) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  aria-label={social.label}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center text-muted-foreground hover:bg-primary hover:text-primary-foreground transition-all duration-300"
                >
                  <social.icon size={18} />
                </motion.a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-serif text-lg mb-6">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.id}>
                  <button
                    onClick={() => scrollToSection(link.id)}
                    className="font-sans text-sm text-muted-foreground hover:text-primary transition-colors duration-300"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Hours */}
          <div>
            <h4 className="font-serif text-lg mb-6">Working Hours</h4>
            <ul className="space-y-3 font-sans text-sm text-muted-foreground">
              <li className="flex justify-between">
                <span>Monday - Friday</span>
                <span>9:00 AM - 8:00 PM</span>
              </li>
              <li className="flex justify-between">
                <span>Saturday</span>
                <span>10:00 AM - 6:00 PM</span>
              </li>
              <li className="flex justify-between">
                <span>Sunday</span>
                <span>Closed</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="h-px bg-border/50 mb-8" />

        {/* Bottom Row */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="font-sans text-xs text-muted-foreground text-center md:text-left">
            © {new Date().getFullYear()} Lumière Beauty Studio. All rights reserved.
          </p>
          
          {/* Back to Top */}
          <motion.button
            onClick={scrollToTop}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors duration-300"
          >
            <span className="font-sans text-xs tracking-wider uppercase">Back to Top</span>
            <ArrowUp size={16} />
          </motion.button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
