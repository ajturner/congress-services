require([
  'esri/map',
  "esri/dijit/Search",
  'esri/arcgis/utils',
  'widgets/InfoListContainer',
  'dojo/domReady!'
], function(
  Map,
  Search,
  arcgisUtils,
  InfoListContainer
) {
  // bonnie original:
  var map_id = "2d2955fc6f5c4c52aff3d95221735c9f";
  // aturner clone
  var map_id = "b9e53be702d54d83ad2fce0a6e27e586";
  var map = null;

  startGridStack();

  arcgisUtils.createMap(map_id, "dcmap").then(function(response){
    map = response.map;
    var s = new Search({
      map: map,
      enableInfoWindow: false,
      zoomScale: 10000
    }, "location_search");
    var address = getParameterByName("address");
    if(address === null || address === undefined || address.length == 0) {
      address = "2445 Old Penitentiary Rd, Boise, ID";
    }

    s.set("value", address);
    s.search();
    
    // Currently only listen inside the widget
    // s.on("select-result", function(e) {
    //   console.log("search result", e.result);
    // });    
    // s.startup();
    // 

    InfoListContainer.addContainer(map,response.itemInfo.itemData.operationalLayers);
  });



});