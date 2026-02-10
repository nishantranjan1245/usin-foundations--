import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import InitiativesHero from "@/components/initiatives/InitiativesHero";
import InitiativesOverview from "@/components/initiatives/InitiativesOverview";
import InitiativeDetails from "@/components/initiatives/InitiativeDetails";
import InitiativesImpact from "@/components/initiatives/InitiativesImpact";
import InitiativesCTA from "@/components/initiatives/InitiativesCTA";
import usePageTitle from "@/hooks/usePageTitle";

const Initiatives = () => {
  usePageTitle("Initiatives - USIN Foundation");

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        <InitiativesHero />
        <InitiativesOverview />
        <InitiativeDetails />
        <InitiativesImpact />
        <InitiativesCTA />
      </main>
      <Footer />
    </div>
  );
};

export default Initiatives;
