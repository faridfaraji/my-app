import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link, withRouter } from "react-router-dom";
import '../../CSS/imagestyles.css';
import RepProb from "../../IMG/RepProb.png";
import graph from "../../IMG/graph.png";
import {ForceGraph, ForceGraphNode, ForceGraphLink} from 'react-vis-force';
import bipartite from "../../IMG/Bipartite.png";

const CodeFrame = (props) => (
<div className = "code-frame" {...props} />)
const CodeFrame2 = (props) => (
<div className = "code-frame2" {...props} />)

const CodeFrame3 = (props) => (
<div className = "code-frame3" {...props} />)
const Indent1 = (props) => (
<div className = "indent1" {...props} />)
const Indent2 = (props) => (
<div className = "indent2" {...props} />)
const Indent3 = (props) => (
<div className = "indent3" {...props} />)

const Frame = (props) => (
<div className = "frame2" {...props} />)



export const Intro=(
<div>
        <p className="textStyle"> Computational Tractability:
      <p> <font size="4">
            An algorithm is efficient if it is 
            platform-independent, instance-independent, and of predictive value with
            respect to increasing input sizes

         </font> </p>
       </p>

     

 

</div>
)



