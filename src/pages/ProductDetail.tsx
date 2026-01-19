import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, ExternalLink, Plus, Minus, Check, Package, Truck, Shield } from 'lucide-react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { getProducts, formatPrice, generateWhatsAppLink, type Product } from '@/lib/products';
import { useCart } from '@/contexts/CartContext';
import ProductCard from '@/components/shop/ProductCard';

const ProductDetail = () => {
  const { id } = useParams<{ id: string }>();
  const [product, setProduct] = useState<Product | null>(null);
  const [selectedSize, setSelectedSize] = useState<string>('');
  const [quantity, setQuantity] = useState(1);
  const [relatedProducts, setRelatedProducts] = useState<Product[]>([]);
  const { addItem } = useCart();

  useEffect(() => {
    const products = getProducts();
    const found = products.find((p) => p.id === id);
    setProduct(found || null);
    setSelectedSize(found?.sizes[0] || '');

    if (found) {
      const related = products
        .filter((p) => p.id !== id && (p.category === found.category || p.audience === found.audience))
        .slice(0, 4);
      setRelatedProducts(related);
    }
  }, [id]);

  if (!product) {
    return (
      <div className="min-h-screen">
        <Header />
        <main className="pt-20">
          <div className="container mx-auto section-luxury text-center">
            <h1 className="text-luxury-heading mb-4">Product Not Found</h1>
            <Link to="/shop" className="btn-luxury inline-flex items-center gap-2">
              <ArrowLeft className="w-4 h-4" />
              Back to Shop
            </Link>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  const handleAddToCart = () => {
    if (selectedSize) {
      addItem(product, selectedSize, quantity);
    }
  };

  return (
    <div className="min-h-screen">
      <Header />
      <main className="pt-20">
        {/* Breadcrumb */}
        <div className="container mx-auto py-4">
          <nav className="flex items-center gap-2 text-sm text-muted-foreground">
            <Link to="/" className="hover:text-foreground transition-colors">
              Home
            </Link>
            <span>/</span>
            <Link to="/shop" className="hover:text-foreground transition-colors">
              Shop
            </Link>
            <span>/</span>
            <span className="text-foreground">{product.name}</span>
          </nav>
        </div>

        {/* Product Details */}
        <section className="container mx-auto pb-16 md:pb-24">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16">
            {/* Product Image */}
            <div className="relative aspect-[3/4] bg-secondary overflow-hidden">
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-full object-cover"
              />
              {product.isNew && (
                <span className="absolute top-6 left-6 text-[10px] uppercase tracking-[0.2em] bg-foreground text-background px-4 py-2">
                  New Arrival
                </span>
              )}
            </div>

            {/* Product Info */}
            <div className="lg:py-8">
              <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground mb-3">
                {product.category} — {product.audience}
              </p>
              <h1 className="font-serif text-3xl md:text-4xl mb-4">{product.name}</h1>
              <p className="text-2xl font-medium mb-6">{formatPrice(product.price)}</p>

              {product.description && (
                <p className="text-muted-foreground leading-relaxed mb-8">
                  {product.description}
                </p>
              )}

              {/* Size Selection */}
              <div className="mb-8">
                <div className="flex items-center justify-between mb-3">
                  <p className="text-xs uppercase tracking-[0.15em]">Select Size</p>
                  <button className="text-xs text-muted-foreground underline hover:text-foreground transition-colors">
                    Size Guide
                  </button>
                </div>
                <div className="flex flex-wrap gap-2">
                  {product.sizes.map((size) => (
                    <button
                      key={size}
                      onClick={() => setSelectedSize(size)}
                      className={`min-w-[56px] h-12 px-4 border transition-all ${
                        selectedSize === size
                          ? 'bg-foreground text-background border-foreground'
                          : 'bg-transparent border-border hover:border-foreground'
                      }`}
                    >
                      {size}
                    </button>
                  ))}
                </div>
              </div>

              {/* Quantity */}
              <div className="mb-8">
                <p className="text-xs uppercase tracking-[0.15em] mb-3">Quantity</p>
                <div className="flex items-center gap-0 border border-border w-fit">
                  <button
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    className="w-12 h-12 flex items-center justify-center hover:bg-secondary transition-colors"
                  >
                    <Minus className="w-4 h-4" />
                  </button>
                  <span className="w-16 h-12 flex items-center justify-center border-x border-border">
                    {quantity}
                  </span>
                  <button
                    onClick={() => setQuantity(quantity + 1)}
                    className="w-12 h-12 flex items-center justify-center hover:bg-secondary transition-colors"
                  >
                    <Plus className="w-4 h-4" />
                  </button>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="space-y-3 mb-8">
                <button
                  onClick={handleAddToCart}
                  disabled={!selectedSize}
                  className="btn-luxury w-full flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  Add to Cart
                </button>
                <a
                  href={generateWhatsAppLink(product, selectedSize)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full flex items-center justify-center gap-2 border border-foreground py-4 px-8 text-xs uppercase tracking-[0.15em] hover:bg-foreground hover:text-background transition-all"
                >
                  Buy Now via WhatsApp
                  <ExternalLink className="w-4 h-4" />
                </a>
              </div>

              {/* Features */}
              <div className="border-t border-border pt-8 space-y-4">
                <div className="flex items-center gap-4 text-sm">
                  <Package className="w-5 h-5 text-muted-foreground" />
                  <span>Premium quality materials</span>
                </div>
                <div className="flex items-center gap-4 text-sm">
                  <Truck className="w-5 h-5 text-muted-foreground" />
                  <span>Fast worldwide shipping</span>
                </div>
                <div className="flex items-center gap-4 text-sm">
                  <Shield className="w-5 h-5 text-muted-foreground" />
                  <span>Easy returns within 30 days</span>
                </div>
                <div className="flex items-center gap-4 text-sm">
                  <Check className="w-5 h-5 text-muted-foreground" />
                  <span>100% authentic guarantee</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Related Products */}
        {relatedProducts.length > 0 && (
          <section className="section-luxury bg-secondary/30">
            <div className="container mx-auto">
              <div className="text-center mb-12">
                <span className="text-xs uppercase tracking-[0.3em] text-muted-foreground">
                  Complete Your Look
                </span>
                <h2 className="text-luxury-subheading mt-3">You May Also Like</h2>
              </div>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
                {relatedProducts.map((product, index) => (
                  <ProductCard key={product.id} product={product} index={index} />
                ))}
              </div>
            </div>
          </section>
        )}
      </main>
      <Footer />
    </div>
  );
};

export default ProductDetail;
