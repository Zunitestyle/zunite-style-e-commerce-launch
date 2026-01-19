import { useState, useEffect } from 'react';
import { Plus, Pencil, Trash2, Save, X, ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';
import {
  getProducts,
  addProduct,
  updateProduct,
  deleteProduct,
  formatPrice,
  type Product,
} from '@/lib/products';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';

const categories: Product['category'][] = ['jackets', 'tshirts', 'shirts', 'jeans', 'pajamas'];
const audiences: Product['audience'][] = ['men', 'women', 'kids'];

const emptyProduct = {
  name: '',
  price: 0,
  category: 'tshirts' as Product['category'],
  audience: 'men' as Product['audience'],
  sizes: ['S', 'M', 'L', 'XL'],
  image: '/placeholder.svg',
  description: '',
  isNew: false,
  isFeatured: false,
};

const Admin = () => {
  const { toast } = useToast();
  const [products, setProducts] = useState<Product[]>([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingProduct, setEditingProduct] = useState<Product | null>(null);
  const [formData, setFormData] = useState(emptyProduct);

  useEffect(() => {
    setProducts(getProducts());
  }, []);

  const handleOpenModal = (product?: Product) => {
    if (product) {
      setEditingProduct(product);
      setFormData({
        name: product.name,
        price: product.price,
        category: product.category,
        audience: product.audience,
        sizes: product.sizes,
        image: product.image,
        description: product.description || '',
        isNew: product.isNew || false,
        isFeatured: product.isFeatured || false,
      });
    } else {
      setEditingProduct(null);
      setFormData(emptyProduct);
    }
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setEditingProduct(null);
    setFormData(emptyProduct);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (editingProduct) {
      updateProduct(editingProduct.id, formData);
      toast({ title: 'Product Updated', description: `${formData.name} has been updated.` });
    } else {
      addProduct(formData);
      toast({ title: 'Product Added', description: `${formData.name} has been added to the catalog.` });
    }

    setProducts(getProducts());
    handleCloseModal();
  };

  const handleDelete = (product: Product) => {
    if (window.confirm(`Are you sure you want to delete "${product.name}"?`)) {
      deleteProduct(product.id);
      setProducts(getProducts());
      toast({ title: 'Product Deleted', description: `${product.name} has been removed.` });
    }
  };

  const handleSizeChange = (size: string, checked: boolean) => {
    if (checked) {
      setFormData((prev) => ({ ...prev, sizes: [...prev.sizes, size] }));
    } else {
      setFormData((prev) => ({
        ...prev,
        sizes: prev.sizes.filter((s) => s !== size),
      }));
    }
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b border-border bg-background sticky top-0 z-50">
        <div className="container mx-auto flex items-center justify-between h-16">
          <div className="flex items-center gap-4">
            <Link to="/" className="p-2 hover:bg-secondary transition-colors">
              <ArrowLeft className="w-5 h-5" />
            </Link>
            <div>
              <h1 className="font-serif text-xl">Product Management</h1>
              <p className="text-xs text-muted-foreground">ZUNITE STYLE Admin</p>
            </div>
          </div>
          <button
            onClick={() => handleOpenModal()}
            className="btn-luxury flex items-center gap-2 py-3"
          >
            <Plus className="w-4 h-4" />
            Add Product
          </button>
        </div>
      </header>

      {/* Product List */}
      <main className="container mx-auto py-8">
        <div className="grid grid-cols-1 gap-4">
          {products.map((product) => (
            <div
              key={product.id}
              className="flex items-center gap-6 p-4 border border-border bg-card hover:bg-secondary/30 transition-colors"
            >
              {/* Image */}
              <div className="w-20 h-20 bg-secondary shrink-0">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Info */}
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2 mb-1">
                  <h3 className="font-serif text-lg truncate">{product.name}</h3>
                  {product.isNew && (
                    <span className="text-[10px] uppercase tracking-wider bg-foreground text-background px-2 py-0.5">
                      New
                    </span>
                  )}
                  {product.isFeatured && (
                    <span className="text-[10px] uppercase tracking-wider border border-foreground px-2 py-0.5">
                      Featured
                    </span>
                  )}
                </div>
                <p className="text-sm text-muted-foreground capitalize">
                  {product.category} — {product.audience}
                </p>
                <p className="text-sm font-medium mt-1">{formatPrice(product.price)}</p>
              </div>

              {/* Sizes */}
              <div className="hidden md:flex items-center gap-1">
                {product.sizes.map((size) => (
                  <span
                    key={size}
                    className="text-xs px-2 py-1 border border-border"
                  >
                    {size}
                  </span>
                ))}
              </div>

              {/* Actions */}
              <div className="flex items-center gap-2">
                <button
                  onClick={() => handleOpenModal(product)}
                  className="p-2 hover:bg-secondary transition-colors"
                  aria-label="Edit product"
                >
                  <Pencil className="w-4 h-4" />
                </button>
                <button
                  onClick={() => handleDelete(product)}
                  className="p-2 hover:bg-destructive/10 text-destructive transition-colors"
                  aria-label="Delete product"
                >
                  <Trash2 className="w-4 h-4" />
                </button>
              </div>
            </div>
          ))}
        </div>

        {products.length === 0 && (
          <div className="text-center py-16">
            <p className="text-muted-foreground mb-4">No products yet.</p>
            <button
              onClick={() => handleOpenModal()}
              className="btn-luxury-outline"
            >
              Add Your First Product
            </button>
          </div>
        )}
      </main>

      {/* Add/Edit Modal */}
      <Dialog open={isModalOpen} onOpenChange={setIsModalOpen}>
        <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle className="font-serif text-2xl font-normal">
              {editingProduct ? 'Edit Product' : 'Add New Product'}
            </DialogTitle>
          </DialogHeader>

          <form onSubmit={handleSubmit} className="space-y-6 mt-4">
            {/* Name */}
            <div>
              <label className="block text-xs uppercase tracking-[0.15em] mb-2">
                Product Name
              </label>
              <Input
                value={formData.name}
                onChange={(e) =>
                  setFormData((prev) => ({ ...prev, name: e.target.value }))
                }
                required
                placeholder="e.g., Premium Leather Jacket"
              />
            </div>

            {/* Price & Image */}
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-xs uppercase tracking-[0.15em] mb-2">
                  Price (USD)
                </label>
                <Input
                  type="number"
                  min="0"
                  step="0.01"
                  value={formData.price}
                  onChange={(e) =>
                    setFormData((prev) => ({
                      ...prev,
                      price: parseFloat(e.target.value) || 0,
                    }))
                  }
                  required
                />
              </div>
              <div>
                <label className="block text-xs uppercase tracking-[0.15em] mb-2">
                  Image URL
                </label>
                <Input
                  value={formData.image}
                  onChange={(e) =>
                    setFormData((prev) => ({ ...prev, image: e.target.value }))
                  }
                  placeholder="/placeholder.svg"
                />
              </div>
            </div>

            {/* Category & Audience */}
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-xs uppercase tracking-[0.15em] mb-2">
                  Category
                </label>
                <select
                  value={formData.category}
                  onChange={(e) =>
                    setFormData((prev) => ({
                      ...prev,
                      category: e.target.value as Product['category'],
                    }))
                  }
                  className="w-full h-10 px-3 border border-input bg-background text-sm"
                >
                  {categories.map((cat) => (
                    <option key={cat} value={cat} className="capitalize">
                      {cat}
                    </option>
                  ))}
                </select>
              </div>
              <div>
                <label className="block text-xs uppercase tracking-[0.15em] mb-2">
                  Audience
                </label>
                <select
                  value={formData.audience}
                  onChange={(e) =>
                    setFormData((prev) => ({
                      ...prev,
                      audience: e.target.value as Product['audience'],
                    }))
                  }
                  className="w-full h-10 px-3 border border-input bg-background text-sm"
                >
                  {audiences.map((aud) => (
                    <option key={aud} value={aud} className="capitalize">
                      {aud}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            {/* Sizes */}
            <div>
              <label className="block text-xs uppercase tracking-[0.15em] mb-2">
                Available Sizes
              </label>
              <div className="flex flex-wrap gap-2">
                {['XS', 'S', 'M', 'L', 'XL', 'XXL', '28', '30', '32', '34', '36', '4Y', '6Y', '8Y', '10Y', '12Y'].map(
                  (size) => (
                    <label
                      key={size}
                      className={`flex items-center justify-center w-12 h-10 border cursor-pointer transition-colors ${
                        formData.sizes.includes(size)
                          ? 'bg-foreground text-background border-foreground'
                          : 'bg-transparent border-border hover:border-foreground'
                      }`}
                    >
                      <input
                        type="checkbox"
                        checked={formData.sizes.includes(size)}
                        onChange={(e) => handleSizeChange(size, e.target.checked)}
                        className="sr-only"
                      />
                      <span className="text-xs">{size}</span>
                    </label>
                  )
                )}
              </div>
            </div>

            {/* Description */}
            <div>
              <label className="block text-xs uppercase tracking-[0.15em] mb-2">
                Description
              </label>
              <Textarea
                value={formData.description}
                onChange={(e) =>
                  setFormData((prev) => ({ ...prev, description: e.target.value }))
                }
                rows={3}
                placeholder="Brief product description..."
                className="resize-none"
              />
            </div>

            {/* Flags */}
            <div className="flex gap-6">
              <label className="flex items-center gap-2 cursor-pointer">
                <input
                  type="checkbox"
                  checked={formData.isNew}
                  onChange={(e) =>
                    setFormData((prev) => ({ ...prev, isNew: e.target.checked }))
                  }
                  className="w-4 h-4"
                />
                <span className="text-sm">Mark as New Arrival</span>
              </label>
              <label className="flex items-center gap-2 cursor-pointer">
                <input
                  type="checkbox"
                  checked={formData.isFeatured}
                  onChange={(e) =>
                    setFormData((prev) => ({ ...prev, isFeatured: e.target.checked }))
                  }
                  className="w-4 h-4"
                />
                <span className="text-sm">Featured Product</span>
              </label>
            </div>

            {/* Actions */}
            <div className="flex gap-4 pt-4">
              <button type="submit" className="btn-luxury flex-1 flex items-center justify-center gap-2">
                <Save className="w-4 h-4" />
                {editingProduct ? 'Update Product' : 'Add Product'}
              </button>
              <button
                type="button"
                onClick={handleCloseModal}
                className="btn-luxury-outline px-6"
              >
                <X className="w-4 h-4" />
              </button>
            </div>
          </form>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default Admin;
