import React from 'react';
import '../App.css';
import NavBar from './Navbar'
import "../Dark.css";
 



function Home() {

  return(
    
        <section className="home" id="home">

                <div className="image">
                    <img src="/homeimage.png" alt="mypic"/> 
                </div>

                <div className="content">
                    <h4>WELCOME TO MY PERSONAL SITE</h4>
                    <span>
                        This site is a layout of my portfolio. 
                        It covers my personal skills and the tools I use in designing softwares.
                        Hit me up for more information about me and hook for your projects 

                    </span>
                    
                    <p><a href="#About" className="btn hbtn">ABOUT ME</a></p>
                </div>
               
        </section>
                
)

}

export default Home;





                    