
import useLocalStorage from 'use-local-storage';
import './App.css';

import NavBar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Skills from './components/Skills';
import Frameworks from './components/Frameworks';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Social from './components/SocialMedia';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {
  faSun,
  faMoon,
}from "@fortawesome/free-solid-svg-icons";



function App() {

  const [mode, setMode] = useLocalStorage('mode' ? 'dark' : 'light');

  const switchMode = () => {

    const newMode = mode === 'light' ? 'dark' : 'light';
    setMode(newMode);
  }

  return(

      
      <div className="App" dark-mode={mode}>
          <div>
            <NavBar />
          </div>
          
          <div className="header-B icons">
            <input type="checkbox" className="dark-mode checkbox icons" id="chk" onChange={switchMode} />
            <label className="label " for="chk">
            <FontAwesomeIcon
            icon={faSun} className= "ic "
            />
            <FontAwesomeIcon 
            icon={faMoon} className= "ic"
            />
                <div className="ball"></div>
            </label>
          </div>
          
            
          <div>
            <Home />
          </div>
          <div>
            <About />
          </div>
          
          <div >
            <Skills />
          </div>
          
          <div className = 'Fsection'>
            <Frameworks />
          </div>

          <div >
            <Projects />
          </div>
          
          <div className = 'Csection'>
            <Contact />
          </div>
          <div>
            <Social />
          </div>
          <div>
            <Footer />
          </div>
    </div>
 
    

  )

}

export default App;