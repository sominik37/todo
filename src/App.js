import React, { Component } from 'react';
import Todos from './Components/Todos.js';
import AddTodo from './Components/AddTodo'

class App extends Component {
  state = {
    todos: []
    
  }

  deleteTodo = (id) => {
    const todos = this.state.todos.filter(todos => {
      return todos.id !== id
    });

    this.setState({
      todos
    })
  }

  addTodo = (todo) => {
    todo.id = Math.random();
    let todos = [...this.state.todos, todo];
    this.setState({
      todos
    });
  }

  render (){
    return(
    <div className="todo-app container">
      <h1 className="center blue-text">Todos</h1>
      <Todos todos = {this.state.todos} deleteTodo = {this.deleteTodo} />
      <AddTodo  addTodo = {this.addTodo}/>
    </div>
    
    );
}
}

export default App;
