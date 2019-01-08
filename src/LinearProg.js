import { BrowserRouter as Router, Route, Link, withRouter } from "react-router-dom";
import React, { Component } from 'react';
import './CSS/imagestyles.css';
import Fade from 'react-reveal/Fade';
import './CSS/textStyles.css';
import {LinEquat1} from './CONTS/LinearAlgebra/LinearEquation.js';



class LinProg extends Component{
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
        <Link className = "link" onClick={this.setStateHandler.bind(this)} to={currentLocation}>Linear Programming</Link>
         {this.state.hide && <Sublinks/>}
        </div> 
    );
  }
}
const TOPICS = [
  { id: 0, topic: "Linear Equations", subs: [] },
 
];


const Sublinks = () => ( TOPICS.map((TOPIC) =>
    <ul className = "bullet">    
    <li key={TOPIC.id} >
    <Link   className = "list" to= { "/linear-algebra"+'/'+TOPIC.topic}
    >{TOPIC.topic}</Link>
 
    </li>
    </ul>
     )
)





//****************************

export class LinProgConts extends Component {
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
      length = PagesLinearEqu.length-1;
  

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
      return  (PagesLinearEqu.slice(this.state.i,this.state.i+1));
      
  

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
       <button className="paginationPrev">
        <p className="buttontext">Previous</p>
     </button>
       </Link>
       
        <Link className="pageNum" to={currentLocation} >{this.state.i+1}</Link>
    
       
   <Link onClick={(e) =>this.nextPage(e)} to={currentLocation} > 
   <button className="paginationNext">
        <p className="buttontext">Next</p>
     </button > </Link>
        </div> 
    );
  }


}

var PagesLinearEqu = [
    LinEquat1
  
];

const Frame = (props) => (
<div className = "frame" {...props} />)

const CodeFrame = (props) => (
<div className = "code-frame" {...props} />)







export default withRouter(LinProg);