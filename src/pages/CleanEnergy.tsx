import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CleanEnergyHero from "@/components/clean-energy/CleanEnergyHero";
import CleanEnergyAbout from "@/components/clean-energy/CleanEnergyAbout";
import CleanEnergyPrograms from "@/components/clean-energy/CleanEnergyPrograms";
import CleanEnergyProcess from "@/components/clean-energy/CleanEnergyProcess";
import CleanEnergyImpact from "@/components/clean-energy/CleanEnergyImpact";
import CleanEnergyCTA from "@/components/clean-energy/CleanEnergyCTA";
import usePageTitle from "@/hooks/usePageTitle";

const CleanEnergy = () => {
  usePageTitle("Clean Energy - USIN Foundation");

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        <CleanEnergyHero />
        <CleanEnergyAbout />
        <CleanEnergyPrograms />
        <CleanEnergyProcess />
        <CleanEnergyImpact />
        <CleanEnergyCTA />
      </main>
      <Footer />
    </div>
  );
};

export default CleanEnergy;
