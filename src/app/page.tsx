import Navbar from "@/components/Navbar/Navbar";
import Image from "next/image";
import { HomeSection } from "@/components/Sections/homesection/Home";
import FirstSection from "@/components/Sections/firstSection/FirstSection";
import SecondSection from "@/components/Sections/secondSection/SecondSection";
import ThirdSection from "@/components/Sections/thirdSection/ThirdSection";
import { FourthSection } from "@/components/Sections/fourthSection/fourthSection";

export default function Home() {
  return (
    <div>
      <Navbar />
      <HomeSection />
      <FirstSection />
      <SecondSection />
      <ThirdSection />
      <FourthSection/>
      <div className="h-screen"></div>
    </div>
  );
}
