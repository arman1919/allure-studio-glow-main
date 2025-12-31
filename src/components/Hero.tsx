import { motion } from 'framer-motion';
import { forwardRef } from 'react';
import { ArrowDown, Sparkles } from 'lucide-react';
import { Button } from '@/components/ui/button';
import heroImage from '@/assets/hero-beauty.jpg';

interface HeroProps {
  id?: string;
}

const Hero = forwardRef<HTMLElement, HeroProps>(({ id }, ref) => {
  const scrollToServices = () => {
    const element = document.getElementById('services');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      ref={ref}
      id={id}
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <motion.img
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          transition={{ duration: 2, ease: 'easeOut' }}
          src={heroImage}
          alt="Lumière Beauty - Luxury Beauty Services"
          className="w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/70 to-background/40" />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-background/50" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 py-20 md:py-32">
        <div className="max-w-2xl">
          {/* Tagline */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex items-center gap-2 mb-6"
          >
            <Sparkles className="w-4 h-4 text-primary" />
            <span className="font-sans text-xs md:text-sm tracking-[0.3em] uppercase text-primary">
              Exclusive Beauty Experience
            </span>
          </motion.div>

          {/* Main Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="font-serif text-4xl md:text-6xl lg:text-7xl font-light leading-tight mb-6"
          >
            Reveal Your
            <br />
            <span className="text-gradient font-medium">Inner Radiance</span>
          </motion.h1>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="font-sans text-base md:text-lg text-muted-foreground max-w-lg mb-8 leading-relaxed"
          >
            Experience transformative beauty treatments crafted by expert artists. 
            Where luxury meets artistry, and every visit leaves you feeling extraordinary.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="flex flex-col sm:flex-row gap-4"
          >
            <Button
              variant="hero"
              size="xl"
              onClick={() => {
                const element = document.getElementById('contact');
                if (element) element.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              Book Your Session
            </Button>
            <Button
              variant="outline"
              size="xl"
              onClick={scrollToServices}
            >
              Explore Services
            </Button>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.button
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        onClick={scrollToServices}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-muted-foreground hover:text-primary transition-colors duration-300"
      >
        <span className="font-sans text-xs tracking-wider uppercase">Discover</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
        >
          <ArrowDown size={20} />
        </motion.div>
      </motion.button>

      {/* Decorative Elements */}
      <div className="absolute top-1/4 right-8 md:right-16 w-px h-32 bg-gradient-to-b from-transparent via-primary/30 to-transparent" />
      <div className="absolute bottom-1/4 left-8 md:left-16 w-px h-32 bg-gradient-to-b from-transparent via-primary/30 to-transparent" />
    </section>
  );
});

Hero.displayName = 'Hero';

export default Hero;
