import React, { Component } from 'react';
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import 'react-vertical-timeline-component/style.min.css';
import './CSS/Projects.css';
import { GoRepoForked } from 'react-icons/go';
import { FaFirstOrderAlt, FaQq, FaServer } from 'react-icons/fa';
import {TiAdjustBrightness, TiFlowSwitch} from 'react-icons/ti';
import {IoIosGlobe, IoIosInfinite} from 'react-icons/io'

class Projects extends Component{
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
      <Link className = "link" to="/projects">Projects</Link>
    );

}

}


export function ShowContent(){
return (
  <VerticalTimeline className="timeline">
  <VerticalTimelineElement 
    className="vertical-timeline-element--work"
    date="2011 - present"
    iconStyle={{ background: 'rgb(233, 30, 99)', color: '#fff' }}
    icon ={<GoRepoForked />}
  > <div className ="subtimeline">
    <h3 className="vertical-timeline-element-title">CNN Image Classifier</h3>
    <br/>
    <h4 className="vertical-timeline-element-subtitle">An app that classifies images</h4>
    <p>
      
    </p></div>
  </VerticalTimelineElement>
  <VerticalTimelineElement
    className="vertical-timeline-element--work"
    date="2010 - 2011"
    iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
    icon ={<FaFirstOrderAlt />}
  >
    <h3 className="vertical-timeline-element-title">Kaggle Competition</h3> <br/>
    <h4 className="vertical-timeline-element-subtitle">Its a Kaggle competition</h4>
    <p>
      
    </p>
  </VerticalTimelineElement>
  <VerticalTimelineElement
    className="vertical-timeline-element--work"
    date="2008 - 2010"
    iconStyle={{ background: 'rgb(78, 77, 122)', color: '#fff' }}
    icon={<TiAdjustBrightness/>} 
  >
    <h3 className="vertical-timeline-element-title">UBC MIST </h3><br/>
    <h4 className="vertical-timeline-element-subtitle">Health app that measures your stress</h4>
    <p>
      
    </p>
  </VerticalTimelineElement>
  <VerticalTimelineElement
    className="vertical-timeline-element--work"
    date="2006 - 2008"
    iconStyle={{ background: 'rgb(202, 138, 234)', color: '#fff' }}
    icon={<IoIosGlobe/>} 
  >
    <h3 className="vertical-timeline-element-title">Data Cleaning Software</h3><br/>
    <h4 className="vertical-timeline-element-subtitle">Cleans up the folder</h4>
    <p>
      
    </p>
  </VerticalTimelineElement>
  <VerticalTimelineElement
    className="vertical-timeline-element--education"
    date="April 2013"
    iconStyle={{ background: 'rgb(255, 241, 94)', color: '#fff' }}
    icon={<FaQq/>}
  >
    <h3 className="vertical-timeline-element-title">Style Transfer Software</h3>
    <h4 className="vertical-timeline-element-subtitle"></h4>
    <p>
      
    </p>
  </VerticalTimelineElement>
  <VerticalTimelineElement
    className="vertical-timeline-element--education"
    date="November 2012"
    iconStyle={{ background: 'rgb(31, 149, 155)', color: '#fff' }}
    icon={<FaServer/>}
  >
 
  </VerticalTimelineElement>
  <VerticalTimelineElement
  
    iconStyle={{ background: 'rgb(233, 30, 99)', color: '#fff' }}
    icon={<TiFlowSwitch/>}
  >
  

  </VerticalTimelineElement>
  <VerticalTimelineElement
    iconStyle={{ background: 'rgb(16, 204, 82)', color: '#fff' }}
    icon ={<IoIosInfinite/>}
  />
</VerticalTimeline>);

}

const Main = (props) => (
    <div styles={{
        flex: 1,
         height: '100vh',
        overflow: 'auto'}}>
    <div style={{ padding:'20px' }} {...props}/>
    </div>
)





export default Projects;
