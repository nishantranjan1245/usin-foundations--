import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import AboutHero from "@/components/about/AboutHero";
import AboutStory from "@/components/about/AboutStory";
import AboutValues from "@/components/about/AboutValues";
import AboutTeam from "@/components/about/AboutTeam";
import AboutTimeline from "@/components/about/AboutTimeline";
import AboutCTA from "@/components/about/AboutCTA";
import usePageTitle from "@/hooks/usePageTitle";

const About = () => {
  usePageTitle("About - USIN Foundation");

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        <AboutHero />
        <AboutStory />
        <AboutValues />
        <AboutTimeline />
        <AboutTeam />
        <AboutCTA />
      </main>
      <Footer />
    </div>
  );
};

export default About;
