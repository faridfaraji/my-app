
import React, { Component } from 'react';
import './imagestyles.css';
import Fade from 'react-reveal/Fade';
import './Home.css';

export default function Home(){
return(
<Fade duration={1500}>    
 <Background>
  <p className="hometext"> TEXT GOES IN HERE </p>
 </Background>       
</Fade>);
}



const Background = (props) => (
<div className = "rectangle" {...props} />)




