import React, { Component } from 'react';

class Contacts extends Component {
    state =  {
        show: false
    }
    handleClick = () => {
        this.setState({show: !this.state.show})
    }
    

        render() {
        return(
        <div>
            {this.state.show ? (
                <div>
                <p>{this.props.rolla.phone}</p>
                <p>{this.props.rolla.email}</p>
                </div>
            ) :  (<p></p>)}
            <button onClick={this.handleClick}>{this.state.show ? 'hide' : 'show'}</button>
        </div>
        )
    }



}
export default Contacts;