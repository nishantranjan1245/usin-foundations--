import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import TermsHero from "@/components/terms/TermsHero";
import TermsContent from "@/components/terms/TermsContent";
import usePageTitle from "@/hooks/usePageTitle";

const TermsOfService = () => {
  usePageTitle("Terms of Service - USIN Foundation");

  return (
    <div className="min-h-screen">
      <Navbar />
      <TermsHero />
      <TermsContent />
      <Footer />
    </div>
  );
};

export default TermsOfService;
