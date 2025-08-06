import { useState } from "react";
import { Mail, CheckCircle, TrendingUp, Star, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const Newsletter = () => {
  const [email, setEmail] = useState("");
  const [isSubscribed, setIsSubscribed] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setIsSubscribed(true);
      // Here you would integrate with your email service
      setTimeout(() => {
        setIsSubscribed(false);
        setEmail("");
      }, 3000);
    }
  };

  return (
    <section className="py-20 bg-card-gradient border-y border-border">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center space-y-6 mb-12">
            <div className="w-16 h-16 bg-tech-gradient rounded-2xl flex items-center justify-center mx-auto">
              <Mail className="w-8 h-8 text-white" />
            </div>
            
            <h2 className="text-3xl lg:text-4xl font-bold">
              Fique por Dentro das
              <span className="bg-tech-gradient bg-clip-text text-transparent"> Novidades</span>
            </h2>
            
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Receba reviews exclusivos, ofertas imperdíveis e lançamentos tech 
              diretamente no seu email. Sem spam, apenas conteúdo relevante.
            </p>
          </div>

          {/* Benefits */}
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            <div className="text-center space-y-3">
              <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mx-auto">
                <TrendingUp className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-bold">Reviews Exclusivos</h3>
              <p className="text-sm text-muted-foreground">
                Análises em primeira mão dos últimos lançamentos
              </p>
            </div>
            
            <div className="text-center space-y-3">
              <div className="w-12 h-12 bg-secondary/10 rounded-xl flex items-center justify-center mx-auto">
                <Star className="w-6 h-6 text-secondary" />
              </div>
              <h3 className="font-bold">Ofertas Premium</h3>
              <p className="text-sm text-muted-foreground">
                Descontos exclusivos e cupons especiais
              </p>
            </div>
            
            <div className="text-center space-y-3">
              <div className="w-12 h-12 bg-accent/10 rounded-xl flex items-center justify-center mx-auto">
                <Users className="w-6 h-6 text-accent" />
              </div>
              <h3 className="font-bold">Comunidade VIP</h3>
              <p className="text-sm text-muted-foreground">
                Acesso antecipado a conteúdos e eventos
              </p>
            </div>
          </div>

          {/* Newsletter Form */}
          <div className="bg-background border border-border rounded-2xl p-8 shadow-glow-blue">
            {!isSubscribed ? (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="flex flex-col sm:flex-row gap-4">
                  <div className="flex-1">
                    <Input
                      type="email"
                      placeholder="Seu melhor email..."
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="h-12 bg-card border-border text-base"
                      required
                    />
                  </div>
                  <Button 
                    type="submit" 
                    size="lg" 
                    className="bg-tech-gradient hover:opacity-90 transition-opacity px-8"
                  >
                    Assinar Newsletter
                  </Button>
                </div>
                
                <div className="flex items-center justify-center space-x-6 text-sm text-muted-foreground">
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-accent" />
                    <span>Gratuito</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-accent" />
                    <span>Sem spam</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-accent" />
                    <span>Cancelar a qualquer momento</span>
                  </div>
                </div>
              </form>
            ) : (
              <div className="text-center space-y-4">
                <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto">
                  <CheckCircle className="w-8 h-8 text-accent" />
                </div>
                <h3 className="text-xl font-bold text-accent">Obrigado!</h3>
                <p className="text-muted-foreground">
                  Você foi inscrito com sucesso. Verifique seu email para confirmar a assinatura.
                </p>
              </div>
            )}
          </div>

          {/* Social Proof */}
          <div className="text-center mt-8">
            <p className="text-sm text-muted-foreground">
              Junte-se a mais de <span className="font-bold text-foreground">50.000 tech enthusiasts</span> que já recebem nossa newsletter
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;