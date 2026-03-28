import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { projects } from "@/data/projects";
import { toast } from "sonner";

const EnquiryForm = () => {
  const [form, setForm] = useState({ name: "", phone: "", email: "", project: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name || !form.phone || !form.email) {
      toast.error("Please fill in all required fields.");
      return;
    }
    toast.success("Thank you for your enquiry! Our team will contact you shortly.");
    setForm({ name: "", phone: "", email: "", project: "", message: "" });
  };

  return (
    <section id="enquiry" className="py-16 md:py-24 bg-primary">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto">
          <div className="text-center mb-10">
            <p className="text-secondary font-medium tracking-[0.2em] uppercase text-sm mb-2">
              Get In Touch
            </p>
            <h2 className="text-3xl md:text-5xl font-heading font-bold text-primary-foreground">
              Enquire Now
            </h2>
            <p className="text-primary-foreground/60 mt-3">Fill the form below and our team will reach out within 24 hours.</p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-5">
            <div className="grid md:grid-cols-2 gap-4">
              <Input
                placeholder="Your Name *"
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                className="bg-primary-foreground/10 border-primary-foreground/20 text-primary-foreground placeholder:text-primary-foreground/40"
              />
              <Input
                placeholder="Phone Number *"
                value={form.phone}
                onChange={(e) => setForm({ ...form, phone: e.target.value })}
                className="bg-primary-foreground/10 border-primary-foreground/20 text-primary-foreground placeholder:text-primary-foreground/40"
              />
            </div>
            <Input
              type="email"
              placeholder="Email Address *"
              value={form.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
              className="bg-primary-foreground/10 border-primary-foreground/20 text-primary-foreground placeholder:text-primary-foreground/40"
            />
            <Select value={form.project} onValueChange={(v) => setForm({ ...form, project: v })}>
              <SelectTrigger className="bg-primary-foreground/10 border-primary-foreground/20 text-primary-foreground">
                <SelectValue placeholder="Interested In (Project)" />
              </SelectTrigger>
              <SelectContent>
                {projects.map((p) => (
                  <SelectItem key={p.id} value={p.id}>{p.name} – {p.location}</SelectItem>
                ))}
              </SelectContent>
            </Select>
            <Textarea
              placeholder="Your Message"
              value={form.message}
              onChange={(e) => setForm({ ...form, message: e.target.value })}
              rows={4}
              className="bg-primary-foreground/10 border-primary-foreground/20 text-primary-foreground placeholder:text-primary-foreground/40"
            />
            <Button
              type="submit"
              size="lg"
              className="w-full bg-secondary text-secondary-foreground hover:bg-secondary/90 font-semibold text-base py-6"
            >
              Submit Enquiry
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default EnquiryForm;
