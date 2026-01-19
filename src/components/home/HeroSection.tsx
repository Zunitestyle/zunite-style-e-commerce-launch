import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import heroImage from '@/assets/hero-fashion.jpg';

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroImage}
          alt="ZUNITE STYLE Fashion"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background/90 via-background/50 to-transparent" />
      </div>

      {/* Content */}
      <div className="container mx-auto relative z-10 pt-20">
        <div className="max-w-2xl">
          <span className="inline-block text-xs uppercase tracking-[0.3em] text-muted-foreground mb-6 animate-fade-in-up">
            New Collection 2025
          </span>
          
          <h1 className="text-luxury-heading mb-6 animate-fade-in-up animation-delay-100">
            Elevate Your
            <br />
            <span className="italic">Elegance</span>
          </h1>
          
          <p className="text-luxury-body max-w-md mb-10 animate-fade-in-up animation-delay-200">
            Discover our curated collection of premium fashion pieces designed for those who 
            appreciate timeless style and uncompromising quality.
          </p>

          <div className="flex flex-wrap gap-4 animate-fade-in-up animation-delay-300">
            <Link to="/shop" className="btn-luxury inline-flex items-center gap-3 group">
              Shop Now
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </Link>
            <Link to="/about" className="btn-luxury-outline">
              Our Story
            </Link>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-fade-in animation-delay-400">
        <div className="flex flex-col items-center gap-2">
          <span className="text-xs uppercase tracking-[0.2em] text-muted-foreground">
            Scroll
          </span>
          <div className="w-px h-12 bg-border relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-1/2 bg-foreground animate-pulse" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
