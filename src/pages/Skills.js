import React from 'react';
import { AnimationOnScroll } from 'react-animation-on-scroll';
import '../App.css';


function Skills() {

  return(
      

    <section className="category categoryF" id="skills">
        {/* <AnimationOnScroll animateIn="fadeIn" animatePreSroll={false}> */}

        <h1 className="heading">LEARNED AND DEVELOPED  <span>SKILLS</span></h1>

        <div className="box-container">
            <AnimationOnScroll animateIn="fadeIn" animatePreSroll={false}>
            <div className="box">
               
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original-wordmark.svg" alt ="" />
                
            </div>
            </AnimationOnScroll>

            <AnimationOnScroll animateIn="fadeIn" animatePreSroll={false}>
            <div className="box">
                
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original-wordmark.svg" alt =" "/>
                
            </div>
            </AnimationOnScroll>
            <AnimationOnScroll animateIn="fadeIn" animatePreSroll={false}>
            <div className="box">
                
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-plain.svg" alt =""/>
                
            </div>
            </AnimationOnScroll>
            <AnimationOnScroll animateIn="fadeIn" animatePreSroll={false}>
            <div className="box">
              
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original-wordmark.svg"alt ="" />
                
            </div>
            </AnimationOnScroll>
            <AnimationOnScroll animateIn="fadeIn" animatePreSroll={false}>
            <div className="box">
                
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original-wordmark.svg" alt ="" />
            </div>
            </AnimationOnScroll>
            <AnimationOnScroll animateIn="fadeIn" animatePreSroll={false}>
                
            <div className="box">
                
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-plain-wordmark.svg" alt =""/>
                
            </div>
            </AnimationOnScroll>
            <AnimationOnScroll animateIn="fadeIn" animatePreSroll={false}>
            <div className="box">
                
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-plain-wordmark.svg" alt =""/>
                
            </div>
            </AnimationOnScroll>
            <AnimationOnScroll animateIn="fadeIn" animatePreSroll={false}>
            <div className="box">
                
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg"  alt =""/>
                
            </div>
            </AnimationOnScroll>


        </div>
        {/* </AnimationOnScroll> */}
    </section>

  )

}

export default Skills;





