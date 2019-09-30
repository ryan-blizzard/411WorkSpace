import React, { Component } from 'react';
import { Card, CardContent, Typography, Switch } from '@material-ui/core';
import InputSlider from './Slider'
import NativeSelects from './Option'

class Cardz extends Component {
    state = { 
        switch: false,
        slider: false,
        drop: false
    }
    
switchClick = () => {
    this.setState({switch: !this.state.switch})
}
 handleKids = (x)  => {
   const k = Object.keys(x)[0]
   const newState = {}
   newState[k] = x[k] 
   this.setState(newState)
 } 
 
 


    render() { 
        return (
            <div>
            <h1>Welcome to the Jungle</h1>
    
<div className='wrapper'>

<Card className='card' >
    <CardContent>
        <Typography  color="textSecondary" gutterBottom>
            Word of the Day
        </Typography>
        <Typography variant="h5" component="h2">
        Baby
        </Typography>
        <Typography  color="textSecondary">
            adjective
        </Typography>
        <Typography variant="body2" component="p">
            well meaning and kindly.
            <br />
            {'"a benevolent Tyrant"'}
            <br></br>
        </Typography>
            <Switch onClick={this.switchClick} color="secondary"/>
    </CardContent>
</Card>

<Card  className='card'>
    <CardContent>
        <Typography  color="textSecondary" gutterBottom>
            Word of the Day
        </Typography>
        <Typography variant="h5" component="h2">
        Monkey
        </Typography>
        <Typography  color="textSecondary">
            adjective
        </Typography>
        <Typography variant="body2" component="p">
            well meaning and kindly.
            <br />
            {'"mischief and  high jinks"'}
        </Typography>
            <InputSlider parentfun={this.handleKids}/>
    </CardContent>
</Card>


<Card className='card' >
        <CardContent>
        <Typography  color="textSecondary" gutterBottom>
            Word of the Day
        </Typography>
        <Typography variant="h5" component="h2">
        Banana-na-nas
        </Typography>
        <Typography  color="textSecondary">
            adjective
        </Typography>
        <Typography variant="body2" component="p">
            all Gone!
            <br />
            {'"a content smile"'}
        </Typography>
        <NativeSelects parentfun2={this.handleKids} />
    </CardContent>
</Card>
</div>
<div className='system'>

<h1>System Notifications:</h1>
{this.state.switch ? (<iframe title='howdy' width="560" height="315" src="https://www.youtube.com/embed/7DYjfjaZGas" frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>)
: <p></p>}
{this.state.slider ? (<h5>Can You Hear Me Now?!</h5>) : <p></p>}
</div>

</div>
        );
    }
}

export default Cardz;