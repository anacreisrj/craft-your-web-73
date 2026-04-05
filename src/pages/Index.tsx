import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import InstructorsSection from "@/components/InstructorsSection";
import MentorshipSection from "@/components/MentorshipSection";
import ZoukMovSection from "@/components/ZoukMovSection";
import ContactBar from "@/components/ContactBar";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1">
        <HeroSection />
        <InstructorsSection />
        <MentorshipSection />
        <ZoukMovSection />
        <ContactBar />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
