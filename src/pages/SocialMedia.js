import React from 'react';
import '../contact.css';
import '../App.css';
import { FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import { 
    faEnvelope,
    faPhone,
    
} from "@fortawesome/free-solid-svg-icons";
    

function Social(){

  return(
      <div className="cardB">
        <div className="icons iconsT">
            <a href="#home" >
                <div className="top-arrow resume" >
                    <span className="tscroll resume" data="scroll top">
                        {/* Top */}
                    </span>
                    
                </div>
            </a>
            <div className="social-icon">
                <a href="www.linkedin.com/in/simonboateng2929"><img className="social-iconF" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linkedin/linkedin-original.svg" alt =""/></a>
                
            </div>
            <div className="social-icon">
                <a href="mailto:boatengsimonjnr157@gmail.com:"><FontAwesomeIcon icon={faEnvelope} className="social-iconF"/></a>
            </div>
 
            <div className="social-icon">
                <a href="tel:+233552592929"><FontAwesomeIcon icon={faPhone} className="social-iconF"/></a>
            </div>
            <div className="social-icon">
                <a href="https://github.com/Simon-157"><img className="social-iconF" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" alt=""/></a>
            </div>
            <div className="social-icon">
                <a href="https://wa.me/+233552592929?text=HiIamSimon"><FontAwesomeIcon className="social-iconF" icon={faPhone}/></a>
            </div>
        </div>
        </div>
    )
}

export default Social;