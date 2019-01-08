

import React, { Component } from 'react';
import logo from './IMG/logo.svg';
import  './CSS/App.css';
import './CSS/Button.css';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import mypic from './IMG/mypic.jpg';
import Projects,{ShowContent} from './Projects.js';
import About, {ShowAbout} from './About.js';
import Home, {ShowHome} from './Home.js';
import MachineLearning, {Regularization} from './MachineLearning.js';
import Classes, {Topics, ClassesConts}from './Classes.js';
import DeepLearning, {deepLearnProject, DeepConts} from './DeepLearning.js';
import LinAlg, {LinAlgConts} from './LinAlg.js';
import MLVCalc from './MLVCalc.js';
import Sys from './Systems.js';
import Oper from './OperSys.js';
import InterComp, {InternetConts} from './Intercomp.js';
import AlgoDesign, {AlgConts} from './Algodesign.js';
import {TiChevronLeft, TiChevronRight} from 'react-icons/ti';
import LinProg from './LinearProg.js';

class App extends Component{

constructor(props) {
      super(props)
      this.state = {
         
          hide: false,
          datas: []
        
      }
  this.setStateHandler = this.setStateHandler.bind(this);
  
  }
    setStateHandler() {
        
     }





    render() {


      return (
     <div >    
   <Router basename={process.env.PUBLIC_URL}>     
         <Root >
        <div>
        <Sidebar>
        
      <div className= "big">
      
        <ul>
    <Home />
        <hr />
       <About />
        <hr />
       <Projects/>
        <hr/>
       <Classes/>
        <hr />
        <AlgoDesign/>
        <hr/>
       <MachineLearning />
        <hr />
       <DeepLearning/>
        <hr />
        <Sys/>
        <hr />
        <Oper/>
        <hr />
        <InterComp/>
        <hr/>
        <LinProg/>
        <hr/>
         <LinAlg/>
        <hr />
        <MLVCalc/>
        <hr />
        </ul>
      </div>

     
     </Sidebar>

       
        

    </div>
        <Main>
        <Route exact path="/" component={ShowHome} />
        <Route path="/about" component={ShowAbout} />
        <Route path="/topics" component={Topics} />
        <Route path="/projects" component={ShowContent} />
        <Route path="/machine-learning/Data Science" component={Regularization} />
        <Route path="/deep-learning/Project" component={deepLearnProject} />
        <Route path="/deep-learning/Pytorch" render={(props) => <DeepConts {...props} foo={3} /> }/>
        <Route path="/deep-learning/CNN" render={(props) => <DeepConts {...props} foo={1} /> }/>
        <Route path="/deep-learning/Neural Networks" render={(props) => <DeepConts {...props} foo={0} /> }/>
        <Route path="/deep-learning/TensorFlow" render={(props) => <DeepConts {...props} foo={4} /> }/>
         <Route path="/deep-learning/RNN" render={(props) => <DeepConts {...props} foo={2} /> }/>
         <Route path="/Algorithm-design/Stable Matching" render={(props) => <AlgConts {...props} foo={0} /> }/>
         <Route path="/Algorithm-design/Representative Problems" render={(props) => <AlgConts {...props} foo={1} /> }/>

         <Route path="/linear-algebra/Linear Equations" render={(props) => <LinAlgConts {...props} foo={0} /> }/>
      <Route path="/internet-computing/introduction" render={(props) => <InternetConts {...props} foo={0} /> }/>
      <Route path="/internet-computing/Application Layer" render={(props) => <InternetConts {...props} foo={1} /> }/>



       <Route path="/classes/CPSC 303" render={(props) => <ClassesConts {...props} foo={0} /> }/>
       <Route path="/classes/CPSC 313" render={(props) => <ClassesConts {...props} foo={1} /> }/>
       <Route path="/classes/CPSC 320" render={(props) => <ClassesConts {...props} foo={2} /> }/>
       <Route path="/classes/CPSC 317" render={(props) => <ClassesConts {...props} foo={3} /> }/>
       <Route path="/classes/CPSC 340" render={(props) => <ClassesConts {...props} foo={4} /> }/>
       <Route path="/classes/CPSC 406" render={(props) => <ClassesConts {...props} foo={5} /> }/>
       <Route path="/classes/CPSC 415" render={(props) => <ClassesConts {...props} foo={6} /> }/>
       <Route path="/classes/CPSC 417" render={(props) => <ClassesConts {...props} foo={7} /> }/>
        </Main>
        </Root>
    </Router>
    </div>    
    );
  }
}





      
/// This is not used yet anywhere

const TITLES =[
    { id: 0, name: "Home", to: "/home" }, 
    { id: 1, name: "About", to: "/about" },
    { id: 2, name: "Classes", to: "/classes" },
    { id: 3, name: "Machine Learning", to: "/machine-learning" },
    { id: 4, name: "Deep Learning", to: "/deep-learning"},
    { id: 5, name: "Linear Algebra", to: "linear-algebra" },
    { id: 6, name: "MLV Calculus", to: "mlv-calculus"},
    { id: 7, name: "Systems", to: "systems" },
    { id: 8, name: "Operating Sys", to: "operating-sys" },
    { id: 9, name: "Projects", to: "projects" },
];

const titles = () => ( TITLES.map((TITLE) =>
        <div>
         {TITLE.name} 
        <hr />
       </div>   
     )
)


const Root = (props) => (
<div  style={{
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







export default App;

