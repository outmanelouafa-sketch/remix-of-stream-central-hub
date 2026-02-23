import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import StreamingPartners from "@/components/StreamingPartners";
import WhyChooseUs from "@/components/WhyChooseUs";
import PricingSection from "@/components/PricingSection";
import ContentShowcase from "@/components/ContentShowcase";
import SportsShowcase from "@/components/SportsShowcase";
import ContactSection from "@/components/ContactSection";
import FAQSection from "@/components/FAQSection";
import NewsletterSection from "@/components/NewsletterSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        <HeroSection />
        <StreamingPartners />
        <ContentShowcase />
        <SportsShowcase />
        <WhyChooseUs />
        <PricingSection />
        <FAQSection />
        <ContactSection />
        <NewsletterSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
