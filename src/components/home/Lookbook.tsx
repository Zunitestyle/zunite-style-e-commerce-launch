import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import lookbookImage from '@/assets/lookbook.jpg';

const Lookbook = () => {
  return (
    <section className="section-luxury bg-background">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <div className="relative aspect-[16/10] lg:aspect-[4/3] overflow-hidden">
            <img
              src={lookbookImage}
              alt="ZUNITE STYLE Lookbook"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Content */}
          <div className="lg:pl-8">
            <span className="text-xs uppercase tracking-[0.3em] text-muted-foreground">
              Spring / Summer 2025
            </span>
            <h2 className="text-luxury-heading mt-3 mb-6">
              The Art of
              <br />
              <span className="italic">Effortless Style</span>
            </h2>
            <p className="text-luxury-body mb-8 max-w-md">
              Our latest collection celebrates the beauty of simplicity. Each piece is thoughtfully 
              designed to complement your lifestyle while making a subtle statement of refined taste.
            </p>
            <Link
              to="/shop"
              className="btn-luxury inline-flex items-center gap-3 group"
            >
              Explore Collection
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Lookbook;
