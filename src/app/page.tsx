import Navbar from "@/components/Navbar/Navbar";
import Image from "next/image";
import { HomeSection } from "@/components/Sections/home_section/Home";
import FirstSection from "@/components/Sections/first_section/FirstSection";
import SecondSection from "@/components/Sections/second_section/SecondSection";
import ThirdSection from "@/components/Sections/third_section/ThirdSection";
import { FourthSection } from "@/components/Sections/fourth_section/fourthSection";
import FifthSection from "@/components/Sections/fifth_section/FifthSection";
import Pricing from "@/components/Sections/pricing/Pricing";
import Footer from "@/components/Sections/footer/Footer";

export default function Home() {
  return (
    <div>
      <Navbar />
      <HomeSection />
      <FirstSection />
      <SecondSection />
      <ThirdSection />
      <FourthSection/>
      <FifthSection/>
      <Pricing/>
      <Footer/>
    </div>
  );
}
