import { BrowserRouter as Router, Route, Link, withRouter } from "react-router-dom";
import React, { Component } from 'react';
import './CSS/imagestyles.css';
import Fade from 'react-reveal/Fade';
import './CSS/textStyles.css';
import axios from 'axios';
import {Introduction, NetWorkArch, NeuralNetPytorch} from './CONTS/pytorch.js';
import {CNNIntro} from './CONTS/CNN.js';



class DeepLearning extends Component{
constructor(props) {
    super(props)
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
        <Link className = "link-dl" onClick={this.setStateHandler.bind(this)} to={currentLocation}>Deep Learning</Link>
        {this.state.hide && <Sublinks/>}
        </div> 
    );
  }
}




const TOPICS = [
  { id: 0, topic: "Neural Networks", subs: [] },
  { id: 1, topic: "CNN", subs: [1, 3] },
  { id: 2, topic: "RNN", subs: [0, 1, 3] },
  { id: 3, topic: "Pytorch", subs: [1, 2] },
  { id: 4, topic: "TensorFlow", subs: [1, 2] },
  { id: 5, topic: "Project", subs: [1, 2] },
  
];


const Sublinks = () => ( TOPICS.map((TOPIC) =>
    <ul className = "bullet">    
    <li key={TOPIC.id} >
    <Link className = "list" to= { "/deep-learning"+'/'+TOPIC.topic}
    >{TOPIC.topic}</Link>
 
    </li>
    </ul>
     )
)

/// THIS IS Pytorch Link
export class DeepConts extends Component {
constructor(props) {
    super(props)
    this.state = {
      i: 0,
      hide: false
    }
    this.setStateHandler = this.setStateHandler.bind(this);

}



setStateHandler() {
      this.setState({hide: !this.state.hide})
   }


nextPage(){
var length;
  switch(this.props.foo){
    case 0:
      length = PagesCNN.length-1;
      break;
    case 1:
      length = PagesPytorch.length-1;

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
      return  (PagesCNN.slice(this.state.i,this.state.i+1));
    case 1:
      return  (PagesPytorch.slice(this.state.i,this.state.i+1));

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

var PagesPytorch = [
 Introduction,NeuralNetPytorch, NetWorkArch
  
];

var PagesCNN = [
CNNIntro

];










/// THIS IS deepLearnProject Link


export class deepLearnProject extends Component {

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

   fileSelectedHandler = event => {
      this.setState({

       selectedFile: event.target.files[0]
      })
     console.log(event);
   }

   fileUploadHandler = () =>{

    axios.post('')


   }
 
  render() {
      
    return (
      <div>
        <input type = "file" onChange={this.fileSelectedHandler}/>
        <button onClick={this.fileUploadHandler}>Upload </button>
        </div> 
    );
  }
}



const Frame = (props) => (
<div className = "frame" {...props} />)

const CodeFrame = (props) => (
<div className = "code-frame" {...props} />)



 const Pagination = () => ( 
   <div>
   <Link className = "pagination"  to="/deep-learning/Pytorch"> Previous--- </Link>
   <Link className = "pagination"  to="/deep-learning/Pytorch">  ---Next </Link>
     </div>
)



   


export default withRouter(DeepLearning);