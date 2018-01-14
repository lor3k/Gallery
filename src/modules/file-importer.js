let imagesList = [];

function fileImport(inputFiles, allowedFiles) {
    let extensions = getExtension(inputFiles);
    let correctImages = isCorrectFormat(extensions, allowedFiles);
    addCorrectFilesToList(inputFiles, correctImages);
    console.log(imagesList);
}

function getExtension(inputFiles) {
    let extensionsArray = [];
    for (let i = 0; i < inputFiles.length; i++) {
        let fileNameSplitted = inputFiles[i].name.split('.');
        let fileExt = fileNameSplitted[fileNameSplitted.length - 1].toLowerCase();
        extensionsArray.push(fileExt)
    }
    return extensionsArray;
}

function isCorrectFormat(extensions, allowedFiles) {
    let isExtensionAllowed = extensions.map(ext => {
        return allowedFiles.includes(ext);
    });
    return isExtensionAllowed;
}

function addCorrectFilesToList(inputFiles, correctImages) {
    correctImages.forEach((ext, i) => {
        if (ext) {
            imagesList.push(inputFiles[i]);
            console.log('%c Correct extention!', 'background: green;');
        }
        else {
            console.log('%c Wrong file extention!', 'background: darkred;');
        }
    });
}

export { fileImport, imagesList };