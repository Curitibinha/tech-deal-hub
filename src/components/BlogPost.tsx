import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Calendar, Clock, User, Share2, BookmarkPlus, ArrowRight } from "lucide-react";

interface BlogPostProps {
  post: {
    id: number;
    title: string;
    content: string;
    excerpt: string;
    category: string;
    author: string;
    date: string;
    readTime: string;
    image: string;
    rating?: number;
  };
}

const BlogPost = ({ post }: BlogPostProps) => {
  const [readProgress, setReadProgress] = useState(0);
  const [showCTA, setShowCTA] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const article = document.getElementById('article-content');
      if (article) {
        const scrollTop = window.scrollY;
        const scrollHeight = article.scrollHeight - window.innerHeight;
        const progress = (scrollTop / scrollHeight) * 100;
        setReadProgress(Math.min(progress, 100));
        
        // Show CTA after 20% of reading
        if (progress > 20 && !showCTA) {
          setShowCTA(true);
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [showCTA]);

  const relatedPosts = [
    {
      id: 1,
      title: "Samsung Galaxy S24 Ultra vs iPhone 15 Pro Max",
      excerpt: "Comparativo completo entre os principais flagships de 2024",
      image: "📱",
      category: "Comparativo"
    },
    {
      id: 2,
      title: "Melhores Notebooks para Trabalho em 2024",
      excerpt: "Nossa seleção dos laptops mais produtivos do ano",
      image: "💻",
      category: "Guia de Compra"
    },
    {
      id: 3,
      title: "RTX 4090 vs RTX 4080: Vale o Upgrade?",
      excerpt: "Análise detalhada das placas de vídeo mais poderosas",
      image: "🎮",
      category: "Hardware"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Fixed Top AdSense Banner */}
      <div className="sticky top-0 z-40 bg-background border-b border-border">
        <div className="container mx-auto px-4 py-2">
          <div className="bg-muted/30 rounded-lg p-4 text-center">
            <span className="text-sm text-muted-foreground">AdSense Banner 728x90</span>
          </div>
        </div>
        {/* Progress Bar */}
        <div className="h-1 bg-muted">
          <div 
            className="h-full bg-tech-gradient transition-all duration-300"
            style={{ width: `${readProgress}%` }}
          />
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        <div className="grid lg:grid-cols-4 gap-8">
          {/* Main Content */}
          <article className="lg:col-span-3 space-y-8">
            {/* Header */}
            <header className="space-y-4">
              <div className="flex items-center space-x-4 text-sm text-muted-foreground">
                <Badge>{post.category}</Badge>
                <div className="flex items-center space-x-1">
                  <Calendar className="w-4 h-4" />
                  <span>{new Date(post.date).toLocaleDateString('pt-BR')}</span>
                </div>
                <div className="flex items-center space-x-1">
                  <Clock className="w-4 h-4" />
                  <span>{post.readTime}</span>
                </div>
                <div className="flex items-center space-x-1">
                  <User className="w-4 h-4" />
                  <span>{post.author}</span>
                </div>
              </div>

              <h1 className="text-4xl lg:text-5xl font-bold leading-tight">
                {post.title}
              </h1>

              <p className="text-xl text-muted-foreground">
                {post.excerpt}
              </p>

              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  <Button variant="outline" size="sm">
                    <Share2 className="w-4 h-4 mr-2" />
                    Compartilhar
                  </Button>
                  <Button variant="outline" size="sm">
                    <BookmarkPlus className="w-4 h-4 mr-2" />
                    Salvar
                  </Button>
                </div>
              </div>
            </header>

            {/* Featured Image */}
            <div className="w-full h-96 bg-muted rounded-xl flex items-center justify-center">
              <span className="text-8xl">{post.image}</span>
            </div>

            {/* Article Content */}
            <div id="article-content" className="prose prose-lg max-w-none space-y-6">
              <div className="text-lg leading-relaxed space-y-6">
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                </p>
                
                <p>
                  Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                </p>

                {/* CTA after 20% */}
                {showCTA && (
                  <div className="my-8 p-6 bg-card-gradient rounded-xl border border-border text-center">
                    <h3 className="text-2xl font-bold mb-2">Gostando do conteúdo?</h3>
                    <p className="text-muted-foreground mb-4">
                      Continue lendo para descobrir nossa análise completa e veredito final!
                    </p>
                    <Button className="bg-tech-gradient hover:opacity-90">
                      Continuar Lendo
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </Button>
                  </div>
                )}

                <h2 className="text-3xl font-bold mt-8">Performance e Especificações</h2>
                
                <p>
                  Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.
                </p>

                <div className="bg-muted/50 rounded-lg p-6 my-6">
                  <h3 className="text-xl font-bold mb-3">Especificações Técnicas</h3>
                  <ul className="space-y-2">
                    <li>• Processador: Apple A17 Pro</li>
                    <li>• Memória: 8GB LPDDR5</li>
                    <li>• Armazenamento: 256GB/512GB/1TB</li>
                    <li>• Tela: 6.7" Super Retina XDR</li>
                    <li>• Câmera: 48MP + 12MP + 12MP</li>
                  </ul>
                </div>

                <p>
                  Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.
                </p>

                <h2 className="text-3xl font-bold mt-8">Veredito Final</h2>
                
                <p>
                  At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident.
                </p>

                {post.rating && (
                  <div className="bg-primary/10 rounded-lg p-6 text-center">
                    <h3 className="text-2xl font-bold mb-2">Nota Final</h3>
                    <div className="text-6xl font-bold text-primary mb-2">
                      {post.rating}/10
                    </div>
                    <p className="text-muted-foreground">Excelente escolha para entusiastas</p>
                  </div>
                )}
              </div>
            </div>
          </article>

          {/* Sidebar */}
          <aside className="lg:col-span-1 space-y-6">
            {/* Sticky Sidebar AdSense */}
            <div className="sticky top-24 space-y-6">
              <div className="bg-muted/30 rounded-lg p-4 text-center h-64 flex items-center justify-center">
                <span className="text-sm text-muted-foreground">AdSense<br/>300x250</span>
              </div>

              <div className="bg-muted/30 rounded-lg p-4 text-center h-64 flex items-center justify-center">
                <span className="text-sm text-muted-foreground">AdSense<br/>300x250</span>
              </div>
            </div>
          </aside>
        </div>

        {/* Related Posts Section */}
        <section className="mt-16 border-t border-border pt-16">
          <h2 className="text-3xl font-bold mb-8 text-center">
            Posts <span className="bg-tech-gradient bg-clip-text text-transparent">Relacionados</span>
          </h2>

          <div className="grid md:grid-cols-3 gap-6">
            {relatedPosts.map((relatedPost) => (
              <article
                key={relatedPost.id}
                className="bg-card border border-border rounded-xl overflow-hidden hover:shadow-glow-blue transition-all duration-300 group cursor-pointer"
              >
                <div className="h-48 bg-muted flex items-center justify-center">
                  <span className="text-4xl">{relatedPost.image}</span>
                </div>
                
                <div className="p-6 space-y-3">
                  <Badge variant="outline">{relatedPost.category}</Badge>
                  <h3 className="font-bold text-lg group-hover:text-primary transition-colors">
                    {relatedPost.title}
                  </h3>
                  <p className="text-muted-foreground text-sm">
                    {relatedPost.excerpt}
                  </p>
                  <Button variant="ghost" className="w-full justify-start p-0">
                    Ler mais
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                </div>
              </article>
            ))}
          </div>
        </section>
      </div>

      {/* Bottom Sticky AdSense */}
      <div className="sticky bottom-0 z-40 bg-background border-t border-border">
        <div className="container mx-auto px-4 py-2">
          <div className="bg-muted/30 rounded-lg p-4 text-center">
            <span className="text-sm text-muted-foreground">AdSense Bottom Banner 728x90</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogPost;