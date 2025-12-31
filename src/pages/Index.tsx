import { useRef } from 'react';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Services from '@/components/Services';
import Works from '@/components/Works';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

const Index = () => {
  const heroRef = useRef<HTMLElement>(null);

  const scrollToHero = () => {
    if (heroRef.current) {
      heroRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <main className="min-h-screen bg-background">
      <Header onLogoClick={scrollToHero} />
      <Hero ref={heroRef} id="hero" />
      <Services />
      <Works />
      <Contact />
      <Footer />
    </main>
  );
};

export default Index;
