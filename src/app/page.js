import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import EducationSection from "@/components/EducationSection";
import SkillsSection from "@/components/SkillsSection";
import ProjectsSection from "@/components/ProjectsSection";
import ProjectCTAs from "@/components/ProjectCTAs";
import ContactSection from "@/components/ContactSection";
import WorkExperience from "@/components/WorkExperience";

export default function HomePage() {
  return (
    <main>
      <Navbar />
  <HeroSection />
  <AboutSection />
  <EducationSection />
  <WorkExperience />
  <SkillsSection />
  <ProjectsSection />
  <ProjectCTAs />

  {/* Contact section moved below Projects */}
  <ContactSection />

    </main>
  );
}
      