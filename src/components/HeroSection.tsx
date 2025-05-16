
import { Button } from "@/components/ui/button";
import { Coffee, MapPin } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="hero-pattern relative py-16 md:py-24">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="flex flex-col space-y-6 animate-fade-in">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-coffee-700 leading-tight">
              Discover South Africa's Finest Coffee
            </h1>
            <p className="text-lg text-coffee-600 max-w-md">
              From the rolling hills of the Western Cape to your cup. Order premium, locally sourced coffee beans and brews for delivery or pickup.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 pt-2">
              <Button className="bg-coffee-500 hover:bg-coffee-600 text-lg h-12 px-6">
                <Coffee className="mr-2 h-5 w-5" /> Order Now
              </Button>
              <Button variant="outline" className="border-coffee-400 text-coffee-600 hover:bg-coffee-100 text-lg h-12 px-6">
                <MapPin className="mr-2 h-5 w-5" /> Find Locations
              </Button>
            </div>
            <div className="flex items-center space-x-4 pt-2">
              <div className="flex -space-x-2">
                <img 
                  src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=48&h=48&q=80" 
                  className="border-2 border-white rounded-full h-10 w-10 object-cover"
                  alt="Customer"
                />
                <img 
                  src="https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=48&h=48&q=80" 
                  className="border-2 border-white rounded-full h-10 w-10 object-cover"
                  alt="Customer"
                />
                <img 
                  src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=48&h=48&q=80" 
                  className="border-2 border-white rounded-full h-10 w-10 object-cover"
                  alt="Customer"
                />
              </div>
              <div className="text-sm">
                <span className="font-semibold text-coffee-700">500+ happy customers</span>
                <div className="flex text-yellow-500">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="relative h-96 md:h-full">
            <div className="absolute top-0 right-0 md:top-1/2 md:-translate-y-1/2 md:right-0 w-72 h-72 md:w-96 md:h-96 bg-terracotta-200 rounded-full filter blur-3xl opacity-20"></div>
            <div className="relative h-full w-full">
              <img 
                src="https://images.unsplash.com/photo-1500673922987-e212871fec22?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
                alt="South African Coffee Farm" 
                className="rounded-lg shadow-xl object-cover w-full h-full"
              />
              <div className="absolute -bottom-6 -left-6 bg-white rounded-lg shadow-lg p-4 max-w-xs">
                <div className="flex items-center mb-2">
                  <div className="h-8 w-8 rounded-full bg-coffee-500 flex items-center justify-center text-white mr-3">
                    <Coffee className="h-4 w-4" />
                  </div>
                  <h3 className="font-semibold text-coffee-700">Locally Sourced</h3>
                </div>
                <p className="text-sm text-coffee-600">Supporting local South African coffee growers with every cup.</p>
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
