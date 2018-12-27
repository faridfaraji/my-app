import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import mypic from './IMG/mypic.jpg';
import shikhar from './IMG/shikhar.jpg';
import './CSS/imagestyles.css'; 
import Fade from 'react-reveal/Fade';
import './CSS/About.css'
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';


class About extends Component{
constructor() {
    super()
    this.state = {
      
    }
this.setStateHandler = this.setStateHandler.bind(this);

}
  setStateHandler() {
      
   }
 
  render() {
      
    return (
        <div>
        <Link className = "link "to="/about">About</Link>
        </div> 
    );
  }
}
export function ShowAbout(){
    return (
      
    <Fade duration={1500}>
  
      <div>
       <img className = 'myimg' src={mypic} alt="Mypic"/>
       <img className = 'shikhar' src={shikhar} alt="Shikharpic"/></div>
      
     <div>  
    
     <Description1>
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


export default About;
