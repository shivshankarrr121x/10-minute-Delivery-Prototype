import React, { useState, useMemo } from 'react';
import { Search, Filter, X } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Product } from '@/data/expandedProducts';

interface ProductSearchProps {
  products: Product[];
  onFilteredProducts: (products: Product[]) => void;
  selectedCategory: string;
}

export const ProductSearch: React.FC<ProductSearchProps> = ({ 
  products, 
  onFilteredProducts, 
  selectedCategory 
}) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [priceRange, setPriceRange] = useState<[number, number]>([0, 1000]);
  const [sortBy, setSortBy] = useState<'name' | 'price' | 'rating'>('name');
  const [sortOrder, setSortOrder] = useState<'asc' | 'desc'>('asc');
  const [showFilters, setShowFilters] = useState(false);

  const filteredAndSortedProducts = useMemo(() => {
    let filtered = products;

    // Filter by category
    if (selectedCategory !== 'all') {
      filtered = filtered.filter(product => product.category === selectedCategory);
    }

    // Filter by search query
    if (searchQuery.trim()) {
      const query = searchQuery.toLowerCase();
      filtered = filtered.filter(product => 
        product.name.toLowerCase().includes(query) ||
        product.brand?.toLowerCase().includes(query) ||
        product.description?.toLowerCase().includes(query)
      );
    }

    // Filter by price range
    filtered = filtered.filter(product => 
      product.price >= priceRange[0] && product.price <= priceRange[1]
    );

    // Sort products
    filtered.sort((a, b) => {
      let aValue: any, bValue: any;
      
      switch (sortBy) {
        case 'price':
          aValue = a.price;
          bValue = b.price;
          break;
        case 'rating':
          aValue = a.rating || 0;
          bValue = b.rating || 0;
          break;
        default:
          aValue = a.name.toLowerCase();
          bValue = b.name.toLowerCase();
      }

      if (sortOrder === 'asc') {
        return aValue > bValue ? 1 : -1;
      } else {
        return aValue < bValue ? 1 : -1;
      }
    });

    return filtered;
  }, [products, selectedCategory, searchQuery, priceRange, sortBy, sortOrder]);

  React.useEffect(() => {
    onFilteredProducts(filteredAndSortedProducts);
  }, [filteredAndSortedProducts, onFilteredProducts]);

  const clearFilters = () => {
    setSearchQuery('');
    setPriceRange([0, 1000]);
    setSortBy('name');
    setSortOrder('asc');
  };

  return (
    <div className="space-y-4">
      {/* Search Bar */}
      <div className="relative">
        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
        <Input
          placeholder="Search products, brands..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="pl-10 bg-muted/50 border-0 focus-visible:ring-2 focus-visible:ring-primary"
        />
      </div>

      {/* Filter Toggle */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Button 
            variant="outline" 
            size="sm" 
            onClick={() => setShowFilters(!showFilters)}
            className="gap-2"
          >
            <Filter className="h-4 w-4" />
            Filters
          </Button>
          
          {(searchQuery || priceRange[0] > 0 || priceRange[1] < 1000 || sortBy !== 'name') && (
            <Button variant="ghost" size="sm" onClick={clearFilters} className="gap-2">
              <X className="h-4 w-4" />
              Clear
            </Button>
          )}
        </div>
        
        <Badge variant="secondary">
          {filteredAndSortedProducts.length} products
        </Badge>
      </div>

      {/* Advanced Filters */}
      {showFilters && (
        <div className="bg-muted/30 rounded-lg p-4 space-y-4">
          {/* Price Range */}
          <div>
            <label className="text-sm font-medium mb-2 block">Price Range</label>
            <div className="flex items-center gap-2">
              <Input
                type="number"
                placeholder="Min"
                value={priceRange[0]}
                onChange={(e) => setPriceRange([Number(e.target.value), priceRange[1]])}
                className="w-20"
              />
              <span>-</span>
              <Input
                type="number"
                placeholder="Max"
                value={priceRange[1]}
                onChange={(e) => setPriceRange([priceRange[0], Number(e.target.value)])}
                className="w-20"
              />
            </div>
          </div>

          {/* Sort Options */}
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="text-sm font-medium mb-2 block">Sort By</label>
              <select 
                value={sortBy} 
                onChange={(e) => setSortBy(e.target.value as any)}
                className="w-full p-2 rounded-md border bg-background"
              >
                <option value="name">Name</option>
                <option value="price">Price</option>
                <option value="rating">Rating</option>
              </select>
            </div>
            
            <div>
              <label className="text-sm font-medium mb-2 block">Order</label>
              <select 
                value={sortOrder} 
                onChange={(e) => setSortOrder(e.target.value as any)}
                className="w-full p-2 rounded-md border bg-background"
              >
                <option value="asc">Ascending</option>
                <option value="desc">Descending</option>
              </select>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};