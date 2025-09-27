// Import product images
import bananasImg from '@/assets/products/bananas.jpg';
import applesImg from '@/assets/products/apples.jpg';
import milkImg from '@/assets/products/milk.jpg';
import breadImg from '@/assets/products/bread.jpg';
import tomatoesImg from '@/assets/products/tomatoes.jpg';
import carrotsImg from '@/assets/products/carrots.jpg';
import groceriesImg from '@/assets/products/groceries.jpg';
import meatImg from '@/assets/products/meat.jpg';
import personalCareImg from '@/assets/products/personal-care.jpg';
import householdImg from '@/assets/products/household.jpg';
import snacksImg from '@/assets/products/snacks.jpg';

export interface Product {
  id: string;
  name: string;
  price: number;
  originalPrice?: number;
  image: string;
  category: string;
  subCategory?: string;
  unit: string;
  discount?: number;
  rating?: number;
  deliveryTime?: string;
  inStock?: boolean;
  description?: string;
  brand?: string;
}

// Generate comprehensive product database with 500+ items
const generateProducts = (): Product[] => {
  const products: Product[] = [];
  let idCounter = 1;

  // Fruits & Vegetables (80 items)
  const fruitsVegetables = [
    // Fruits
    { name: 'Fresh Organic Bananas', price: 45, originalPrice: 55, image: bananasImg, unit: '1 kg', discount: 18, rating: 4.5, brand: 'Organic Farm' },
    { name: 'Red Delicious Apples', price: 120, originalPrice: 140, image: applesImg, unit: '1 kg', discount: 14, rating: 4.7, brand: 'Fresh Valley' },
    { name: 'Green Grapes', price: 85, image: applesImg, unit: '500g', rating: 4.4, brand: 'Nature Fresh' },
    { name: 'Sweet Oranges', price: 65, image: applesImg, unit: '1 kg', rating: 4.3, brand: 'Citrus Gold' },
    { name: 'Fresh Mangoes', price: 150, image: applesImg, unit: '1 kg', rating: 4.8, brand: 'Mango King' },
    { name: 'Kiwi Fruit', price: 180, image: applesImg, unit: '500g', rating: 4.2, brand: 'Exotic Fruits' },
    { name: 'Pomegranate', price: 220, image: applesImg, unit: '1 kg', rating: 4.6, brand: 'Ruby Red' },
    { name: 'Papaya', price: 40, image: applesImg, unit: '1 piece', rating: 4.1, brand: 'Tropical Fresh' },
    { name: 'Pineapple', price: 60, image: applesImg, unit: '1 piece', rating: 4.3, brand: 'Golden Pine' },
    { name: 'Watermelon', price: 25, image: applesImg, unit: '1 kg', rating: 4.2, brand: 'Summer Fresh' },
    
    // Vegetables
    { name: 'Fresh Red Tomatoes', price: 38, originalPrice: 45, image: tomatoesImg, unit: '500g', discount: 15, rating: 4.4, brand: 'Garden Fresh' },
    { name: 'Orange Carrots', price: 42, image: carrotsImg, unit: '500g', rating: 4.2, brand: 'Root Valley' },
    { name: 'Fresh Spinach', price: 28, image: carrotsImg, unit: '250g', rating: 4.1, brand: 'Green Leaf' },
    { name: 'Broccoli', price: 75, image: carrotsImg, unit: '500g', rating: 4.3, brand: 'Healthy Greens' },
    { name: 'Cauliflower', price: 45, image: carrotsImg, unit: '1 piece', rating: 4.0, brand: 'White Gold' },
    { name: 'Bell Peppers', price: 85, image: tomatoesImg, unit: '500g', rating: 4.4, brand: 'Colorful Harvest' },
    { name: 'Cucumber', price: 35, image: carrotsImg, unit: '500g', rating: 4.2, brand: 'Cool Crisp' },
    { name: 'Green Beans', price: 55, image: carrotsImg, unit: '500g', rating: 4.1, brand: 'String Fresh' },
    { name: 'Potatoes', price: 25, image: carrotsImg, unit: '1 kg', rating: 4.3, brand: 'Russet Gold' },
    { name: 'Onions', price: 30, image: carrotsImg, unit: '1 kg', rating: 4.2, brand: 'Tear Drop' },
  ];

  // Add more fruits and vegetables to reach 80 items
  const additionalFruitsVegs = Array.from({ length: 60 }, (_, i) => ({
    name: `Fresh Item ${i + 21}`,
    price: Math.floor(Math.random() * 100) + 20,
    image: Math.random() > 0.5 ? tomatoesImg : carrotsImg,
    unit: Math.random() > 0.5 ? '500g' : '1 kg',
    rating: 4.0 + Math.random() * 0.8,
    brand: 'Premium Fresh'
  }));

  fruitsVegetables.push(...additionalFruitsVegs);

  fruitsVegetables.forEach((item, index) => {
    products.push({
      id: (idCounter++).toString(),
      category: 'fruits-vegetables',
      subCategory: index < 10 ? 'fruits' : 'vegetables',
      deliveryTime: '8 min',
      inStock: true,
      description: `Fresh and organic ${item.name.toLowerCase()}`,
      ...item
    });
  });

  // Dairy & Eggs (40 items)
  const dairyEggs = [
    { name: 'Fresh Whole Milk', price: 65, image: milkImg, unit: '1 L', rating: 4.6, brand: 'Pure Dairy' },
    { name: 'Greek Yogurt', price: 85, image: milkImg, unit: '200g', rating: 4.8, brand: 'Creamy Delight' },
    { name: 'Cheese Slices', price: 95, image: milkImg, unit: '200g', rating: 4.5, brand: 'Dairy Gold' },
    { name: 'Fresh Eggs', price: 120, image: milkImg, unit: '12 pieces', rating: 4.7, brand: 'Farm Fresh' },
    { name: 'Butter', price: 180, image: milkImg, unit: '500g', rating: 4.4, brand: 'Golden Churn' },
    { name: 'Paneer', price: 220, image: milkImg, unit: '500g', rating: 4.6, brand: 'Fresh Cottage' },
    { name: 'Lassi', price: 45, image: milkImg, unit: '200ml', rating: 4.3, brand: 'Traditional Taste' },
    { name: 'Ice Cream', price: 150, image: milkImg, unit: '500ml', rating: 4.8, brand: 'Frozen Treats' },
  ];

  // Add more dairy items
  const additionalDairy = Array.from({ length: 32 }, (_, i) => ({
    name: `Dairy Product ${i + 9}`,
    price: Math.floor(Math.random() * 200) + 40,
    image: milkImg,
    unit: Math.random() > 0.5 ? '500g' : '1 L',
    rating: 4.0 + Math.random() * 0.8,
    brand: 'Fresh Dairy'
  }));

  dairyEggs.push(...additionalDairy);

  dairyEggs.forEach((item) => {
    products.push({
      id: (idCounter++).toString(),
      category: 'dairy',
      deliveryTime: '5 min',
      inStock: true,
      description: `Fresh dairy product - ${item.name.toLowerCase()}`,
      ...item
    });
  });

  // Bakery & Bread (30 items)
  const bakery = [
    { name: 'Whole Wheat Bread', price: 35, originalPrice: 40, image: breadImg, unit: '400g', discount: 12, rating: 4.3, brand: 'Baker\'s Choice' },
    { name: 'White Bread', price: 30, image: breadImg, unit: '400g', rating: 4.1, brand: 'Soft Touch' },
    { name: 'Multigrain Bread', price: 45, image: breadImg, unit: '400g', rating: 4.4, brand: 'Healthy Grains' },
    { name: 'Croissant', price: 25, image: breadImg, unit: '1 piece', rating: 4.5, brand: 'French Bakery' },
    { name: 'Biscuits', price: 65, image: breadImg, unit: '500g', rating: 4.2, brand: 'Crispy Bites' },
  ];

  // Add more bakery items
  const additionalBakery = Array.from({ length: 25 }, (_, i) => ({
    name: `Bakery Item ${i + 6}`,
    price: Math.floor(Math.random() * 80) + 20,
    image: breadImg,
    unit: Math.random() > 0.5 ? '400g' : '1 piece',
    rating: 4.0 + Math.random() * 0.8,
    brand: 'Fresh Bakery'
  }));

  bakery.push(...additionalBakery);

  bakery.forEach((item) => {
    products.push({
      id: (idCounter++).toString(),
      category: 'bakery',
      deliveryTime: '12 min',
      inStock: true,
      description: `Fresh baked ${item.name.toLowerCase()}`,
      ...item
    });
  });

  // Meat & Seafood (50 items)
  const meatSeafood = [
    { name: 'Chicken Breast', price: 280, image: meatImg, unit: '1 kg', rating: 4.5, brand: 'Fresh Poultry' },
    { name: 'Mutton Curry Cut', price: 650, image: meatImg, unit: '1 kg', rating: 4.6, brand: 'Premium Meat' },
    { name: 'Fish Fillet', price: 420, image: meatImg, unit: '500g', rating: 4.4, brand: 'Ocean Fresh' },
    { name: 'Prawns', price: 380, image: meatImg, unit: '500g', rating: 4.7, brand: 'Sea Delight' },
    { name: 'Eggs', price: 120, image: meatImg, unit: '12 pieces', rating: 4.3, brand: 'Farm Fresh' },
  ];

  // Add more meat and seafood items
  const additionalMeat = Array.from({ length: 45 }, (_, i) => ({
    name: `Meat Product ${i + 6}`,
    price: Math.floor(Math.random() * 500) + 150,
    image: meatImg,
    unit: Math.random() > 0.5 ? '500g' : '1 kg',
    rating: 4.0 + Math.random() * 0.8,
    brand: 'Quality Meat'
  }));

  meatSeafood.push(...additionalMeat);

  meatSeafood.forEach((item) => {
    products.push({
      id: (idCounter++).toString(),
      category: 'meat-seafood',
      deliveryTime: '15 min',
      inStock: true,
      description: `Fresh ${item.name.toLowerCase()}`,
      ...item
    });
  });

  // Snacks & Beverages (80 items)
  const snacksBeverages = [
    { name: 'Potato Chips', price: 45, image: snacksImg, unit: '200g', rating: 4.2, brand: 'Crispy Crunch' },
    { name: 'Coca Cola', price: 40, image: snacksImg, unit: '600ml', rating: 4.4, brand: 'Coca Cola' },
    { name: 'Orange Juice', price: 85, image: snacksImg, unit: '1 L', rating: 4.3, brand: 'Fresh Squeeze' },
    { name: 'Cookies', price: 65, image: snacksImg, unit: '300g', rating: 4.1, brand: 'Sweet Treats' },
    { name: 'Energy Drink', price: 120, image: snacksImg, unit: '250ml', rating: 4.0, brand: 'Power Up' },
  ];

  // Add more snacks and beverages
  const additionalSnacks = Array.from({ length: 75 }, (_, i) => ({
    name: `Snack Item ${i + 6}`,
    price: Math.floor(Math.random() * 150) + 25,
    image: snacksImg,
    unit: Math.random() > 0.5 ? '200g' : '500ml',
    rating: 4.0 + Math.random() * 0.8,
    brand: 'Tasty Treats'
  }));

  snacksBeverages.push(...additionalSnacks);

  snacksBeverages.forEach((item) => {
    products.push({
      id: (idCounter++).toString(),
      category: 'snacks-beverages',
      deliveryTime: '10 min',
      inStock: true,
      description: `Delicious ${item.name.toLowerCase()}`,
      ...item
    });
  });

  // Personal Care (60 items)
  const personalCare = [
    { name: 'Shampoo', price: 180, image: personalCareImg, unit: '400ml', rating: 4.3, brand: 'Hair Care Pro' },
    { name: 'Toothpaste', price: 85, image: personalCareImg, unit: '200g', rating: 4.5, brand: 'Fresh Smile' },
    { name: 'Soap', price: 45, image: personalCareImg, unit: '125g', rating: 4.2, brand: 'Gentle Touch' },
    { name: 'Face Wash', price: 150, image: personalCareImg, unit: '150ml', rating: 4.4, brand: 'Clear Skin' },
    { name: 'Deodorant', price: 120, image: personalCareImg, unit: '150ml', rating: 4.1, brand: 'All Day Fresh' },
  ];

  // Add more personal care items
  const additionalPersonalCare = Array.from({ length: 55 }, (_, i) => ({
    name: `Personal Care ${i + 6}`,
    price: Math.floor(Math.random() * 200) + 40,
    image: personalCareImg,
    unit: Math.random() > 0.5 ? '200ml' : '150g',
    rating: 4.0 + Math.random() * 0.8,
    brand: 'Care Plus'
  }));

  personalCare.push(...additionalPersonalCare);

  personalCare.forEach((item) => {
    products.push({
      id: (idCounter++).toString(),
      category: 'personal-care',
      deliveryTime: '12 min',
      inStock: true,
      description: `Quality ${item.name.toLowerCase()} for daily use`,
      ...item
    });
  });

  // Household Items (50 items)
  const household = [
    { name: 'Detergent Powder', price: 180, image: householdImg, unit: '1 kg', rating: 4.3, brand: 'Clean Master' },
    { name: 'Dish Wash', price: 95, image: householdImg, unit: '500ml', rating: 4.4, brand: 'Sparkle Clean' },
    { name: 'Floor Cleaner', price: 120, image: householdImg, unit: '1 L', rating: 4.2, brand: 'Floor Shine' },
    { name: 'Toilet Paper', price: 140, image: householdImg, unit: '4 rolls', rating: 4.1, brand: 'Soft Touch' },
    { name: 'Air Freshener', price: 85, image: householdImg, unit: '300ml', rating: 4.0, brand: 'Fresh Air' },
  ];

  // Add more household items
  const additionalHousehold = Array.from({ length: 45 }, (_, i) => ({
    name: `Household Item ${i + 6}`,
    price: Math.floor(Math.random() * 250) + 50,
    image: householdImg,
    unit: Math.random() > 0.5 ? '1 L' : '500g',
    rating: 4.0 + Math.random() * 0.8,
    brand: 'Home Care'
  }));

  household.push(...additionalHousehold);

  household.forEach((item) => {
    products.push({
      id: (idCounter++).toString(),
      category: 'household',
      deliveryTime: '15 min',
      inStock: true,
      description: `Essential ${item.name.toLowerCase()} for your home`,
      ...item
    });
  });

  // Groceries & Staples (100 items)
  const groceries = [
    { name: 'Basmati Rice', price: 120, image: groceriesImg, unit: '1 kg', rating: 4.5, brand: 'Royal Grain' },
    { name: 'Wheat Flour', price: 85, image: groceriesImg, unit: '1 kg', rating: 4.3, brand: 'Golden Harvest' },
    { name: 'Cooking Oil', price: 180, image: groceriesImg, unit: '1 L', rating: 4.4, brand: 'Pure Gold' },
    { name: 'Sugar', price: 45, image: groceriesImg, unit: '1 kg', rating: 4.2, brand: 'Sweet Crystal' },
    { name: 'Salt', price: 25, image: groceriesImg, unit: '1 kg', rating: 4.6, brand: 'Pure Salt' },
    { name: 'Dal (Lentils)', price: 95, image: groceriesImg, unit: '500g', rating: 4.4, brand: 'Protein Rich' },
    { name: 'Turmeric Powder', price: 65, image: groceriesImg, unit: '200g', rating: 4.3, brand: 'Spice King' },
    { name: 'Red Chili Powder', price: 75, image: groceriesImg, unit: '200g', rating: 4.2, brand: 'Hot Spice' },
  ];

  // Add more grocery items
  const additionalGroceries = Array.from({ length: 92 }, (_, i) => ({
    name: `Grocery Item ${i + 9}`,
    price: Math.floor(Math.random() * 200) + 30,
    image: groceriesImg,
    unit: Math.random() > 0.5 ? '1 kg' : '500g',
    rating: 4.0 + Math.random() * 0.8,
    brand: 'Quality Goods'
  }));

  groceries.push(...additionalGroceries);

  groceries.forEach((item) => {
    products.push({
      id: (idCounter++).toString(),
      category: 'groceries',
      deliveryTime: '10 min',
      inStock: true,
      description: `Premium quality ${item.name.toLowerCase()}`,
      ...item
    });
  });

  return products;
};

export const expandedProducts = generateProducts();
export const categories = [
  { id: 'all', name: 'All', icon: '🛒' },
  { id: 'fruits-vegetables', name: 'Fruits & Vegetables', icon: '🥕' },
  { id: 'dairy', name: 'Dairy & Eggs', icon: '🥛' },
  { id: 'bakery', name: 'Bakery', icon: '🍞' },
  { id: 'meat-seafood', name: 'Meat & Seafood', icon: '🍖' },
  { id: 'snacks-beverages', name: 'Snacks & Beverages', icon: '🍿' },
  { id: 'personal-care', name: 'Personal Care', icon: '🧴' },
  { id: 'household', name: 'Household', icon: '🧽' },
  { id: 'groceries', name: 'Groceries & Staples', icon: '🌾' },
];