/*

fileModule

*   modul odpowiadajacy za operacje na plikach
*   (sprawdzenie czy plik ma poprawny format, zaladowanie zawartosci pliku, etc.)

*/

let imagesList = [];

function getExtension(inputFiles) {
    let extensionsArray = [];
    for (let i = 0; i < inputFiles.length; i++) {
        let fileNameSplitted = inputFiles[i].name.split('.');
        let fileExt = fileNameSplitted[fileNameSplitted.length - 1];
        extensionsArray.push(fileExt)
    }
    return extensionsArray;
}

function isCorrectImage(extensions, allowedFiles) {
    let isExtensionAllowed = extensions.map(ext => {
        allowedFiles.includes(ext);
        console.log(allowedFiles, ext)
    });
    return isExtensionAllowed;
}

function addCorrectFilesToList(inputFiles, correctImages) {
    correctImages.forEach((correctExt, index)=>{
        if(correctExt){
            imagesList.push(inputFiles[index]);
        }
    });
}

function fileImport(inputFiles, allowedFiles) {
    let extensions = getExtension(inputFiles);
    let correctImages = isCorrectImage(extensions, allowedFiles);
    addCorrectFilesToList(inputFiles, correctImages);
}

export { fileImport, imagesList };