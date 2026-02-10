import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import EcoAwarenessHero from "@/components/eco-awareness/EcoAwarenessHero";
import EcoAwarenessAbout from "@/components/eco-awareness/EcoAwarenessAbout";
import EcoAwarenessPrograms from "@/components/eco-awareness/EcoAwarenessPrograms";
import EcoAwarenessProcess from "@/components/eco-awareness/EcoAwarenessProcess";
import EcoAwarenessImpact from "@/components/eco-awareness/EcoAwarenessImpact";
import EcoAwarenessCTA from "@/components/eco-awareness/EcoAwarenessCTA";
import usePageTitle from "@/hooks/usePageTitle";

const EcoAwareness = () => {
  usePageTitle("Eco Awareness - USIN Foundation");

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        <EcoAwarenessHero />
        <EcoAwarenessAbout />
        <EcoAwarenessPrograms />
        <EcoAwarenessProcess />
        <EcoAwarenessImpact />
        <EcoAwarenessCTA />
      </main>
      <Footer />
    </div>
  );
};

export default EcoAwareness;
