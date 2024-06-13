import Image from "next/image";
import Navbar from "../components/Navbar/Navbar";
import Hero from "../components/Hero/Hero";
import Features from "../components/Features/Features";
import Advantages from "../components/Advantages/Advantages";
import Testimonial from "../components/Testimonial/Testimonial";
import FAQ from "../components/FAQ/FAQ";
import Download from "../components/Download/Download";
import Footer from "../components/Footer/Footer";




export default function Home() {
  return (
    <main className="flex min-h-screen flex-col overflow-hidden">
      <Navbar/>
      <Hero />
      <Features />
      <Advantages />
      <Testimonial />
      <FAQ />
      <Download />
      <Footer/> 
    </main>
  );
}
