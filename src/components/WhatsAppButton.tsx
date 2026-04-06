import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MessageCircle, ChevronUp } from "lucide-react";

const WhatsAppButton = () => {
  const [showScroll, setShowScroll] = useState(false);
  const [whatsAppHover, setWhatsAppHover] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const pastHero = window.scrollY > window.innerHeight;
      setShowScroll(pastHero);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* WhatsApp button */}
      <a
        href="https://wa.me/919848011696"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full bg-[#25D366] flex items-center justify-center shadow-lg hover:scale-110 transition-transform"
        aria-label="Chat on WhatsApp"
        onMouseEnter={() => setWhatsAppHover(true)}
        onMouseLeave={() => setWhatsAppHover(false)}
      >
        <MessageCircle className="text-white" size={28} />
        {whatsAppHover && (
          <span className="absolute -top-10 right-0 bg-dark text-cream text-xs px-3 py-1 rounded-full whitespace-nowrap">
            Chat with us
          </span>
        )}
      </a>

      {/* Scroll-to-top button */}
      <AnimatePresence>
        {showScroll && (
          <motion.button
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            transition={{ duration: 0.2 }}
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="fixed bottom-6 left-6 z-50 w-10 h-10 rounded-full bg-gold text-white flex items-center justify-center shadow-lg hover:bg-gold/90 transition-colors"
            aria-label="Scroll to top"
          >
            <ChevronUp size={20} />
          </motion.button>
        )}
      </AnimatePresence>

      {/* Mobile sticky CTA bar */}
      <AnimatePresence>
        {showScroll && (
          <motion.div
            initial={{ y: 80, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 80, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed bottom-0 left-0 right-0 z-40 md:hidden bg-dark/95 backdrop-blur-md px-4 py-3 flex gap-3"
          >
            <a
              href="tel:+919848011696"
              className="flex-1 bg-gold text-white rounded-full py-3 font-body font-semibold text-sm text-center"
            >
              Call Now
            </a>
            <a
              href="#enquiry"
              className="flex-1 border border-gold text-gold rounded-full py-3 font-body font-semibold text-sm text-center"
            >
              Enquire
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default WhatsAppButton;
