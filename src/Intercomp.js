import { BrowserRouter as Router, Route, Link, withRouter } from "react-router-dom";
import React, { Component } from 'react';
import './CSS/imagestyles.css';
import Fade from 'react-reveal/Fade';
import './CSS/textStyles.css';
import {InternetIntro, InternetIntro2, InternetIntro3, InternetIntro4} from './CONTS/InternetComp/InternetIntro.js';


class InterComp extends Component{
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
        <Link className = "link" onClick={this.setStateHandler.bind(this)} to={currentLocation}>Internet Computing</Link>
        {this.state.hide && <Sublinks/>}
        </div> 
    );
  }
}


const TOPICS = [
  { id: 0, topic: "Introduction", subs: [] },
   { id: 0, topic: "Application Layer", subs: [] },
];


const Sublinks = () => ( TOPICS.map((TOPIC) =>
    <ul className = "bullet">    
    <li key={TOPIC.id} >
    <Link   className = "list" to= { "/internet-computing"+'/'+TOPIC.topic}
    >{TOPIC.topic}</Link>
 
    </li>
    </ul>
     )
)





export class InternetConts extends Component{
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
      length = PagesInternetIntro.length-1;
      break;
    case 1:
      length = PagesAppLayer.length-1;
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
      return  (PagesInternetIntro.slice(this.state.i,this.state.i+1));
    case 1:
      return  (PagesAppLayer.slice(this.state.i,this.state.i+1));

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
        <p  className="buttontext">Previous</p>
     </button>
       </Link>
       
        <Link className="pageNum" to={currentLocation} >{this.state.i+1}</Link>
    
       
   <Link onClick={(e) =>this.nextPage(e)} to={currentLocation} > 
   <button className="paginationNext">
        <p className="buttontext">Next</p>
     </button> </Link>
        </div> 
    );
  }



}


var PagesInternetIntro = [
 InternetIntro, InternetIntro2, InternetIntro3, InternetIntro4
  
];


var PagesAppLayer = [


];


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

export default withRouter(InterComp);