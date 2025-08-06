import { useState } from "react";
import { Search, Menu, X, ShoppingCart, User } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const categories = [
    "Smartphones",
    "Notebooks", 
    "Componentes PC",
    "Reviews",
    "Ofertas"
  ];

  return (
    <header className="sticky top-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="container mx-auto px-4">
        {/* Top Bar */}
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-tech-gradient rounded-md flex items-center justify-center">
              <span className="text-white font-bold text-sm">T</span>
            </div>
            <span className="text-xl font-bold bg-tech-gradient bg-clip-text text-transparent">
              TechBrasil
            </span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            {categories.map((category) => (
              <a
                key={category}
                href={`/${category.toLowerCase().replace(' ', '-')}`}
                className="text-foreground hover:text-primary transition-colors duration-200 font-medium"
              >
                {category}
              </a>
            ))}
          </nav>

          {/* Search & Actions */}
          <div className="flex items-center space-x-4">
            {/* Search */}
            <div className="hidden md:flex items-center relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
              <Input
                placeholder="Buscar produtos, reviews..."
                className="pl-10 w-64 bg-card border-border"
              />
            </div>

            {/* Action Buttons */}
            <Button variant="ghost" size="icon" className="hidden sm:flex">
              <ShoppingCart className="w-5 h-5" />
            </Button>
            <Button variant="ghost" size="icon" className="hidden sm:flex">
              <User className="w-5 h-5" />
            </Button>

            {/* Mobile Menu Toggle */}
            <Button
              variant="ghost"
              size="icon"
              className="lg:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden py-4 border-t border-border">
            {/* Mobile Search */}
            <div className="flex items-center relative mb-4">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
              <Input
                placeholder="Buscar produtos, reviews..."
                className="pl-10 w-full bg-card border-border"
              />
            </div>

            {/* Mobile Menu Items */}
            <nav className="space-y-2">
              {categories.map((category) => (
                <a
                  key={category}
                  href={`/${category.toLowerCase().replace(' ', '-')}`}
                  className="block py-2 text-foreground hover:text-primary transition-colors duration-200 font-medium"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {category}
                </a>
              ))}
            </nav>

            {/* Mobile Action Buttons */}
            <div className="flex items-center space-x-4 mt-4 pt-4 border-t border-border">
              <Button variant="ghost" size="sm" className="flex items-center space-x-2">
                <ShoppingCart className="w-4 h-4" />
                <span>Carrinho</span>
              </Button>
              <Button variant="ghost" size="sm" className="flex items-center space-x-2">
                <User className="w-4 h-4" />
                <span>Login</span>
              </Button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;