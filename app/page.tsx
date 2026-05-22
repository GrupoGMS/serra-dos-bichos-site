import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import HeroSection from "@/components/sections/HeroSection";
import BanhoTosaSection from "@/components/sections/BanhoTosaSection";
import RacoesSection from "@/components/sections/RacoesSection";
import TaxiDogSection from "@/components/sections/TaxiDogSection";
import CTASection from "@/components/sections/CTASection";
import WhatsAppFloat from "@/components/ui/WhatsAppFloat";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <HeroSection />
        <BanhoTosaSection />
        <RacoesSection />
        <TaxiDogSection />
        <CTASection />
      </main>
      <Footer />
      <WhatsAppFloat />
    </>
  );
}
