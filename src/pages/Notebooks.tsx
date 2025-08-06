import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Star, Filter, Grid, List } from "lucide-react";

const notebooks = [
  {
    id: 1,
    name: "Dell XPS 13 Plus",
    brand: "Dell",
    price: "R$ 8.999",
    originalPrice: "R$ 9.999",
    rating: 4.5,
    reviews: 128,
    image: "💻",
    specs: ["Intel i7-1280P", "16GB RAM", "512GB SSD", "13.4\" OLED"],
    discount: 10,
    category: "Premium"
  },
  {
    id: 2,
    name: "MacBook Air M2",
    brand: "Apple",
    price: "R$ 12.999",
    originalPrice: "R$ 13.999",
    rating: 4.8,
    reviews: 256,
    image: "🍎",
    specs: ["Apple M2", "8GB RAM", "256GB SSD", "13.6\" Retina"],
    discount: 7,
    category: "Premium"
  },
  {
    id: 3,
    name: "Acer Nitro 5",
    brand: "Acer",
    price: "R$ 4.299",
    originalPrice: "R$ 4.799",
    rating: 4.2,
    reviews: 89,
    image: "🎮",
    specs: ["AMD Ryzen 5", "8GB RAM", "512GB SSD", "RTX 3050"],
    discount: 10,
    category: "Gamer"
  },
  {
    id: 4,
    name: "Lenovo ThinkPad E14",
    brand: "Lenovo",
    price: "R$ 3.499",
    originalPrice: "R$ 3.999",
    rating: 4.3,
    reviews: 156,
    image: "💼",
    specs: ["Intel i5-1235U", "8GB RAM", "256GB SSD", "14\" Full HD"],
    discount: 12,
    category: "Corporativo"
  }
];

const Notebooks = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("Todos");
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid");

  const categories = ["Todos", "Premium", "Gamer", "Corporativo", "Estudantil"];

  const filteredNotebooks = notebooks.filter(notebook => {
    const matchesSearch = notebook.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         notebook.brand.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === "Todos" || notebook.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="container mx-auto px-4 py-8">
        {/* Header Section */}
        <div className="mb-8">
          <h1 className="text-4xl font-bold mb-4">
            <span className="bg-tech-gradient bg-clip-text text-transparent">Notebooks</span>
          </h1>
          <p className="text-xl text-muted-foreground">
            Encontre o notebook perfeito para suas necessidades
          </p>
        </div>

        {/* Filters */}
        <div className="bg-card border border-border rounded-lg p-6 mb-8">
          <div className="flex flex-col lg:flex-row gap-4 items-center justify-between">
            <div className="flex-1 w-full lg:max-w-md">
              <Input
                placeholder="Buscar notebooks..."
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

            <div className="flex items-center gap-2">
              <Button
                variant={viewMode === "grid" ? "default" : "outline"}
                size="icon"
                onClick={() => setViewMode("grid")}
              >
                <Grid className="w-4 h-4" />
              </Button>
              <Button
                variant={viewMode === "list" ? "default" : "outline"}
                size="icon"
                onClick={() => setViewMode("list")}
              >
                <List className="w-4 h-4" />
              </Button>
            </div>
          </div>
        </div>

        {/* Products Grid */}
        <div className={`grid gap-6 ${viewMode === "grid" ? "md:grid-cols-2 lg:grid-cols-3" : "grid-cols-1"}`}>
          {filteredNotebooks.map((notebook) => (
            <div
              key={notebook.id}
              className="bg-card border border-border rounded-xl overflow-hidden hover:shadow-glow-blue transition-all duration-300 group"
            >
              {/* Image */}
              <div className="relative h-48 bg-muted flex items-center justify-center">
                <div className="text-6xl">{notebook.image}</div>
                {notebook.discount > 0 && (
                  <Badge className="absolute top-4 right-4 bg-accent hover:bg-accent">
                    -{notebook.discount}%
                  </Badge>
                )}
              </div>

              {/* Content */}
              <div className="p-6 space-y-4">
                <div>
                  <Badge variant="outline" className="mb-2">
                    {notebook.category}
                  </Badge>
                  <h3 className="text-xl font-bold group-hover:text-primary transition-colors">
                    {notebook.name}
                  </h3>
                  <p className="text-muted-foreground">{notebook.brand}</p>
                </div>

                {/* Specs */}
                <div className="space-y-1">
                  {notebook.specs.map((spec, index) => (
                    <p key={index} className="text-sm text-muted-foreground">
                      • {spec}
                    </p>
                  ))}
                </div>

                {/* Rating */}
                <div className="flex items-center space-x-2">
                  <div className="flex items-center space-x-1">
                    <Star className="w-4 h-4 fill-accent text-accent" />
                    <span className="text-sm font-medium">{notebook.rating}</span>
                  </div>
                  <span className="text-sm text-muted-foreground">
                    ({notebook.reviews} reviews)
                  </span>
                </div>

                {/* Price */}
                <div className="space-y-2">
                  <div className="flex items-center space-x-2">
                    <span className="text-2xl font-bold text-primary">
                      {notebook.price}
                    </span>
                    {notebook.originalPrice && (
                      <span className="text-sm text-muted-foreground line-through">
                        {notebook.originalPrice}
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

        {filteredNotebooks.length === 0 && (
          <div className="text-center py-12">
            <p className="text-xl text-muted-foreground">
              Nenhum notebook encontrado com os filtros selecionados.
            </p>
          </div>
        )}
      </main>

      <Footer />
    </div>
  );
};

export default Notebooks;