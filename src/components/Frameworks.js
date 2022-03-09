import React from 'react';
import { AnimationOnScroll} from 'react-animation-on-scroll'
import '../App.css';
import '../contact.css';



function Frameworks() {

  return(
      

    <section className="category categoryS" id="frameworks">

        <h1 className="heading">SIMPLIFYING THE WEB WITH <span>FRAMEWORKS</span></h1>

        <div className="box-container">
            <AnimationOnScroll animateIn="animate_bounceIn" animatePreSroll={false}>
                <div className="boxF">
                
                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original-wordmark.svg"  alt ="" />
                    
                </div>
            </AnimationOnScroll>
            <AnimationOnScroll animateIn="animate_bounceIn" animatePreSroll={false}>
            <div className="boxF">
                
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg"  alt =" "/>
                
            </div>
            </AnimationOnScroll>
            <AnimationOnScroll animateIn="animate_bounceIn" animatePreSroll={false}>
            <div className="boxF">
                
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flask/flask-original-wordmark.svg"  alt =""/>
                
            </div>
            </AnimationOnScroll>
            <AnimationOnScroll animateIn="animate_bounceIn" animatePreSroll={false}>
            <div className="boxF">
            <h4>Tkinter</h4>  
            <img src="https://img.icons8.com/ios/100/000000/maven-ios.png"  alt =""/>
                
            </div>
            
            </AnimationOnScroll>
            
            <a href="#home" >
                <div className="top-arrow resume" >
                    <span className="tscroll resume" data="scroll top">
                        {/* Top */}
                    </span>
                    
                </div>
            </a>
        </div>

    </section>

  )

}

export default Frameworks;





