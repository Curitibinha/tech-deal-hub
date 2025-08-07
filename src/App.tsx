import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { AuthProvider } from "@/hooks/useAuth";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Smartphones from "./pages/Smartphones";
import Notebooks from "./pages/Notebooks";
import ComponentesPC from "./pages/ComponentesPC";
import Reviews from "./pages/Reviews";
import Ofertas from "./pages/Ofertas";
import Cart from "./pages/Cart";
import BlogPostPage from "./pages/BlogPostPage";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <AuthProvider>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/smartphones" element={<Smartphones />} />
          <Route path="/notebooks" element={<Notebooks />} />
          <Route path="/componentes-pc" element={<ComponentesPC />} />
          <Route path="/reviews" element={<Reviews />} />
          <Route path="/ofertas" element={<Ofertas />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/post/:id" element={<BlogPostPage />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
      </TooltipProvider>
    </AuthProvider>
  </QueryClientProvider>
);

export default App;
