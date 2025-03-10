import Navbar from "@/components/Navbar/Navbar";
import Image from "next/image";
import { HomeSection } from "@/components/Sections/home/home_section/Home";
import FirstSection from "@/components/Sections/home/first_section/FirstSection";
import SecondSection from "@/components/Sections/home/second_section/SecondSection";
import ThirdSection from "@/components/Sections/home/third_section/ThirdSection";
import { FourthSection } from "@/components/Sections/home/fourth_section/fourthSection";
import FifthSection from "@/components/Sections/home/fifth_section/FifthSection";
import Pricing from "@/components/Sections/home/pricing_section/Pricing";
import Footer from "@/components/Sections/home/footer/Footer";
import ScrollAnimation from "@/components/ui/ScrollAnimation";

export default function Home() {
  return (
    <div>
      <HomeSection />
      <FirstSection />
      <SecondSection />
      <ThirdSection />
      <FourthSection />
      <FifthSection />
      <Pricing />
      <ScrollAnimation/>
    </div>
  );
}
