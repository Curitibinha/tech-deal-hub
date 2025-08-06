import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import CategoriesGrid from "@/components/CategoriesGrid";
import FeaturedPosts from "@/components/FeaturedPosts";
import ProductShowcase from "@/components/ProductShowcase";
import Newsletter from "@/components/Newsletter";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <HeroSection />
      <CategoriesGrid />
      <FeaturedPosts />
      <ProductShowcase />
      <Newsletter />
      <Footer />
    </div>
  );
};

export default Index;
