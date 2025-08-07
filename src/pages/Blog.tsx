
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import BlogGrid from "@/components/BlogGrid";
import BlogHero from "@/components/BlogHero";

const Blog = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <BlogHero />
      <BlogGrid />
      <Footer />
    </div>
  );
};

export default Blog;
