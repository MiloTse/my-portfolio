import './App.css'
import Introduction from './components/sections/Introduction.jsx'
import Projects from './components/sections/Projects.jsx'
import Skills from './components/sections/Skills.jsx'
import Contact from './components/sections/Contact.jsx'
import Hero from "./components/hero/Hero.jsx";


function App() {
    return (
        <div className="App">
            <Hero />
            <Introduction />
            <Projects />
            <Skills />
            <Contact />
            <div className="bg-blue-100 h-screen flex items-center justify-center">
                <h1 className="text-4xl font-bold text-blue-600">Tailwind CSS is working!</h1>
            </div>
        </div>
    );
}

export default App
