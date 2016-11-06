'use strict';

/**
 * Создадим функцию, которая будет создавать DOM-элемент фотографии на основе переданных данных и возвращать его.
 * @param picture
 */
module.exports = function getPictureElement(picture) {

  var template = document.querySelector('template');
  var templateContainer = 'content' in template ? template.content : template;
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
};
