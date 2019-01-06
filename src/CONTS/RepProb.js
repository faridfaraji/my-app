import React, { Component } from 'react';
import '../CSS/imagestyles.css';
import RepProb from "../IMG/RepProb.png";
import graph from "../IMG/graph.png";
import {ForceGraph, ForceGraphNode, ForceGraphLink} from 'react-vis-force';


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

export const RepProblem=(

<div>
        <p className="textStyle"> Stable Matching:
      <p> <font size="4">
       A matching is a mapping from the elements of one set 
       to the elements of the other set. A matching is not stable if:

         </font> </p>
       </p>

       <CodeFrame2>
      
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

          <p className="textStyle"> <font size="4">
         we can as an example look at the stable marriage  <br/>
         problem as an example, consider a 
         set <br/> M =[m <sub>1</sub>, ... ,m<sub>n</sub>] of n men, and a set 
       of n women,<br/> W =[w <sub>1</sub>,... ,w<sub>n</sub>]


         </font> </p>       
                 
    <Frame>
    
    <p className="minitextStyle">
 An instability: m and w each prefer the other to their current partners.

       </p>
      </Frame>              

 <img className = 'img1RepProblem' src={graph} alt="graph"/>

</div>

)



export const RepProblem2=(
<div>
<p className="textStyle"> <font size="4">
       You can see the sudo code for the Gale-Shapley algorithm to, the G-S algorithm 
       is assured to return a stable matching.and we prove that.

         </font> </p>


<CodeFrame3 >
      
<p className= "codeStyle">

Initially all m ∈ M and w ∈W are free<br/>
While there is a man m who is free and hasn’t proposed to<br/>
every woman<br className="indent"  />
<Indent1> Choose such a man m</Indent1>
<Indent1>Let w be the highest-ranked woman in m’s preference list</Indent1>
<Indent2>to whom m has not yet proposed</Indent2>
<Indent1>If w is free then</Indent1>
<Indent2>(m, w) become engaged</Indent2>
<Indent1>Else w is currently engaged to m</Indent1>
<Indent2>If w prefers m to m then</Indent2>
<Indent3>m remains free</Indent3>
<Indent2>Else w prefers m to m</Indent2>
<Indent3>(m, w) become engaged</Indent3>
<Indent3>m becomes free</Indent3>
<Indent2>Endif</Indent2>
<Indent1>Endif</Indent1>
Endwhile<br/>
Return the set S of engaged pairs<br/>
       </p>
       </CodeFrame3>

</div>
)




