import React, { Component } from 'react';
import '../CSS/imagestyles.css';
import RepProb from "../IMG/RepProb.png";
import graph from "../IMG/graph.png";
import {ForceGraph, ForceGraphNode, ForceGraphLink} from 'react-vis-force';


const CodeFrame = (props) => (
<div className = "code-frame" {...props} />)
const CodeFrame2 = (props) => (
<div className = "code-frame2" {...props} />)


const Frame = (props) => (
<div className = "frame2" {...props} />)

export const RepProblem=(

<div>
        <p className="textStyle"> Stable Matching:
      <p> <font size="4">
       A matching is a mapping from the elements of one set 
       to the elements of the other set. A matching is not stable if:

         </font> </p>
       </p>

       <CodeFrame2 >
      
       <p className= "codeStyle">
       
       1. There is an element A of the first matched set 
       which prefers some given element B of the second matched set over the element to 
       which A is already matched
       <p>
       2. B also prefers A over the element to which B is already matched.</p> </p>
       </CodeFrame2>
                  
     <p className="textStyle"> <font size="4">
       In other words, a matching is stable when <br/>
       there does not exist any match (A, B) by which<br/> both 
       A and B would be individually better off <br/>than they are 
       with the element to which <br/>they are currently matched.


  

         </font> </p>     
                 
    <Frame>
    
    <p className="minitextStyle">
 An instability: m and w each prefer the other to their current partners.

       </p>
      </Frame>              

 <img className = 'img1RepProblem' src={graph} alt="graph"/>

</div>

)




