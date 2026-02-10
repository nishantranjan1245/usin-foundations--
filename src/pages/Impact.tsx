import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ImpactHero from "@/components/impact/ImpactHero";
import ImpactStats from "@/components/impact/ImpactStats";
import ImpactStories from "@/components/impact/ImpactStories";
import ImpactMap from "@/components/impact/ImpactMap";
import ImpactTestimonials from "@/components/impact/ImpactTestimonials";
import ImpactCTA from "@/components/impact/ImpactCTA";
import usePageTitle from "@/hooks/usePageTitle";

const Impact = () => {
  usePageTitle("Impact - USIN Foundation");

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        <ImpactHero />
        <ImpactStats />
        <ImpactStories />
        <ImpactMap />
        <ImpactTestimonials />
        <ImpactCTA />
      </main>
      <Footer />
    </div>
  );
};

export default Impact;
