import React from 'react';
import { Printer, Download, Share2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useCart } from '@/contexts/CartContext';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';

interface BillPrintProps {
  onClose: () => void;
}

export const BillPrint: React.FC<BillPrintProps> = ({ onClose }) => {
  const { items, total } = useCart();
  
  const currentDate = new Date();
  const billNumber = `QM${Date.now().toString().slice(-8)}`;
  const gst = total * 0.18; // 18% GST
  const deliveryFee = total > 199 ? 0 : 25;
  const grandTotal = total + gst + deliveryFee;

  const handlePrint = () => {
    window.print();
  };

  const handleDownload = () => {
    // Create a downloadable bill
    const billContent = generateBillContent();
    const blob = new Blob([billContent], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `QuickMart_Bill_${billNumber}.txt`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  const handleShare = async () => {
    const billContent = generateBillContent();
    
    if (navigator.share) {
      try {
        await navigator.share({
          title: 'QuickMart Bill',
          text: billContent,
        });
      } catch (error) {
        console.log('Error sharing:', error);
      }
    } else {
      // Fallback: copy to clipboard
      navigator.clipboard.writeText(billContent);
      alert('Bill copied to clipboard!');
    }
  };

  const generateBillContent = () => {
    return `
QuickMart - Grocery Delivery
============================
Bill No: ${billNumber}
Date: ${currentDate.toLocaleDateString()}
Time: ${currentDate.toLocaleTimeString()}

Customer Details:
Name: Guest User
Address: New Delhi, 110001
Phone: +91 XXXXXXXXXX

Items Purchased:
${items.map(item => 
  `${item.name}\n  Qty: ${item.quantity} x ₹${item.price} = ₹${(item.quantity * item.price).toFixed(2)}`
).join('\n')}

============================
Subtotal: ₹${total.toFixed(2)}
GST (18%): ₹${gst.toFixed(2)}
Delivery: ₹${deliveryFee.toFixed(2)}
============================
GRAND TOTAL: ₹${grandTotal.toFixed(2)}

Thank you for shopping with QuickMart!
Delivered in 10 minutes ⚡

For support: support@quickmart.com
Phone: 1800-QUICKMART
    `.trim();
  };

  return (
    <div className="print:block">
      {/* Print-friendly version */}
      <div className="print:block hidden">
        <div className="max-w-md mx-auto p-6 bg-white text-black">
          <div className="text-center mb-6">
            <h1 className="text-2xl font-bold">QuickMart</h1>
            <p className="text-sm text-gray-600">Grocery Delivery in 10 minutes</p>
            <div className="mt-2 text-xs">
              <p>Bill No: {billNumber}</p>
              <p>{currentDate.toLocaleDateString()} {currentDate.toLocaleTimeString()}</p>
            </div>
          </div>

          <div className="mb-4">
            <h3 className="font-semibold mb-2">Customer Details:</h3>
            <div className="text-sm text-gray-600">
              <p>Name: Guest User</p>
              <p>Address: New Delhi, 110001</p>
              <p>Phone: +91 XXXXXXXXXX</p>
            </div>
          </div>

          <div className="mb-4">
            <h3 className="font-semibold mb-2">Items:</h3>
            {items.map((item) => (
              <div key={item.id} className="flex justify-between text-sm mb-1">
                <div>
                  <p className="font-medium">{item.name}</p>
                  <p className="text-gray-600">{item.quantity} x ₹{item.price}</p>
                </div>
                <p className="font-medium">₹{(item.quantity * item.price).toFixed(2)}</p>
              </div>
            ))}
          </div>

          <div className="border-t border-gray-300 pt-2">
            <div className="flex justify-between text-sm mb-1">
              <span>Subtotal:</span>
              <span>₹{total.toFixed(2)}</span>
            </div>
            <div className="flex justify-between text-sm mb-1">
              <span>GST (18%):</span>
              <span>₹{gst.toFixed(2)}</span>
            </div>
            <div className="flex justify-between text-sm mb-2">
              <span>Delivery:</span>
              <span>₹{deliveryFee.toFixed(2)}</span>
            </div>
            <div className="flex justify-between font-bold text-lg border-t border-gray-300 pt-2">
              <span>Total:</span>
              <span>₹{grandTotal.toFixed(2)}</span>
            </div>
          </div>

          <div className="text-center mt-6 text-xs text-gray-600">
            <p>Thank you for shopping with QuickMart!</p>
            <p>Delivered in 10 minutes ⚡</p>
            <p className="mt-2">support@quickmart.com | 1800-QUICKMART</p>
          </div>
        </div>
      </div>

      {/* Screen version */}
      <div className="print:hidden">
        <Card className="max-w-md mx-auto">
          <CardHeader className="text-center">
            <CardTitle className="gradient-hero bg-clip-text text-transparent">QuickMart</CardTitle>
            <p className="text-sm text-muted-foreground">Grocery Delivery in 10 minutes</p>
            <div className="text-xs text-muted-foreground mt-2">
              <p>Bill No: {billNumber}</p>
              <p>{currentDate.toLocaleDateString()} {currentDate.toLocaleTimeString()}</p>
            </div>
          </CardHeader>

          <CardContent className="space-y-4">
            <div>
              <h3 className="font-semibold mb-2">Customer Details:</h3>
              <div className="text-sm text-muted-foreground">
                <p>Name: Guest User</p>
                <p>Address: New Delhi, 110001</p>
                <p>Phone: +91 XXXXXXXXXX</p>
              </div>
            </div>

            <Separator />

            <div>
              <h3 className="font-semibold mb-2">Items Purchased:</h3>
              <div className="space-y-2">
                {items.map((item) => (
                  <div key={item.id} className="flex justify-between items-center">
                    <div className="flex-1">
                      <p className="font-medium text-sm">{item.name}</p>
                      <p className="text-xs text-muted-foreground">
                        {item.quantity} x ₹{item.price} ({item.unit})
                      </p>
                    </div>
                    <p className="font-medium">₹{(item.quantity * item.price).toFixed(2)}</p>
                  </div>
                ))}
              </div>
            </div>

            <Separator />

            <div className="space-y-2">
              <div className="flex justify-between text-sm">
                <span>Subtotal:</span>
                <span>₹{total.toFixed(2)}</span>
              </div>
              <div className="flex justify-between text-sm">
                <span>GST (18%):</span>
                <span>₹{gst.toFixed(2)}</span>
              </div>
              <div className="flex justify-between text-sm">
                <span>Delivery Fee:</span>
                <span className={deliveryFee === 0 ? 'text-success line-through' : ''}>
                  ₹{deliveryFee.toFixed(2)}
                </span>
              </div>
              {deliveryFee === 0 && (
                <p className="text-xs text-success">Free delivery on orders above ₹199!</p>
              )}
              
              <Separator />
              
              <div className="flex justify-between font-bold text-lg">
                <span>Grand Total:</span>
                <span className="text-primary">₹{grandTotal.toFixed(2)}</span>
              </div>
            </div>

            <div className="flex gap-2 mt-6">
              <Button onClick={handlePrint} className="flex-1 gap-2">
                <Printer className="h-4 w-4" />
                Print
              </Button>
              <Button onClick={handleDownload} variant="outline" className="flex-1 gap-2">
                <Download className="h-4 w-4" />
                Download
              </Button>
              <Button onClick={handleShare} variant="outline" className="flex-1 gap-2">
                <Share2 className="h-4 w-4" />
                Share
              </Button>
            </div>

            <div className="text-center text-xs text-muted-foreground mt-4">
              <p>Thank you for shopping with QuickMart!</p>
              <p>Delivered in 10 minutes ⚡</p>
              <p className="mt-1">support@quickmart.com | 1800-QUICKMART</p>
            </div>

            <Button onClick={onClose} variant="ghost" className="w-full mt-4">
              Close
            </Button>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};