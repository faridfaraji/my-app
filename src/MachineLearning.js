
import { BrowserRouter as Router, Route, Link,withRouter } from "react-router-dom";
import React, { Component } from 'react';
import './CSS/imagestyles.css';
import Fade from 'react-reveal/Fade';
import './CSS/textStyles.css';



class MachineLearning extends Component{

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
       
        <Link className = "link-ml" onClick={this.setStateHandler.bind(this)}
        to={currentLocation}>Machine Learning</Link>
        {this.state.hide && <Sublinks/>} 
         
        </div> 
      
       
    );


  }
}


const TOPICS = [
  { id: 0, topic: "Data Science", subs: [] },
  { id: 1, topic: "Descision Trees", subs: [1, 3] },
  { id: 2, topic: "Naive Bayes", subs: [0, 1, 3] },
  { id: 3, topic: "KNN", subs: [1, 2] },
  { id: 4, topic: "Ensemble Methods", subs: [1, 2] },
  { id: 5, topic: "Clustering", subs: [1, 2] },
  { id: 6, topic: "Outlier Detection", subs: [1, 2] },
  { id: 7, topic: "similar items", subs: [1, 2] },
  { id: 8, topic: "Linear Regression", subs: [18, 19] },
  { id: 9, topic: "Nonlinear Reg", subs: [1, 2] },
  { id: 10,topic: "Gradient Descent", subs: [1, 2] },
  { id: 11, topic: "Robust Regression", subs: [1, 2] },
  { id: 12, topic: "Feature Selection", subs: [1, 2] },
  { id: 13, topic: "Regularization", subs: [1, 2] },
  { id: 14, topic: "Linear Classifiers", subs: [1, 2] },
  { id: 15, topic: "Kernel Methods", subs: [1, 2] },
  { id: 16, topic: "MLE, MAP", subs: [1, 2] },
  { id: 17, topic: "PCA", subs: [1, 2] },
  { id: 18, topic: "L1 Reg", subs: [1, 2] },
  { id: 19, topic: "L2 Reg", subs: [1, 2] },  
];
 
const Sublinks = () => ( TOPICS.map((TOPIC) =>
    <ul className = "bullet">    
    <li key={TOPIC.id} >
    <Link className = "list"  to={"/machine-learning"+'/'+TOPIC.topic}>{TOPIC.topic}</Link>
 
    </li>
    </ul>
     )
)
   


export function Regularization(){

return <h3>Regularization</h3>;


}



export function PCA(){
return <h3>PCA</h3>;

}

    
const Main = (props) => (
    <div styles={{
        flex: 1,
         height: '100vh',
        overflow: 'auto'}}>
    <div style={{ padding:'20px' }} {...props}/>
    </div>
)




export default withRouter(MachineLearning);
