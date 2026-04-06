import projectExterior from "@/assets/project-modern-building.jpg";
import projectInterior from "@/assets/project-interior-luxury.jpg";
import projectUpcoming from "@/assets/skyline-vizag.jpg";
import constructionSite from "@/assets/construction-site.jpg";
import heroBuilding from "@/assets/hero-building.jpg";
import luxuryApt from "@/assets/project-luxury-apt.jpg";

export interface Project {
  id: string;
  name: string;
  location: string;
  city: string;
  bhk: string;
  sizeRange: string;
  acres: number;
  priceRange: string;
  status: "Under Construction" | "Ready to Move" | "Upcoming";
  image: string;
  gallery: string[];
  reraNumber: string;
  amenities: string[];
  configs: { type: string; size: string; price: string }[];
  description: string;
}

// NOTE: Project details below are placeholders pending real data from SVMS Constructions.
// The only confirmed real project is "SVMS Eswar Residency" at Santhi Nagar, Nad Kotha Road.
// Update these with actual project data, RERA numbers, and pricing from the company.
export const projects: Project[] = [
  {
    id: "svms-eswar-residency",
    name: "SVMS Eswar Residency",
    location: "Santhi Nagar, Nad Kotha Road, Visakhapatnam",
    city: "Visakhapatnam",
    bhk: "2 & 3 BHK",
    sizeRange: "1,050 – 1,800 Sq.Ft",
    acres: 1.5,
    priceRange: "Contact for Price",
    status: "Ready to Move",
    image: projectExterior,
    gallery: [projectExterior, projectInterior, heroBuilding, constructionSite],
    reraNumber: "Contact for Details",
    amenities: ["24/7 Security", "Power Backup", "Landscaped Gardens", "Children's Play Area", "Lift Facility", "Covered Parking"],
    configs: [
      { type: "2 BHK", size: "1,050 Sq.Ft", price: "Contact Us" },
      { type: "3 BHK", size: "1,800 Sq.Ft", price: "Contact Us" },
    ],
    description: "SVMS Eswar Residency is a quality residential project at Santhi Nagar, Nad Kotha Road, Visakhapatnam. Built with RCC framed structure as per ISI standards and Vaasthu compliant design with premium fittings and ample ventilation.",
  },
  {
    id: "svms-marripalem-project",
    name: "SVMS Nivas",
    location: "Marripalem, VUDA Layout, Visakhapatnam",
    city: "Visakhapatnam",
    bhk: "2 & 3 BHK",
    sizeRange: "950 – 1,650 Sq.Ft",
    acres: 1,
    priceRange: "Contact for Price",
    status: "Ready to Move",
    image: luxuryApt,
    gallery: [luxuryApt, projectInterior, heroBuilding, constructionSite],
    reraNumber: "Contact for Details",
    amenities: ["24/7 Security", "Power Backup", "Lift Facility", "Covered Parking", "Landscaped Gardens", "CCTV Surveillance"],
    configs: [
      { type: "2 BHK", size: "950 Sq.Ft", price: "Contact Us" },
      { type: "3 BHK", size: "1,650 Sq.Ft", price: "Contact Us" },
    ],
    description: "SVMS Nivas at Marripalem, VUDA Layout — a comfortable residential project near public transport, Simhachalam Temple, Vizag Airport, and all essential amenities. Vitrified tile flooring, UPVC windows, and 4-passenger lift facility.",
  },
  {
    id: "svms-upcoming-project",
    name: "New Launch — Coming Soon",
    location: "Visakhapatnam",
    city: "Visakhapatnam",
    bhk: "2 & 3 BHK",
    sizeRange: "To Be Announced",
    acres: 0,
    priceRange: "Pre-Launch Pricing",
    status: "Upcoming",
    image: projectUpcoming,
    gallery: [projectUpcoming, projectExterior, projectInterior],
    reraNumber: "To Be Announced",
    amenities: ["Swimming Pool", "Gym", "Clubhouse", "Children's Play Area", "Landscaped Gardens", "24/7 Security", "Power Backup", "Lift Facility"],
    configs: [
      { type: "2 BHK", size: "TBA", price: "Register Interest" },
      { type: "3 BHK", size: "TBA", price: "Register Interest" },
    ],
    description: "Our most ambitious project yet is coming soon. Register your interest to get pre-launch pricing and exclusive updates. Contact us for more details.",
  },
];
