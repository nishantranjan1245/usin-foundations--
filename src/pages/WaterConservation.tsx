import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WaterConservationHero from "@/components/water-conservation/WaterConservationHero";
import WaterConservationAbout from "@/components/water-conservation/WaterConservationAbout";
import WaterConservationPrograms from "@/components/water-conservation/WaterConservationPrograms";
import WaterConservationProcess from "@/components/water-conservation/WaterConservationProcess";
import WaterConservationImpact from "@/components/water-conservation/WaterConservationImpact";
import WaterConservationCTA from "@/components/water-conservation/WaterConservationCTA";
import usePageTitle from "@/hooks/usePageTitle";

const WaterConservation = () => {
  usePageTitle("Water Conservation - USIN Foundation");

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        <WaterConservationHero />
        <WaterConservationAbout />
        <WaterConservationPrograms />
        <WaterConservationProcess />
        <WaterConservationImpact />
        <WaterConservationCTA />
      </main>
      <Footer />
    </div>
  );
};

export default WaterConservation;
