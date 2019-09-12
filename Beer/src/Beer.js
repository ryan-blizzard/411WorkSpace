import React, {Component} from 'react'

class Beer extends Component {
    render() {
        return (
            <div>
            <p>
            {this.props.beerx.name}
            </p>
            <p>
            {this.props.beerx.description}
            </p>
            </div>
        )
    }
}

export default Beer