import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import AboutSection from "@/components/AboutSection";
import QuienesSomos from "@/components/QuienesSomos";
import PorQueElegirnos from "@/components/PorQueElegirnos";
import SolucionMedida from "@/components/SolucionMedida";
import Metodologia from "@/components/Metodologia";
import ContactForm from "@/components/ContactSection";
import Footer from "@/components/Footer";
import ContactSection from "@/components/ContactSection";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      <Features />
      <AboutSection />
      <QuienesSomos />
      <PorQueElegirnos />
      <SolucionMedida />
      <Metodologia />
      <ContactSection/>
      <Footer />
    </main>
  );
}
