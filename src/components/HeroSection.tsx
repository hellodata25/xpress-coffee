
import { Button } from "@/components/ui/button";
import { Coffee, MapPin } from "lucide-react";
import { Link } from "react-router-dom";

const HeroSection = () => {
  return (
    <section className="py-16 md:py-24 bg-black text-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col items-center text-center">
          <div className="mb-8">
            <Coffee size={80} className="text-white" />
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
            Discover Africa's Finest Coffee
          </h1>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto mb-8">
            From the rolling hills of Africa to your cup. Order premium, locally sourced coffee beans and brews for delivery or pickup.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 pt-2">
            <Button className="bg-white hover:bg-gray-200 text-black text-lg h-12 px-6" asChild>
              <Link to="/shop"><Coffee className="mr-2 h-5 w-5" /> Shop Now</Link>
            </Button>
            <Button variant="outline" className="border-white text-white hover:bg-white/10 text-lg h-12 px-6" asChild>
              <Link to="/locations"><MapPin className="mr-2 h-5 w-5" /> Find Locations</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
