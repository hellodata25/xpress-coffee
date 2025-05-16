
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Coffee } from "lucide-react";

const SimpleCTA = () => {
  return (
    <section className="bg-black text-white py-16">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-3xl mx-auto text-center">
          <div className="flex justify-center mb-6">
            <Coffee size={48} />
          </div>
          <h2 className="font-serif text-3xl md:text-4xl font-bold mb-6">
            Experience the Rich Flavor of Xpress Coffee Today
          </h2>
          <p className="text-lg opacity-90 mb-8">
            From bean to cup, we're passionate about delivering Africa's finest coffee experience. 
            Order now and taste the difference.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              className="bg-white hover:bg-gray-200 text-black text-lg h-12 px-8" 
              size="lg"
              asChild
            >
              <Link to="/shop">Order Now</Link>
            </Button>
            <Button 
              variant="outline" 
              className="border-white text-white hover:bg-gray-800 text-lg h-12 px-8" 
              size="lg"
            >
              Join Our African Coffee Club
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SimpleCTA;
