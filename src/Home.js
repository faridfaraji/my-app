
import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import './CSS/imagestyles.css';
import Fade from 'react-reveal/Fade';
import './CSS/textStyles.css';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import ReactResizeDetector from 'react-resize-detector';



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
        <Link className= "link" to="/my-app" >Home</Link>
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
  <p className="textStyle"> Welcome to CSNotes, In here we try to share our knowledge and our project with
  other CS students and anyone who is interested in Data Science or Computer Systems, we plan to add more topics 
  in the coming year like distubuted Systems and Internet Computing , 
  in here you can find contents on a wide range of topics, we love learning about these topics and we truely believe that 
  the best way to learn something is to be able to explain it to others so here we try to explain seemingly 
  complex subjects in a very easy way. You can 
  find materials on Computational Optimization, Pure math subjects useful to Data Science, Machine Learning and
   Deep Learning and Computer Systems 
  
   </p>
 </Background>   
    
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

export default Home;




