import React, { Component } from 'react';
import mypic from './mypic.jpg';
import './imagestyles.css'; 
import Fade from 'react-reveal/Fade';



export default function about(){
    return (
      <div>
        <Fade top>
       <img className = 'myimg' src={mypic} alt="Mypic"/>
        </Fade>
      </div>
    );
 

}

