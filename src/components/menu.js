import React from 'react';
import useLocalStorage from 'use-local-storage'
import { slide as Menu } from 'react-burger-menu';
import '../menu.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBan,faSun,faMoon, faLaptopCode, faCircle} from "@fortawesome/free-solid-svg-icons";



const MenuBar = () => {

  const [mode, setMode] = useLocalStorage('mode' ? 'dark' : 'light');

  const switchMode = () => {

    const newMode = mode === 'light' ? 'dark' : 'light';
    setMode(newMode);
  }


  return (
    <Menu>

      <div className="menu-content">

        <div className="iconsMobile">
            <input type="checkbox" className="dark-modeMobile checkbox" id="chkMobile" onChange={switchMode} />
            <label className="label " for="chkMobile">
            <FontAwesomeIcon
            icon={faSun} className= "ic"        
            />
            <FontAwesomeIcon 
            icon={faMoon} className= "ic"
            />
                <div className="ball"></div>
            </label>
          </div> 

              <div>
                <nav >
                    <a  className="menu-item abs" href="#home"><img src="https://img.icons8.com/external-flaticons-lineal-color-flat-icons/64/000000/external-homepage-web-flaticons-lineal-color-flat-icons.png" alt=""/>home</a>
                    <a className="menu-item abs"href="#about"><img src="https://img.icons8.com/fluency-systems-regular/48/000000/information.png" alt=""/>About</a>
                    <a className="menu-item abs" href="#category"><img src="https://img.icons8.com/ios-filled/50/000000/project.png" alt=""/>Projects</a>
                    <a className="menu-item abs" href="#skills"><img src="https://img.icons8.com/external-kiranshastry-solid-kiranshastry/64/000000/external-skills-management-kiranshastry-solid-kiranshastry-6.png" alt=""/>Skills</a>
                    <a className="menu-item abs" href="#frameworks"><img src="https://img.icons8.com/ios-filled/50/000000/yii-framework.png"alt=""/>Frames</a>
                    <a className="menu-item abs" href="#contact"><img src="https://img.icons8.com/ios-glyphs/30/000000/duplicate-contacts.png" alt=""/>Contact</a>
                </nav>

                <div className="icons">
                    <a className="menu-item" href="#home"><FontAwesomeIcon  icon={faLaptopCode} flip="horizontal" /></a>
                    <a className="menu-item" href="#category"><FontAwesomeIcon  icon={faCircle} /></a>
                    <a className="menu-item" href="#frameworks"><FontAwesomeIcon  icon={faBan} /></a>
                </div>

            </div>
        </div>
    </Menu>
  );
}
export default MenuBar;