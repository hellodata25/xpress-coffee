
import { Button } from "@/components/ui/button";

const SimpleCTA = () => {
  return (
    <section className="bg-coffee-700 text-white py-16">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="font-serif text-3xl md:text-4xl font-bold mb-6">
            Experience the Rich Flavor of South African Coffee Today
          </h2>
          <p className="text-lg opacity-90 mb-8">
            From bean to cup, we're passionate about delivering the finest coffee experience. 
            Order now and taste the difference.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button className="bg-cream hover:bg-white text-coffee-700 text-lg h-12 px-8" size="lg">
              Order Now
            </Button>
            <Button variant="outline" className="border-white text-white hover:bg-coffee-600 text-lg h-12 px-8" size="lg">
              Join Our Coffee Club
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SimpleCTA;
