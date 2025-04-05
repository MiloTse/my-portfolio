import AOS from 'aos'
import 'aos/dist/aos.css'
import Hero from './components/hero/Hero'
import {useEffect} from "react";
import Skills from "./components/skills/Skills.jsx";
import Language from "./components/language/Language.jsx";

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

     <Language />
   </main>
  )
}

