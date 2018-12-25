
import React, { Component } from 'react';
import './imagestyles.css';
import Fade from 'react-reveal/Fade';
import './Home.css';

export default function Home(){
return(
 <Background>
  <p className="hometext"> TEXT GOES IN HERE </p>
 </Background>);       

}



const Background = (props) => (
<div className = "rectangle" {...props} />)




