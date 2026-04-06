import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion, AnimatePresence } from "framer-motion";
import logo from "@/assets/logo.png";

const navLinks = [
  { label: "Projects", href: "#projects" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#enquiry" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => { document.body.style.overflow = ""; };
  }, [isOpen]);

  return (
    <>
      <nav
        className="fixed top-4 left-4 right-4 z-50 rounded-2xl border border-white/10"
        style={{
          background: "rgba(10, 14, 26, 0.25)",
          WebkitBackdropFilter: "blur(40px) saturate(1.8)",
          backdropFilter: "blur(40px) saturate(1.8)",
          boxShadow: "0 8px 32px rgba(0,0,0,0.12), inset 0 0 0 1px rgba(255,255,255,0.08)",
        }}
      >
        <div className="container mx-auto px-4 md:px-6 flex items-center justify-between h-20 md:h-24">
          {/* Real SVMS Logo — always full color */}
          <Link to="/" className="flex items-center">
            <img
              src={logo}
              alt="SVMS Constructions & Developers"
              className="h-16 md:h-24 w-auto"
            />
          </Link>

          {/* Desktop Nav — always dark text on white glass */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-sm font-body font-semibold tracking-wide text-cream/90 hover:text-gold transition-colors"
              >
                {link.label}
              </a>
            ))}
            <a href="#enquiry">
              <Button className="bg-gold hover:bg-gold/90 text-white font-body font-semibold px-6 rounded-xl cursor-pointer">
                Enquire Now
              </Button>
            </a>
          </div>

          {/* Mobile Toggle */}
          <button
            className="md:hidden p-2 text-cream cursor-pointer"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Gold accent line at bottom of navbar */}
        <div
          className="h-[2px] mx-4 rounded-full"
          style={{ background: "linear-gradient(90deg, transparent, #CA8A04 30%, #D4AF37 50%, #CA8A04 70%, transparent)" }}
        />
      </nav>

      {/* Spacer so content doesn't hide behind fixed navbar */}
      <div className="h-24 md:h-28" />

      {/* Mobile Full-Screen Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-50 bg-white/98 backdrop-blur-xl flex flex-col items-center justify-center"
          >
            <button
              className="absolute top-6 right-6 text-dark p-2 cursor-pointer"
              onClick={() => setIsOpen(false)}
              aria-label="Close menu"
            >
              <X size={28} />
            </button>

            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              className="mb-12"
            >
              <img src={logo} alt="SVMS Constructions" className="h-20 w-auto" />
            </motion.div>

            <nav className="flex flex-col items-center gap-8">
              {navLinks.map((link, index) => (
                <motion.a
                  key={link.label}
                  href={link.href}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 20 }}
                  transition={{ duration: 0.4, delay: 0.1 + index * 0.1, ease: "easeOut" }}
                  className="text-2xl font-body font-semibold text-dark hover:text-gold transition-colors tracking-wide"
                  onClick={() => setIsOpen(false)}
                >
                  {link.label}
                </motion.a>
              ))}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 20 }}
                transition={{ duration: 0.4, delay: 0.1 + navLinks.length * 0.1, ease: "easeOut" }}
              >
                <a href="#enquiry" onClick={() => setIsOpen(false)}>
                  <Button className="bg-gold hover:bg-gold/90 text-white font-body font-semibold text-lg px-10 py-6 rounded-xl cursor-pointer">
                    Enquire Now
                  </Button>
                </a>
              </motion.div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
