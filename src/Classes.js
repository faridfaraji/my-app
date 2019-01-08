import { BrowserRouter as Router, Route, Link, withRouter } from "react-router-dom";
import React, { Component } from 'react';
import './CSS/imagestyles.css';
import Fade from 'react-reveal/Fade';
import './CSS/textStyles.css';



class Classes extends Component{
constructor() {
    super()
    this.state = {
      hide2: false,
      hide: false
    }
this.setStateHandler2 = this.setStateHandler2.bind(this);    
this.setStateHandler = this.setStateHandler.bind(this);

}
setStateHandler2() {
      this.setState({hide2: !this.state.hide2})
   }



  setStateHandler() {
      this.setState({hide: !this.state.hide})
   }

  
 
  render() {


    const Sublinks = () => ( TOPICS.map((TOPIC) =>
    <ul className = "bullet">    
    <li key={TOPIC.id} >
    <Link className = "list"  onClick={this.setStateHandler2.bind(this)} to={"/classes"+'/'+TOPIC.topic}>{TOPIC.topic}</Link>
   {this.state.hide2 && 
     <Route path={"/classes"+'/'+TOPIC.topic} render={(props) => <Subsises {...props} foo={0} /> }/>}

    </li>
    </ul>
     )
)


      var currentLocation = this.props.location.pathname;
    return (
        <div>
        <Link className = "link" onClick={this.setStateHandler.bind(this)}  to={currentLocation}>Classes</Link>
        {this.state.hide && <Sublinks/>}
        </div> 
    );
  }
}


const TOPICS = [
  { id: 0 ,topic: "CPSC 303"},
  { id: 1, topic: "CPSC 313"},
  { id: 2, topic: "CPSC 317"},
  { id: 3, topic: "CPSC 320"},
  { id: 4, topic: "CPSC 340" },
  {id: 5, topic: "CPSC 406"},
  { id: 6, topic: "CPSC 415"},
  { id: 7, topic: "CPSC 417"}
  
  
];






///%%%%%%%%%%%%%%%%%%%%%%%%%********************************
///%%%%%%%%%%%%%%%%%%%%%%%%%********************************
///%%%%%%%%%%%%%%%%%%%%%%%%%********************************
///%%%%%%%%%%%%%%%%%%%%%%%%%********************************
///%%%%%%%%%%%%%%%%%%%%%%%%%********************************



export class ClassesConts extends Component {
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
      length = Pages1.length-1;
  

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
      return  (Pages1.slice(this.state.i,this.state.i+1));
      
  

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

var Pages1 = [
    
  
];
export function Subsises({match}){

return (
  <div>
  <ul>
   <li>
<Link to={`${match.url}`}>Reviews</Link>
  </li>
    <li>
<Link to={`${match.url}`}>Practice</Link>
  </li>
    </ul>
</div>
);
}


export function Topics({match}) {
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


const Main = (props) => (
    <div styles={{
        flex: 1,
         height: '100vh',
        overflow: 'auto'}}>
    <div style={{ padding:'20px' }} {...props}/>
    </div>
)



const Frame = (props) => (
<div className = "frame" {...props} />)

const CodeFrame = (props) => (
<div className = "code-frame" {...props} />)

export default withRouter(Classes);

