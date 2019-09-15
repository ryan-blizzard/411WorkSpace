import React, {Component} from 'react'
import DeleteItem from './Delete'

class ToDo extends Component {
    state = {
        count: 0 ,
        inputText: '',
        todos: []
    }

    increase = () => {
        this.setState({count: this.state.count + 1})
    }


handleTextChange = (e) => {
    this.setState({inputText: e.target.value})
}

submitTodo = () => {
    const currentTodos = this.state.todos
    currentTodos.push(this.state.inputText)
    this.setState({todos: currentTodos})
}


    render() {
        return (
            <div>
                <input 
                    type='text' 
                    onChange={this.handleTextChange}
                    value={this.state.inputText}/>
                    <button onClick={this.submitTodo}>Doin Stuff n Things</button>
              
                {this.state.todos.map((todo, index) => {
                    return <p key={index}>{todo}  <DeleteItem/></p>
                    })
        }
              
            
            </div>
        )}
                }
    

export default ToDo