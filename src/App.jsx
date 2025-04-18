import AOS from 'aos'
import 'aos/dist/aos.css'
import Hero from './components/hero/Hero'
import {useEffect} from "react";
import Skills from "./components/skills/Skills.jsx";
import Languages from "./components/language/Languages.jsx";
// import Certificates from "./components/certificate/Certificates.jsx";
import Footer from "./components/footer/Footer.jsx";
import Contact from "./components/contact/Contact.jsx";
import Projects from "./components/projects/Projects.jsx";
import Experiences from "./components/experience/Experiences.jsx";

export default function App() {
  useEffect(()=>{
    AOS.init({
      duration: 1000,
    });
  },[]);
  return (
   <main className='bg-[#0d182a]'>
        <Hero />
        <Skills />


  
        <Projects />
        <Languages />
        <Contact />
        <Footer />
   </main>
  )
}

