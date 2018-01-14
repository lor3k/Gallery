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
eval("Object.defineProperty(__webpack_exports__, \"__esModule\", { value: true });\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__modules_image_processor__ = __webpack_require__(/*! ./modules/image-processor */ 1);\n\n\nObject(__WEBPACK_IMPORTED_MODULE_0__modules_image_processor__[\"a\" /* init */])({\n  thumbWidth: 100,\n  thumbHeight: 250,\n  dropArea: '#dropArea',\n  input: '#fieldInput',\n  allowedFiles: ['png','jpg']\n});\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMC5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9tYWluLmpzPzM0NzkiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtpbml0fSBmcm9tICcuL21vZHVsZXMvaW1hZ2UtcHJvY2Vzc29yJztcblxuaW5pdCh7XG4gIHRodW1iV2lkdGg6IDEwMCxcbiAgdGh1bWJIZWlnaHQ6IDI1MCxcbiAgZHJvcEFyZWE6ICcjZHJvcEFyZWEnLFxuICBpbnB1dDogJyNmaWVsZElucHV0JyxcbiAgYWxsb3dlZEZpbGVzOiBbJ3BuZycsJ2pwZyddXG59KTtcblxuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvbWFpbi5qc1xuLy8gbW9kdWxlIGlkID0gMFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTsiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///0\n");

/***/ }),
/* 1 */
/*!****************************************!*\
  !*** ./src/modules/image-processor.js ***!
  \****************************************/
/*! exports provided: init */
/*! exports used: init */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"a\", function() { return init; });\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__file_importer__ = __webpack_require__(/*! ./file-importer */ 2);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__gallery__ = __webpack_require__(/*! ./gallery */ 3);\n\n\n\nfunction attachInput(input, allowedFiles) {\n    let inputElement = document.querySelector(input);\n    inputElement.addEventListener('change', e => Object(__WEBPACK_IMPORTED_MODULE_0__file_importer__[\"a\" /* fileImport */])(e.target.files, allowedFiles), false);\n    return inputElement;\n}\n\nfunction attachDragAndDrop(dropArea, allowedFiles) {\n    let dropAreaElement = document.querySelector(dropArea);\n    dropAreaElement.addEventListener('dragover', prevent, false);\n    dropAreaElement.addEventListener('dragenter', prevent, false);\n    dropAreaElement.addEventListener('drop', e => onDrop(e, allowedFiles), false);\n}\n\nfunction prevent(e) {\n    e.stopPropagation();\n    e.preventDefault();\n}\n\nfunction onDrop(e, allowedFiles) {\n    e.stopPropagation();\n    e.preventDefault();\n    let files = e.dataTransfer.files;\n    console.log(files);\n    Object(__WEBPACK_IMPORTED_MODULE_0__file_importer__[\"a\" /* fileImport */])(files, allowedFiles);\n}\n\nconst init = ({ thumbWidth, thumbHeight, dropArea, input, allowedFiles }) => {\n    attachInput(input, allowedFiles);\n    attachDragAndDrop(dropArea, allowedFiles);\n    Object(__WEBPACK_IMPORTED_MODULE_1__gallery__[\"a\" /* renderGallery */])(dropArea, __WEBPACK_IMPORTED_MODULE_0__file_importer__[\"b\" /* imagesList */]);\n}\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMS5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9tb2R1bGVzL2ltYWdlLXByb2Nlc3Nvci5qcz84MTJkIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGZpbGVJbXBvcnQsIGltYWdlc0xpc3QgfSBmcm9tICcuL2ZpbGUtaW1wb3J0ZXInO1xuaW1wb3J0IHsgcmVuZGVyR2FsbGVyeSB9IGZyb20gJy4vZ2FsbGVyeSc7XG5cbmZ1bmN0aW9uIGF0dGFjaElucHV0KGlucHV0LCBhbGxvd2VkRmlsZXMpIHtcbiAgICBsZXQgaW5wdXRFbGVtZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihpbnB1dCk7XG4gICAgaW5wdXRFbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsIGUgPT4gZmlsZUltcG9ydChlLnRhcmdldC5maWxlcywgYWxsb3dlZEZpbGVzKSwgZmFsc2UpO1xuICAgIHJldHVybiBpbnB1dEVsZW1lbnQ7XG59XG5cbmZ1bmN0aW9uIGF0dGFjaERyYWdBbmREcm9wKGRyb3BBcmVhLCBhbGxvd2VkRmlsZXMpIHtcbiAgICBsZXQgZHJvcEFyZWFFbGVtZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcihkcm9wQXJlYSk7XG4gICAgZHJvcEFyZWFFbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2RyYWdvdmVyJywgcHJldmVudCwgZmFsc2UpO1xuICAgIGRyb3BBcmVhRWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCdkcmFnZW50ZXInLCBwcmV2ZW50LCBmYWxzZSk7XG4gICAgZHJvcEFyZWFFbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2Ryb3AnLCBlID0+IG9uRHJvcChlLCBhbGxvd2VkRmlsZXMpLCBmYWxzZSk7XG59XG5cbmZ1bmN0aW9uIHByZXZlbnQoZSkge1xuICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xufVxuXG5mdW5jdGlvbiBvbkRyb3AoZSwgYWxsb3dlZEZpbGVzKSB7XG4gICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgbGV0IGZpbGVzID0gZS5kYXRhVHJhbnNmZXIuZmlsZXM7XG4gICAgY29uc29sZS5sb2coZmlsZXMpO1xuICAgIGZpbGVJbXBvcnQoZmlsZXMsIGFsbG93ZWRGaWxlcyk7XG59XG5cbmNvbnN0IGluaXQgPSAoeyB0aHVtYldpZHRoLCB0aHVtYkhlaWdodCwgZHJvcEFyZWEsIGlucHV0LCBhbGxvd2VkRmlsZXMgfSkgPT4ge1xuICAgIGF0dGFjaElucHV0KGlucHV0LCBhbGxvd2VkRmlsZXMpO1xuICAgIGF0dGFjaERyYWdBbmREcm9wKGRyb3BBcmVhLCBhbGxvd2VkRmlsZXMpO1xuICAgIHJlbmRlckdhbGxlcnkoZHJvcEFyZWEsIGltYWdlc0xpc3QpO1xufVxuXG5leHBvcnQgeyBpbml0IH07XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvbW9kdWxlcy9pbWFnZS1wcm9jZXNzb3IuanNcbi8vIG1vZHVsZSBpZCA9IDFcbi8vIG1vZHVsZSBjaHVua3MgPSAwIl0sIm1hcHBpbmdzIjoiQUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOyIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///1\n");

/***/ }),
/* 2 */
/*!**************************************!*\
  !*** ./src/modules/file-importer.js ***!
  \**************************************/
/*! exports provided: fileImport, imagesList */
/*! exports used: fileImport, imagesList */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"a\", function() { return fileImport; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"b\", function() { return imagesList; });\nlet imagesList = [];\n\nfunction fileImport(inputFiles, allowedFiles) {\n    let extensions = getExtension(inputFiles);\n    let correctImages = isCorrectFormat(extensions, allowedFiles);\n    addCorrectFilesToList(inputFiles, correctImages);\n    console.log(imagesList);\n}\n\nfunction getExtension(inputFiles) {\n    let extensionsArray = [];\n    for (let i = 0; i < inputFiles.length; i++) {\n        let fileNameSplitted = inputFiles[i].name.split('.');\n        let fileExt = fileNameSplitted[fileNameSplitted.length - 1].toLowerCase();\n        extensionsArray.push(fileExt)\n    }\n    return extensionsArray;\n}\n\nfunction isCorrectFormat(extensions, allowedFiles) {\n    let isExtensionAllowed = extensions.map(ext => {\n        return allowedFiles.includes(ext);\n    });\n    return isExtensionAllowed;\n}\n\nfunction addCorrectFilesToList(inputFiles, correctImages) {\n    correctImages.forEach((ext, i) => {\n        if (ext) {\n            imagesList.push(inputFiles[i]);\n            console.log('%c Correct extention!', 'background: green;');\n        }\n        else {\n            console.log('%c Wrong file extention!', 'background: darkred;');\n        }\n    });\n}\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMi5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9tb2R1bGVzL2ZpbGUtaW1wb3J0ZXIuanM/OWNhMCJdLCJzb3VyY2VzQ29udGVudCI6WyJsZXQgaW1hZ2VzTGlzdCA9IFtdO1xuXG5mdW5jdGlvbiBmaWxlSW1wb3J0KGlucHV0RmlsZXMsIGFsbG93ZWRGaWxlcykge1xuICAgIGxldCBleHRlbnNpb25zID0gZ2V0RXh0ZW5zaW9uKGlucHV0RmlsZXMpO1xuICAgIGxldCBjb3JyZWN0SW1hZ2VzID0gaXNDb3JyZWN0Rm9ybWF0KGV4dGVuc2lvbnMsIGFsbG93ZWRGaWxlcyk7XG4gICAgYWRkQ29ycmVjdEZpbGVzVG9MaXN0KGlucHV0RmlsZXMsIGNvcnJlY3RJbWFnZXMpO1xuICAgIGNvbnNvbGUubG9nKGltYWdlc0xpc3QpO1xufVxuXG5mdW5jdGlvbiBnZXRFeHRlbnNpb24oaW5wdXRGaWxlcykge1xuICAgIGxldCBleHRlbnNpb25zQXJyYXkgPSBbXTtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGlucHV0RmlsZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgbGV0IGZpbGVOYW1lU3BsaXR0ZWQgPSBpbnB1dEZpbGVzW2ldLm5hbWUuc3BsaXQoJy4nKTtcbiAgICAgICAgbGV0IGZpbGVFeHQgPSBmaWxlTmFtZVNwbGl0dGVkW2ZpbGVOYW1lU3BsaXR0ZWQubGVuZ3RoIC0gMV0udG9Mb3dlckNhc2UoKTtcbiAgICAgICAgZXh0ZW5zaW9uc0FycmF5LnB1c2goZmlsZUV4dClcbiAgICB9XG4gICAgcmV0dXJuIGV4dGVuc2lvbnNBcnJheTtcbn1cblxuZnVuY3Rpb24gaXNDb3JyZWN0Rm9ybWF0KGV4dGVuc2lvbnMsIGFsbG93ZWRGaWxlcykge1xuICAgIGxldCBpc0V4dGVuc2lvbkFsbG93ZWQgPSBleHRlbnNpb25zLm1hcChleHQgPT4ge1xuICAgICAgICByZXR1cm4gYWxsb3dlZEZpbGVzLmluY2x1ZGVzKGV4dCk7XG4gICAgfSk7XG4gICAgcmV0dXJuIGlzRXh0ZW5zaW9uQWxsb3dlZDtcbn1cblxuZnVuY3Rpb24gYWRkQ29ycmVjdEZpbGVzVG9MaXN0KGlucHV0RmlsZXMsIGNvcnJlY3RJbWFnZXMpIHtcbiAgICBjb3JyZWN0SW1hZ2VzLmZvckVhY2goKGV4dCwgaSkgPT4ge1xuICAgICAgICBpZiAoZXh0KSB7XG4gICAgICAgICAgICBpbWFnZXNMaXN0LnB1c2goaW5wdXRGaWxlc1tpXSk7XG4gICAgICAgICAgICBjb25zb2xlLmxvZygnJWMgQ29ycmVjdCBleHRlbnRpb24hJywgJ2JhY2tncm91bmQ6IGdyZWVuOycpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgY29uc29sZS5sb2coJyVjIFdyb25nIGZpbGUgZXh0ZW50aW9uIScsICdiYWNrZ3JvdW5kOiBkYXJrcmVkOycpO1xuICAgICAgICB9XG4gICAgfSk7XG59XG5cbmV4cG9ydCB7IGZpbGVJbXBvcnQsIGltYWdlc0xpc3QgfTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9tb2R1bGVzL2ZpbGUtaW1wb3J0ZXIuanNcbi8vIG1vZHVsZSBpZCA9IDJcbi8vIG1vZHVsZSBjaHVua3MgPSAwIl0sIm1hcHBpbmdzIjoiQUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTsiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///2\n");

/***/ }),
/* 3 */
/*!********************************!*\
  !*** ./src/modules/gallery.js ***!
  \********************************/
/*! exports provided: renderGallery */
/*! exports used: renderGallery */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"a\", function() { return renderGallery; });\nfunction renderGallery(dropArea, imagesList) {\n    clearGallery(dropArea);\n    let images = createImages(imagesList);\n    let thumbnailsList = createThumbnails(images, thumbWidth, thumbHeight);\n    addThumbnailsToGallery(thumbnailsList, dropArea);\n    addEventListenersToThumbnails();\n}\n\nfunction clearGallery(dropArea) {\n    document.querySelector(dropArea).innerHTML = '';\n}\n\nfunction createImages(imagesList) {\n    let images = imagesList.map(el => {\n        let img = new Image();\n        img.src = URL.createObjectURL(el);\n        // URL.revokeObjectURL(img.src);\n        return img;\n    });\n    // console.log(images);\n    return images;\n}\n\nfunction createThumbnails(images, thumbWidth, thumbHeight) {\n    let thumbnailsList = images.map((image) => {\n        let thumbnail = document.createElement('canvas');\n        let context = thumbnail.getContext('2d');\n        let canvasStartPoints = checkProportions(image, thumbWidth, thumbHeight);\n        context.drawImage(image, canvasStartPoints[x], canvasStartPoints[y], thumbWidth, thumbHeight);\n        return thumbnail;\n    });\n    return thumbnailsList;\n}\n\nfunction checkProportions(image, thumbWidth, thumbHeight) {\n    let widthProportion = image.width / thumbWidth;\n    let heightProportion = image.height / thumbHeight;\n    let proportion = Math.max(widthProportion, heightProportion);\n    let xStartPoint = (thumbWidth - (0.5 * image.width / proportion));\n    let yStartPoint = (thumbHeight - (0.5 * image.height / proportion));\n    let canvasStartPoints = { x: xStartPoint, y: yStartPoint };\n    return canvasStartPoints;\n}\n\nfunction addThumbnailsToGallery(thumbnailsList, dropArea) {\n    let galleryContainer = document.querySelector(dropArea);\n    thumbnailsList.forEach(thumbnail => {\n        galleryContainer.appendChild(thumbnail);\n    })\n    return galleryContainer;\n}\n\nfunction addEventListenersToThumbnails(){\n    document.getElementsByTagName('canvas').forEach((thumbnail, i) => {\n        thumbnail.addEventListener('click', e => renderFullSizeImage(e, i), false);\n        thumbnail.addEventListener('contextmenu', e => removeFromGallery(e, i), false);\n    });\n}\n\nfunction renderFullSizeImage(e, i) {\n    let newWindow = window.open();\n    let canvas = newWindow.document.createElement('canvas');\n    let context = image.getContext('2d');\n    context.drawImage(img, 0, 0, img.width, img.height);\n    newWindow.document.body.appendChild(canvas);\n}\n\nfunction removeFromImagesList(i) {\n    this.prevent(e);\n    thumbnail.remove();\n    // imagesList = this.imagesList.slice(0, i).concat(this.imagesList.slice(i + 1));\n}\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMy5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9tb2R1bGVzL2dhbGxlcnkuanM/MDUxMSJdLCJzb3VyY2VzQ29udGVudCI6WyJmdW5jdGlvbiByZW5kZXJHYWxsZXJ5KGRyb3BBcmVhLCBpbWFnZXNMaXN0KSB7XG4gICAgY2xlYXJHYWxsZXJ5KGRyb3BBcmVhKTtcbiAgICBsZXQgaW1hZ2VzID0gY3JlYXRlSW1hZ2VzKGltYWdlc0xpc3QpO1xuICAgIGxldCB0aHVtYm5haWxzTGlzdCA9IGNyZWF0ZVRodW1ibmFpbHMoaW1hZ2VzLCB0aHVtYldpZHRoLCB0aHVtYkhlaWdodCk7XG4gICAgYWRkVGh1bWJuYWlsc1RvR2FsbGVyeSh0aHVtYm5haWxzTGlzdCwgZHJvcEFyZWEpO1xuICAgIGFkZEV2ZW50TGlzdGVuZXJzVG9UaHVtYm5haWxzKCk7XG59XG5cbmZ1bmN0aW9uIGNsZWFyR2FsbGVyeShkcm9wQXJlYSkge1xuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoZHJvcEFyZWEpLmlubmVySFRNTCA9ICcnO1xufVxuXG5mdW5jdGlvbiBjcmVhdGVJbWFnZXMoaW1hZ2VzTGlzdCkge1xuICAgIGxldCBpbWFnZXMgPSBpbWFnZXNMaXN0Lm1hcChlbCA9PiB7XG4gICAgICAgIGxldCBpbWcgPSBuZXcgSW1hZ2UoKTtcbiAgICAgICAgaW1nLnNyYyA9IFVSTC5jcmVhdGVPYmplY3RVUkwoZWwpO1xuICAgICAgICAvLyBVUkwucmV2b2tlT2JqZWN0VVJMKGltZy5zcmMpO1xuICAgICAgICByZXR1cm4gaW1nO1xuICAgIH0pO1xuICAgIC8vIGNvbnNvbGUubG9nKGltYWdlcyk7XG4gICAgcmV0dXJuIGltYWdlcztcbn1cblxuZnVuY3Rpb24gY3JlYXRlVGh1bWJuYWlscyhpbWFnZXMsIHRodW1iV2lkdGgsIHRodW1iSGVpZ2h0KSB7XG4gICAgbGV0IHRodW1ibmFpbHNMaXN0ID0gaW1hZ2VzLm1hcCgoaW1hZ2UpID0+IHtcbiAgICAgICAgbGV0IHRodW1ibmFpbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2NhbnZhcycpO1xuICAgICAgICBsZXQgY29udGV4dCA9IHRodW1ibmFpbC5nZXRDb250ZXh0KCcyZCcpO1xuICAgICAgICBsZXQgY2FudmFzU3RhcnRQb2ludHMgPSBjaGVja1Byb3BvcnRpb25zKGltYWdlLCB0aHVtYldpZHRoLCB0aHVtYkhlaWdodCk7XG4gICAgICAgIGNvbnRleHQuZHJhd0ltYWdlKGltYWdlLCBjYW52YXNTdGFydFBvaW50c1t4XSwgY2FudmFzU3RhcnRQb2ludHNbeV0sIHRodW1iV2lkdGgsIHRodW1iSGVpZ2h0KTtcbiAgICAgICAgcmV0dXJuIHRodW1ibmFpbDtcbiAgICB9KTtcbiAgICByZXR1cm4gdGh1bWJuYWlsc0xpc3Q7XG59XG5cbmZ1bmN0aW9uIGNoZWNrUHJvcG9ydGlvbnMoaW1hZ2UsIHRodW1iV2lkdGgsIHRodW1iSGVpZ2h0KSB7XG4gICAgbGV0IHdpZHRoUHJvcG9ydGlvbiA9IGltYWdlLndpZHRoIC8gdGh1bWJXaWR0aDtcbiAgICBsZXQgaGVpZ2h0UHJvcG9ydGlvbiA9IGltYWdlLmhlaWdodCAvIHRodW1iSGVpZ2h0O1xuICAgIGxldCBwcm9wb3J0aW9uID0gTWF0aC5tYXgod2lkdGhQcm9wb3J0aW9uLCBoZWlnaHRQcm9wb3J0aW9uKTtcbiAgICBsZXQgeFN0YXJ0UG9pbnQgPSAodGh1bWJXaWR0aCAtICgwLjUgKiBpbWFnZS53aWR0aCAvIHByb3BvcnRpb24pKTtcbiAgICBsZXQgeVN0YXJ0UG9pbnQgPSAodGh1bWJIZWlnaHQgLSAoMC41ICogaW1hZ2UuaGVpZ2h0IC8gcHJvcG9ydGlvbikpO1xuICAgIGxldCBjYW52YXNTdGFydFBvaW50cyA9IHsgeDogeFN0YXJ0UG9pbnQsIHk6IHlTdGFydFBvaW50IH07XG4gICAgcmV0dXJuIGNhbnZhc1N0YXJ0UG9pbnRzO1xufVxuXG5mdW5jdGlvbiBhZGRUaHVtYm5haWxzVG9HYWxsZXJ5KHRodW1ibmFpbHNMaXN0LCBkcm9wQXJlYSkge1xuICAgIGxldCBnYWxsZXJ5Q29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcihkcm9wQXJlYSk7XG4gICAgdGh1bWJuYWlsc0xpc3QuZm9yRWFjaCh0aHVtYm5haWwgPT4ge1xuICAgICAgICBnYWxsZXJ5Q29udGFpbmVyLmFwcGVuZENoaWxkKHRodW1ibmFpbCk7XG4gICAgfSlcbiAgICByZXR1cm4gZ2FsbGVyeUNvbnRhaW5lcjtcbn1cblxuZnVuY3Rpb24gYWRkRXZlbnRMaXN0ZW5lcnNUb1RodW1ibmFpbHMoKXtcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZSgnY2FudmFzJykuZm9yRWFjaCgodGh1bWJuYWlsLCBpKSA9PiB7XG4gICAgICAgIHRodW1ibmFpbC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGUgPT4gcmVuZGVyRnVsbFNpemVJbWFnZShlLCBpKSwgZmFsc2UpO1xuICAgICAgICB0aHVtYm5haWwuYWRkRXZlbnRMaXN0ZW5lcignY29udGV4dG1lbnUnLCBlID0+IHJlbW92ZUZyb21HYWxsZXJ5KGUsIGkpLCBmYWxzZSk7XG4gICAgfSk7XG59XG5cbmZ1bmN0aW9uIHJlbmRlckZ1bGxTaXplSW1hZ2UoZSwgaSkge1xuICAgIGxldCBuZXdXaW5kb3cgPSB3aW5kb3cub3BlbigpO1xuICAgIGxldCBjYW52YXMgPSBuZXdXaW5kb3cuZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnY2FudmFzJyk7XG4gICAgbGV0IGNvbnRleHQgPSBpbWFnZS5nZXRDb250ZXh0KCcyZCcpO1xuICAgIGNvbnRleHQuZHJhd0ltYWdlKGltZywgMCwgMCwgaW1nLndpZHRoLCBpbWcuaGVpZ2h0KTtcbiAgICBuZXdXaW5kb3cuZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChjYW52YXMpO1xufVxuXG5mdW5jdGlvbiByZW1vdmVGcm9tSW1hZ2VzTGlzdChpKSB7XG4gICAgdGhpcy5wcmV2ZW50KGUpO1xuICAgIHRodW1ibmFpbC5yZW1vdmUoKTtcbiAgICAvLyBpbWFnZXNMaXN0ID0gdGhpcy5pbWFnZXNMaXN0LnNsaWNlKDAsIGkpLmNvbmNhdCh0aGlzLmltYWdlc0xpc3Quc2xpY2UoaSArIDEpKTtcbn1cblxuZXhwb3J0IHsgcmVuZGVyR2FsbGVyeSB9O1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL21vZHVsZXMvZ2FsbGVyeS5qc1xuLy8gbW9kdWxlIGlkID0gM1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Iiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///3\n");

/***/ })
/******/ ]);