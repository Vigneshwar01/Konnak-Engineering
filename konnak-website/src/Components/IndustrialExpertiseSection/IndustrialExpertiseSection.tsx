"use client";

import { Battery, Plane, Network } from "lucide-react";
import { Variants } from "framer-motion";
import { MotionDiv, MotionH2, MotionP } from "../FramerMotion/FramerMotion";

export default function IndustrialExpertiseSection() {
  const expertise = [
    {
      icon: <Battery className="w-10 h-10 text-green-600" />,
      title: "Bio CBG / CNG Plants",
    },
    {
      icon: <Plane className="w-10 h-10 text-green-600" />,
      title: "Sustainable Aviation Fuel (SAF)",
    },
    {
      icon: <Network className="w-10 h-10 text-green-600" />,
      title: "Green Hydrogen Systems",
    },
  ];

  const cardVariants: Variants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <section className="py-14 bg-gray-50" id="whatwedo">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <MotionH2
          className="text-3xl md:text-4xl font-bold text-gray-900 relative inline-block"
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: false, amount: 0.2 }}
        >
          What We Do
          <span className="absolute -bottom-2 left-1/2 md:left-0 w-23 h-1 bg-green-500 transform -translate-x-1/2 md:translate-x-0 rounded"></span>
        </MotionH2>

        <MotionP
          className="mt-6 text-lg text-gray-700 leading-relaxed"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: false, amount: 0.2 }}
        >
          We provide innovative and sustainable green energy solutions,
          specializing in advanced Bio CBG plants, sustainable aviation fuels,
          and cutting-edge green hydrogen systems designed to meet the future’s
          energy demands.
        </MotionP>

        <div className="mt-10 grid grid-cols-1 sm:grid-cols-3 gap-6">
          {expertise.map((item, idx) => (
            <MotionDiv
              key={idx}
              className="flex flex-col items-center gap-4 p-8 bg-white rounded-2xl shadow-md border border-gray-100"
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              transition={{ duration: 0.5, delay: idx * 0.2 }}
              viewport={{ once: false, amount: 0.2 }}
              whileHover={{ scale: 1.05, y: -5 }}
            >
              <div className="flex items-center justify-center w-16 h-16 rounded-full bg-green-100">
                {item.icon}
              </div>
              <p className="text-lg font-semibold text-gray-800 leading-snug">
                {item.title}
              </p>
            </MotionDiv>
          ))}
        </div>
      </div>
    </section>
  );
}
