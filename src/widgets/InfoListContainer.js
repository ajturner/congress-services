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

  var addContainer = function(items) {
    React.render(<InfoList items={items} />, dom.byId('info'));
  };

  return {
    addContainer: addContainer
  };

});