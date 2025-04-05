import AOS from 'aos'
import 'aos/dist/aos.css'
import Hero from './components/hero/Hero'
import {useEffect} from "react";

export default function App() {
  useEffect(()=>{
    AOS.init({
      duration: 1000,
    });
  },[]);
  return (
   <main className='bg-[#0d182a]'>
    <Hero /> 

   </main>
  )
}

