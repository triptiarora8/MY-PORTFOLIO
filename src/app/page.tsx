import FeaturedSections from "@/components/FeaturedSection";
import Herosection from "@/components/HeroSection";
import InfiniteMarque from "@/components/InfiniteMarque";
// import Image from "next/image";

export default function Home() {
  return (
  <div className="w-full h-full">
    <Herosection/>
    <FeaturedSections/>
    <InfiniteMarque/>
  </div>
  )
;
}
