export interface Product {
  id: number;
  title: string;
  price: number;
  images: string[];
  creationAt: string;
  description: string;
  category: Category;
}

interface Category {
  id: number;
  name: string;
  creationAt: string;
  image: string;
  updatedAt: string
}