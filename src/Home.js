
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
 
  <p className="textStyle"> TEXT GOES IN HERE </p>
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




