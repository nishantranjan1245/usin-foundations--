import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import GetInvolvedHero from "@/components/get-involved/GetInvolvedHero";
import WaysToHelp from "@/components/get-involved/WaysToHelp";
import VolunteerSection from "@/components/get-involved/VolunteerSection";
import DonateSection from "@/components/get-involved/DonateSection";
import SponsorTree from "@/components/get-involved/SponsorTree";
import GetInvolvedCTA from "@/components/get-involved/GetInvolvedCTA";
import usePageTitle from "@/hooks/usePageTitle";

const GetInvolved = () => {
  usePageTitle("Get Involved - USIN Foundation");

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        <GetInvolvedHero />
        <WaysToHelp />
        <VolunteerSection />
        <DonateSection />
        <SponsorTree />
        <GetInvolvedCTA />
      </main>
      <Footer />
    </div>
  );
};

export default GetInvolved;
