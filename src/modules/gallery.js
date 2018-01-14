function renderGallery(dropArea, imagesList, thumbWidth, thumbHeight) {
    clearGallery(dropArea);
    let images = createImages(imagesList, thumbWidth, thumbHeight);
    let thumbnailsList = createImages(images, thumbWidth, thumbHeight);
    addThumbnailsToGallery(thumbnailsList, dropArea);
    // addEventListenersToThumbnails();
}

function clearGallery(dropArea) {
    document.querySelector(dropArea).innerHTML = '';
}

function createImages(imagesList, thumbWidth, thumbHeight) {
    let thumbnailsList = [];
    let images = imagesList.forEach(el => {
        let img = new Image();
        img.src = URL.createObjectURL(el);
        img.onload = function () {
            let imageSize = { imageWidth: this.width, imageHeight: this.height };
            let canvasStartPoints = checkProportions(imageSize, thumbWidth, thumbHeight);
            let thumbnail = createThumbnail(canvasStartPoints, this);
            thumbnailsList.push(thumbnail);
            console.log(thumbnail)
        }
        // URL.revokeObjectURL(img.src);
    });
    return thumbnailsList; // cannot return before image onload !!!
}

function checkProportions({ imageWidth, imageHeight }, thumbWidth, thumbHeight) {
    let widthProportion = imageWidth / thumbWidth;
    let heightProportion = imageHeight / thumbHeight;
    let proportion = Math.max(widthProportion, heightProportion);
    let xStartPoint = ((thumbWidth - (imageWidth / proportion)) / 2);
    let yStartPoint = ((thumbHeight - (imageHeight / proportion)) / 2);
    return { xStartPoint, yStartPoint, thumbWidth, thumbHeight };
}

function createThumbnail(canvasStartPoints, img) {
    const { xStartPoint, yStartPoint, thumbWidth, thumbHeight } = canvasStartPoints;
    let thumbnail = document.createElement('canvas');
    let context = thumbnail.getContext('2d');
    context.drawImage(img, xStartPoint, yStartPoint, thumbWidth, thumbHeight);
    return thumbnail;
}

function addThumbnailsToGallery(thumbnailsList, dropArea) {
    let galleryContainer = document.querySelector(dropArea);
    thumbnailsList.forEach(thumbnail => {
        galleryContainer.appendChild(thumbnail);
    })
    return galleryContainer;
}

function addEventListenersToThumbnails() {
    let actualThumbnailsList = document.getElementsByTagName('canvas');
    for (let i = 0; i < actualThumbnailsList.length; i++) {
        actualThumbnailsList[i].addEventListener('click', e => renderFullSizeImage(e, i), false);
        actualThumbnailsList[i].addEventListener('contextmenu', e => removeFromGallery(e, i), false);
    }
}

function renderFullSizeImage(e, i) {
    let newWindow = window.open();
    let canvas = newWindow.document.createElement('canvas');
    let context = image.getContext('2d');
    context.drawImage(img, 0, 0, img.width, img.height);
    newWindow.document.body.appendChild(canvas);
}

function removeFromImagesList(i) {
    this.prevent(e);
    thumbnail.remove();
    // imagesList = this.imagesList.slice(0, i).concat(this.imagesList.slice(i + 1));
}

export { renderGallery };