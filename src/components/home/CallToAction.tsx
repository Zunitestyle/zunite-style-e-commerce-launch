import { Link } from 'react-router-dom';

const CallToAction = () => {
  return (
    <section className="py-24 md:py-32 bg-primary text-primary-foreground">
      <div className="container mx-auto text-center">
        <h2 className="text-luxury-heading mb-4">
          Join the ZUNITE Family
        </h2>
        <p className="text-sm md:text-base opacity-80 max-w-md mx-auto mb-10">
          Be the first to know about new collections, exclusive offers, and style inspirations.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
          <Link to="/shop" className="btn-luxury-white">
            Shop Now
          </Link>
          <Link to="/contact" className="btn-luxury-outline border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary">
            Get in Touch
          </Link>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;
