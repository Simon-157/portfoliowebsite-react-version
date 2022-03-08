import React from 'react';
import '../App.css';
import "../Dark.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
    faArrowAltCircleRight,
    faPills,
}
    from "@fortawesome/free-solid-svg-icons";

function Project() {

  return(

    <section className="category" id="category">

    <h1 className="heading">My <span>PROJECTS</span></h1>
    

    <div className="box-containerP">

        <div className="boxP">
            <h3>WEATHER TEMPERATURE CHECKER</h3>
            {/* <p>Check the temperature</p> */}
            <img src="/weather.png" alt="" />
            <a href="https://weatherworldapp-simon.herokuapp.com/" className="btn">view</a>
            
        </div>
        <div className="boxP">
            <h3>PIANO KEYBOARD</h3>
            <h4>Practice with piano</h4>
            <img src="https://img.icons8.com/ios-filled/50/000000/music-transcript.png" alt=""/>
            <a href="https://piano-keyboard2.netlify.app/" className="btn">view</a>
        </div>
        <div className="boxP">
            <h3>E-CARE</h3>
            <p>Your Helath Our Concern</p>
            <FontAwesomeIcon
                
                icon={faPills} className= "ic"
            />
            <a href="https://ecare-test.netlify.app/" className="btn">view</a>
        </div>
        <div className="boxP">
            <h3>CSSP APP</h3>
            <p>Electronic School selection</p>
            <img className="projectimg"  src="https://img.icons8.com/external-flatart-icons-flat-flatarticons/64/000000/external-education-high-school-flatart-icons-flat-flatarticons.png" alt=""/>
            <a href="https://github.com/Simon-157/CSSP-PORTAL" className="btn">view</a>
        </div>
        <div className="explore">
            <a href="https://github.com/Simon-157?tab=repositories" className="btn">Explore more
            <FontAwesomeIcon
                        
                icon={faArrowAltCircleRight} className= "ic"
            />
            </a>
        </div>

    </div>

</section>




  )

}

export default Project;