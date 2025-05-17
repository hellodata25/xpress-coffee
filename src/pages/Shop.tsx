
import { useState } from "react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { ShoppingCart, Coffee, CupSoda, Croissant, LeafyGreen, TeaCup } from "lucide-react";
import { Link } from "react-router-dom";

// Define coffee types and their categories
type CoffeeProduct = {
  id: number;
  name: string;
  price: number;
  category: string;
  description?: string;
  isPopular?: boolean;
  isNew?: boolean;
  isVegan?: boolean;
  icon: "coffee" | "cup-soda" | "croissant" | "leafy-green" | "tea-cup";
};

// Categories displayed in the horizontal scrolling menu
const categories = [
  "All Products",
  "Hot Coffee",
  "Cold Coffee",
  "Specialty Drinks",
  "Freshly Baked Goods",
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
    description: "Smooth espresso with velvety steamed milk",
    isPopular: true,
    icon: "coffee"
  },
  {
    id: 2,
    name: "Cortado",
    price: 35,
    category: "Hot Coffee",
    description: "Equal parts espresso and steamed milk",
    isPopular: true,
    icon: "coffee"
  },
  {
    id: 3,
    name: "Cappuccino",
    price: 40,
    category: "Hot Coffee",
    description: "Espresso with steamed milk and foam",
    isPopular: true,
    icon: "coffee"
  },
  {
    id: 4,
    name: "Americano",
    price: 30,
    category: "Hot Coffee",
    description: "Espresso diluted with hot water",
    isPopular: true,
    icon: "coffee"
  },
  {
    id: 5,
    name: "Cold Brew",
    price: 45,
    category: "Cold Coffee",
    description: "Coffee steeped in cold water for 12+ hours",
    icon: "cup-soda"
  },
  {
    id: 6,
    name: "Iced Latte",
    price: 42,
    category: "Cold Coffee",
    description: "Espresso with cold milk over ice",
    icon: "cup-soda"
  },
  {
    id: 7,
    name: "House Blend",
    price: 129,
    category: "Coffee Beans",
    description: "Our signature blend for everyday brewing",
    icon: "coffee"
  },
  {
    id: 8,
    name: "Single Origin",
    price: 149,
    category: "Coffee Beans",
    description: "Ethiopian beans with fruity notes",
    icon: "coffee"
  },
  {
    id: 9,
    name: "Matcha Latte",
    price: 45,
    category: "Specialty Drinks",
    description: "Premium matcha whisked with steamed milk",
    isNew: true,
    icon: "tea-cup"
  },
  {
    id: 10,
    name: "Artisanal Tea",
    price: 25,
    category: "Specialty Drinks",
    description: "Selection of loose leaf teas",
    icon: "tea-cup"
  },
  {
    id: 11,
    name: "Spiced Chai",
    price: 40,
    category: "Specialty Drinks",
    description: "Aromatic chai tea with steamed milk",
    icon: "tea-cup"
  },
  {
    id: 12,
    name: "Turmeric Latte",
    price: 40,
    category: "Specialty Drinks",
    description: "Golden milk with anti-inflammatory properties",
    isVegan: true,
    icon: "tea-cup"
  },
  {
    id: 13,
    name: "Hot Chocolate",
    price: 40,
    category: "Specialty Drinks",
    description: "Rich and creamy chocolate with steamed milk",
    icon: "cup-soda"
  },
  {
    id: 14,
    name: "Plain Croissant",
    price: 25,
    category: "Freshly Baked Goods",
    description: "Buttery, flaky French pastry",
    icon: "croissant"
  },
  {
    id: 15,
    name: "Chocolate Croissant",
    price: 25,
    category: "Freshly Baked Goods",
    description: "Croissant filled with dark chocolate",
    icon: "croissant"
  },
  {
    id: 16,
    name: "Almond Croissant",
    price: 50,
    category: "Freshly Baked Goods",
    description: "Croissant filled with almond cream and flakes",
    isPopular: true,
    icon: "croissant"
  },
  {
    id: 17,
    name: "Muffin",
    price: 20,
    category: "Freshly Baked Goods",
    description: "Blueberry or chocolate chip",
    icon: "croissant"
  },
  {
    id: 18,
    name: "Banana Loaf",
    price: 30,
    category: "Freshly Baked Goods",
    description: "Moist banana bread with walnuts",
    icon: "croissant"
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

  // Function to render the appropriate icon
  const renderIcon = (iconName: CoffeeProduct["icon"]) => {
    switch(iconName) {
      case "coffee":
        return <Coffee className="h-24 w-24 text-gray-600" />;
      case "cup-soda":
        return <CupSoda className="h-24 w-24 text-gray-600" />;
      case "croissant":
        return <Croissant className="h-24 w-24 text-gray-600" />;
      case "leafy-green":
        return <LeafyGreen className="h-24 w-24 text-gray-600" />;
      case "tea-cup":
        return <TeaCup className="h-24 w-24 text-gray-600" />;
      default:
        return <Coffee className="h-24 w-24 text-gray-600" />;
    }
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
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredProducts.map((product) => (
                <div 
                  key={product.id} 
                  className="bg-white rounded-lg overflow-hidden shadow"
                >
                  <div className="flex flex-row">
                    <div className="w-1/3 flex items-center justify-center bg-gray-100 p-4">
                      {renderIcon(product.icon)}
                    </div>
                    <div className="w-2/3 p-4 flex flex-col justify-between">
                      <div>
                        <div className="flex flex-wrap gap-2 mb-2">
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
                        <h3 className="text-xl font-semibold">{product.name}</h3>
                        {product.description && (
                          <p className="text-sm text-gray-500 mt-1 line-clamp-2">{product.description}</p>
                        )}
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
            <Button 
              className="bg-black hover:bg-gray-800 px-8 py-6 text-white shadow-lg"
              asChild
            >
              <Link to="/checkout">
                View order ({cartItems} {cartItems === 1 ? 'item' : 'items'})
              </Link>
            </Button>
          </div>
        )}
      </main>
      
      <Footer />
    </div>
  );
};

export default Shop;
