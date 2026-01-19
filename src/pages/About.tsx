import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import logo from '@/assets/logo.png';
import lookbook from '@/assets/lookbook.jpg';
import { Award, Heart, Globe, Users, Leaf, Sparkles } from 'lucide-react';

const About = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main className="pt-20">
        {/* Hero */}
        <section className="bg-secondary py-20 md:py-32">
          <div className="container mx-auto text-center">
            <img src={logo} alt="ZUNITE STYLE" className="h-20 md:h-24 mx-auto mb-6" />
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
                <p className="text-luxury-body mb-6">
                  Every garment in our collection is thoughtfully crafted using the finest 
                  materials, ensuring that you not only look exceptional but feel confident 
                  in every moment.
                </p>
                <p className="text-luxury-body">
                  From the boardroom to weekend getaways, our versatile pieces are designed 
                  to transition effortlessly through every aspect of your life.
                </p>
              </div>
              <div className="aspect-square bg-secondary overflow-hidden">
                <img 
                  src={lookbook} 
                  alt="ZUNITE STYLE Lookbook" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Stats */}
        <section className="py-16 bg-secondary/50">
          <div className="container mx-auto">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              <div className="text-center">
                <p className="font-serif text-4xl md:text-5xl mb-2">5+</p>
                <p className="text-xs uppercase tracking-[0.15em] text-muted-foreground">Years of Excellence</p>
              </div>
              <div className="text-center">
                <p className="font-serif text-4xl md:text-5xl mb-2">50K+</p>
                <p className="text-xs uppercase tracking-[0.15em] text-muted-foreground">Happy Customers</p>
              </div>
              <div className="text-center">
                <p className="font-serif text-4xl md:text-5xl mb-2">200+</p>
                <p className="text-xs uppercase tracking-[0.15em] text-muted-foreground">Unique Designs</p>
              </div>
              <div className="text-center">
                <p className="font-serif text-4xl md:text-5xl mb-2">15+</p>
                <p className="text-xs uppercase tracking-[0.15em] text-muted-foreground">Countries Served</p>
              </div>
            </div>
          </div>
        </section>

        {/* Values */}
        <section className="section-luxury">
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
                  <Award className="w-6 h-6" />
                </div>
                <h3 className="font-serif text-xl mb-4">Quality First</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  We source only the finest materials and work with skilled artisans 
                  to ensure every piece meets our exacting standards. Each stitch, 
                  every button, and all fabrics are carefully selected.
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 border border-foreground flex items-center justify-center mx-auto mb-6">
                  <Sparkles className="w-6 h-6" />
                </div>
                <h3 className="font-serif text-xl mb-4">Timeless Design</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Our designs transcend fleeting trends, focusing on classic silhouettes 
                  that remain relevant season after season. Investment pieces that 
                  you'll cherish for years to come.
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 border border-foreground flex items-center justify-center mx-auto mb-6">
                  <Heart className="w-6 h-6" />
                </div>
                <h3 className="font-serif text-xl mb-4">Accessible Luxury</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  We believe premium fashion should be accessible. Quality and elegance 
                  without the prohibitive price tag. Luxury for everyone who 
                  appreciates the finer things.
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 border border-foreground flex items-center justify-center mx-auto mb-6">
                  <Leaf className="w-6 h-6" />
                </div>
                <h3 className="font-serif text-xl mb-4">Sustainability</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  We're committed to ethical practices and sustainable fashion. 
                  From eco-friendly packaging to responsible sourcing, we care 
                  for our planet as much as we care for style.
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 border border-foreground flex items-center justify-center mx-auto mb-6">
                  <Users className="w-6 h-6" />
                </div>
                <h3 className="font-serif text-xl mb-4">Customer Focus</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Your satisfaction is our priority. We offer personalized styling 
                  advice, easy returns, and dedicated support to ensure your 
                  shopping experience is exceptional.
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 border border-foreground flex items-center justify-center mx-auto mb-6">
                  <Globe className="w-6 h-6" />
                </div>
                <h3 className="font-serif text-xl mb-4">Global Reach</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  From our boutique origins to worldwide shipping, we bring 
                  ZUNITE STYLE to fashion-conscious individuals across the globe. 
                  Elegance knows no boundaries.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Team */}
        <section className="section-luxury bg-secondary/30">
          <div className="container mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div className="order-2 lg:order-1 aspect-square bg-secondary/50 flex items-center justify-center">
                <img src={logo} alt="ZUNITE STYLE" className="h-32 opacity-20" />
              </div>
              <div className="order-1 lg:order-2">
                <span className="text-xs uppercase tracking-[0.3em] text-muted-foreground">
                  Behind The Brand
                </span>
                <h2 className="text-luxury-subheading mt-3 mb-6">
                  Our Story
                </h2>
                <p className="text-luxury-body mb-6">
                  ZUNITE STYLE began as a dream to redefine accessible luxury. Founded by 
                  passionate fashion enthusiasts who believed that exceptional style shouldn't 
                  come with an exceptional price tag.
                </p>
                <p className="text-luxury-body mb-6">
                  Today, we've grown into a beloved brand serving customers worldwide, but our 
                  core values remain unchanged. We still obsess over every detail, from fabric 
                  selection to the perfect fit.
                </p>
                <p className="text-luxury-body">
                  Our dedicated team of designers, craftsmen, and fashion experts work 
                  tirelessly to bring you collections that inspire confidence and 
                  celebrate individuality.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Promise */}
        <section className="py-24 md:py-32 bg-primary text-primary-foreground">
          <div className="container mx-auto text-center">
            <h2 className="text-luxury-heading mb-6">Our Promise</h2>
            <p className="text-sm md:text-base opacity-80 max-w-2xl mx-auto leading-relaxed mb-8">
              When you choose ZUNITE STYLE, you're choosing more than clothing. You're 
              choosing a commitment to excellence, a dedication to quality, and a passion 
              for helping you express your unique sense of style.
            </p>
            <div className="flex flex-wrap justify-center gap-8 mt-8">
              <div className="text-center">
                <p className="text-3xl font-serif mb-2">100%</p>
                <p className="text-xs uppercase tracking-[0.15em] opacity-70">Quality Guarantee</p>
              </div>
              <div className="text-center">
                <p className="text-3xl font-serif mb-2">30-Day</p>
                <p className="text-xs uppercase tracking-[0.15em] opacity-70">Easy Returns</p>
              </div>
              <div className="text-center">
                <p className="text-3xl font-serif mb-2">24/7</p>
                <p className="text-xs uppercase tracking-[0.15em] opacity-70">Customer Support</p>
              </div>
              <div className="text-center">
                <p className="text-3xl font-serif mb-2">Free</p>
                <p className="text-xs uppercase tracking-[0.15em] opacity-70">Worldwide Shipping</p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default About;
