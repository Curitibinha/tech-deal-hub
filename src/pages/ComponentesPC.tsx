import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Star, Zap, Cpu, HardDrive } from "lucide-react";

const components = [
  {
    id: 1,
    name: "RTX 4080 Super",
    brand: "NVIDIA",
    price: "R$ 6.999",
    originalPrice: "R$ 7.499",
    rating: 4.7,
    reviews: 189,
    image: "🎮",
    specs: ["16GB GDDR6X", "10240 CUDA Cores", "320W TDP"],
    category: "Placa de Vídeo",
    icon: Zap
  },
  {
    id: 2,
    name: "Ryzen 9 7900X",
    brand: "AMD",
    price: "R$ 2.899",
    originalPrice: "R$ 3.199",
    rating: 4.6,
    reviews: 145,
    image: "⚡",
    specs: ["12 Cores", "24 Threads", "5.6GHz Max"],
    category: "Processador",
    icon: Cpu
  },
  {
    id: 3,
    name: "Samsung 980 PRO 2TB",
    brand: "Samsung",
    price: "R$ 899",
    originalPrice: "R$ 1.099",
    rating: 4.8,
    reviews: 256,
    image: "💾",
    specs: ["NVMe M.2", "7000MB/s Read", "6900MB/s Write"],
    category: "Armazenamento",
    icon: HardDrive
  },
  {
    id: 4,
    name: "Corsair Vengeance 32GB",
    brand: "Corsair",
    price: "R$ 789",
    originalPrice: "R$ 899",
    rating: 4.5,
    reviews: 98,
    image: "🧠",
    specs: ["DDR5-5600", "2x16GB", "CL36"],
    category: "Memória RAM",
    icon: Cpu
  }
];

const ComponentesPC = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("Todos");

  const categories = ["Todos", "Placa de Vídeo", "Processador", "Memória RAM", "Armazenamento", "Placa-Mãe"];

  const filteredComponents = components.filter(component => {
    const matchesSearch = component.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         component.brand.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === "Todos" || component.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="container mx-auto px-4 py-8">
        {/* Header Section */}
        <div className="mb-8">
          <h1 className="text-4xl font-bold mb-4">
            <span className="bg-tech-gradient bg-clip-text text-transparent">Componentes PC</span>
          </h1>
          <p className="text-xl text-muted-foreground">
            Monte seu PC dos sonhos com os melhores componentes
          </p>
        </div>

        {/* Filters */}
        <div className="bg-card border border-border rounded-lg p-6 mb-8">
          <div className="flex flex-col lg:flex-row gap-4 items-center justify-between">
            <div className="flex-1 w-full lg:max-w-md">
              <Input
                placeholder="Buscar componentes..."
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

        {/* Products Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredComponents.map((component) => (
            <div
              key={component.id}
              className="bg-card border border-border rounded-xl overflow-hidden hover:shadow-glow-purple transition-all duration-300 group"
            >
              {/* Image */}
              <div className="relative h-48 bg-muted flex items-center justify-center">
                <div className="text-6xl">{component.image}</div>
                <Badge className="absolute top-4 left-4 bg-primary hover:bg-primary">
                  {component.category}
                </Badge>
              </div>

              {/* Content */}
              <div className="p-6 space-y-4">
                <div>
                  <h3 className="text-xl font-bold group-hover:text-primary transition-colors">
                    {component.name}
                  </h3>
                  <p className="text-muted-foreground">{component.brand}</p>
                </div>

                {/* Specs */}
                <div className="space-y-1">
                  {component.specs.map((spec, index) => (
                    <p key={index} className="text-sm text-muted-foreground">
                      • {spec}
                    </p>
                  ))}
                </div>

                {/* Rating */}
                <div className="flex items-center space-x-2">
                  <div className="flex items-center space-x-1">
                    <Star className="w-4 h-4 fill-accent text-accent" />
                    <span className="text-sm font-medium">{component.rating}</span>
                  </div>
                  <span className="text-sm text-muted-foreground">
                    ({component.reviews} reviews)
                  </span>
                </div>

                {/* Price */}
                <div className="space-y-2">
                  <div className="flex items-center space-x-2">
                    <span className="text-2xl font-bold text-primary">
                      {component.price}
                    </span>
                    {component.originalPrice && (
                      <span className="text-sm text-muted-foreground line-through">
                        {component.originalPrice}
                      </span>
                    )}
                  </div>
                  
                  <Button className="w-full bg-tech-gradient hover:opacity-90">
                    Ver no Mercado Livre
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {filteredComponents.length === 0 && (
          <div className="text-center py-12">
            <p className="text-xl text-muted-foreground">
              Nenhum componente encontrado com os filtros selecionados.
            </p>
          </div>
        )}
      </main>

      <Footer />
    </div>
  );
};

export default ComponentesPC;