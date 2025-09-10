import React, { useState } from 'react';
import { MapPin, Search, ShoppingCart, Clock, User } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { useCart } from '@/contexts/CartContext';
import { CartDrawer } from './CartDrawer';

export const Header: React.FC = () => {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const { itemCount } = useCart();

  return (
    <>
      <header className="sticky top-0 z-50 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Top bar */}
          <div className="flex items-center justify-between py-2 text-sm">
            <div className="flex items-center gap-2 text-muted-foreground">
              <MapPin className="h-4 w-4 text-primary" />
              <span className="font-medium">Delivery in 10 minutes</span>
              <span className="text-xs">•</span>
              <span>New Delhi, 110001</span>
            </div>
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-1 text-success">
                <Clock className="h-4 w-4" />
                <span className="font-medium">10 min</span>
              </div>
              <Button variant="ghost" size="sm" className="gap-2">
                <User className="h-4 w-4" />
                <span>Login</span>
              </Button>
            </div>
          </div>

          {/* Main header */}
          <div className="flex items-center justify-between py-4">
            {/* Logo */}
            <div className="flex items-center">
              <h1 className="gradient-hero bg-clip-text text-transparent text-2xl font-bold">
                QuickMart
              </h1>
            </div>

            {/* Search */}
            <div className="flex-1 max-w-2xl mx-8">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <Input
                  placeholder="Search for products..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-10 bg-muted/50 border-0 focus-visible:ring-2 focus-visible:ring-primary"
                />
              </div>
            </div>

            {/* Cart */}
            <Button
              onClick={() => setIsCartOpen(true)}
              variant="outline"
              size="lg"
              className="relative gap-2 bg-primary text-primary-foreground hover:bg-primary-hover border-primary"
            >
              <ShoppingCart className="h-5 w-5" />
              <span className="font-medium">Cart</span>
              {itemCount > 0 && (
                <Badge className="absolute -top-2 -right-2 bg-secondary text-secondary-foreground min-w-[20px] h-5 text-xs">
                  {itemCount}
                </Badge>
              )}
            </Button>
          </div>
        </div>
      </header>

      <CartDrawer isOpen={isCartOpen} onClose={() => setIsCartOpen(false)} />
    </>
  );
};