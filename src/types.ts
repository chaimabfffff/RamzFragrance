export interface Product {
  id: number | string;
  name: string;
  description: string;
  price: number;
  image: string;
  stock: number;
  category: string;
  includes?: string[];
  isBestseller?: boolean;
}

export interface CartItem {
  product: Product;
  quantity: number;
}