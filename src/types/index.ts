export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  rating: number;
  category: string;
  image: string;
  isVeg: boolean;
}

export interface CartItem {
  product: Product;
  quantity: number;
}

export interface User {
  id: string;
  name: string;
  mobile: string;
  email?: string;
  address: string;
  pincode: string;
  avatar?: string;
}

export interface FilterOptions {
  category: string;
  minPrice: number;
  maxPrice: number;
  minRating: number;
}