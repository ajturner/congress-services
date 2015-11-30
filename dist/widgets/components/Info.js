/** @jsx React.DOM */
define([
  'react',
  "esri/tasks/query", "esri/tasks/QueryTask",
  "esri/geometry/Geometry",
  "esri/geometry/Extent"
], function(React, Query, QueryTask, Geometry, Extent) {

  var InfoWidget = React.createClass({displayName: "InfoWidget",
    getInitialState: function() {
      return {content: "none", count: 0};
    },
    loadInfoFromServer: function(geometry) {

      var queryTask = new QueryTask(this.props.item.url);
      var query = new Query();
      query.returnGeometry = false;
      query.outFields = ['*'];
      query.where = "1=1";
      query.num = 4;

      if(geometry !== undefined && geometry !== null) {
        query.geometry = geometry;
      }

      var self = this;
      queryTask.execute(query, function(result) {
        if(result.features.length >0) {
          var content = result.features[0].attributes;
          if(self.props.item.popupInfo.description !== null && self.props.item.popupInfo.description !== undefined) {
            content = self.props.item.popupInfo.description.supplant(result.features[0].attributes);
          }
        } else {
          content = "None nearby.";
        }
        self.setState({content: content, count: result.features.length});
      });

    },  
    componentDidMount: function() {
      this.loadInfoFromServer();
      var el = $(this.getDOMNode());
      var grid = $('.grid-stack').data('gridstack');

      grid.add_widget(el, 0, 0, 4, 3, true);

      var self = this;
      this.props.map.on("pan-end", function(e) {
        var extent = new esri.geometry.Extent(e.extent);
        self.loadInfoFromServer(extent);
      });

      this.props.map.on("zoom-end", function(e) {
        var extent = new esri.geometry.Extent(e.extent);
        self.loadInfoFromServer(extent);
      });
    },
    getContent: function() {
      return { __html: this.state.content };
    },
    // [-114,44]
    render: function() {
      var title = this.props.item.title.replace(/[&\s]+/g,'').toLowerCase();
      title += " legend";
      return (
        React.createElement("div", {className: "grid-stack-item"}, 
          React.createElement("div", {className: "grid-stack-item-content"}, 
            React.createElement("h3", {className: title}, this.props.item.title), 
            React.createElement("p", {dangerouslySetInnerHTML: this.getContent()})
          )
        )        
      );
    }
  });

  return InfoWidget;

});