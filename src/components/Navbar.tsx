import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { label: "Projects", href: "/#projects" },
    { label: "About", href: "/#about" },
    { label: "Contact", href: "/#enquiry" },
  ];

  return (
    <nav className="sticky top-0 z-50 bg-background/95 backdrop-blur-md border-b border-border shadow-sm">
      <div className="container mx-auto px-4 flex items-center justify-between h-16 md:h-20">
        <Link to="/" className="flex items-center gap-2">
          <span className="text-2xl md:text-3xl font-heading font-bold text-primary">
            Pra<span className="text-secondary">siddhi</span>
          </span>
          <span className="hidden sm:block text-xs text-muted-foreground tracking-widest uppercase">Constructions</span>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-sm font-medium text-foreground/80 hover:text-secondary transition-colors tracking-wide"
            >
              {link.label}
            </a>
          ))}
          <a href="/#enquiry">
            <Button className="bg-secondary text-secondary-foreground hover:bg-secondary/90 font-semibold px-6">
              Enquire Now
            </Button>
          </a>
        </div>

        {/* Mobile Toggle */}
        <button
          className="md:hidden p-2 text-foreground"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-background border-t border-border px-4 py-4 space-y-3 animate-fade-in-up">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="block text-sm font-medium text-foreground/80 py-2"
              onClick={() => setIsOpen(false)}
            >
              {link.label}
            </a>
          ))}
          <a href="/#enquiry" onClick={() => setIsOpen(false)}>
            <Button className="w-full bg-secondary text-secondary-foreground hover:bg-secondary/90 font-semibold">
              Enquire Now
            </Button>
          </a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
