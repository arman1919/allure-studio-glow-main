import { motion, useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { X } from 'lucide-react';
import work1 from '@/assets/work-1.jpg';
import work2 from '@/assets/work-2.jpg';
import work3 from '@/assets/work-3.jpg';
import work4 from '@/assets/work-4.jpg';

const works = [
  {
    id: 1,
    title: 'Bridal Elegance',
    category: 'Bridal Makeup',
    image: work1,
  },
  {
    id: 2,
    title: 'Evening Glamour',
    category: 'Special Occasion',
    image: work2,
  },
  {
    id: 3,
    title: 'Natural Glow',
    category: 'Skincare',
    image: work3,
  },
  {
    id: 4,
    title: 'Editorial Bold',
    category: 'Creative Makeup',
    image: work4,
  },
];

const WorkCard = ({ work, index, onClick }: { work: typeof works[0]; index: number; onClick: () => void }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-50px' });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, scale: 0.9 }}
      animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      onClick={onClick}
      className="group relative overflow-hidden rounded-lg cursor-pointer"
    >
      <div className="relative aspect-[4/5] overflow-hidden">
        <motion.img
          src={work.image}
          alt={`${work.title} - Lumière Beauty Portfolio`}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
          whileHover={{ scale: 1.05 }}
        />
        
        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        
        {/* Content */}
        <div className="absolute bottom-0 left-0 right-0 p-6 transform translate-y-full group-hover:translate-y-0 transition-transform duration-500">
          <span className="font-sans text-xs tracking-wider text-primary uppercase block mb-1">
            {work.category}
          </span>
          <h3 className="font-serif text-xl md:text-2xl text-foreground">
            {work.title}
          </h3>
        </div>

        {/* Decorative Corner */}
        <div className="absolute top-4 right-4 w-8 h-8 border-t border-r border-primary/0 group-hover:border-primary/50 transition-all duration-500" />
        <div className="absolute bottom-4 left-4 w-8 h-8 border-b border-l border-primary/0 group-hover:border-primary/50 transition-all duration-500" />
      </div>
    </motion.div>
  );
};

const Works = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: '-100px' });
  const [selectedWork, setSelectedWork] = useState<typeof works[0] | null>(null);

  return (
    <section id="works" className="py-20 md:py-32 bg-secondary/30">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div ref={sectionRef} className="text-center mb-16 md:mb-20">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6 }}
            className="font-sans text-xs md:text-sm tracking-[0.3em] uppercase text-primary mb-4 block"
          >
            Portfolio
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-serif text-3xl md:text-5xl lg:text-6xl font-light"
          >
            Our <span className="text-gradient">Works</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="font-sans text-muted-foreground mt-4 max-w-xl mx-auto"
          >
            Explore our gallery of transformations. Each creation tells a story 
            of beauty, confidence, and artistry.
          </motion.p>
        </div>

        {/* Works Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
          {works.map((work, index) => (
            <WorkCard 
              key={work.id} 
              work={work} 
              index={index} 
              onClick={() => setSelectedWork(work)}
            />
          ))}
        </div>
      </div>

      {/* Lightbox Modal */}
      {selectedWork && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={() => setSelectedWork(null)}
          className="fixed inset-0 z-50 bg-background/95 backdrop-blur-md flex items-center justify-center p-4"
        >
          <button
            onClick={() => setSelectedWork(null)}
            className="absolute top-6 right-6 text-foreground hover:text-primary transition-colors"
          >
            <X size={32} />
          </button>
          <motion.div
            initial={{ scale: 0.9 }}
            animate={{ scale: 1 }}
            className="max-w-4xl max-h-[80vh] relative"
          >
            <img
              src={selectedWork.image}
              alt={selectedWork.title}
              className="max-w-full max-h-[80vh] object-contain rounded-lg"
            />
            <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-background to-transparent">
              <span className="font-sans text-xs tracking-wider text-primary uppercase block mb-1">
                {selectedWork.category}
              </span>
              <h3 className="font-serif text-2xl md:text-3xl text-foreground">
                {selectedWork.title}
              </h3>
            </div>
          </motion.div>
        </motion.div>
      )}
    </section>
  );
};

export default Works;
