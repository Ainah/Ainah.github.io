import { Navbar } from "../components/Navbar";
import { FirstSection } from "../components/FirstSection";
import { AboutSection } from "../components/AboutSection";
import { SkillsSection } from "../components/SkillsSection";
import { ProjectsSection } from "../components/ProjectsSection";
import { ContactSection } from "../components/ContactSection";
import { Footer } from "../components/Footer";

export const Home = () => {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      {/* Theme Toggle */}
      {/* <ThemeToggle /> */}
      {/* Background Effects */}
      {/* <StarBackground /> */}

      {/* Navbar */}
      <Navbar />
      {/* Main Content */}
      <main>
        <FirstSection />
        <AboutSection />
        <SkillsSection />
        <ProjectsSection />
        <ContactSection />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
};
