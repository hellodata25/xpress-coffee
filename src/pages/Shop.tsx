
import { useState } from "react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { ShoppingCart, Coffee, CupSoda, Croissant, LeafyGreen, GlassWater } from "lucide-react";
import { Link } from "react-router-dom";
import ProductDetailDrawer from "@/components/ProductDetailDrawer";
import { useCart } from "@/context/CartContext";

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
  icon: "coffee" | "cup-soda" | "croissant" | "leafy-green" | "glass-water";
  imageUrl?: string;
};

// Categories displayed in the horizontal scrolling menu
const categories = [
  "All Products",
  "Hot Coffee",
  "Frozen Drinks",
  "Freshly Baked Goods",
  "Coffee Beans",
  "Soft Drinks",
  "Brewing Equipment"
];

// Sample products for the shop page
const coffeeProducts: CoffeeProduct[] = [
  // Hot Coffee - Including moved items from Signature Coffees
  {
    id: 19,
    name: "Espresso",
    price: 20,
    category: "Hot Coffee",
    description: "Strong concentrated coffee served in a small cup",
    icon: "coffee",
    imageUrl: "/lovable-uploads/b9da5571-bf70-486c-8ec9-6c855b069dc8.png"
  },
  {
    id: 20,
    name: "Americano",
    price: 25,
    category: "Hot Coffee",
    description: "Espresso diluted with hot water",
    icon: "coffee",
    imageUrl: "/lovable-uploads/cf00a807-10c8-4120-92f2-5e7a5860ecbd.png"
  },
  {
    id: 21,
    name: "Red Cappuccino",
    price: 30,
    category: "Hot Coffee",
    description: "Rooibos tea cappuccino with frothy milk",
    isPopular: true,
    icon: "coffee"
  },
  {
    id: 23,
    name: "Latte",
    price: 35,
    category: "Hot Coffee",
    description: "Espresso with steamed milk and a light layer of foam",
    icon: "coffee",
    imageUrl: "/lovable-uploads/4338d845-0b50-489b-87b7-bd82420da479.png"
  },
  {
    id: 24,
    name: "Mocha",
    price: 40,
    category: "Hot Coffee",
    description: "Espresso with chocolate and steamed milk",
    icon: "coffee"
  },
  {
    id: 1,
    name: "Flat White",
    price: 38,
    category: "Hot Coffee",
    description: "Smooth espresso with velvety steamed milk",
    isPopular: true,
    icon: "coffee",
    imageUrl: "/lovable-uploads/166aefbd-c046-4050-bd61-4762da43b6bc.png"
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
  // Other Hot Coffee items (formerly Specialty Drinks)
  {
    id: 9,
    name: "Matcha Latte",
    price: 45,
    category: "Hot Coffee",
    description: "Premium matcha whisked with steamed milk",
    isNew: true,
    icon: "cup-soda"
  },
  {
    id: 10,
    name: "Artisanal Tea",
    price: 25,
    category: "Hot Coffee",
    description: "Selection of loose leaf teas",
    icon: "cup-soda"
  },
  {
    id: 11,
    name: "Spiced Chai",
    price: 40,
    category: "Hot Coffee",
    description: "Aromatic chai tea with steamed milk",
    icon: "cup-soda"
  },
  {
    id: 12,
    name: "Turmeric Latte",
    price: 40,
    category: "Hot Coffee",
    description: "Golden milk with anti-inflammatory properties",
    isVegan: true,
    icon: "cup-soda"
  },
  {
    id: 13,
    name: "Hot Chocolate",
    price: 40,
    category: "Hot Coffee",
    description: "Rich and creamy chocolate with steamed milk",
    icon: "cup-soda"
  },
  // Frozen Drinks (renamed from Cold Coffee)
  {
    id: 5,
    name: "Cold Brew",
    price: 45,
    category: "Frozen Drinks",
    description: "Coffee steeped in cold water for 12+ hours",
    icon: "cup-soda"
  },
  {
    id: 6,
    name: "Iced Latte",
    price: 42,
    category: "Frozen Drinks",
    description: "Espresso with cold milk over ice",
    icon: "cup-soda"
  },
  // New Frozen Drinks items
  {
    id: 30,
    name: "Slice n Dice Fruit Juice",
    price: 35,
    category: "Frozen Drinks",
    description: "Fresh seasonal fruits blended into a refreshing juice",
    icon: "cup-soda"
  },
  {
    id: 31,
    name: "Fresh Orange Juice",
    price: 30,
    category: "Frozen Drinks",
    description: "Freshly squeezed orange juice",
    icon: "cup-soda"
  },
  {
    id: 32,
    name: "Fresh Orange Juice + Ginger Shot",
    price: 40,
    category: "Frozen Drinks",
    description: "Freshly squeezed orange juice with a zingy ginger shot",
    isNew: true,
    icon: "cup-soda"
  },
  {
    id: 33,
    name: "Freezo",
    price: 45,
    category: "Frozen Drinks",
    description: "Our signature frozen coffee drink",
    isPopular: true,
    icon: "cup-soda"
  },
  {
    id: 34,
    name: "Frozen Chocolate",
    price: 45,
    category: "Frozen Drinks",
    description: "Icy chocolate drink perfect for hot days",
    icon: "cup-soda"
  },
  {
    id: 35,
    name: "Frozen Mocha",
    price: 50,
    category: "Frozen Drinks",
    description: "Frozen blend of coffee and chocolate",
    icon: "cup-soda"
  },
  {
    id: 36,
    name: "Frozen Matcha",
    price: 50,
    category: "Frozen Drinks",
    description: "Premium matcha blended with ice and milk",
    isNew: true,
    icon: "cup-soda"
  },
  {
    id: 37,
    name: "Frozen Chai",
    price: 45,
    category: "Frozen Drinks",
    description: "Chilled chai tea blended with ice and spices",
    icon: "cup-soda"
  },
  {
    id: 38,
    name: "Frozen Americano",
    price: 40,
    category: "Frozen Drinks",
    description: "Chilled americano over crushed ice",
    icon: "cup-soda"
  },
  // Coffee Beans
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
  // Freshly Baked Goods
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
  // Soft Drinks
  {
    id: 40,
    name: "Coke 330ml",
    price: 20,
    category: "Soft Drinks",
    description: "Classic cola refreshment",
    icon: "glass-water"
  },
  {
    id: 41,
    name: "Coke Zero 330ml",
    price: 20,
    category: "Soft Drinks",
    description: "Zero sugar cola refreshment",
    icon: "glass-water"
  },
  {
    id: 42,
    name: "Sprite 330ml",
    price: 20,
    category: "Soft Drinks",
    description: "Crisp lemon-lime soda",
    icon: "glass-water"
  },
  {
    id: 43,
    name: "Sprite Zero 330ml",
    price: 20,
    category: "Soft Drinks",
    description: "Zero sugar lemon-lime soda",
    icon: "glass-water"
  },
  {
    id: 44,
    name: "Fanta 330ml",
    price: 20,
    category: "Soft Drinks",
    description: "Sparkling orange flavored soda",
    icon: "glass-water"
  },
  {
    id: 45,
    name: "Peach Iced Tea 330ml",
    price: 25,
    category: "Soft Drinks",
    description: "Refreshing peach flavored iced tea",
    icon: "glass-water"
  },
  {
    id: 46,
    name: "Lemon Iced Tea 330ml",
    price: 25,
    category: "Soft Drinks",
    description: "Refreshing lemon flavored iced tea",
    icon: "glass-water"
  },
  {
    id: 47,
    name: "Berry Iced Tea 330ml",
    price: 25,
    category: "Soft Drinks",
    description: "Refreshing berry flavored iced tea",
    icon: "glass-water"
  },
  {
    id: 48,
    name: "Redbull Original 250ml",
    price: 35,
    category: "Soft Drinks",
    description: "Energy drink that gives you wings",
    isPopular: true,
    icon: "glass-water"
  },
  {
    id: 49,
    name: "Redbull No Sugar 250ml",
    price: 35,
    category: "Soft Drinks",
    description: "Sugar-free energy drink that gives you wings",
    icon: "glass-water"
  },
];

const Shop = () => {
  const [selectedCategory, setSelectedCategory] = useState("All Products");
  const { addToCart, totalItems } = useCart();

  // Filter products based on selected category
  const filteredProducts = selectedCategory === "All Products" 
    ? coffeeProducts 
    : coffeeProducts.filter(product => product.category === selectedCategory);

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
      case "glass-water":
        return <GlassWater className="h-24 w-24 text-gray-600" />;
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
        <section className="py-8 relative before:content-[''] before:absolute before:inset-0 before:bg-black/40 before:z-0"
          style={{ 
            backgroundImage: "url('/lovable-uploads/b643d28e-71f1-40da-a612-2fa73f99d0ae.png')",
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundAttachment: "fixed"
          }}>
          <div className="container mx-auto px-4 relative z-10">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredProducts.map((product) => (
                <div 
                  key={product.id} 
                  className="bg-white/95 backdrop-blur-sm rounded-lg overflow-hidden shadow relative"
                >
                  <div className="flex flex-row">
                    <div className="w-1/3 flex items-center justify-center bg-gray-100/80 p-4">
                      {product.imageUrl ? (
                        <img 
                          src={product.imageUrl} 
                          alt={product.name} 
                          className="h-24 w-24 object-cover"
                        />
                      ) : (
                        renderIcon(product.icon)
                      )}
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
                          onClick={(e) => {
                            e.stopPropagation();
                            addToCart(product, 1);
                          }}
                        >
                          <ShoppingCart className="h-4 w-4" />
                        </Button>
                      </div>
                    </div>
                  </div>
                  
                  {/* Product Detail Drawer */}
                  <ProductDetailDrawer 
                    product={product} 
                    onAddToCart={addToCart} 
                  />
                </div>
              ))}
            </div>
          </div>
        </section>
        
        {/* View Cart Sticky Button */}
        {totalItems > 0 && (
          <div className="fixed bottom-6 left-1/2 transform -translate-x-1/2 z-50">
            <Button 
              className="bg-black hover:bg-gray-800 px-8 py-6 text-white shadow-lg"
              asChild
            >
              <Link to="/checkout">
                View order ({totalItems} {totalItems === 1 ? 'item' : 'items'})
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
