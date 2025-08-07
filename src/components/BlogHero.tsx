
import { Search, Filter } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";

const categories = [
  "Todos",
  "Reviews",
  "Comparativos", 
  "Guias",
  "Notícias",
  "Hardware",
  "Smartphones"
];

const BlogHero = () => {
  return (
    <section className="py-20 bg-card-gradient border-b border-border">
      <div className="container mx-auto px-4">
        <div className="text-center space-y-6 mb-12">
          <h1 className="text-4xl lg:text-6xl font-bold">
            Tech
            <span className="bg-tech-gradient bg-clip-text text-transparent"> Blog</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Reviews detalhados, comparativos exclusivos e as últimas novidades do mundo da tecnologia
          </p>
        </div>

        {/* Search and Filters */}
        <div className="max-w-4xl mx-auto space-y-6">
          {/* Search Bar */}
          <div className="relative">
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-muted-foreground" />
            <Input 
              placeholder="Buscar posts..."
              className="pl-12 h-14 text-lg bg-card border-border"
            />
          </div>

          {/* Category Filters */}
          <div className="flex flex-wrap gap-3 justify-center">
            {categories.map((category) => (
              <Badge
                key={category}
                variant={category === "Todos" ? "default" : "outline"}
                className="px-4 py-2 cursor-pointer hover:bg-primary/10 transition-colors"
              >
                {category}
              </Badge>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default BlogHero;
