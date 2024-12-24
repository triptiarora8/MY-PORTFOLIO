import FeaturedSections from "@/components/FeaturedSection";
import Herosection from "@/components/HeroSection";
import Image from "next/image";

export default function Home() {
  return (
  <div className="w-full h-full">
    <Herosection/>
    <FeaturedSections/>
  </div>
  )
;
}
