import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import React, { Component } from 'react';
import './CSS/imagestyles.css';
import Fade from 'react-reveal/Fade';
import './CSS/textStyles.css';



class Oper extends Component{
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
      
    return (
        <div>
        <Link className = "link" to="/operating-system">Operating System</Link>
        </div> 
    );
  }
}

export default Oper;