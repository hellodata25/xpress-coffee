
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ShoppingCart } from "lucide-react";

// Define a type for our coffee products
type CoffeeProduct = {
  id: number;
  name: string;
  origin: string;
  description: string;
  price: number;
  image: string;
  roastLevel: string;
  isPopular?: boolean;
  isBestSeller?: boolean;
  isOrganic?: boolean;
};

const coffeeProducts: CoffeeProduct[] = [
  {
    id: 1,
    name: "Cape Mountain Blend",
    origin: "Western Cape",
    description: "A medium roast with notes of chocolate, caramel and a hint of citrus.",
    price: 129,
    image: "https://images.unsplash.com/photo-1618160702438-9b02ab6515c9?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    roastLevel: "Medium",
    isBestSeller: true
  },
  {
    id: 2,
    name: "Johannesburg Morning",
    origin: "Gauteng",
    description: "Strong and bold dark roast with earthy undertones and a smooth finish.",
    price: 149,
    image: "https://images.unsplash.com/photo-1582562124811-c09040d0a901?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    roastLevel: "Dark",
    isPopular: true
  },
  {
    id: 3,
    name: "Durban Coast",
    origin: "KwaZulu-Natal",
    description: "Light roast with bright acidity and tropical fruit notes.",
    price: 139,
    image: "https://images.unsplash.com/photo-1500673922987-e212871fec22?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    roastLevel: "Light",
    isOrganic: true
  },
  {
    id: 4,
    name: "Stellenbosch Reserve",
    origin: "Western Cape",
    description: "Premium medium-dark roast with rich chocolate and berry notes.",
    price: 169,
    image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    roastLevel: "Medium-Dark",
    isPopular: true,
    isOrganic: true
  }
];

const FeaturedCoffee = () => {
  const [products] = useState<CoffeeProduct[]>(coffeeProducts);

  return (
    <section className="py-16 bg-cream">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-coffee-700 mb-4">Featured Coffee</h2>
          <p className="text-coffee-600 max-w-2xl mx-auto">
            Discover our hand-selected range of premium South African coffee beans, expertly roasted for your enjoyment.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((coffee) => (
            <Card key={coffee.id} className="overflow-hidden bg-white border-coffee-200 hover:shadow-md transition-all">
              <div className="aspect-square relative overflow-hidden">
                <img 
                  src={coffee.image} 
                  alt={coffee.name}
                  className="object-cover w-full h-full transition-all duration-300 hover:scale-105"
                />
                <div className="absolute top-3 left-3 flex flex-col gap-2">
                  {coffee.isBestSeller && (
                    <Badge className="bg-terracotta-500">Best Seller</Badge>
                  )}
                  {coffee.isPopular && (
                    <Badge className="bg-coffee-500">Popular</Badge>
                  )}
                  {coffee.isOrganic && (
                    <Badge className="bg-green-600">Organic</Badge>
                  )}
                </div>
              </div>
              <CardHeader className="py-4">
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="font-serif font-bold text-lg text-coffee-700">{coffee.name}</h3>
                    <p className="text-sm text-coffee-500">{coffee.origin} • {coffee.roastLevel} Roast</p>
                  </div>
                  <div className="text-right font-bold text-lg">
                    R{coffee.price}
                  </div>
                </div>
              </CardHeader>
              <CardContent className="py-2">
                <p className="text-sm text-coffee-600 line-clamp-2">{coffee.description}</p>
              </CardContent>
              <CardFooter className="pt-2 pb-4">
                <Button className="w-full bg-coffee-500 hover:bg-coffee-600">
                  <ShoppingCart className="mr-2 h-4 w-4" /> Add to Cart
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button variant="outline" className="border-coffee-400 text-coffee-600 hover:bg-coffee-100 text-lg h-12 px-6">
            View All Coffees
          </Button>
        </div>
      </div>
    </section>
  );
};

export default FeaturedCoffee;
