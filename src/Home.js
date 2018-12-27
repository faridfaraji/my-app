
import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import './CSS/imagestyles.css';
import Fade from 'react-reveal/Fade';
import './CSS//Home.css';



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
 <Background>
  <p className="hometext"> TEXT GOES IN HERE </p>
 </Background>       
</Fade>);
}



const Background = (props) => (
<div className = "rectangle" {...props} />)

export default Home;




