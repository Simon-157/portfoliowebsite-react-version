import React from 'react';
import '../contact.css';
import '../App.css';
import { FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import { 

    faComment,
    faEnvelope,
    faVideo,
    faPhone,
    
} from "@fortawesome/free-solid-svg-icons";
    

function Social(){

  return(
      <div className="cardB">
        <div className="icons">
            <a href="#home" >
                <div className="top-arrow resume" >
                    <span className="tscroll resume" data="scroll top">
                        {/* Top */}
                    </span>
                    
                </div>
            </a>
            <div className="social-icon">
                <a href="www.linkedin.com/in/simonboateng2929"><FontAwesomeIcon icon={faComment} className="social-iconF"/>LinkedIn</a>
                
            </div>
            <div className="social-icon">
                <a href="mailto:boatengsimonjnr157@gmail.com:"><FontAwesomeIcon icon={faEnvelope} className="social-iconF"/>Email</a>
            </div>
            <div className="social-icon">
                <a href="mailto:boatengsimonjnr157@gmail.com:"><FontAwesomeIcon icon={faVideo} className="social-iconF"/>TeleChat</a>
            </div>
            <div className="social-icon">
                <a href="mailto:junioratta2929@gmail.com:"><FontAwesomeIcon icon={faEnvelope} className="social-iconF"/>Email2</a>
            </div>
            <div className="social-icon">
                <a href="tel:+233552592929"><FontAwesomeIcon icon={faPhone} className="social-iconF"/>Mobile</a>
            </div>
            <div className="social-icon">
                <a href="https://wa.me/+233552592929?text=HiIamSimon"><FontAwesomeIcon className="social-iconF" icon={faPhone}/>WhatSapp</a>
            </div>
        </div>
        </div>
    )
}

export default Social;