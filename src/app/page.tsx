import HeroSection from "@/components/HeroSection";
import GallerySection from "@/components/GallerySection";
import PropertyHighlights from "@/components/PropertyHighlights";
import DescriptionSection from "@/components/DescriptionSection";
import InvestmentSection from "@/components/InvestmentSection";
import FloorPlanSection from "@/components/FloorPlanSection";
import NearbyPlacesSection from "@/components/NearbyPlacesSection";
import LifestyleSection from "@/components/LifestyleSection";
import MapSection from "@/components/MapSection";
import CTASection from "@/components/CTASection";
import FAQSection from "@/components/FAQSection";
import Footer from "@/components/Footer";
import WhatsAppFloatingButton from "@/components/WhatsAppFloatingButton";
import TrackingProvider from "@/components/TrackingProvider";
import TechnicalDetailsSection from "@/components/TechnicalDetailsSection";

export default function Home() {
  return (
    <TrackingProvider>
      <main>
        {/* 1. Hero */}
        <HeroSection />

        {/* 2. Ficha Técnica */}
        <TechnicalDetailsSection />

        {/* 3. Galeria (fotos) */}
        <GallerySection />

        {/* 4. Descrição comercial */}
        <DescriptionSection />

        {/* 5. Destaques do imóvel */}
        <PropertyHighlights />

        {/* 6. Planta baixa */}
        <FloorPlanSection />

        {/* 7. Proximidades */}
        <NearbyPlacesSection />

        {/* 8. Mapa */}
        <MapSection />

        {/* 9. Potencial de investimento */}
        <InvestmentSection />

        {/* 10. Estilo de vida */}
        <LifestyleSection />

        {/* 11. FAQ */}
        <FAQSection />

        {/* 12. CTA final */}
        <CTASection />

        {/* Footer */}
        <Footer />
      </main>

      {/* Botão flutuante WhatsApp */}
      <WhatsAppFloatingButton />
    </TrackingProvider>
  );
}
