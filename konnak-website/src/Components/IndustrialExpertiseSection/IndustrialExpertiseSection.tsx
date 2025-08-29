"use client";
import {  Factory, Hammer, KeyRound, Network  } from "lucide-react";
import { MotionDiv } from "../FramerMotion/FramerMotion";

export default function WhatWeDoFlipCards() {
  const items = [
    {
      title: "Built, Own & Operate Model",
      icon: Factory,
      details: [
        "Bio CBG / CNG Plants",
        "Sustainable Aviation Fuel (SAF)",
        "Green Hydrogen Systems",
      ],
    },
    {
      title: "Technology Driven Consulting",
      icon: Network,
      details: [
        "FEED & Detailed Engineering",
        "Project Management & EPC",
        "Digital Twin & Smart Plant Design",
        "As-Built & Handover",
        "Asset Integrity & Maintenance Data (CMMS)",
      ],
    },
    {
      title: "EPC Project Excellence",
      icon: Hammer,
      details: [
        "Comprehensive Engineering Solutions",
        "Global Procurement & Supply Chain",
        "Safe & Efficient Construction",
        "Quality Assurance & Compliance",
      ],
    },
    {
      title: "Turnkey Project Solutions",
      icon: KeyRound,
      details: [
        "End-to-End Project Delivery",
        "Single Point of Responsibility",
        "Ready-to-Operate Facilities",
        "On-Time & Cost-Effective Execution",
      ],
    },
  ];

  return (
    <section
      className="py-16 md:py-24 bg-gradient-to-br from-green-50 to-green-100 relative scroll-mt-24"
      id="whatwedo"
    >
      <div className="max-w-6xl mx-auto px-4 md:px-6">
        <MotionDiv
          className="text-center mb-12 md:mb-16"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: false, amount: 0.3 }}        >
          <h2 className="relative inline-block text-3xl md:text-4xl font-bold text-gray-900">
            What We Do
            <span className="block h-1 w-22 bg-green-500 mt-2 rounded"></span>
          </h2>

          <p className="mt-4 text-gray-600 text-base md:text-lg max-w-2xl mx-auto px-4">
            Driving sustainability & technology with innovative solutions.
          </p>
        </MotionDiv>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-12">
          {items.map((item, idx) => {
            const Icon = item.icon;
            return (
              <MotionDiv
                key={idx}
                className="relative w-full h-80 md:h-72 group [perspective:1200px] cursor-pointer"
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: idx * 0.2, ease: "easeOut" }}
                viewport={{ once: false, amount: 0.3 }}              >
                <div
                  className="
                    relative w-full h-full transition-transform duration-700 ease-out [transform-style:preserve-3d]
                    group-hover:[transform:rotateY(180deg)]
                    group-active:[transform:rotateY(180deg)]
                    touch-manipulation
                  "
                >
                  <div className="absolute inset-0 flex flex-col items-center justify-center rounded-2xl md:rounded-3xl shadow-xl bg-white/90 backdrop-blur-md border border-white/50 p-6 md:p-8 text-center [backface-visibility:hidden]">
                    <div className="w-16 h-16 md:w-20 md:h-20 flex items-center justify-center rounded-full bg-gradient-to-tr from-green-500 to-green-700 shadow-lg mb-6">
                      <Icon className="w-8 h-8 md:w-10 md:h-10 text-white" />
                    </div>
                    <h3 className="text-xl md:text-2xl font-semibold text-gray-800 leading-tight px-2 mb-4">
                      {item.title}
                    </h3>
                    <div className="inline-flex items-center justify-center px-4 py-2 rounded-full bg-green-100 text-green-700 text-sm font-medium">
                      <span className="mr-2 md:hidden">Tap to explore</span>
                      <span className="mr-2 hidden md:inline">
                        Hover to explore
                      </span>
                      <svg
                        className="w-4 h-4 transform group-hover:translate-x-1 transition-transform"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M9 5l7 7-7 7"
                        />
                      </svg>
                    </div>
                  </div>

                  <div className="absolute inset-0 rounded-2xl md:rounded-3xl shadow-xl bg-gradient-to-tr from-green-600 via-green-700 to-emerald-800 p-6 md:p-8 text-white [transform:rotateY(180deg)] [backface-visibility:hidden] overflow-hidden">
                    <div className="absolute inset-0 opacity-10">
                      <div className="absolute top-0 right-0 w-32 h-32 bg-white rounded-full -translate-y-16 translate-x-16"></div>
                      <div className="absolute bottom-0 left-0 w-24 h-24 bg-white rounded-full translate-y-12 -translate-x-12"></div>
                    </div>

                    <div className="relative z-10 h-full flex flex-col">
                      <div className="flex items-center mb-6">
                        <Icon className="w-6 h-6 md:w-7 md:h-7 text-white mr-3 flex-shrink-0" />
                        <h3 className="text-lg md:text-xl font-semibold leading-tight">
                          {item.title}
                        </h3>
                      </div>

                      <div className="flex-1">
                        <ul className="space-y-2 md:space-y-2">
                          {item.details.map((detail, i) => (
                            <li key={i} className="flex gap-3 items-start">
                              <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-white flex-shrink-0 shadow-sm"></div>
                              <span className="text-xs md:text-sm leading-snug font-medium">
                                {detail}
                              </span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div className="mt-4 pt-4 border-t border-white/20">
                        <p className="text-xs md:text-sm text-white/80 text-center">
                          <span className="md:hidden">Tap again to return</span>
                          <span className="hidden md:inline">
                            Hover away to return
                          </span>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </MotionDiv>
            );
          })}
        </div>
      </div>
    </section>
  );
}
