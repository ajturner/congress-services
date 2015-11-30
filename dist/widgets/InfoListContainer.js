/** @jsx React.DOM */
define([
  'react',
  'dojo/query',
  'dojo/dom',
  'dojo/dom-construct',
  './components/InfoList'
], function(
  React,
  query, dom, domConstruct,
  InfoList
) {

  var addContainer = function(map,items) {
    React.render(React.createElement(InfoList, {map: map, items: items}), dom.byId('info'));
  };

  return {
    addContainer: addContainer
  };

});