
import React from 'react';
import { Button } from "@/components/ui/button";
import { Coffee, CupSoda, Croissant, LeafyGreen, GlassWater, Plus, Minus, Trash2 } from "lucide-react";
import { CartItem as CartItemType } from "@/context/CartContext";
import { useCart } from "@/context/CartContext";

interface CartItemProps {
  item: CartItemType;
}

const CartItem: React.FC<CartItemProps> = ({ item }) => {
  const { updateQuantity, removeFromCart } = useCart();

  const handleIncreaseQuantity = () => {
    updateQuantity(item.id, item.quantity + 1);
  };

  const handleDecreaseQuantity = () => {
    if (item.quantity > 1) {
      updateQuantity(item.id, item.quantity - 1);
    }
  };

  const handleRemove = () => {
    removeFromCart(item.id);
  };

  // Function to render the appropriate icon
  const renderIcon = (iconName: string) => {
    switch(iconName) {
      case "coffee":
        return <Coffee className="h-10 w-10 text-gray-700" />;
      case "cup-soda":
        return <CupSoda className="h-10 w-10 text-gray-700" />;
      case "croissant":
        return <Croissant className="h-10 w-10 text-gray-700" />;
      case "leafy-green":
        return <LeafyGreen className="h-10 w-10 text-gray-700" />;
      case "glass-water":
        return <GlassWater className="h-10 w-10 text-gray-700" />;
      default:
        return <Coffee className="h-10 w-10 text-gray-700" />;
    }
  };

  return (
    <div className="flex items-center justify-between py-3 border-b last:border-b-0">
      <div className="flex items-center space-x-4">
        <div className="bg-gray-100 p-2 rounded-lg flex items-center justify-center">
          {item.imageUrl ? (
            <img src={item.imageUrl} alt={item.name} className="h-12 w-12 object-cover rounded-md" />
          ) : (
            renderIcon(item.icon)
          )}
        </div>
        <div>
          <h3 className="font-medium">{item.name}</h3>
          <p className="text-sm text-gray-500">R{item.price} each</p>
        </div>
      </div>
      
      <div className="flex items-center space-x-3">
        <div className="flex items-center border rounded-full bg-white">
          <Button 
            variant="ghost" 
            size="icon" 
            onClick={handleDecreaseQuantity} 
            className="h-8 w-8 rounded-full"
            aria-label="Decrease quantity"
          >
            <Minus className="h-3 w-3" />
          </Button>
          <span className="mx-2 text-sm font-medium w-5 text-center">{item.quantity}</span>
          <Button 
            variant="ghost" 
            size="icon" 
            onClick={handleIncreaseQuantity} 
            className="h-8 w-8 rounded-full"
            aria-label="Increase quantity"
          >
            <Plus className="h-3 w-3" />
          </Button>
        </div>
        
        <div className="font-medium">
          R{item.price * item.quantity}
        </div>
        
        <Button
          variant="ghost"
          size="icon"
          onClick={handleRemove}
          className="h-8 w-8 text-red-500 hover:bg-red-50 rounded-full"
          aria-label="Remove item"
        >
          <Trash2 className="h-4 w-4" />
        </Button>
      </div>
    </div>
  );
};

export default CartItem;
