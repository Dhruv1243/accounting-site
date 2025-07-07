import "./Home.css";
import ContactSection from "../ContactSection/ContactSection";
import HereSection from "../HereSection/HereSection";
import AboutSection from "../AboutSection/AboutSection";
import ServicesSection from "../ServicesSection/ServicesSection";
import TransparencySection from "../TransparencySection/TransparencySection";

function Home() {
  return (
    <div className="home-container" id="home">
      <HereSection />
      <AboutSection />
      <ServicesSection />
      <TransparencySection />
      <ContactSection />
    </div>
  );
}

export default Home;
