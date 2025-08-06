import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Star, Clock, Zap, Flame } from "lucide-react";

const ofertas = [
  {
    id: 1,
    name: "iPhone 14 Pro 128GB",
    brand: "Apple",
    price: "R$ 6.299",
    originalPrice: "R$ 8.999",
    discount: 30,
    rating: 4.7,
    reviews: 234,
    image: "📱",
    category: "Smartphone",
    timeLeft: "2d 5h 30m",
    isFlashSale: true,
    savings: "R$ 2.700"
  },
  {
    id: 2,
    name: "RTX 4070 Ti Super",
    brand: "NVIDIA",
    price: "R$ 4.199",
    originalPrice: "R$ 5.299",
    discount: 21,
    rating: 4.8,
    reviews: 156,
    image: "🎮",
    category: "Placa de Vídeo",
    timeLeft: "1d 12h 45m",
    isFlashSale: false,
    savings: "R$ 1.100"
  },
  {
    id: 3,
    name: "MacBook Air M2 256GB",
    brand: "Apple",
    price: "R$ 8.999",
    originalPrice: "R$ 10.999",
    discount: 18,
    rating: 4.9,
    reviews: 189,
    image: "💻",
    category: "Notebook",
    timeLeft: "3d 8h 15m",
    isFlashSale: true,
    savings: "R$ 2.000"
  },
  {
    id: 4,
    name: "Samsung 49\" Odyssey G9",
    brand: "Samsung",
    price: "R$ 2.899",
    originalPrice: "R$ 3.899",
    discount: 26,
    rating: 4.6,
    reviews: 98,
    image: "🖥️",
    category: "Monitor",
    timeLeft: "5h 20m",
    isFlashSale: true,
    savings: "R$ 1.000"
  },
  {
    id: 5,
    name: "AirPods Pro 2ª Geração",
    brand: "Apple",
    price: "R$ 1.899",
    originalPrice: "R$ 2.499",
    discount: 24,
    rating: 4.8,
    reviews: 312,
    image: "🎧",
    category: "Periféricos",
    timeLeft: "1d 3h 45m",
    isFlashSale: false,
    savings: "R$ 600"
  }
];

const Ofertas = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("Todos");

  const categories = ["Todos", "Smartphone", "Notebook", "Placa de Vídeo", "Monitor", "Periféricos"];

  const filteredOfertas = ofertas.filter(oferta => {
    const matchesSearch = oferta.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         oferta.brand.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === "Todos" || oferta.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="container mx-auto px-4 py-8">
        {/* Header Section */}
        <div className="mb-8">
          <h1 className="text-4xl font-bold mb-4 flex items-center space-x-3">
            <Flame className="w-10 h-10 text-red-500" />
            <span className="bg-tech-gradient bg-clip-text text-transparent">Ofertas</span>
          </h1>
          <p className="text-xl text-muted-foreground">
            Aproveite as melhores promoções antes que acabem!
          </p>
        </div>

        {/* Flash Sales Banner */}
        <div className="bg-gradient-to-r from-red-500/20 to-orange-500/20 border border-red-500/30 rounded-lg p-6 mb-8">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <Zap className="w-8 h-8 text-yellow-500" />
              <div>
                <h2 className="text-2xl font-bold text-red-500">Flash Sale</h2>
                <p className="text-muted-foreground">Ofertas relâmpago com desconto extra!</p>
              </div>
            </div>
            <div className="text-right">
              <p className="text-sm text-muted-foreground">Termina em</p>
              <p className="text-2xl font-bold text-red-500">5h 20m</p>
            </div>
          </div>
        </div>

        {/* Filters */}
        <div className="bg-card border border-border rounded-lg p-6 mb-8">
          <div className="flex flex-col lg:flex-row gap-4 items-center justify-between">
            <div className="flex-1 w-full lg:max-w-md">
              <Input
                placeholder="Buscar ofertas..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full"
              />
            </div>
            
            <div className="flex flex-wrap gap-2">
              {categories.map((category) => (
                <Button
                  key={category}
                  variant={selectedCategory === category ? "default" : "outline"}
                  size="sm"
                  onClick={() => setSelectedCategory(category)}
                  className={selectedCategory === category ? "bg-tech-gradient" : ""}
                >
                  {category}
                </Button>
              ))}
            </div>
          </div>
        </div>

        {/* Offers Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredOfertas.map((oferta) => (
            <div
              key={oferta.id}
              className={`bg-card border rounded-xl overflow-hidden hover:shadow-glow-blue transition-all duration-300 group relative ${
                oferta.isFlashSale ? 'border-red-500/50 shadow-red-500/20' : 'border-border'
              }`}
            >
              {/* Flash Sale Badge */}
              {oferta.isFlashSale && (
                <div className="absolute top-4 left-4 z-10">
                  <Badge className="bg-red-500 hover:bg-red-500 text-white flex items-center space-x-1">
                    <Zap className="w-3 h-3" />
                    <span>Flash</span>
                  </Badge>
                </div>
              )}

              {/* Discount Badge */}
              <div className="absolute top-4 right-4 z-10">
                <Badge className="bg-green-500 hover:bg-green-500 text-white text-lg font-bold">
                  -{oferta.discount}%
                </Badge>
              </div>

              {/* Image */}
              <div className="relative h-48 bg-muted flex items-center justify-center">
                <div className="text-6xl">{oferta.image}</div>
              </div>

              {/* Content */}
              <div className="p-6 space-y-4">
                <div>
                  <Badge variant="outline" className="mb-2">
                    {oferta.category}
                  </Badge>
                  <h3 className="text-xl font-bold group-hover:text-primary transition-colors">
                    {oferta.name}
                  </h3>
                  <p className="text-muted-foreground">{oferta.brand}</p>
                </div>

                {/* Timer */}
                <div className="flex items-center space-x-2 text-red-500">
                  <Clock className="w-4 h-4" />
                  <span className="font-medium">Termina em: {oferta.timeLeft}</span>
                </div>

                {/* Rating */}
                <div className="flex items-center space-x-2">
                  <div className="flex items-center space-x-1">
                    <Star className="w-4 h-4 fill-accent text-accent" />
                    <span className="text-sm font-medium">{oferta.rating}</span>
                  </div>
                  <span className="text-sm text-muted-foreground">
                    ({oferta.reviews} reviews)
                  </span>
                </div>

                {/* Price */}
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="text-2xl font-bold text-primary">
                        {oferta.price}
                      </div>
                      <div className="text-sm text-muted-foreground line-through">
                        {oferta.originalPrice}
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="text-sm text-muted-foreground">Economize</div>
                      <div className="text-lg font-bold text-green-500">{oferta.savings}</div>
                    </div>
                  </div>
                  
                  <Button className="w-full bg-tech-gradient hover:opacity-90">
                    Aproveitar Oferta
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {filteredOfertas.length === 0 && (
          <div className="text-center py-12">
            <p className="text-xl text-muted-foreground">
              Nenhuma oferta encontrada com os filtros selecionados.
            </p>
          </div>
        )}
      </main>

      <Footer />
    </div>
  );
};

export default Ofertas;