/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/*!*********************!*\
  !*** ./src/main.js ***!
  \*********************/
/*! no exports provided */
/*! all exports used */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("Object.defineProperty(__webpack_exports__, \"__esModule\", { value: true });\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__modules_image_processor__ = __webpack_require__(/*! ./modules/image-processor */ 1);\n\n\nObject(__WEBPACK_IMPORTED_MODULE_0__modules_image_processor__[\"a\" /* init */])({\n  thumbWidth: 150,\n  thumbHeight: 100,\n  dropArea: '#dropArea',\n  input: '#fieldInput',\n  allowedFiles: ['png','jpg']\n});\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMC5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9tYWluLmpzPzM0NzkiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtpbml0fSBmcm9tICcuL21vZHVsZXMvaW1hZ2UtcHJvY2Vzc29yJztcblxuaW5pdCh7XG4gIHRodW1iV2lkdGg6IDE1MCxcbiAgdGh1bWJIZWlnaHQ6IDEwMCxcbiAgZHJvcEFyZWE6ICcjZHJvcEFyZWEnLFxuICBpbnB1dDogJyNmaWVsZElucHV0JyxcbiAgYWxsb3dlZEZpbGVzOiBbJ3BuZycsJ2pwZyddXG59KTtcblxuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvbWFpbi5qc1xuLy8gbW9kdWxlIGlkID0gMFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTsiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///0\n");

/***/ }),
/* 1 */
/*!****************************************!*\
  !*** ./src/modules/image-processor.js ***!
  \****************************************/
/*! exports provided: init */
/*! exports used: init */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"a\", function() { return init; });\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__file_importer__ = __webpack_require__(/*! ./file-importer */ 2);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__gallery__ = __webpack_require__(/*! ./gallery */ 3);\n\n\n\nfunction attachInput(input, allowedFiles) {\n    let inputElement = document.querySelector(input);\n    inputElement.addEventListener('change', e => Object(__WEBPACK_IMPORTED_MODULE_0__file_importer__[\"a\" /* fileImport */])(e.target.files, allowedFiles), false);\n    return inputElement;\n}\n\nfunction fileImportAndRender(){\n    e => Object(__WEBPACK_IMPORTED_MODULE_0__file_importer__[\"a\" /* fileImport */])(e.target.files, allowedFiles)\n    Object(__WEBPACK_IMPORTED_MODULE_1__gallery__[\"a\" /* renderGallery */])(dropArea, __WEBPACK_IMPORTED_MODULE_0__file_importer__[\"b\" /* imagesList */], thumbWidth, thumbHeight); \n}\n\nfunction attachDragAndDrop(config) {\n    let dropAreaElement = document.querySelector(config.dropArea);\n    dropAreaElement.addEventListener('dragover', prevent, false);\n    dropAreaElement.addEventListener('dragenter', prevent, false);\n    dropAreaElement.addEventListener('drop', e => onDrop(e, config), false);\n}\n\nfunction prevent(e) {\n    e.stopPropagation();\n    e.preventDefault();\n}\n\nfunction onDrop(e, {thumbWidth, thumbHeight, dropArea, allowedFiles}) {\n    console.log(`${e} - ${thumbWidth} - ${thumbHeight} - ${dropArea} - ${allowedFiles}`)\n    e.stopPropagation();\n    e.preventDefault();\n    let files = e.dataTransfer.files;\n    console.log(files);\n    Object(__WEBPACK_IMPORTED_MODULE_0__file_importer__[\"a\" /* fileImport */])(files, allowedFiles);\n    Object(__WEBPACK_IMPORTED_MODULE_1__gallery__[\"a\" /* renderGallery */])(dropArea, __WEBPACK_IMPORTED_MODULE_0__file_importer__[\"b\" /* imagesList */], thumbWidth, thumbHeight);    \n}\n\nconst init = ({ thumbWidth, thumbHeight, dropArea, input, allowedFiles }) => {\n    let config = {\n        thumbWidth,\n        thumbHeight,\n        dropArea,\n        input,\n        allowedFiles\n    }\n    attachInput(input, allowedFiles);\n    attachDragAndDrop(config);\n}\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMS5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9tb2R1bGVzL2ltYWdlLXByb2Nlc3Nvci5qcz84MTJkIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGZpbGVJbXBvcnQsIGltYWdlc0xpc3QgfSBmcm9tICcuL2ZpbGUtaW1wb3J0ZXInO1xuaW1wb3J0IHsgcmVuZGVyR2FsbGVyeSB9IGZyb20gJy4vZ2FsbGVyeSc7XG5cbmZ1bmN0aW9uIGF0dGFjaElucHV0KGlucHV0LCBhbGxvd2VkRmlsZXMpIHtcbiAgICBsZXQgaW5wdXRFbGVtZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihpbnB1dCk7XG4gICAgaW5wdXRFbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsIGUgPT4gZmlsZUltcG9ydChlLnRhcmdldC5maWxlcywgYWxsb3dlZEZpbGVzKSwgZmFsc2UpO1xuICAgIHJldHVybiBpbnB1dEVsZW1lbnQ7XG59XG5cbmZ1bmN0aW9uIGZpbGVJbXBvcnRBbmRSZW5kZXIoKXtcbiAgICBlID0+IGZpbGVJbXBvcnQoZS50YXJnZXQuZmlsZXMsIGFsbG93ZWRGaWxlcylcbiAgICByZW5kZXJHYWxsZXJ5KGRyb3BBcmVhLCBpbWFnZXNMaXN0LCB0aHVtYldpZHRoLCB0aHVtYkhlaWdodCk7IFxufVxuXG5mdW5jdGlvbiBhdHRhY2hEcmFnQW5kRHJvcChjb25maWcpIHtcbiAgICBsZXQgZHJvcEFyZWFFbGVtZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcihjb25maWcuZHJvcEFyZWEpO1xuICAgIGRyb3BBcmVhRWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCdkcmFnb3ZlcicsIHByZXZlbnQsIGZhbHNlKTtcbiAgICBkcm9wQXJlYUVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignZHJhZ2VudGVyJywgcHJldmVudCwgZmFsc2UpO1xuICAgIGRyb3BBcmVhRWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCdkcm9wJywgZSA9PiBvbkRyb3AoZSwgY29uZmlnKSwgZmFsc2UpO1xufVxuXG5mdW5jdGlvbiBwcmV2ZW50KGUpIHtcbiAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xuICAgIGUucHJldmVudERlZmF1bHQoKTtcbn1cblxuZnVuY3Rpb24gb25Ecm9wKGUsIHt0aHVtYldpZHRoLCB0aHVtYkhlaWdodCwgZHJvcEFyZWEsIGFsbG93ZWRGaWxlc30pIHtcbiAgICBjb25zb2xlLmxvZyhgJHtlfSAtICR7dGh1bWJXaWR0aH0gLSAke3RodW1iSGVpZ2h0fSAtICR7ZHJvcEFyZWF9IC0gJHthbGxvd2VkRmlsZXN9YClcbiAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xuICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICBsZXQgZmlsZXMgPSBlLmRhdGFUcmFuc2Zlci5maWxlcztcbiAgICBjb25zb2xlLmxvZyhmaWxlcyk7XG4gICAgZmlsZUltcG9ydChmaWxlcywgYWxsb3dlZEZpbGVzKTtcbiAgICByZW5kZXJHYWxsZXJ5KGRyb3BBcmVhLCBpbWFnZXNMaXN0LCB0aHVtYldpZHRoLCB0aHVtYkhlaWdodCk7ICAgIFxufVxuXG5jb25zdCBpbml0ID0gKHsgdGh1bWJXaWR0aCwgdGh1bWJIZWlnaHQsIGRyb3BBcmVhLCBpbnB1dCwgYWxsb3dlZEZpbGVzIH0pID0+IHtcbiAgICBsZXQgY29uZmlnID0ge1xuICAgICAgICB0aHVtYldpZHRoLFxuICAgICAgICB0aHVtYkhlaWdodCxcbiAgICAgICAgZHJvcEFyZWEsXG4gICAgICAgIGlucHV0LFxuICAgICAgICBhbGxvd2VkRmlsZXNcbiAgICB9XG4gICAgYXR0YWNoSW5wdXQoaW5wdXQsIGFsbG93ZWRGaWxlcyk7XG4gICAgYXR0YWNoRHJhZ0FuZERyb3AoY29uZmlnKTtcbn1cblxuZXhwb3J0IHsgaW5pdCB9O1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL21vZHVsZXMvaW1hZ2UtcHJvY2Vzc29yLmpzXG4vLyBtb2R1bGUgaWQgPSAxXG4vLyBtb2R1bGUgY2h1bmtzID0gMCJdLCJtYXBwaW5ncyI6IkFBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOyIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///1\n");

/***/ }),
/* 2 */
/*!**************************************!*\
  !*** ./src/modules/file-importer.js ***!
  \**************************************/
/*! exports provided: fileImport, imagesList */
/*! exports used: fileImport, imagesList */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"a\", function() { return fileImport; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"b\", function() { return imagesList; });\nlet imagesList = [];\n\nfunction fileImport(inputFiles, allowedFiles) {\n    let extensions = getExtension(inputFiles);\n    let correctImages = isCorrectFormat(extensions, allowedFiles);\n    addCorrectFilesToList(inputFiles, correctImages);\n}\n\nfunction getExtension(inputFiles) {\n    let extensionsArray = [];\n    for (let i = 0; i < inputFiles.length; i++) {\n        let fileNameSplitted = inputFiles[i].name.split('.');\n        let fileExt = fileNameSplitted[fileNameSplitted.length - 1].toLowerCase();\n        extensionsArray.push(fileExt)\n    }\n    return extensionsArray;\n}\n\nfunction isCorrectFormat(extensions, allowedFiles) {\n    let isExtensionAllowed = extensions.map(ext => {\n        return allowedFiles.includes(ext);\n    });\n    return isExtensionAllowed;\n}\n\nfunction addCorrectFilesToList(inputFiles, correctImages) {\n    correctImages.forEach((ext, i) => {\n        if (ext) {\n            imagesList.push(inputFiles[i]);\n            console.log('%c Correct extention!', 'background: green;');\n        }\n        else {\n            console.log('%c Wrong file extention!', 'background: darkred;');\n        }\n    });\n}\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMi5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9tb2R1bGVzL2ZpbGUtaW1wb3J0ZXIuanM/OWNhMCJdLCJzb3VyY2VzQ29udGVudCI6WyJsZXQgaW1hZ2VzTGlzdCA9IFtdO1xuXG5mdW5jdGlvbiBmaWxlSW1wb3J0KGlucHV0RmlsZXMsIGFsbG93ZWRGaWxlcykge1xuICAgIGxldCBleHRlbnNpb25zID0gZ2V0RXh0ZW5zaW9uKGlucHV0RmlsZXMpO1xuICAgIGxldCBjb3JyZWN0SW1hZ2VzID0gaXNDb3JyZWN0Rm9ybWF0KGV4dGVuc2lvbnMsIGFsbG93ZWRGaWxlcyk7XG4gICAgYWRkQ29ycmVjdEZpbGVzVG9MaXN0KGlucHV0RmlsZXMsIGNvcnJlY3RJbWFnZXMpO1xufVxuXG5mdW5jdGlvbiBnZXRFeHRlbnNpb24oaW5wdXRGaWxlcykge1xuICAgIGxldCBleHRlbnNpb25zQXJyYXkgPSBbXTtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGlucHV0RmlsZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgbGV0IGZpbGVOYW1lU3BsaXR0ZWQgPSBpbnB1dEZpbGVzW2ldLm5hbWUuc3BsaXQoJy4nKTtcbiAgICAgICAgbGV0IGZpbGVFeHQgPSBmaWxlTmFtZVNwbGl0dGVkW2ZpbGVOYW1lU3BsaXR0ZWQubGVuZ3RoIC0gMV0udG9Mb3dlckNhc2UoKTtcbiAgICAgICAgZXh0ZW5zaW9uc0FycmF5LnB1c2goZmlsZUV4dClcbiAgICB9XG4gICAgcmV0dXJuIGV4dGVuc2lvbnNBcnJheTtcbn1cblxuZnVuY3Rpb24gaXNDb3JyZWN0Rm9ybWF0KGV4dGVuc2lvbnMsIGFsbG93ZWRGaWxlcykge1xuICAgIGxldCBpc0V4dGVuc2lvbkFsbG93ZWQgPSBleHRlbnNpb25zLm1hcChleHQgPT4ge1xuICAgICAgICByZXR1cm4gYWxsb3dlZEZpbGVzLmluY2x1ZGVzKGV4dCk7XG4gICAgfSk7XG4gICAgcmV0dXJuIGlzRXh0ZW5zaW9uQWxsb3dlZDtcbn1cblxuZnVuY3Rpb24gYWRkQ29ycmVjdEZpbGVzVG9MaXN0KGlucHV0RmlsZXMsIGNvcnJlY3RJbWFnZXMpIHtcbiAgICBjb3JyZWN0SW1hZ2VzLmZvckVhY2goKGV4dCwgaSkgPT4ge1xuICAgICAgICBpZiAoZXh0KSB7XG4gICAgICAgICAgICBpbWFnZXNMaXN0LnB1c2goaW5wdXRGaWxlc1tpXSk7XG4gICAgICAgICAgICBjb25zb2xlLmxvZygnJWMgQ29ycmVjdCBleHRlbnRpb24hJywgJ2JhY2tncm91bmQ6IGdyZWVuOycpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgY29uc29sZS5sb2coJyVjIFdyb25nIGZpbGUgZXh0ZW50aW9uIScsICdiYWNrZ3JvdW5kOiBkYXJrcmVkOycpO1xuICAgICAgICB9XG4gICAgfSk7XG59XG5cbmV4cG9ydCB7IGZpbGVJbXBvcnQsIGltYWdlc0xpc3QgfTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9tb2R1bGVzL2ZpbGUtaW1wb3J0ZXIuanNcbi8vIG1vZHVsZSBpZCA9IDJcbi8vIG1vZHVsZSBjaHVua3MgPSAwIl0sIm1hcHBpbmdzIjoiQUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Iiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///2\n");

/***/ }),
/* 3 */
/*!********************************!*\
  !*** ./src/modules/gallery.js ***!
  \********************************/
/*! exports provided: renderGallery */
/*! exports used: renderGallery */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"a\", function() { return renderGallery; });\nfunction renderGallery(dropArea, imagesList, thumbWidth, thumbHeight) {\n    clearGallery(dropArea);\n    let images = createImages(imagesList, thumbWidth, thumbHeight);\n    let thumbnailsList = createImages(images, thumbWidth, thumbHeight);\n    addThumbnailsToGallery(thumbnailsList, dropArea);\n    // addEventListenersToThumbnails();\n}\n\nfunction clearGallery(dropArea) {\n    document.querySelector(dropArea).innerHTML = '';\n}\n\nfunction createImages(imagesList, thumbWidth, thumbHeight) {\n    let thumbnailsList = [];\n    let images = imagesList.forEach(el => {\n        let img = new Image();\n        img.src = URL.createObjectURL(el);\n        img.onload = function () {\n            let imageSize = { imageWidth: this.width, imageHeight: this.height };\n            let canvasStartPoints = checkProportions(imageSize, thumbWidth, thumbHeight);\n            let thumbnail = createThumbnail(canvasStartPoints, this);\n            thumbnailsList.push(thumbnail);\n            console.log(thumbnail)\n        }\n        // URL.revokeObjectURL(img.src);\n    });\n    return thumbnailsList; // cannot return before image onload !!!\n}\n\nfunction checkProportions({ imageWidth, imageHeight }, thumbWidth, thumbHeight) {\n    let widthProportion = imageWidth / thumbWidth;\n    let heightProportion = imageHeight / thumbHeight;\n    let proportion = Math.max(widthProportion, heightProportion);\n    let xStartPoint = ((thumbWidth - (imageWidth / proportion)) / 2);\n    let yStartPoint = ((thumbHeight - (imageHeight / proportion)) / 2);\n    return { xStartPoint, yStartPoint, thumbWidth, thumbHeight };\n}\n\nfunction createThumbnail(canvasStartPoints, img) {\n    const { xStartPoint, yStartPoint, thumbWidth, thumbHeight } = canvasStartPoints;\n    let thumbnail = document.createElement('canvas');\n    let context = thumbnail.getContext('2d');\n    context.drawImage(img, xStartPoint, yStartPoint, thumbWidth, thumbHeight);\n    return thumbnail;\n}\n\nfunction addThumbnailsToGallery(thumbnailsList, dropArea) {\n    let galleryContainer = document.querySelector(dropArea);\n    thumbnailsList.forEach(thumbnail => {\n        galleryContainer.appendChild(thumbnail);\n    })\n    return galleryContainer;\n}\n\nfunction addEventListenersToThumbnails() {\n    let actualThumbnailsList = document.getElementsByTagName('canvas');\n    for (let i = 0; i < actualThumbnailsList.length; i++) {\n        actualThumbnailsList[i].addEventListener('click', e => renderFullSizeImage(e, i), false);\n        actualThumbnailsList[i].addEventListener('contextmenu', e => removeFromGallery(e, i), false);\n    }\n}\n\nfunction renderFullSizeImage(e, i) {\n    let newWindow = window.open();\n    let canvas = newWindow.document.createElement('canvas');\n    let context = image.getContext('2d');\n    context.drawImage(img, 0, 0, img.width, img.height);\n    newWindow.document.body.appendChild(canvas);\n}\n\nfunction removeFromImagesList(i) {\n    this.prevent(e);\n    thumbnail.remove();\n    // imagesList = this.imagesList.slice(0, i).concat(this.imagesList.slice(i + 1));\n}\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMy5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9tb2R1bGVzL2dhbGxlcnkuanM/MDUxMSJdLCJzb3VyY2VzQ29udGVudCI6WyJmdW5jdGlvbiByZW5kZXJHYWxsZXJ5KGRyb3BBcmVhLCBpbWFnZXNMaXN0LCB0aHVtYldpZHRoLCB0aHVtYkhlaWdodCkge1xuICAgIGNsZWFyR2FsbGVyeShkcm9wQXJlYSk7XG4gICAgbGV0IGltYWdlcyA9IGNyZWF0ZUltYWdlcyhpbWFnZXNMaXN0LCB0aHVtYldpZHRoLCB0aHVtYkhlaWdodCk7XG4gICAgbGV0IHRodW1ibmFpbHNMaXN0ID0gY3JlYXRlSW1hZ2VzKGltYWdlcywgdGh1bWJXaWR0aCwgdGh1bWJIZWlnaHQpO1xuICAgIGFkZFRodW1ibmFpbHNUb0dhbGxlcnkodGh1bWJuYWlsc0xpc3QsIGRyb3BBcmVhKTtcbiAgICAvLyBhZGRFdmVudExpc3RlbmVyc1RvVGh1bWJuYWlscygpO1xufVxuXG5mdW5jdGlvbiBjbGVhckdhbGxlcnkoZHJvcEFyZWEpIHtcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGRyb3BBcmVhKS5pbm5lckhUTUwgPSAnJztcbn1cblxuZnVuY3Rpb24gY3JlYXRlSW1hZ2VzKGltYWdlc0xpc3QsIHRodW1iV2lkdGgsIHRodW1iSGVpZ2h0KSB7XG4gICAgbGV0IHRodW1ibmFpbHNMaXN0ID0gW107XG4gICAgbGV0IGltYWdlcyA9IGltYWdlc0xpc3QuZm9yRWFjaChlbCA9PiB7XG4gICAgICAgIGxldCBpbWcgPSBuZXcgSW1hZ2UoKTtcbiAgICAgICAgaW1nLnNyYyA9IFVSTC5jcmVhdGVPYmplY3RVUkwoZWwpO1xuICAgICAgICBpbWcub25sb2FkID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgbGV0IGltYWdlU2l6ZSA9IHsgaW1hZ2VXaWR0aDogdGhpcy53aWR0aCwgaW1hZ2VIZWlnaHQ6IHRoaXMuaGVpZ2h0IH07XG4gICAgICAgICAgICBsZXQgY2FudmFzU3RhcnRQb2ludHMgPSBjaGVja1Byb3BvcnRpb25zKGltYWdlU2l6ZSwgdGh1bWJXaWR0aCwgdGh1bWJIZWlnaHQpO1xuICAgICAgICAgICAgbGV0IHRodW1ibmFpbCA9IGNyZWF0ZVRodW1ibmFpbChjYW52YXNTdGFydFBvaW50cywgdGhpcyk7XG4gICAgICAgICAgICB0aHVtYm5haWxzTGlzdC5wdXNoKHRodW1ibmFpbCk7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyh0aHVtYm5haWwpXG4gICAgICAgIH1cbiAgICAgICAgLy8gVVJMLnJldm9rZU9iamVjdFVSTChpbWcuc3JjKTtcbiAgICB9KTtcbiAgICByZXR1cm4gdGh1bWJuYWlsc0xpc3Q7IC8vIGNhbm5vdCByZXR1cm4gYmVmb3JlIGltYWdlIG9ubG9hZCAhISFcbn1cblxuZnVuY3Rpb24gY2hlY2tQcm9wb3J0aW9ucyh7IGltYWdlV2lkdGgsIGltYWdlSGVpZ2h0IH0sIHRodW1iV2lkdGgsIHRodW1iSGVpZ2h0KSB7XG4gICAgbGV0IHdpZHRoUHJvcG9ydGlvbiA9IGltYWdlV2lkdGggLyB0aHVtYldpZHRoO1xuICAgIGxldCBoZWlnaHRQcm9wb3J0aW9uID0gaW1hZ2VIZWlnaHQgLyB0aHVtYkhlaWdodDtcbiAgICBsZXQgcHJvcG9ydGlvbiA9IE1hdGgubWF4KHdpZHRoUHJvcG9ydGlvbiwgaGVpZ2h0UHJvcG9ydGlvbik7XG4gICAgbGV0IHhTdGFydFBvaW50ID0gKCh0aHVtYldpZHRoIC0gKGltYWdlV2lkdGggLyBwcm9wb3J0aW9uKSkgLyAyKTtcbiAgICBsZXQgeVN0YXJ0UG9pbnQgPSAoKHRodW1iSGVpZ2h0IC0gKGltYWdlSGVpZ2h0IC8gcHJvcG9ydGlvbikpIC8gMik7XG4gICAgcmV0dXJuIHsgeFN0YXJ0UG9pbnQsIHlTdGFydFBvaW50LCB0aHVtYldpZHRoLCB0aHVtYkhlaWdodCB9O1xufVxuXG5mdW5jdGlvbiBjcmVhdGVUaHVtYm5haWwoY2FudmFzU3RhcnRQb2ludHMsIGltZykge1xuICAgIGNvbnN0IHsgeFN0YXJ0UG9pbnQsIHlTdGFydFBvaW50LCB0aHVtYldpZHRoLCB0aHVtYkhlaWdodCB9ID0gY2FudmFzU3RhcnRQb2ludHM7XG4gICAgbGV0IHRodW1ibmFpbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2NhbnZhcycpO1xuICAgIGxldCBjb250ZXh0ID0gdGh1bWJuYWlsLmdldENvbnRleHQoJzJkJyk7XG4gICAgY29udGV4dC5kcmF3SW1hZ2UoaW1nLCB4U3RhcnRQb2ludCwgeVN0YXJ0UG9pbnQsIHRodW1iV2lkdGgsIHRodW1iSGVpZ2h0KTtcbiAgICByZXR1cm4gdGh1bWJuYWlsO1xufVxuXG5mdW5jdGlvbiBhZGRUaHVtYm5haWxzVG9HYWxsZXJ5KHRodW1ibmFpbHNMaXN0LCBkcm9wQXJlYSkge1xuICAgIGxldCBnYWxsZXJ5Q29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcihkcm9wQXJlYSk7XG4gICAgdGh1bWJuYWlsc0xpc3QuZm9yRWFjaCh0aHVtYm5haWwgPT4ge1xuICAgICAgICBnYWxsZXJ5Q29udGFpbmVyLmFwcGVuZENoaWxkKHRodW1ibmFpbCk7XG4gICAgfSlcbiAgICByZXR1cm4gZ2FsbGVyeUNvbnRhaW5lcjtcbn1cblxuZnVuY3Rpb24gYWRkRXZlbnRMaXN0ZW5lcnNUb1RodW1ibmFpbHMoKSB7XG4gICAgbGV0IGFjdHVhbFRodW1ibmFpbHNMaXN0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoJ2NhbnZhcycpO1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgYWN0dWFsVGh1bWJuYWlsc0xpc3QubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgYWN0dWFsVGh1bWJuYWlsc0xpc3RbaV0uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBlID0+IHJlbmRlckZ1bGxTaXplSW1hZ2UoZSwgaSksIGZhbHNlKTtcbiAgICAgICAgYWN0dWFsVGh1bWJuYWlsc0xpc3RbaV0uYWRkRXZlbnRMaXN0ZW5lcignY29udGV4dG1lbnUnLCBlID0+IHJlbW92ZUZyb21HYWxsZXJ5KGUsIGkpLCBmYWxzZSk7XG4gICAgfVxufVxuXG5mdW5jdGlvbiByZW5kZXJGdWxsU2l6ZUltYWdlKGUsIGkpIHtcbiAgICBsZXQgbmV3V2luZG93ID0gd2luZG93Lm9wZW4oKTtcbiAgICBsZXQgY2FudmFzID0gbmV3V2luZG93LmRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2NhbnZhcycpO1xuICAgIGxldCBjb250ZXh0ID0gaW1hZ2UuZ2V0Q29udGV4dCgnMmQnKTtcbiAgICBjb250ZXh0LmRyYXdJbWFnZShpbWcsIDAsIDAsIGltZy53aWR0aCwgaW1nLmhlaWdodCk7XG4gICAgbmV3V2luZG93LmRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoY2FudmFzKTtcbn1cblxuZnVuY3Rpb24gcmVtb3ZlRnJvbUltYWdlc0xpc3QoaSkge1xuICAgIHRoaXMucHJldmVudChlKTtcbiAgICB0aHVtYm5haWwucmVtb3ZlKCk7XG4gICAgLy8gaW1hZ2VzTGlzdCA9IHRoaXMuaW1hZ2VzTGlzdC5zbGljZSgwLCBpKS5jb25jYXQodGhpcy5pbWFnZXNMaXN0LnNsaWNlKGkgKyAxKSk7XG59XG5cbmV4cG9ydCB7IHJlbmRlckdhbGxlcnkgfTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9tb2R1bGVzL2dhbGxlcnkuanNcbi8vIG1vZHVsZSBpZCA9IDNcbi8vIG1vZHVsZSBjaHVua3MgPSAwIl0sIm1hcHBpbmdzIjoiQUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOyIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///3\n");

/***/ })
/******/ ]);