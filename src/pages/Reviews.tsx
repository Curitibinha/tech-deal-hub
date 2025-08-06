import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Star, Calendar, Clock, ArrowRight } from "lucide-react";

const reviews = [
  {
    id: 1,
    title: "iPhone 15 Pro Max: Vale a Pena o Upgrade?",
    excerpt: "Testamos por duas semanas o novo flagship da Apple com chip A17 Pro e câmera de 48MP. Descubra se justifica o preço premium.",
    category: "Smartphone",
    rating: 9.2,
    readTime: "12 min",
    date: "2024-01-15",
    image: "📱",
    pros: ["Performance excepcional", "Câmeras impressionantes", "Build quality premium"],
    cons: ["Preço elevado", "Bateria poderia ser melhor"],
    author: "Carlos Tech"
  },
  {
    id: 2,
    title: "RTX 4090 vs RTX 4080: Qual Escolher em 2024?",
    excerpt: "Comparativo completo entre as placas de vídeo mais poderosas da NVIDIA, incluindo benchmarks em 4K e análise de custo-benefício.",
    category: "Hardware",
    rating: 8.8,
    readTime: "15 min",
    date: "2024-01-12",
    image: "🎮",
    pros: ["Performance 4K superior", "Ray tracing excelente", "DLSS 3.0"],
    cons: ["Consumo energético alto", "Preço inacessível"],
    author: "Ana Hardware"
  },
  {
    id: 3,
    title: "MacBook Pro M3 Max: Revolução ou Evolução?",
    excerpt: "O novo chip M3 Max promete 40% mais performance. Testamos em aplicações profissionais e jogos para ver se cumpre a promessa.",
    category: "Notebook",
    rating: 9.5,
    readTime: "18 min",
    date: "2024-01-10",
    image: "💻",
    pros: ["Chip M3 Max impressionante", "Tela mini-LED fantástica", "Autonomia excepcional"],
    cons: ["Preço muito alto", "Poucas portas"],
    author: "Roberto Apple"
  },
  {
    id: 4,
    title: "Samsung Galaxy S24 Ultra: O Melhor Android de 2024?",
    excerpt: "Com S Pen integrada e IA generativa, o S24 Ultra quer reconquistar o throne Android. Será que consegue superar o iPhone?",
    category: "Smartphone",
    rating: 8.9,
    readTime: "14 min",
    date: "2024-01-08",
    image: "📱",
    pros: ["S Pen versátil", "Tela AMOLED incrível", "Câmeras zoom 10x"],
    cons: ["Software com bloatware", "Carregamento mais lento"],
    author: "Marina Mobile"
  }
];

const Reviews = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("Todos");

  const categories = ["Todos", "Smartphone", "Notebook", "Hardware", "Periféricos"];

  const filteredReviews = reviews.filter(review => {
    const matchesSearch = review.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         review.excerpt.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === "Todos" || review.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="container mx-auto px-4 py-8">
        {/* Header Section */}
        <div className="mb-8">
          <h1 className="text-4xl font-bold mb-4">
            <span className="bg-tech-gradient bg-clip-text text-transparent">Reviews</span>
          </h1>
          <p className="text-xl text-muted-foreground">
            Análises completas e imparciais dos produtos mais quentes do mercado
          </p>
        </div>

        {/* Filters */}
        <div className="bg-card border border-border rounded-lg p-6 mb-8">
          <div className="flex flex-col lg:flex-row gap-4 items-center justify-between">
            <div className="flex-1 w-full lg:max-w-md">
              <Input
                placeholder="Buscar reviews..."
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

        {/* Reviews Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {filteredReviews.map((review) => (
            <article
              key={review.id}
              className="bg-card border border-border rounded-xl overflow-hidden hover:shadow-glow-blue transition-all duration-300 group cursor-pointer"
            >
              {/* Image */}
              <div className="relative h-48 bg-muted flex items-center justify-center">
                <div className="text-6xl">{review.image}</div>
                <Badge className="absolute top-4 left-4 bg-primary hover:bg-primary">
                  {review.category}
                </Badge>
                <div className="absolute top-4 right-4 flex items-center space-x-1 bg-accent/90 rounded-full px-2 py-1">
                  <Star className="w-3 h-3 fill-white text-white" />
                  <span className="text-white text-sm font-medium">{review.rating}</span>
                </div>
              </div>

              {/* Content */}
              <div className="p-6 space-y-4">
                {/* Meta Info */}
                <div className="flex items-center space-x-4 text-sm text-muted-foreground">
                  <div className="flex items-center space-x-1">
                    <Calendar className="w-4 h-4" />
                    <span>{new Date(review.date).toLocaleDateString('pt-BR')}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Clock className="w-4 h-4" />
                    <span>{review.readTime}</span>
                  </div>
                  <span>Por {review.author}</span>
                </div>

                <h3 className="text-xl font-bold group-hover:text-primary transition-colors">
                  {review.title}
                </h3>

                <p className="text-muted-foreground line-clamp-3">
                  {review.excerpt}
                </p>

                {/* Pros and Cons */}
                <div className="grid md:grid-cols-2 gap-4 text-sm">
                  <div>
                    <h4 className="font-medium text-green-500 mb-2">👍 Prós</h4>
                    <ul className="space-y-1">
                      {review.pros.slice(0, 2).map((pro, index) => (
                        <li key={index} className="text-muted-foreground">• {pro}</li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-medium text-red-500 mb-2">👎 Contras</h4>
                    <ul className="space-y-1">
                      {review.cons.slice(0, 2).map((con, index) => (
                        <li key={index} className="text-muted-foreground">• {con}</li>
                      ))}
                    </ul>
                  </div>
                </div>

                <Button className="w-full bg-tech-gradient hover:opacity-90">
                  Ler Review Completo
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </div>
            </article>
          ))}
        </div>

        {filteredReviews.length === 0 && (
          <div className="text-center py-12">
            <p className="text-xl text-muted-foreground">
              Nenhum review encontrado com os filtros selecionados.
            </p>
          </div>
        )}
      </main>

      <Footer />
    </div>
  );
};

export default Reviews;