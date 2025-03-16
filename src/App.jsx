import './App.css'
import Introduction from './components/Introduction.jsx'
import Projects from './components/Projects.jsx'
import Skills from './components/Skills.jsx'
import Contact from './components/Contact.jsx'


function App() {
    return (
        <div className="App">
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
