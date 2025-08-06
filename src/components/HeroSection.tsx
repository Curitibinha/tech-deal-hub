import { Button } from "@/components/ui/button";
import { ArrowRight, Star, TrendingUp } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="relative min-h-[600px] flex items-center bg-hero-gradient overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-tech-gradient-subtle" />
      <div className="absolute top-20 left-1/4 w-72 h-72 bg-tech-blue/10 rounded-full blur-3xl" />
      <div className="absolute bottom-20 right-1/4 w-96 h-96 bg-tech-purple/10 rounded-full blur-3xl" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-8">
            {/* Badge */}
            <div className="inline-flex items-center space-x-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium border border-primary/20">
              <TrendingUp className="w-4 h-4" />
              <span>Reviews Exclusivos</span>
            </div>

            {/* Headline */}
            <div className="space-y-4">
              <h1 className="text-4xl lg:text-6xl font-bold leading-tight">
                As Melhores
                <span className="bg-tech-gradient bg-clip-text text-transparent"> Reviews</span>
                <br />
                de Tecnologia
              </h1>
              <p className="text-xl text-muted-foreground max-w-lg">
                Análises detalhadas, comparativos exclusivos e as melhores ofertas do mercado tech brasileiro.
              </p>
            </div>

            {/* Stats */}
            <div className="flex items-center space-x-8">
              <div className="text-center">
                <div className="text-2xl font-bold text-primary">500+</div>
                <div className="text-sm text-muted-foreground">Reviews</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-secondary">1M+</div>
                <div className="text-sm text-muted-foreground">Leitores</div>
              </div>
              <div className="text-center">
                <div className="flex items-center justify-center space-x-1">
                  <Star className="w-4 h-4 fill-accent text-accent" />
                  <span className="text-2xl font-bold text-accent">4.9</span>
                </div>
                <div className="text-sm text-muted-foreground">Avaliação</div>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="bg-tech-gradient hover:opacity-90 transition-opacity">
                Ver Reviews
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
              <Button variant="outline" size="lg" className="border-border hover:bg-card">
                Últimas Ofertas
              </Button>
            </div>
          </div>

          {/* Featured Product Card */}
          <div className="relative">
            <div className="bg-card-gradient p-8 rounded-2xl border border-border shadow-glow-blue">
              <div className="space-y-6">
                {/* Product Badge */}
                <div className="inline-flex items-center bg-accent/10 text-accent px-3 py-1 rounded-full text-sm font-medium">
                  Review em Destaque
                </div>

                {/* Product Image Placeholder */}
                <div className="w-full h-48 bg-muted rounded-xl flex items-center justify-center">
                  <div className="text-center space-y-2">
                    <div className="w-16 h-16 bg-tech-gradient rounded-xl mx-auto flex items-center justify-center">
                      <span className="text-white font-bold text-xl">📱</span>
                    </div>
                    <p className="text-muted-foreground text-sm">iPhone 15 Pro Max</p>
                  </div>
                </div>

                {/* Product Info */}
                <div className="space-y-4">
                  <h3 className="text-xl font-bold">iPhone 15 Pro Max</h3>
                  <p className="text-muted-foreground">
                    Nossa análise completa do mais novo flagship da Apple, com testes de performance, câmeras e bateria.
                  </p>
                  
                  {/* Rating */}
                  <div className="flex items-center space-x-2">
                    <div className="flex space-x-1">
                      {[1, 2, 3, 4, 5].map((star) => (
                        <Star key={star} className="w-4 h-4 fill-accent text-accent" />
                      ))}
                    </div>
                    <span className="text-sm font-medium">9.2/10</span>
                  </div>

                  {/* Price */}
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="text-2xl font-bold text-accent">R$ 8.999</div>
                      <div className="text-sm text-muted-foreground">Melhor preço encontrado</div>
                    </div>
                    <Button size="sm" variant="outline">
                      Ver Ofertas
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;