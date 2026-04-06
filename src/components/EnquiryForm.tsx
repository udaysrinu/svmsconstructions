import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { projects } from "@/data/projects";
import { toast } from "sonner";
import { motion } from "framer-motion";

const EnquiryForm = () => {
  const [form, setForm] = useState({ name: "", phone: "", email: "", project: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name || !form.phone) {
      toast.error("Please fill in Name and Phone number.");
      return;
    }
    toast.success("Thank you for your enquiry! Our team will contact you shortly.");
    setForm({ name: "", phone: "", email: "", project: "", message: "" });
  };

  const inputClassName =
    "border-0 border-b-2 border-gray-200 focus:border-gold rounded-none bg-transparent transition-colors duration-300 font-body placeholder:text-gray-400 text-dark px-0 shadow-none focus-visible:ring-0 focus-visible:ring-offset-0";

  return (
    <section
      id="enquiry"
      className="py-20 md:py-28 bg-cream overflow-hidden"
      style={{
        backgroundImage:
          "url(\"data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23CA8A04' fill-opacity='0.03'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\")",
      }}
    >
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 lg:gap-20 items-center max-w-6xl mx-auto">
          {/* Left Side */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.7 }}
          >
            <h2 className="text-4xl md:text-5xl font-heading font-bold text-dark">
              Your Dream Home Awaits
            </h2>
            <p className="text-muted-foreground font-body text-lg mt-4">
              Fill the form and our team will reach out within 24 hours.
            </p>

            {/* Decorative gold building silhouette */}
            <div className="mt-10 hidden md:block">
              <svg
                width="240"
                height="200"
                viewBox="0 0 240 200"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="opacity-30"
              >
                {/* Main tall building */}
                <rect x="60" y="30" width="50" height="170" stroke="#CA8A04" strokeWidth="1" />
                <rect x="68" y="42" width="10" height="14" stroke="#CA8A04" strokeWidth="0.75" />
                <rect x="92" y="42" width="10" height="14" stroke="#CA8A04" strokeWidth="0.75" />
                <rect x="68" y="66" width="10" height="14" stroke="#CA8A04" strokeWidth="0.75" />
                <rect x="92" y="66" width="10" height="14" stroke="#CA8A04" strokeWidth="0.75" />
                <rect x="68" y="90" width="10" height="14" stroke="#CA8A04" strokeWidth="0.75" />
                <rect x="92" y="90" width="10" height="14" stroke="#CA8A04" strokeWidth="0.75" />
                <rect x="68" y="114" width="10" height="14" stroke="#CA8A04" strokeWidth="0.75" />
                <rect x="92" y="114" width="10" height="14" stroke="#CA8A04" strokeWidth="0.75" />
                <rect x="68" y="138" width="10" height="14" stroke="#CA8A04" strokeWidth="0.75" />
                <rect x="92" y="138" width="10" height="14" stroke="#CA8A04" strokeWidth="0.75" />
                <rect x="76" y="170" width="18" height="30" stroke="#CA8A04" strokeWidth="0.75" />
                {/* Spire */}
                <line x1="85" y1="30" x2="85" y2="14" stroke="#CA8A04" strokeWidth="1" />
                <polygon points="85,8 80,18 90,18" stroke="#CA8A04" strokeWidth="0.75" fill="none" />

                {/* Right shorter building */}
                <rect x="120" y="80" width="45" height="120" stroke="#CA8A04" strokeWidth="1" />
                <rect x="128" y="90" width="8" height="12" stroke="#CA8A04" strokeWidth="0.75" />
                <rect x="149" y="90" width="8" height="12" stroke="#CA8A04" strokeWidth="0.75" />
                <rect x="128" y="112" width="8" height="12" stroke="#CA8A04" strokeWidth="0.75" />
                <rect x="149" y="112" width="8" height="12" stroke="#CA8A04" strokeWidth="0.75" />
                <rect x="128" y="134" width="8" height="12" stroke="#CA8A04" strokeWidth="0.75" />
                <rect x="149" y="134" width="8" height="12" stroke="#CA8A04" strokeWidth="0.75" />
                <rect x="136" y="168" width="14" height="32" stroke="#CA8A04" strokeWidth="0.75" />
                {/* Roof detail */}
                <polygon points="120,80 142,65 165,80" stroke="#CA8A04" strokeWidth="1" fill="none" />

                {/* Left small building */}
                <rect x="10" y="120" width="40" height="80" stroke="#CA8A04" strokeWidth="1" />
                <rect x="17" y="130" width="8" height="10" stroke="#CA8A04" strokeWidth="0.75" />
                <rect x="35" y="130" width="8" height="10" stroke="#CA8A04" strokeWidth="0.75" />
                <rect x="17" y="150" width="8" height="10" stroke="#CA8A04" strokeWidth="0.75" />
                <rect x="35" y="150" width="8" height="10" stroke="#CA8A04" strokeWidth="0.75" />
                <rect x="24" y="174" width="12" height="26" stroke="#CA8A04" strokeWidth="0.75" />

                {/* Far right accent */}
                <rect x="175" y="130" width="30" height="70" stroke="#CA8A04" strokeWidth="1" />
                <rect x="181" y="140" width="6" height="8" stroke="#CA8A04" strokeWidth="0.75" />
                <rect x="193" y="140" width="6" height="8" stroke="#CA8A04" strokeWidth="0.75" />
                <rect x="181" y="158" width="6" height="8" stroke="#CA8A04" strokeWidth="0.75" />
                <rect x="193" y="158" width="6" height="8" stroke="#CA8A04" strokeWidth="0.75" />

                {/* Ground line */}
                <line x1="0" y1="200" x2="240" y2="200" stroke="#CA8A04" strokeWidth="1" />
              </svg>
            </div>
          </motion.div>

          {/* Right Side: Form */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.7, delay: 0.15 }}
          >
            <form
              onSubmit={handleSubmit}
              className="bg-white rounded-2xl p-8 shadow-elegant space-y-6"
            >
              <div className="grid grid-cols-2 gap-4">
                <Input
                  placeholder="Your Name *"
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  className={inputClassName}
                />
                <Input
                  placeholder="Phone *"
                  value={form.phone}
                  onChange={(e) => setForm({ ...form, phone: e.target.value })}
                  className={inputClassName}
                />
              </div>
              <Input
                type="email"
                placeholder="Email Address"
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                className={inputClassName}
              />
              <Select value={form.project} onValueChange={(v) => setForm({ ...form, project: v })}>
                <SelectTrigger
                  className="border-0 border-b-2 border-gray-200 focus:border-gold rounded-none bg-transparent transition-colors duration-300 font-body text-gray-400 px-0 shadow-none focus:ring-0 focus:ring-offset-0"
                >
                  <SelectValue placeholder="Interested In (Project)" />
                </SelectTrigger>
                <SelectContent>
                  {projects.map((p) => (
                    <SelectItem key={p.id} value={p.id}>
                      {p.name} – {p.location}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
              <Textarea
                placeholder="Your Message"
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                rows={4}
                className="border-0 border-b-2 border-gray-200 focus:border-gold rounded-none bg-transparent transition-colors duration-300 font-body placeholder:text-gray-400 text-dark px-0 shadow-none focus-visible:ring-0 focus-visible:ring-offset-0 resize-none"
              />
              <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                <Button
                  type="submit"
                  className="w-full bg-gold text-white hover:bg-gold/90 rounded-full py-6 font-body font-semibold text-base mt-4"
                >
                  Submit Enquiry
                </Button>
              </motion.div>

              {/* Trust signals */}
              <div className="flex items-center justify-center gap-2 text-xs text-muted-foreground font-body pt-2">
                <span>RERA Verified</span>
                <span className="text-muted-foreground/40">&middot;</span>
                <span>100% Spam Free</span>
                <span className="text-muted-foreground/40">&middot;</span>
                <span>+91 98480 11696</span>
              </div>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default EnquiryForm;
