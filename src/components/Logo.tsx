import { motion } from 'framer-motion';

interface LogoProps {
  onClick?: () => void;
  className?: string;
}

const Logo = ({ onClick, className = '' }: LogoProps) => {
  return (
    <motion.button
      onClick={onClick}
      className={`flex items-center gap-2 group cursor-pointer ${className}`}
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
    >
      {/* Logo Icon */}
      <div className="relative w-10 h-10 md:w-12 md:h-12">
        <svg
          viewBox="0 0 48 48"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-full"
        >
          {/* Outer circle with gradient */}
          <circle
            cx="24"
            cy="24"
            r="22"
            stroke="url(#goldGradient)"
            strokeWidth="1.5"
            className="group-hover:stroke-[2] transition-all duration-300"
          />
          {/* Inner diamond shape */}
          <path
            d="M24 8L36 24L24 40L12 24L24 8Z"
            fill="none"
            stroke="url(#goldGradient)"
            strokeWidth="1.5"
            className="group-hover:fill-primary/10 transition-all duration-500"
          />
          {/* Center dot */}
          <circle
            cx="24"
            cy="24"
            r="3"
            fill="url(#goldGradient)"
            className="group-hover:r-4 transition-all duration-300"
          />
          <defs>
            <linearGradient id="goldGradient" x1="0" y1="0" x2="48" y2="48">
              <stop offset="0%" stopColor="hsl(38, 60%, 55%)" />
              <stop offset="100%" stopColor="hsl(15, 50%, 60%)" />
            </linearGradient>
          </defs>
        </svg>
      </div>
      
      {/* Brand Name */}
      <div className="flex flex-col items-start">
        <span className="font-serif text-xl md:text-2xl font-light tracking-[0.3em] text-gradient">
          LUMIÈRE
        </span>
        <span className="font-sans text-[8px] md:text-[10px] tracking-[0.25em] text-muted-foreground uppercase">
          Beauty Studio
        </span>
      </div>
    </motion.button>
  );
};

export default Logo;
