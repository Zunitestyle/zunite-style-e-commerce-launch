import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ExternalLink, ShoppingBag } from 'lucide-react';
import { type Product, formatPrice, generateWhatsAppLink } from '@/lib/products';
import { useCart } from '@/contexts/CartContext';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';

interface ProductCardProps {
  product: Product;
  index?: number;
}

const ProductCard = ({ product, index = 0 }: ProductCardProps) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedSize, setSelectedSize] = useState(product.sizes[0]);
  const { addItem } = useCart();

  const handleQuickAdd = (e: React.MouseEvent) => {
    e.stopPropagation();
    e.preventDefault();
    addItem(product, product.sizes[0], 1);
  };

  return (
    <>
      <Link
        to={`/product/${product.id}`}
        className="group product-card block"
        style={{ animationDelay: `${index * 100}ms` }}
      >
        <div className="relative aspect-[3/4] overflow-hidden bg-secondary mb-4">
          <img
            src={product.image}
            alt={product.name}
            className="product-image w-full h-full object-cover transition-transform duration-700"
          />
          
          {product.isNew && (
            <span className="absolute top-4 left-4 text-[10px] uppercase tracking-[0.2em] bg-foreground text-background px-3 py-1">
              New
            </span>
          )}

          {/* Quick Add Button */}
          <button
            onClick={handleQuickAdd}
            className="absolute bottom-4 right-4 w-10 h-10 bg-background flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 hover:bg-foreground hover:text-background"
            aria-label="Quick add to cart"
          >
            <ShoppingBag className="w-4 h-4" />
          </button>

          {/* View Details Overlay */}
          <div className="absolute inset-0 bg-foreground/0 group-hover:bg-foreground/5 transition-colors duration-500 flex items-center justify-center">
            <span className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-xs uppercase tracking-[0.15em] bg-background px-4 py-2">
              View Details
            </span>
          </div>
        </div>

        <div>
          <p className="text-xs uppercase tracking-[0.15em] text-muted-foreground mb-1">
            {product.audience}
          </p>
          <h3 className="font-serif text-lg mb-1">{product.name}</h3>
          <p className="text-sm font-medium">{formatPrice(product.price)}</p>
        </div>
      </Link>

      {/* Product Modal */}
      <Dialog open={isModalOpen} onOpenChange={setIsModalOpen}>
        <DialogContent className="max-w-3xl p-0 gap-0">
          <div className="grid grid-cols-1 md:grid-cols-2">
            {/* Image */}
            <div className="aspect-square md:aspect-auto bg-secondary">
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-full object-cover"
              />
            </div>

            {/* Details */}
            <div className="p-8 md:p-10 flex flex-col">
              <DialogHeader className="text-left mb-6">
                <p className="text-xs uppercase tracking-[0.15em] text-muted-foreground mb-2">
                  {product.category} — {product.audience}
                </p>
                <DialogTitle className="font-serif text-2xl md:text-3xl font-normal">
                  {product.name}
                </DialogTitle>
                <p className="text-xl font-medium mt-2">{formatPrice(product.price)}</p>
              </DialogHeader>

              {product.description && (
                <p className="text-sm text-muted-foreground mb-6 leading-relaxed">
                  {product.description}
                </p>
              )}

              {/* Size Selection */}
              <div className="mb-8">
                <p className="text-xs uppercase tracking-[0.15em] mb-3">Select Size</p>
                <div className="flex flex-wrap gap-2">
                  {product.sizes.map((size) => (
                    <button
                      key={size}
                      onClick={() => setSelectedSize(size)}
                      className={`min-w-[48px] h-12 px-4 border transition-colors ${
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

              {/* Action Buttons */}
              <div className="mt-auto space-y-3">
                <button
                  onClick={() => {
                    addItem(product, selectedSize, 1);
                    setIsModalOpen(false);
                  }}
                  className="btn-luxury w-full flex items-center justify-center gap-2"
                >
                  <ShoppingBag className="w-4 h-4" />
                  Add to Cart
                </button>
                <a
                  href={generateWhatsAppLink(product, selectedSize)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full flex items-center justify-center gap-2 border border-foreground py-3 px-6 text-xs uppercase tracking-[0.15em] hover:bg-foreground hover:text-background transition-all"
                >
                  Order via WhatsApp
                  <ExternalLink className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default ProductCard;
