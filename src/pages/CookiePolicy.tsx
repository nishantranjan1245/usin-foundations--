import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CookiePolicyHero from "@/components/cookie-policy/CookiePolicyHero";
import CookiePolicyContent from "@/components/cookie-policy/CookiePolicyContent";
import usePageTitle from "@/hooks/usePageTitle";

const CookiePolicy = () => {
  usePageTitle("Cookie Policy - USIN Foundation");

  return (
    <div className="min-h-screen">
      <Navbar />
      <CookiePolicyHero />
      <CookiePolicyContent />
      <Footer />
    </div>
  );
};

export default CookiePolicy;
