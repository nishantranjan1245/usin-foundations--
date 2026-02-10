import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ContactHero from "@/components/contact/ContactHero";
import ContactContent from "@/components/contact/ContactContent";
import usePageTitle from "@/hooks/usePageTitle";

const Contact = () => {
  usePageTitle("Contact Us - USIN Foundation");

  return (
    <div className="min-h-screen">
      <Navbar />
      <ContactHero />
      <ContactContent />
      <Footer />
    </div>
  );
};

export default Contact;
