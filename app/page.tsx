import Image from "next/image";
import AboutPage from "./about/page";
import Rating from "@/components/Rating";
import ServicePage from "./services/page";
import Industries from "@/components/Industries";
import PortfolioPage from "./portfolio/app";
import TeamPage from "./team/page";
import ContactPage from "./contact/app";

export default function Home() {
  return (
 <div className='w-full h-auto overflow-hidden'>
  <AboutPage/>
  <Rating/>
  <ServicePage/>
  <Industries/>
  <PortfolioPage/>
  <TeamPage/>
  <ContactPage/>
 </div>
  );
}
