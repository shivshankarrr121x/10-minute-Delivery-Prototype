import React, { useState } from 'react';
import { Truck, Clock, Star, Zap } from 'lucide-react';
import { Header } from '@/components/Header';
import { CategoryNav } from '@/components/CategoryNav';
import { ProductCard } from '@/components/ProductCard';
import { ProductSearch } from '@/components/ProductSearch';
import { expandedProducts as products } from '@/data/expandedProducts';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';

const Index = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [filteredProducts, setFilteredProducts] = useState(products);

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="gradient-hero py-16 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
              Groceries delivered in
              <span className="block text-yellow-300">10 minutes</span>
            </h1>
            <p className="text-xl sm:text-2xl mb-8 text-white/90 max-w-3xl mx-auto">
              Get fresh groceries & daily essentials delivered to your doorstep in minutes
            </p>
            
            <div className="flex flex-wrap justify-center gap-6 mb-8">
              <div className="flex items-center gap-2">
                <Zap className="h-5 w-5 text-yellow-300" />
                <span className="font-medium">10 min delivery</span>
              </div>
              <div className="flex items-center gap-2">
                <Truck className="h-5 w-5 text-yellow-300" />
                <span className="font-medium">Free delivery</span>
              </div>
              <div className="flex items-center gap-2">
                <Star className="h-5 w-5 text-yellow-300" />
                <span className="font-medium">Fresh guarantee</span>
              </div>
            </div>
            
            <Button 
              size="lg" 
              className="bg-white text-primary hover:bg-white/90 font-semibold px-8 py-3 text-lg"
            >
              Start Shopping Now
            </Button>
          </div>
        </div>
      </section>

      {/* Category Navigation */}
      <CategoryNav 
        selectedCategory={selectedCategory} 
        onCategoryChange={setSelectedCategory} 
      />

      {/* Delivery Info Banner */}
      <section className="bg-success/10 border-y border-success/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-center gap-6 text-sm">
            <div className="flex items-center gap-2">
              <Clock className="h-4 w-4 text-success" />
              <span className="font-medium">Delivery in 8-15 minutes</span>
            </div>
            <div className="hidden sm:block w-px h-4 bg-border"></div>
            <div className="flex items-center gap-2">
              <Truck className="h-4 w-4 text-success" />
              <span className="font-medium">Free delivery on orders above ₹199</span>
            </div>
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-bold">
              {selectedCategory === 'all' ? 'All Products' : 
               selectedCategory.charAt(0).toUpperCase() + selectedCategory.slice(1)}
            </h2>
            <Badge variant="secondary" className="text-sm">
              {filteredProducts.length} items
            </Badge>
          </div>

          {/* Advanced Search & Filters */}
          <ProductSearch 
            products={products}
            onFilteredProducts={setFilteredProducts}
            selectedCategory={selectedCategory}
          />
          
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 lg:gap-6">
            {filteredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
          
          {filteredProducts.length === 0 && (
            <div className="text-center py-16">
              <div className="text-6xl mb-4">🛒</div>
              <h3 className="text-lg font-medium mb-2">No products found</h3>
              <p className="text-muted-foreground">Try selecting a different category</p>
            </div>
          )}
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-muted/30 border-t border-border py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h3 className="gradient-hero bg-clip-text text-transparent text-xl font-bold mb-2">
              min10
            </h3>
            <p className="text-muted-foreground text-sm">
              Fresh groceries delivered in 10 minutes
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
