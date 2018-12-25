
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import React, { Component } from 'react';
import './imagestyles.css';
import Fade from 'react-reveal/Fade';



export default function MachineLeaning(){
return(
      <Router>
    <div>

        <ul>
          <li>
            <Link to="/machine-learning/Regularization">Regularization</Link>
          </li>
          <li>
            <Link to="/machine-learning/PCA">PCA</Link>
          </li>
        </ul>
    </div>
      </Router>
);

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
