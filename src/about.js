import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link , withRouter} from "react-router-dom";
import mypic from './IMG/mypic.jpg';
import facebook from './IMG/facebook.ico';
import linkedin from './IMG/in.ico';
import shikhar from './IMG/shikhar.jpg';
import './CSS/imagestyles.css'; 
import Fade from 'react-reveal/Fade';
import './CSS/About.css'
import { Document, Page } from 'react-pdf';
import resume from "./IMG/Farid_Faraji_CV.pdf";



class About extends Component{
constructor(props) {
    super(props)
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

  const url1 = "https://www.facebook.com/farid.faraji.54";
  const url2="https://www.facebook.com/shikhar.nandi";
  const Inurl1 = "https://www.linkedin.com/in/farid-f-60265680";
    return (
      
    <Fade duration={1500}>

    
  <div className ="aboutpos">
      <div>
       <img className = 'myimg' src={mypic} alt="Mypic"/>
       <img className = 'shikhar' src={shikhar} alt="Shikharpic"/></div>
      
     
    
      <div>
       <Description2>
        <p className="abouttext"> Hi, I am Shikhar, my bio is about to come 
        </p>
        <div className = "facebook2">
       <a href={url2}>
       <img  src={facebook} alt="Mypic"/>
       </a>
       </div>
       
        </Description2>
       </div>

        <div>  
     <Description1>
        <p className="abouttext"> Hi, My name is Farid, I am the creator of CSNotes I 
        am a CS undergrad student at the university 
        of British Columbia located in Vancouver, My interests lie in Computaional Optimization, 
        Data Mining, Unsupervised learning and also Parallel Computation, Distributed system. <Link onClick={(e) =><Resume/>} to="\about" >More about me</Link>
        </p>
        <div className = "facebook1">
          <a href={url1}>
       <img  src={facebook} alt="Mypic"/>
       </a></div>
    
        
       </Description1>   
      </div>
      
      </div>
      </Fade> 
    
    );
 
}


class Resume extends Component {
  state = {
    numPages: null,
    pageNumber: 1,
  }
 
  onDocumentLoadSuccess = ({ numPages }) => {
    this.setState({ numPages });
  }
 
  render() {
    const { pageNumber, numPages } = this.state;
 
    return (
      <div>
        <p>"Fuck"</p>
        <Document
          file={resume}
          onLoadSuccess={this.onDocumentLoadSuccess}
        >
        </Document>
        </div>
        );
      }
    }
    




const Description1 = (props) => (
<div className = "rectangle-about1" {...props} />)    

const Description2 = (props) => (
<div className = "rectangle-about2" {...props} />)


export default About;
