import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useCart } from '@/contexts/CartContext';
import { CustomerDetailsForm, CustomerDetails } from '@/components/CustomerDetailsForm';
import { BillPrint } from '@/components/BillPrint';

export default function BillGeneration() {
  const navigate = useNavigate();
  const { items } = useCart();
  const [customerDetails, setCustomerDetails] = useState<CustomerDetails | null>(null);
  const [showBill, setShowBill] = useState(false);

  // Redirect if cart is empty
  if (items.length === 0) {
    navigate('/');
    return null;
  }

  const handleCustomerSubmit = (details: CustomerDetails) => {
    setCustomerDetails(details);
    setShowBill(true);
  };

  const handleBillClose = () => {
    setShowBill(false);
    setCustomerDetails(null);
    navigate('/');
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <div className="sticky top-0 z-40 bg-background/95 backdrop-blur-sm border-b border-border">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center gap-4">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => navigate('/')}
              className="gap-2"
            >
              <ArrowLeft className="h-4 w-4" />
              Back to Shopping
            </Button>
            <div>
              <h1 className="text-xl font-bold gradient-hero bg-clip-text text-transparent">
                Generate Bill - min10
              </h1>
              <p className="text-sm text-muted-foreground">
                Complete your order and download professional bill
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-2xl mx-auto">
          {!showBill ? (
            <div>
              <div className="text-center mb-8">
                <h2 className="text-2xl font-bold mb-2">Customer Details</h2>
                <p className="text-muted-foreground">
                  Please provide your details to generate a professional bill
                </p>
              </div>
              
              <CustomerDetailsForm 
                onSubmit={handleCustomerSubmit}
                onCancel={() => navigate('/')}
              />
            </div>
          ) : (
            customerDetails && (
              <div>
                <div className="text-center mb-8">
                  <h2 className="text-2xl font-bold mb-2">Your Bill is Ready!</h2>
                  <p className="text-muted-foreground">
                    Review your bill and download or print it
                  </p>
                </div>
                
                <BillPrint 
                  customerDetails={customerDetails}
                  onClose={handleBillClose}
                />
              </div>
            )
          )}
        </div>
      </div>
    </div>
  );
}