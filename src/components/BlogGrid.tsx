
import { Calendar, Clock, User, ArrowRight, Star, Eye, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";

const blogPosts = [
  {
    id: 1,
    title: "iPhone 15 Pro Max: Análise Completa do Flagship da Apple",
    excerpt: "Depois de duas semanas intensas de testes, apresentamos nossa análise completa do iPhone 15 Pro Max. Descubra se vale a pena fazer o upgrade.",
    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit...",
    category: "Review",
    author: "Carlos Tech",
    date: "2024-01-15",
    readTime: "12 min",
    image: "📱",
    rating: 9.2,
    views: 15420,
    comments: 89,
    featured: true
  },
  {
    id: 2,
    title: "Samsung Galaxy S24 Ultra vs iPhone 15 Pro Max",
    excerpt: "Comparativo completo entre os dois flagships mais poderosos do mercado em 2024.",
    content: "Análise detalhada comparando performance, câmeras e recursos...",
    category: "Comparativo",
    author: "Ana Silva",
    date: "2024-01-12",
    readTime: "15 min",
    image: "📱",
    rating: 8.8,
    views: 12350,
    comments: 67,
    featured: false
  },
  {
    id: 3,
    title: "RTX 4090 vs RTX 4080: Vale o Upgrade?",
    excerpt: "Testamos as placas de vídeo mais poderosas da NVIDIA em jogos 4K e aplicações profissionais.",
    content: "Performance em jogos AAA, ray tracing e consumo energético...",
    category: "Hardware",
    author: "Pedro Games",
    date: "2024-01-10",
    readTime: "10 min",
    image: "🎮",
    rating: 9.0,
    views: 8970,
    comments: 45,
    featured: false
  },
  {
    id: 4,
    title: "MacBook Pro M3 Max: A Revolução Chegou?",
    excerpt: "Análise completa do novo chip M3 Max da Apple e seu impacto na performance de notebooks profissionais.",
    content: "Testes de performance, eficiência energética e produtividade...",
    category: "Review",
    author: "Lucas Pro",
    date: "2024-01-08",
    readTime: "14 min",
    image: "💻",
    rating: 9.5,
    views: 11200,
    comments: 78,
    featured: false
  },
  {
    id: 5,
    title: "Melhores Smartphones até R$ 2.000 em 2024",
    excerpt: "Nossa seleção dos celulares com melhor custo-benefício para diferentes necessidades.",
    content: "Guia completo com recomendações para cada perfil de usuário...",
    category: "Guia de Compra",
    author: "Maria Tech",
    date: "2024-01-05",
    readTime: "8 min",
    image: "📋",
    rating: 8.5,
    views: 9800,
    comments: 34,
    featured: false
  },
  {
    id: 6,
    title: "PlayStation 5 Pro: Primeiras Impressões",
    excerpt: "Testamos o novo console da Sony e suas melhorias em relação ao PS5 tradicional.",
    content: "Performance em jogos, ray tracing aprimorado e recursos exclusivos...",
    category: "Review",
    author: "Felipe Games",
    date: "2024-01-03",
    readTime: "11 min",
    image: "🎮",
    rating: 8.7,
    views: 13500,
    comments: 92,
    featured: false
  }
];

const BlogGrid = () => {
  const featuredPost = blogPosts.find(post => post.featured);
  const regularPosts = blogPosts.filter(post => !post.featured);

  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        {/* Featured Post */}
        {featuredPost && (
          <div className="mb-16">
            <h2 className="text-2xl font-bold mb-8 flex items-center">
              <Star className="w-6 h-6 mr-2 fill-primary text-primary" />
              Post em Destaque
            </h2>
            
            <Card className="overflow-hidden hover:shadow-glow-blue transition-all duration-300 group cursor-pointer">
              <div className="grid lg:grid-cols-2 gap-0">
                <div className="h-80 bg-muted flex items-center justify-center">
                  <span className="text-8xl">{featuredPost.image}</span>
                </div>
                
                <CardContent className="p-8 flex flex-col justify-center space-y-4">
                  <div className="flex items-center space-x-4 text-sm text-muted-foreground">
                    <Badge>{featuredPost.category}</Badge>
                    <div className="flex items-center space-x-1">
                      <Calendar className="w-4 h-4" />
                      <span>{new Date(featuredPost.date).toLocaleDateString('pt-BR')}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Clock className="w-4 h-4" />
                      <span>{featuredPost.readTime}</span>
                    </div>
                  </div>

                  <h3 className="text-2xl lg:text-3xl font-bold group-hover:text-primary transition-colors">
                    {featuredPost.title}
                  </h3>

                  <p className="text-muted-foreground text-lg">
                    {featuredPost.excerpt}
                  </p>

                  <div className="flex items-center justify-between pt-4">
                    <div className="flex items-center space-x-4 text-sm text-muted-foreground">
                      <div className="flex items-center space-x-1">
                        <User className="w-4 h-4" />
                        <span>{featuredPost.author}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Eye className="w-4 h-4" />
                        <span>{featuredPost.views.toLocaleString()}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <MessageCircle className="w-4 h-4" />
                        <span>{featuredPost.comments}</span>
                      </div>
                    </div>
                    
                    {featuredPost.rating && (
                      <div className="flex items-center space-x-1">
                        <Star className="w-4 h-4 fill-accent text-accent" />
                        <span className="font-bold">{featuredPost.rating}/10</span>
                      </div>
                    )}
                  </div>

                  <Button className="bg-tech-gradient hover:opacity-90 w-fit">
                    Ler Post Completo
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                </CardContent>
              </div>
            </Card>
          </div>
        )}

        {/* Regular Posts Grid */}
        <div className="space-y-8">
          <h2 className="text-2xl font-bold">Todos os Posts</h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {regularPosts.map((post) => (
              <Card
                key={post.id}
                className="overflow-hidden hover:shadow-glow-blue transition-all duration-300 group cursor-pointer"
              >
                <div className="h-48 bg-muted flex items-center justify-center">
                  <span className="text-4xl">{post.image}</span>
                </div>
                
                <CardContent className="p-6 space-y-4">
                  <div className="flex items-center justify-between">
                    <Badge variant="outline">{post.category}</Badge>
                    {post.rating && (
                      <div className="flex items-center space-x-1 text-sm">
                        <Star className="w-3 h-3 fill-accent text-accent" />
                        <span>{post.rating}</span>
                      </div>
                    )}
                  </div>

                  <h3 className="font-bold text-lg group-hover:text-primary transition-colors line-clamp-2">
                    {post.title}
                  </h3>

                  <p className="text-muted-foreground text-sm line-clamp-3">
                    {post.excerpt}
                  </p>

                  <div className="flex items-center space-x-4 text-xs text-muted-foreground">
                    <div className="flex items-center space-x-1">
                      <User className="w-3 h-3" />
                      <span>{post.author}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Clock className="w-3 h-3" />
                      <span>{post.readTime}</span>
                    </div>
                  </div>

                  <div className="flex items-center justify-between text-xs text-muted-foreground">
                    <div className="flex items-center space-x-3">
                      <div className="flex items-center space-x-1">
                        <Eye className="w-3 h-3" />
                        <span>{post.views.toLocaleString()}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <MessageCircle className="w-3 h-3" />
                        <span>{post.comments}</span>
                      </div>
                    </div>
                    <span>{new Date(post.date).toLocaleDateString('pt-BR')}</span>
                  </div>

                  <Button variant="ghost" className="w-full justify-start p-0 hover:text-primary">
                    Ler mais
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Load More */}
        <div className="text-center mt-12">
          <Button variant="outline" size="lg">
            Carregar Mais Posts
          </Button>
        </div>
      </div>
    </section>
  );
};

export default BlogGrid;
