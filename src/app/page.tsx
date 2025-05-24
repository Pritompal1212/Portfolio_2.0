import About from "@/components/About";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import Services from "@/components/Services";
import Skills from "@/components/Skills";
export default function Home() {
  return (
    <main>
      <Hero/>
      <About/>
      <Skills/>
      <Projects/>
      <Services/>
      <Contact/>
      <Footer/>
    </main>
  );
}