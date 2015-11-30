/** @jsx React.DOM */
define([
  'react',
  './Info'
], function(React,Info) {

  var InfoListWidget = React.createClass({displayName: "InfoListWidget",
    componentDidMount: function() {
      console.log("componentDidMount: InfoListWidget")
    },
    render: function() {
      var self = this;
      var itemNodes = this.props.items.map(function(item) {
        return (
          React.createElement(Info, {map: self.props.map, item: item, id: item.id}, 
            item.url
          )
        );
      });
      return (
        React.createElement("div", {className: "itemList", "data-gs-width": "12", "data-gs-animate": "yes"}, 
          itemNodes
        )
      );
    }
  });

  return InfoListWidget;

});