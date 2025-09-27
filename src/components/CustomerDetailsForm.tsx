import React, { useState } from 'react';
import { z } from 'zod';
import { User, Mail, Phone, MapPin, CreditCard, CheckCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Select } from '@/components/ui/select';
import { Textarea } from '@/components/ui/textarea';

// Validation schema
const customerSchema = z.object({
  name: z.string()
    .trim()
    .min(2, { message: "Name must be at least 2 characters" })
    .max(100, { message: "Name must be less than 100 characters" })
    .regex(/^[a-zA-Z\s]+$/, { message: "Name can only contain letters and spaces" }),
  email: z.string()
    .trim()
    .email({ message: "Invalid email address" })
    .max(255, { message: "Email must be less than 255 characters" }),
  mobile: z.string()
    .trim()
    .regex(/^[6-9]\d{9}$/, { message: "Enter valid 10-digit mobile number" }),
  address: z.string()
    .trim()
    .min(10, { message: "Address must be at least 10 characters" })
    .max(500, { message: "Address must be less than 500 characters" }),
  paymentMode: z.string()
    .refine((val) => ['cod', 'upi', 'card', 'wallet'].includes(val), {
      message: "Please select a valid payment mode"
    })
});

export type CustomerDetails = z.infer<typeof customerSchema>;

interface CustomerDetailsFormProps {
  onSubmit: (details: CustomerDetails) => void;
  onCancel: () => void;
}

export const CustomerDetailsForm: React.FC<CustomerDetailsFormProps> = ({ 
  onSubmit, 
  onCancel 
}) => {
  const [formData, setFormData] = useState<Partial<CustomerDetails>>({
    name: '',
    email: '',
    mobile: '',
    address: '',
    paymentMode: undefined
  });
  const [errors, setErrors] = useState<Partial<Record<keyof CustomerDetails, string>>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (field: keyof CustomerDetails, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
    // Clear error when user starts typing
    if (errors[field]) {
      setErrors(prev => ({ ...prev, [field]: undefined }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setErrors({});

    try {
      // Validate form data
      const validatedData = customerSchema.parse(formData);
      onSubmit(validatedData);
    } catch (error) {
      if (error instanceof z.ZodError) {
        const fieldErrors: Partial<Record<keyof CustomerDetails, string>> = {};
        error.issues.forEach((issue) => {
          if (issue.path[0]) {
            fieldErrors[issue.path[0] as keyof CustomerDetails] = issue.message;
          }
        });
        setErrors(fieldErrors);
      }
    } finally {
      setIsSubmitting(false);
    }
  };

  const paymentModes = [
    { value: 'cod', label: 'Cash on Delivery', icon: '💵' },
    { value: 'upi', label: 'UPI Payment', icon: '📱' },
    { value: 'card', label: 'Credit/Debit Card', icon: '💳' },
    { value: 'wallet', label: 'Digital Wallet', icon: '👛' }
  ];

  return (
    <Card className="max-w-md mx-auto">
      <CardHeader className="text-center">
        <CardTitle className="gradient-hero bg-clip-text text-transparent">
          Customer Details
        </CardTitle>
        <p className="text-sm text-muted-foreground">
          Please fill in your details for delivery
        </p>
      </CardHeader>

      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Name */}
          <div className="space-y-2">
            <Label htmlFor="name" className="flex items-center gap-2">
              <User className="h-4 w-4" />
              Full Name *
            </Label>
            <Input
              id="name"
              type="text"
              placeholder="Enter your full name"
              value={formData.name || ''}
              onChange={(e) => handleInputChange('name', e.target.value)}
              className={errors.name ? 'border-destructive' : ''}
              maxLength={100}
            />
            {errors.name && (
              <p className="text-sm text-destructive">{errors.name}</p>
            )}
          </div>

          {/* Email */}
          <div className="space-y-2">
            <Label htmlFor="email" className="flex items-center gap-2">
              <Mail className="h-4 w-4" />
              Email Address *
            </Label>
            <Input
              id="email"
              type="email"
              placeholder="Enter your email"
              value={formData.email || ''}
              onChange={(e) => handleInputChange('email', e.target.value)}
              className={errors.email ? 'border-destructive' : ''}
              maxLength={255}
            />
            {errors.email && (
              <p className="text-sm text-destructive">{errors.email}</p>
            )}
          </div>

          {/* Mobile */}
          <div className="space-y-2">
            <Label htmlFor="mobile" className="flex items-center gap-2">
              <Phone className="h-4 w-4" />
              Mobile Number *
            </Label>
            <Input
              id="mobile"
              type="tel"
              placeholder="Enter 10-digit mobile number"
              value={formData.mobile || ''}
              onChange={(e) => handleInputChange('mobile', e.target.value.replace(/\D/g, '').slice(0, 10))}
              className={errors.mobile ? 'border-destructive' : ''}
              maxLength={10}
            />
            {errors.mobile && (
              <p className="text-sm text-destructive">{errors.mobile}</p>
            )}
          </div>

          {/* Address */}
          <div className="space-y-2">
            <Label htmlFor="address" className="flex items-center gap-2">
              <MapPin className="h-4 w-4" />
              Delivery Address *
            </Label>
            <Textarea
              id="address"
              placeholder="Enter complete delivery address"
              value={formData.address || ''}
              onChange={(e) => handleInputChange('address', e.target.value)}
              className={errors.address ? 'border-destructive' : ''}
              maxLength={500}
              rows={3}
            />
            {errors.address && (
              <p className="text-sm text-destructive">{errors.address}</p>
            )}
          </div>

          {/* Payment Mode */}
          <div className="space-y-2">
            <Label className="flex items-center gap-2">
              <CreditCard className="h-4 w-4" />
              Payment Mode *
            </Label>
            <div className="grid grid-cols-2 gap-2">
              {paymentModes.map((mode) => (
                <Button
                  key={mode.value}
                  type="button"
                  variant={formData.paymentMode === mode.value ? 'default' : 'outline'}
                  onClick={() => handleInputChange('paymentMode', mode.value)}
                  className="h-auto p-3 flex flex-col gap-1"
                >
                  <span className="text-lg">{mode.icon}</span>
                  <span className="text-xs">{mode.label}</span>
                </Button>
              ))}
            </div>
            {errors.paymentMode && (
              <p className="text-sm text-destructive">{errors.paymentMode}</p>
            )}
          </div>

          {/* Submit Buttons */}
          <div className="flex gap-2 pt-4">
            <Button
              type="button"
              variant="outline"
              onClick={onCancel}
              className="flex-1"
            >
              Cancel
            </Button>
            <Button
              type="submit"
              disabled={isSubmitting}
              className="flex-1 gap-2"
            >
              <CheckCircle className="h-4 w-4" />
              {isSubmitting ? 'Processing...' : 'Continue to Payment'}
            </Button>
          </div>
        </form>
      </CardContent>
    </Card>
  );
};