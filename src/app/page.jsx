import BestHotels from "@/components/best-hotels/BestHotels";
import Hero from "@/components/hero/Hero";
import PopularLocations from "@/components/popular-locations/PopularLocations";
import sea from "../../public/assets/0.jpg";
import hotel_image from "../../public/assets/maison5.jpg";

export default function Home() {
  return (
    <>
     <Hero image={sea} mainHeader="Ready for you Dream Tunisian Travel?" secondHeader="Browse through the popular locations."/>
     <PopularLocations />
     <Hero image={hotel_image} mainHeader="Get the best offer for your house" secondHeader="Pick your desired place."/>
     <BestHotels />
    </>
  );
}
