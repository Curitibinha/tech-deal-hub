import { Calendar, Clock, ArrowRight, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { useNavigate } from "react-router-dom";

const featuredPosts = [
  {
    id: 1,
    title: "iPhone 15 Pro Max vs Samsung Galaxy S24 Ultra: Qual é o melhor?",
    excerpt: "Comparativo completo entre os dois flagships mais poderosos do mercado, incluindo câmeras, performance e bateria.",
    category: "Comparativo",
    readTime: "8 min",
    date: "2024-01-15",
    rating: 9.2,
    image: "📱",
    featured: true
  },
  {
    id: 2,
    title: "RTX 4090 vs RTX 4080: Vale a pena o upgrade?",
    excerpt: "Testamos as placas de vídeo mais poderosas da NVIDIA em jogos 4K e aplicações profissionais.",
    category: "Hardware",
    readTime: "12 min",
    date: "2024-01-12",
    rating: 8.8,
    image: "🎮",
    featured: false
  },
  {
    id: 3,
    title: "MacBook Pro M3 Max: A revolução chegou?",
    excerpt: "Análise completa do novo chip M3 Max da Apple e seu impacto na performance de notebooks profissionais.",
    category: "Review",
    readTime: "10 min",
    date: "2024-01-10",
    rating: 9.5,
    image: "💻",
    featured: false
  },
  {
    id: 4,
    title: "Melhores Smartphones até R$ 2.000 em 2024",
    excerpt: "Nossa seleção dos celulares com melhor custo-benefício para diferentes necessidades e perfis de usuário.",
    category: "Guia de Compra",
    readTime: "6 min",
    date: "2024-01-08",
    rating: 8.5,
    image: "📋",
    featured: false
  }
];

const FeaturedPosts = () => {
  const navigate = useNavigate();
  const mainPost = featuredPosts[0];
  const secondaryPosts = featuredPosts.slice(1);

  const handleReadMore = (postId: number) => {
    navigate(`/post/${postId}`);
  };

  const handleViewAllPosts = () => {
    navigate('/blog');
  };

  return (
    <section className="py-20 bg-muted/20">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold">
            Últimas
            <span className="bg-tech-gradient bg-clip-text text-transparent"> Reviews</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Fique por dentro das análises mais recentes e comparativos exclusivos
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Featured Post */}
          <div className="lg:col-span-2">
            <article 
              className="bg-card-gradient rounded-2xl overflow-hidden border border-border shadow-glow-blue hover:shadow-glow-purple transition-all duration-300 group cursor-pointer"
              onClick={() => handleReadMore(mainPost.id)}
            >
              {/* Image */}
              <div className="relative h-64 bg-muted flex items-center justify-center">
                <div className="text-6xl">{mainPost.image}</div>
                <Badge className="absolute top-4 left-4 bg-accent hover:bg-accent">
                  {mainPost.category}
                </Badge>
                {mainPost.featured && (
                  <Badge className="absolute top-4 right-4 bg-primary hover:bg-primary">
                    Destaque
                  </Badge>
                )}
              </div>

              {/* Content */}
              <div className="p-6 space-y-4">
                <div className="flex items-center space-x-4 text-sm text-muted-foreground">
                  <div className="flex items-center space-x-1">
                    <Calendar className="w-4 h-4" />
                    <span>{new Date(mainPost.date).toLocaleDateString('pt-BR')}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Clock className="w-4 h-4" />
                    <span>{mainPost.readTime}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Star className="w-4 h-4 fill-accent text-accent" />
                    <span>{mainPost.rating}/10</span>
                  </div>
                </div>

                <h3 className="text-2xl font-bold group-hover:text-primary transition-colors">
                  {mainPost.title}
                </h3>

                <p className="text-muted-foreground">
                  {mainPost.excerpt}
                </p>

                <Button 
                  className="bg-tech-gradient hover:opacity-90 transition-opacity"
                  onClick={(e) => {
                    e.stopPropagation();
                    handleReadMore(mainPost.id);
                  }}
                >
                  Ler Review Completo
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </div>
            </article>
          </div>

          {/* Secondary Posts */}
          <div className="space-y-6">
            {secondaryPosts.map((post) => (
              <article
                key={post.id}
                className="bg-card border border-border rounded-xl p-4 hover:border-primary/30 transition-all duration-300 group cursor-pointer"
                onClick={() => handleReadMore(post.id)}
              >
                <div className="flex space-x-4">
                  {/* Image */}
                  <div className="w-16 h-16 bg-muted rounded-lg flex items-center justify-center flex-shrink-0">
                    <span className="text-2xl">{post.image}</span>
                  </div>

                  {/* Content */}
                  <div className="flex-1 space-y-2">
                    <Badge variant="outline" className="text-xs">
                      {post.category}
                    </Badge>
                    
                    <h4 className="font-bold text-sm leading-tight group-hover:text-primary transition-colors line-clamp-2">
                      {post.title}
                    </h4>

                    <div className="flex items-center space-x-3 text-xs text-muted-foreground">
                      <div className="flex items-center space-x-1">
                        <Calendar className="w-3 h-3" />
                        <span>{new Date(post.date).toLocaleDateString('pt-BR')}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Star className="w-3 h-3 fill-accent text-accent" />
                        <span>{post.rating}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </article>
            ))}

            {/* View All Button */}
            <Button 
              variant="outline" 
              className="w-full border-border hover:bg-card"
              onClick={handleViewAllPosts}
            >
              Ver Todos os Posts
              <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturedPosts;
