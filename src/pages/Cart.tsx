import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Trash2, Plus, Minus, ShoppingBag, ArrowRight } from "lucide-react";

interface CartItem {
  id: number;
  name: string;
  brand: string;
  price: number;
  originalPrice?: number;
  image: string;
  quantity: number;
  category: string;
}

const initialCartItems: CartItem[] = [
  {
    id: 1,
    name: "iPhone 15 Pro Max",
    brand: "Apple",
    price: 8999,
    originalPrice: 9999,
    image: "📱",
    quantity: 1,
    category: "Smartphone"
  },
  {
    id: 2,
    name: "RTX 4080 Super",
    brand: "NVIDIA",
    price: 6999,
    originalPrice: 7499,
    image: "🎮",
    quantity: 1,
    category: "Placa de Vídeo"
  }
];

const Cart = () => {
  const [cartItems, setCartItems] = useState<CartItem[]>(initialCartItems);

  const updateQuantity = (id: number, newQuantity: number) => {
    if (newQuantity <= 0) {
      removeItem(id);
      return;
    }
    setCartItems(items =>
      items.map(item =>
        item.id === id ? { ...item, quantity: newQuantity } : item
      )
    );
  };

  const removeItem = (id: number) => {
    setCartItems(items => items.filter(item => item.id !== id));
  };

  const subtotal = cartItems.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  const originalTotal = cartItems.reduce((sum, item) => sum + ((item.originalPrice || item.price) * item.quantity), 0);
  const totalSavings = originalTotal - subtotal;

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-4xl font-bold mb-4 flex items-center space-x-3">
            <ShoppingBag className="w-10 h-10 text-primary" />
            <span className="bg-tech-gradient bg-clip-text text-transparent">Carrinho</span>
          </h1>
          <p className="text-xl text-muted-foreground">
            {cartItems.length} {cartItems.length === 1 ? 'item' : 'itens'} no seu carrinho
          </p>
        </div>

        {cartItems.length === 0 ? (
          <div className="text-center py-16">
            <ShoppingBag className="w-24 h-24 text-muted-foreground mx-auto mb-4" />
            <h2 className="text-2xl font-bold mb-2">Seu carrinho está vazio</h2>
            <p className="text-muted-foreground mb-8">
              Adicione alguns produtos incríveis para começar!
            </p>
            <Button className="bg-tech-gradient hover:opacity-90">
              Continuar Comprando
            </Button>
          </div>
        ) : (
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Cart Items */}
            <div className="lg:col-span-2 space-y-4">
              {cartItems.map((item) => (
                <div
                  key={item.id}
                  className="bg-card border border-border rounded-lg p-6 hover:shadow-glow-blue transition-all duration-300"
                >
                  <div className="flex items-center space-x-4">
                    {/* Product Image */}
                    <div className="w-20 h-20 bg-muted rounded-lg flex items-center justify-center flex-shrink-0">
                      <span className="text-3xl">{item.image}</span>
                    </div>

                    {/* Product Info */}
                    <div className="flex-1 space-y-2">
                      <div>
                        <Badge variant="outline" className="mb-1">
                          {item.category}
                        </Badge>
                        <h3 className="font-bold text-lg">{item.name}</h3>
                        <p className="text-muted-foreground">{item.brand}</p>
                      </div>
                      
                      <div className="flex items-center space-x-2">
                        <span className="text-xl font-bold text-primary">
                          R$ {item.price.toLocaleString('pt-BR')}
                        </span>
                        {item.originalPrice && (
                          <span className="text-sm text-muted-foreground line-through">
                            R$ {item.originalPrice.toLocaleString('pt-BR')}
                          </span>
                        )}
                      </div>
                    </div>

                    {/* Quantity Controls */}
                    <div className="flex items-center space-x-3">
                      <Button
                        variant="outline"
                        size="icon"
                        onClick={() => updateQuantity(item.id, item.quantity - 1)}
                      >
                        <Minus className="w-4 h-4" />
                      </Button>
                      
                      <span className="w-8 text-center font-medium">
                        {item.quantity}
                      </span>
                      
                      <Button
                        variant="outline"
                        size="icon"
                        onClick={() => updateQuantity(item.id, item.quantity + 1)}
                      >
                        <Plus className="w-4 h-4" />
                      </Button>
                    </div>

                    {/* Remove Button */}
                    <Button
                      variant="ghost"
                      size="icon"
                      onClick={() => removeItem(item.id)}
                      className="text-destructive hover:text-destructive"
                    >
                      <Trash2 className="w-4 h-4" />
                    </Button>
                  </div>
                </div>
              ))}
            </div>

            {/* Order Summary */}
            <div className="lg:col-span-1">
              <div className="bg-card border border-border rounded-lg p-6 sticky top-24">
                <h2 className="text-xl font-bold mb-6">Resumo do Pedido</h2>
                
                <div className="space-y-4 mb-6">
                  <div className="flex justify-between">
                    <span>Subtotal ({cartItems.length} {cartItems.length === 1 ? 'item' : 'itens'})</span>
                    <span>R$ {subtotal.toLocaleString('pt-BR')}</span>
                  </div>
                  
                  {totalSavings > 0 && (
                    <div className="flex justify-between text-green-500">
                      <span>Economia Total</span>
                      <span>-R$ {totalSavings.toLocaleString('pt-BR')}</span>
                    </div>
                  )}
                  
                  <div className="flex justify-between">
                    <span>Frete</span>
                    <span className="text-green-500">Grátis</span>
                  </div>
                  
                  <div className="border-t border-border pt-4">
                    <div className="flex justify-between text-xl font-bold">
                      <span>Total</span>
                      <span className="text-primary">
                        R$ {subtotal.toLocaleString('pt-BR')}
                      </span>
                    </div>
                  </div>
                </div>

                <div className="space-y-3">
                  <Button className="w-full bg-tech-gradient hover:opacity-90 text-lg py-6">
                    Finalizar Compra
                    <ArrowRight className="w-5 h-5 ml-2" />
                  </Button>
                  
                  <Button variant="outline" className="w-full">
                    Continuar Comprando
                  </Button>
                </div>

                {/* Security Info */}
                <div className="mt-6 p-4 bg-muted/50 rounded-lg">
                  <p className="text-sm text-muted-foreground text-center">
                    🔒 Pagamento 100% seguro<br />
                    Seus dados estão protegidos
                  </p>
                </div>
              </div>
            </div>
          </div>
        )}
      </main>

      <Footer />
    </div>
  );
};

export default Cart;