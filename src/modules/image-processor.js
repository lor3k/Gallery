import { fileImport, imagesList } from './file-importer';
import { renderGallery } from './gallery';

function attachInput(config) {
    let { input } = config;
    let inputElement = document.querySelector(input);
    inputElement.addEventListener('change', e => fileImportAndRender(e, config), false);
    return inputElement;
}

function fileImportAndRender(e, config) {
    let {
        thumbWidth,
        thumbHeight,
        dropArea,
        input,
        allowedFiles
    } = config;
    fileImport(e.target.files, allowedFiles);
    renderGallery(dropArea, imagesList, thumbWidth, thumbHeight);
}

function attachDragAndDrop(config) {
    let dropAreaElement = document.querySelector(config.dropArea);
    dropAreaElement.addEventListener('dragover', prevent, false);
    dropAreaElement.addEventListener('dragenter', prevent, false);
    dropAreaElement.addEventListener('drop', e => onDrop(e, config), false);
}

function prevent(e) {
    e.stopPropagation();
    e.preventDefault();
}

function onDrop(e, { thumbWidth, thumbHeight, dropArea, allowedFiles }) {
    e.stopPropagation();
    e.preventDefault();
    let files = e.dataTransfer.files;
    fileImport(files, allowedFiles);
    renderGallery(dropArea, imagesList, thumbWidth, thumbHeight);
}

const init = ({ thumbWidth, thumbHeight, dropArea, input, allowedFiles }) => {
    let config = {
        thumbWidth,
        thumbHeight,
        dropArea,
        input,
        allowedFiles
    };
    attachInput(config);
    attachDragAndDrop(config);
}

export { init };