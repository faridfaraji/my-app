
import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import './CSS/imagestyles.css';
import Fade from 'react-reveal/Fade';
import './CSS/textStyles.css';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import ReactResizeDetector from 'react-resize-detector';
import homestyle from './IMG/wave.jpg'
import homestyle2 from './IMG/pytorch.jpg'


class Home extends Component{
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
        <Link className= "link" to="/" >Home</Link>
        </div> 
    );
  }
}

export function ShowHome(){
return(


<Fade duration={1500}>  

 <div>
 
 <Background>
 <br/>
  <p className="textStyle"> Welcome to CSNotes, In here we try to share our knowledge and our projects with
  other CS students and anyone who is interested in Data Science or Computer Systems, we plan to add more topics 
  in the coming year like distubuted Systems and Internet Computing , 
  in here you can find contents on a wide range of topics, we love learning about these topics and we truely believe that 
  the best way to learn something is to be able to explain it to others so here we try to explain seemingly 
  complex subjects in a very easy way. You can 
  find materials on Computational Optimization, Pure math subjects useful to Data Science, Machine Learning,
   Deep Learning, Computer Architecture and Advanced Operating System.


   </p>
   
 </Background>  
<div style={{display : 'inline-block'}}>
 <Background2>
 <p className="textStyle2">
 Since we are UBC students ourselves the contents of this site 
 are based on what is taught at UBC CS department, In the classes section to 
 the left side you can find some classes, there we have put some reviews of 
 the courses, we have added guidance to succeed in the coursed and bunch of 
 practice questions with solutions.
  </p>
 </Background2><div className="rectangle3">
 <img src={homestyle} alt="Mypic"/>
 </div>  

 <div className="rectangle4">
 <img src={homestyle2} alt="Mypic"/>
 </div> 
 </div>
  </div>

  
 

</Fade>);
}


const Main = (props) => (
    <div styles={{
        flex: 1,
         height: '100vh',
        overflow: 'auto'}}>
    <div style={{ padding:'20px' }} {...props}/>
    </div>
)



const Background = (props) => (
    
<div className = "rectangle" {...props} />)


const Background2 = (props) => (
    
<div className = "rectangle2" {...props} />)



export default Home;




