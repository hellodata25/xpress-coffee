
import { Button } from "@/components/ui/button";
import { Coffee, MugSteaming, Wheat, Map } from "lucide-react";

const AboutSection = () => {
  return (
    <section className="py-16 bg-coffee-100">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-coffee-700 mb-6">South African Coffee Culture</h2>
            <p className="text-coffee-600 mb-4">
              South Africa has a rich and vibrant coffee culture that has been growing rapidly in recent years. From the bustling cafes of Cape Town to the artisanal roasters in Johannesburg, our country is producing some of the world's most exciting coffee.
            </p>
            <p className="text-coffee-600 mb-6">
              At Xpress Coffee, we're passionate about promoting local South African coffee producers. We work directly with small-scale farmers and roasters to bring you the freshest, most ethically sourced beans possible.
            </p>
            
            <div className="grid grid-cols-2 gap-4 mb-8">
              <div className="bg-white p-4 rounded-lg shadow-sm">
                <div className="font-bold text-2xl text-coffee-700 mb-1">15+</div>
                <div className="text-coffee-500 text-sm">Local Roasters</div>
              </div>
              <div className="bg-white p-4 rounded-lg shadow-sm">
                <div className="font-bold text-2xl text-coffee-700 mb-1">24hr</div>
                <div className="text-coffee-500 text-sm">Fresh Roasting</div>
              </div>
              <div className="bg-white p-4 rounded-lg shadow-sm">
                <div className="font-bold text-2xl text-coffee-700 mb-1">100%</div>
                <div className="text-coffee-500 text-sm">South African</div>
              </div>
              <div className="bg-white p-4 rounded-lg shadow-sm">
                <div className="font-bold text-2xl text-coffee-700 mb-1">50+</div>
                <div className="text-coffee-500 text-sm">Coffee Varieties</div>
              </div>
            </div>
            
            <Button className="bg-terracotta-500 hover:bg-terracotta-600 text-lg h-12 px-6">
              Learn Our Story
            </Button>
          </div>
          
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-4">
              <div className="rounded-lg h-48 w-full bg-gray-100 flex items-center justify-center">
                <Coffee className="h-24 w-24 text-gray-600" />
              </div>
              <div className="rounded-lg h-64 w-full bg-gray-100 flex items-center justify-center">
                <Wheat className="h-24 w-24 text-gray-600" />
              </div>
            </div>
            <div className="space-y-4 pt-6">
              <div className="rounded-lg h-64 w-full bg-gray-100 flex items-center justify-center">
                <MugSteaming className="h-24 w-24 text-gray-600" />
              </div>
              <div className="rounded-lg h-48 w-full bg-gray-100 flex items-center justify-center">
                <Map className="h-24 w-24 text-gray-600" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
