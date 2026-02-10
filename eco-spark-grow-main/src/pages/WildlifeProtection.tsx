import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WildlifeProtectionHero from "@/components/wildlife-protection/WildlifeProtectionHero";
import WildlifeProtectionAbout from "@/components/wildlife-protection/WildlifeProtectionAbout";
import WildlifeProtectionPrograms from "@/components/wildlife-protection/WildlifeProtectionPrograms";
import WildlifeProtectionProcess from "@/components/wildlife-protection/WildlifeProtectionProcess";
import WildlifeProtectionImpact from "@/components/wildlife-protection/WildlifeProtectionImpact";
import WildlifeProtectionCTA from "@/components/wildlife-protection/WildlifeProtectionCTA";
import usePageTitle from "@/hooks/usePageTitle";

const WildlifeProtection = () => {
  usePageTitle("Wildlife Protection - USIN Foundation");

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        <WildlifeProtectionHero />
        <WildlifeProtectionAbout />
        <WildlifeProtectionPrograms />
        <WildlifeProtectionProcess />
        <WildlifeProtectionImpact />
        <WildlifeProtectionCTA />
      </main>
      <Footer />
    </div>
  );
};

export default WildlifeProtection;
