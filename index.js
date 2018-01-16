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
eval("Object.defineProperty(__webpack_exports__, \"__esModule\", { value: true });\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__modules_image_processor__ = __webpack_require__(/*! ./modules/image-processor */ 1);\n\n\n// example\nObject(__WEBPACK_IMPORTED_MODULE_0__modules_image_processor__[\"a\" /* init */])({\n  thumbWidth: 150,\n  thumbHeight: 100,\n  dropArea: '#dropArea',\n  input: '#fieldInput',\n  allowedFiles: ['png','jpg']\n});\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMC5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9tYWluLmpzPzM0NzkiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtpbml0fSBmcm9tICcuL21vZHVsZXMvaW1hZ2UtcHJvY2Vzc29yJztcblxuLy8gZXhhbXBsZVxuaW5pdCh7XG4gIHRodW1iV2lkdGg6IDE1MCxcbiAgdGh1bWJIZWlnaHQ6IDEwMCxcbiAgZHJvcEFyZWE6ICcjZHJvcEFyZWEnLFxuICBpbnB1dDogJyNmaWVsZElucHV0JyxcbiAgYWxsb3dlZEZpbGVzOiBbJ3BuZycsJ2pwZyddXG59KTtcblxuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvbWFpbi5qc1xuLy8gbW9kdWxlIGlkID0gMFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOyIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///0\n");

/***/ }),
/* 1 */
/*!****************************************!*\
  !*** ./src/modules/image-processor.js ***!
  \****************************************/
/*! exports provided: init */
/*! exports used: init */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"a\", function() { return init; });\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__file_importer__ = __webpack_require__(/*! ./file-importer */ 2);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__gallery__ = __webpack_require__(/*! ./gallery */ 3);\n\n\n\nfunction attachInput(config) {\n    let { input } = config;\n    let inputElement = document.querySelector(input);\n    inputElement.addEventListener('change', e => fileImportAndRender(e, config), false);\n    return inputElement;\n}\n\nfunction fileImportAndRender(e, config) {\n    let {\n        thumbWidth,\n        thumbHeight,\n        dropArea,\n        input,\n        allowedFiles\n    } = config;\n    Object(__WEBPACK_IMPORTED_MODULE_0__file_importer__[\"a\" /* fileImport */])(e.target.files, allowedFiles);\n    Object(__WEBPACK_IMPORTED_MODULE_1__gallery__[\"a\" /* renderGallery */])(dropArea, __WEBPACK_IMPORTED_MODULE_0__file_importer__[\"b\" /* imagesList */], thumbWidth, thumbHeight);\n}\n\nfunction attachDragAndDrop(config) {\n    let dropAreaElement = document.querySelector(config.dropArea);\n    dropAreaElement.addEventListener('dragover', prevent, false);\n    dropAreaElement.addEventListener('dragenter', prevent, false);\n    dropAreaElement.addEventListener('drop', e => onDrop(e, config), false);\n}\n\nfunction prevent(e) {\n    e.stopPropagation();\n    e.preventDefault();\n}\n\nfunction onDrop(e, { thumbWidth, thumbHeight, dropArea, allowedFiles }) {\n    e.stopPropagation();\n    e.preventDefault();\n    let files = e.dataTransfer.files;\n    Object(__WEBPACK_IMPORTED_MODULE_0__file_importer__[\"a\" /* fileImport */])(files, allowedFiles);\n    Object(__WEBPACK_IMPORTED_MODULE_1__gallery__[\"a\" /* renderGallery */])(dropArea, __WEBPACK_IMPORTED_MODULE_0__file_importer__[\"b\" /* imagesList */], thumbWidth, thumbHeight);\n}\n\nconst init = ({ thumbWidth, thumbHeight, dropArea, input, allowedFiles }) => {\n    let config = {\n        thumbWidth,\n        thumbHeight,\n        dropArea,\n        input,\n        allowedFiles\n    };\n    attachInput(config);\n    attachDragAndDrop(config);\n}\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMS5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9tb2R1bGVzL2ltYWdlLXByb2Nlc3Nvci5qcz84MTJkIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGZpbGVJbXBvcnQsIGltYWdlc0xpc3QgfSBmcm9tICcuL2ZpbGUtaW1wb3J0ZXInO1xuaW1wb3J0IHsgcmVuZGVyR2FsbGVyeSB9IGZyb20gJy4vZ2FsbGVyeSc7XG5cbmZ1bmN0aW9uIGF0dGFjaElucHV0KGNvbmZpZykge1xuICAgIGxldCB7IGlucHV0IH0gPSBjb25maWc7XG4gICAgbGV0IGlucHV0RWxlbWVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoaW5wdXQpO1xuICAgIGlucHV0RWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCBlID0+IGZpbGVJbXBvcnRBbmRSZW5kZXIoZSwgY29uZmlnKSwgZmFsc2UpO1xuICAgIHJldHVybiBpbnB1dEVsZW1lbnQ7XG59XG5cbmZ1bmN0aW9uIGZpbGVJbXBvcnRBbmRSZW5kZXIoZSwgY29uZmlnKSB7XG4gICAgbGV0IHtcbiAgICAgICAgdGh1bWJXaWR0aCxcbiAgICAgICAgdGh1bWJIZWlnaHQsXG4gICAgICAgIGRyb3BBcmVhLFxuICAgICAgICBpbnB1dCxcbiAgICAgICAgYWxsb3dlZEZpbGVzXG4gICAgfSA9IGNvbmZpZztcbiAgICBmaWxlSW1wb3J0KGUudGFyZ2V0LmZpbGVzLCBhbGxvd2VkRmlsZXMpO1xuICAgIHJlbmRlckdhbGxlcnkoZHJvcEFyZWEsIGltYWdlc0xpc3QsIHRodW1iV2lkdGgsIHRodW1iSGVpZ2h0KTtcbn1cblxuZnVuY3Rpb24gYXR0YWNoRHJhZ0FuZERyb3AoY29uZmlnKSB7XG4gICAgbGV0IGRyb3BBcmVhRWxlbWVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoY29uZmlnLmRyb3BBcmVhKTtcbiAgICBkcm9wQXJlYUVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignZHJhZ292ZXInLCBwcmV2ZW50LCBmYWxzZSk7XG4gICAgZHJvcEFyZWFFbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2RyYWdlbnRlcicsIHByZXZlbnQsIGZhbHNlKTtcbiAgICBkcm9wQXJlYUVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignZHJvcCcsIGUgPT4gb25Ecm9wKGUsIGNvbmZpZyksIGZhbHNlKTtcbn1cblxuZnVuY3Rpb24gcHJldmVudChlKSB7XG4gICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG59XG5cbmZ1bmN0aW9uIG9uRHJvcChlLCB7IHRodW1iV2lkdGgsIHRodW1iSGVpZ2h0LCBkcm9wQXJlYSwgYWxsb3dlZEZpbGVzIH0pIHtcbiAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xuICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICBsZXQgZmlsZXMgPSBlLmRhdGFUcmFuc2Zlci5maWxlcztcbiAgICBmaWxlSW1wb3J0KGZpbGVzLCBhbGxvd2VkRmlsZXMpO1xuICAgIHJlbmRlckdhbGxlcnkoZHJvcEFyZWEsIGltYWdlc0xpc3QsIHRodW1iV2lkdGgsIHRodW1iSGVpZ2h0KTtcbn1cblxuY29uc3QgaW5pdCA9ICh7IHRodW1iV2lkdGgsIHRodW1iSGVpZ2h0LCBkcm9wQXJlYSwgaW5wdXQsIGFsbG93ZWRGaWxlcyB9KSA9PiB7XG4gICAgbGV0IGNvbmZpZyA9IHtcbiAgICAgICAgdGh1bWJXaWR0aCxcbiAgICAgICAgdGh1bWJIZWlnaHQsXG4gICAgICAgIGRyb3BBcmVhLFxuICAgICAgICBpbnB1dCxcbiAgICAgICAgYWxsb3dlZEZpbGVzXG4gICAgfTtcbiAgICBhdHRhY2hJbnB1dChjb25maWcpO1xuICAgIGF0dGFjaERyYWdBbmREcm9wKGNvbmZpZyk7XG59XG5cbmV4cG9ydCB7IGluaXQgfTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9tb2R1bGVzL2ltYWdlLXByb2Nlc3Nvci5qc1xuLy8gbW9kdWxlIGlkID0gMVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTsiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///1\n");

/***/ }),
/* 2 */
/*!**************************************!*\
  !*** ./src/modules/file-importer.js ***!
  \**************************************/
/*! exports provided: fileImport, imagesList */
/*! exports used: fileImport, imagesList */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"a\", function() { return fileImport; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"b\", function() { return imagesList; });\nlet imagesList = [];\n\nfunction fileImport(inputFiles, allowedFiles) {\n    let extensions = getExtension(inputFiles);\n    let correctImages = isCorrectFormat(extensions, allowedFiles);\n    addCorrectFilesToList(inputFiles, correctImages);\n}\n\nfunction getExtension(inputFiles) {\n    let extensionsArray = [];\n    for (let i = 0; i < inputFiles.length; i++) {\n        let fileNameSplitted = inputFiles[i].name.split('.');\n        let fileExt = fileNameSplitted[fileNameSplitted.length - 1].toLowerCase();\n        extensionsArray.push(fileExt)\n    }\n    return extensionsArray;\n}\n\nfunction isCorrectFormat(extensions, allowedFiles) {\n    let isExtensionAllowed = extensions.map(ext => {\n        return allowedFiles.includes(ext);\n    });\n    return isExtensionAllowed;\n}\n\nfunction addCorrectFilesToList(inputFiles, correctImages) {\n    correctImages.forEach((ext, i) => {\n        if (ext) {\n            imagesList.push(inputFiles[i]);\n        }\n        else {\n            alert('Wrong file extention!');\n        }\n    });\n}\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMi5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9tb2R1bGVzL2ZpbGUtaW1wb3J0ZXIuanM/OWNhMCJdLCJzb3VyY2VzQ29udGVudCI6WyJsZXQgaW1hZ2VzTGlzdCA9IFtdO1xuXG5mdW5jdGlvbiBmaWxlSW1wb3J0KGlucHV0RmlsZXMsIGFsbG93ZWRGaWxlcykge1xuICAgIGxldCBleHRlbnNpb25zID0gZ2V0RXh0ZW5zaW9uKGlucHV0RmlsZXMpO1xuICAgIGxldCBjb3JyZWN0SW1hZ2VzID0gaXNDb3JyZWN0Rm9ybWF0KGV4dGVuc2lvbnMsIGFsbG93ZWRGaWxlcyk7XG4gICAgYWRkQ29ycmVjdEZpbGVzVG9MaXN0KGlucHV0RmlsZXMsIGNvcnJlY3RJbWFnZXMpO1xufVxuXG5mdW5jdGlvbiBnZXRFeHRlbnNpb24oaW5wdXRGaWxlcykge1xuICAgIGxldCBleHRlbnNpb25zQXJyYXkgPSBbXTtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGlucHV0RmlsZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgbGV0IGZpbGVOYW1lU3BsaXR0ZWQgPSBpbnB1dEZpbGVzW2ldLm5hbWUuc3BsaXQoJy4nKTtcbiAgICAgICAgbGV0IGZpbGVFeHQgPSBmaWxlTmFtZVNwbGl0dGVkW2ZpbGVOYW1lU3BsaXR0ZWQubGVuZ3RoIC0gMV0udG9Mb3dlckNhc2UoKTtcbiAgICAgICAgZXh0ZW5zaW9uc0FycmF5LnB1c2goZmlsZUV4dClcbiAgICB9XG4gICAgcmV0dXJuIGV4dGVuc2lvbnNBcnJheTtcbn1cblxuZnVuY3Rpb24gaXNDb3JyZWN0Rm9ybWF0KGV4dGVuc2lvbnMsIGFsbG93ZWRGaWxlcykge1xuICAgIGxldCBpc0V4dGVuc2lvbkFsbG93ZWQgPSBleHRlbnNpb25zLm1hcChleHQgPT4ge1xuICAgICAgICByZXR1cm4gYWxsb3dlZEZpbGVzLmluY2x1ZGVzKGV4dCk7XG4gICAgfSk7XG4gICAgcmV0dXJuIGlzRXh0ZW5zaW9uQWxsb3dlZDtcbn1cblxuZnVuY3Rpb24gYWRkQ29ycmVjdEZpbGVzVG9MaXN0KGlucHV0RmlsZXMsIGNvcnJlY3RJbWFnZXMpIHtcbiAgICBjb3JyZWN0SW1hZ2VzLmZvckVhY2goKGV4dCwgaSkgPT4ge1xuICAgICAgICBpZiAoZXh0KSB7XG4gICAgICAgICAgICBpbWFnZXNMaXN0LnB1c2goaW5wdXRGaWxlc1tpXSk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBhbGVydCgnV3JvbmcgZmlsZSBleHRlbnRpb24hJyk7XG4gICAgICAgIH1cbiAgICB9KTtcbn1cblxuZXhwb3J0IHsgZmlsZUltcG9ydCwgaW1hZ2VzTGlzdCB9O1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL21vZHVsZXMvZmlsZS1pbXBvcnRlci5qc1xuLy8gbW9kdWxlIGlkID0gMlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Iiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///2\n");

/***/ }),
/* 3 */
/*!********************************!*\
  !*** ./src/modules/gallery.js ***!
  \********************************/
/*! exports provided: renderGallery */
/*! exports used: renderGallery */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"a\", function() { return renderGallery; });\nfunction renderGallery(dropArea, imagesList, thumbWidth, thumbHeight) {\n    const thumbWH = { thumbWidth, thumbHeight };\n    clearGallery(dropArea);\n    let imgsUrl = createImgUrlArray(imagesList);\n    let promiseArr = imgsUrl.map(url => createImage(url));\n    Promise.all(promiseArr)\n        .then(imagesArr => {\n            let thumbnails = createThumbnails(imagesArr, thumbWH);\n            addThumbnailsToGallery(thumbnails, imagesArr, dropArea);\n        });\n}\n\nfunction clearGallery(dropArea) {\n    document.querySelector(dropArea).innerHTML = '';\n}\n\nfunction createImgUrlArray(imagesList) {\n    return imagesList.map(image => URL.createObjectURL(image))\n}\n\nfunction createImage(url) {\n    return new Promise(resolve => {\n        const listener = function (e) {\n            resolve(this);\n        }\n        const image = new Image();\n        image.src = url;\n        image.onload = listener;\n    });\n}\n\nfunction createThumbnails(imagesArr, thumbWH) {\n    let canvasStartPoints = checkProportions(imagesArr, thumbWH);\n    let { thumbWidth, thumbHeight } = thumbWH;\n    return imagesArr.map((image, index) => {\n        let { xStartPoint, yStartPoint, contentWidth, contentHeight } = canvasStartPoints[index];\n        let thumbnail = document.createElement('canvas');\n        thumbnail.width = thumbWidth;\n        thumbnail.height = thumbHeight;\n        let context = thumbnail.getContext('2d');\n        context.fillStyle = \"black\";\n        context.fillRect(0, 0, thumbWidth, thumbHeight);\n        context.drawImage(image, xStartPoint, yStartPoint, contentWidth, contentHeight);\n        return thumbnail;\n    })\n}\n\nfunction checkProportions(imagesArr, { thumbWidth, thumbHeight }) {\n    return imagesArr.map(image => {\n        let widthProportion = image.width / thumbWidth;\n        let heightProportion = image.height / thumbHeight;\n        let ratio = Math.max(widthProportion, heightProportion);\n        let contentWidth = image.width / ratio;\n        let contentHeight = image.height / ratio;\n        let xStartPoint = (thumbWidth - contentWidth) / 2;\n        let yStartPoint = (thumbHeight - contentHeight) / 2;\n        return { xStartPoint, yStartPoint, contentWidth, contentHeight };\n    });\n}\n\nfunction addThumbnailsToGallery(thumbnails, imagesArr, dropArea) {\n    let galleryContainer = document.querySelector(dropArea);\n    thumbnails.forEach((thumbnail, index) => {\n        galleryContainer.appendChild(thumbnail);\n        thumbnail.addEventListener('click', () => renderFullSizeImage(thumbnail, imagesArr[index]), false);\n    })\n    return galleryContainer;\n}\n\nfunction renderFullSizeImage(thumbnail, image) {\n    let newWindow = window.open();\n    let canvas = newWindow.document.createElement('canvas');\n    let context = canvas.getContext('2d');\n    canvas.width = image.width;\n    canvas.height = image.height;\n    context.drawImage(image, 0, 0, image.width, image.height);\n    newWindow.document.body.appendChild(canvas);\n}\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMy5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9tb2R1bGVzL2dhbGxlcnkuanM/MDUxMSJdLCJzb3VyY2VzQ29udGVudCI6WyJmdW5jdGlvbiByZW5kZXJHYWxsZXJ5KGRyb3BBcmVhLCBpbWFnZXNMaXN0LCB0aHVtYldpZHRoLCB0aHVtYkhlaWdodCkge1xuICAgIGNvbnN0IHRodW1iV0ggPSB7IHRodW1iV2lkdGgsIHRodW1iSGVpZ2h0IH07XG4gICAgY2xlYXJHYWxsZXJ5KGRyb3BBcmVhKTtcbiAgICBsZXQgaW1nc1VybCA9IGNyZWF0ZUltZ1VybEFycmF5KGltYWdlc0xpc3QpO1xuICAgIGxldCBwcm9taXNlQXJyID0gaW1nc1VybC5tYXAodXJsID0+IGNyZWF0ZUltYWdlKHVybCkpO1xuICAgIFByb21pc2UuYWxsKHByb21pc2VBcnIpXG4gICAgICAgIC50aGVuKGltYWdlc0FyciA9PiB7XG4gICAgICAgICAgICBsZXQgdGh1bWJuYWlscyA9IGNyZWF0ZVRodW1ibmFpbHMoaW1hZ2VzQXJyLCB0aHVtYldIKTtcbiAgICAgICAgICAgIGFkZFRodW1ibmFpbHNUb0dhbGxlcnkodGh1bWJuYWlscywgaW1hZ2VzQXJyLCBkcm9wQXJlYSk7XG4gICAgICAgIH0pO1xufVxuXG5mdW5jdGlvbiBjbGVhckdhbGxlcnkoZHJvcEFyZWEpIHtcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGRyb3BBcmVhKS5pbm5lckhUTUwgPSAnJztcbn1cblxuZnVuY3Rpb24gY3JlYXRlSW1nVXJsQXJyYXkoaW1hZ2VzTGlzdCkge1xuICAgIHJldHVybiBpbWFnZXNMaXN0Lm1hcChpbWFnZSA9PiBVUkwuY3JlYXRlT2JqZWN0VVJMKGltYWdlKSlcbn1cblxuZnVuY3Rpb24gY3JlYXRlSW1hZ2UodXJsKSB7XG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKHJlc29sdmUgPT4ge1xuICAgICAgICBjb25zdCBsaXN0ZW5lciA9IGZ1bmN0aW9uIChlKSB7XG4gICAgICAgICAgICByZXNvbHZlKHRoaXMpO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IGltYWdlID0gbmV3IEltYWdlKCk7XG4gICAgICAgIGltYWdlLnNyYyA9IHVybDtcbiAgICAgICAgaW1hZ2Uub25sb2FkID0gbGlzdGVuZXI7XG4gICAgfSk7XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZVRodW1ibmFpbHMoaW1hZ2VzQXJyLCB0aHVtYldIKSB7XG4gICAgbGV0IGNhbnZhc1N0YXJ0UG9pbnRzID0gY2hlY2tQcm9wb3J0aW9ucyhpbWFnZXNBcnIsIHRodW1iV0gpO1xuICAgIGxldCB7IHRodW1iV2lkdGgsIHRodW1iSGVpZ2h0IH0gPSB0aHVtYldIO1xuICAgIHJldHVybiBpbWFnZXNBcnIubWFwKChpbWFnZSwgaW5kZXgpID0+IHtcbiAgICAgICAgbGV0IHsgeFN0YXJ0UG9pbnQsIHlTdGFydFBvaW50LCBjb250ZW50V2lkdGgsIGNvbnRlbnRIZWlnaHQgfSA9IGNhbnZhc1N0YXJ0UG9pbnRzW2luZGV4XTtcbiAgICAgICAgbGV0IHRodW1ibmFpbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2NhbnZhcycpO1xuICAgICAgICB0aHVtYm5haWwud2lkdGggPSB0aHVtYldpZHRoO1xuICAgICAgICB0aHVtYm5haWwuaGVpZ2h0ID0gdGh1bWJIZWlnaHQ7XG4gICAgICAgIGxldCBjb250ZXh0ID0gdGh1bWJuYWlsLmdldENvbnRleHQoJzJkJyk7XG4gICAgICAgIGNvbnRleHQuZmlsbFN0eWxlID0gXCJibGFja1wiO1xuICAgICAgICBjb250ZXh0LmZpbGxSZWN0KDAsIDAsIHRodW1iV2lkdGgsIHRodW1iSGVpZ2h0KTtcbiAgICAgICAgY29udGV4dC5kcmF3SW1hZ2UoaW1hZ2UsIHhTdGFydFBvaW50LCB5U3RhcnRQb2ludCwgY29udGVudFdpZHRoLCBjb250ZW50SGVpZ2h0KTtcbiAgICAgICAgcmV0dXJuIHRodW1ibmFpbDtcbiAgICB9KVxufVxuXG5mdW5jdGlvbiBjaGVja1Byb3BvcnRpb25zKGltYWdlc0FyciwgeyB0aHVtYldpZHRoLCB0aHVtYkhlaWdodCB9KSB7XG4gICAgcmV0dXJuIGltYWdlc0Fyci5tYXAoaW1hZ2UgPT4ge1xuICAgICAgICBsZXQgd2lkdGhQcm9wb3J0aW9uID0gaW1hZ2Uud2lkdGggLyB0aHVtYldpZHRoO1xuICAgICAgICBsZXQgaGVpZ2h0UHJvcG9ydGlvbiA9IGltYWdlLmhlaWdodCAvIHRodW1iSGVpZ2h0O1xuICAgICAgICBsZXQgcmF0aW8gPSBNYXRoLm1heCh3aWR0aFByb3BvcnRpb24sIGhlaWdodFByb3BvcnRpb24pO1xuICAgICAgICBsZXQgY29udGVudFdpZHRoID0gaW1hZ2Uud2lkdGggLyByYXRpbztcbiAgICAgICAgbGV0IGNvbnRlbnRIZWlnaHQgPSBpbWFnZS5oZWlnaHQgLyByYXRpbztcbiAgICAgICAgbGV0IHhTdGFydFBvaW50ID0gKHRodW1iV2lkdGggLSBjb250ZW50V2lkdGgpIC8gMjtcbiAgICAgICAgbGV0IHlTdGFydFBvaW50ID0gKHRodW1iSGVpZ2h0IC0gY29udGVudEhlaWdodCkgLyAyO1xuICAgICAgICByZXR1cm4geyB4U3RhcnRQb2ludCwgeVN0YXJ0UG9pbnQsIGNvbnRlbnRXaWR0aCwgY29udGVudEhlaWdodCB9O1xuICAgIH0pO1xufVxuXG5mdW5jdGlvbiBhZGRUaHVtYm5haWxzVG9HYWxsZXJ5KHRodW1ibmFpbHMsIGltYWdlc0FyciwgZHJvcEFyZWEpIHtcbiAgICBsZXQgZ2FsbGVyeUNvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoZHJvcEFyZWEpO1xuICAgIHRodW1ibmFpbHMuZm9yRWFjaCgodGh1bWJuYWlsLCBpbmRleCkgPT4ge1xuICAgICAgICBnYWxsZXJ5Q29udGFpbmVyLmFwcGVuZENoaWxkKHRodW1ibmFpbCk7XG4gICAgICAgIHRodW1ibmFpbC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHJlbmRlckZ1bGxTaXplSW1hZ2UodGh1bWJuYWlsLCBpbWFnZXNBcnJbaW5kZXhdKSwgZmFsc2UpO1xuICAgIH0pXG4gICAgcmV0dXJuIGdhbGxlcnlDb250YWluZXI7XG59XG5cbmZ1bmN0aW9uIHJlbmRlckZ1bGxTaXplSW1hZ2UodGh1bWJuYWlsLCBpbWFnZSkge1xuICAgIGxldCBuZXdXaW5kb3cgPSB3aW5kb3cub3BlbigpO1xuICAgIGxldCBjYW52YXMgPSBuZXdXaW5kb3cuZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnY2FudmFzJyk7XG4gICAgbGV0IGNvbnRleHQgPSBjYW52YXMuZ2V0Q29udGV4dCgnMmQnKTtcbiAgICBjYW52YXMud2lkdGggPSBpbWFnZS53aWR0aDtcbiAgICBjYW52YXMuaGVpZ2h0ID0gaW1hZ2UuaGVpZ2h0O1xuICAgIGNvbnRleHQuZHJhd0ltYWdlKGltYWdlLCAwLCAwLCBpbWFnZS53aWR0aCwgaW1hZ2UuaGVpZ2h0KTtcbiAgICBuZXdXaW5kb3cuZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChjYW52YXMpO1xufVxuXG5leHBvcnQgeyByZW5kZXJHYWxsZXJ5IH07XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvbW9kdWxlcy9nYWxsZXJ5LmpzXG4vLyBtb2R1bGUgaWQgPSAzXG4vLyBtb2R1bGUgY2h1bmtzID0gMCJdLCJtYXBwaW5ncyI6IkFBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTsiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///3\n");

/***/ })
/******/ ]);