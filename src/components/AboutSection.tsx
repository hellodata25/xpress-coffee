
import { Button } from "@/components/ui/button";

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
              At Kaffeewelt, we're passionate about promoting local South African coffee producers. We work directly with small-scale farmers and roasters to bring you the freshest, most ethically sourced beans possible.
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
              <img 
                src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80" 
                alt="Coffee farm" 
                className="rounded-lg h-48 w-full object-cover"
              />
              <img 
                src="https://images.unsplash.com/photo-1582562124811-c09040d0a901?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80" 
                alt="Coffee beans" 
                className="rounded-lg h-64 w-full object-cover"
              />
            </div>
            <div className="space-y-4 pt-6">
              <img 
                src="https://images.unsplash.com/photo-1618160702438-9b02ab6515c9?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80" 
                alt="Coffee brewing" 
                className="rounded-lg h-64 w-full object-cover"
              />
              <img 
                src="https://images.unsplash.com/photo-1500673922987-e212871fec22?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80" 
                alt="South African landscape" 
                className="rounded-lg h-48 w-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
