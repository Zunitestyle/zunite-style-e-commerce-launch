import { useState, useEffect, useMemo } from 'react';
import { useSearchParams } from 'react-router-dom';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import ProductCard from '@/components/shop/ProductCard';
import { getProducts, type Product } from '@/lib/products';

const categories = [
  { value: 'all', label: 'All' },
  { value: 'jackets', label: 'Jackets' },
  { value: 'tshirts', label: 'T-Shirts' },
  { value: 'shirts', label: 'Shirts' },
  { value: 'jeans', label: 'Jeans' },
  { value: 'pajamas', label: 'Pajamas' },
];

const audiences = [
  { value: 'all', label: 'All' },
  { value: 'men', label: 'Men' },
  { value: 'women', label: 'Women' },
  { value: 'kids', label: 'Kids' },
];

const Shop = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [products, setProducts] = useState<Product[]>([]);
  const [selectedCategory, setSelectedCategory] = useState(
    searchParams.get('category') || 'all'
  );
  const [selectedAudience, setSelectedAudience] = useState(
    searchParams.get('audience') || 'all'
  );

  useEffect(() => {
    setProducts(getProducts());
  }, []);

  useEffect(() => {
    const category = searchParams.get('category');
    const audience = searchParams.get('audience');
    if (category) setSelectedCategory(category);
    if (audience) setSelectedAudience(audience);
  }, [searchParams]);

  const filteredProducts = useMemo(() => {
    return products.filter((product) => {
      const categoryMatch =
        selectedCategory === 'all' || product.category === selectedCategory;
      const audienceMatch =
        selectedAudience === 'all' || product.audience === selectedAudience;
      return categoryMatch && audienceMatch;
    });
  }, [products, selectedCategory, selectedAudience]);

  const handleFilterChange = (type: 'category' | 'audience', value: string) => {
    const newParams = new URLSearchParams(searchParams);
    if (value === 'all') {
      newParams.delete(type);
    } else {
      newParams.set(type, value);
    }
    setSearchParams(newParams);

    if (type === 'category') {
      setSelectedCategory(value);
    } else {
      setSelectedAudience(value);
    }
  };

  return (
    <div className="min-h-screen">
      <Header />
      <main className="pt-20">
        {/* Hero Banner */}
        <section className="bg-secondary py-16 md:py-24">
          <div className="container mx-auto text-center">
            <h1 className="text-luxury-heading mb-4">Shop All</h1>
            <p className="text-luxury-body max-w-md mx-auto">
              Discover our complete collection of premium fashion essentials.
            </p>
          </div>
        </section>

        {/* Filters & Products */}
        <section className="section-luxury">
          <div className="container mx-auto">
            {/* Filters */}
            <div className="flex flex-col md:flex-row justify-between gap-6 mb-12 pb-8 border-b border-border">
              {/* Category Filter */}
              <div className="flex flex-wrap gap-3">
                <span className="text-xs uppercase tracking-[0.15em] text-muted-foreground self-center mr-2">
                  Category
                </span>
                {categories.map((cat) => (
                  <button
                    key={cat.value}
                    onClick={() => handleFilterChange('category', cat.value)}
                    className={`text-sm px-4 py-2 border transition-colors ${
                      selectedCategory === cat.value
                        ? 'bg-foreground text-background border-foreground'
                        : 'bg-transparent border-border hover:border-foreground'
                    }`}
                  >
                    {cat.label}
                  </button>
                ))}
              </div>

              {/* Audience Filter */}
              <div className="flex flex-wrap gap-3">
                <span className="text-xs uppercase tracking-[0.15em] text-muted-foreground self-center mr-2">
                  For
                </span>
                {audiences.map((aud) => (
                  <button
                    key={aud.value}
                    onClick={() => handleFilterChange('audience', aud.value)}
                    className={`text-sm px-4 py-2 border transition-colors ${
                      selectedAudience === aud.value
                        ? 'bg-foreground text-background border-foreground'
                        : 'bg-transparent border-border hover:border-foreground'
                    }`}
                  >
                    {aud.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Results Count */}
            <p className="text-sm text-muted-foreground mb-8">
              {filteredProducts.length} product{filteredProducts.length !== 1 ? 's' : ''}
            </p>

            {/* Products Grid */}
            {filteredProducts.length > 0 ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
                {filteredProducts.map((product, index) => (
                  <ProductCard key={product.id} product={product} index={index} />
                ))}
              </div>
            ) : (
              <div className="text-center py-16">
                <p className="text-lg text-muted-foreground">
                  No products found matching your filters.
                </p>
              </div>
            )}
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Shop;
