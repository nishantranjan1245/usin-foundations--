import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import MissionSection from "@/components/MissionSection";
import WhyTreesMatterSection from "@/components/WhyTreesMatterSection";
import InitiativesSection from "@/components/InitiativesSection";
import ImpactSection from "@/components/ImpactSection";
import GallerySection from "@/components/GallerySection";
import EcoTipsSection from "@/components/EcoTipsSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import GetInvolvedSection from "@/components/GetInvolvedSection";
import FAQSection from "@/components/FAQSection";
import NewsletterSection from "@/components/NewsletterSection";
import Footer from "@/components/Footer";
import usePageTitle from "@/hooks/usePageTitle";

const Index = () => {
  usePageTitle("Home - USIN Foundation - Nurturing a Greener Future For India");

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        <HeroSection />
        <MissionSection />
        <WhyTreesMatterSection />
        <InitiativesSection />
        <ImpactSection />
        <GallerySection />
        <EcoTipsSection />
        <TestimonialsSection />
        <GetInvolvedSection />
        <FAQSection />
        <NewsletterSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
