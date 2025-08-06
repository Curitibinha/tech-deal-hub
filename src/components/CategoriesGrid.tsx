import { Smartphone, Laptop, Monitor, Headphones, Camera, Gamepad2 } from "lucide-react";
import { Button } from "@/components/ui/button";

const categories = [
  {
    name: "Smartphones",
    icon: Smartphone,
    description: "Reviews e comparativos dos últimos lançamentos",
    count: "120+ Reviews",
    color: "tech-blue"
  },
  {
    name: "Notebooks",
    icon: Laptop,
    description: "Laptops para trabalho, games e estudos",
    count: "85+ Reviews",
    color: "tech-purple"
  },
  {
    name: "Componentes PC",
    icon: Monitor,
    description: "Placas de vídeo, processadores e mais",
    count: "200+ Reviews",
    color: "tech-green"
  },
  {
    name: "Periféricos",
    icon: Headphones,
    description: "Mouses, teclados, headsets e monitores",
    count: "150+ Reviews",
    color: "tech-blue"
  },
  {
    name: "Câmeras",
    icon: Camera,
    description: "DSLRs, mirrorless e action cams",
    count: "60+ Reviews",
    color: "tech-purple"
  },
  {
    name: "Gaming",
    icon: Gamepad2,
    description: "Consoles, jogos e acessórios gamer",
    count: "90+ Reviews",
    color: "tech-green"
  }
];

const CategoriesGrid = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold">
            Explore por
            <span className="bg-tech-gradient bg-clip-text text-transparent"> Categoria</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Encontre reviews detalhados e comparativos dos melhores produtos tech do mercado
          </p>
        </div>

        {/* Categories Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.map((category, index) => {
            const IconComponent = category.icon;
            return (
              <div
                key={category.name}
                className="group relative bg-card-gradient p-6 rounded-2xl border border-border hover:border-primary/30 transition-all duration-300 hover:shadow-glow-blue cursor-pointer"
              >
                {/* Icon */}
                <div className={`w-12 h-12 rounded-xl bg-${category.color}/10 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  <IconComponent className={`w-6 h-6 text-${category.color}`} />
                </div>

                {/* Content */}
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <h3 className="text-xl font-bold group-hover:text-primary transition-colors">
                      {category.name}
                    </h3>
                    <span className="text-xs text-muted-foreground bg-muted px-2 py-1 rounded-full">
                      {category.count}
                    </span>
                  </div>
                  
                  <p className="text-muted-foreground">
                    {category.description}
                  </p>

                  <Button 
                    variant="ghost" 
                    className="w-full justify-start p-0 h-auto text-primary hover:text-primary font-medium"
                  >
                    Explorar categoria →
                  </Button>
                </div>

                {/* Hover Effect */}
                <div className="absolute inset-0 bg-tech-gradient-subtle opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl" />
              </div>
            );
          })}
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <Button size="lg" variant="outline" className="border-border hover:bg-card">
            Ver Todas as Categorias
          </Button>
        </div>
      </div>
    </section>
  );
};

export default CategoriesGrid;