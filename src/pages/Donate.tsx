import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import DonateHero from "@/components/donate/DonateHero";
import DonateTiers from "@/components/donate/DonateTiers";
import DonateImpact from "@/components/donate/DonateImpact";
import DonateTrust from "@/components/donate/DonateTrust";
import DonateCTA from "@/components/donate/DonateCTA";
import usePageTitle from "@/hooks/usePageTitle";

const Donate = () => {
  usePageTitle("Donate - USIN Foundation");

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        <DonateHero />
        <DonateTiers />
        <DonateImpact />
        <DonateTrust />
        <DonateCTA />
      </main>
      <Footer />
    </div>
  );
};

export default Donate;
