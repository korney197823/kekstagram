'use strict';

function Gallery() {
  this.pictures = [];
  this.activePicture = null;
  this.overlayElement = document.querySelector('.gallery-overlay');
  this.overlayClose = this.overlayElement.querySelector('.gallery-overlay-close');
  this.overlayImage = this.overlayElement.querySelector('.gallery-overlay-image');
  this.overlayLikes = this.overlayElement.querySelector('.likes-count');
  this.overlayComments = this.overlayElement.querySelector('.comments-count');
}
Gallery.prototype.setPictures = function(pictures) {
  this.pictures = pictures;
};

Gallery.prototype.show = function(number) {
  var self = this;

  this.overlayClose.onclick = function() {
    self.hide();
  };

  this.overlayImage.onclick = function() {
    if (self.activePicture === self.pictures.length - 1) {
      self.setActivePictures(0);
    } else {
      self.setActivePictures(self.activePicture + 1);
    }
  };

  this.overlayElement.classList.remove('invisible');
  this.setActivePictures(number);
};

Gallery.prototype.hide = function() {
  this.overlayElement.classList.add('invisible');
  this.overlayImage.onclick = null;
  this.overlayClose.onclick = null;
};

Gallery.prototype.setActivePictures = function(number) {
  this.activePicture = number;
  this.overlayImage.src = this.pictures[this.activePicture].url;
  this.overlayLikes.textContent = this.pictures[this.activePicture].likes;
  this.overlayComments.textContent = this.pictures[this.activePicture].comments;
};

module.exports = new Gallery();
