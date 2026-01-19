import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';

const About = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main className="pt-20">
        {/* Hero */}
        <section className="bg-secondary py-20 md:py-32">
          <div className="container mx-auto text-center">
            <span className="text-xs uppercase tracking-[0.3em] text-muted-foreground">
              Our Story
            </span>
            <h1 className="text-luxury-heading mt-3 mb-6">About ZUNITE STYLE</h1>
            <p className="text-luxury-body max-w-2xl mx-auto">
              Where premium quality meets accessible elegance. We believe that 
              exceptional fashion should be within reach of everyone who appreciates 
              timeless style and superior craftsmanship.
            </p>
          </div>
        </section>

        {/* Mission */}
        <section className="section-luxury">
          <div className="container mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div>
                <span className="text-xs uppercase tracking-[0.3em] text-muted-foreground">
                  Our Mission
                </span>
                <h2 className="text-luxury-subheading mt-3 mb-6">
                  Elevating Everyday Style
                </h2>
                <p className="text-luxury-body mb-6">
                  ZUNITE STYLE was founded with a singular vision: to create premium fashion 
                  that doesn't compromise on quality or accessibility. We curate and design 
                  pieces that seamlessly blend luxury aesthetics with everyday wearability.
                </p>
                <p className="text-luxury-body">
                  Every garment in our collection is thoughtfully crafted using the finest 
                  materials, ensuring that you not only look exceptional but feel confident 
                  in every moment.
                </p>
              </div>
              <div className="aspect-square bg-secondary" />
            </div>
          </div>
        </section>

        {/* Values */}
        <section className="section-luxury bg-secondary/50">
          <div className="container mx-auto">
            <div className="text-center mb-16">
              <span className="text-xs uppercase tracking-[0.3em] text-muted-foreground">
                What We Stand For
              </span>
              <h2 className="text-luxury-subheading mt-3">Our Values</h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
              <div className="text-center">
                <div className="w-16 h-16 border border-foreground flex items-center justify-center mx-auto mb-6">
                  <span className="font-serif text-2xl">01</span>
                </div>
                <h3 className="font-serif text-xl mb-4">Quality First</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  We source only the finest materials and work with skilled artisans 
                  to ensure every piece meets our exacting standards.
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 border border-foreground flex items-center justify-center mx-auto mb-6">
                  <span className="font-serif text-2xl">02</span>
                </div>
                <h3 className="font-serif text-xl mb-4">Timeless Design</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Our designs transcend fleeting trends, focusing on classic silhouettes 
                  that remain relevant season after season.
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 border border-foreground flex items-center justify-center mx-auto mb-6">
                  <span className="font-serif text-2xl">03</span>
                </div>
                <h3 className="font-serif text-xl mb-4">Accessible Luxury</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  We believe premium fashion should be accessible. Quality and elegance 
                  without the prohibitive price tag.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Promise */}
        <section className="py-24 md:py-32 bg-primary text-primary-foreground">
          <div className="container mx-auto text-center">
            <h2 className="text-luxury-heading mb-6">Our Promise</h2>
            <p className="text-sm md:text-base opacity-80 max-w-2xl mx-auto leading-relaxed">
              When you choose ZUNITE STYLE, you're choosing more than clothing. You're 
              choosing a commitment to excellence, a dedication to quality, and a passion 
              for helping you express your unique sense of style.
            </p>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default About;
