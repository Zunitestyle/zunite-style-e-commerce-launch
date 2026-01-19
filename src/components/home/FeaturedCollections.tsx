import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import collectionMen from '@/assets/collection-men.jpg';
import collectionWomen from '@/assets/collection-women.jpg';
import collectionKids from '@/assets/collection-kids.jpg';

const collections = [
  {
    name: 'Men',
    description: 'Refined essentials for the modern gentleman',
    image: collectionMen,
    link: '/shop?audience=men',
  },
  {
    name: 'Women',
    description: 'Elegant pieces for timeless sophistication',
    image: collectionWomen,
    link: '/shop?audience=women',
  },
  {
    name: 'Kids',
    description: 'Playful comfort meets premium quality',
    image: collectionKids,
    link: '/shop?audience=kids',
  },
];

const FeaturedCollections = () => {
  return (
    <section className="section-luxury bg-background">
      <div className="container mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="text-xs uppercase tracking-[0.3em] text-muted-foreground">
            Featured
          </span>
          <h2 className="text-luxury-heading mt-3">Our Collections</h2>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {collections.map((collection, index) => (
            <Link
              key={collection.name}
              to={collection.link}
              className="group product-card"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="relative aspect-[3/4] overflow-hidden bg-secondary mb-6">
                <img
                  src={collection.image}
                  alt={`${collection.name} Collection`}
                  className="product-image w-full h-full object-cover transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-foreground/0 group-hover:bg-foreground/10 transition-colors duration-500" />
                
                {/* Hover CTA */}
                <div className="absolute bottom-0 left-0 right-0 p-6 translate-y-full group-hover:translate-y-0 transition-transform duration-500">
                  <span className="inline-flex items-center gap-2 text-sm uppercase tracking-[0.15em] bg-background px-6 py-3">
                    Explore
                    <ArrowRight className="w-4 h-4" />
                  </span>
                </div>
              </div>

              <h3 className="font-serif text-2xl mb-2">{collection.name}</h3>
              <p className="text-sm text-muted-foreground">{collection.description}</p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedCollections;
