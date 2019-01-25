import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link, withRouter } from "react-router-dom";


import '../../CSS/imagestyles.css';

const CodeFrame = (props) => (
<div className = "code-frame" {...props} />)



export const ASRoutingIntro=(

<div>
        <p className="textStyle">Intra-AS Routing in the Internet(OSPF):
       <p> <font size="4">
        the Internet is a network of ISPs, with each
         ISP consisting of its own network of routers. An ISP generally desires to operate its network as it
         pleases, like running its own routing algorithm or to hide aspect of its network.<br/>
         We also learned that routers using the routing table and forwarding table decide the next destination of the packet, 
         though there are millions of routers and it becomes infeasible to just keep track of all routers IP addresses
         So,<br/>
         Now given the problems above what are we going to do about it:<br/>

         <span style={{color: '#34e814'}}><b>((Autonomous Systems)) <i></i></b> </span> <br/>

         An AS is just bunch of routers that are under the same <Link className="list2" to="/deep-learning/Neural Networks"> Administrative Control</Link>.

  
       </font>
          </p>

          <p> <font size="4">
      
       </font>
          </p>
          </p> 
</div>

)



export const  ASRoutingIntro1=(
<div>
 <p className="textStyle">Inter-AS Routing(BGP):
 <p> <font size="4">
        OSPF is the protocol that takes care of an Intra-AS routing (amongst routers within AS)
        <br/>
         The <span style={{color: '#34e814'}}><b>BGP <i></i></b> </span> is the protocol that we use to 
         do routing among ASs.

          <br/>

         An AS is just bunch of routers that are under the same <Link className="list2" to="/deep-learning/Neural Networks"> Administrative Control</Link>.

  
       </font>
          </p>
</p>

</div>)


export const ASRoutingIntro2=(
        <div>
         <p className="textStyle">IP Addressing:
        </p>
        
        </div>)