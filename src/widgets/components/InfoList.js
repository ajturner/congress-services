/** @jsx React.DOM */
define([
  'react',
  './Info'
], function(React,Info) {

  var InfoListWidget = React.createClass({

    render: function() {
      console.log("InfoListWidget", this.propss)
      var itemNodes = this.props.items.map(function(item) {
        return (
          <Info item={item} id={item.id}>
            {item.url}
          </Info>
        );
      });
      return (
        <div className="itemList">
          {itemNodes}
        </div>
      );
    }
  });

  return InfoListWidget;

});