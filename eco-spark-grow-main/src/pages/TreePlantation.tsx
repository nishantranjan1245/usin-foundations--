import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import TreePlantationHero from "@/components/tree-plantation/TreePlantationHero";
import TreePlantationAbout from "@/components/tree-plantation/TreePlantationAbout";
import TreePlantationPrograms from "@/components/tree-plantation/TreePlantationPrograms";
import TreePlantationProcess from "@/components/tree-plantation/TreePlantationProcess";
import TreePlantationImpact from "@/components/tree-plantation/TreePlantationImpact";
import TreePlantationCTA from "@/components/tree-plantation/TreePlantationCTA";
import usePageTitle from "@/hooks/usePageTitle";

const TreePlantation = () => {
  usePageTitle("Tree Plantation - USIN Foundation");

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        <TreePlantationHero />
        <TreePlantationAbout />
        <TreePlantationPrograms />
        <TreePlantationProcess />
        <TreePlantationImpact />
        <TreePlantationCTA />
      </main>
      <Footer />
    </div>
  );
};

export default TreePlantation;
