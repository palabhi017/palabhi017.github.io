
import './App.css';
import About from './components/About';
import Contect from './components/Contect';
import Gitstats from './components/Gitstats';
import Navbar from './components/Navbar';
import Projects from './components/Projects';
import Skills from './components/Skills';

function App() {
  return (
    <div className="App">
     <Navbar/>
     <About/>
     <Skills/>
     <Projects/>
     <Gitstats/>
     <Contect/>
    </div>
  );
}

export default App;
