import React, {Component} from 'react'

class Button extends Component {
    constructor(props){
      super(props)
      this.state ={
        button: true
      }
      this.handleClick = this.handleClick.bind(this);
    }
    handleClick(){
      this.setState({
        button:!this.state.button
      })
    }
    render(){
      return (
      <div className="container">
        <button className={this.state.button ? "buttonTrue": "buttonFalse"} onClick={this.handleClick}>{this.state.button ? 'low' : 'high'}</button>  
      </div>
      )
    }
    
  }
  

export default Button