
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
    <Drawer open={isOpen} onOpenChange={setIsOpen}>
      <DrawerTrigger asChild>
        <Button 
          variant="ghost" 
          className="w-full h-full absolute inset-0 opacity-0 cursor-pointer"
          aria-label={`View ${product.name} details`}
        />
      </DrawerTrigger>
      <DrawerContent className="max-h-[85vh] overflow-y-auto">
        <div className="mx-auto w-full max-w-md">
          <DrawerHeader>
            <DrawerTitle className="text-2xl font-bold">{product.name}</DrawerTitle>
          </DrawerHeader>
          
          <div className="px-4">
            <div className="flex justify-center mb-6">
              {product.imageUrl ? (
                <img 
                  src={product.imageUrl} 
                  alt={product.name} 
                  className="h-48 w-48 object-cover rounded-lg"
                />
              ) : (
                <div className="bg-gray-100 p-6 rounded-lg">
                  {renderIcon(product.icon)}
                </div>
              )}
            </div>
            
            <div className="flex flex-wrap gap-2 mb-4">
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
            
            <div className="mb-6">
              <h3 className="text-sm font-medium text-gray-500">Description</h3>
              <p className="mt-1 text-gray-700">{product.description || "No description available"}</p>
            </div>
            
            <div className="mb-6">
              <h3 className="text-sm font-medium text-gray-500">Category</h3>
              <p className="mt-1 text-gray-700">{product.category}</p>
            </div>
            
            <div className="flex justify-between items-center mb-6">
              <div className="text-2xl font-bold">R{product.price}</div>
              <div className="flex items-center border rounded-lg">
                <Button 
                  variant="ghost" 
                  size="icon" 
                  onClick={decreaseQuantity} 
                  disabled={quantity <= 1}
                  className="h-10 w-10"
                >
                  <Minus className="h-4 w-4" />
                </Button>
                <span className="mx-4 text-lg font-medium">{quantity}</span>
                <Button 
                  variant="ghost" 
                  size="icon" 
                  onClick={increaseQuantity} 
                  className="h-10 w-10"
                >
                  <Plus className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </div>
          
          <DrawerFooter>
            <Button 
              onClick={handleAddToCart} 
              className="w-full bg-black hover:bg-gray-800 text-white py-6"
            >
              <ShoppingCart className="mr-2 h-4 w-4" />
              Add to cart - R{product.price * quantity}
            </Button>
          </DrawerFooter>
        </div>
      </DrawerContent>
    </Drawer>
  );
};

export default ProductDetailDrawer;
