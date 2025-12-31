import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import serviceFacial from '@/assets/service-facial.jpg';
import serviceMakeup from '@/assets/service-makeup.jpg';
import serviceLashes from '@/assets/service-lashes.jpg';
import serviceNails from '@/assets/service-nails.jpg';

const services = [
  {
    title: 'Facial Treatments',
    description: 'Rejuvenating facials tailored to your skin type. Experience the ultimate in skincare luxury.',
    image: serviceFacial,
    price: 'From $150',
  },
  {
    title: 'Professional Makeup',
    description: 'Stunning looks for any occasion. From natural elegance to glamorous transformations.',
    image: serviceMakeup,
    price: 'From $120',
  },
  {
    title: 'Lash Extensions',
    description: 'Luxurious lash enhancements that define and captivate. Wake up beautiful every day.',
    image: serviceLashes,
    price: 'From $180',
  },
  {
    title: 'Nail Artistry',
    description: 'Exquisite nail designs and treatments. Every detail polished to perfection.',
    image: serviceNails,
    price: 'From $80',
  },
];

const ServiceCard = ({ service, index }: { service: typeof services[0]; index: number }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 60 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 60 }}
      transition={{ duration: 0.8, delay: index * 0.15 }}
      className="group relative overflow-hidden rounded-lg cursor-pointer"
    >
      {/* Image Container */}
      <div className="relative aspect-[3/4] overflow-hidden">
        <motion.img
          src={service.image}
          alt={`${service.title} - Lumière Beauty Service`}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent opacity-80 group-hover:opacity-90 transition-opacity duration-500" />
        
        {/* Content */}
        <div className="absolute inset-0 p-6 flex flex-col justify-end">
          {/* Price Tag */}
          <motion.span
            initial={{ x: -20, opacity: 0 }}
            animate={isInView ? { x: 0, opacity: 1 } : { x: -20, opacity: 0 }}
            transition={{ delay: 0.3 + index * 0.15 }}
            className="font-sans text-xs tracking-wider text-primary mb-2"
          >
            {service.price}
          </motion.span>
          
          {/* Title */}
          <h3 className="font-serif text-xl md:text-2xl text-foreground mb-2 group-hover:text-primary transition-colors duration-300">
            {service.title}
          </h3>
          
          {/* Description */}
          <p className="font-sans text-sm text-muted-foreground leading-relaxed opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-500">
            {service.description}
          </p>
          
          {/* Decorative Line */}
          <div className="mt-4 h-px bg-primary/30 w-0 group-hover:w-full transition-all duration-700" />
        </div>
      </div>
    </motion.div>
  );
};

const Services = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: '-100px' });

  return (
    <section id="services" className="py-20 md:py-32 bg-background">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div ref={sectionRef} className="text-center mb-16 md:mb-20">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6 }}
            className="font-sans text-xs md:text-sm tracking-[0.3em] uppercase text-primary mb-4 block"
          >
            What We Offer
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-serif text-3xl md:text-5xl lg:text-6xl font-light"
          >
            Our <span className="text-gradient">Services</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="font-sans text-muted-foreground mt-4 max-w-xl mx-auto"
          >
            Discover our curated collection of premium beauty services, 
            each designed to enhance your natural beauty.
          </motion.p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {services.map((service, index) => (
            <ServiceCard key={service.title} service={service} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
