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
    id: "royal-grandeur",
    name: "Royal Grandeur",
    location: "Gachibowli, Hyderabad",
    city: "Hyderabad",
    bhk: "2, 3 & 4 BHK",
    sizeRange: "1,250 – 3,200 Sq.Ft",
    acres: 12.5,
    priceRange: "₹1.2 Cr – ₹4.5 Cr",
    status: "Under Construction",
    image: projectExterior,
    gallery: [projectExterior, projectInterior, project3],
    reraNumber: "P02400003456",
    amenities: ["Swimming Pool", "Gym", "Clubhouse", "Jogging Track", "Children's Play Area", "Landscaped Gardens", "24/7 Security", "Power Backup", "Indoor Games", "Amphitheatre"],
    configs: [
      { type: "2 BHK", size: "1,250 Sq.Ft", price: "₹1.2 Cr" },
      { type: "3 BHK", size: "2,100 Sq.Ft", price: "₹2.8 Cr" },
      { type: "4 BHK", size: "3,200 Sq.Ft", price: "₹4.5 Cr" },
    ],
    description: "Royal Grandeur is a premium residential project offering world-class amenities and spacious living in the heart of Gachibowli. Spread across 12.5 acres of lush greenery, this project redefines luxury living.",
  },
  {
    id: "serene-heights",
    name: "Serene Heights",
    location: "Kokapet, Hyderabad",
    city: "Hyderabad",
    bhk: "3 & 4 BHK",
    sizeRange: "1,800 – 3,500 Sq.Ft",
    acres: 8,
    priceRange: "₹2.5 Cr – ₹5.8 Cr",
    status: "Ready to Move",
    image: projectInterior,
    gallery: [projectInterior, projectExterior, project3],
    reraNumber: "P02400007891",
    amenities: ["Infinity Pool", "Rooftop Lounge", "Gym", "Spa", "Tennis Court", "Business Centre", "Kids Zone", "Walking Trail", "EV Charging", "Concierge"],
    configs: [
      { type: "3 BHK", size: "1,800 Sq.Ft", price: "₹2.5 Cr" },
      { type: "3 BHK Premium", size: "2,400 Sq.Ft", price: "₹3.8 Cr" },
      { type: "4 BHK", size: "3,500 Sq.Ft", price: "₹5.8 Cr" },
    ],
    description: "Serene Heights offers an elevated lifestyle with panoramic views and ultra-modern amenities. Located in the rapidly developing Kokapet area, it is perfect for families seeking premium living.",
  },
  {
    id: "emerald-bay",
    name: "Emerald Bay",
    location: "Whitefield, Bangalore",
    city: "Bangalore",
    bhk: "1, 2 & 3 BHK",
    sizeRange: "650 – 1,800 Sq.Ft",
    acres: 15,
    priceRange: "₹55 L – ₹2.2 Cr",
    status: "Upcoming",
    image: project3,
    gallery: [project3, projectExterior, projectInterior],
    reraNumber: "PRM/KA/RERA/1251/310/AG/180412/002145",
    amenities: ["Olympic Pool", "Gym", "Clubhouse", "Badminton Court", "Yoga Deck", "Library", "Co-working Space", "Mini Theatre", "Organic Garden", "Pet Park"],
    configs: [
      { type: "1 BHK", size: "650 Sq.Ft", price: "₹55 L" },
      { type: "2 BHK", size: "1,100 Sq.Ft", price: "₹1.1 Cr" },
      { type: "3 BHK", size: "1,800 Sq.Ft", price: "₹2.2 Cr" },
    ],
    description: "Emerald Bay brings world-class living to Whitefield, Bangalore. Spread over 15 acres with a focus on sustainability and community living, this project offers a complete lifestyle ecosystem.",
  },
];
