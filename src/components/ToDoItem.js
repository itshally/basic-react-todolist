import React, { Component } from 'react'

//proptypes are sort of validation for properties that a component
//should have to set the type, if it's required or not...etc.
import PropTypes from 'prop-types';

export class ToDoItem extends Component {

    //a style function for the div element (line 22)
    getStyle = () => {
        return {
            background: '#f4f4f4',
            padding: '10px',
            borderBottom: '1px solid #ccc',
            //an if-else statement if the todo item is completed or not (ternary operator)
            textDecoration: this.props.todo.completed ? 'line-through' : 'none'
        }
    }

    render() {
        //destructuring to get the variables from the props
        const { id, title } = this.props.todo;
        return (
            <div style={this.getStyle()}>
                <p>
                    {/* checkbox */}
                    <input type="checkbox"
                           //adding an "onChange" event; "markComplete" is a method
                           //bind() sets "this" value as the item's id
                           onChange={this.props.markComplete.bind(this, id)} 
                           /> 
                    {/* todo item */}
                    {title}
                    {/* delete button */}
                    <button onClick={this.props.deleteTodo.bind(this, id)} 
                             style={btnStyle}>x</button>
                </p>
            </div>
        )
    }
}

//PropTypes
ToDoItem.propTypes = {
    todo: PropTypes.object.isRequired,
    markComplete: PropTypes.func.isRequired,
    deleteTodo: PropTypes.func.isRequired
  }

// delete button style
const btnStyle = {
    background: '#ff0000',
    color: '#ffffff',
    border: 'none',
    padding: '5px 9px',
    borderRadius: '50%',
    cursor: 'pointer',
    float: 'right'
}

export default ToDoItem;
