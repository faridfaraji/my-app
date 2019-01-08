import React, { Component } from 'react';

import '../CSS/imagestyles.css';

const CodeFrame = (props) => (
<div className = "code-frame" {...props} />)



export const InternetIntro=(

<div>
        <p className="textStyle">Basics of Internet and Protocol:
       <p> <font size="4">
       Lets begin with some of the jargons that we also will be using later.
          <p>   <span style={{color: '#34e814'}}><b> <i>packets </i></b></span>: carry the data in the protocols that the Internet uses.<br/>
       <span style={{color: '#34e814'}}><b> <i>end-systems or host </i></b></span>: all the devices that can be connected to the Internet.<br/>
         <span style={{color: '#34e814'}}><b> <i>Communation Link </i></b></span>: A Communication link is the interactions channel that links 2 
       or more interacting gadgets. This link might be a real physical 
       link or it might be a rational link, which uses several real physical links.
        different links can transmit data at different <b> <i>transmission rate</i></b> which is 
        measured in bits/second<br/>
           <span style={{color: '#34e814'}}><b> <i>Packet Switching</i></b></span> : breaking data into packets then routed from source
         to destination using  <b> <i>Packet Switches</i></b> (like routers and link-layer switches).
          <span style={{color: '#34e814'}}><b> <i>rout or path</i></b> </span> : The
         sequence of communication links and packet switches traversed by a packet from
          the sending end system to the receiving end system <br/>
          <span style={{color: '#34e814'}}><b> <i>ISP</i></b> </span> : Short for Internet Service Provider, allows 
          end systems to access Intenet. eg, AT&T, Verizon, Comcast<br/>
           <span style={{color: '#34e814'}}><b> <i>API</i></b> </span> : Application Programming
        Interface specifies how a program running on one end system asks
        the Internet infrastructure to deliver data to a specific destination program running
        on another end system.<br/>

        <span style={{color: '#34e814'}}><b> <i>Protocol</i></b> </span> : defines the format and the order of messages exchanged between
       two or more communicating entities, as well as the actions taken on the transmission
        and/or receipt of a message or other event.<br/>
 <font className="textStylesmall" size="2" >
        The Transmission Control Protocol (TCP) and the Internet Protocol (IP) are two of
the most important protocols in the Internet. The IP protocol specifies the format of
the packets that are sent and received among routers and end systems</font>

</p>
       

         </font> </p>

          </p>
</div>

)
