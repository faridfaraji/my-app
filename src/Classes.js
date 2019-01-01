import { BrowserRouter as Router, Route, Link, withRouter } from "react-router-dom";
import React, { Component } from 'react';
import './CSS/imagestyles.css';
import Fade from 'react-reveal/Fade';
import './CSS/textStyles.css';



class Classes extends Component{
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
        <Link className = "link" onClick={this.setStateHandler.bind(this)}  to={currentLocation}>Classes</Link>
        {this.state.hide && <Sublinks/>}
        </div> 
    );
  }
}


const TOPICS = [
  { id: 0, topic: "CPSC 313", subs: [] },
  { id: 1, topic: "CPSC 317", subs: [1, 3] },
  { id: 2, topic: "CPSC 320", subs: [0, 1, 3] },
  { id: 3, topic: "CPSC 340", subs: [1, 2] },
  {id: 4, topic: "CPSC 406", subs: [1, 2]},
  { id: 5, topic: "CPSC 415", subs: [1, 2]},
  { id: 6, topic: "CPSC 417", subs: [1, 2]}
  
  
];


const Sublinks = () => ( TOPICS.map((TOPIC) =>
    <ul className = "bullet">    
    <li key={TOPIC.id} >
    <Link className = "list"  to={"/topics"+'/'+TOPIC.topic}>{TOPIC.topic}</Link>
 
    </li>
    </ul>
     )
)




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


export default withRouter(Classes);

