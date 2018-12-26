
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import React, { Component } from 'react';
import './imagestyles.css';
import Fade from 'react-reveal/Fade';
import './textStyles.css';

export default function MachineLeaning(){
return ( <ul className = "list-ML">
          <li>
            <Link  to="/machine-learning/Regularization">Regularization</Link>
          </li>
          <li>
            <Link  to="/machine-learning/PCA">PCA</Link>
          </li>
        </ul>);
    

}



export  function Regularization(){

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


const TOPICS = [
  { id: 0, topic: "Data Science", subs: [1, 2, 3] },
  { id: 1, topic: "Descision Trees", subs: [0, 3] },
  { id: 2, topic: "Naive Bayes", subs: [0, 1, 3] },
  { id: 3, topic: "KNN", subs: [1, 2] },
  { id: 4, topic: "Ensemble Methods", subs: [1, 2] },
  { id: 5, topic: "Clustering", subs: [1, 2] },
  { id: 6, topic: "Outlier Detection", subs: [1, 2] },
  { id: 7, topic: "similar items", subs: [1, 2] },
  { id: 8, topic: "Linear Regression", subs: [1, 2] },
  { id: 9, topic: "Nonlinear Regression", subs: [1, 2] },
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


