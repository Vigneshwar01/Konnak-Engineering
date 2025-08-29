"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import { MotionDiv } from "../FramerMotion/FramerMotion";

export default function HeroSection() {
  const slides = [
    {
      image: "/images/HeroSection/green-future.png",
      title: "Powering a Greener Future",
      subtitle: "Bio-CBG/CNG • Green Hydrogen • SAF",
    },
    {
      image: "/images/HeroSection/blue-future.png",
      title: "Engineering with Precision",
      subtitle: "Oil Gas • Infrastructure • Future Energy",
    },
    {
      image: "/images/HeroSection/epc-project.png",
      title: "EPC Project Excellence",
      subtitle: "Seamless Engineering • Procurement • Construction",
    },
    {
      image: "/images/HeroSection/turnkey-project.png",
      title: "Turnkey Project Solutions",
      subtitle: "Complete Delivery • On Time • End-to-End Execution",
    },
  ];

  return (
    <section className="relative">
      <Swiper
        modules={[Autoplay, Pagination]}
        autoplay={{ delay: 5000 }}
        pagination={{
          clickable: true,
          bulletClass: "swiper-pagination-bullet !bg-white/60",
          bulletActiveClass: "swiper-pagination-bullet-active !bg-white",
        }}
        loop
        className="h-[600px] w-full"
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            <div className="relative h-[600px] flex items-center justify-center">
              <MotionDiv
                initial={{ scale: 1.1 }}
                animate={{ scale: 1 }}
                transition={{ duration: 3, ease: "easeOut" }}
                className="absolute inset-0 bg-cover bg-center"
                style={{ backgroundImage: `url(${slide.image})` }}
              />

              <div className="absolute inset-0 bg-black/50" />

              <MotionDiv
                initial={{ y: 30, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="relative z-10 text-center max-w-3xl px-6"
              >
                <h1 className="text-3xl md:text-5xl font-bold text-white mb-4 leading-tight">
                  {slide.title}
                </h1>
                <p className="text-lg md:text-xl text-white/90 mb-8">
                  {slide.subtitle}
                </p>
              </MotionDiv>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}
