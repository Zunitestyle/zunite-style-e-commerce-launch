import leatherJacket from '@/assets/products/leather-jacket.jpg';
import cottonTee from '@/assets/products/cotton-tee.jpg';
import oxfordShirt from '@/assets/products/oxford-shirt.jpg';
import jeans from '@/assets/products/jeans.jpg';
import pajamas from '@/assets/products/pajamas.jpg';
import womensBlazer from '@/assets/products/womens-blazer.jpg';

export interface Product {
  id: string;
  name: string;
  price: number;
  category: 'jackets' | 'tshirts' | 'shirts' | 'jeans' | 'pajamas';
  audience: 'men' | 'women' | 'kids';
  sizes: string[];
  image: string;
  description?: string;
  isNew?: boolean;
  isFeatured?: boolean;
}

const defaultProducts: Product[] = [
  // Men's Collection
  {
    id: '1',
    name: 'Premium Leather Jacket',
    price: 299,
    category: 'jackets',
    audience: 'men',
    sizes: ['S', 'M', 'L', 'XL'],
    image: leatherJacket,
    description: 'Handcrafted genuine leather jacket with minimalist design.',
    isNew: true,
    isFeatured: true,
  },
  {
    id: '2',
    name: 'Essential Cotton Tee',
    price: 49,
    category: 'tshirts',
    audience: 'men',
    sizes: ['XS', 'S', 'M', 'L', 'XL'],
    image: cottonTee,
    description: 'Premium Egyptian cotton t-shirt in classic fit.',
    isFeatured: true,
  },
  {
    id: '3',
    name: 'Slim Fit Oxford Shirt',
    price: 89,
    category: 'shirts',
    audience: 'men',
    sizes: ['S', 'M', 'L', 'XL'],
    image: oxfordShirt,
    description: 'Tailored oxford shirt with mother-of-pearl buttons.',
    isNew: true,
  },
  {
    id: '4',
    name: 'Classic Straight Jeans',
    price: 129,
    category: 'jeans',
    audience: 'men',
    sizes: ['28', '30', '32', '34', '36'],
    image: jeans,
    description: 'Japanese selvedge denim with classic straight cut.',
    isFeatured: true,
  },
  {
    id: '5',
    name: 'Silk Blend Pajama Set',
    price: 149,
    category: 'pajamas',
    audience: 'men',
    sizes: ['S', 'M', 'L', 'XL'],
    image: pajamas,
    description: 'Luxurious silk blend pajama set for ultimate comfort.',
  },

  // Women's Collection
  {
    id: '6',
    name: 'Tailored Wool Blazer',
    price: 349,
    category: 'jackets',
    audience: 'women',
    sizes: ['XS', 'S', 'M', 'L'],
    image: womensBlazer,
    description: 'Italian wool blazer with refined silhouette.',
    isNew: true,
    isFeatured: true,
  },
  {
    id: '7',
    name: 'Relaxed Linen Tee',
    price: 59,
    category: 'tshirts',
    audience: 'women',
    sizes: ['XS', 'S', 'M', 'L', 'XL'],
    image: cottonTee,
    description: 'Breathable linen blend with relaxed fit.',
    isFeatured: true,
  },
  {
    id: '8',
    name: 'Oversized Silk Shirt',
    price: 159,
    category: 'shirts',
    audience: 'women',
    sizes: ['XS', 'S', 'M', 'L'],
    image: oxfordShirt,
    description: 'Pure silk shirt with flowing oversized silhouette.',
    isNew: true,
  },
  {
    id: '9',
    name: 'High-Rise Wide Leg Jeans',
    price: 139,
    category: 'jeans',
    audience: 'women',
    sizes: ['24', '26', '28', '30', '32'],
    image: jeans,
    description: 'Vintage-inspired wide leg with high rise.',
    isFeatured: true,
  },
  {
    id: '10',
    name: 'Satin Pajama Set',
    price: 129,
    category: 'pajamas',
    audience: 'women',
    sizes: ['XS', 'S', 'M', 'L'],
    image: pajamas,
    description: 'Elegant satin pajama set with delicate piping.',
  },

  // Kids' Collection
  {
    id: '11',
    name: 'Kids Denim Jacket',
    price: 89,
    category: 'jackets',
    audience: 'kids',
    sizes: ['4Y', '6Y', '8Y', '10Y', '12Y'],
    image: leatherJacket,
    description: 'Classic denim jacket for little ones.',
    isFeatured: true,
  },
  {
    id: '12',
    name: 'Organic Cotton Tee',
    price: 29,
    category: 'tshirts',
    audience: 'kids',
    sizes: ['4Y', '6Y', '8Y', '10Y', '12Y'],
    image: cottonTee,
    description: 'Soft organic cotton tee with playful designs.',
    isNew: true,
  },
  {
    id: '13',
    name: 'Cozy Fleece Pajamas',
    price: 49,
    category: 'pajamas',
    audience: 'kids',
    sizes: ['4Y', '6Y', '8Y', '10Y'],
    image: pajamas,
    description: 'Ultra-soft fleece pajamas for bedtime comfort.',
    isFeatured: true,
  },
];

const STORAGE_KEY = 'zunite_products';

export const getProducts = (): Product[] => {
  if (typeof window === 'undefined') return defaultProducts;
  
  const stored = localStorage.getItem(STORAGE_KEY);
  if (!stored) {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(defaultProducts));
    return defaultProducts;
  }
  
  try {
    return JSON.parse(stored);
  } catch {
    return defaultProducts;
  }
};

export const saveProducts = (products: Product[]): void => {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(products));
};

export const addProduct = (product: Omit<Product, 'id'>): Product => {
  const products = getProducts();
  const newProduct: Product = {
    ...product,
    id: Date.now().toString(),
  };
  products.push(newProduct);
  saveProducts(products);
  return newProduct;
};

export const updateProduct = (id: string, updates: Partial<Product>): Product | null => {
  const products = getProducts();
  const index = products.findIndex(p => p.id === id);
  if (index === -1) return null;
  
  products[index] = { ...products[index], ...updates };
  saveProducts(products);
  return products[index];
};

export const deleteProduct = (id: string): boolean => {
  const products = getProducts();
  const filtered = products.filter(p => p.id !== id);
  if (filtered.length === products.length) return false;
  
  saveProducts(filtered);
  return true;
};

export const getProductsByCategory = (category: Product['category']): Product[] => {
  return getProducts().filter(p => p.category === category);
};

export const getProductsByAudience = (audience: Product['audience']): Product[] => {
  return getProducts().filter(p => p.audience === audience);
};

export const getFeaturedProducts = (): Product[] => {
  return getProducts().filter(p => p.isFeatured);
};

export const getNewArrivals = (): Product[] => {
  return getProducts().filter(p => p.isNew);
};

export const formatPrice = (price: number): string => {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: 0,
  }).format(price);
};

export const generateWhatsAppLink = (product: Product, size: string): string => {
  const message = encodeURIComponent(
    `Hi! I'm interested in ordering:\n\n` +
    `Product: ${product.name}\n` +
    `Size: ${size}\n` +
    `Price: ${formatPrice(product.price)}\n\n` +
    `Please confirm availability and provide delivery details.`
  );
  return `https://wa.me/?text=${message}`;
};

export const resetToDefaults = (): void => {
  localStorage.removeItem(STORAGE_KEY);
  localStorage.setItem(STORAGE_KEY, JSON.stringify(defaultProducts));
};
