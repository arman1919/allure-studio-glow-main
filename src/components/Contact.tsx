import { motion, useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { MapPin, Phone, Mail, Clock, Send, Check } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { toast } from '@/hooks/use-toast';

const contactInfo = [
  {
    icon: MapPin,
    label: 'Visit Us',
    value: '123 Luxury Lane, Beverly Hills, CA 90210',
  },
  {
    icon: Phone,
    label: 'Call Us',
    value: '+1 (310) 555-0123',
  },
  {
    icon: Mail,
    label: 'Email Us',
    value: 'hello@lumiere-beauty.com',
  },
  {
    icon: Clock,
    label: 'Working Hours',
    value: 'Mon-Sat: 9AM - 8PM',
  },
];

const Contact = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: '-100px' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    setIsSubmitting(false);
    setIsSubmitted(true);
    toast({
      title: 'Message Sent!',
      description: 'We\'ll get back to you within 24 hours.',
    });
    
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({ name: '', email: '', phone: '', message: '' });
    }, 3000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <section id="contact" className="py-20 md:py-32 bg-background relative overflow-hidden">
      {/* Background Decoration */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-primary/5 to-transparent pointer-events-none" />
      
      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div ref={sectionRef} className="text-center mb-16 md:mb-20">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6 }}
            className="font-sans text-xs md:text-sm tracking-[0.3em] uppercase text-primary mb-4 block"
          >
            Get in Touch
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-serif text-3xl md:text-5xl lg:text-6xl font-light"
          >
            <span className="text-gradient">Contact</span> Us
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="font-sans text-muted-foreground mt-4 max-w-xl mx-auto"
          >
            Ready to begin your beauty journey? Reach out to schedule a consultation 
            or learn more about our services.
          </motion.p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid sm:grid-cols-2 gap-6">
                <div>
                  <label className="font-sans text-xs tracking-wider uppercase text-muted-foreground mb-2 block">
                    Your Name
                  </label>
                  <Input
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="bg-secondary/50 border-border/50 focus:border-primary h-12 font-sans"
                    placeholder="Jane Doe"
                  />
                </div>
                <div>
                  <label className="font-sans text-xs tracking-wider uppercase text-muted-foreground mb-2 block">
                    Email Address
                  </label>
                  <Input
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="bg-secondary/50 border-border/50 focus:border-primary h-12 font-sans"
                    placeholder="jane@example.com"
                  />
                </div>
              </div>
              
              <div>
                <label className="font-sans text-xs tracking-wider uppercase text-muted-foreground mb-2 block">
                  Phone Number
                </label>
                <Input
                  name="phone"
                  type="tel"
                  value={formData.phone}
                  onChange={handleChange}
                  className="bg-secondary/50 border-border/50 focus:border-primary h-12 font-sans"
                  placeholder="+1 (555) 000-0000"
                />
              </div>

              <div>
                <label className="font-sans text-xs tracking-wider uppercase text-muted-foreground mb-2 block">
                  Your Message
                </label>
                <Textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="bg-secondary/50 border-border/50 focus:border-primary font-sans resize-none"
                  placeholder="Tell us about your desired service or any questions you have..."
                />
              </div>

              <Button
                type="submit"
                variant="hero"
                size="lg"
                disabled={isSubmitting || isSubmitted}
                className="w-full sm:w-auto"
              >
                {isSubmitting ? (
                  <span className="flex items-center gap-2">
                    <motion.span
                      animate={{ rotate: 360 }}
                      transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
                      className="inline-block"
                    >
                      ◌
                    </motion.span>
                    Sending...
                  </span>
                ) : isSubmitted ? (
                  <span className="flex items-center gap-2">
                    <Check size={18} />
                    Message Sent!
                  </span>
                ) : (
                  <span className="flex items-center gap-2">
                    <Send size={18} />
                    Send Message
                  </span>
                )}
              </Button>
            </form>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="space-y-8"
          >
            <div className="bg-card/50 border border-border/50 rounded-lg p-8">
              <h3 className="font-serif text-2xl mb-6">Studio Information</h3>
              <div className="space-y-6">
                {contactInfo.map((info, index) => (
                  <motion.div
                    key={info.label}
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                    transition={{ delay: 0.5 + index * 0.1 }}
                    className="flex items-start gap-4 group"
                  >
                    <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center shrink-0 group-hover:bg-primary/20 transition-colors duration-300">
                      <info.icon size={18} className="text-primary" />
                    </div>
                    <div>
                      <span className="font-sans text-xs tracking-wider uppercase text-muted-foreground block mb-1">
                        {info.label}
                      </span>
                      <span className="font-sans text-foreground">
                        {info.value}
                      </span>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* CTA Box */}
            <div className="bg-gradient-to-br from-primary/20 to-accent/10 border border-primary/30 rounded-lg p-8 text-center">
              <h4 className="font-serif text-xl mb-2">Book Your Consultation</h4>
              <p className="font-sans text-sm text-muted-foreground mb-4">
                Prefer to speak directly? Call us to schedule your personalized beauty consultation.
              </p>
              <a 
                href="tel:+13105550123" 
                className="font-serif text-2xl text-primary hover:text-accent transition-colors duration-300"
              >
                +1 (310) 555-0123
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
