/** @jsx React.DOM */
define([
  'react',
  'dojo/query',
  'dojo/dom',
  'dojo/dom-construct',
  "dojo/on",
  "esri/tasks/query", 
  "esri/tasks/QueryTask", 
  './components/Info',
  './components/InfoList'
], function(
  React,
  query, dom, domConstruct,
  on, Query, QueryTask,
  Info, Infolist
) {

  var addContainer = function(items) {
    React.render(React.createElement(InfoList, {items: items}), dom.byId('info'));
  };

  return {
    addContainer: addContainer
  };

});