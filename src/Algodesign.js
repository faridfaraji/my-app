import { BrowserRouter as Router, Route, Link, withRouter } from "react-router-dom";
import React, { Component } from 'react';
import './CSS/imagestyles.css';
import Fade from 'react-reveal/Fade';
import './CSS/textStyles.css';
import {Introduction, NetWorkArch, NeuralNetPytorch} from './CONTS/pytorch.js';
import {CNNIntro} from './CONTS/CNN.js';
import {NeurNetIntro} from './CONTS/NeuralNet.js';
import {tensorIntro} from './CONTS/TensorFlow.js';
import {RNNIntro} from './CONTS/RNN.js';
import {RepProblem, RepProblem2} from './CONTS/RepProb.js';



class AlgoDesign extends Component{
constructor() {
    super()
    this.state = {
      hide: false
    }
this.setStateHandler = this.setStateHandler.bind(this);

}
  setStateHandler() {
      this.setState({hide: !this.state.hide})
   }
 
  render() {
      var currentLocation = this.props.location.pathname;
    return (
        <div>
        <Link className = "link" onClick={this.setStateHandler.bind(this)} to={currentLocation}>Algo Design</Link>
        {this.state.hide && <Sublinks/>}
        </div> 
    );
  }
}


const TOPICS = [
  { id: 0, topic: "Stable Matching", subs: [] },
  
  
];


const Sublinks = () => ( TOPICS.map((TOPIC) =>
    <ul className = "bullet">    
    <li key={TOPIC.id} >
    <Link   className = "list" to= { "/Algorithm-design"+'/'+TOPIC.topic}
    >{TOPIC.topic}</Link>
 
    </li>
    </ul>
     )
)



export class AlgConts extends Component{
constructor(props) {
    super(props)
    this.state = {
      i: 0,
      hide: false
}
}



nextPage(){
var length;
  switch(this.props.foo){
    case 0:
      length = PagesRepProblem.length-1;
      break;
   

  }


 if (this.state.i != length)
this.setState({ i: this.state.i + 1 });

}

previousPage(){
  if (this.state.i !=0)
  this.setState({ i: this.state.i - 1 });



}

showContents(){

  switch(this.props.foo){
    case 0:
      return  (PagesRepProblem.slice(this.state.i,this.state.i+1));
   

  }

 
}


render() {

  var currentLocation = this.props.location.pathname;
    return (
      <div>
        <Frame>
        
       {this.showContents()}
       
      </Frame>
          
     <Link onClick={(e) =>this.previousPage(e)}  to={currentLocation} >
       <button  className="paginationPrev">
        <p>Previous</p>
     </button>
       </Link>
       
        <Link className="pageNum" to={currentLocation} >{this.state.i+1}</Link>
    
       
   <Link onClick={(e) =>this.nextPage(e)} to={currentLocation} > 
   <button className="paginationNext">
        <p>Next</p>
     </button> </Link>
        </div> 
    );
  }



}


var PagesRepProblem = [
 RepProblem,RepProblem2
  
];




var PagesRNN = [RNNIntro];

const Frame = (props) => (
<div className = "frame" {...props} />)

const Main = (props) => (
    <div styles={{
        flex: 1,
         height: '100vh',
        overflow: 'auto'}}>
    <div style={{ padding:'20px' }} {...props}/>
    </div>
)

export default withRouter(AlgoDesign);