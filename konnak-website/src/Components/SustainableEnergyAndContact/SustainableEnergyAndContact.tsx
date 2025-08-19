"use client";

import { Variants } from "framer-motion";
import { MotionDiv } from "../FramerMotion/FramerMotion";
import { Mail, MapPin } from "lucide-react";

export default function SustainableEnergyAndContact() {
  const sectionVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <section className="py-20 bg-white scroll-mt-24" id="contact">
      <div className="max-w-6xl mx-auto px-6">
        <MotionDiv
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="text-center max-w-2xl mx-auto mb-14"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 relative inline-block">
            Get in Touch
            <span className="block h-1 w-15 bg-green-500 mt-2 rounded"></span>
          </h2>

          <p className="mt-3 text-gray-600 text-lg">
            Have questions or want to collaborate? We’d love to hear from you.
          </p>
        </MotionDiv>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <MotionDiv
            variants={sectionVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.3 }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
            className="bg-white rounded-2xl shadow-lg p-8 md:p-10 border border-gray-100"
          >
            <h3 className="text-xl font-semibold text-gray-800">
              Send us a Message
            </h3>

            <form className="mt-6 space-y-5">
              <input
                type="text"
                placeholder="Your Name"
                className="w-full border border-gray-300 rounded-lg px-4 py-3 text-gray-800 focus:outline-none focus:ring-2 focus:ring-green-600"
              />
              <input
                type="email"
                placeholder="Your Email"
                className="w-full border border-gray-300 rounded-lg px-4 py-3 text-gray-800 focus:outline-none focus:ring-2 focus:ring-green-600"
              />
              <textarea
                placeholder="Your Message"
                rows={4}
                className="w-full border border-gray-300 rounded-lg px-4 py-3 text-gray-800 focus:outline-none focus:ring-2 focus:ring-green-600"
              ></textarea>

              <button
                type="submit"
                className="w-full relative overflow-hidden px-6 py-3 text-white font-medium bg-green-600 rounded-lg group shadow-md hover:shadow-lg transition-all duration-300"
              >
                <span className="absolute inset-0 bg-emerald-700 transform -translate-x-full group-hover:translate-x-0 transition-transform duration-300 ease-out"></span>
                <span className="relative z-10">Send Message</span>
              </button>
            </form>
          </MotionDiv>

          <MotionDiv
            variants={sectionVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.3 }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.4 }}
            className="flex justify-center items-center"
          >
            <div className="bg-gray-50 rounded-2xl shadow-sm p-6 md:p-8 border border-gray-100 w-full max-w-md ">
              <h3 className="text-lg font-semibold text-gray-800 mb-4">
                Contact Information
              </h3>
              <div className="flex items-center  gap-3 mb-4">
                <MapPin className="w-6 h-6 text-green-600" />
                <p className="text-gray-700">Tamil Nadu, India</p>
              </div>
              <div className="flex items-center  gap-3">
                <Mail className="w-6 h-6 text-green-600" />
                <a
                  href="mailto:info@kormakeng.com"
                  className="text-gray-700 hover:text-green-700 transition-colors"
                >
                  info@kormakeng.com
                </a>
              </div>
            </div>
          </MotionDiv>
        </div>
      </div>
    </section>
  );
}
