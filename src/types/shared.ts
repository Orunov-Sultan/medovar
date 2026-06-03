export type Category = 'honey' | 'propolis' | 'perga' | 'wax' | 'gifts';

export type Product = {
  id: string;
  name: string;
  description: string;
  price: number;
  category: Category;
  image: string;
  isPopular?: boolean;
  inStock: boolean;
  weight: string;
};
