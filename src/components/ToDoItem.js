import React, { Component } from 'react'
import PropTypes from 'prop-types';

export class ToDoItem extends Component {

    getStyle = () => {
        return {
            background: '#f4f4f4',
            padding: '10px',
            borderBottom: '1px solid #ccc',
            textDecoration: this.props.todo.completed ? 'line-through' : 'none'
        }
    }

    render() {
        const { id, title } = this.props.todo;
        return (
            <div style={this.getStyle()}>
                <p>
                    {/* checkbox */}
                    <input type="checkbox" onChange={this.props.markComplete.bind(this, id)} />
                    {/* todo item */}
                    {title}
                    {/* delete button */}
                    <button style={btnStyle}>x</button>
                </p>
            </div>
        )
    }
}

ToDoItem.propTypes = {
    todo: PropTypes.object.isRequired
}

const btnStyle = {
    background: '#ff0000',
    color: '#ffffff',
    border: 'none',
    padding: '5px 9px',
    borderRadius: '50%',
    cursor: 'pointer',
    float: 'right'
}

export default ToDoItem
