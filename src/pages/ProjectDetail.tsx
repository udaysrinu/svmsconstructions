import { useParams, Link } from "react-router-dom";
import { useState } from "react";
import {
  ArrowLeft, MapPin, Maximize, TreePine, ChevronLeft, ChevronRight,
  Waves, Dumbbell, Home, PersonStanding, Baby, Trees, Shield, Zap,
  Gamepad2, Theater, Sparkles, Building2, Flower, Target, Briefcase,
  Footprints, PlugZap, Bell, Medal, Wifi, BookOpen, Monitor, Film,
  Sprout, Dog,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { projects } from "@/data/projects";
import { toast } from "sonner";
import { motion, AnimatePresence } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import PageTransition from "@/components/PageTransition";

const statusColors: Record<string, string> = {
  "Under Construction": "bg-gold text-white",
  "Ready to Move": "bg-emerald-600 text-white",
  Upcoming: "bg-blue-600 text-white",
};

const amenityIconMap: Record<string, React.ElementType> = {
  "Swimming Pool": Waves,
  "Gym": Dumbbell,
  "Clubhouse": Home,
  "Jogging Track": PersonStanding,
  "Children's Play Area": Baby,
  "Landscaped Gardens": Trees,
  "24/7 Security": Shield,
  "Power Backup": Zap,
  "Indoor Games": Gamepad2,
  "Amphitheatre": Theater,
  "Infinity Pool": Sparkles,
  "Rooftop Lounge": Building2,
  "Spa": Flower,
  "Tennis Court": Target,
  "Business Centre": Briefcase,
  "Kids Zone": Baby,
  "Walking Trail": Footprints,
  "EV Charging": PlugZap,
  "Concierge": Bell,
  "Olympic Pool": Medal,
  "Badminton Court": Target,
  "Yoga Deck": PersonStanding,
  "Library": BookOpen,
  "Co-working Space": Monitor,
  "Mini Theatre": Film,
  "Organic Garden": Sprout,
  "Pet Park": Dog,
};

const ProjectDetail = () => {
  const { id } = useParams();
  const project = projects.find((p) => p.id === id);
  const [galleryIdx, setGalleryIdx] = useState(0);
  const [direction, setDirection] = useState(1);
  const [form, setForm] = useState({ name: "", phone: "", email: "", message: "" });

  if (!project) {
    return (
      <PageTransition>
        <div className="min-h-screen flex items-center justify-center bg-cream">
          <div className="text-center">
            <h1 className="text-3xl font-heading font-bold text-dark mb-4">Project Not Found</h1>
            <Link to="/" className="text-gold hover:underline font-body">
              ← Back to Home
            </Link>
          </div>
        </div>
      </PageTransition>
    );
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name || !form.phone) {
      toast.error("Please fill in required fields.");
      return;
    }
    toast.success("Enquiry submitted! We'll contact you soon.");
    setForm({ name: "", phone: "", email: "", message: "" });
  };

  const prevImage = () => {
    setDirection(-1);
    setGalleryIdx((i) => (i === 0 ? project.gallery.length - 1 : i - 1));
  };

  const nextImage = () => {
    setDirection(1);
    setGalleryIdx((i) => (i === project.gallery.length - 1 ? 0 : i + 1));
  };

  return (
    <PageTransition>
      <div className="min-h-screen bg-cream">
        <Navbar />

        {/* Cinematic Hero Gallery */}
        <section className="relative h-[50vh] md:h-[70vh] bg-dark overflow-hidden">
          <AnimatePresence mode="wait" custom={direction}>
            <motion.img
              key={galleryIdx}
              custom={direction}
              initial={{ opacity: 0, scale: 1.1 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              src={project.gallery[galleryIdx]}
              alt={project.name}
              className="w-full h-full object-cover absolute inset-0"
              width={1920}
              height={1080}
            />
          </AnimatePresence>
          <div className="absolute inset-0 bg-gradient-to-t from-dark/80 via-dark/30 to-transparent" />

          {project.gallery.length > 1 && (
            <>
              <button
                onClick={prevImage}
                className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full glass-dark flex items-center justify-center text-cream hover:bg-gold/20 transition-colors cursor-pointer"
                aria-label="Previous image"
              >
                <ChevronLeft size={22} />
              </button>
              <button
                onClick={nextImage}
                className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full glass-dark flex items-center justify-center text-cream hover:bg-gold/20 transition-colors cursor-pointer"
                aria-label="Next image"
              >
                <ChevronRight size={22} />
              </button>
            </>
          )}

          {/* Gallery dots */}
          <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2">
            {project.gallery.map((_, i) => (
              <button
                key={i}
                onClick={() => { setDirection(i > galleryIdx ? 1 : -1); setGalleryIdx(i); }}
                className={`rounded-full transition-all cursor-pointer ${
                  i === galleryIdx ? "w-8 h-2 bg-gold" : "w-2 h-2 bg-cream/40"
                }`}
                aria-label={`Go to image ${i + 1}`}
              />
            ))}
          </div>

          {/* Project name overlay */}
          <div className="absolute bottom-6 left-6 md:left-10">
            <Badge className={`${statusColors[project.status]} text-sm mb-3`}>
              {project.status}
            </Badge>
          </div>
        </section>

        {/* Content */}
        <div className="container mx-auto px-4 py-10 md:py-16">
          <Link
            to="/"
            className="inline-flex items-center gap-1.5 text-muted-foreground hover:text-gold text-sm font-body mb-8 transition-colors"
          >
            <ArrowLeft size={14} /> Back to Projects
          </Link>

          <div className="grid lg:grid-cols-3 gap-10 lg:gap-16">
            {/* Main Content */}
            <div className="lg:col-span-2 space-y-10">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
                <h1 className="text-3xl md:text-5xl font-heading font-bold text-dark">
                  {project.name}
                </h1>
                <div className="flex flex-wrap items-center gap-4 mt-4 text-muted-foreground font-body">
                  <span className="flex items-center gap-1.5">
                    <MapPin size={16} className="text-gold" />
                    {project.location}
                  </span>
                  <span className="flex items-center gap-1.5">
                    <Maximize size={16} className="text-gold" />
                    {project.sizeRange}
                  </span>
                  <span className="flex items-center gap-1.5">
                    <TreePine size={16} className="text-gold" />
                    {project.acres} Acres
                  </span>
                </div>
                <p className="text-foreground/70 mt-4 leading-relaxed font-body text-lg">
                  {project.description}
                </p>
                <p className="text-xs text-muted-foreground font-body mt-2">
                  RERA: {project.reraNumber}
                </p>
              </motion.div>

              {/* Tabs */}
              <Tabs defaultValue="pricing" className="w-full">
                <TabsList className="w-full justify-start bg-white rounded-xl p-1 h-auto">
                  {["pricing", "amenities", "floorplans", "location"].map((tab) => (
                    <TabsTrigger
                      key={tab}
                      value={tab}
                      className="font-body text-sm data-[state=active]:bg-gold data-[state=active]:text-white rounded-lg px-6 py-2.5 capitalize"
                    >
                      {tab === "floorplans" ? "Floor Plans" : tab === "pricing" ? "Price & Config" : tab.charAt(0).toUpperCase() + tab.slice(1)}
                    </TabsTrigger>
                  ))}
                </TabsList>

                <TabsContent value="pricing" className="mt-6">
                  <div className="overflow-x-auto rounded-xl">
                    <table className="w-full border-collapse">
                      <thead>
                        <tr className="bg-dark text-cream">
                          <th className="text-left p-4 font-heading text-sm">Type</th>
                          <th className="text-left p-4 font-heading text-sm">Size</th>
                          <th className="text-left p-4 font-heading text-sm">Price</th>
                        </tr>
                      </thead>
                      <tbody>
                        {project.configs.map((c, i) => (
                          <motion.tr
                            key={i}
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: i * 0.1 }}
                            className="border-b border-border hover:bg-gold/5 transition-colors"
                          >
                            <td className="p-4 font-semibold font-body">{c.type}</td>
                            <td className="p-4 text-muted-foreground font-body">{c.size}</td>
                            <td className="p-4 font-bold text-gold font-body">{c.price}</td>
                          </motion.tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </TabsContent>

                <TabsContent value="amenities" className="mt-6">
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    {project.amenities.map((amenity, i) => {
                      const Icon = amenityIconMap[amenity] || Sparkles;
                      return (
                        <motion.div
                          key={amenity}
                          initial={{ opacity: 0, scale: 0.9 }}
                          animate={{ opacity: 1, scale: 1 }}
                          transition={{ delay: i * 0.05 }}
                          className="flex items-center gap-3 p-4 bg-white rounded-xl hover:shadow-md transition-shadow cursor-default"
                        >
                          <div className="w-10 h-10 rounded-lg bg-gold/10 flex items-center justify-center shrink-0">
                            <Icon size={20} className="text-gold" />
                          </div>
                          <span className="text-sm font-medium font-body">{amenity}</span>
                        </motion.div>
                      );
                    })}
                  </div>
                </TabsContent>

                <TabsContent value="floorplans" className="mt-6">
                  <div className="bg-white rounded-xl p-10 text-center">
                    <p className="text-muted-foreground font-body">
                      Floor plans will be available soon. Contact us for details.
                    </p>
                    <a href="#sidebar-enquiry">
                      <Button className="mt-4 bg-gold text-white hover:bg-gold/90 rounded-full px-8 font-body">
                        Request Floor Plans
                      </Button>
                    </a>
                  </div>
                </TabsContent>

                <TabsContent value="location" className="mt-6">
                  <div className="rounded-xl overflow-hidden h-80">
                    <iframe
                      src={`https://maps.google.com/maps?q=${encodeURIComponent(project.location)}&output=embed`}
                      className="w-full h-full border-0"
                      allowFullScreen
                      loading="lazy"
                      title={`${project.name} location`}
                    />
                  </div>
                </TabsContent>
              </Tabs>
            </div>

            {/* Sticky Sidebar */}
            <div className="lg:col-span-1">
              <div
                id="sidebar-enquiry"
                className="sticky top-24 bg-white rounded-2xl p-6 shadow-elegant"
              >
                <h3 className="text-xl font-heading font-bold text-dark mb-1">Interested?</h3>
                <p className="text-sm text-muted-foreground font-body mb-5">
                  Get a callback from our team
                </p>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <Input
                    placeholder="Name *"
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    className="border-b-2 border-gray-200 focus:border-gold rounded-none bg-transparent font-body"
                  />
                  <Input
                    placeholder="Phone *"
                    value={form.phone}
                    onChange={(e) => setForm({ ...form, phone: e.target.value })}
                    className="border-b-2 border-gray-200 focus:border-gold rounded-none bg-transparent font-body"
                  />
                  <Input
                    type="email"
                    placeholder="Email"
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    className="border-b-2 border-gray-200 focus:border-gold rounded-none bg-transparent font-body"
                  />
                  <Textarea
                    placeholder="Message"
                    rows={3}
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    className="border-b-2 border-gray-200 focus:border-gold rounded-none bg-transparent font-body"
                  />
                  <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                    <Button
                      type="submit"
                      className="w-full bg-gold text-white hover:bg-gold/90 rounded-full py-5 font-body font-semibold"
                    >
                      Enquire Now
                    </Button>
                  </motion.div>
                </form>
                <p className="text-xs text-muted-foreground text-center mt-3 font-body">
                  Or call: +91 98480 11696
                </p>
              </div>
            </div>
          </div>
        </div>

        <Footer />
        <WhatsAppButton />
      </div>
    </PageTransition>
  );
};

export default ProjectDetail;
