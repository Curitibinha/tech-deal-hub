import { useState } from "react";
import { Search, Filter, Grid, List, Star, ShoppingCart } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const smartphones = [
  {
    id: 1,
    name: "iPhone 15 Pro Max",
    brand: "Apple",
    price: 8999,
    originalPrice: 9999,
    rating: 4.8,
    reviews: 234,
    image: "📱",
    specs: ["A17 Pro", "8GB RAM", "256GB", "48MP"],
    highlights: ["Titânio", "USB-C", "Action Button"],
    inStock: true,
    trending: true
  },
  {
    id: 2,
    name: "Galaxy S24 Ultra",
    brand: "Samsung",
    price: 7999,
    originalPrice: 8999,
    rating: 4.6,
    reviews: 312,
    image: "📱",
    specs: ["Snapdragon 8 Gen 3", "12GB RAM", "256GB", "200MP"],
    highlights: ["S Pen", "AI Features", "Titanium"],
    inStock: true,
    trending: true
  },
  {
    id: 3,
    name: "Pixel 8 Pro",
    brand: "Google",
    price: 5499,
    originalPrice: 6299,
    rating: 4.5,
    reviews: 156,
    image: "📱",
    specs: ["Tensor G3", "12GB RAM", "128GB", "50MP"],
    highlights: ["Pure Android", "AI Camera", "7 Years Updates"],
    inStock: true,
    trending: false
  },
  {
    id: 4,
    name: "Xiaomi 14 Ultra",
    brand: "Xiaomi",
    price: 4999,
    originalPrice: 5799,
    rating: 4.4,
    reviews: 89,
    image: "📱",
    specs: ["Snapdragon 8 Gen 3", "16GB RAM", "512GB", "50MP"],
    highlights: ["Leica Camera", "Wireless Charging", "120W Fast Charge"],
    inStock: false,
    trending: false
  }
];

const Smartphones = () => {
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [searchTerm, setSearchTerm] = useState('');

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="bg-hero-gradient py-16">
        <div className="container mx-auto px-4">
          <div className="text-center space-y-4">
            <h1 className="text-4xl lg:text-5xl font-bold">
              Reviews de
              <span className="bg-tech-gradient bg-clip-text text-transparent"> Smartphones</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Análises completas dos melhores smartphones do mercado brasileiro
            </p>
            <div className="flex items-center justify-center space-x-8 text-sm">
              <div className="flex items-center space-x-2">
                <Star className="w-4 h-4 fill-accent text-accent" />
                <span>120+ Reviews</span>
              </div>
              <div className="flex items-center space-x-2">
                <span>📊</span>
                <span>Comparativos Detalhados</span>
              </div>
              <div className="flex items-center space-x-2">
                <span>💰</span>
                <span>Melhores Ofertas</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Filters & Controls */}
      <section className="py-8 border-b border-border">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row gap-4 items-center justify-between">
            {/* Search */}
            <div className="flex-1 max-w-md">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
                <Input
                  placeholder="Buscar smartphones..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10 bg-card border-border"
                />
              </div>
            </div>

            {/* Filters */}
            <div className="flex items-center space-x-4">
              <Select>
                <SelectTrigger className="w-40">
                  <SelectValue placeholder="Marca" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="apple">Apple</SelectItem>
                  <SelectItem value="samsung">Samsung</SelectItem>
                  <SelectItem value="google">Google</SelectItem>
                  <SelectItem value="xiaomi">Xiaomi</SelectItem>
                </SelectContent>
              </Select>

              <Select>
                <SelectTrigger className="w-40">
                  <SelectValue placeholder="Preço" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="0-2000">Até R$ 2.000</SelectItem>
                  <SelectItem value="2000-5000">R$ 2.000 - R$ 5.000</SelectItem>
                  <SelectItem value="5000-8000">R$ 5.000 - R$ 8.000</SelectItem>
                  <SelectItem value="8000+">Acima de R$ 8.000</SelectItem>
                </SelectContent>
              </Select>

              {/* View Mode Toggle */}
              <div className="flex border border-border rounded-md">
                <Button
                  variant={viewMode === 'grid' ? 'default' : 'ghost'}
                  size="sm"
                  onClick={() => setViewMode('grid')}
                  className="rounded-r-none"
                >
                  <Grid className="w-4 h-4" />
                </Button>
                <Button
                  variant={viewMode === 'list' ? 'default' : 'ghost'}
                  size="sm"
                  onClick={() => setViewMode('list')}
                  className="rounded-l-none"
                >
                  <List className="w-4 h-4" />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className={viewMode === 'grid' ? 'grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6' : 'space-y-6'}>
            {smartphones.map((phone) => (
              <div
                key={phone.id}
                className={`group bg-card border border-border rounded-2xl overflow-hidden hover:border-primary/30 hover:shadow-glow-blue transition-all duration-300 ${
                  viewMode === 'list' ? 'flex items-center p-4' : ''
                }`}
              >
                {/* Product Image */}
                <div className={`relative bg-muted flex items-center justify-center ${
                  viewMode === 'list' ? 'w-24 h-24 rounded-xl flex-shrink-0' : 'h-48'
                }`}>
                  <span className={viewMode === 'list' ? 'text-2xl' : 'text-4xl'}>
                    {phone.image}
                  </span>
                  
                  {/* Badges */}
                  {viewMode === 'grid' && (
                    <div className="absolute top-3 left-3 flex flex-col gap-2">
                      {phone.trending && (
                        <Badge className="bg-accent hover:bg-accent text-xs">
                          Trending
                        </Badge>
                      )}
                      {!phone.inStock && (
                        <Badge variant="destructive" className="text-xs">
                          Esgotado
                        </Badge>
                      )}
                    </div>
                  )}

                  {/* Discount */}
                  {viewMode === 'grid' && phone.originalPrice > phone.price && (
                    <Badge className="absolute top-3 right-3 bg-secondary hover:bg-secondary text-xs">
                      -{Math.round((1 - phone.price / phone.originalPrice) * 100)}%
                    </Badge>
                  )}
                </div>

                {/* Product Info */}
                <div className={`space-y-3 ${viewMode === 'list' ? 'flex-1 ml-4' : 'p-4'}`}>
                  {/* Brand & Name */}
                  <div>
                    <p className="text-xs text-muted-foreground">{phone.brand}</p>
                    <h3 className={`font-bold group-hover:text-primary transition-colors ${
                      viewMode === 'list' ? 'text-lg' : 'text-sm'
                    } leading-tight`}>
                      {phone.name}
                    </h3>
                  </div>

                  {/* Specs */}
                  <div className="flex flex-wrap gap-1">
                    {phone.specs.slice(0, viewMode === 'list' ? 4 : 2).map((spec, index) => (
                      <Badge key={index} variant="outline" className="text-xs py-0">
                        {spec}
                      </Badge>
                    ))}
                  </div>

                  {/* Rating */}
                  <div className="flex items-center space-x-2">
                    <div className="flex items-center space-x-1">
                      <Star className="w-3 h-3 fill-accent text-accent" />
                      <span className="text-sm font-medium">{phone.rating}</span>
                    </div>
                    <span className="text-xs text-muted-foreground">
                      ({phone.reviews} avaliações)
                    </span>
                  </div>

                  {/* Price & Actions */}
                  <div className={`${viewMode === 'list' ? 'flex items-center justify-between' : 'space-y-3'}`}>
                    <div className="space-y-1">
                      <div className="flex items-center space-x-2">
                        <span className="text-lg font-bold text-accent">
                          R$ {phone.price.toLocaleString()}
                        </span>
                        {phone.originalPrice > phone.price && (
                          <span className="text-sm text-muted-foreground line-through">
                            R$ {phone.originalPrice.toLocaleString()}
                          </span>
                        )}
                      </div>
                      <p className="text-xs text-muted-foreground">ou 12x sem juros</p>
                    </div>

                    <div className={`${viewMode === 'list' ? 'flex space-x-2' : 'space-y-2'}`}>
                      <Button 
                        className={`${phone.inStock ? 'bg-tech-gradient hover:opacity-90' : ''} ${
                          viewMode === 'list' ? '' : 'w-full'
                        }`}
                        disabled={!phone.inStock}
                        size="sm"
                      >
                        {phone.inStock ? (
                          <>
                            <ShoppingCart className="w-4 h-4 mr-2" />
                            Ver Ofertas
                          </>
                        ) : (
                          'Esgotado'
                        )}
                      </Button>
                      
                      <Button 
                        variant="ghost" 
                        size="sm" 
                        className={`text-primary hover:text-primary ${
                          viewMode === 'list' ? '' : 'w-full'
                        }`}
                      >
                        Ver Review
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Load More */}
          <div className="text-center mt-12">
            <Button size="lg" variant="outline" className="border-border hover:bg-card">
              Carregar Mais Smartphones
            </Button>
          </div>
        </div>
      </section>

      {/* AdSense Banner */}
      <section className="py-8">
        <div className="container mx-auto px-4">
          <div className="bg-muted/50 border-2 border-dashed border-muted-foreground/20 rounded-xl p-8 text-center">
            <p className="text-muted-foreground text-sm">
              📊 Google AdSense - Banner 728x90
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Smartphones;