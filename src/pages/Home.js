import React from 'react';
import '../App.css';
import "animate.css/animate.min.css";
import { AnimationOnScroll } from 'react-animation-on-scroll';
 



function Home() {

  return(
    
        <section className="home" id="home">
                
                    <div className="image">
                        <AnimationOnScroll animateIn="flipInY" animateOut="animate__bounceOut" delay="0">
                            <img src="/homeimage.png" alt="mypic"/> 
                        </AnimationOnScroll>
                    </div>
                

                <div className="content">
                    <AnimationOnScroll animateIn="animate_bounceIn" animateOut="animate__bounceOut" delay="0">
                        <h4>WELCOME TO MY PERSONAL SITE</h4>
                        <span id="scroll-span">
                            This site is a layout of my portfolio. 
                            It covers my personal skills and the tools I use in designing softwares.
                            Hit me up for more information about me and hook for your projects 

                        </span>
                        
                        <p><a href="#About" className="btn hbtn">ABOUT ME</a><a className="resume" href="https://simonresume.netlify.app/">View Resume</a></p>
                    </AnimationOnScroll>
                </div>
               
        </section>
                
)

}

export default Home;





                    