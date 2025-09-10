import React from 'react';
import { Plus, Minus } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { useCart, CartItem } from '@/contexts/CartContext';
import { toast } from 'sonner';

interface Product {
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

interface ProductCardProps {
  product: Product;
}

export const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const { items, addItem, updateQuantity } = useCart();
  const cartItem = items.find(item => item.id === product.id);

  const handleAddToCart = () => {
    addItem({
      id: product.id,
      name: product.name,
      price: product.price,
      image: product.image,
      category: product.category,
      unit: product.unit,
    });
    toast.success(`${product.name} added to cart!`);
  };

  const handleUpdateQuantity = (newQuantity: number) => {
    updateQuantity(product.id, newQuantity);
  };

  return (
    <div className="group bg-card rounded-xl border border-border hover:shadow-lg transition-all duration-300 overflow-hidden">
      {/* Image */}
      <div className="relative aspect-square overflow-hidden bg-muted/30">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
        />
        {product.discount && (
          <Badge className="absolute top-2 left-2 bg-secondary text-secondary-foreground">
            {product.discount}% OFF
          </Badge>
        )}
        {product.deliveryTime && (
          <Badge className="absolute top-2 right-2 bg-success text-success-foreground text-xs">
            {product.deliveryTime}
          </Badge>
        )}
      </div>

      {/* Content */}
      <div className="p-4">
        <div className="space-y-2">
          <h3 className="font-semibold text-sm leading-tight line-clamp-2">
            {product.name}
          </h3>
          <p className="text-xs text-muted-foreground">{product.unit}</p>
          
          {/* Price */}
          <div className="flex items-center gap-2">
            <span className="text-lg font-bold text-primary">
              ₹{product.price}
            </span>
            {product.originalPrice && (
              <span className="text-sm text-muted-foreground line-through">
                ₹{product.originalPrice}
              </span>
            )}
          </div>

          {/* Rating */}
          {product.rating && (
            <div className="flex items-center gap-1">
              <div className="flex items-center gap-1">
                <span className="text-xs">⭐</span>
                <span className="text-xs font-medium">{product.rating}</span>
              </div>
            </div>
          )}
        </div>

        {/* Add to Cart */}
        <div className="mt-4">
          {!cartItem ? (
            <Button
              onClick={handleAddToCart}
              className="w-full gradient-primary text-white font-medium gap-2 hover:shadow-primary"
            >
              <Plus className="h-4 w-4" />
              Add to Cart
            </Button>
          ) : (
            <div className="flex items-center justify-between bg-primary/10 rounded-lg p-2">
              <Button
                variant="ghost"
                size="sm"
                onClick={() => handleUpdateQuantity(cartItem.quantity - 1)}
                className="h-8 w-8 p-0 hover:bg-primary/20"
              >
                <Minus className="h-4 w-4" />
              </Button>
              <span className="font-semibold text-primary px-3">
                {cartItem.quantity}
              </span>
              <Button
                variant="ghost"
                size="sm"
                onClick={() => handleUpdateQuantity(cartItem.quantity + 1)}
                className="h-8 w-8 p-0 hover:bg-primary/20"
              >
                <Plus className="h-4 w-4" />
              </Button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};