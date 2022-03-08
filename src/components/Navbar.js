
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSun, 
    faMoon,
    faBan, 
    faLaptopCode, 
    faBell,
    faCircle}
    from "@fortawesome/free-solid-svg-icons";

import '../App.css';




function NavBar() {

  return(

        <header>
            <div className="header-A">
                <a className="logo" href="#home"><FontAwesomeIcon icon={faBell} />Simon Boateng</a> 
                <div>
                    <input type="checkbox" className="checkbox" id="chk" />
                    <label className="label" for="chk">
                    <FontAwesomeIcon
                    icon={faSun} className= "ic"
                    />
                    <FontAwesomeIcon 
                    icon={faMoon} className= "ic"
                    />
                        <div className="ball"></div>
                    </label>
                </div>

            </div>

            <div className="header-B">

            <div id="menu-bar" class="fas fa-bars"></div>

                <nav className="navbar">
                    <a href="#home">home</a>
                    <a href="#about">About</a>
                    <a href="#projects">Projects</a>
                    <a href="#skills">Skills</a>
                    <a href="#frameworks">Frameworks</a>
                    <a href="#contact">contact</a>
                </nav>

                <div className="icons">
                    <a href="#home"><FontAwesomeIcon  icon={faLaptopCode} flip="horizontal" /></a>
                    <a href="#home"><FontAwesomeIcon  icon={faCircle} /></a>
                    <a href="#home"><FontAwesomeIcon  icon={faBan} /></a>
                </div>

            </div>
        </header>
    )

}

export default NavBar;





