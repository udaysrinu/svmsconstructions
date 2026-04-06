import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { projects } from "@/data/projects";
import { toast } from "sonner";
import { motion } from "framer-motion";
import constructionImg from "@/assets/construction-site.jpg";

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

            {/* Construction image */}
            <div className="mt-10 hidden md:block">
              <img
                src={constructionImg}
                alt="Construction in progress"
                className="rounded-2xl shadow-lg w-full h-64 object-cover"
                loading="lazy"
              />
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
