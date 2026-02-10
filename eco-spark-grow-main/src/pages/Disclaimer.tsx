import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import DisclaimerHero from "@/components/disclaimer/DisclaimerHero";
import DisclaimerContent from "@/components/disclaimer/DisclaimerContent";
import usePageTitle from "@/hooks/usePageTitle";

const Disclaimer = () => {
  usePageTitle("Disclaimer - USIN Foundation");

  return (
    <div className="min-h-screen">
      <Navbar />
      <DisclaimerHero />
      <DisclaimerContent />
      <Footer />
    </div>
  );
};

export default Disclaimer;
