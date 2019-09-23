import React, { Component } from 'react'
import ToDoItem from './ToDoItem';

export class Todos extends Component {
  render(){
    return this.props.todos.map((todo) => (
      <ToDoItem key={todo.id} todo={todo} markComplete={this.props.markComplete}/>
    ));
  }
}

export default Todos
