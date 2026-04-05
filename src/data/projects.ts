import projectInterior from "@/assets/project-interior.jpg";
import projectExterior from "@/assets/project-exterior.jpg";
import project3 from "@/assets/project-3.jpg";

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

export const projects: Project[] = [
  {
    id: "svms-grand-residency",
    name: "SVMS Grand Residency",
    location: "Madhurawada, Visakhapatnam",
    city: "Visakhapatnam",
    bhk: "2, 3 & 4 BHK",
    sizeRange: "1,250 – 3,200 Sq.Ft",
    acres: 5.5,
    priceRange: "₹65 L – ₹1.8 Cr",
    status: "Under Construction",
    image: projectExterior,
    gallery: [projectExterior, projectInterior, project3],
    reraNumber: "P02400003456",
    amenities: ["Swimming Pool", "Gym", "Clubhouse", "Jogging Track", "Children's Play Area", "Landscaped Gardens", "24/7 Security", "Power Backup", "Indoor Games", "Amphitheatre"],
    configs: [
      { type: "2 BHK", size: "1,250 Sq.Ft", price: "₹65 L" },
      { type: "3 BHK", size: "2,100 Sq.Ft", price: "₹1.2 Cr" },
      { type: "4 BHK", size: "3,200 Sq.Ft", price: "₹1.8 Cr" },
    ],
    description: "SVMS Grand Residency is a premium residential project offering world-class amenities and spacious living in the heart of Madhurawada. Spread across 5.5 acres of lush greenery, this project redefines comfort living in Visakhapatnam.",
  },
  {
    id: "svms-serenity-heights",
    name: "SVMS Serenity Heights",
    location: "MVP Colony, Visakhapatnam",
    city: "Visakhapatnam",
    bhk: "3 & 4 BHK",
    sizeRange: "1,800 – 3,500 Sq.Ft",
    acres: 3,
    priceRange: "₹1.1 Cr – ₹2.5 Cr",
    status: "Ready to Move",
    image: projectInterior,
    gallery: [projectInterior, projectExterior, project3],
    reraNumber: "P02400007891",
    amenities: ["Infinity Pool", "Rooftop Lounge", "Gym", "Spa", "Tennis Court", "Business Centre", "Kids Zone", "Walking Trail", "EV Charging", "Concierge"],
    configs: [
      { type: "3 BHK", size: "1,800 Sq.Ft", price: "₹1.1 Cr" },
      { type: "3 BHK Premium", size: "2,400 Sq.Ft", price: "₹1.8 Cr" },
      { type: "4 BHK", size: "3,500 Sq.Ft", price: "₹2.5 Cr" },
    ],
    description: "SVMS Serenity Heights offers an elevated lifestyle with panoramic views and ultra-modern amenities. Located in the prime MVP Colony area, it is perfect for families seeking premium living in Visakhapatnam.",
  },
  {
    id: "svms-lakewood-villas",
    name: "SVMS Lakewood Villas",
    location: "Rushikonda, Visakhapatnam",
    city: "Visakhapatnam",
    bhk: "1, 2 & 3 BHK",
    sizeRange: "650 – 1,800 Sq.Ft",
    acres: 4,
    priceRange: "₹40 L – ₹1.4 Cr",
    status: "Upcoming",
    image: project3,
    gallery: [project3, projectExterior, projectInterior],
    reraNumber: "P02400009123",
    amenities: ["Olympic Pool", "Gym", "Clubhouse", "Badminton Court", "Yoga Deck", "Library", "Co-working Space", "Mini Theatre", "Organic Garden", "Pet Park"],
    configs: [
      { type: "1 BHK", size: "650 Sq.Ft", price: "₹40 L" },
      { type: "2 BHK", size: "1,100 Sq.Ft", price: "₹85 L" },
      { type: "3 BHK", size: "1,800 Sq.Ft", price: "₹1.4 Cr" },
    ],
    description: "SVMS Lakewood Villas brings coastal living to Rushikonda, Visakhapatnam. Spread over 4 acres near the beach, this project offers a complete lifestyle ecosystem with a focus on sustainability and community living.",
  },
];
