
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ShoppingCart, Coffee, CupSoda, Croissant } from "lucide-react";
import { Link } from "react-router-dom";

// Define a type for our coffee products
type CoffeeProduct = {
  id: number;
  name: string;
  category: string;
  description: string;
  price: number;
  icon: "coffee" | "cup-soda" | "croissant";
  isPopular?: boolean;
  isNew?: boolean;
  isVegan?: boolean;
};

const featuredProducts: CoffeeProduct[] = [
  {
    id: 3,
    name: "Cappuccino",
    category: "Hot Coffee",
    description: "Espresso with steamed milk and foam",
    price: 40,
    icon: "coffee",
    isPopular: true
  },
  {
    id: 21,
    name: "Red Cappuccino",
    category: "Hot Coffee",
    description: "Rooibos tea cappuccino with frothy milk",
    price: 30,
    icon: "coffee",
    isPopular: true
  },
  {
    id: 33,
    name: "Freezo",
    category: "Frozen Drinks",
    description: "Our signature frozen coffee drink",
    price: 45,
    icon: "cup-soda"
  },
  {
    id: 16,
    name: "Almond Croissant",
    category: "Freshly Baked Goods",
    description: "Croissant filled with almond cream and flakes",
    price: 50,
    icon: "croissant",
    isPopular: true
  }
];

const FeaturedCoffee = () => {
  const [products] = useState<CoffeeProduct[]>(featuredProducts);

  // Function to render the appropriate icon
  const renderIcon = (iconName: CoffeeProduct["icon"]) => {
    switch(iconName) {
      case "coffee":
        return <Coffee className="h-24 w-24 text-gray-600" />;
      case "cup-soda":
        return <CupSoda className="h-24 w-24 text-gray-600" />;
      case "croissant":
        return <Croissant className="h-24 w-24 text-gray-600" />;
      default:
        return <Coffee className="h-24 w-24 text-gray-600" />;
    }
  };

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-black mb-4">Featured Products</h2>
          <p className="text-gray-700 max-w-2xl mx-auto">
            Discover our most popular coffee and baked goods, available in our shop.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((product) => (
            <Card key={product.id} className="overflow-hidden bg-white border border-gray-200 hover:shadow-md transition-all">
              <div className="aspect-square relative overflow-hidden flex items-center justify-center bg-gray-100 p-4">
                {renderIcon(product.icon)}
                <div className="absolute top-3 left-3 flex flex-col gap-2">
                  {product.isPopular && (
                    <Badge className="bg-black">Popular</Badge>
                  )}
                  {product.isNew && (
                    <Badge className="bg-blue-500">New</Badge>
                  )}
                  {product.isVegan && (
                    <Badge className="bg-green-500">Vegan</Badge>
                  )}
                </div>
              </div>
              <CardHeader className="py-4">
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="font-semibold text-lg text-black">{product.name}</h3>
                    <p className="text-sm text-gray-500">{product.category}</p>
                  </div>
                  <div className="text-right font-bold text-lg">
                    R{product.price}
                  </div>
                </div>
              </CardHeader>
              <CardContent className="py-2">
                <p className="text-sm text-gray-600 line-clamp-2">{product.description}</p>
              </CardContent>
              <CardFooter className="pt-2 pb-4">
                <Button className="w-full bg-black hover:bg-gray-800">
                  <ShoppingCart className="mr-2 h-4 w-4" /> Add to Cart
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button className="bg-black hover:bg-gray-800 text-lg h-12 px-6" asChild>
            <Link to="/shop">View All Products</Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default FeaturedCoffee;
