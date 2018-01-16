let imagesList = [];

function fileImport(inputFiles, allowedFiles) {
    let extensions = getExtension(inputFiles);
    let correctImages = isCorrectFormat(extensions, allowedFiles);
    addCorrectFilesToList(inputFiles, correctImages);
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
        }
        else {
            alert('Wrong file extention!');
        }
    });
}

export { fileImport, imagesList };