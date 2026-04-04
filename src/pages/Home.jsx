import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import WhyUs from "../components/WhyUs";
import Services from "../components/Services";
import Method from "../components/Method";
import Programmes from "../components/Programmes";
import About from "../components/About";
import Testimonials from "../components/Testimonials";
import CTA from "../components/CTA";
import Footer from "../components/Footer";


export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <WhyUs />
      <Services />
      <Method />
      <Programmes />
      <About />
      <Testimonials />
      <CTA />
      <Footer />
    </>
  );
}