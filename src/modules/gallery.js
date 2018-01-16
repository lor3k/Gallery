function renderGallery(dropArea, imagesList, thumbWidth, thumbHeight) {
    const thumbWH = { thumbWidth, thumbHeight };
    clearGallery(dropArea);
    let imgsUrl = createImgUrlArray(imagesList);
    let promiseArr = imgsUrl.map(url => createImage(url));
    Promise.all(promiseArr)
        .then(imagesArr => {
            let thumbnails = createThumbnails(imagesArr, thumbWH);
            addThumbnailsToGallery(thumbnails, imagesArr, dropArea);
        });
}

function clearGallery(dropArea) {
    document.querySelector(dropArea).innerHTML = '';
}

function createImgUrlArray(imagesList) {
    return imagesList.map(image => URL.createObjectURL(image))
}

function createImage(url) {
    return new Promise(resolve => {
        const listener = function (e) {
            resolve(this);
        }
        const image = new Image();
        image.src = url;
        image.onload = listener;
    });
}

function createThumbnails(imagesArr, thumbWH) {
    let canvasStartPoints = checkProportions(imagesArr, thumbWH);
    let { thumbWidth, thumbHeight } = thumbWH;
    return imagesArr.map((image, index) => {
        let { xStartPoint, yStartPoint, contentWidth, contentHeight } = canvasStartPoints[index];
        let thumbnail = document.createElement('canvas');
        thumbnail.width = thumbWidth;
        thumbnail.height = thumbHeight;
        let context = thumbnail.getContext('2d');
        context.fillStyle = "black";
        context.fillRect(0, 0, thumbWidth, thumbHeight);
        context.drawImage(image, xStartPoint, yStartPoint, contentWidth, contentHeight);
        return thumbnail;
    })
}

function checkProportions(imagesArr, { thumbWidth, thumbHeight }) {
    return imagesArr.map(image => {
        let widthProportion = image.width / thumbWidth;
        let heightProportion = image.height / thumbHeight;
        let ratio = Math.max(widthProportion, heightProportion);
        let contentWidth = image.width / ratio;
        let contentHeight = image.height / ratio;
        let xStartPoint = (thumbWidth - contentWidth) / 2;
        let yStartPoint = (thumbHeight - contentHeight) / 2;
        return { xStartPoint, yStartPoint, contentWidth, contentHeight };
    });
}

function addThumbnailsToGallery(thumbnails, imagesArr, dropArea) {
    let galleryContainer = document.querySelector(dropArea);
    thumbnails.forEach((thumbnail, index) => {
        galleryContainer.appendChild(thumbnail);
        thumbnail.addEventListener('click', () => renderFullSizeImage(thumbnail, imagesArr[index]), false);
    })
    return galleryContainer;
}

function renderFullSizeImage(thumbnail, image) {
    let newWindow = window.open();
    let canvas = newWindow.document.createElement('canvas');
    let context = canvas.getContext('2d');
    canvas.width = image.width;
    canvas.height = image.height;
    context.drawImage(image, 0, 0, image.width, image.height);
    newWindow.document.body.appendChild(canvas);
}

export { renderGallery };