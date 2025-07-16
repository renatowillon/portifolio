import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Experience from "@/components/Experience";
import Certifications from "@/components/Certifications";
import Testimonials from "@/components/Testimonials";
import Projects from "@/components/Project";
import Skills from "@/components/Skills";
import Contact from "@/components/Contacts";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-dark-blue text-white">
      <Header />
      <main>
        <Hero />
        <About />
        <Projects />
        <Skills />
        <Experience />
        <Certifications />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
