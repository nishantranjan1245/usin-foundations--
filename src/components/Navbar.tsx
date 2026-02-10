import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import usinLogo from "@/assets/usin-logo.png";

const navLinks = [
  { label: "Home", href: "/", isRoute: true },
  { label: "About", href: "/about", isRoute: true },
  { label: "Initiatives", href: "/initiatives", isRoute: true },
  { label: "Impact", href: "/impact", isRoute: true },
  { label: "Get Involved", href: "/get-involved", isRoute: true },
  { label: "Contact Us", href: "/contact", isRoute: true },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const handleNavClick = (href: string, isRoute: boolean) => {
    setIsOpen(false);
    if (!isRoute && href.startsWith("/#")) {
      const sectionId = href.replace("/#", "");
      if (location.pathname === "/") {
        const el = document.getElementById(sectionId);
        el?.scrollIntoView({ behavior: "smooth" });
      } else {
        window.location.href = href;
      }
    }
  };

  const isActive = (href: string) => {
    if (href === "/") return location.pathname === "/";
    return location.pathname.startsWith(href);
  };

  return (
    <nav
      className="fixed top-0 left-0 right-0 z-50 bg-white backdrop-blur-lg border-b border-border shadow-sm"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 group">
            <div className="flex items-center justify-center w-14 h-14 rounded-full overflow-hidden">
              <img src={usinLogo} alt="USIN Foundation Logo" className="w-14 h-14 object-contain" />
            </div>
            <span className="font-display text-lg font-bold leading-tight text-gradient-green">
              USIN Foundation
            </span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center justify-center flex-1 gap-10">
            {navLinks.map((link) =>
              link.isRoute ? (
                <Link
                  key={link.href}
                  to={link.href}
                  className={`text-base font-bold transition-colors duration-200 relative after:absolute after:bottom-0 after:left-0 after:h-0.5 after:bg-accent after:transition-all after:duration-300 ${
                    isActive(link.href)
                      ? "text-primary after:w-full"
                      : "text-muted-foreground hover:text-primary after:w-0 hover:after:w-full"
                  }`}
                >
                  {link.label}
                </Link>
              ) : (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavClick(link.href, link.isRoute);
                  }}
                  className={`text-base font-bold transition-colors duration-200 relative after:absolute after:bottom-0 after:left-0 after:h-0.5 after:bg-accent after:transition-all after:duration-300 ${
                    isActive(link.href)
                      ? "text-primary after:w-full"
                      : "text-muted-foreground hover:text-primary after:w-0 hover:after:w-full"
                  }`}
                >
                  {link.label}
                </a>
              )
            )}
          </div>
          <Link
            to="/donate"
            className="hidden lg:inline-flex items-center px-5 py-2.5 rounded-full bg-primary text-primary-foreground text-base font-bold hover:bg-accent transition-colors duration-200"
          >
            Donate Now
          </Link>

          {/* Mobile Toggle */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-2 text-foreground"
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-white border-b border-border overflow-hidden"
          >
            <div className="px-4 py-4 space-y-3">
              {navLinks.map((link) =>
                link.isRoute ? (
                  <Link
                    key={link.href}
                    to={link.href}
                    onClick={() => setIsOpen(false)}
                    className={`block text-base font-medium transition-colors py-2 ${
                      isActive(link.href)
                        ? "text-primary font-bold"
                        : "text-muted-foreground hover:text-primary"
                    }`}
                  >
                    {link.label}
                  </Link>
                ) : (
                  <a
                    key={link.href}
                    href={link.href}
                    onClick={(e) => {
                      e.preventDefault();
                      handleNavClick(link.href, link.isRoute);
                    }}
                    className={`block text-base font-medium transition-colors py-2 ${
                      isActive(link.href)
                        ? "text-primary font-bold"
                        : "text-muted-foreground hover:text-primary"
                    }`}
                  >
                    {link.label}
                  </a>
                )
              )}
              <Link
                to="/donate"
                onClick={() => setIsOpen(false)}
                className="block text-center px-5 py-3 rounded-full bg-primary text-primary-foreground font-semibold"
              >
                Donate Now
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
