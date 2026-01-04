import { useState, useEffect } from "react";
import HeroSection from "@/components/HeroSection";
import AdvantagesSection from "@/components/AdvantagesSection";
import CarGallery from "@/components/CarGallery";
import LocationsSection from "@/components/LocationsSection";
import ConversionSection from "@/components/ConversionSection";
import AnnouncementBar from "@/components/AnnouncementBar";
import FloatingContactBar from "@/components/FloatingContactBar";
import Footer from "@/components/Footer";

const Index = () => {
  const [announcementVisible, setAnnouncementVisible] = useState(true);

  useEffect(() => {
    const dismissed = sessionStorage.getItem("announcementDismissed");
    if (dismissed) {
      setAnnouncementVisible(false);
    }
  }, []);

  return (
    <main className={announcementVisible ? "pt-12" : ""}>
      <AnnouncementBar />
      <HeroSection />
      <AdvantagesSection />
      <CarGallery />
      <LocationsSection />
      <ConversionSection />
      <Footer />
      <FloatingContactBar />
    </main>
  );
};

export default Index;
