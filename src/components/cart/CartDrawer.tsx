import { X, Plus, Minus, Trash2, ShoppingBag, ExternalLink } from 'lucide-react';
import { useCart } from '@/contexts/CartContext';
import { formatPrice } from '@/lib/products';
import { Sheet, SheetContent, SheetHeader, SheetTitle } from '@/components/ui/sheet';
import { Button } from '@/components/ui/button';

const CartDrawer = () => {
  const {
    items,
    removeItem,
    updateQuantity,
    clearCart,
    totalItems,
    totalPrice,
    isCartOpen,
    setIsCartOpen,
  } = useCart();

  const generateWhatsAppOrderLink = () => {
    const orderDetails = items
      .map(
        (item) =>
          `• ${item.product.name} (${item.size}) x${item.quantity} - ${formatPrice(
            item.product.price * item.quantity
          )}`
      )
      .join('\n');

    const message = encodeURIComponent(
      `Hi! I'd like to place an order:\n\n${orderDetails}\n\nTotal: ${formatPrice(totalPrice)}\n\nPlease confirm availability and provide delivery details.`
    );
    return `https://wa.me/?text=${message}`;
  };

  return (
    <Sheet open={isCartOpen} onOpenChange={setIsCartOpen}>
      <SheetContent className="w-full sm:max-w-lg flex flex-col">
        <SheetHeader className="border-b border-border pb-4">
          <SheetTitle className="font-serif text-xl flex items-center gap-2">
            <ShoppingBag className="w-5 h-5" />
            Your Cart ({totalItems})
          </SheetTitle>
        </SheetHeader>

        {items.length === 0 ? (
          <div className="flex-1 flex flex-col items-center justify-center text-center">
            <ShoppingBag className="w-16 h-16 text-muted-foreground/30 mb-4" />
            <p className="text-lg font-serif mb-2">Your cart is empty</p>
            <p className="text-sm text-muted-foreground mb-6">
              Add items to get started
            </p>
            <Button variant="outline" onClick={() => setIsCartOpen(false)}>
              Continue Shopping
            </Button>
          </div>
        ) : (
          <>
            {/* Cart Items */}
            <div className="flex-1 overflow-y-auto py-4 space-y-4">
              {items.map((item) => (
                <div
                  key={`${item.product.id}-${item.size}`}
                  className="flex gap-4 pb-4 border-b border-border last:border-0"
                >
                  <div className="w-20 h-24 bg-secondary overflow-hidden">
                    <img
                      src={item.product.image}
                      alt={item.product.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="flex-1">
                    <h4 className="font-serif text-sm mb-1">{item.product.name}</h4>
                    <p className="text-xs text-muted-foreground mb-2">
                      Size: {item.size}
                    </p>
                    <p className="text-sm font-medium">
                      {formatPrice(item.product.price)}
                    </p>
                    <div className="flex items-center gap-2 mt-2">
                      <button
                        onClick={() =>
                          updateQuantity(item.product.id, item.size, item.quantity - 1)
                        }
                        className="w-7 h-7 flex items-center justify-center border border-border hover:bg-secondary transition-colors"
                      >
                        <Minus className="w-3 h-3" />
                      </button>
                      <span className="text-sm w-8 text-center">{item.quantity}</span>
                      <button
                        onClick={() =>
                          updateQuantity(item.product.id, item.size, item.quantity + 1)
                        }
                        className="w-7 h-7 flex items-center justify-center border border-border hover:bg-secondary transition-colors"
                      >
                        <Plus className="w-3 h-3" />
                      </button>
                      <button
                        onClick={() => removeItem(item.product.id, item.size)}
                        className="ml-auto p-2 text-muted-foreground hover:text-destructive transition-colors"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Cart Footer */}
            <div className="border-t border-border pt-4 space-y-4">
              <div className="flex justify-between items-center">
                <span className="text-sm text-muted-foreground">Subtotal</span>
                <span className="font-serif text-lg">{formatPrice(totalPrice)}</span>
              </div>

              <a
                href={generateWhatsAppOrderLink()}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-luxury w-full flex items-center justify-center gap-2"
              >
                Order via WhatsApp
                <ExternalLink className="w-4 h-4" />
              </a>

              <button
                onClick={clearCart}
                className="w-full text-xs text-muted-foreground hover:text-foreground transition-colors py-2"
              >
                Clear Cart
              </button>
            </div>
          </>
        )}
      </SheetContent>
    </Sheet>
  );
};

export default CartDrawer;
