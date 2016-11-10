'use strict';

function Gallery() {
  this.pictures = [];
  this.activePicture = null;
  this.galleryOverlay = document.querySelector('.gallery-overlay');
  this.galleryOverlayClose = this.galleryOverlay.querySelector('.gallery-overlay-close');
  this.galleryOverlayImage = this.galleryOverlay.querySelector('.gallery-overlay-image');
  this.galleryLikes = this.galleryOverlay.querySelector('.likes-count');
  this.galleryComments = this.galleryOverlay.querySelector('.comments-count');
}

Gallery.prototype.setPictures = function(pictures) {
  this.pictures = pictures;
};

Gallery.prototype.show = function(number) {
  var self = this;

  this.galleryOverlayClose.addEventListener('click', function() {
    self.hide();
  });

  this.galleryOverlayImage.addEventListener('click', function() {
    if (number === self.pictures.length - 1) {
      number = -1;
    }
    self.setActivePictures(++number);
  });

  this.galleryOverlay.classList.remove('invisible');
  this.setActivePictures(number);
};

Gallery.prototype.hide = function() {
  this.galleryOverlay.classList.add('invisible');
};

Gallery.prototype.setActivePictures = function(activePicture) {
  var picture = this.pictures[activePicture];
  this.galleryOverlayImage.src = picture.url;
  this.galleryLikes.textContent = picture.likes;
  this.galleryComments.textContent = picture.comments;
};

module.exports = new Gallery();
