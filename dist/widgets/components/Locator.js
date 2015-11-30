/** @jsx React.DOM */
define([
  'react'
], function(React) {

  var LocatorWidget = React.createClass({displayName: "LocatorWidget",
    getInitialState: function() {
      return {
        x: 0,
        y: 0
      };
    },

    componentDidMount: function() {
      this.props.map.on('mouse-move', function(e) {
        this.update({
          x: e.mapPoint.getLatitude(), 
          y: e.mapPoint.getLongitude()
        });
      }.bind(this));
    },

    update: function(data) {
      this.setState(data);
    },

    render: function() {
      return (
        React.createElement("div", {className: "well"}, 
          React.createElement("label", null, "x: ", this.state.x.toFixed(3)), 
          React.createElement("br", null), 
          React.createElement("label", null, "y: ", this.state.y.toFixed(3))
        )
      );
    }
  });

  return LocatorWidget;

});