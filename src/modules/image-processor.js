/*

imageProcessor

*   modul odpowiadajacy za spiecie wszystkich modulow
*   pozostale moduly sa od siebie calkowicie niezalezne
*   ma miec tylko jedna metode udostepniana na zewnatrz - "init"
*   metoda 'init' ktorej podajesz konfig ustawia cala aplikacje
*   tylko to ma byc metoda wystawiana na zewnatrz i uzywana przez kontroler.

imageProcessor rowniez odpowiada za przypisanie i odpiecie eventListenerow !!!!!!

*/

import { fileImport, imagesList } from './file-importer';

function attachInput(input, allowedFiles) {
    let inputElement = document.querySelector(input);
    inputElement.addEventListener('change', e => fileImport(e.target.files, allowedFiles), false);
    return inputElement;
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

function attachDragAndDrop(dropArea, allowedFiles) {
    let dropAreaElement = document.querySelector(dropArea);
    dropAreaElement.addEventListener('dragover', prevent, false);
    dropAreaElement.addEventListener('dragenter', prevent, false);
    dropAreaElement.addEventListener('drop', e => onDrop(e, allowedFiles), false);
}

const init = ({ thumbWidth, thumbHeight, dropArea, input, allowedFiles }) => {
    attachInput(input, allowedFiles);
    attachDragAndDrop(dropArea, allowedFiles);
}

export { init };