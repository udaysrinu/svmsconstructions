import { useParams, Link } from "react-router-dom";
import { useState } from "react";
import { ArrowLeft, MapPin, Maximize, TreePine, ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { projects } from "@/data/projects";
import { toast } from "sonner";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

const statusColors: Record<string, string> = {
  "Under Construction": "bg-secondary text-secondary-foreground",
  "Ready to Move": "bg-emerald-600 text-white",
  "Upcoming": "bg-primary text-primary-foreground",
};

const amenityIcons: Record<string, string> = {
  "Swimming Pool": "🏊", "Gym": "🏋️", "Clubhouse": "🏠", "Jogging Track": "🏃",
  "Children's Play Area": "🎪", "Landscaped Gardens": "🌳", "24/7 Security": "🔒",
  "Power Backup": "⚡", "Indoor Games": "🎮", "Amphitheatre": "🎭",
  "Infinity Pool": "🌊", "Rooftop Lounge": "🌆", "Spa": "💆", "Tennis Court": "🎾",
  "Business Centre": "💼", "Kids Zone": "👶", "Walking Trail": "🚶", "EV Charging": "🔌",
  "Concierge": "🛎️", "Olympic Pool": "🏊", "Badminton Court": "🏸", "Yoga Deck": "🧘",
  "Library": "📚", "Co-working Space": "💻", "Mini Theatre": "🎬", "Organic Garden": "🌱",
  "Pet Park": "🐕",
};

const ProjectDetail = () => {
  const { id } = useParams();
  const project = projects.find((p) => p.id === id);
  const [galleryIdx, setGalleryIdx] = useState(0);
  const [form, setForm] = useState({ name: "", phone: "", email: "", message: "" });

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-heading font-bold text-primary mb-4">Project Not Found</h1>
          <Link to="/" className="text-secondary hover:underline">← Back to Home</Link>
        </div>
      </div>
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

  return (
    <div className="min-h-screen">
      <Navbar />

      {/* Gallery */}
      <section className="relative h-[50vh] md:h-[70vh] bg-primary">
        <img
          src={project.gallery[galleryIdx]}
          alt={project.name}
          className="w-full h-full object-cover"
          width={1920}
          height={1080}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-primary/60 to-transparent" />
        {project.gallery.length > 1 && (
          <>
            <button
              onClick={() => setGalleryIdx((i) => (i === 0 ? project.gallery.length - 1 : i - 1))}
              className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-background/80 flex items-center justify-center"
              aria-label="Previous image"
            >
              <ChevronLeft size={20} />
            </button>
            <button
              onClick={() => setGalleryIdx((i) => (i === project.gallery.length - 1 ? 0 : i + 1))}
              className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-background/80 flex items-center justify-center"
              aria-label="Next image"
            >
              <ChevronRight size={20} />
            </button>
          </>
        )}
        <div className="absolute bottom-6 left-6">
          <Badge className={`${statusColors[project.status]} text-sm`}>{project.status}</Badge>
        </div>
      </section>

      <div className="container mx-auto px-4 py-10">
        <Link to="/" className="inline-flex items-center gap-1 text-muted-foreground hover:text-secondary text-sm mb-6">
          <ArrowLeft size={14} /> Back to Projects
        </Link>

        <div className="grid lg:grid-cols-3 gap-10">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-10">
            <div>
              <h1 className="text-3xl md:text-5xl font-heading font-bold text-primary">{project.name}</h1>
              <div className="flex flex-wrap items-center gap-4 mt-3 text-muted-foreground">
                <span className="flex items-center gap-1"><MapPin size={16} />{project.location}</span>
                <span className="flex items-center gap-1"><Maximize size={16} />{project.sizeRange}</span>
                <span className="flex items-center gap-1"><TreePine size={16} />{project.acres} Acres</span>
              </div>
              <p className="text-foreground/70 mt-4 leading-relaxed">{project.description}</p>
              <p className="text-xs text-muted-foreground mt-2">RERA: {project.reraNumber}</p>
            </div>

            <Tabs defaultValue="pricing">
              <TabsList className="w-full justify-start bg-muted">
                <TabsTrigger value="pricing">Price & Config</TabsTrigger>
                <TabsTrigger value="amenities">Amenities</TabsTrigger>
                <TabsTrigger value="floorplans">Floor Plans</TabsTrigger>
                <TabsTrigger value="location">Location</TabsTrigger>
              </TabsList>

              <TabsContent value="pricing" className="mt-6">
                <div className="overflow-x-auto">
                  <table className="w-full border-collapse">
                    <thead>
                      <tr className="bg-primary text-primary-foreground">
                        <th className="text-left p-4 font-heading">Type</th>
                        <th className="text-left p-4 font-heading">Size</th>
                        <th className="text-left p-4 font-heading">Price</th>
                      </tr>
                    </thead>
                    <tbody>
                      {project.configs.map((c, i) => (
                        <tr key={i} className="border-b border-border hover:bg-muted/50">
                          <td className="p-4 font-semibold">{c.type}</td>
                          <td className="p-4 text-muted-foreground">{c.size}</td>
                          <td className="p-4 font-bold text-secondary">{c.price}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </TabsContent>

              <TabsContent value="amenities" className="mt-6">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  {project.amenities.map((a) => (
                    <div key={a} className="flex items-center gap-3 p-3 bg-muted/50 rounded-lg">
                      <span className="text-2xl">{amenityIcons[a] || "✨"}</span>
                      <span className="text-sm font-medium">{a}</span>
                    </div>
                  ))}
                </div>
              </TabsContent>

              <TabsContent value="floorplans" className="mt-6">
                <div className="bg-muted/50 rounded-lg p-10 text-center">
                  <p className="text-muted-foreground">Floor plans will be available soon. Contact us for details.</p>
                  <a href="#sidebar-enquiry">
                    <Button className="mt-4 bg-secondary text-secondary-foreground hover:bg-secondary/90">
                      Request Floor Plans
                    </Button>
                  </a>
                </div>
              </TabsContent>

              <TabsContent value="location" className="mt-6">
                <div className="rounded-lg overflow-hidden h-80">
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
            <div id="sidebar-enquiry" className="sticky top-24 bg-card border border-border rounded-lg p-6 shadow-elegant">
              <h3 className="text-xl font-heading font-bold text-primary mb-1">Interested?</h3>
              <p className="text-sm text-muted-foreground mb-5">Get a callback from our team</p>
              <form onSubmit={handleSubmit} className="space-y-3">
                <Input
                  placeholder="Name *"
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                />
                <Input
                  placeholder="Phone *"
                  value={form.phone}
                  onChange={(e) => setForm({ ...form, phone: e.target.value })}
                />
                <Input
                  type="email"
                  placeholder="Email"
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                />
                <Textarea
                  placeholder="Message"
                  rows={3}
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                />
                <Button
                  type="submit"
                  className="w-full bg-secondary text-secondary-foreground hover:bg-secondary/90 font-semibold py-5"
                >
                  Enquire Now
                </Button>
              </form>
              <p className="text-xs text-muted-foreground text-center mt-3">
                Or call: +91 90001 90001
              </p>
            </div>
          </div>
        </div>
      </div>

      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default ProjectDetail;
