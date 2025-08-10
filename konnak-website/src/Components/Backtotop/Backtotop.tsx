"use client";
import { useState, useEffect } from "react"; 

const Backtotop = () => {
  const [showScrollToTop, setShowScrollToTop] = useState(false);

  const handleScroll = () => {
    if (window.scrollY > 200) {
      setShowScrollToTop(true); 
    } else {
      setShowScrollToTop(false); 
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <>
      {showScrollToTop && (
        <button
          onClick={scrollToTop}
          className="fixed text-white transition-colors duration-300 bg-[#008000] rounded-full shadow-lg bottom-10 right-10 hover:scale-105 hover:bg-white group z-10" 
          aria-label="Scroll to Top"
        >
          <svg
            width="2.5em"
            height="2.5em"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="transition-all duration-300 ui-svg-inline when-open group-hover:fill-black"
          >
            <path d="M17,13.41,12.71,9.17a1,1,0,0,0-1.42,0L7.05,13.41a1,1,0,0,0,0,1.42,1,1,0,0,0,1.41,0L12,11.29l3.54,3.54a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29A1,1,0,0,0,17,13.41Z"></path>
          </svg>
        </button>
      )}
    </>
  );
};

export default Backtotop;
