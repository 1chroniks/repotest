export interface Product {
  id: string;
  name: string;
  slug: string;
  category: ProductCategory;
  price: number;
  originalPrice?: number;
  description: string;
  shortDescription: string;
  specs: Record<string, string>;
  images: string[];
  badge?: string;
  inStock: boolean;
  rating: number;
  reviewCount: number;
  featured: boolean;
}

export type ProductCategory = 'dslr' | 'mirrorless' | 'action' | 'lenses' | 'accessories';

export interface CartItem {
  product: Product;
  quantity: number;
}

export interface TeamMember {
  id: string;
  name: string;
  role: string;
  bio: string;
  avatar: string;
  social: {
    linkedin?: string;
    twitter?: string;
  };
}

export interface Category {
  id: ProductCategory;
  name: string;
  description: string;
  icon: string;
}
