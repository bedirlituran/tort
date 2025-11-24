import CategoriesSection from "@/components/CategoriesSection";
import LatestProducts from "@/components/LatestProducts";
import HeroSection from "@/components/HeroSection";
import PopularProducts from "@/components/PopularProducts";
import Reviews from "@/components/Reviews";
import FaqSection from "@/components/FaqSection";
import MapSection from "@/components/MapSection";
export default function Home() {
  return (
    <div>
   <CategoriesSection/>
   <LatestProducts/>
   <HeroSection/>
   <PopularProducts/>
   <Reviews/>
   <FaqSection/>
   <MapSection/>
    </div>
  );
}
