function getMessage(a, b) {
  if(typeof a === "boolean") {
    if (a) {
      return 'Переданное GIF-изображение анимировано и содержит ' + b + ' кадров';
    }
    else {
      return 'Переданное GIF-изображение не анимировано';
    }
  } else if (typeof a === "number") {
    return 'Переданное SVG-изображение содержит ' + a + ' объектов и ' + (b * 4) +  ' атрибутов';
  }  else if (Array.isArray(a) && Array.isArray(b)) {
    if (a.length === b.length) {
      var multiplyElementArray = [];
      var artifactsSquare = 0;
      for(var j = 0; j < a.length; j++) {
        multiplyElementArray.push(a[j] * b[j]);
      }
      for(var k = 0; k < multiplyElementArray.length; k++) {
        artifactsSquare += multiplyElementArray[k];
      }
    }
    return 'Общая площадь артефактов сжатия: ' + artifactsSquare + ' пикселей';
  } else if (Array.isArray(a)) {
    var amountOfRedPoints = 0;
    for (var i = 0; i < a.length; i++) {
      amountOfRedPoints  += a[i];
    }
    return 'Количество красных точек во всех строчках изображения: ' + amountOfRedPoints;
  }

}
