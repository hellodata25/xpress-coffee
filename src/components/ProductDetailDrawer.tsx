
import { useState } from "react";
import { 
  Drawer, 
  DrawerTrigger, 
  DrawerContent, 
  DrawerHeader,
  DrawerTitle, 
  DrawerFooter
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
  const { addToCart } = useCart();

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
        return <Coffee className="h-32 w-32 text-gray-700" />;
      case "cup-soda":
        return <CupSoda className="h-32 w-32 text-gray-700" />;
      case "croissant":
        return <Croissant className="h-32 w-32 text-gray-700" />;
      case "leafy-green":
        return <LeafyGreen className="h-32 w-32 text-gray-700" />;
      case "glass-water":
        return <GlassWater className="h-32 w-32 text-gray-700" />;
      default:
        return <Coffee className="h-32 w-32 text-gray-700" />;
    }
  };

  return (
    <Drawer open={isOpen} onOpenChange={setIsOpen}>
      <DrawerTrigger asChild>
        <Button 
          variant="outline" 
          className="absolute bottom-4 right-4 z-10 bg-white hover:bg-gray-50 shadow-md rounded-lg border-gray-200"
          aria-label={`View ${product.name} details`}
        >
          View details
        </Button>
      </DrawerTrigger>
      <DrawerContent className="max-h-[85vh] overflow-y-auto">
        <div className="mx-auto w-full max-w-md">
          <DrawerHeader>
            <DrawerTitle className="text-2xl font-bold text-center">{product.name}</DrawerTitle>
          </DrawerHeader>
          
          <div className="px-5">
            <div className="flex justify-center mb-8">
              {product.imageUrl ? (
                <img 
                  src={product.imageUrl} 
                  alt={product.name} 
                  className="h-56 w-56 object-cover rounded-xl shadow-md"
                />
              ) : (
                <div className="bg-gray-100 p-8 rounded-xl shadow-inner">
                  {renderIcon(product.icon)}
                </div>
              )}
            </div>
            
            <div className="flex flex-wrap gap-2 mb-5 justify-center">
              {product.isPopular && (
                <Badge className="bg-black text-white px-3 py-1 rounded-full text-sm">Popular</Badge>
              )}
              {product.isNew && (
                <Badge className="bg-blue-500 text-white px-3 py-1 rounded-full text-sm">New</Badge>
              )}
              {product.isVegan && (
                <Badge className="bg-green-500 text-white px-3 py-1 rounded-full text-sm">Vegan</Badge>
              )}
            </div>
            
            <div className="mb-6 bg-gray-50 p-4 rounded-lg">
              <h3 className="text-sm font-medium text-gray-600 mb-2">Description</h3>
              <p className="text-gray-800">{product.description || "No description available"}</p>
            </div>
            
            <div className="mb-6 bg-gray-50 p-4 rounded-lg">
              <h3 className="text-sm font-medium text-gray-600 mb-2">Category</h3>
              <p className="text-gray-800">{product.category}</p>
            </div>
            
            <div className="flex justify-between items-center mb-8 p-4 bg-gray-50 rounded-lg">
              <div className="text-2xl font-bold">R{product.price}</div>
              <div className="flex items-center border rounded-lg bg-white shadow-sm">
                <Button 
                  variant="ghost" 
                  size="icon" 
                  onClick={decreaseQuantity} 
                  disabled={quantity <= 1}
                  className="h-12 w-12 rounded-l-lg"
                >
                  <Minus className="h-5 w-5" />
                </Button>
                <span className="mx-5 text-lg font-medium">{quantity}</span>
                <Button 
                  variant="ghost" 
                  size="icon" 
                  onClick={increaseQuantity} 
                  className="h-12 w-12 rounded-r-lg"
                >
                  <Plus className="h-5 w-5" />
                </Button>
              </div>
            </div>
          </div>
          
          <DrawerFooter>
            <Button 
              onClick={handleAddToCart} 
              className="w-full bg-black hover:bg-gray-800 text-white py-7 rounded-xl text-lg"
            >
              <ShoppingCart className="mr-3 h-5 w-5" />
              Add to cart - R{product.price * quantity}
            </Button>
          </DrawerFooter>
        </div>
      </DrawerContent>
    </Drawer>
  );
};

export default ProductDetailDrawer;
