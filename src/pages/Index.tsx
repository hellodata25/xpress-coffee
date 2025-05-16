
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import FeaturedCoffee from "@/components/FeaturedCoffee";
import AboutSection from "@/components/AboutSection";
import LocationFinder from "@/components/LocationFinder";
import SimpleCTA from "@/components/SimpleCTA";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main>
        <HeroSection />
        <FeaturedCoffee />
        <AboutSection />
        <LocationFinder />
        <SimpleCTA />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
