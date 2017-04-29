let React = require('react');
import {Link} from 'react-router-dom';

let About = React.createClass({
  render: function(){
    return(
      <div>
        <Link to={'/'}>Home</Link>
        <h2>All About Me</h2>
      </div>
    )
  }
})

module.exports = About;
