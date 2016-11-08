'use strict';

var loadPictures = require('./load');
var getPictureElement = require('./review');

var filters = document.querySelector('.filters');
var container = document.querySelector('.pictures');
var PICTURES_LOAD_URL = 'http://localhost:1507/api/pictures';

hiddenFilters();
loadPictures(PICTURES_LOAD_URL, renderPictures, '__jsonpCallback');
showFilters();

function hiddenFilters() {
  filters.classList.add('hidden');
}

function showFilters() {
  filters.classList.remove('hidden');
}

/**
 * Создаем функцию которая отрисовывает список фотографий
 * @param picturesArray
 */
function renderPictures(picturesArray) {
  picturesArray.forEach(function(picture) {
    var pictureItem = getPictureElement(picture);
    container.appendChild(pictureItem);
  });
}
