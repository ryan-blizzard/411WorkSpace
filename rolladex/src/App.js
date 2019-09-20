import React from 'react';
import Rollodex from './Rolladex';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
      <Rollodex/>

      </header>
    </div>
  );
}

export default App;









// import React, { Component } from 'react';

// class App  extends Component {
// state = {
//   contacts: []
// }
// componentDidMount(){
//   fetch('https://randomuser.me/api?results=25')
//   .then((res)=>{
//     return res.json()
//   })
//   .then((myJson) => {
//     this.setState({contacts: myJson})
//   })
// }
// render(){
//   return(
//     <div>
//     <h1>contacts</h1>
//     {this.state.contacts.map(con => {
//       return(
//         <div>  </div>
//       )
//      })}
//      </div>
//   )}


// }
// export default App;