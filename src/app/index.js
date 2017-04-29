'use strict';

let React = require('react'); //var needs to be capitalized
let reactDom = require('react-dom');
require('./css/index.css');
import {BrowserRouter as Router, Route, Switch, Link} from 'react-router-dom'

//module requires
let TodoItem = require('./todoItem');
let AddItem = require('./addItem');
let About = require('./about');

let App = React.createClass({
  render: function(){
    return(
      <Router>
        <Switch>
          <Route exact={true} path={'/'} component={TodoComponent}></Route>
          <Route path={'/about'} component={About}></Route>
        </Switch>
      </Router>
    )
  }
});

//TodoComponent
let TodoComponent = React.createClass({
  getInitialState: function(){
    return{
      todos:['get up', 'go to work', 'nap', 'study', 'sleep'],
      age: 7
    }
  },

  render: function(){
      let todos = this.state.todos;
      todos = todos.map(function(item, index){
        return (
          <TodoItem item={item} key={index} onDelete={this.onDelete} />
        );
      }.bind(this)) //need this, or switch to arrow functions

    return(
      <div id="todo-list">
        <p onClick={this.clicked}>My Life</p>
        <ul>{todos}</ul>
        <AddItem onAdd={this.onAdd}/>
      </div>
    );
  },//render

  //custom functions

  //clicked property
  clicked: function(){
    console.log('clicked')
  },

//onDelete Property
  onDelete: function(item){
    var updatedTodos = this.state.todos.filter(function(val, index){
      return item !== val
    })
    this.setState({
      todos: updatedTodos
    })
  },

  onAdd: function(item){
      let updatedTodos = this.state.todos;
      updatedTodos.push(item);
      this.setState({
        todos: updatedTodos
      })
  },

  //lifecycle functions
  componentWillMount: function(){
    console.log('componentWillMount');
  },

  componentDidlMount: function(){
    console.log('componentDidlMount');
    //good for any grabbing of external data
  },

  componentWillUpdate: function(){
    console.log('componentWillUpdate');
  }

});

reactDom.render(<App />, document.getElementById('todo-wrapper')) //rendering it to the DOM
