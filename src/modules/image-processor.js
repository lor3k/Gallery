import { fileImport, imagesList } from './file-importer';
import { renderGallery } from './gallery';

function attachInput(input, allowedFiles) {
    let inputElement = document.querySelector(input);
    inputElement.addEventListener('change', e => fileImport(e.target.files, allowedFiles), false);
    return inputElement;
}

function fileImportAndRender(){
    e => fileImport(e.target.files, allowedFiles)
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

function onDrop(e, {thumbWidth, thumbHeight, dropArea, allowedFiles}) {
    console.log(`${e} - ${thumbWidth} - ${thumbHeight} - ${dropArea} - ${allowedFiles}`)
    e.stopPropagation();
    e.preventDefault();
    let files = e.dataTransfer.files;
    console.log(files);
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
    }
    attachInput(input, allowedFiles);
    attachDragAndDrop(config);
}

export { init };