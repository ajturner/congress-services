// "This is a {variable} string".supplant({variable: "awesome"});
// Thanks http://javascript.crockford.com/remedial.html
if (!String.prototype.supplant) {
    String.prototype.supplant = function (o) {
        return this.replace(
            /\{([^{}]*)\}/g,
            function (a, b) {
                var r = o[b];
                return typeof r === 'string' || typeof r === 'number' ? r : a;
            }
        );
    };
}
function startGridStack() {
  var options = {
      static_grid: true
  };
  $('.grid-stack').gridstack(options);
}

function getParameterByName(name) {
    name = name.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]");
    var regex = new RegExp("[\\?&]" + name + "=([^&#]*)"),
        results = regex.exec(location.search);
    return results === null ? "" : decodeURIComponent(results[1].replace(/\+/g, " "));
}

(function() {
  'use strict';

  var pathRX = new RegExp(/\/[^\/]+$/)
    , locationPath = location.pathname.replace(pathRX, '/');

console.log("Location", locationPath)
  require({
    async: true,
    parseOnLoad: true,
    packages: [{
      name: 'widgets',
      location: locationPath + 'dist/widgets'
    }, {
      name: 'react',
      location: locationPath + 'bower_components/react/',
      main: 'react'
    }, {
      name: 'app',
      location: locationPath + 'dist',
      main: 'main'
    }]
  }, ['app']);

})();