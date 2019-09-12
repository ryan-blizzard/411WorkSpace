import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import ToDo from './components/ToDo'


class App extends Component {
  constructor (props){
    super(props)
    this.state = {
      input: '',
      items: [] 
    }
}


// toggle = () => {
//   this.setState({isOn: !this.state.isOn})
// }
  
  inputUpdate = event => {
    this.setState({ input: event.target.value})
}

deleteTodo(){
  this.setState({items: []});  
}


formSubmit = event => {
  event.preventDefault()
  this.setState({
    items : [...this.state.items, this.state.input],
    input: ''
  })
}
  
  render(){
  return (
    <div className="App">
      <header className="App-header">
    <Header stuff = 'ATOMIC KITTY KATZ'/>
        <div className="eyes">
        <img src={logo} className="App-logo" alt="logo" /> 
        <img src={logo} className="App-logo1" alt="logo" />
        </div>
     <ToDo/>
     
    <form onSubmit={this.formSubmit}>
      <input value={this.state.input} onChange={this.inputUpdate}/>
      <button id='btn1'>Bannana
      </button>
    </form>

     <ul>
     {this.state.items.map((item , index)=>{
      return <li key={index}>{this.state.items[index]}   <button id='btn1' onClick={this.deleteTodo.bind(this, item)}>monkey</button> </li>
     })}
     </ul>
      </header>
    </div>
  );
}
}
/* <button onClick={this.toggle}>{this.state.isOn ? 'Bannanas' : 'Orange'}</button> */

export default App;
