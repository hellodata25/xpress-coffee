
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { ShoppingCart, ArrowLeft, Trash2 } from "lucide-react";
import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { useCart } from "@/context/CartContext";
import { toast } from "@/hooks/use-toast";
import CartItem from "@/components/CartItem";

const Checkout = () => {
  const { cartItems, clearCart, totalPrice } = useCart();
  const [isProcessing, setIsProcessing] = useState(false);

  // Handler for clearing the cart
  const handleClearCart = () => {
    clearCart();
    toast({
      title: "Cart cleared",
      description: "All items have been removed from your cart.",
    });
  };

  // Handler for processing the order
  const handleProcessOrder = () => {
    setIsProcessing(true);
    
    // Simulate order processing
    setTimeout(() => {
      setIsProcessing(false);
      
      // Redirect to success page
      window.location.href = "/payment-success";
      
      // Clear the cart after successful order
      clearCart();
    }, 1500);
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-grow container mx-auto px-4 py-8">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-serif font-bold">Your Cart</h1>
          <Button asChild variant="outline" className="rounded-full">
            <Link to="/shop">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Continue Shopping
            </Link>
          </Button>
        </div>
        
        {cartItems.length === 0 ? (
          <div className="text-center py-16">
            <ShoppingCart className="h-16 w-16 mx-auto text-gray-300 mb-4" />
            <h2 className="text-2xl font-medium text-gray-700 mb-2">Your cart is empty</h2>
            <p className="text-gray-500 mb-8">Browse our products and add some items to your cart.</p>
            <Button asChild className="bg-black hover:bg-gray-800 text-white rounded-full px-8 py-6">
              <Link to="/shop">Start Shopping</Link>
            </Button>
          </div>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2 bg-white rounded-2xl shadow-md p-6">
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-xl font-medium">Cart Items ({cartItems.length})</h2>
                <Button 
                  variant="outline" 
                  onClick={handleClearCart}
                  className="text-red-500 hover:bg-red-50 hover:text-red-600 rounded-full"
                  size="sm"
                >
                  <Trash2 className="mr-2 h-4 w-4" />
                  Clear Cart
                </Button>
              </div>
              
              <div className="divide-y">
                {cartItems.map((item) => (
                  <CartItem key={item.id} item={item} />
                ))}
              </div>
            </div>
            
            <div className="lg:col-span-1">
              <div className="bg-white rounded-2xl shadow-md p-6 sticky top-24">
                <h2 className="text-xl font-medium mb-6">Order Summary</h2>
                
                <div className="space-y-4 mb-6">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Subtotal</span>
                    <span>R{totalPrice.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Delivery</span>
                    <span>R0.00</span>
                  </div>
                  <div className="border-t pt-4 flex justify-between font-medium text-lg">
                    <span>Total</span>
                    <span>R{totalPrice.toFixed(2)}</span>
                  </div>
                </div>
                
                <Button 
                  onClick={handleProcessOrder} 
                  disabled={isProcessing || cartItems.length === 0}
                  className="w-full bg-black hover:bg-gray-800 text-white py-6 rounded-full text-lg transition-all duration-200"
                >
                  {isProcessing ? 'Processing...' : 'Complete Order'}
                </Button>
                
                <p className="text-xs text-gray-500 text-center mt-4">
                  By completing your order, you agree to our Terms of Service and Privacy Policy
                </p>
              </div>
            </div>
          </div>
        )}
      </main>
      
      <Footer />
    </div>
  );
};

export default Checkout;
