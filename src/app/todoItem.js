let React = require('react'); //var needs to be capitalized
require('./css/todoItem.css');

//Creae TodoItem component
let TodoItem = React.createClass({
  render: function(){
    return(
      <li>
        <div className="todo-item">
          <span className="item-name">{this.props.item}</span>
          <span className="item-delete" onClick={this.handleDelete}> [remove] </span>
        </div>
      </li>
    )
  },

  //custom functions
  handleDelete: function(){
    this.props.onDelete(this.props.item)
    }
})

module.exports = TodoItem