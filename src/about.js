import React, { Component } from 'react';
import mypic from './mypic.jpg';
import shikhar from './shikhar.jpg';
import './imagestyles.css'; 
import Fade from 'react-reveal/Fade';
import './About.css'


export default function About(){
    return (
        
    <Fade top duration={4000}>
      <div>
       <img className = 'myimg' src={mypic} alt="Mypic"/>
       <img className = 'shikhar' src={shikhar} alt="Shikharpic"/></div>
     <div>  <Description1>
        <p className="abouttext"> Farid's Bio </p>
       </Description1>  
      </div>
      <div>
       <Description2>
        <p className="abouttext"> Shikhar's Bio </p>
        </Description2>
       </div>

      </Fade>  
    );
 

}



const Description1 = (props) => (
<div className = "rectangle-about1" {...props} />)    

const Description2 = (props) => (
<div className = "rectangle-about2" {...props} />)
