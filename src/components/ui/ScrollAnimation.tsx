"use client";
import "animate.css";
import { motion } from "framer-motion";
import { use, useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";

interface ScrollAnimationWrapperProps {
  children: React.ReactNode;
  className?: string;
  animationClass?: string;
  style?: React.CSSProperties;
  delay?: number;
}

export default function ScrollAnimationWrapper({
  children,
  className,
  animationClass = "animate__fadeInUp",
  delay = 0,
}: ScrollAnimationWrapperProps) {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [isAnimated, setIsAnimated] = useState(false);

  useEffect(()=> {
    if(inView){
        setTimeout(() => setIsAnimated(true), delay);
    }
  }, [inView, delay]);

  return (
    <div
      ref={ref}
      
      className={` ${className} animate__animated ${isAnimated ? animationClass : "opacity-0"}`} 
      style={{ animationDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
}
