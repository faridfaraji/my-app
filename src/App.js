

import React, { Component } from 'react';
import logo from './logo.svg';
import  './App.css';
import './Button.css';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import 'semantic-ui-css/semantic.min.css';
import './timeline.css'
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import mypic from './mypic.jpg';
import show from './Projects.js';
import About from './About.js';
import Home from './Home.js';
import MachineLearning from './MachineLearning.js';
function BasicExample() {
    return (
  
   <Router>     
         <Root>
         <Sidebar>

      <div className= "big">
        <ul>
          
        <Link className= "link" to="/">Home</Link>
        <br />
        <hr />
       <Link className = "link "to="/about">About</Link>
       <br />
        <hr />
       <Link className = "link" to="/topics">Topics</Link>
       <br />
        <hr />
       <Link className = "link-ml" to="/machine-learning">Machine Learning</Link>
       <Route path="/machine-learning"
           component={MachineLearning} />
        <br />
        <hr />
       <Link className = "link-dl" to="/deep-learning">deep learning</Link>
        <br />
        <hr />
       <Link className = "link" to="/Linear Algebra">Linear Algebra</Link>
        <br/>
        <hr />
        <Link className = "link" to="/MLV Calc">MLV Calculus</Link>
        <br/>
        <hr />
        <Link className = "link" to="/system">Systems</Link>
        <br />
        <hr />
        <Link className = "link" to="/Operating Systems">Operating Sys</Link>
        <br />
        <hr />
        <Link className = "link" to="/projects">Project</Link>
        </ul>
       <hr />
      </div>

        </Sidebar>
        <Main>
        <Route exact path="/" component={Home} />
        <Route path="/about" component={About} />
        <Route path="/topics" component={Topics} />
        <Route path="/projects" component={Projects} />
        </Main>
        </Root>
        </Router>
  );    
      
    
}/*
function MachineLearning({ match}){
return(<div>
  
          <ul>
            <li>
              <Link to="/machine-learning/Regularization">Regularization</Link>
            </li>
            <li>
              <Link to="/machine-learning/PCA">PCA</Link>
            </li>
          </ul>
      </div>);
  
  }



function Regularization(){
return  <h3>Regularization</h3>;

}*/

function Topics({ match }) {
  return (
    <div>
      <h2>Machine learning</h2>
      <ul>
        <li>
          <Link to={`${match.url}/rendering`}>Rendering with React</Link>
        </li>
        <li>
          <Link to={`${match.url}/components`}>Components</Link>
        </li>
        <li>
          <Link to={`${match.url}/props-v-state`}>Props v. State</Link>
        </li>
      </ul>

      <Route path={`${match.path}/:topicId`} component={Topic} />
      <Route
        exact
        path={match.path}
        render={() => <h3>Please select a topic.</h3>}
      />
    </div>
  );
}

function Topic({ match }) {
  return (
    <div>
      <h3>{match.params.topicId}</h3>
    </div>
  );
}





function Projects({ match }){
  
return show();

}



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




export default BasicExample;

