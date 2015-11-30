/** @jsx React.DOM */
define([
  'react',
  './Info'
], function(React,Info) {

  var InfoListWidget = React.createClass({
    componentDidMount: function() {
      console.log("componentDidMount: InfoListWidget")
    },
    render: function() {
      var self = this;
      var itemNodes = this.props.items.map(function(item) {
        return (
          <Info map={self.props.map} item={item} id={item.id}>
            {item.url}
          </Info>
        );
      });
      return (
        <div className="itemList" data-gs-width="12" data-gs-animate="yes">
          {itemNodes}
        </div>
      );
    }
  });

  return InfoListWidget;

});