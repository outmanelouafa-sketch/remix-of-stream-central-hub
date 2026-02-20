import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import StreamingPartners from "@/components/StreamingPartners";
import WhyChooseUs from "@/components/WhyChooseUs";
import PricingSection from "@/components/PricingSection";
import ContentShowcase from "@/components/ContentShowcase";
import ContactSection from "@/components/ContactSection";
import NewsletterSection from "@/components/NewsletterSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        <HeroSection />
        <StreamingPartners />
        <WhyChooseUs />
        <ContentShowcase />
        <PricingSection />
        <ContactSection />
        <NewsletterSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
