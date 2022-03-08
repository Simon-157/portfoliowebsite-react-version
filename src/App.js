import React from 'react';
import './App.css';
import Home from './components/Home';
import About from './components/About';
import Skills from './components/Skills';
import Frameworks from './components/Frameworks';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {

  return(

    <div className = 'App'>
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
        <Footer />
      </div>
    </div>


  )

}

export default App;