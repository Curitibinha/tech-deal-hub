import Header from "@/components/Header";
import Footer from "@/components/Footer";
import BlogPost from "@/components/BlogPost";

const BlogPostPage = () => {
  const samplePost = {
    id: 1,
    title: "iPhone 15 Pro Max: Análise Completa do Flagship da Apple",
    content: "",
    excerpt: "Depois de duas semanas intensas de testes, apresentamos nossa análise completa do iPhone 15 Pro Max. Descubra se vale a pena fazer o upgrade para o novo flagship da Apple.",
    category: "Review",
    author: "Carlos Tech",
    date: "2024-01-15",
    readTime: "12 min",
    image: "📱",
    rating: 9.2
  };

  return (
    <div>
      <Header />
      <BlogPost post={samplePost} />
      <Footer />
    </div>
  );
};

export default BlogPostPage;