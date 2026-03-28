import { Link } from "react-router-dom";
import { MapPin, Maximize, TreePine } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { projects } from "@/data/projects";

const statusColors: Record<string, string> = {
  "Under Construction": "bg-secondary text-secondary-foreground",
  "Ready to Move": "bg-emerald-600 text-white",
  "Upcoming": "bg-primary text-primary-foreground",
};

const FeaturedProjects = () => {
  return (
    <section id="projects" className="py-16 md:py-24 bg-muted/50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <p className="text-secondary font-medium tracking-[0.2em] uppercase text-sm mb-2">
            Our Portfolio
          </p>
          <h2 className="text-3xl md:text-5xl font-heading font-bold text-primary">
            Featured Projects
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <Link
              key={project.id}
              to={`/project/${project.id}`}
              className="group bg-card rounded-lg overflow-hidden shadow-elegant hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
            >
              <div className="relative overflow-hidden h-56">
                <img
                  src={project.image}
                  alt={project.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                  width={800}
                  height={600}
                />
                <Badge className={`absolute top-3 right-3 ${statusColors[project.status]} text-xs font-semibold`}>
                  {project.status}
                </Badge>
              </div>
              <div className="p-5 space-y-3">
                <h3 className="text-xl font-heading font-bold text-primary group-hover:text-secondary transition-colors">
                  {project.name}
                </h3>
                <div className="flex items-center gap-1 text-muted-foreground text-sm">
                  <MapPin size={14} />
                  <span>{project.location}</span>
                </div>
                <div className="flex items-center gap-4 text-sm text-foreground/70">
                  <span className="flex items-center gap-1">
                    <Maximize size={14} />
                    {project.sizeRange}
                  </span>
                  <span className="flex items-center gap-1">
                    <TreePine size={14} />
                    {project.acres} Acres
                  </span>
                </div>
                <div className="flex items-center justify-between pt-2 border-t border-border">
                  <span className="font-semibold text-primary">{project.bhk}</span>
                  <span className="font-bold text-secondary text-lg">{project.priceRange}</span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedProjects;
