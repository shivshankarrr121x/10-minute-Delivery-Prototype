import React, { useState } from 'react';
import { Printer, Download, Share2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useCart } from '@/contexts/CartContext';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import { CustomerDetails } from './CustomerDetailsForm';
import jsPDF from 'jspdf';

interface BillPrintProps {
  onClose: () => void;
  customerDetails: CustomerDetails;
}

export const BillPrint: React.FC<BillPrintProps> = ({ onClose, customerDetails }) => {
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
    const pdf = new jsPDF();
    const pageWidth = pdf.internal.pageSize.width;
    let yPos = 20;

    // Header
    pdf.setFontSize(20);
    pdf.setFont('helvetica', 'bold');
    pdf.text('min10', pageWidth / 2, yPos, { align: 'center' });
    
    yPos += 8;
    pdf.setFontSize(10);
    pdf.setFont('helvetica', 'normal');
    pdf.text('📦 Express Delivery in 10 Minutes ⚡', pageWidth / 2, yPos, { align: 'center' });
    
    yPos += 15;
    pdf.line(20, yPos, pageWidth - 20, yPos);
    
    yPos += 10;
    pdf.setFontSize(12);
    pdf.setFont('helvetica', 'bold');
    pdf.text(`Invoice No: ${billNumber}`, 20, yPos);
    pdf.text(`Date: ${currentDate.toLocaleDateString('en-IN')}`, pageWidth - 80, yPos);
    
    yPos += 6;
    pdf.text(`Time: ${currentDate.toLocaleTimeString('en-IN')}`, pageWidth - 80, yPos);
    
    yPos += 15;
    
    // Customer Details
    pdf.setFont('helvetica', 'bold');
    pdf.text('CUSTOMER DETAILS:', 20, yPos);
    yPos += 8;
    
    pdf.setFont('helvetica', 'normal');
    pdf.setFontSize(10);
    pdf.text(`Name: ${customerDetails.name}`, 20, yPos);
    yPos += 5;
    pdf.text(`Email: ${customerDetails.email}`, 20, yPos);
    yPos += 5;
    pdf.text(`Mobile: +91-${customerDetails.mobile}`, 20, yPos);
    yPos += 5;
    pdf.text(`Address: ${customerDetails.address}`, 20, yPos);
    yPos += 5;
    
    const paymentModeLabels = {
      cod: 'Cash on Delivery',
      upi: 'UPI Payment',
      card: 'Credit/Debit Card',
      wallet: 'Digital Wallet'
    };
    pdf.text(`Payment Mode: ${paymentModeLabels[customerDetails.paymentMode]}`, 20, yPos);
    
    yPos += 15;
    pdf.line(20, yPos, pageWidth - 20, yPos);
    yPos += 10;
    
    // Items
    pdf.setFontSize(12);
    pdf.setFont('helvetica', 'bold');
    pdf.text('ITEMS PURCHASED:', 20, yPos);
    yPos += 10;
    
    pdf.setFontSize(9);
    pdf.setFont('helvetica', 'normal');
    
    items.forEach((item, index) => {
      if (yPos > 250) {
        pdf.addPage();
        yPos = 20;
      }
      
      pdf.setFont('helvetica', 'bold');
      pdf.text(`${index + 1}. ${item.name}`, 20, yPos);
      pdf.text(`₹${(item.quantity * item.price).toFixed(2)}`, pageWidth - 40, yPos);
      
      yPos += 5;
      pdf.setFont('helvetica', 'normal');
      pdf.text(`   Brand: ${item.brand || 'Generic'} | Unit: ${item.unit}`, 20, yPos);
      yPos += 4;
      pdf.text(`   Qty: ${item.quantity} × ₹${item.price}`, 20, yPos);
      yPos += 8;
    });
    
    yPos += 5;
    pdf.line(20, yPos, pageWidth - 20, yPos);
    yPos += 10;
    
    // Bill Summary
    pdf.setFontSize(11);
    pdf.setFont('helvetica', 'bold');
    pdf.text('BILL SUMMARY:', 20, yPos);
    yPos += 8;
    
    pdf.setFont('helvetica', 'normal');
    pdf.text(`Subtotal:`, 20, yPos);
    pdf.text(`₹${total.toFixed(2)}`, pageWidth - 40, yPos);
    yPos += 6;
    
    pdf.text(`GST (18%):`, 20, yPos);
    pdf.text(`₹${gst.toFixed(2)}`, pageWidth - 40, yPos);
    yPos += 6;
    
    pdf.text(`Delivery Charge:`, 20, yPos);
    pdf.text(deliveryFee === 0 ? 'FREE (₹25.00)' : `₹${deliveryFee.toFixed(2)}`, pageWidth - 40, yPos);
    yPos += 6;
    
    if (deliveryFee === 0) {
      pdf.setFontSize(9);
      pdf.text('🎉 Free delivery on orders ₹199+', pageWidth / 2, yPos, { align: 'center' });
      yPos += 6;
    }
    
    pdf.line(20, yPos, pageWidth - 20, yPos);
    yPos += 8;
    
    pdf.setFontSize(14);
    pdf.setFont('helvetica', 'bold');
    pdf.text(`GRAND TOTAL:`, 20, yPos);
    pdf.text(`₹${grandTotal.toFixed(2)}`, pageWidth - 50, yPos);
    
    yPos += 15;
    pdf.line(20, yPos, pageWidth - 20, yPos);
    yPos += 10;
    
    // Footer
    pdf.setFontSize(10);
    pdf.setFont('helvetica', 'normal');
    pdf.text('💝 Thank you for choosing min10!', pageWidth / 2, yPos, { align: 'center' });
    yPos += 6;
    pdf.text('🚀 India\'s Fastest Grocery Delivery', pageWidth / 2, yPos, { align: 'center' });
    yPos += 10;
    
    pdf.setFontSize(8);
    pdf.text('📞 Customer Support: 1800-MIN10-24', pageWidth / 2, yPos, { align: 'center' });
    yPos += 4;
    pdf.text('📧 Email: support@min10.com | 🌐 Website: www.min10.com', pageWidth / 2, yPos, { align: 'center' });
    yPos += 8;
    
    pdf.text('⭐ Rate your experience & get 10% off on your next order!', pageWidth / 2, yPos, { align: 'center' });
    yPos += 8;
    
    pdf.text('GST IN: 07AABCM1234M1Z5 | FSSAI LIC: 12345678901234', pageWidth / 2, yPos, { align: 'center' });
    
    // Save the PDF
    pdf.save(`min10_Bill_${billNumber}.pdf`);
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
    const paymentModeLabels = {
      cod: 'Cash on Delivery',
      upi: 'UPI Payment',
      card: 'Credit/Debit Card',
      wallet: 'Digital Wallet'
    };

    return `
═══════════════════════════════════════
            min10 - Express Delivery
         📦 Delivered in 10 Minutes ⚡
═══════════════════════════════════════

INVOICE NO: ${billNumber}
DATE: ${currentDate.toLocaleDateString('en-IN')}
TIME: ${currentDate.toLocaleTimeString('en-IN')}

───────────────────────────────────────
CUSTOMER DETAILS:
───────────────────────────────────────
Name     : ${customerDetails.name}
Email    : ${customerDetails.email}
Mobile   : +91-${customerDetails.mobile}
Address  : ${customerDetails.address}
Payment  : ${paymentModeLabels[customerDetails.paymentMode]}

───────────────────────────────────────
ITEMS PURCHASED:
───────────────────────────────────────
${items.map((item, index) => 
  `${index + 1}. ${item.name}
   Brand: ${item.brand || 'Generic'}
   Unit: ${item.unit} | Qty: ${item.quantity}
   Price: ₹${item.price} x ${item.quantity} = ₹${(item.quantity * item.price).toFixed(2)}`
).join('\n\n')}

───────────────────────────────────────
BILL SUMMARY:
───────────────────────────────────────
Subtotal        : ₹${total.toFixed(2)}
GST (18%)       : ₹${gst.toFixed(2)}
Delivery Charge : ${deliveryFee === 0 ? 'FREE (₹25.00)' : `₹${deliveryFee.toFixed(2)}`}
${deliveryFee === 0 ? 'Discount Applied: Free delivery on orders ₹199+' : ''}
───────────────────────────────────────
GRAND TOTAL     : ₹${grandTotal.toFixed(2)}
═══════════════════════════════════════

💝 Thank you for choosing min10!
🚀 India's Fastest Grocery Delivery

📞 Customer Support: 1800-MIN10-24
📧 Email: support@min10.com
🌐 Website: www.min10.com

───────────────────────────────────────
⭐ Rate your experience & get 10% off
   on your next order!
───────────────────────────────────────

GST IN: 07AABCM1234M1Z5
FSSAI LIC: 12345678901234
    `.trim();
  };

  return (
    <div className="print:block">
      {/* Print-friendly version */}
      <div className="print:block hidden">
        <div className="max-w-md mx-auto p-6 bg-white text-black font-mono text-sm">
          <div className="text-center mb-6 border-b-2 border-black pb-4">
            <h1 className="text-2xl font-bold">min10</h1>
            <p className="text-sm">📦 Express Delivery in 10 Minutes ⚡</p>
            <div className="mt-2 text-xs">
              <p>INVOICE NO: {billNumber}</p>
              <p>{currentDate.toLocaleDateString('en-IN')} | {currentDate.toLocaleTimeString('en-IN')}</p>
            </div>
          </div>

          <div className="mb-4 border-b border-gray-400 pb-3">
            <h3 className="font-bold mb-2 text-sm">CUSTOMER DETAILS:</h3>
            <div className="text-xs space-y-1">
              <p><strong>Name:</strong> {customerDetails.name}</p>
              <p><strong>Email:</strong> {customerDetails.email}</p>
              <p><strong>Mobile:</strong> +91-{customerDetails.mobile}</p>
              <p><strong>Address:</strong> {customerDetails.address}</p>
              <p><strong>Payment:</strong> {
                customerDetails.paymentMode === 'cod' ? 'Cash on Delivery' :
                customerDetails.paymentMode === 'upi' ? 'UPI Payment' :
                customerDetails.paymentMode === 'card' ? 'Credit/Debit Card' :
                'Digital Wallet'
              }</p>
            </div>
          </div>

          <div className="mb-4 border-b border-gray-400 pb-3">
            <h3 className="font-bold mb-2 text-sm">ITEMS PURCHASED:</h3>
            {items.map((item, index) => (
              <div key={item.id} className="mb-3 text-xs">
                <div className="flex justify-between font-semibold">
                  <span>{index + 1}. {item.name}</span>
                  <span>₹{(item.quantity * item.price).toFixed(2)}</span>
                </div>
                <div className="text-gray-600 ml-3">
                  <p>Brand: {item.brand || 'Generic'}</p>
                  <p>Unit: {item.unit} | Qty: {item.quantity} | Price: ₹{item.price}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="border-t-2 border-black pt-3">
            <div className="space-y-1 text-xs">
              <div className="flex justify-between">
                <span>Subtotal:</span>
                <span>₹{total.toFixed(2)}</span>
              </div>
              <div className="flex justify-between">
                <span>GST (18%):</span>
                <span>₹{gst.toFixed(2)}</span>
              </div>
              <div className="flex justify-between">
                <span>Delivery Charge:</span>
                <span className={deliveryFee === 0 ? 'line-through' : ''}>
                  {deliveryFee === 0 ? 'FREE (₹25.00)' : `₹${deliveryFee.toFixed(2)}`}
                </span>
              </div>
              {deliveryFee === 0 && (
                <p className="text-xs text-center font-semibold">🎉 Free delivery on orders ₹199+</p>
              )}
            </div>
            <div className="flex justify-between font-bold text-lg border-t-2 border-black pt-2 mt-2">
              <span>GRAND TOTAL:</span>
              <span>₹{grandTotal.toFixed(2)}</span>
            </div>
          </div>

          <div className="text-center mt-6 text-xs border-t border-gray-400 pt-3">
            <p className="font-bold">💝 Thank you for choosing min10!</p>
            <p className="font-semibold">🚀 India's Fastest Grocery Delivery</p>
            <div className="mt-3 space-y-1">
              <p>📞 1800-MIN10-24 | 📧 support@min10.com</p>
              <p>⭐ Rate us & get 10% off next order!</p>
              <p className="mt-2 text-xs">GST IN: 07AABCM1234M1Z5 | FSSAI: 12345678901234</p>
            </div>
          </div>
        </div>
      </div>

      {/* Screen version */}
      <div className="print:hidden">
        <Card className="max-w-md mx-auto">
          <CardHeader className="text-center">
            <CardTitle className="gradient-hero bg-clip-text text-transparent">min10</CardTitle>
            <p className="text-sm text-muted-foreground">📦 Express Delivery in 10 Minutes ⚡</p>
            <div className="text-xs text-muted-foreground mt-2">
              <p>Invoice No: {billNumber}</p>
              <p>{currentDate.toLocaleDateString('en-IN')} | {currentDate.toLocaleTimeString('en-IN')}</p>
            </div>
          </CardHeader>

          <CardContent className="space-y-4">
            <div>
              <h3 className="font-semibold mb-2">Customer Details:</h3>
              <div className="text-sm text-muted-foreground space-y-1">
                <p><strong>Name:</strong> {customerDetails.name}</p>
                <p><strong>Email:</strong> {customerDetails.email}</p>
                <p><strong>Mobile:</strong> +91-{customerDetails.mobile}</p>
                <p><strong>Address:</strong> {customerDetails.address}</p>
                <p><strong>Payment Mode:</strong> {
                  customerDetails.paymentMode === 'cod' ? 'Cash on Delivery' :
                  customerDetails.paymentMode === 'upi' ? 'UPI Payment' :
                  customerDetails.paymentMode === 'card' ? 'Credit/Debit Card' :
                  'Digital Wallet'
                }</p>
              </div>
            </div>

            <Separator />

            <div>
              <h3 className="font-semibold mb-2">Items Purchased:</h3>
              <div className="space-y-3">
                {items.map((item, index) => (
                  <div key={item.id} className="border rounded-lg p-3 bg-muted/20">
                    <div className="flex justify-between items-start mb-1">
                      <div className="flex-1">
                        <p className="font-medium text-sm">{index + 1}. {item.name}</p>
                        <p className="text-xs text-muted-foreground">
                          Brand: {item.brand || 'Generic'} | Unit: {item.unit}
                        </p>
                        <p className="text-xs text-muted-foreground">
                          Qty: {item.quantity} × ₹{item.price}
                        </p>
                      </div>
                      <p className="font-semibold text-primary">₹{(item.quantity * item.price).toFixed(2)}</p>
                    </div>
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

            <div className="text-center text-xs text-muted-foreground mt-4 space-y-1">
              <p className="font-semibold">💝 Thank you for choosing min10!</p>
              <p className="font-medium">🚀 India's Fastest Grocery Delivery</p>
              <p className="mt-2">📞 1800-MIN10-24 | 📧 support@min10.com</p>
              <p>⭐ Rate your experience & get 10% off next order!</p>
              <p className="text-xs mt-2">GST IN: 07AABCM1234M1Z5 | FSSAI LIC: 12345678901234</p>
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