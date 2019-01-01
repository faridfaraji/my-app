import { BrowserRouter as Router, Route, Link, withRouter } from "react-router-dom";
import React, { Component } from 'react';
import './CSS/imagestyles.css';
import Fade from 'react-reveal/Fade';
import './CSS/textStyles.css';



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
        </div> 
    );
  }
}


const Main = (props) => (
    <div styles={{
        flex: 1,
         height: '100vh',
        overflow: 'auto'}}>
    <div style={{ padding:'20px' }} {...props}/>
    </div>
)

export default withRouter(InterComp);