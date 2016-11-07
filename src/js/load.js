'use strict';

function loadPictures(url, callback, callbackName) {
  if(!callbackName) {
    callbackName = 'cb' + Date.now();
  }
  window[callbackName] = function(date) {
    callback(date);
  };
  var script = document.createElement('script');
  script.src = url + '?callback=' + callbackName;
  document.body.appendChild(script);
}

module.exports = loadPictures;



