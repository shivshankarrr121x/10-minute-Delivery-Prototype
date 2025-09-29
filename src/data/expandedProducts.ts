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
  if (category === 'snacks-beverages') return snacksImg;
  if (category === 'electronics') return groceriesImg; // Fallback for electronics
  
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

  // Fruits & Vegetables (100 items) - Updated realistic prices
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
      price: Math.floor(Math.random() * 200) + 30, // ₹30-230
      originalPrice: Math.floor(Math.random() * 100) + 250,
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

  // Dairy & Eggs (50 items) - Updated realistic prices
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
      price: Math.floor(Math.random() * 300) + 40, // ₹40-340
      image: getProductImage(name, 'dairy-eggs'),
      category: 'dairy-eggs',
      unit: ['200ml', '500ml', '1L', '250g', '500g', '12 pieces'][Math.floor(Math.random() * 6)],
      rating: 4.2 + Math.random() * 0.8,
      deliveryTime: '10 min',
      inStock: true,
      description: `Premium quality ${name.toLowerCase()}`,
      brand: ['Amul', 'Mother Dairy', 'Nandini', 'Britannia'][Math.floor(Math.random() * 4)]
    });
  });

  // Electronics (120 items) - New category with realistic prices
  const laptops = [
    'Dell Inspiron 15 3000', 'HP Pavilion 14', 'Lenovo ThinkPad E14', 'Acer Aspire 5',
    'ASUS VivoBook 15', 'MacBook Air M2', 'MacBook Pro 14"', 'Dell XPS 13', 'HP Spectre x360',
    'Lenovo IdeaPad Gaming 3', 'MSI GF63 Thin', 'ASUS ROG Strix G15', 'Acer Nitro 5',
    'Surface Laptop 5', 'Razer Blade 15', 'Alienware m15 R7', 'HP Omen 15', 'Lenovo Legion 5'
  ];

  const mobiles = [
    'iPhone 15 Pro', 'iPhone 15', 'Samsung Galaxy S24', 'Samsung Galaxy S24 Ultra',
    'OnePlus 12', 'OnePlus 11', 'Google Pixel 8 Pro', 'Google Pixel 8', 'Xiaomi 14',
    'Xiaomi 13T Pro', 'Realme GT 6', 'OPPO Find X7', 'Vivo X100 Pro', 'Nothing Phone 2a',
    'Samsung Galaxy A55', 'Redmi Note 13 Pro', 'POCO X6 Pro', 'Motorola Edge 50'
  ];

  const monitors = [
    'LG 24" Full HD Monitor', 'Dell 27" QHD Monitor', 'ASUS 32" 4K Monitor', 'Samsung 49" Ultrawide',
    'BenQ 27" Gaming Monitor', 'AOC 24" IPS Monitor', 'ViewSonic 27" Professional', 'Acer 32" Curved',
    'HP 25" Gaming Display', 'MSI 27" Gaming Monitor'
  ];

  const tablets = [
    'iPad Pro 12.9"', 'iPad Air 5th Gen', 'iPad 10th Gen', 'Samsung Galaxy Tab S9',
    'Samsung Galaxy Tab A9', 'Lenovo Tab P12 Pro', 'Microsoft Surface Pro 9', 'OnePlus Pad',
    'Xiaomi Pad 6', 'Realme Pad 2'
  ];

  const cpus = [
    'Intel Core i5-13400F', 'Intel Core i7-13700K', 'Intel Core i9-13900K', 'AMD Ryzen 5 7600X',
    'AMD Ryzen 7 7700X', 'AMD Ryzen 9 7900X', 'Intel Core i3-13100F', 'AMD Ryzen 5 5600X'
  ];

  const gpus = [
    'NVIDIA RTX 4060', 'NVIDIA RTX 4070', 'NVIDIA RTX 4080', 'NVIDIA RTX 4090',
    'AMD RX 7600', 'AMD RX 7700 XT', 'AMD RX 7800 XT', 'AMD RX 7900 XTX',
    'NVIDIA GTX 1660 Super', 'AMD RX 6600'
  ];

  const accessories = [
    'Wireless Mouse Logitech', 'Gaming Keyboard Razer', 'USB-C Hub Anker', 'Power Bank 20000mAh',
    'Bluetooth Headphones Sony', 'Webcam 1080p', 'USB Flash Drive 64GB', 'Portable SSD 1TB',
    'Wireless Charger', 'Phone Case iPhone 15', 'Screen Protector', 'Laptop Cooling Pad',
    'HDMI Cable 4K', 'USB-C Cable', 'Car Charger', 'Laptop Sleeve 15"', 'Desk Lamp LED',
    'Phone Stand Adjustable', 'Ethernet Cable 10m', 'Surge Protector'
  ];

  // Add all electronics with realistic pricing
  [...laptops, ...mobiles, ...monitors, ...tablets, ...cpus, ...gpus, ...accessories].forEach((name, index) => {
    let price, unit, subCategory;
    
    if (index < laptops.length) {
      price = Math.floor(Math.random() * 200000) + 35000; // ₹35,000-235,000
      unit = '1 piece';
      subCategory = 'laptops';
    } else if (index < laptops.length + mobiles.length) {
      price = Math.floor(Math.random() * 150000) + 15000; // ₹15,000-165,000
      unit = '1 piece';
      subCategory = 'mobiles';
    } else if (index < laptops.length + mobiles.length + monitors.length) {
      price = Math.floor(Math.random() * 80000) + 12000; // ₹12,000-92,000
      unit = '1 piece';
      subCategory = 'monitors';
    } else if (index < laptops.length + mobiles.length + monitors.length + tablets.length) {
      price = Math.floor(Math.random() * 120000) + 20000; // ₹20,000-140,000
      unit = '1 piece';
      subCategory = 'tablets';
    } else if (index < laptops.length + mobiles.length + monitors.length + tablets.length + cpus.length) {
      price = Math.floor(Math.random() * 50000) + 8000; // ₹8,000-58,000
      unit = '1 piece';
      subCategory = 'processors';
    } else if (index < laptops.length + mobiles.length + monitors.length + tablets.length + cpus.length + gpus.length) {
      price = Math.floor(Math.random() * 180000) + 20000; // ₹20,000-200,000
      unit = '1 piece';
      subCategory = 'graphics-cards';
    } else {
      price = Math.floor(Math.random() * 8000) + 500; // ₹500-8,500
      unit = '1 piece';
      subCategory = 'accessories';
    }

    products.push({
      id: (idCounter++).toString(),
      name,
      price,
      originalPrice: price + Math.floor(Math.random() * 10000) + 2000,
      image: getProductImage(name, 'electronics'),
      category: 'electronics',
      subCategory,
      unit,
      discount: Math.floor(Math.random() * 20) + 5,
      rating: 4.0 + Math.random() * 1.0,
      deliveryTime: '24 hours',
      inStock: Math.random() > 0.05,
      description: `Latest ${name.toLowerCase()}`,
      brand: subCategory === 'laptops' ? ['Dell', 'HP', 'Lenovo', 'ASUS', 'Acer'][Math.floor(Math.random() * 5)] :
             subCategory === 'mobiles' ? ['Apple', 'Samsung', 'OnePlus', 'Google', 'Xiaomi'][Math.floor(Math.random() * 5)] :
             ['Tech Pro', 'Digital Plus', 'Smart Tech', 'Innovation Hub'][Math.floor(Math.random() * 4)]
    });
  });

  // Bakery & Bread (40 items) - Updated realistic prices
  const bakeryProducts = [
    'White Bread', 'Brown Bread', 'Whole Wheat Bread', 'Multigrain Bread', 'Sourdough Bread',
    'Rye Bread', 'Oat Bread', 'Gluten Free Bread', 'Dinner Rolls', 'Burger Buns', 'Hot Dog Buns',
    'Croissants', 'Danish Pastry', 'Blueberry Muffins', 'Chocolate Muffins', 'Cupcakes',
    'Glazed Donuts', 'Chocolate Donuts', 'Bagels', 'English Muffins', 'Pita Bread', 'Naan Bread',
    'Garlic Bread', 'Focaccia', 'Baguette', 'Ciabatta', 'Pretzel', 'Chocolate Chip Cookies',
    'Oatmeal Cookies', 'Sugar Cookies', 'Crackers', 'Breadsticks', 'Pizza Base', 'Vanilla Cake',
    'Chocolate Cake', 'Red Velvet Cake', 'Cheesecake', 'Apple Pie', 'Pumpkin Pie', 'Fruit Tart'
  ];

  bakeryProducts.forEach((name, index) => {
    products.push({
      id: (idCounter++).toString(),
      name,
      price: Math.floor(Math.random() * 250) + 40, // ₹40-290
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

  // Meat & Seafood (30 items) - Updated realistic prices
  const meatProducts = [
    'Chicken Breast', 'Chicken Thighs', 'Chicken Wings', 'Chicken Drumsticks', 'Whole Chicken',
    'Chicken Mince', 'Mutton Curry Cut', 'Mutton Biryani Cut', 'Goat Liver', 'Goat Kidney',
    'Beef Steak', 'Beef Mince', 'Beef Roast', 'Pork Chops', 'Pork Belly', 'Bacon',
    'Chicken Sausages', 'Chicken Salami', 'Turkey Ham', 'Turkey Breast', 'Duck', 'Quail', 'Pomfret Fish',
    'Kingfish', 'Tuna Fish', 'Large Prawns', 'Medium Prawns', 'Crab', 'Lobster', 'Squid'
  ];

  meatProducts.forEach((name, index) => {
    products.push({
      id: (idCounter++).toString(),
      name,
      price: Math.floor(Math.random() * 800) + 200, // ₹200-1000
      image: getProductImage(name, 'meat-seafood'),
      category: 'meat-seafood',
      unit: ['500g', '1 kg', '250g'][Math.floor(Math.random() * 3)],
      rating: 4.3 + Math.random() * 0.7,
      deliveryTime: '15 min',
      inStock: true,
      description: `Fresh ${name.toLowerCase()}`,
      brand: ['Fresh Meat Co', 'Ocean Fresh', 'Premium Cuts', 'Farm Fresh'][Math.floor(Math.random() * 4)]
    });
  });

  // Personal Care (60 items) - Updated realistic prices
  const personalCareProducts = [
    'Anti-Dandruff Shampoo', 'Dry Hair Shampoo', 'Oily Hair Shampoo', 'Hair Conditioner', 'Hair Oil',
    'Hair Mask', 'Hair Serum', 'Body Wash', 'Face Wash', 'Face Cream', 'Body Lotion',
    'Hand Cream', 'Sunscreen SPF 30', 'Sunscreen SPF 50', 'Moisturizer', 'Night Cream',
    'Eye Cream', 'Face Mask', 'Face Scrub', 'Body Scrub', 'Soap Bar', 'Liquid Soap',
    'Toothpaste', 'Toothbrush', 'Mouthwash', 'Dental Floss', 'Deodorant Spray', 'Deodorant Roll-on',
    'Men Perfume', 'Women Perfume', 'Body Spray', 'Talcum Powder', 'Baby Powder', 'Baby Oil',
    'Baby Shampoo', 'Baby Soap', 'Small Diapers', 'Medium Diapers', 'Large Diapers', 'Baby Wipes',
    'Razor', 'Shaving Cream', 'After Shave', 'Hair Gel', 'Hair Wax', 'Hair Spray', 'Lip Balm',
    'Hand Sanitizer', 'Tissues', 'Cotton Pads', 'Cotton Swabs', 'Nail Polish', 'Nail Remover',
    'Makeup Remover', 'Foundation', 'Lipstick', 'Mascara', 'Eyeliner', 'Kajal', 'Face Powder'
  ];

  personalCareProducts.forEach((name, index) => {
    products.push({
      id: (idCounter++).toString(),
      name,
      price: Math.floor(Math.random() * 500) + 80, // ₹80-580
      image: getProductImage(name, 'personal-care'),
      category: 'personal-care',
      unit: ['100ml', '200ml', '500ml', '1 piece', '50g', '100g'][Math.floor(Math.random() * 6)],
      rating: 4.0 + Math.random() * 1.0,
      deliveryTime: '10 min',
      inStock: true,
      description: `Premium ${name.toLowerCase()}`,
      brand: ['Himalaya', 'Patanjali', 'Lakme', 'L\'Oreal'][Math.floor(Math.random() * 4)]
    });
  });

  // Household Items (50 items) - Updated realistic prices
  const householdProducts = [
    'Detergent Powder', 'Liquid Detergent', 'Fabric Softener', 'Bleach', 'Toilet Paper',
    'Kitchen Towels', 'Tissues Box', 'Garbage Bags', 'Aluminum Foil', 'Plastic Wrap',
    'Dishwashing Liquid', 'Dishwasher Tablets', 'All Purpose Cleaner', 'Glass Cleaner',
    'Bathroom Cleaner', 'Floor Cleaner', 'Furniture Polish', 'Air Freshener', 'Candles',
    'Matches', 'Lighter', 'AA Batteries', 'AAA Batteries', 'LED Light Bulbs', 'CFL Bulbs',
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
      price: Math.floor(Math.random() * 400) + 60, // ₹60-460
      image: getProductImage(name, 'household'),
      category: 'household',
      unit: ['1 piece', '500ml', '1L', '2L', '250g', '500g'][Math.floor(Math.random() * 6)],
      rating: 4.1 + Math.random() * 0.9,
      deliveryTime: '12 min',
      inStock: true,
      description: `Quality ${name.toLowerCase()}`,
      brand: ['Vim', 'Surf Excel', 'Harpic', 'Lizol'][Math.floor(Math.random() * 4)]
    });
  });

  // Snacks & Beverages (60 items) - Removed alcoholic items, Updated realistic prices
  const snacksProducts = [
    'Classic Potato Chips', 'Barbecue Potato Chips', 'Sour Cream Chips', 'Corn Chips',
    'Tortilla Chips', 'Pretzels', 'Butter Popcorn', 'Cheese Popcorn', 'Mixed Nuts', 'Almonds',
    'Cashews', 'Pistachios', 'Walnuts', 'Peanuts', 'Raisins', 'Dried Fruits Mix',
    'Dark Chocolate Bar', 'Milk Chocolate Bar', 'White Chocolate Bar', 'Gummy Bears',
    'Hard Candy', 'Lollipops', 'Chewing Gum', 'Mints', 'Digestive Cookies', 'Cream Cookies',
    'Tea Biscuits', 'Salted Crackers', 'Cheese Crackers', 'Wafers', 'Cake Bars', 'Protein Bars',
    'Granola Bars', 'Trail Mix', 'Fruit Leather', 'Rice Cakes', 'Corn Cakes',
    'Instant Noodles', 'Cup Noodles', 'Pasta Sauce', 'Pizza Sauce', 'Tomato Ketchup', 'Mustard',
    'Mayonnaise', 'Hot Sauce', 'Soy Sauce', 'Vinegar', 'Energy Drink', 'Cola Soft Drink',
    'Orange Soft Drink', 'Lemon Soft Drink', 'Apple Juice', 'Orange Juice', 'Mango Juice',
    'Grape Juice', 'Sports Drink', 'Coconut Water', 'Sparkling Water', 'Mineral Water'
  ];

  snacksProducts.forEach((name, index) => {
    products.push({
      id: (idCounter++).toString(),
      name,
      price: Math.floor(Math.random() * 300) + 20, // ₹20-320
      image: getProductImage(name, 'snacks-beverages'),
      category: 'snacks-beverages',
      unit: ['100g', '200g', '500g', '1L', '330ml', '500ml', '1 piece'][Math.floor(Math.random() * 7)],
      rating: 4.0 + Math.random() * 1.0,
      deliveryTime: '8 min',
      inStock: true,
      description: `Delicious ${name.toLowerCase()}`,
      brand: ['Lays', 'Haldiram\'s', 'Britannia', 'Coca-Cola'][Math.floor(Math.random() * 4)]
    });
  });

  // Groceries & Staples (90 items) - Updated realistic prices
  const groceryProducts = [
    'Basmati Rice', 'Jasmine Rice', 'Brown Rice', 'Wild Rice', 'Quinoa', 'Wheat Flour', 'All Purpose Flour',
    'Whole Wheat Flour', 'Rice Flour', 'Corn Flour', 'Besan Flour', 'Rolled Oats', 'Steel Cut Oats',
    'Barley', 'Millet', 'Bulgur Wheat', 'Couscous', 'Penne Pasta', 'Spaghetti Pasta', 'Fusilli Pasta',
    'Egg Noodles', 'Rice Noodles', 'Red Lentils', 'Green Lentils', 'Yellow Lentils', 'Black Beans',
    'Kidney Beans', 'Chickpeas', 'Dried Green Peas', 'Black Eyed Peas', 'White Sugar', 'Brown Sugar',
    'Jaggery', 'Honey', 'Maple Syrup', 'Corn Syrup', 'Vanilla Extract', 'Baking Powder', 'Baking Soda',
    'Yeast', 'Gelatin', 'Cornstarch', 'Tapioca Starch', 'Coconut Flakes', 'Sesame Seeds', 'Pumpkin Seeds',
    'Sunflower Seeds', 'Chia Seeds', 'Flax Seeds', 'Poppy Seeds', 'Mustard Seeds', 'Cumin Seeds',
    'Coriander Seeds', 'Fennel Seeds', 'Cardamom', 'Cinnamon Sticks', 'Bay Leaves', 'Cloves',
    'Nutmeg', 'Star Anise', 'Black Peppercorns', 'White Peppercorns', 'Dried Red Chilies',
    'Paprika', 'Dried Oregano', 'Dried Basil', 'Dried Thyme', 'Dried Rosemary', 'Dried Sage',
    'Dried Mint', 'Dried Parsley', 'Dried Dill', 'Tarragon', 'Marjoram', 'Vegetable Stock',
    'Chicken Stock', 'Beef Stock', 'Tomato Puree', 'Tomato Paste', 'Canned Coconut Milk',
    'Evaporated Milk', 'Condensed Milk', 'Cream of Tartar', 'Food Coloring', 'Sprinkles',
    'Chocolate Chips', 'Cocoa Powder', 'Powdered Sugar', 'Cake Mix', 'Frosting', 'Pie Filling',
    'Strawberry Jam', 'Mixed Fruit Jam', 'Peanut Butter', 'Almond Butter', 'Chocolate Spread'
  ];

  groceryProducts.forEach((name, index) => {
    products.push({
      id: (idCounter++).toString(),
      name,
      price: Math.floor(Math.random() * 500) + 50, // ₹50-550
      image: groceriesImg,
      category: 'groceries',
      unit: ['500g', '1 kg', '2 kg', '250g', '100g'][Math.floor(Math.random() * 5)],
      rating: 4.2 + Math.random() * 0.8,
      deliveryTime: '10 min',
      inStock: true,
      description: `Premium quality ${name.toLowerCase()}`,
      brand: ['Tata', 'Ashirvaad', 'Fortune', 'Saffola'][Math.floor(Math.random() * 4)]
    });
  });

  return products;
};

export const expandedProducts = generateProducts();