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
import drumstickImg from '@/assets/products/drumstick.jpg';
import onionsImg from '@/assets/products/onions.jpg';
import potatoesImg from '@/assets/products/potatoes.jpg';
import spinachImg from '@/assets/products/spinach.jpg';
import broccoliImg from '@/assets/products/broccoli.jpg';
import cauliflowerImg from '@/assets/products/cauliflower.jpg';
import orangesImg from '@/assets/products/oranges.jpg';
import riceImg from '@/assets/products/rice.jpg';
import dalImg from '@/assets/products/dal.jpg';
import oilImg from '@/assets/products/oil.jpg';

// Function to get relevant image based on product name
const getProductImage = (productName: string, category: string): string => {
  const name = productName.toLowerCase();
  
  // Specific product matches
  if (name.includes('banana')) return bananasImg;
  if (name.includes('apple')) return applesImg;
  if (name.includes('milk')) return milkImg;
  if (name.includes('bread')) return breadImg;
  if (name.includes('tomato')) return tomatoesImg;
  if (name.includes('carrot')) return carrotsImg;
  if (name.includes('drumstick')) return drumstickImg;
  if (name.includes('onion')) return onionsImg;
  if (name.includes('potato')) return potatoesImg;
  if (name.includes('spinach')) return spinachImg;
  if (name.includes('broccoli')) return broccoliImg;
  if (name.includes('cauliflower')) return cauliflowerImg;
  if (name.includes('orange')) return orangesImg;
  if (name.includes('rice')) return riceImg;
  if (name.includes('dal') || name.includes('lentil')) return dalImg;
  if (name.includes('oil')) return oilImg;
  
  // Category-based fallbacks
  if (category === 'fruits-vegetables') return groceriesImg;
  if (category === 'meat-seafood') return meatImg;
  if (category === 'personal-care') return personalCareImg;
  if (category === 'household') return householdImg;
  if (category === 'snacks') return snacksImg;
  
  // Default fallback
  return groceriesImg;
};

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

// Comprehensive product database with 500+ unique items
const generateProducts = (): Product[] => {
  const products: Product[] = [];
  let idCounter = 1;

  // Fruits & Vegetables (100 items)
  const fruits = [
    'Fresh Organic Bananas', 'Red Delicious Apples', 'Green Grapes', 'Sweet Oranges', 'Alphonso Mangoes',
    'Kiwi Fruit', 'Pomegranate', 'Papaya', 'Pineapple', 'Watermelon', 'Muskmelon', 'Dragon Fruit',
    'Passion Fruit', 'Avocado', 'Blueberries', 'Strawberries', 'Blackberries', 'Raspberries',
    'Cherries', 'Plums', 'Peaches', 'Apricots', 'Guava', 'Custard Apple', 'Jamun',
    'Lychee', 'Rambutan', 'Star Fruit', 'Fig', 'Dates', 'Coconut', 'Lemon', 'Lime',
    'Grapefruit', 'Tangerine', 'Sweet Lime', 'Jackfruit', 'Wood Apple', 'Sapota', 'Pears'
  ];

  const vegetables = [
    'Fresh Red Tomatoes', 'Orange Carrots', 'Fresh Spinach', 'Broccoli', 'Cauliflower',
    'Bell Peppers', 'Cucumber', 'Green Beans', 'Potatoes', 'Onions', 'Garlic', 'Ginger',
    'Green Chili', 'Red Chili', 'Capsicum', 'Cabbage', 'Lettuce', 'Celery', 'Radish',
    'Beetroot', 'Turnip', 'Sweet Potato', 'Yam', 'Bottle Gourd', 'Ridge Gourd', 'Bitter Gourd',
    'Snake Gourd', 'Ash Gourd', 'Pumpkin', 'Okra', 'Eggplant', 'Zucchini', 'Corn',
    'Green Peas', 'Drumstick', 'Mint Leaves', 'Coriander Leaves', 'Curry Leaves', 'Fenugreek Leaves',
    'Mushrooms', 'Artichoke', 'Asparagus', 'Brussels Sprouts', 'Kale', 'Swiss Chard',
    'Bok Choy', 'Leeks', 'Shallots', 'Spring Onions', 'Red Onions', 'White Onions',
    'Purple Cabbage', 'Red Cabbage', 'Chinese Cabbage', 'Parsley', 'Basil', 'Rosemary',
    'Thyme', 'Oregano', 'Sage'
  ];

  [...fruits, ...vegetables].forEach((name, index) => {
    const isVegetable = index >= fruits.length;
    products.push({
      id: (idCounter++).toString(),
      name,
      price: Math.floor(Math.random() * 150) + 20,
      originalPrice: Math.floor(Math.random() * 200) + 50,
      image: getProductImage(name, 'fruits-vegetables'),
      category: 'fruits-vegetables',
      subCategory: isVegetable ? 'vegetables' : 'fruits',
      unit: Math.random() > 0.5 ? '500g' : '1 kg',
      discount: Math.floor(Math.random() * 25) + 5,
      rating: 4.0 + Math.random() * 1.0,
      deliveryTime: '8 min',
      inStock: true,
      description: `Fresh and organic ${name.toLowerCase()}`,
      brand: ['Organic Farm', 'Fresh Valley', 'Nature Fresh', 'Garden Fresh'][Math.floor(Math.random() * 4)]
    });
  });

  // Dairy & Eggs (50 items)
  const dairyProducts = [
    'Fresh Whole Milk', 'Toned Milk', 'Double Toned Milk', 'Full Cream Milk', 'Skimmed Milk',
    'Greek Yogurt', 'Plain Yogurt', 'Flavored Yogurt', 'Lassi', 'Buttermilk', 'Cheese Slices',
    'Mozzarella Cheese', 'Cheddar Cheese', 'Parmesan Cheese', 'Cream Cheese', 'Cottage Cheese',
    'Paneer', 'Fresh Eggs', 'Brown Eggs', 'Organic Eggs', 'Quail Eggs', 'Butter', 'Ghee',
    'Fresh Cream', 'Whipping Cream', 'Sour Cream', 'Ice Cream Vanilla', 'Ice Cream Chocolate',
    'Ice Cream Strawberry', 'Frozen Yogurt', 'Milk Powder', 'Condensed Milk', 'Evaporated Milk',
    'Coconut Milk', 'Almond Milk', 'Soy Milk', 'Oat Milk', 'Rice Milk', 'Custard', 'Pudding',
    'Cheese Spread', 'Butter Milk', 'Flavored Milk', 'Protein Milk', 'Lactose Free Milk',
    'Organic Milk', 'Buffalo Milk', 'Goat Milk', 'Camel Milk', 'Kefir'
  ];

  dairyProducts.forEach((name, index) => {
    products.push({
      id: (idCounter++).toString(),
      name,
      price: Math.floor(Math.random() * 200) + 30,
      image: getProductImage(name, 'dairy-eggs'),
      category: 'dairy-eggs',
      unit: ['200ml', '500ml', '1L', '250g', '500g', '12 pieces'][Math.floor(Math.random() * 6)],
      rating: 4.2 + Math.random() * 0.8,
      deliveryTime: '10 min',
      inStock: true,
      description: `Premium quality ${name.toLowerCase()}`,
      brand: ['Pure Dairy', 'Creamy Delight', 'Dairy Gold', 'Farm Fresh'][Math.floor(Math.random() * 4)]
    });
  });

  // Bakery & Bread (40 items)
  const bakeryProducts = [
    'White Bread', 'Brown Bread', 'Whole Wheat Bread', 'Multigrain Bread', 'Sourdough Bread',
    'Rye Bread', 'Oat Bread', 'Gluten Free Bread', 'Dinner Rolls', 'Burger Buns', 'Hot Dog Buns',
    'Croissants', 'Danish Pastry', 'Muffins Blueberry', 'Muffins Chocolate', 'Cupcakes',
    'Donuts Glazed', 'Donuts Chocolate', 'Bagels', 'English Muffins', 'Pita Bread', 'Naan Bread',
    'Garlic Bread', 'Focaccia', 'Baguette', 'Ciabatta', 'Pretzel', 'Cookies Chocolate Chip',
    'Cookies Oatmeal', 'Cookies Sugar', 'Crackers', 'Breadsticks', 'Pizza Base', 'Cake Vanilla',
    'Cake Chocolate', 'Cake Red Velvet', 'Cheesecake', 'Pie Apple', 'Pie Pumpkin', 'Tart'
  ];

  bakeryProducts.forEach((name, index) => {
    products.push({
      id: (idCounter++).toString(),
      name,
      price: Math.floor(Math.random() * 150) + 25,
      image: getProductImage(name, 'bakery'),
      category: 'bakery',
      unit: ['1 piece', '6 pieces', '12 pieces', '500g', '1 kg'][Math.floor(Math.random() * 5)],
      rating: 4.1 + Math.random() * 0.9,
      deliveryTime: '12 min',
      inStock: Math.random() > 0.1,
      description: `Freshly baked ${name.toLowerCase()}`,
      brand: ['Baker\'s Delight', 'Fresh Bake', 'Golden Crust', 'Artisan Bakery'][Math.floor(Math.random() * 4)]
    });
  });

  // Meat & Seafood (30 items)
  const meatProducts = [
    'Chicken Breast', 'Chicken Thighs', 'Chicken Wings', 'Chicken Drumsticks', 'Whole Chicken',
    'Chicken Mince', 'Mutton Curry Cut', 'Mutton Biryani Cut', 'Goat Liver', 'Goat Kidney',
    'Beef Steak', 'Beef Mince', 'Beef Roast', 'Pork Chops', 'Pork Belly', 'Bacon',
    'Sausages', 'Salami', 'Ham', 'Turkey Breast', 'Duck', 'Quail', 'Fish Pomfret',
    'Fish Kingfish', 'Fish Tuna', 'Prawns Large', 'Prawns Medium', 'Crab', 'Lobster', 'Squid'
  ];

  meatProducts.forEach((name, index) => {
    products.push({
      id: (idCounter++).toString(),
      name,
      price: Math.floor(Math.random() * 400) + 150,
      image: getProductImage(name, 'meat-seafood'),
      category: 'meat-seafood',
      unit: ['500g', '1 kg', '250g'][Math.floor(Math.random() * 3)],
      rating: 4.3 + Math.random() * 0.7,
      deliveryTime: '15 min',
      inStock: true,
      description: `Fresh ${name.toLowerCase()}`,
      brand: ['Fresh Meat Co', 'Ocean Fresh', 'Premium Cuts', 'Halal Choice'][Math.floor(Math.random() * 4)]
    });
  });

  // Personal Care (60 items)
  const personalCareProducts = [
    'Shampoo Anti-Dandruff', 'Shampoo Dry Hair', 'Shampoo Oily Hair', 'Conditioner', 'Hair Oil',
    'Hair Mask', 'Hair Serum', 'Body Wash', 'Face Wash', 'Face Cream', 'Body Lotion',
    'Hand Cream', 'Sunscreen SPF 30', 'Sunscreen SPF 50', 'Moisturizer', 'Night Cream',
    'Eye Cream', 'Face Mask', 'Scrub Face', 'Scrub Body', 'Soap Bar', 'Liquid Soap',
    'Toothpaste', 'Toothbrush', 'Mouthwash', 'Dental Floss', 'Deodorant Spray', 'Deodorant Roll-on',
    'Perfume Men', 'Perfume Women', 'Body Spray', 'Talcum Powder', 'Baby Powder', 'Baby Oil',
    'Baby Shampoo', 'Baby Soap', 'Diapers Small', 'Diapers Medium', 'Diapers Large', 'Baby Wipes',
    'Razor', 'Shaving Cream', 'After Shave', 'Hair Gel', 'Hair Wax', 'Hair Spray', 'Lip Balm',
    'Hand Sanitizer', 'Tissues', 'Cotton Pads', 'Cotton Swabs', 'Nail Polish', 'Nail Remover',
    'Makeup Remover', 'Foundation', 'Lipstick', 'Mascara', 'Eyeliner', 'Kajal', 'Face Powder'
  ];

  personalCareProducts.forEach((name, index) => {
    products.push({
      id: (idCounter++).toString(),
      name,
      price: Math.floor(Math.random() * 300) + 50,
      image: getProductImage(name, 'personal-care'),
      category: 'personal-care',
      unit: ['100ml', '200ml', '500ml', '1 piece', '50g', '100g'][Math.floor(Math.random() * 6)],
      rating: 4.0 + Math.random() * 1.0,
      deliveryTime: '10 min',
      inStock: true,
      description: `Premium ${name.toLowerCase()}`,
      brand: ['Beauty Plus', 'Glow Bright', 'Pure Care', 'Natural Essence'][Math.floor(Math.random() * 4)]
    });
  });

  // Household Items (50 items)
  const householdProducts = [
    'Detergent Powder', 'Liquid Detergent', 'Fabric Softener', 'Bleach', 'Toilet Paper',
    'Kitchen Towels', 'Tissues Box', 'Garbage Bags', 'Aluminum Foil', 'Plastic Wrap',
    'Dishwashing Liquid', 'Dishwasher Tablets', 'All Purpose Cleaner', 'Glass Cleaner',
    'Bathroom Cleaner', 'Floor Cleaner', 'Furniture Polish', 'Air Freshener', 'Candles',
    'Matches', 'Lighter', 'Batteries AA', 'Batteries AAA', 'Light Bulbs LED', 'CFL Bulbs',
    'Extension Cord', 'Power Strip', 'Cleaning Cloths', 'Sponges', 'Scrub Brush',
    'Broom', 'Mop', 'Bucket', 'Dustpan', 'Vacuum Bags', 'Trash Can', 'Storage Boxes',
    'Hangers', 'Laundry Basket', 'Iron', 'Ironing Board Cover', 'Shoe Polish', 'Insect Spray',
    'Moth Balls', 'Room Spray', 'Toilet Cleaner', 'Drain Cleaner', 'Oven Cleaner',
    'Stainless Steel Cleaner', 'Wood Cleaner'
  ];

  householdProducts.forEach((name, index) => {
    products.push({
      id: (idCounter++).toString(),
      name,
      price: Math.floor(Math.random() * 250) + 40,
      image: getProductImage(name, 'household'),
      category: 'household',
      unit: ['1 piece', '500ml', '1L', '2L', '250g', '500g'][Math.floor(Math.random() * 6)],
      rating: 4.1 + Math.random() * 0.9,
      deliveryTime: '12 min',
      inStock: true,
      description: `Quality ${name.toLowerCase()}`,
      brand: ['Clean Master', 'Sparkle Bright', 'Home Care', 'Fresh Clean'][Math.floor(Math.random() * 4)]
    });
  });

  // Snacks & Beverages (80 items)
  const snacksProducts = [
    'Potato Chips Classic', 'Potato Chips Barbecue', 'Potato Chips Sour Cream', 'Corn Chips',
    'Tortilla Chips', 'Pretzels', 'Popcorn Butter', 'Popcorn Cheese', 'Nuts Mixed', 'Almonds',
    'Cashews', 'Pistachios', 'Walnuts', 'Peanuts', 'Raisins', 'Dried Fruits Mix',
    'Chocolate Bar Dark', 'Chocolate Bar Milk', 'Chocolate Bar White', 'Candy Gummy Bears',
    'Candy Hard', 'Lollipops', 'Chewing Gum', 'Mints', 'Cookies Digestive', 'Cookies Cream',
    'Biscuits Tea', 'Crackers Salted', 'Crackers Cheese', 'Wafers', 'Cake Bars', 'Protein Bars',
    'Granola Bars', 'Trail Mix', 'Beef Jerky', 'Fruit Leather', 'Rice Cakes', 'Corn Cakes',
    'Instant Noodles', 'Cup Noodles', 'Pasta Sauce', 'Pizza Sauce', 'Ketchup', 'Mustard',
    'Mayonnaise', 'Hot Sauce', 'Soy Sauce', 'Vinegar', 'Olive Oil', 'Vegetable Oil',
    'Coconut Oil', 'Sunflower Oil', 'Sesame Oil', 'Salt', 'Black Pepper', 'Red Chili Powder',
    'Turmeric Powder', 'Coriander Powder', 'Cumin Powder', 'Garam Masala', 'Tea Bags',
    'Coffee Instant', 'Coffee Beans', 'Green Tea', 'Herbal Tea', 'Energy Drink', 'Soft Drink Cola',
    'Soft Drink Orange', 'Soft Drink Lemon', 'Juice Apple', 'Juice Orange', 'Juice Mango',
    'Juice Grape', 'Sports Drink', 'Coconut Water', 'Sparkling Water', 'Mineral Water',
    'Drinking Water', 'Ice Cubes', 'Wine Red', 'Wine White', 'Beer', 'Whiskey', 'Vodka', 'Rum'
  ];

  snacksProducts.forEach((name, index) => {
    products.push({
      id: (idCounter++).toString(),
      name,
      price: Math.floor(Math.random() * 200) + 25,
      image: getProductImage(name, 'snacks-beverages'),
      category: 'snacks-beverages',
      unit: ['100g', '200g', '500g', '1L', '330ml', '500ml', '1 piece'][Math.floor(Math.random() * 7)],
      rating: 4.0 + Math.random() * 1.0,
      deliveryTime: '8 min',
      inStock: true,
      description: `Delicious ${name.toLowerCase()}`,
      brand: ['Snack Master', 'Crispy Bites', 'Tasty Treats', 'Fresh Sips'][Math.floor(Math.random() * 4)]
    });
  });

  // Groceries & Staples (90 items)
  const groceryProducts = [
    'Basmati Rice', 'Jasmine Rice', 'Brown Rice', 'Wild Rice', 'Quinoa', 'Wheat Flour', 'All Purpose Flour',
    'Whole Wheat Flour', 'Rice Flour', 'Corn Flour', 'Besan Flour', 'Oats Rolled', 'Oats Steel Cut',
    'Barley', 'Millet', 'Bulgur Wheat', 'Couscous', 'Pasta Penne', 'Pasta Spaghetti', 'Pasta Fusilli',
    'Noodles Egg', 'Noodles Rice', 'Lentils Red', 'Lentils Green', 'Lentils Yellow', 'Black Beans',
    'Kidney Beans', 'Chickpeas', 'Green Peas Dried', 'Black Eyed Peas', 'Sugar White', 'Sugar Brown',
    'Jaggery', 'Honey', 'Maple Syrup', 'Corn Syrup', 'Vanilla Extract', 'Baking Powder', 'Baking Soda',
    'Yeast', 'Gelatin', 'Cornstarch', 'Tapioca Starch', 'Coconut Flakes', 'Sesame Seeds', 'Pumpkin Seeds',
    'Sunflower Seeds', 'Chia Seeds', 'Flax Seeds', 'Poppy Seeds', 'Mustard Seeds', 'Cumin Seeds',
    'Coriander Seeds', 'Fennel Seeds', 'Cardamom', 'Cinnamon Sticks', 'Bay Leaves', 'Cloves',
    'Nutmeg', 'Star Anise', 'Black Peppercorns', 'White Peppercorns', 'Dried Red Chilies',
    'Paprika', 'Oregano Dried', 'Basil Dried', 'Thyme Dried', 'Rosemary Dried', 'Sage Dried',
    'Mint Dried', 'Parsley Dried', 'Dill Dried', 'Tarragon', 'Marjoram', 'Stock Vegetable',
    'Stock Chicken', 'Stock Beef', 'Tomato Puree', 'Tomato Paste', 'Coconut Milk Canned',
    'Evaporated Milk', 'Condensed Milk', 'Cream of Tartar', 'Food Coloring', 'Sprinkles',
    'Chocolate Chips', 'Cocoa Powder', 'Powdered Sugar', 'Cake Mix', 'Frosting', 'Pie Filling',
    'Jam Strawberry', 'Jam Mixed Fruit', 'Peanut Butter', 'Almond Butter', 'Nutella'
  ];

  groceryProducts.forEach((name, index) => {
    products.push({
      id: (idCounter++).toString(),
      name,
      price: Math.floor(Math.random() * 300) + 30,
      image: groceriesImg,
      category: 'groceries',
      unit: ['500g', '1 kg', '2 kg', '250g', '100g'][Math.floor(Math.random() * 5)],
      rating: 4.2 + Math.random() * 0.8,
      deliveryTime: '10 min',
      inStock: true,
      description: `Premium quality ${name.toLowerCase()}`,
      brand: ['Best Quality', 'Farm Select', 'Organic Plus', 'Traditional'][Math.floor(Math.random() * 4)]
    });
  });

  return products;
};

export const expandedProducts = generateProducts();