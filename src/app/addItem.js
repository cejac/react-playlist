let React = require('react');
require('./css/addItem.css')

let AddItem = React.createClass({
  render: function(){
    return(
      <form id='add-todo' onSubmit={this.handleSubmit}>
        <input type='text' required ref="newItem"/>
        <input type='submit' value='Add Item'/>
      </form>
    );
  },

  //Custom functions
  handleSubmit: function(event){
    event.preventDefault();
    this.props.onAdd(this.refs.newItem.value)
  }


});

module.exports = AddItem
