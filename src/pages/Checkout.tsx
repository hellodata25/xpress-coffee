
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { 
  Form, 
  FormControl, 
  FormField, 
  FormItem, 
  FormLabel, 
  FormMessage 
} from "@/components/ui/form";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { useNavigate } from "react-router-dom";
import { CreditCard, PayPal, Check } from "lucide-react";

// Define the form schema
const formSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email address"),
  phone: z.string().min(10, "Phone number must be at least 10 characters"),
  address: z.string().min(5, "Address must be at least 5 characters"),
  city: z.string().min(2, "City must be at least 2 characters"),
  postalCode: z.string().min(4, "Postal code must be at least 4 characters"),
  paymentMethod: z.enum(["credit-card", "paypal", "cash"])
});

const Checkout = () => {
  const navigate = useNavigate();
  const [cartItems, setCartItems] = useState<{ id: number; name: string; price: number; quantity: number }[]>([
    { id: 1, name: "Flat White", price: 38, quantity: 1 },
    { id: 3, name: "Cappuccino", price: 40, quantity: 2 }
  ]);
  
  const [isProcessing, setIsProcessing] = useState(false);
  const [selectedPaymentMethod, setSelectedPaymentMethod] = useState<string>("credit-card");

  // Initialize the form
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      address: "",
      city: "",
      postalCode: "",
      paymentMethod: "credit-card"
    }
  });

  // Calculate total price
  const subtotal = cartItems.reduce((total, item) => total + (item.price * item.quantity), 0);
  const deliveryFee = 25;
  const total = subtotal + deliveryFee;

  // Handle form submission
  const onSubmit = (values: z.infer<typeof formSchema>) => {
    setIsProcessing(true);
    
    // Simulate payment processing
    setTimeout(() => {
      setIsProcessing(false);
      // Navigate to success page (would need to be created)
      navigate("/payment-success");
    }, 2000);
  };

  // Handle payment method selection
  const handlePaymentMethodChange = (method: string) => {
    setSelectedPaymentMethod(method);
    form.setValue("paymentMethod", method as "credit-card" | "paypal" | "cash");
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-grow">
        {/* Checkout Banner */}
        <div className="bg-black text-white py-8">
          <div className="container mx-auto px-4">
            <h1 className="font-serif text-3xl md:text-4xl font-bold">Checkout</h1>
            <p className="mt-2 text-gray-200 opacity-90">Complete your order</p>
          </div>
        </div>
        
        <div className="container mx-auto px-4 py-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            {/* Form Column */}
            <div className="lg:col-span-7">
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                  {/* Contact Information */}
                  <div className="bg-white p-6 rounded-lg shadow">
                    <h2 className="font-serif text-xl font-semibold mb-4">Contact Information</h2>
                    <div className="space-y-4">
                      <FormField
                        control={form.control}
                        name="name"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Full Name</FormLabel>
                            <FormControl>
                              <Input placeholder="John Doe" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      
                      <FormField
                        control={form.control}
                        name="email"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Email</FormLabel>
                            <FormControl>
                              <Input type="email" placeholder="your@email.com" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      
                      <FormField
                        control={form.control}
                        name="phone"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Phone Number</FormLabel>
                            <FormControl>
                              <Input placeholder="+27 XX XXX XXXX" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>
                  </div>
                  
                  {/* Delivery Address */}
                  <div className="bg-white p-6 rounded-lg shadow">
                    <h2 className="font-serif text-xl font-semibold mb-4">Delivery Address</h2>
                    <div className="space-y-4">
                      <FormField
                        control={form.control}
                        name="address"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Street Address</FormLabel>
                            <FormControl>
                              <Input placeholder="123 Coffee Street" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <FormField
                          control={form.control}
                          name="city"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>City</FormLabel>
                              <FormControl>
                                <Input placeholder="Cape Town" {...field} />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                        
                        <FormField
                          control={form.control}
                          name="postalCode"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Postal Code</FormLabel>
                              <FormControl>
                                <Input placeholder="8001" {...field} />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                      </div>
                    </div>
                  </div>
                  
                  {/* Payment Method */}
                  <div className="bg-white p-6 rounded-lg shadow">
                    <h2 className="font-serif text-xl font-semibold mb-4">Payment Method</h2>
                    <div className="space-y-4">
                      <FormField
                        control={form.control}
                        name="paymentMethod"
                        render={({ field }) => (
                          <FormItem>
                            <div className="space-y-3">
                              <div 
                                onClick={() => handlePaymentMethodChange("credit-card")}
                                className={`flex items-center gap-4 p-4 border rounded-lg cursor-pointer ${
                                  selectedPaymentMethod === "credit-card" ? "border-black bg-gray-50" : "border-gray-200"
                                }`}
                              >
                                <div className={`w-6 h-6 rounded-full border flex items-center justify-center ${
                                  selectedPaymentMethod === "credit-card" ? "border-black" : "border-gray-300"
                                }`}>
                                  {selectedPaymentMethod === "credit-card" && <Check className="h-4 w-4" />}
                                </div>
                                <CreditCard className="h-5 w-5" />
                                <span className="font-medium">Credit Card</span>
                              </div>
                              
                              <div 
                                onClick={() => handlePaymentMethodChange("paypal")}
                                className={`flex items-center gap-4 p-4 border rounded-lg cursor-pointer ${
                                  selectedPaymentMethod === "paypal" ? "border-black bg-gray-50" : "border-gray-200"
                                }`}
                              >
                                <div className={`w-6 h-6 rounded-full border flex items-center justify-center ${
                                  selectedPaymentMethod === "paypal" ? "border-black" : "border-gray-300"
                                }`}>
                                  {selectedPaymentMethod === "paypal" && <Check className="h-4 w-4" />}
                                </div>
                                <PayPal className="h-5 w-5" />
                                <span className="font-medium">PayPal</span>
                              </div>
                              
                              <div 
                                onClick={() => handlePaymentMethodChange("cash")}
                                className={`flex items-center gap-4 p-4 border rounded-lg cursor-pointer ${
                                  selectedPaymentMethod === "cash" ? "border-black bg-gray-50" : "border-gray-200"
                                }`}
                              >
                                <div className={`w-6 h-6 rounded-full border flex items-center justify-center ${
                                  selectedPaymentMethod === "cash" ? "border-black" : "border-gray-300"
                                }`}>
                                  {selectedPaymentMethod === "cash" && <Check className="h-4 w-4" />}
                                </div>
                                <span className="font-medium">Cash on Delivery</span>
                              </div>
                            </div>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>
                  </div>
                  
                  <Button 
                    type="submit" 
                    className="w-full bg-black hover:bg-gray-800 text-white py-6 text-lg"
                    disabled={isProcessing}
                  >
                    {isProcessing ? "Processing..." : `Pay R${total.toFixed(2)}`}
                  </Button>
                </form>
              </Form>
            </div>
            
            {/* Order Summary Column */}
            <div className="lg:col-span-5">
              <div className="bg-white p-6 rounded-lg shadow sticky top-20">
                <h2 className="font-serif text-xl font-semibold mb-4">Order Summary</h2>
                
                {/* Order Items */}
                <div className="space-y-4 divide-y">
                  {cartItems.map(item => (
                    <div key={item.id} className="flex justify-between py-4">
                      <div>
                        <p className="font-medium">{item.name}</p>
                        <p className="text-sm text-gray-600">Quantity: {item.quantity}</p>
                      </div>
                      <p className="font-medium">R{(item.price * item.quantity).toFixed(2)}</p>
                    </div>
                  ))}
                </div>
                
                {/* Order Total */}
                <div className="border-t mt-4 pt-4 space-y-2">
                  <div className="flex justify-between">
                    <span>Subtotal</span>
                    <span>R{subtotal.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Delivery Fee</span>
                    <span>R{deliveryFee.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between font-bold text-lg pt-2 border-t">
                    <span>Total</span>
                    <span>R{total.toFixed(2)}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Checkout;
