
import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Link } from "react-router-dom";

const PaymentSuccess = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-grow flex items-center justify-center py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-md mx-auto bg-white rounded-lg shadow-lg p-8 text-center">
            <div className="mx-auto bg-black rounded-full h-16 w-16 flex items-center justify-center mb-6">
              <Check className="h-8 w-8 text-white" />
            </div>
            
            <h1 className="font-serif text-2xl font-bold mb-4">Payment Successful!</h1>
            
            <p className="text-gray-600 mb-8">
              Thank you for your order. We've received your payment and are preparing your coffee.
              You'll receive a confirmation email shortly.
            </p>
            
            <div className="bg-gray-50 rounded-lg p-4 mb-8">
              <div className="text-sm text-gray-600 mb-2">Order Reference</div>
              <div className="font-bold text-lg">#XC{Math.floor(Math.random() * 100000)}</div>
            </div>
            
            <div className="flex flex-col space-y-4">
              <Button asChild className="bg-black hover:bg-gray-800 text-white">
                <Link to="/shop">Continue Shopping</Link>
              </Button>
              
              <Button variant="outline" asChild>
                <Link to="/">Return Home</Link>
              </Button>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default PaymentSuccess;
