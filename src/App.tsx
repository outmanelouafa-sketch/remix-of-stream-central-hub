import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import InstallationPage from "./pages/InstallationPage";
import ChannelListPage from "./pages/ChannelListPage";
import NewsletterPage from "./pages/NewsletterPage";
import BlogPage from "./pages/BlogPage";
import NotFound from "./pages/NotFound";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import WhatsAppButton from "./components/WhatsAppButton";

const queryClient = new QueryClient();

// Layout wrapper for sub-pages
const PageLayout = ({ children }: { children: React.ReactNode }) => (
  <div className="min-h-screen bg-background">
    <Navbar />
    <main>{children}</main>
    <Footer />
  </div>
);

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <WhatsAppButton />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route
            path="/installation"
            element={
              <PageLayout>
                <InstallationPage />
              </PageLayout>
            }
          />
          <Route
            path="/channels"
            element={
              <PageLayout>
                <ChannelListPage />
              </PageLayout>
            }
          />
          <Route
            path="/newsletter"
            element={
              <PageLayout>
                <NewsletterPage />
              </PageLayout>
            }
          />
          <Route
            path="/blog"
            element={
              <PageLayout>
                <BlogPage />
              </PageLayout>
            }
          />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
