
import { useState } from "react";
import { 
  Drawer, 
  DrawerTrigger, 
  DrawerContent, 
  DrawerHeader,
  DrawerTitle, 
  DrawerFooter,
  DrawerDescription
} from "@/components/ui/drawer";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Coffee, CupSoda, Croissant, LeafyGreen, GlassWater, Plus, Minus, ShoppingCart } from "lucide-react";
import { toast } from "@/hooks/use-toast";
import { useCart } from "@/context/CartContext";

// Import product type from the shop page
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

interface ProductDetailDrawerProps {
  product: CoffeeProduct;
}

const ProductDetailDrawer = ({ product }: ProductDetailDrawerProps) => {
  const [quantity, setQuantity] = useState(1);
  const [isOpen, setIsOpen] = useState(false);
  const { addToCart, cartItems } = useCart();

  const isInCart = cartItems.some(item => item.id === product.id);

  const increaseQuantity = () => setQuantity(prev => prev + 1);
  
  const decreaseQuantity = () => {
    if (quantity > 1) {
      setQuantity(prev => prev - 1);
    }
  };

  const handleAddToCart = () => {
    addToCart(product, quantity);
    setIsOpen(false);
    setQuantity(1);
    toast({
      title: `Added to cart`,
      description: `${quantity} × ${product.name}`,
    });
  };

  // Function to render the appropriate icon
  const renderIcon = (iconName: CoffeeProduct["icon"]) => {
    switch(iconName) {
      case "coffee":
        return <Coffee className="h-24 w-24 text-gray-700" />;
      case "cup-soda":
        return <CupSoda className="h-24 w-24 text-gray-700" />;
      case "croissant":
        return <Croissant className="h-24 w-24 text-gray-700" />;
      case "leafy-green":
        return <LeafyGreen className="h-24 w-24 text-gray-700" />;
      case "glass-water":
        return <GlassWater className="h-24 w-24 text-gray-700" />;
      default:
        return <Coffee className="h-24 w-24 text-gray-700" />;
    }
  };

  return (
    <Drawer open={isOpen} onOpenChange={setIsOpen}>
      <DrawerTrigger asChild>
        <Button 
          variant="outline" 
          className="absolute bottom-4 right-4 z-10 bg-white hover:bg-gray-50 shadow-md rounded-full text-sm font-medium px-4 py-2 border-gray-200 transition-all duration-200 hover:scale-105"
          aria-label={`View ${product.name} details`}
        >
          View details
        </Button>
      </DrawerTrigger>
      <DrawerContent className="max-h-[85vh] overflow-y-auto">
        <div className="mx-auto w-full max-w-md">
          <DrawerHeader>
            <DrawerTitle className="text-2xl font-bold text-center">{product.name}</DrawerTitle>
            <DrawerDescription className="text-center text-gray-500">
              {product.category}
            </DrawerDescription>
          </DrawerHeader>
          
          <div className="px-5">
            <div className="flex justify-center mb-6">
              {product.imageUrl ? (
                <img 
                  src={product.imageUrl} 
                  alt={product.name} 
                  className="h-48 w-48 object-cover rounded-2xl shadow-md"
                />
              ) : (
                <div className="bg-gray-100 p-6 rounded-2xl shadow-inner flex items-center justify-center">
                  {renderIcon(product.icon)}
                </div>
              )}
            </div>
            
            <div className="flex flex-wrap gap-2 mb-4 justify-center">
              {product.isPopular && (
                <Badge className="bg-black text-white px-3 py-1.5 rounded-full text-sm">Popular</Badge>
              )}
              {product.isNew && (
                <Badge className="bg-blue-500 text-white px-3 py-1.5 rounded-full text-sm">New</Badge>
              )}
              {product.isVegan && (
                <Badge className="bg-green-500 text-white px-3 py-1.5 rounded-full text-sm">Vegan</Badge>
              )}
            </div>
            
            <div className="mb-5 bg-gray-50 p-4 rounded-xl">
              <h3 className="text-sm font-medium text-gray-600 mb-2">Description</h3>
              <p className="text-gray-800">{product.description || "No description available"}</p>
            </div>
            
            <div className="flex justify-between items-center mb-6 p-4 bg-gray-50 rounded-xl">
              <div className="text-2xl font-bold">R{product.price}</div>
              <div className="flex items-center border rounded-full bg-white shadow-sm">
                <Button 
                  variant="ghost" 
                  size="icon" 
                  onClick={decreaseQuantity} 
                  disabled={quantity <= 1}
                  className="h-10 w-10 rounded-full"
                >
                  <Minus className="h-4 w-4" />
                </Button>
                <span className="mx-4 text-lg font-medium">{quantity}</span>
                <Button 
                  variant="ghost" 
                  size="icon" 
                  onClick={increaseQuantity} 
                  className="h-10 w-10 rounded-full"
                >
                  <Plus className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </div>
          
          <DrawerFooter>
            <Button 
              onClick={handleAddToCart} 
              className="w-full bg-black hover:bg-gray-800 text-white py-6 rounded-full text-lg font-medium transition-all duration-200 hover:scale-105"
            >
              <ShoppingCart className="mr-2 h-5 w-5" />
              {isInCart ? 'Add more to cart' : 'Add to cart'} - R{product.price * quantity}
            </Button>
          </DrawerFooter>
        </div>
      </DrawerContent>
    </Drawer>
  );
};

export default ProductDetailDrawer;
