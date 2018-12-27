

import React, { Component } from 'react';
import logo from './IMG/logo.svg';
import  './CSS/App.css';
import './CSS/Button.css';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
//import 'semantic-ui-css/semantic.min.css';
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import mypic from './IMG/mypic.jpg';
import Projects,{ShowContent} from './Projects.js';
import About, {ShowAbout} from './About.js';
import Home, {ShowHome} from './Home.js';
import MachineLearning, {Regularization} from './MachineLearning.js';
import Classes, {Topics}from './Classes.js';
import DeepLearning from './DeepLearning.js';
import LinAlg from './LinAlg.js';
import MLVCalc from './MLVCalc.js';
import Sys from './Systems.js';
import Oper from './OperSys.js';

class App extends Component{

constructor(props) {
      super(props)
      this.state = {
        
      }
  this.setStateHandler = this.setStateHandler.bind(this);
  
  }
    setStateHandler() {
        
     }
  

    render() {
      return (
         
   <Router>     
         <Root>
        <div>
        <ssssh/>
      <div className= "big">
        <ul>
       <Home />
        <hr />
       <About />
        <hr />
       <Classes/>
        <hr />
       <MachineLearning />
        <hr />
       <DeepLearning/>
        <hr />
       <LinAlg/>
        <hr />
        <MLVCalc/>
        <hr />
        <Sys/>
        <hr />
        <Oper/>
        <hr />
        <Projects/>
        <hr/>
        
        </ul>
      </div>
        <Sidebar>
        </Sidebar>
    </div>
        <Main>
        <Route exact path="/my-app" component={ShowHome} />
        <Route path="/about" component={ShowAbout} />
        <Route path="/topics" component={Topics} />
        <Route path="/projects" component={ShowContent} />
        <Route path="/machine-learningData Science" component={Regularization} />
        </Main>
        </Root>
    </Router>);
  }
}


/// This is not used yet anywhere
const links = () => ( Links.map((Link) =>
        <div>
        <Link />
        <hr />
       </div>   
     )
)

const Root = (props) => (
<div style={{
    display: 'flex'
}} {...props}/>
)

const Sidebar = (props) => (
    <div className ="Sidebar"  {...props} />)



const Main = (props) => (
    <div styles={{
        flex: 1,
        height: '100vh',
        overflow: 'auto'}}>
    <div style={{ padding:'20px' }} {...props}/>
    </div>
)





const Links =[
    { id: 0, name: "Home", to: "/home" }, 
    { id: 0, name: "About", to: "/about" },
    { id: 0, name: "Classes", to: "/classes" },
    { id: 0, name: "Machine Learning", to: "/machine-learning" },
    { id: 0, name: "Deep Learning", to: "/deep-learning"},
    { id: 0, name: "Linear Algebra", to: "linear-algebra" },
    { id: 0, name: "MLV Calculus", to: "mlv-calculus"},
    { id: 0, name: "Systems", to: "systems" },
    { id: 0, name: "Operating Sys", to: "operating-sys" },
    { id: 0, name: "Projects", to: "projects" },
];

export default App;

