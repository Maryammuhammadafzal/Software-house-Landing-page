import Image from "next/image";
import AboutPage from "./about/page";
import Rating from "@/components/Rating";
import ServicePage from "./services/page";

export default function Home() {
  return (
 <div className='w-full h-auto overflow-hidden'>
  <AboutPage/>
  <Rating/>
  <ServicePage/>
 </div>
  );
}
