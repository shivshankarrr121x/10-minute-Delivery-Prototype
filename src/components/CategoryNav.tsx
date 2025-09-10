import React from 'react';
import { Apple, Milk, Cookie, Carrot, Package, Fish } from 'lucide-react';
import { Button } from '@/components/ui/button';

const categories = [
  { id: 'fruits', name: 'Fruits & Vegetables', icon: Apple, color: 'text-green-600' },
  { id: 'dairy', name: 'Dairy & Eggs', icon: Milk, color: 'text-blue-600' },
  { id: 'bakery', name: 'Bakery', icon: Cookie, color: 'text-orange-600' },
  { id: 'vegetables', name: 'Fresh Vegetables', icon: Carrot, color: 'text-green-700' },
  { id: 'snacks', name: 'Snacks & Beverages', icon: Package, color: 'text-purple-600' },
  { id: 'meat', name: 'Meat & Fish', icon: Fish, color: 'text-red-600' },
];

interface CategoryNavProps {
  selectedCategory: string;
  onCategoryChange: (category: string) => void;
}

export const CategoryNav: React.FC<CategoryNavProps> = ({
  selectedCategory,
  onCategoryChange,
}) => {
  return (
    <div className="bg-background border-b border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="py-4">
          <div className="flex gap-4 overflow-x-auto scrollbar-hide">
            <Button
              variant={selectedCategory === 'all' ? 'default' : 'outline'}
              onClick={() => onCategoryChange('all')}
              className="flex-shrink-0 gap-2"
            >
              All Categories
            </Button>
            {categories.map((category) => {
              const Icon = category.icon;
              return (
                <Button
                  key={category.id}
                  variant={selectedCategory === category.id ? 'default' : 'outline'}
                  onClick={() => onCategoryChange(category.id)}
                  className="flex-shrink-0 gap-2"
                >
                  <Icon className={`h-4 w-4 ${category.color}`} />
                  {category.name}
                </Button>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};