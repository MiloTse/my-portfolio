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
        </div>
    );
}

export default App
