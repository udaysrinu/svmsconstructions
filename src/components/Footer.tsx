import { Facebook, Instagram, Linkedin, Youtube } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-foreground text-background py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-10">
          <div>
            <h3 className="text-2xl font-heading font-bold mb-4">
              SVMS<span className="text-secondary"> Constructions</span>
            </h3>
            <p className="text-background/60 text-sm leading-relaxed">
              Building premium residential communities in Visakhapatnam. RERA registered and committed to on-time delivery.
            </p>
            <div className="flex gap-3 mt-5">
              {[Facebook, Instagram, Linkedin, Youtube].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="w-9 h-9 rounded-full border border-background/20 flex items-center justify-center hover:bg-secondary hover:border-secondary transition-colors"
                  aria-label="Social link"
                >
                  <Icon size={16} />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="font-heading font-bold text-lg mb-4">RERA Numbers</h4>
            <ul className="space-y-2 text-sm text-background/60">
              <li>Royal Grandeur: P02400003456</li>
              <li>Serene Heights: P02400007891</li>
              <li>Emerald Bay: PRM/KA/RERA/1251/310/AG/180412/002145</li>
            </ul>
          </div>

          <div>
            <h4 className="font-heading font-bold text-lg mb-4">Contact</h4>
            <address className="not-italic text-sm text-background/60 space-y-2">
              <p>Prasiddhi Constructions Pvt. Ltd.</p>
              <p>Plot 42, Financial District,</p>
              <p>Gachibowli, Hyderabad – 500032</p>
              <p className="pt-2">📞 +91 90001 90001</p>
              <p>✉️ info@prasiddhi.com</p>
            </address>
            <a
              href="#"
              className="inline-block mt-4 text-secondary text-sm font-medium hover:underline"
            >
              NRI Enquiry →
            </a>
          </div>
        </div>

        <div className="border-t border-background/10 mt-10 pt-6 text-center text-xs text-background/40">
          © {new Date().getFullYear()} Prasiddhi Constructions Pvt. Ltd. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
