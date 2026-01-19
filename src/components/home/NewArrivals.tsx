import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { getNewArrivals, formatPrice, type Product } from '@/lib/products';
import ProductCard from '@/components/shop/ProductCard';

const NewArrivals = () => {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    setProducts(getNewArrivals().slice(0, 4));
  }, []);

  return (
    <section className="section-luxury bg-secondary/50">
      <div className="container mx-auto">
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6 mb-16">
          <div>
            <span className="text-xs uppercase tracking-[0.3em] text-muted-foreground">
              Just In
            </span>
            <h2 className="text-luxury-heading mt-3">New Arrivals</h2>
          </div>
          <Link
            to="/shop"
            className="text-sm uppercase tracking-[0.15em] link-underline"
          >
            View All
          </Link>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {products.map((product, index) => (
            <ProductCard key={product.id} product={product} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default NewArrivals;
