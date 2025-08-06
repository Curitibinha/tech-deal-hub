import { ShoppingCart, Star, TrendingUp, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const products = [
  {
    id: 1,
    name: "iPhone 15 Pro Max",
    brand: "Apple",
    price: 8999,
    originalPrice: 9999,
    rating: 4.8,
    reviews: 234,
    image: "📱",
    category: "Smartphone",
    highlights: ["Chip A17 Pro", "Câmera 48MP", "Titânio"],
    inStock: true,
    trending: true
  },
  {
    id: 2,
    name: "RTX 4080 Super",
    brand: "NVIDIA",
    price: 6499,
    originalPrice: 7299,
    rating: 4.9,
    reviews: 156,
    image: "🎮",
    category: "Placa de Vídeo",
    highlights: ["DLSS 3", "16GB GDDR6X", "4K Gaming"],
    inStock: true,
    trending: false
  },
  {
    id: 3,
    name: "MacBook Pro M3",
    brand: "Apple",
    price: 12999,
    originalPrice: 14499,
    rating: 4.7,
    reviews: 89,
    image: "💻",
    category: "Notebook",
    highlights: ["Chip M3 Pro", "18GB RAM", "512GB SSD"],
    inStock: false,
    trending: true
  },
  {
    id: 4,
    name: "Samsung Galaxy S24 Ultra",
    brand: "Samsung",
    price: 7999,
    originalPrice: 8999,
    rating: 4.6,
    reviews: 312,
    image: "📱",
    category: "Smartphone",
    highlights: ["S Pen", "200MP", "12GB RAM"],
    inStock: true,
    trending: false
  }
];

const ProductShowcase = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold">
            Produtos em
            <span className="bg-tech-gradient bg-clip-text text-transparent"> Destaque</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            As melhores ofertas e lançamentos do mercado tech com análises exclusivas
          </p>
        </div>

        {/* Products Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((product) => (
            <div
              key={product.id}
              className="group bg-card border border-border rounded-2xl overflow-hidden hover:border-primary/30 hover:shadow-glow-blue transition-all duration-300"
            >
              {/* Product Image */}
              <div className="relative h-48 bg-muted flex items-center justify-center">
                <span className="text-4xl">{product.image}</span>
                
                {/* Badges */}
                <div className="absolute top-3 left-3 flex flex-col gap-2">
                  {product.trending && (
                    <Badge className="bg-accent hover:bg-accent text-xs">
                      <TrendingUp className="w-3 h-3 mr-1" />
                      Trending
                    </Badge>
                  )}
                  {!product.inStock && (
                    <Badge variant="destructive" className="text-xs">
                      Esgotado
                    </Badge>
                  )}
                </div>

                {/* Discount */}
                {product.originalPrice > product.price && (
                  <Badge className="absolute top-3 right-3 bg-secondary hover:bg-secondary text-xs">
                    -{Math.round((1 - product.price / product.originalPrice) * 100)}%
                  </Badge>
                )}
              </div>

              {/* Product Info */}
              <div className="p-4 space-y-3">
                {/* Category & Brand */}
                <div className="flex items-center justify-between text-xs text-muted-foreground">
                  <span>{product.category}</span>
                  <span>{product.brand}</span>
                </div>

                {/* Name */}
                <h3 className="font-bold text-sm leading-tight group-hover:text-primary transition-colors">
                  {product.name}
                </h3>

                {/* Highlights */}
                <div className="flex flex-wrap gap-1">
                  {product.highlights.slice(0, 2).map((highlight, index) => (
                    <Badge key={index} variant="outline" className="text-xs py-0">
                      {highlight}
                    </Badge>
                  ))}
                </div>

                {/* Rating */}
                <div className="flex items-center space-x-2">
                  <div className="flex items-center space-x-1">
                    <Star className="w-3 h-3 fill-accent text-accent" />
                    <span className="text-sm font-medium">{product.rating}</span>
                  </div>
                  <span className="text-xs text-muted-foreground">
                    ({product.reviews} avaliações)
                  </span>
                </div>

                {/* Price */}
                <div className="space-y-1">
                  <div className="flex items-center space-x-2">
                    <span className="text-lg font-bold text-accent">
                      R$ {product.price.toLocaleString()}
                    </span>
                    {product.originalPrice > product.price && (
                      <span className="text-sm text-muted-foreground line-through">
                        R$ {product.originalPrice.toLocaleString()}
                      </span>
                    )}
                  </div>
                  <p className="text-xs text-muted-foreground">ou 12x sem juros</p>
                </div>

                {/* Actions */}
                <div className="space-y-2">
                  <Button 
                    className={`w-full ${product.inStock ? 'bg-tech-gradient hover:opacity-90' : ''}`}
                    disabled={!product.inStock}
                    size="sm"
                  >
                    {product.inStock ? (
                      <>
                        <ShoppingCart className="w-4 h-4 mr-2" />
                        Ver Ofertas
                      </>
                    ) : (
                      'Produto Esgotado'
                    )}
                  </Button>
                  
                  <Button variant="ghost" size="sm" className="w-full text-primary hover:text-primary">
                    <ExternalLink className="w-4 h-4 mr-2" />
                    Ver Review
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View More */}
        <div className="text-center mt-12">
          <Button size="lg" variant="outline" className="border-border hover:bg-card">
            Ver Mais Produtos
          </Button>
        </div>

        {/* AdSense Placeholder */}
        <div className="mt-16">
          <div className="bg-muted/50 border-2 border-dashed border-muted-foreground/20 rounded-xl p-8 text-center">
            <p className="text-muted-foreground text-sm">
              📊 Espaço reservado para Google AdSense - Banner 728x90
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductShowcase;