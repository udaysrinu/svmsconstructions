import { Facebook, Instagram, Linkedin, Youtube, Phone, Mail } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-dark py-16 relative">
      {/* Gold gradient line at top */}
      <div
        className="absolute top-0 left-0 right-0 h-px"
        style={{ background: "linear-gradient(90deg, transparent, #CA8A04, transparent)" }}
      />

      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-10">
          {/* Column 1: Brand */}
          <div>
            <h3 className="text-2xl font-heading font-bold">
              <span className="text-gold">SVMS</span>
              <span className="text-cream font-heading"> Constructions</span>
            </h3>
            <p className="text-cream/50 text-sm font-body leading-relaxed mt-4">
              Building premium residential communities in Visakhapatnam. RERA registered and committed to on-time delivery with uncompromising quality standards.
            </p>
            <div className="flex gap-3 mt-5">
              {[
                { Icon: Facebook, href: "https://www.facebook.com/svmsconstructions/" },
                { Icon: Instagram, href: "https://www.instagram.com/svmsconstructions/" },
              ].map(({ Icon, href }, i) => (
                <a
                  key={i}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 rounded-full border border-cream/20 flex items-center justify-center text-cream/60 hover:bg-gold hover:border-gold hover:text-white transition-colors"
                  aria-label="Social link"
                >
                  <Icon size={16} />
                </a>
              ))}
            </div>
          </div>

          {/* Column 2: Our Projects */}
          <div>
            <h4 className="text-cream font-heading font-bold text-lg mb-4">Our Projects</h4>
            <ul className="text-cream/50 text-sm font-body space-y-2">
              <li>SVMS Eswar Residency — Santhi Nagar</li>
              <li>SVMS Nivas — Marripalem, VUDA Layout</li>
              <li className="text-gold/70">New Project — Coming Soon</li>
            </ul>
            <p className="text-cream/30 text-xs font-body mt-3">GST: 37ADCFS2419L1ZV</p>
          </div>

          {/* Column 3: Contact */}
          <div>
            <h4 className="text-cream font-heading font-bold text-lg mb-4">Contact</h4>
            <address className="not-italic text-cream/50 text-sm font-body space-y-2">
              <p>SVMS Nivas, Marripalem,</p>
              <p>VUDA Layout, Near PF Office,</p>
              <p>Visakhapatnam - 530009</p>
              <p className="pt-2 flex items-center gap-2">
                <Phone size={14} className="text-gold" />
                +91 98480 11696
              </p>
              <p className="flex items-center gap-2">
                <Phone size={14} className="text-gold" />
                +91 95420 36932
              </p>
              <p className="flex items-center gap-2">
                <Mail size={14} className="text-gold" />
                svmsconstructions.com@gmail.com
              </p>
            </address>
            <a
              href="#enquiry"
              className="inline-block mt-4 text-gold text-sm font-medium hover:underline"
            >
              NRI Enquiry &rarr;
            </a>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-cream/10 mt-10 pt-6 text-center text-xs text-cream/30 font-body">
          &copy; 2026 SVMS Constructions. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
