import { Mail, Phone, MapPin } from "lucide-react";
import { Link } from "react-router-dom";
import usinLogo from "@/assets/usin-logo.png";

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-2 lg:grid-cols-5 gap-10">
          {/* Brand */}
          <div className="lg:col-span-1">
            <Link to="/" className="flex items-center gap-2 mb-4">
              <div className="flex items-center justify-center w-14 h-14 rounded-full overflow-hidden">
                <img src={usinLogo} alt="USIN Foundation Logo" className="w-14 h-14 object-contain" />
              </div>
              <span className="font-display text-lg font-bold bg-clip-text text-transparent bg-gradient-to-r from-gold to-accent">
                USIN Foundation
              </span>
            </Link>
            <p className="text-primary-foreground/60 text-sm leading-relaxed mb-6">
              Dedicated to environmental restoration, tree plantation, 
              and building sustainable communities across India.
            </p>
          </div>

          {/* Quick Links */}
          <div className="lg:pl-8">
            <h4 className="font-display font-semibold text-base mb-4">
              Quick Links
            </h4>
            <ul className="space-y-3">
              {[
                { label: "About Us", to: "/about" },
                { label: "Our Initiatives", to: "/initiatives" },
                { label: "Impact Stories", to: "/impact" },
                { label: "Get Involved", to: "/get-involved" },
                { label: "Donate", to: "/donate" },
              ].map((link) => (
                <li key={link.label}>
                  <Link
                    to={link.to}
                    className="text-sm text-primary-foreground/60 hover:text-gold transition-colors duration-200"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Programs */}
          <div>
            <h4 className="font-display font-semibold text-base mb-4">
              Programs
            </h4>
            <ul className="space-y-3">
              {[
                { label: "Tree Plantation", to: "/tree-plantation" },
                { label: "Water Conservation", to: "/water-conservation" },
                { label: "Eco-Awareness", to: "/eco-awareness" },
                { label: "Clean Energy", to: "/clean-energy" },
                { label: "Wildlife Protection", to: "/wildlife-protection" },
              ].map((link) => (
                <li key={link.label}>
                  <Link
                    to={link.to}
                    className="text-sm text-primary-foreground/60 hover:text-gold transition-colors duration-200"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal & Compliance */}
          <div>
            <h4 className="font-display font-semibold text-base mb-4">
              Legal & Compliance
            </h4>
            <ul className="space-y-3">
              {[
                { label: "Privacy Policy", to: "/privacy-policy" },
                { label: "Terms of Service", to: "/terms-of-service" },
                { label: "Refund & Cancellation", to: "/refund-policy" },
                { label: "Disclaimer", to: "/disclaimer" },
              ].map((link) => (
                <li key={link.label}>
                  <Link
                    to={link.to}
                    className="text-sm text-primary-foreground/60 hover:text-gold transition-colors duration-200"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-display font-semibold text-base mb-4">
              Contact Us
            </h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="w-4 h-4 mt-0.5 text-gold flex-shrink-0" />
                <span className="text-sm text-primary-foreground/60">
                  C-2, Vasant Vihar Main Market, New Delhi, Delhi, India - 110057
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-gold flex-shrink-0" />
                <a
                  href="mailto:info@usinfoundation.org.in"
                  className="text-sm text-primary-foreground/60 hover:text-gold transition-colors"
                >
                  info@usinfoundation.org.in
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-gold flex-shrink-0" />
                <span className="text-sm text-primary-foreground/60">
                  +91 XXXX XXXXXX
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 pt-8 border-t border-primary-foreground/10 flex items-center justify-center">
          <p className="text-xs text-primary-foreground/40 text-center">
            © {new Date().getFullYear()} USIN Foundation. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
