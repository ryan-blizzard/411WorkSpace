import React, {Component} from 'react'
import Contacts from './Contacts'
class Collapse extends Component {
    render() {
        return (
            <div>
            <div>
            <img src= {this.props.rolla.picture.medium}/>
            </div>
            {this.props.rolla.name.first}-   
            {this.props.rolla.name.last}
        
        
        <Contacts rolla={this.props.rolla}/>
            </div>
        )
    }
}

export default Collapse