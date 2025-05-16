
import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Coffee, ShoppingCart, Menu, X } from "lucide-react";
import { Link, useLocation } from 'react-router-dom';

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();
  const [cartCount, setCartCount] = useState(0);

  const isActive = (path: string) => {
    return location.pathname === path;
  };

  return (
    <header className="sticky top-0 z-50 w-full bg-background/80 backdrop-blur-sm border-b">
      <div className="container flex items-center justify-between h-16 px-4 md:px-6">
        <Link to="/" className="flex items-center gap-2">
          <Coffee className="h-6 w-6 text-coffee-500" />
          <span className="font-serif text-xl font-bold text-coffee-700">Kaffeewelt</span>
        </Link>
        
        <nav className="hidden md:flex items-center gap-6">
          <Link 
            to="/" 
            className={`text-sm font-medium transition-colors ${isActive('/') ? 'text-coffee-600 font-bold' : 'hover:text-coffee-600'}`}
          >
            Home
          </Link>
          <Link 
            to="/shop" 
            className={`text-sm font-medium transition-colors ${isActive('/shop') ? 'text-coffee-600 font-bold' : 'hover:text-coffee-600'}`}
          >
            Shop
          </Link>
          <Link 
            to="/locations" 
            className={`text-sm font-medium transition-colors ${isActive('/locations') ? 'text-coffee-600 font-bold' : 'hover:text-coffee-600'}`}
          >
            Locations
          </Link>
          <Link 
            to="/about" 
            className={`text-sm font-medium transition-colors ${isActive('/about') ? 'text-coffee-600 font-bold' : 'hover:text-coffee-600'}`}
          >
            About
          </Link>
        </nav>
        
        <div className="flex items-center gap-4">
          <Button variant="ghost" size="icon" className="relative" aria-label="Shopping Cart">
            <ShoppingCart className="h-5 w-5" />
            <span className="absolute -top-1 -right-1 bg-terracotta-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">{cartCount}</span>
          </Button>
          
          <Button className="hidden md:flex bg-coffee-500 hover:bg-coffee-600" asChild>
            <Link to="/shop">Order Now</Link>
          </Button>
          
          <Button 
            variant="ghost" 
            size="icon" 
            className="md:hidden" 
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </Button>
        </div>
      </div>
      
      {/* Mobile menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-background border-b">
          <nav className="flex flex-col py-4 px-6 gap-4">
            <Link 
              to="/" 
              className={`py-2 text-sm font-medium transition-colors ${isActive('/') ? 'text-coffee-600 font-bold' : 'hover:text-coffee-600'}`}
              onClick={() => setMobileMenuOpen(false)}
            >
              Home
            </Link>
            <Link 
              to="/shop" 
              className={`py-2 text-sm font-medium transition-colors ${isActive('/shop') ? 'text-coffee-600 font-bold' : 'hover:text-coffee-600'}`}
              onClick={() => setMobileMenuOpen(false)}
            >
              Shop
            </Link>
            <Link 
              to="/locations" 
              className={`py-2 text-sm font-medium transition-colors ${isActive('/locations') ? 'text-coffee-600 font-bold' : 'hover:text-coffee-600'}`}
              onClick={() => setMobileMenuOpen(false)}
            >
              Locations
            </Link>
            <Link 
              to="/about" 
              className={`py-2 text-sm font-medium transition-colors ${isActive('/about') ? 'text-coffee-600 font-bold' : 'hover:text-coffee-600'}`}
              onClick={() => setMobileMenuOpen(false)}
            >
              About
            </Link>
            <Button 
              className="w-full bg-coffee-500 hover:bg-coffee-600 mt-2" 
              onClick={() => setMobileMenuOpen(false)}
              asChild
            >
              <Link to="/shop">Order Now</Link>
            </Button>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
