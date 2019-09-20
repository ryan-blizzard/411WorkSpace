import React, {Component} from 'react'
import Collapse from './Collapse'

class Rolladex extends Component {
    state = {
            rolladex: []
        }

        componentDidMount(){
            fetch('https://randomuser.me/api?results=25')
            .then((response) => {
                return response.json();
            })  

            .then((myJson) => {
        
                this.setState({rolladex: myJson.results});
                console.log(myJson)
            })

        }
    
    render() {
        return( 
            <div>
                <h1>Random Rolladex</h1>
                {
                    this.state.rolladex.map(rolla => {
                        return (
                            <Collapse key={rolla.id.value} rolla={rolla} />
                        )
                    })
                }
            </div>
        )
    }
}

export default Rolladex