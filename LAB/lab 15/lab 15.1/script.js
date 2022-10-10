'use strict';

const imageContainer = document.querySelector('.images');
const wait = seconds => {
  return new Promise(resolve => setTimeout(resolve, 1000 * seconds));
};

function createImage(imgPath) {
  return new Promise((resolve, reject) => {
    const img = document.createElement('img');
    img.src = imgPath;
    img.addEventListener('load', function () {
      imageContainer.append(img);
      resolve(img);
    });
    img.addEventListener('error', function () {
      reject(new Error('Image not found'));
    });
  });
  return image;
}
let currentImage;
createImage('./img.jpg')
  .then(res => {
    console.log('Image 1 loaded');
    currentImage = res;
    return wait(2);
  })

  .then(res => {
    currentImage.style.display = 'none';
    return createImage('./img2.jpg');
  })
  .then(res => {
    console.log('Image 2 loaded');
    currentImage = res;
    return wait(2);
  })
  .then(res => {
    currentImage.style.display = 'none';
  })
  .catch(err => alert(err.message));
