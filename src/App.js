
import './App.css';
import About from './components/About';
import Home from './components/Home';
import Contect from './components/Contect';
import Gitstats from './components/Gitstats';
import Navbar from './components/Navbar';
import Projects from './components/Projects';
import Skills from './components/Skills';

function App() {
  return (
    <div className="App">
     <Navbar/>
     <Home/>
     <About/>
     <Skills/>
     <Projects/>
     <Gitstats/>
     <Contect/>
    </div>
  );
}

export default App;
