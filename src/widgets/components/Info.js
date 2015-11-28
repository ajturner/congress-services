/** @jsx React.DOM */
define([
  'react'
], function(React) {

  var InfoWidget = React.createClass({
    getInitialState: function() {
      return {};
    },

    render: function() {
      console.log("State check", this.props)   
      return (
        <div className='well'>
          <h2>{this.props.item.title}</h2>
          <p>{this.props.item.url}</p>
        </div>
      );
    }
  });

  return InfoWidget;

});