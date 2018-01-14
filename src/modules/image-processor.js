import { fileImport, imagesList } from './file-importer';
import { renderGallery } from './gallery';

function attachInput(input, allowedFiles) {
    let inputElement = document.querySelector(input);
    inputElement.addEventListener('change', e => fileImport(e.target.files, allowedFiles), false);
    return inputElement;
}

function attachDragAndDrop(dropArea, allowedFiles) {
    let dropAreaElement = document.querySelector(dropArea);
    dropAreaElement.addEventListener('dragover', prevent, false);
    dropAreaElement.addEventListener('dragenter', prevent, false);
    dropAreaElement.addEventListener('drop', e => onDrop(e, allowedFiles), false);
}

function prevent(e) {
    e.stopPropagation();
    e.preventDefault();
}

function onDrop(e, allowedFiles) {
    e.stopPropagation();
    e.preventDefault();
    let files = e.dataTransfer.files;
    console.log(files);
    fileImport(files, allowedFiles);
}

const init = ({ thumbWidth, thumbHeight, dropArea, input, allowedFiles }) => {
    attachInput(input, allowedFiles);
    attachDragAndDrop(dropArea, allowedFiles);
    renderGallery(dropArea, imagesList);
}

export { init };