import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import Logo from './Logo';
import { Button } from '@/components/ui/button';

interface HeaderProps {
  onLogoClick: () => void;
}

const Header = ({ onLogoClick }: HeaderProps) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMobileMenuOpen(false);
  };

  const navItems = [
    { label: 'Our Services', id: 'services' },
    { label: 'Our Works', id: 'works' },
    { label: 'Contact', id: 'contact' },
  ];

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8, ease: 'easeOut' }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? 'bg-background/95 backdrop-blur-md shadow-lg py-3'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="container mx-auto px-4">
        <nav className="flex items-center justify-between">
          {/* Logo */}
          <Logo onClick={onLogoClick} />

          {/* Desktop Navigation */}
          <ul className="hidden md:flex items-center gap-8">
            {navItems.map((item, index) => (
              <motion.li
                key={item.id}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 + index * 0.1 }}
              >
                <button
                  onClick={() => scrollToSection(item.id)}
                  className="relative font-sans text-sm tracking-wider text-foreground/80 hover:text-primary transition-colors duration-300 group py-2"
                >
                  {item.label}
                  <span className="absolute bottom-0 left-0 w-0 h-px bg-primary transition-all duration-300 group-hover:w-full" />
                </button>
              </motion.li>
            ))}
          </ul>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden text-foreground"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </Button>
        </nav>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-background/98 backdrop-blur-lg border-t border-border"
          >
            <ul className="container mx-auto px-4 py-6 space-y-4">
              {navItems.map((item, index) => (
                <motion.li
                  key={item.id}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <button
                    onClick={() => scrollToSection(item.id)}
                    className="block w-full text-left font-sans text-lg tracking-wider text-foreground/80 hover:text-primary transition-colors duration-300 py-2"
                  >
                    {item.label}
                  </button>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
};

export default Header;
