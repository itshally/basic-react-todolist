import React, { Component } from 'react'

//proptypes are sort of validation for properties that a component
//should have to set the type, if it's required or not...etc.
import PropTypes from 'prop-types';
import ToDoItem from './ToDoItem';

class Todos extends Component {
  render(){
    //map() --> is a high order array method; it can return an array from an array
    //looping through the todolist and then outputting JSX
    return this.props.todos.map((todo) => (
      <ToDoItem key={todo.id} //every list has a key that uses a unique id
                todo={todo} //todo is a prop and is being passed to the ToDoItem component
                markComplete={this.props.markComplete}
                deleteTodo={this.props.deleteTodo} 
                />
    ));
  }
}

//PropTypes
Todos.propTypes = {
  todos: PropTypes.array.isRequired,
  markComplete: PropTypes.func.isRequired,
  deleteTodo: PropTypes.func.isRequired
}

export default Todos; 

