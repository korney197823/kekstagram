'use strict';

(function() {

  var PICTURES_LOAD_URL = 'http://localhost:1507/api/pictures';
  var filters = document.querySelector('.filters');
  var container = document.querySelector('.pictures');
  var template = document.querySelector('template');
  var templateContainer = 'content' in template ? template.content : template;

  hiddenFilters();
  loadPictures(PICTURES_LOAD_URL, renderPictures, '__jsonpCallback');
  showFilters();

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

  /**
   * Создадим функцию, которая будет создавать DOM-элемент фотографии на основе переданных данных и возвращать его.
   * @param picture
   */
  function getPictureElement(picture) {
    var pictureElement = templateContainer.querySelector('.picture');
    var clonePictureElement = pictureElement.cloneNode(true);

    var pictureComments = clonePictureElement.querySelector('.picture-comments');
    pictureComments.textContent = picture.comments;

    var pictureLikes = clonePictureElement.querySelector('.picture-likes');
    pictureLikes.textContent = picture.likes;

    var pictureImage = new Image();

    pictureImage.onload = function(evt) {
      var src = evt.target.src;
      var cloneImg = clonePictureElement.querySelector('img');
      cloneImg.setAttribute('src', src);
    };
    pictureImage.onerror = function() {
      clonePictureElement.classList.add('picture-load-failure');
    };

    pictureImage.src = picture.url;

    return clonePictureElement;
  }

})();
