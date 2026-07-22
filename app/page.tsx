import Hero from "./home/Hero";
import Services from "./home/Services";
import Offerings from "./home/Offerings";
import Metrics from "./home/Metrics";
import Carousels from "./home/Carousels";
import Certifications from "./home/Certifications";
import Contact from "./home/Contact";
import Footer from "./home/Footer";

export default function Home() {
  return (
    <main className="w-full bg-black text-white">
      <Hero />
      <Services />
      <Offerings />
      <Metrics />
      <Carousels />
      <Certifications />
      <Contact />
      <Footer />
    </main>
  );
}
