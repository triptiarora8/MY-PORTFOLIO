import FAQ from "@/components/FAQ";
import FeaturedSections from "@/components/FeaturedSection";
import Herosection from "@/components/HeroSection";
import InfiniteMarque from "@/components/InfiniteMarque";
import Skills from "@/components/Skills";
import Typewriter from "@/components/Typerwriter";
// import Image from "next/image";

export default function Home() {
  return (
  <div className="w-full h-full">
    <Herosection/>
    <FeaturedSections/>
    <InfiniteMarque/>
    <Skills/>
    <Typewriter/>
    <FAQ/>
  </div>
  )
;
}
