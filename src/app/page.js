import Image from "next/image";
import HeroSection from "./components/HeroSection";
import Navbar from "./components/Navbar";
import AboutSection from "./components/AboutSection";
import EmailSection from "./components/EmailSection";
import  {Footer}  from "./components/Footer";
import  AchievmentSection  from "./components/AchievmentSection";
import ProjectSection from "./components/ProjectSection";
import StickerSection from "./components/StickerSection";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-[#121212]">
      <Navbar/>
      <div className ="container mx-auto mt-24 px-12 py-4">
      <HeroSection/>
      <AchievmentSection/>
      <StickerSection/>
      <AboutSection/>
      <ProjectSection/>
      <EmailSection />
      <Footer/>
      </div>
    </main>
  );
}
