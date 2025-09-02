import { Product } from '../types';

export const categories = [
  'All',
  'Appetizers',
  'Main Course', 
  'Desserts',
  'Beverages',
  'Snacks'
];

export const products: Product[] = [
  {
    id: '1',
    name: 'Butter Chicken',
    description: 'Creamy tomato-based curry with tender chicken pieces',
    price: 18.99,
    rating: 4.8,
    category: 'Main Course',
    image: 'https://images.pexels.com/photos/2474658/pexels-photo-2474658.jpeg',
    isVeg: false
  },
  {
    id: '2',
    name: 'Margherita Pizza',
    description: 'Classic pizza with fresh mozzarella, tomatoes and basil',
    price: 16.50,
    rating: 4.6,
    category: 'Main Course',
    image: 'https://images.pexels.com/photos/315755/pexels-photo-315755.jpeg',
    isVeg: true
  },
  {
    id: '3',
    name: 'Caesar Salad',
    description: 'Fresh romaine lettuce with parmesan and croutons',
    price: 12.99,
    rating: 4.3,
    category: 'Appetizers',
    image: 'https://images.pexels.com/photos/1213710/pexels-photo-1213710.jpeg',
    isVeg: true
  },
  {
    id: '4',
    name: 'Chocolate Brownie',
    description: 'Rich chocolate brownie with vanilla ice cream',
    price: 8.99,
    rating: 4.9,
    category: 'Desserts',
    image: 'https://images.pexels.com/photos/291528/pexels-photo-291528.jpeg',
    isVeg: true
  },
  {
    id: '5',
    name: 'Mango Lassi',
    description: 'Traditional yogurt drink with fresh mango',
    price: 5.99,
    rating: 4.7,
    category: 'Beverages',
    image: 'https://images.pexels.com/photos/1653877/pexels-photo-1653877.jpeg',
    isVeg: true
  },
  {
    id: '6',
    name: 'Chicken Wings',
    description: 'Spicy buffalo wings with ranch dipping sauce',
    price: 14.99,
    rating: 4.5,
    category: 'Appetizers',
    image: 'https://images.pexels.com/photos/60616/fried-chicken-chicken-fried-crunchy-60616.jpeg',
    isVeg: false
  },
  {
    id: '7',
    name: 'Vegetable Biryani',
    description: 'Aromatic basmati rice with mixed vegetables and spices',
    price: 15.99,
    rating: 4.4,
    category: 'Main Course',
    image: 'https://images.pexels.com/photos/1624487/pexels-photo-1624487.jpeg',
    isVeg: true
  },
  {
    id: '8',
    name: 'Garlic Bread',
    description: 'Crispy bread with garlic butter and herbs',
    price: 6.99,
    rating: 4.2,
    category: 'Snacks',
    image: 'https://images.pexels.com/photos/7394819/pexels-photo-7394819.jpeg',
    isVeg: true
  },
  {
    id: '9',
    name: 'Fresh Juice',
    description: 'Freshly squeezed orange juice',
    price: 4.99,
    rating: 4.6,
    category: 'Beverages',
    image: 'https://images.pexels.com/photos/96974/pexels-photo-96974.jpeg',
    isVeg: true
  },
  {
    id: '10',
    name: 'Fish Curry',
    description: 'Traditional fish curry with coconut milk and spices',
    price: 19.99,
    rating: 4.7,
    category: 'Main Course',
    image: 'https://images.pexels.com/photos/725991/pexels-photo-725991.jpeg',
    isVeg: false
  }
];