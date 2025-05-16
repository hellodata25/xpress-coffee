
import { useState } from "react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { ShoppingCart } from "lucide-react";

// Define coffee types and their categories
type CoffeeProduct = {
  id: number;
  name: string;
  price: number;
  image: string;
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
    image: "https://images.unsplash.com/photo-1582562124811-c09040d0a901?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    category: "Hot Coffee",
    isPopular: true,
  },
  {
    id: 2,
    name: "Cortado",
    price: 35,
    image: "https://images.unsplash.com/photo-1618160702438-9b02ab6515c9?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    category: "Hot Coffee",
    isPopular: true,
  },
  {
    id: 3,
    name: "Cappuccino",
    price: 40,
    image: "https://images.unsplash.com/photo-1582562124811-c09040d0a901?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    category: "Hot Coffee",
    isPopular: true,
  },
  {
    id: 4,
    name: "Americano",
    price: 30,
    image: "https://images.unsplash.com/photo-1500673922987-e212871fec22?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    category: "Hot Coffee",
    isPopular: true,
  },
  {
    id: 5,
    name: "Cold Brew",
    price: 45,
    image: "https://images.unsplash.com/photo-1618160702438-9b02ab6515c9?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    category: "Cold Coffee",
  },
  {
    id: 6,
    name: "Iced Latte",
    price: 42,
    image: "https://images.unsplash.com/photo-1582562124811-c09040d0a901?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    category: "Cold Coffee",
  },
  {
    id: 7,
    name: "Cape Mountain Blend",
    price: 129,
    image: "https://images.unsplash.com/photo-1500673922987-e212871fec22?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    category: "Coffee Beans",
  },
  {
    id: 8,
    name: "Johannesburg Morning",
    price: 149,
    image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
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
        <div className="bg-coffee-700 text-white py-8">
          <div className="container mx-auto px-4">
            <h1 className="font-serif text-3xl md:text-4xl font-bold">Coffee Shop</h1>
            <p className="mt-2 text-cream opacity-90">Discover our premium coffee selection</p>
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
                      ? "bg-coffee-500 text-white" 
                      : "border-coffee-300 text-coffee-700"}
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
        <section className="py-8 bg-cream">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
              {filteredProducts.map((product) => (
                <div 
                  key={product.id} 
                  className="bg-white rounded-lg overflow-hidden shadow"
                >
                  <div className="flex flex-row">
                    <div className="w-1/2">
                      <img 
                        src={product.image} 
                        alt={product.name}
                        className="w-full h-full object-cover aspect-square"
                      />
                    </div>
                    <div className="w-1/2 p-4 flex flex-col justify-between">
                      <div>
                        {product.isPopular && (
                          <Badge className="bg-terracotta-500 mb-2">Popular</Badge>
                        )}
                        <h3 className="text-xl font-semibold text-coffee-700">{product.name}</h3>
                      </div>
                      <div className="flex justify-between items-center mt-4">
                        <span className="text-xl font-bold">R{product.price}</span>
                        <Button 
                          size="sm" 
                          className="bg-coffee-500 hover:bg-coffee-600"
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
            <Button className="bg-coffee-600 hover:bg-coffee-700 px-8 py-6 text-white shadow-lg">
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
