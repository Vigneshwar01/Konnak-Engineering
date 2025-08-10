"use client";

import { Variants } from "framer-motion";
import { MotionDiv } from "../FramerMotion/FramerMotion";

export default function SustainableEnergyAndContact() {
  const projects = [
    { title: "FEED & Detailed Engineering" },
    { title: "Project Management & EPC" },
    { title: "Digital Twin & Smart Plant DesigN" },
    { title: "As building and Handover" },
    { title: "Asset Integrity and Maintenance Data (CMMS)" },
  ];

  const cardVariants: Variants = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0 },
  };

  const sectionVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <section className="py-14 bg-white" id="contact">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-12 items-start ">
        <MotionDiv
          className="max-w-lg"
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 leading-tight">
            Technology Driven Engineering Consulting Solutions
          </h2>

          <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
            {projects.map((p, idx) => (
              <MotionDiv
                key={idx}
                className="flex items-center justify-center px-6 py-4 bg-gray-50 rounded-lg border border-gray-100 text-gray-800 font-medium shadow-sm hover:shadow-md transition cursor-pointer"
                variants={cardVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.1 }}
                transition={{
                  duration: 0.5,
                  delay: idx * 0.15,
                  ease: "easeOut",
                }}
                whileHover={{ scale: 1.05, y: -5 }}
              >
                {p.title}
              </MotionDiv>
            ))}
          </div>

          <div className="mt-6 text-sm text-gray-500 space-y-1">
            <p>Tamil Nadu, India</p>
            <p>
  <a
    href="mailto:info@kormakeng.com"
    className="text-blue-600 hover:underline"
  >
    info@kormakeng.com
  </a>
</p>
          </div>
        </MotionDiv>

        <MotionDiv
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.3 }}
          className="max-w-lg"
        >
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 leading-tight">
            Contact
          </h2>

          <form className="mt-6 space-y-4">
            <input
              type="text"
              placeholder="Name"
              className="w-full border border-gray-300 rounded-lg px-4 py-3 text-gray-800 focus:outline-none focus:ring-2 focus:ring-[#0B2447]"
            />
            <input
              type="email"
              placeholder="Email"
              className="w-full border border-gray-300 rounded-lg px-4 py-3 text-gray-800 focus:outline-none focus:ring-2 focus:ring-[#0B2447]"
            />
            <textarea
              placeholder="Message"
              rows={4}
              className="w-full border border-gray-300 rounded-lg px-4 py-3 text-gray-800 focus:outline-none focus:ring-2 focus:ring-[#0B2447]"
            ></textarea>

            <button
              type="submit"
              className="relative overflow-hidden px-5 py-2 text-white font-medium bg-[#0b2c3d] rounded-lg group shadow-md hover:shadow-lg transition-all duration-300"
            >
                            <span className="absolute inset-0 bg-green-600 transform -translate-x-full group-hover:translate-x-0 transition-transform duration-300 ease-out"></span>

               <span className="relative z-10">Send</span>
            </button>
          </form>
        </MotionDiv>
      </div>
    </section>
  );
}
