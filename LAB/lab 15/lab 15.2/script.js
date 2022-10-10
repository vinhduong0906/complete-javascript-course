'use strict';

const imageContainer = document.querySelector('.images');
function wait(seconds) {
  return new Promise(resolve => setTimeout(resolve, 1000 * seconds));
}

async function createImage(imgPath) {
  const image = await new Promise((resolve, reject) => {
    const img = document.createElement('img');
    img.src = imgPath;
    img.classList.add('parallel');
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
async function loadNPause() {
  try {
    currentImage = await createImage('./img/img.jpg');
    console.log('Image 1 loaded');
    await wait(2);
    currentImage.style.display = 'none';
    currentImage = await createImage('./img/img2.jpg');
    console.log('Image 2 loaded');
    await wait(2);
    currentImage.style.display = 'none';
  } catch (err) {
    alert(err.message);
  }
}
async function loadAll(imgArr) {
  const imgArrs = await Promise.all(
    imgArr.map(async item => {
      await createImage(item);
    })
  );
}
// loadNPause();
loadAll(['./img/img.jpg', './img/img2.jpg']);
