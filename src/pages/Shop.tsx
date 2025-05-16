
import { useState } from "react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { ShoppingCart, Coffee, Bean } from "lucide-react";

// Define coffee types and their categories
type CoffeeProduct = {
  id: number;
  name: string;
  price: number;
  category: string;
  isPopular?: boolean;
};

// Categories displayed in the horizontal scrolling menu
const categories = [
  "All Products",
  "Hot Coffee",
  "Cold Coffee",
  "Specialty Brews",
  "Coffee Beans",
  "Brewing Equipment"
];

// Sample products for the shop page
const coffeeProducts: CoffeeProduct[] = [
  {
    id: 1,
    name: "Flat White",
    price: 38,
    category: "Hot Coffee",
    isPopular: true,
  },
  {
    id: 2,
    name: "Cortado",
    price: 35,
    category: "Hot Coffee",
    isPopular: true,
  },
  {
    id: 3,
    name: "Cappuccino",
    price: 40,
    category: "Hot Coffee",
    isPopular: true,
  },
  {
    id: 4,
    name: "Americano",
    price: 30,
    category: "Hot Coffee",
    isPopular: true,
  },
  {
    id: 5,
    name: "Cold Brew",
    price: 45,
    category: "Cold Coffee",
  },
  {
    id: 6,
    name: "Iced Latte",
    price: 42,
    category: "Cold Coffee",
  },
  {
    id: 7,
    name: "House Blend",
    price: 129,
    category: "Coffee Beans",
  },
  {
    id: 8,
    name: "Single Origin",
    price: 149,
    category: "Coffee Beans",
  },
];

const Shop = () => {
  const [selectedCategory, setSelectedCategory] = useState("All Products");
  const [cartItems, setCartItems] = useState<number>(0);

  // Filter products based on selected category
  const filteredProducts = selectedCategory === "All Products" 
    ? coffeeProducts 
    : coffeeProducts.filter(product => product.category === selectedCategory);

  const addToCart = () => {
    setCartItems(cartItems + 1);
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-grow">
        {/* Shop Hero Banner */}
        <div className="bg-black text-white py-8">
          <div className="container mx-auto px-4">
            <h1 className="font-serif text-3xl md:text-4xl font-bold">Coffee Shop</h1>
            <p className="mt-2 text-gray-200 opacity-90">Discover our premium coffee selection</p>
          </div>
        </div>
        
        {/* Categories Navigation */}
        <div className="sticky top-16 z-40 bg-background/95 backdrop-blur-sm border-b">
          <div className="container mx-auto px-4">
            <div className="overflow-x-auto py-4">
              <div className="flex space-x-2 min-w-max">
                {categories.map((category) => (
                  <Button
                    key={category}
                    variant={selectedCategory === category ? "default" : "outline"}
                    className={selectedCategory === category 
                      ? "bg-black text-white" 
                      : "border-gray-300 text-gray-700"}
                    onClick={() => setSelectedCategory(category)}
                  >
                    {category}
                  </Button>
                ))}
              </div>
            </div>
          </div>
        </div>
        
        {/* Products Grid */}
        <section className="py-8 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
              {filteredProducts.map((product) => (
                <div 
                  key={product.id} 
                  className="bg-white rounded-lg overflow-hidden shadow"
                >
                  <div className="flex flex-row">
                    <div className="w-1/2 flex items-center justify-center bg-gray-100 p-4">
                      {product.category === "Coffee Beans" ? (
                        <Bean className="h-24 w-24 text-gray-600" />
                      ) : (
                        <Coffee className="h-24 w-24 text-gray-600" />
                      )}
                    </div>
                    <div className="w-1/2 p-4 flex flex-col justify-between">
                      <div>
                        {product.isPopular && (
                          <Badge className="bg-black mb-2">Popular</Badge>
                        )}
                        <h3 className="text-xl font-semibold">{product.name}</h3>
                      </div>
                      <div className="flex justify-between items-center mt-4">
                        <span className="text-xl font-bold">R{product.price}</span>
                        <Button 
                          size="sm" 
                          className="bg-black hover:bg-gray-800"
                          onClick={addToCart}
                        >
                          <ShoppingCart className="h-4 w-4" />
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
        
        {/* View Cart Sticky Button */}
        {cartItems > 0 && (
          <div className="fixed bottom-6 left-1/2 transform -translate-x-1/2 z-50">
            <Button className="bg-black hover:bg-gray-800 px-8 py-6 text-white shadow-lg">
              View order ({cartItems} {cartItems === 1 ? 'item' : 'items'})
            </Button>
          </div>
        )}
      </main>
      
      <Footer />
    </div>
  );
};

export default Shop;
