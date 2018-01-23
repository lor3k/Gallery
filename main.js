(() => {

	const galleryModule = () => {

		const renderGallery = (dropArea, imagesList, thumbWidth, thumbHeight) => {
			const thumbWH = { thumbWidth, thumbHeight };
			clearGallery(dropArea);
			const imgsUrl = createImgUrlArray(imagesList);
			const promiseArr = imgsUrl.map(url => createImage(url));
			Promise.all(promiseArr).then(imagesArr => {
				const thumbnails = createThumbnails(imagesArr, thumbWH);
				addThumbnailsToGallery(thumbnails, imagesArr, dropArea);
			});
		}

		const clearGallery = dropArea => document.querySelector(dropArea).innerHTML = '';

		const createImgUrlArray = imagesList => imagesList.map(image => URL.createObjectURL(image));

		const createImage = url => {
			return new Promise(resolve => {
				const listener = function (e) {
					resolve(this);
				}
				const image = new Image();
				image.src = url;
				image.onload = listener;
			});
		}

		const createThumbnails = (imagesArr, thumbWH) => {
			const canvasStartPoints = checkProportions(imagesArr, thumbWH);
			const { thumbWidth, thumbHeight } = thumbWH;
			return imagesArr.map((image, index) => {
				const { xStartPoint, yStartPoint, contentWidth, contentHeight } = canvasStartPoints[index];
				const thumbnail = document.createElement('canvas');
				thumbnail.width = thumbWidth;
				thumbnail.height = thumbHeight;
				const context = thumbnail.getContext('2d');
				context.fillStyle = "black";
				context.fillRect(0, 0, thumbWidth, thumbHeight);
				context.drawImage(image, xStartPoint, yStartPoint, contentWidth, contentHeight);
				return thumbnail;
			});
		}

		const checkProportions = (imagesArr, { thumbWidth, thumbHeight }) => {
			return imagesArr.map(image => {
				const widthProportion = image.width / thumbWidth;
				const heightProportion = image.height / thumbHeight;
				const ratio = Math.max(widthProportion, heightProportion);
				const contentWidth = image.width / ratio;
				const contentHeight = image.height / ratio;
				const xStartPoint = (thumbWidth - contentWidth) / 2;
				const yStartPoint = (thumbHeight - contentHeight) / 2;
				return { xStartPoint, yStartPoint, contentWidth, contentHeight };
			});
		}

		const addThumbnailsToGallery = (thumbnails, imagesArr, dropArea) => {
			const galleryContainer = document.querySelector(dropArea);
			thumbnails.forEach((thumbnail, index) => {
				galleryContainer.appendChild(thumbnail);
				thumbnail.addEventListener('click', () => renderFullSizeImage(thumbnail, imagesArr[index]), false);
			});
			return galleryContainer;
		}

		const renderFullSizeImage = (thumbnail, image) => {
			const newWindow = window.open();
			const canvas = newWindow.document.createElement('canvas');
			const context = canvas.getContext('2d');
			canvas.width = image.width;
			canvas.height = image.height;
			context.drawImage(image, 0, 0, image.width, image.height);
			newWindow.document.body.appendChild(canvas);
		}

		return { renderGallery };

	};



	const fileImporterModule = () => {

		const imagesList = [];

		const fileImport = (inputFiles, allowedFiles) => {
			const extensions = getExtension(inputFiles);
			const correctImages = isCorrectFormat(extensions, allowedFiles);
			addCorrectFilesToList(inputFiles, correctImages);
		}

		const getExtension = inputFiles => {
			const extensionsArray = [];
			for (let i = 0; i < inputFiles.length; i++) {
				const fileNameSplitted = inputFiles[i].name.split('.');
				const fileExt = fileNameSplitted[fileNameSplitted.length - 1].toLowerCase();
				extensionsArray.push(fileExt);
			}
			return extensionsArray;
		}

		const isCorrectFormat = (extensions, allowedFiles) => (
			extensions.map(ext => allowedFiles.includes(ext))
		)

		const addCorrectFilesToList = (inputFiles, correctImages) => {
			correctImages.forEach((ext, i) =>
				ext ? imagesList.push(inputFiles[i]) : alert('Wrong file extention!')
			);
		}

		return { fileImport, imagesList };

	};



	const imageProcessorModule = ({ renderGallery }, { fileImport, imagesList }) => {

		const attachInput = config => {
			const { input } = config;
			const inputElement = document.querySelector(input);
			inputElement.addEventListener('change', e => fileImportAndRender(e, config), false);
			return inputElement;
		}

		const fileImportAndRender = (e, config) => {
			const { thumbWidth, thumbHeight, dropArea, input, allowedFiles } = config;
			fileImport(e.target.files, allowedFiles);
			renderGallery(dropArea, imagesList, thumbWidth, thumbHeight);
		}

		const attachDragAndDrop = config => {
			const dropAreaElement = document.querySelector(config.dropArea);
			dropAreaElement.addEventListener('dragover', prevent, false);
			dropAreaElement.addEventListener('dragenter', prevent, false);
			dropAreaElement.addEventListener('drop', e => onDrop(e, config), false);
		}

		const prevent = e => {
			e.stopPropagation();
			e.preventDefault();
		}

		const onDrop = (e, { thumbWidth, thumbHeight, dropArea, allowedFiles }) => {
			e.stopPropagation();
			e.preventDefault();
			const files = e.dataTransfer.files;
			fileImport(files, allowedFiles);
			renderGallery(dropArea, imagesList, thumbWidth, thumbHeight);
		}

		const init = ({ thumbWidth, thumbHeight, dropArea, input, allowedFiles }) => {
			const config = { thumbWidth, thumbHeight, dropArea, input, allowedFiles };
			attachInput(config);
			attachDragAndDrop(config);
		}

		return { init };

	};



	imageProcessorModule(galleryModule(), fileImporterModule())
		.init({
			thumbWidth: 150,
			thumbHeight: 100,
			dropArea: '#dropArea',
			input: '#fieldInput',
			allowedFiles: ['png', 'jpg']
		});

})();