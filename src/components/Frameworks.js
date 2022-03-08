import React from 'react';
import '../App.css';
import "../Dark.css";


function Frameworks() {

  return(
      

    <section className="category" id="frameworks">

        <h1 className="heading">SIMPLIFYING THE WEB WITH <span>FRAMEWORKS</span></h1>

        <div className="box-container">

            <div className="boxF">
               
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original-wordmark.svg"  alt ="" />
                
            </div>
            <div className="boxF">
                
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg"  alt =" "/>
                
            </div>
            <div className="boxF">
                
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flask/flask-original-wordmark.svg"  alt =""/>
                
            </div>
            <div className="boxF">
            <h4>Tkinter</h4>  
            <img className="scrollFade" src="https://img.icons8.com/ios/100/000000/maven-ios.png"  alt =""/>
                
            </div>
            
        </div>

    </section>

  )

}

export default Frameworks;





