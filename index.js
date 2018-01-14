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
eval("/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"a\", function() { return init; });\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__file_importer__ = __webpack_require__(/*! ./file-importer */ 2);\n/*\n\nimageProcessor\n\n*   modul odpowiadajacy za spiecie wszystkich modulow\n*   pozostale moduly sa od siebie calkowicie niezalezne\n*   ma miec tylko jedna metode udostepniana na zewnatrz - \"init\"\n*   metoda 'init' ktorej podajesz konfig ustawia cala aplikacje\n*   tylko to ma byc metoda wystawiana na zewnatrz i uzywana przez kontroler.\n\nimageProcessor rowniez odpowiada za przypisanie i odpiecie eventListenerow !!!!!!\n\n*/\n\n\n\nfunction attachInput(input, allowedFiles) {\n    let inputElement = document.querySelector(input);\n    inputElement.addEventListener('change', e => Object(__WEBPACK_IMPORTED_MODULE_0__file_importer__[\"a\" /* fileImport */])(e.target.files, allowedFiles), false);\n    return inputElement;\n}\n\nfunction prevent(e) {\n    e.stopPropagation();\n    e.preventDefault();\n}\n\nfunction onDrop(e, allowedFiles) {\n    e.stopPropagation();\n    e.preventDefault();\n    let files = e.dataTransfer.files;\n    console.log(files);\n    Object(__WEBPACK_IMPORTED_MODULE_0__file_importer__[\"a\" /* fileImport */])(files, allowedFiles);\n}\n\nfunction attachDragAndDrop(dropArea, allowedFiles) {\n    let dropAreaElement = document.querySelector(dropArea);\n    dropAreaElement.addEventListener('dragover', prevent, false);\n    dropAreaElement.addEventListener('dragenter', prevent, false);\n    dropAreaElement.addEventListener('drop', e => onDrop(e, allowedFiles), false);\n}\n\nconst init = ({ thumbWidth, thumbHeight, dropArea, input, allowedFiles }) => {\n    attachInput(input, allowedFiles);\n    attachDragAndDrop(dropArea, allowedFiles);\n}\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMS5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9tb2R1bGVzL2ltYWdlLXByb2Nlc3Nvci5qcz84MTJkIl0sInNvdXJjZXNDb250ZW50IjpbIi8qXG5cbmltYWdlUHJvY2Vzc29yXG5cbiogICBtb2R1bCBvZHBvd2lhZGFqYWN5IHphIHNwaWVjaWUgd3N6eXN0a2ljaCBtb2R1bG93XG4qICAgcG96b3N0YWxlIG1vZHVseSBzYSBvZCBzaWViaWUgY2Fsa293aWNpZSBuaWV6YWxlem5lXG4qICAgbWEgbWllYyB0eWxrbyBqZWRuYSBtZXRvZGUgdWRvc3RlcG5pYW5hIG5hIHpld25hdHJ6IC0gXCJpbml0XCJcbiogICBtZXRvZGEgJ2luaXQnIGt0b3JlaiBwb2RhamVzeiBrb25maWcgdXN0YXdpYSBjYWxhIGFwbGlrYWNqZVxuKiAgIHR5bGtvIHRvIG1hIGJ5YyBtZXRvZGEgd3lzdGF3aWFuYSBuYSB6ZXduYXRyeiBpIHV6eXdhbmEgcHJ6ZXoga29udHJvbGVyLlxuXG5pbWFnZVByb2Nlc3NvciByb3duaWV6IG9kcG93aWFkYSB6YSBwcnp5cGlzYW5pZSBpIG9kcGllY2llIGV2ZW50TGlzdGVuZXJvdyAhISEhISFcblxuKi9cblxuaW1wb3J0IHsgZmlsZUltcG9ydCwgaW1hZ2VzTGlzdCB9IGZyb20gJy4vZmlsZS1pbXBvcnRlcic7XG5cbmZ1bmN0aW9uIGF0dGFjaElucHV0KGlucHV0LCBhbGxvd2VkRmlsZXMpIHtcbiAgICBsZXQgaW5wdXRFbGVtZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihpbnB1dCk7XG4gICAgaW5wdXRFbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsIGUgPT4gZmlsZUltcG9ydChlLnRhcmdldC5maWxlcywgYWxsb3dlZEZpbGVzKSwgZmFsc2UpO1xuICAgIHJldHVybiBpbnB1dEVsZW1lbnQ7XG59XG5cbmZ1bmN0aW9uIHByZXZlbnQoZSkge1xuICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xufVxuXG5mdW5jdGlvbiBvbkRyb3AoZSwgYWxsb3dlZEZpbGVzKSB7XG4gICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgbGV0IGZpbGVzID0gZS5kYXRhVHJhbnNmZXIuZmlsZXM7XG4gICAgY29uc29sZS5sb2coZmlsZXMpO1xuICAgIGZpbGVJbXBvcnQoZmlsZXMsIGFsbG93ZWRGaWxlcyk7XG59XG5cbmZ1bmN0aW9uIGF0dGFjaERyYWdBbmREcm9wKGRyb3BBcmVhLCBhbGxvd2VkRmlsZXMpIHtcbiAgICBsZXQgZHJvcEFyZWFFbGVtZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcihkcm9wQXJlYSk7XG4gICAgZHJvcEFyZWFFbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2RyYWdvdmVyJywgcHJldmVudCwgZmFsc2UpO1xuICAgIGRyb3BBcmVhRWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCdkcmFnZW50ZXInLCBwcmV2ZW50LCBmYWxzZSk7XG4gICAgZHJvcEFyZWFFbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2Ryb3AnLCBlID0+IG9uRHJvcChlLCBhbGxvd2VkRmlsZXMpLCBmYWxzZSk7XG59XG5cbmNvbnN0IGluaXQgPSAoeyB0aHVtYldpZHRoLCB0aHVtYkhlaWdodCwgZHJvcEFyZWEsIGlucHV0LCBhbGxvd2VkRmlsZXMgfSkgPT4ge1xuICAgIGF0dGFjaElucHV0KGlucHV0LCBhbGxvd2VkRmlsZXMpO1xuICAgIGF0dGFjaERyYWdBbmREcm9wKGRyb3BBcmVhLCBhbGxvd2VkRmlsZXMpO1xufVxuXG5leHBvcnQgeyBpbml0IH07XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvbW9kdWxlcy9pbWFnZS1wcm9jZXNzb3IuanNcbi8vIG1vZHVsZSBpZCA9IDFcbi8vIG1vZHVsZSBjaHVua3MgPSAwIl0sIm1hcHBpbmdzIjoiQUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTsiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///1\n");

/***/ }),
/* 2 */
/*!**************************************!*\
  !*** ./src/modules/file-importer.js ***!
  \**************************************/
/*! exports provided: fileImport, imagesList */
/*! exports used: fileImport */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"a\", function() { return fileImport; });\n/* unused harmony export imagesList */\n/*\n\nfileModule\n\n*   modul odpowiadajacy za operacje na plikach\n*   (sprawdzenie czy plik ma poprawny format, zaladowanie zawartosci pliku, etc.)\n\n*/\n\nlet imagesList = [];\n\nfunction getExtension(inputFiles) {\n    let extensionsArray = [];\n    for (let i = 0; i < inputFiles.length; i++) {\n        let fileNameSplitted = inputFiles[i].name.split('.');\n        let fileExt = fileNameSplitted[fileNameSplitted.length - 1].toLowerCase();\n        extensionsArray.push(fileExt)\n    }\n    return extensionsArray;\n}\n\nfunction isCorrectImage(extensions, allowedFiles) {\n    let isExtensionAllowed = extensions.map(ext => {\n        return allowedFiles.includes(ext);\n    });  \n    return isExtensionAllowed;\n}\n\nfunction addCorrectFilesToList(inputFiles, correctImages) {\n    correctImages.forEach((correctExt, index)=>{\n        if(correctExt){\n            imagesList.push(inputFiles[index]);\n            console.log('%c Correct extention!', 'background: green;');\n        }\n        else {\n            console.log('%c Wrong file extention!', 'background: darkred;');\n        }\n    });\n}\n\nfunction fileImport(inputFiles, allowedFiles) {\n    let extensions = getExtension(inputFiles);\n    let correctImages = isCorrectImage(extensions, allowedFiles);\n    addCorrectFilesToList(inputFiles, correctImages);\n}\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMi5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9tb2R1bGVzL2ZpbGUtaW1wb3J0ZXIuanM/OWNhMCJdLCJzb3VyY2VzQ29udGVudCI6WyIvKlxuXG5maWxlTW9kdWxlXG5cbiogICBtb2R1bCBvZHBvd2lhZGFqYWN5IHphIG9wZXJhY2plIG5hIHBsaWthY2hcbiogICAoc3ByYXdkemVuaWUgY3p5IHBsaWsgbWEgcG9wcmF3bnkgZm9ybWF0LCB6YWxhZG93YW5pZSB6YXdhcnRvc2NpIHBsaWt1LCBldGMuKVxuXG4qL1xuXG5sZXQgaW1hZ2VzTGlzdCA9IFtdO1xuXG5mdW5jdGlvbiBnZXRFeHRlbnNpb24oaW5wdXRGaWxlcykge1xuICAgIGxldCBleHRlbnNpb25zQXJyYXkgPSBbXTtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGlucHV0RmlsZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgbGV0IGZpbGVOYW1lU3BsaXR0ZWQgPSBpbnB1dEZpbGVzW2ldLm5hbWUuc3BsaXQoJy4nKTtcbiAgICAgICAgbGV0IGZpbGVFeHQgPSBmaWxlTmFtZVNwbGl0dGVkW2ZpbGVOYW1lU3BsaXR0ZWQubGVuZ3RoIC0gMV0udG9Mb3dlckNhc2UoKTtcbiAgICAgICAgZXh0ZW5zaW9uc0FycmF5LnB1c2goZmlsZUV4dClcbiAgICB9XG4gICAgcmV0dXJuIGV4dGVuc2lvbnNBcnJheTtcbn1cblxuZnVuY3Rpb24gaXNDb3JyZWN0SW1hZ2UoZXh0ZW5zaW9ucywgYWxsb3dlZEZpbGVzKSB7XG4gICAgbGV0IGlzRXh0ZW5zaW9uQWxsb3dlZCA9IGV4dGVuc2lvbnMubWFwKGV4dCA9PiB7XG4gICAgICAgIHJldHVybiBhbGxvd2VkRmlsZXMuaW5jbHVkZXMoZXh0KTtcbiAgICB9KTsgIFxuICAgIHJldHVybiBpc0V4dGVuc2lvbkFsbG93ZWQ7XG59XG5cbmZ1bmN0aW9uIGFkZENvcnJlY3RGaWxlc1RvTGlzdChpbnB1dEZpbGVzLCBjb3JyZWN0SW1hZ2VzKSB7XG4gICAgY29ycmVjdEltYWdlcy5mb3JFYWNoKChjb3JyZWN0RXh0LCBpbmRleCk9PntcbiAgICAgICAgaWYoY29ycmVjdEV4dCl7XG4gICAgICAgICAgICBpbWFnZXNMaXN0LnB1c2goaW5wdXRGaWxlc1tpbmRleF0pO1xuICAgICAgICAgICAgY29uc29sZS5sb2coJyVjIENvcnJlY3QgZXh0ZW50aW9uIScsICdiYWNrZ3JvdW5kOiBncmVlbjsnKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCclYyBXcm9uZyBmaWxlIGV4dGVudGlvbiEnLCAnYmFja2dyb3VuZDogZGFya3JlZDsnKTtcbiAgICAgICAgfVxuICAgIH0pO1xufVxuXG5mdW5jdGlvbiBmaWxlSW1wb3J0KGlucHV0RmlsZXMsIGFsbG93ZWRGaWxlcykge1xuICAgIGxldCBleHRlbnNpb25zID0gZ2V0RXh0ZW5zaW9uKGlucHV0RmlsZXMpO1xuICAgIGxldCBjb3JyZWN0SW1hZ2VzID0gaXNDb3JyZWN0SW1hZ2UoZXh0ZW5zaW9ucywgYWxsb3dlZEZpbGVzKTtcbiAgICBhZGRDb3JyZWN0RmlsZXNUb0xpc3QoaW5wdXRGaWxlcywgY29ycmVjdEltYWdlcyk7XG59XG5cbmV4cG9ydCB7IGZpbGVJbXBvcnQsIGltYWdlc0xpc3QgfTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9tb2R1bGVzL2ZpbGUtaW1wb3J0ZXIuanNcbi8vIG1vZHVsZSBpZCA9IDJcbi8vIG1vZHVsZSBjaHVua3MgPSAwIl0sIm1hcHBpbmdzIjoiQUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Iiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///2\n");

/***/ })
/******/ ]);