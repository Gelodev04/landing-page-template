"use client"; // Only for Next.js, remove if using CRA/Vite

import { motion } from "framer-motion";
import { useRef } from "react";
import { useInView } from "framer-motion";

const FadeInSection = ({ children }: any) => {
  const ref = useRef(null);
 

  return (
    <motion.div
    ref={ref}
    initial={{ opacity: 0 }}
    whileInView={{ opacity: 1}}
    transition={{ duration: 0.6, ease: "easeOut" }}
   
  >
    {children}
  </motion.div>
  
  );
};

export default FadeInSection;