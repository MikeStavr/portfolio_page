import AboutSection from "../components/AboutSection";
import ContactSection from "../components/ContactSection";
import HeroSection from "../components/HeroSection";
import ProjectsSection from "../components/ProjectsSection";

function HomePage() {
  return (
    <section className="container mx-auto">
      <HeroSection />
      <div className="divider"></div>
      <AboutSection />
      <div className="divider"></div>
      <ProjectsSection />
      <div className="divider"></div>
      <ContactSection />
    </section>
  );
}

export default HomePage;
