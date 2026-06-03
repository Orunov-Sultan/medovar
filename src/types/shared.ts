export type Category = 'classic' | 'fruit' | 'spiced' | 'limited';

export type Product = {
  id: string;
  name: string;
  description: string;
  price: number;
  category: Category;
  image: string;
  isPopular?: boolean;
  inStock: boolean;
  volume: string;
};
