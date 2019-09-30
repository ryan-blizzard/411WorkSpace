import React, {Component} from 'react';
import { AppBar,Toolbar,TextField, Typography, Button } from '@material-ui/core'
import './App.css';
import Cardz from './components/Cardz'


class App extends Component {
  state = { show: false}
  
  handleClick = () => {
    this.setState({show: !this.state.show})
}
  
  render() {
  return (
    <div className="App">
      <AppBar className='top' position="static">
        <Toolbar>
        
          <Typography variant="h6" >
          Music App
          </Typography>
    
        </Toolbar>
      </AppBar>

      {this.state.show ? (<Cardz/>) : 
  <div className='login'> <TextField
  id="standard-password-input"
  label="Monkey"
  type="input"
  autoComplete="current-password"
  margin="normal"
/>
<TextField
  id="standard-password-input"
  label="Bannana"
  type="password"
  autoComplete="current-password"
  margin="normal"
/>
<Button onClick={this.handleClick} variant="contained" color="primary" >
  Login
</Button>
</div>


      }


    </div>
  );
}
}

export default App;
