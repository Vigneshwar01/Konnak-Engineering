import HeroSection from "@/Components/HeroSection/HeroSection";
import IndustrialExpertiseSection from "@/Components/IndustrialExpertiseSection/IndustrialExpertiseSection";
import SustainableEnergyAndContact from "@/Components/SustainableEnergyAndContact/SustainableEnergyAndContact";
import WhatwhoareSection from "@/Components/WhatwhoareSection/WhatwhoareSection";

export default function Home() {
  return (
    <div >
  <HeroSection/>
  <div >
  <WhatwhoareSection/>
  </div>
  <IndustrialExpertiseSection/>
  <SustainableEnergyAndContact/>
    </div>
  );
}
