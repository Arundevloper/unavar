import Image from "next/image";
import Navbar from "@/components/Navbar";
import Qci from "@/components/Qci";
import Service from "@/components/Service";
import Clients from "@/components/Client";
import Footer from "@/components/Footer";
import Testimonial from "@/components/Testimonial";
import Banner from "@/components/subcomponents/banner";
import { Slider } from "@/components/Slider";

export default function Home() {
  return (
    <div className="">
      <Navbar />
      <Qci />
      <Service />
      <Testimonial />
      <Clients />
      <Banner />
      <Footer />
    </div>
  );
}
