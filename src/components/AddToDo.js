import React, { Component } from 'react'
import PropTypes from 'prop-types';

export class AddToDo extends Component {
    // default variable and value for the text field
    state = {
        title: ''
    }

    onSubmit = (e) => {
        e.preventDefault();
        // this.props.addToDo(this.state.title);
        this.props.addToDo(this.state.title);
        this.setState({ title: ''})
    }

    onChange = (e) => this.setState({
        [e.target.name]: e.target.value
    });

    render() {
        return (
            <form onSubmit={this.onSubmit} className="textForm" style={{display:'flex'}}>
                {/* text input */}
                <input type="text" 
                       name="title" 
                       placeholder="Add to do..." 
                       className="addTextField"
                       value={this.state.title}
                       onChange={this.onChange}
                       />
                {/* submit button */}
                <input type="submit" 
                       value="Submit" 
                       className="btn" 
                    />
            </form>
        )
    }
}

//PropTypes
AddToDo.propTypes = {
    addToDo: PropTypes.func.isRequired
  }

export default AddToDo
