// Import product images
import bananasImg from '@/assets/products/bananas.jpg';
import applesImg from '@/assets/products/apples.jpg';
import milkImg from '@/assets/products/milk.jpg';
import breadImg from '@/assets/products/bread.jpg';
import tomatoesImg from '@/assets/products/tomatoes.jpg';
import carrotsImg from '@/assets/products/carrots.jpg';

export interface Product {
  id: string;
  name: string;
  price: number;
  originalPrice?: number;
  image: string;
  category: string;
  unit: string;
  discount?: number;
  rating?: number;
  deliveryTime?: string;
}

export const products: Product[] = [
  {
    id: '1',
    name: 'Fresh Organic Bananas',
    price: 45,
    originalPrice: 55,
    image: bananasImg,
    category: 'fruits',
    unit: '1 kg',
    discount: 18,
    rating: 4.5,
    deliveryTime: '8 min',
  },
  {
    id: '2',
    name: 'Red Delicious Apples',
    price: 120,
    originalPrice: 140,
    image: applesImg,
    category: 'fruits',
    unit: '1 kg',
    discount: 14,
    rating: 4.7,
    deliveryTime: '10 min',
  },
  {
    id: '3',
    name: 'Fresh Whole Milk',
    price: 65,
    image: milkImg,
    category: 'dairy',
    unit: '1 L',
    rating: 4.6,
    deliveryTime: '5 min',
  },
  {
    id: '4',
    name: 'Whole Wheat Bread',
    price: 35,
    originalPrice: 40,
    image: breadImg,
    category: 'bakery',
    unit: '400g',
    discount: 12,
    rating: 4.3,
    deliveryTime: '12 min',
  },
  {
    id: '5',
    name: 'Fresh Red Tomatoes',
    price: 38,
    originalPrice: 45,
    image: tomatoesImg,
    category: 'vegetables',
    unit: '500g',
    discount: 15,
    rating: 4.4,
    deliveryTime: '8 min',
  },
  {
    id: '6',
    name: 'Orange Carrots',
    price: 42,
    image: carrotsImg,
    category: 'vegetables',
    unit: '500g',
    rating: 4.2,
    deliveryTime: '10 min',
  },
  // Additional mock products
  {
    id: '7',
    name: 'Greek Yogurt',
    price: 85,
    image: milkImg, // Reusing milk image for demo
    category: 'dairy',
    unit: '200g',
    rating: 4.8,
    deliveryTime: '6 min',
  },
  {
    id: '8',
    name: 'Mixed Fruit Pack',
    price: 180,
    originalPrice: 220,
    image: applesImg, // Reusing apple image for demo
    category: 'fruits',
    unit: '1 kg',
    discount: 18,
    rating: 4.6,
    deliveryTime: '15 min',
  },
  {
    id: '9',
    name: 'Fresh Spinach',
    price: 28,
    image: carrotsImg, // Reusing carrot image for demo
    category: 'vegetables',
    unit: '250g',
    rating: 4.1,
    deliveryTime: '8 min',
  },
  {
    id: '10',
    name: 'Cheese Slices',
    price: 95,
    image: milkImg, // Reusing milk image for demo
    category: 'dairy',
    unit: '200g',
    rating: 4.5,
    deliveryTime: '7 min',
  },
];