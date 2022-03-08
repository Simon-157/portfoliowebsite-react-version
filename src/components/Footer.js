import React from 'react';
import '../contact.css'
import { 
    faCopyright,
    faHeartbeat
}
    from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Footer = () => (
  <footer className="footer">
      <p>copyright <FontAwesomeIcon 
      icon={faCopyright}
      /> Simon. Alrights reserved
    
      
      <FontAwesomeIcon 
      icon={faHeartbeat}
      className="heart"
      
      />
      </p>s
  </footer>
);
  
export default Footer;