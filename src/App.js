
import useLocalStorage from 'use-local-storage';
import './App.css';
import './contact.css';
import MenuBar from './components/menu';
import NavBar from './components/Navbar';
import Home from './pages/Home';
import About from './pages/About';
import Skills from './pages/Skills';
import Frameworks from './pages/Frameworks';
import Projects from './pages/Projects';
import Contact from './pages/Contact';
import Footer from './components/Footer';
import Social from './pages/SocialMedia';
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

      <><div className="menubar">
      <MenuBar />
    </div><div className="App" dark-mode={mode}>
        <div className="bar1">
          <NavBar />
        </div>


        <div className="header-B icons">
          <input type="checkbox" className="dark-mode checkbox" id="chk" onChange={switchMode} />
          <label className="label " for="chk">
            <FontAwesomeIcon
              icon={faSun} className="ic" />
            <FontAwesomeIcon
              icon={faMoon} className="ic" />
            <div className="ball"></div>
          </label>
        </div>
        <div>
          <Home />
        </div>
        <div>
          <About />
        </div>

        <div>
          <Skills />
        </div>

        <div className='Fsection'>
          <Frameworks />
        </div>

        <div>
          <Projects />
        </div>

        <div className='Csection'>
          <Contact />
        </div>
        <div>
          <Social />
        </div>
        <div>
          <Footer />
        </div>
      </div></>
 
    

  )

}

export default App;