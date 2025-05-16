
import { Button } from "@/components/ui/button";
import { Coffee, MapPin, Star, Users } from "lucide-react";
import { Link } from "react-router-dom";

const HeroSection = () => {
  return (
    <section className="relative py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="flex flex-col space-y-6 animate-fade-in">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-black leading-tight">
              Discover Africa's Finest Coffee
            </h1>
            <p className="text-lg text-gray-700 max-w-md">
              From the rolling hills of Africa to your cup. Order premium, locally sourced coffee beans and brews for delivery or pickup.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 pt-2">
              <Button className="bg-black hover:bg-gray-800 text-white text-lg h-12 px-6" asChild>
                <Link to="/shop"><Coffee className="mr-2 h-5 w-5" /> Order Now</Link>
              </Button>
              <Button variant="outline" className="border-gray-400 text-black hover:bg-gray-100 text-lg h-12 px-6" asChild>
                <Link to="/locations"><MapPin className="mr-2 h-5 w-5" /> Find Locations</Link>
              </Button>
            </div>
            <div className="flex items-center space-x-4 pt-2">
              <div className="flex items-center justify-center bg-gray-100 rounded-full w-10 h-10">
                <Users className="h-5 w-5 text-gray-700" />
              </div>
              <div className="text-sm">
                <span className="font-semibold text-black">500+ happy customers</span>
                <div className="flex text-yellow-500">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-current" />
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="relative h-96 md:h-full">
            <div className="absolute top-0 right-0 md:top-1/2 md:-translate-y-1/2 md:right-0 w-72 h-72 md:w-96 md:h-96 bg-gray-100 rounded-full filter blur-3xl opacity-20"></div>
            <div className="relative h-full w-full flex items-center justify-center">
              <div className="bg-gray-100 rounded-lg p-8 flex items-center justify-center w-full h-full max-h-96">
                <Coffee size={120} className="text-black opacity-80" />
              </div>
              <div className="absolute -bottom-6 -left-6 bg-white rounded-lg shadow-lg p-4 max-w-xs">
                <div className="flex items-center mb-2">
                  <div className="h-8 w-8 rounded-full bg-black flex items-center justify-center text-white mr-3">
                    <Coffee className="h-4 w-4" />
                  </div>
                  <h3 className="font-semibold text-black">African Sourced</h3>
                </div>
                <p className="text-sm text-gray-600">Supporting local African coffee growers with every cup.</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-background to-transparent"></div>
    </section>
  );
};

export default HeroSection;
