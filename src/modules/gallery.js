function renderGallery(dropArea, imagesList) {
    clearGallery(dropArea);
    let images = createImages(imagesList);
    let thumbnailsList = createThumbnails(images, thumbWidth, thumbHeight);
    addThumbnailsToGallery(thumbnailsList, dropArea);
    addEventListenersToThumbnails();
}

function clearGallery(dropArea) {
    document.querySelector(dropArea).innerHTML = '';
}

function createImages(imagesList) {
    let images = imagesList.map(el => {
        let img = new Image();
        img.src = URL.createObjectURL(el);
        // URL.revokeObjectURL(img.src);
        return img;
    });
    // console.log(images);
    return images;
}

function createThumbnails(images, thumbWidth, thumbHeight) {
    let thumbnailsList = images.map((image) => {
        let thumbnail = document.createElement('canvas');
        let context = thumbnail.getContext('2d');
        let canvasStartPoints = checkProportions(image, thumbWidth, thumbHeight);
        context.drawImage(image, canvasStartPoints[x], canvasStartPoints[y], thumbWidth, thumbHeight);
        return thumbnail;
    });
    return thumbnailsList;
}

function checkProportions(image, thumbWidth, thumbHeight) {
    let widthProportion = image.width / thumbWidth;
    let heightProportion = image.height / thumbHeight;
    let proportion = Math.max(widthProportion, heightProportion);
    let xStartPoint = (thumbWidth - (0.5 * image.width / proportion));
    let yStartPoint = (thumbHeight - (0.5 * image.height / proportion));
    let canvasStartPoints = { x: xStartPoint, y: yStartPoint };
    return canvasStartPoints;
}

function addThumbnailsToGallery(thumbnailsList, dropArea) {
    let galleryContainer = document.querySelector(dropArea);
    thumbnailsList.forEach(thumbnail => {
        galleryContainer.appendChild(thumbnail);
    })
    return galleryContainer;
}

function addEventListenersToThumbnails(){
    document.getElementsByTagName('canvas').forEach((thumbnail, i) => {
        thumbnail.addEventListener('click', e => renderFullSizeImage(e, i), false);
        thumbnail.addEventListener('contextmenu', e => removeFromGallery(e, i), false);
    });
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