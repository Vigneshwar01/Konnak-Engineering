"use client";
import { MotionDiv, MotionH2, MotionP } from "../FramerMotion/FramerMotion";

export default function WhatwhoareSection() {
  return (
    <MotionDiv
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      viewport={{ once: false, amount: 0.3 }}
      id="whoare"
    >
      <section className="py-14 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <MotionH2
            className="text-3xl md:text-4xl font-bold text-gray-900 relative inline-block"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.5, delay: 0.2, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            Who We Are
            <span className="absolute -bottom-2 left-1/2 md:left-0 w-19 h-1 bg-green-500 transform -translate-x-1/2 md:translate-x-0 rounded"></span>
          </MotionH2>

          <MotionP
            className="mt-6 text-lg text-gray-700 leading-relaxed"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.8, delay: 0.5, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            Konnak Engineering is a technology-driven firm delivering green
            energy solutions under a Build, Own, and Operate model, along with
            advanced engineering consulting services across India and
            internationally
          </MotionP>

          <div className="mt-8 space-y-4">
            <MotionP
              className="text-lg"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.8, delay: 0.8, ease: "easeOut" }}
              viewport={{ once: true }}
            >
              <span className="font-semibold text-green-600">Vision:</span>
              <span className="text-gray-700">
                {" "}
                To build a clean energy future and deliver technology-driven
                engineering solutions to the world.
              </span>
            </MotionP>
          </div>
        </div>
      </section>
    </MotionDiv>
  );
}
