import Navbar from "@/components/Navbar/Navbar";
import Image from "next/image";
import { HomeSection } from "@/components/Sections/Home/Home";
import FirstSection from "@/components/Sections/FirstSection";
import SecondSection from "@/components/Sections/SecondSection";

export default function Home() {
  return (
    <div>
      <Navbar />
      <HomeSection />
      <FirstSection />
      <SecondSection/>
      <div className="h-screen"></div>
    </div>
  );
}
