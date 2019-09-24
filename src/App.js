import React, {Component} from 'react';
import {BrowserRouter as Router, Route } from 'react-router-dom'
import Todos from './components/Todos';
import './App.css';
import Header from './components/layout/Header';
import AddToDo from './components/AddToDo';
import About from './components/pages/About';
import uuid from 'uuid';

class App extends Component {
  //default values/data of the todo list
  state = { //javascript object
            todos: [
              {
                id: 1,
                title: 'Take out the trash',
                completed: false
              },
              {
                id: 2,
                title: 'Practice React js',
                completed: false
              }
            ]
          }

  //Toggle Complete
  markComplete = (id) => {
    this.setState({
      todos: this.state.todos.map (todo => {
        if(todo.id === id){
          todo.completed = !todo.completed
        }
        return todo;
      })
    });
  }
  
  //deletes the item
  deleteTodo = (id) => {
    //filter() returns another array 
    this.setState({ todos: [...this.state.todos.filter(todo => todo.id !== id)]})
  }

  //add list item
  addToDo = (title) => {
    const newToDo = {
      id: uuid.v4(),
      title,
      completed: false
    }

    this.setState({
      todos: [...this.state.todos, newToDo]
    })
  }
//Note: render() is the lifecycle method. It is required because
//      it renders the component in the browser and that's called JSX (JavaScript XML)
  render(){
    return (
      <Router>
        <div className="App">
          <div className="container">
            <Header/>
            <Route exact path="/" render={ props=> (
              <React.Fragment>
                <Todos todos={this.state.todos} 
                  markComplete={this.markComplete} //calling markComplete function
                  deleteTodo={this.deleteTodo} //calling deleteToDo function
                  /> 
                <AddToDo addToDo={this.addToDo}/>
              </React.Fragment>
            )} /> 
            <Route path="/about" component={About} />
          </div>
        </div>
      </Router>
    );
  }
}

export default App;

// Note: different components can have their own 'state'

/**
 * Note: Difference between map() and filter()
 * 
 * map()  -> creates a new array with the results of calling a function
 *            for every array elements.
 *        -> it allows the items in an array to be manipulated to the user's
 *            preferences, returning the conclusion of the chosen manipulation
 *            in an entirely new array.
 * 
 * filter() -> creates an array filled with all array elements that pass
 *              a test implemented by the provided function.
 *           -> identifying certain items in an array that share a common 
 *              characteristics
 * 
 * SOURCE: https://medium.com/@c.mansour/the-difference-between-the-filter-and-map-array-methods-in-javascript-f8164f65fa5e
 */