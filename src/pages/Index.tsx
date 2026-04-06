import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import StatsBar from "@/components/StatsBar";
import FeaturedProjects from "@/components/FeaturedProjects";
import Timeline from "@/components/Timeline";
import WhyUs from "@/components/WhyUs";
import ChairmanMessage from "@/components/ChairmanMessage";
import AwardsSection from "@/components/AwardsSection";
import Testimonials from "@/components/Testimonials";
import EnquiryForm from "@/components/EnquiryForm";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import PageTransition from "@/components/PageTransition";

const Index = () => {
  return (
    <PageTransition>
      <div className="min-h-screen">
        <Navbar />
        <HeroSection />
        <StatsBar />
        <FeaturedProjects />
        <Timeline />
        <WhyUs />
        <ChairmanMessage />
        <AwardsSection />
        <Testimonials />
        <EnquiryForm />
        <Footer />
        <WhatsAppButton />
      </div>
    </PageTransition>
  );
};

export default Index;
