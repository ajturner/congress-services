require([
  'esri/map',
  'esri/arcgis/utils',
  'widgets/LocatorContainer',
  'widgets/InfoListContainer',
  'dojo/domReady!'
], function(
  Map,
  arcgisUtils,
  LocatorContainer,
  InfoListContainer
) {
  function showWidget(item) {
    console.log(item.title);
    console.log(item.url);
    console.log(item.itemId);
    InfoContainer.addContainer(item);
  }
  var map_id = "2d2955fc6f5c4c52aff3d95221735c9f";
  var map = null;
  arcgisUtils.createMap(map_id, "dcmap").then(function(response){
    console.log("Map Object", response.map);
    console.log("Map Title", response.itemInfo.item.title);
    map = response.map;
    InfoListContainer.addContainer(response.itemInfo.itemData.operationalLayers);
    map.on('load', function() {
      LocatorContainer.addContainer(map);
    });    
  });
  // var map = new Map('dcmap', {
  //   basemap: 'topo',
  //   center: [-122.45, 37.75],
  //   zoom: 13
  // });


});