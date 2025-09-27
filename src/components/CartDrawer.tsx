import React, { useState } from 'react';
import { X, Plus, Minus, ShoppingBag, Receipt } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useCart } from '@/contexts/CartContext';
import { BillPrint } from './BillPrint';

interface CartDrawerProps {
  isOpen: boolean;
  onClose: () => void;
}

export const CartDrawer: React.FC<CartDrawerProps> = ({ isOpen, onClose }) => {
  const { items, total, updateQuantity, removeItem, clearCart } = useCart();
  const [showBill, setShowBill] = useState(false);

  if (!isOpen) return null;

  return (
    <>
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/50 z-50 transition-opacity"
        onClick={onClose}
      />
      
      {/* Drawer */}
      <div className="fixed right-0 top-0 h-full w-full max-w-md bg-background z-50 shadow-xl transform transition-transform">
        <div className="flex flex-col h-full">
          {/* Header */}
          <div className="flex items-center justify-between p-4 border-b border-border">
            <h2 className="text-lg font-semibold">Your Cart</h2>
            <Button variant="ghost" size="sm" onClick={onClose}>
              <X className="h-4 w-4" />
            </Button>
          </div>

          {/* Content */}
          <div className="flex-1 overflow-y-auto">
            {items.length === 0 ? (
              <div className="flex flex-col items-center justify-center h-full text-center p-8">
                <ShoppingBag className="h-16 w-16 text-muted-foreground mb-4" />
                <h3 className="text-lg font-medium mb-2">Your cart is empty</h3>
                <p className="text-muted-foreground mb-4">Add some items to get started</p>
                <Button onClick={onClose} variant="outline">
                  Continue Shopping
                </Button>
              </div>
            ) : (
              <div className="p-4 space-y-4">
                {items.map((item) => (
                  <div key={item.id} className="flex items-center gap-3 p-3 bg-card rounded-lg border border-border">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-12 h-12 object-cover rounded-md"
                    />
                    <div className="flex-1">
                      <h4 className="font-medium text-sm">{item.name}</h4>
                      <p className="text-xs text-muted-foreground">{item.unit}</p>
                      <p className="text-sm font-semibold text-primary">₹{item.price}</p>
                    </div>
                    <div className="flex items-center gap-2">
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() => updateQuantity(item.id, item.quantity - 1)}
                        className="h-8 w-8 p-0"
                      >
                        <Minus className="h-3 w-3" />
                      </Button>
                      <span className="w-8 text-center text-sm font-medium">
                        {item.quantity}
                      </span>
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() => updateQuantity(item.id, item.quantity + 1)}
                        className="h-8 w-8 p-0"
                      >
                        <Plus className="h-3 w-3" />
                      </Button>
                    </div>
                  </div>
                ))}
                
                <Button
                  variant="ghost"
                  onClick={clearCart}
                  className="w-full text-destructive hover:text-destructive hover:bg-destructive-light"
                >
                  Clear Cart
                </Button>
              </div>
            )}
          </div>

          {/* Footer */}
          {items.length > 0 && (
            <div className="p-4 border-t border-border bg-muted/30">
              <div className="flex justify-between items-center mb-4">
                <span className="text-lg font-semibold">Total:</span>
                <span className="text-xl font-bold text-primary">₹{total.toFixed(2)}</span>
              </div>
              
              <div className="space-y-2">
                <Button 
                  onClick={() => setShowBill(true)}
                  variant="outline" 
                  className="w-full gap-2 mb-2"
                >
                  <Receipt className="h-4 w-4" />
                  View Bill & Print
                </Button>
                
                <Button className="w-full gradient-primary text-white font-medium">
                  Proceed to Checkout
                </Button>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Bill Print Modal */}
      {showBill && (
        <div className="fixed inset-0 bg-black/80 z-60 flex items-center justify-center p-4">
          <div className="w-full max-w-lg">
            <BillPrint onClose={() => setShowBill(false)} />
          </div>
        </div>
      )}
    </>
  );
};