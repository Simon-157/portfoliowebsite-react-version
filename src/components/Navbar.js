
import React from 'react';
import '../App.css';


import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
    faBan, 
    faLaptopCode, 
    faBell,
    faCircle}
    from "@fortawesome/free-solid-svg-icons";

function NavBar() {

  return(

   
        <header className="{darkMode ? 'dark-mode' : 'light-mode'}">
            <div className="header-A">
            <a className="logo" href="#contact"><FontAwesomeIcon className="iconM" icon={faBell} /></a> <a className="logo" href="#home"><img className="iconM"src="/icon.png" alt=""></img>Simon Boateng</a>

            </div>

            
            <div className="header-B bar2">
                
                <nav className="navbar">
                    <a href="#home">home</a>
                    <a href="#about">About</a>
                    <a href="#category">Projects</a>
                    <a href="#skills">Skills</a>
                    <a href="#frameworks">Frameworks</a>
                    <a href="#contact">Contact</a>
                </nav>

                <div className="icons">
                    <a href="#home"><FontAwesomeIcon  icon={faLaptopCode} flip="horizontal" /></a>
                    <a href="#category"><FontAwesomeIcon  icon={faCircle} /></a>
                    <a href="#frameworks"><FontAwesomeIcon  icon={faBan} /></a>
                </div>

            </div>
            
        </header>
    )

}

export default NavBar;





