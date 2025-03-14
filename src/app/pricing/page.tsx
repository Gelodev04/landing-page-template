import Navbar from "@/components/Navbar/Navbar";
import Footer from "@/components/Sections/home/footer/Footer";
import Section from "@/components/Sections/pricingpage/extra/Section";
import Pricing from "@/components/Sections/pricingpage/pricingcards/Pricing";
import React from "react";


export default function page() {
  return (
    <div className="">
      <Navbar/>
      <Pricing />
      <Section/>
      <Footer/>
    </div>
  );
}
