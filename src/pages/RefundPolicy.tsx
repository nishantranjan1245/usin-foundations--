import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import RefundHero from "@/components/refund/RefundHero";
import RefundContent from "@/components/refund/RefundContent";
import usePageTitle from "@/hooks/usePageTitle";

const RefundPolicy = () => {
  usePageTitle("Refund & Cancellation Policy - USIN Foundation");

  return (
    <div className="min-h-screen">
      <Navbar />
      <RefundHero />
      <RefundContent />
      <Footer />
    </div>
  );
};

export default RefundPolicy;
