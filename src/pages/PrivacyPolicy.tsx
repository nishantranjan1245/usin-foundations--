import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PrivacyHero from "@/components/privacy/PrivacyHero";
import PrivacyContent from "@/components/privacy/PrivacyContent";
import usePageTitle from "@/hooks/usePageTitle";

const PrivacyPolicy = () => {
  usePageTitle("Privacy Policy - USIN Foundation");

  return (
    <div className="min-h-screen">
      <Navbar />
      <PrivacyHero />
      <PrivacyContent />
      <Footer />
    </div>
  );
};

export default PrivacyPolicy;
