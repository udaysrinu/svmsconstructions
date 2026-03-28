import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import StatsBar from "@/components/StatsBar";
import FeaturedProjects from "@/components/FeaturedProjects";
import WhyUs from "@/components/WhyUs";
import ChairmanMessage from "@/components/ChairmanMessage";
import AwardsSection from "@/components/AwardsSection";
import Testimonials from "@/components/Testimonials";
import EnquiryForm from "@/components/EnquiryForm";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <HeroSection />
      <StatsBar />
      <FeaturedProjects />
      <WhyUs />
      <ChairmanMessage />
      <AwardsSection />
      <Testimonials />
      <EnquiryForm />
      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default Index;
