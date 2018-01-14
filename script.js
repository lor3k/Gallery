/* first attempt */
function Gallery() {
    this.board = document.createElement('div')

    this.galleryContainer = document.createElement('div')
    this.input = document.createElement('input')
    this.label = document.createElement('label')

    document.body.appendChild(this.board)
    this.board.appendChild(this.input)
    this.board.appendChild(this.label)
    this.board.appendChild(this.galleryContainer)

    this.input.setAttribute('id', 'input')
    this.input.setAttribute('type', 'file')
    this.input.setAttribute('accept', 'image/*')
    this.input.setAttribute('name', 'fileAdd')
    this.input.setAttribute('type', 'file')
    this.input.setAttribute('multiple', '')

    this.label.setAttribute('for', 'input')
    this.label.innerText = 'Add new image or drag & drop...'

    this.imagesList = []
    this.input.addEventListener('change', () => this.render(), false);
    document.body.addEventListener('dragenter', e => this.prevent(e), false);
    document.body.addEventListener('dragover', e => this.prevent(e), false);
    document.body.addEventListener('drop', e => { this.prevent(e); this.drop(e) }, false);
}

Gallery.prototype.render = function (files = this.input.files) {
    for (let i = 0; i < files.length; i++)
        this.imagesList.push(files[i])

    this.galleryContainer.innerHTML = ''
    this.imagesList.forEach(function (el, i, arr) {
        let thumbnail = document.createElement('canvas')
        thumbnail.style.margin = '5px'
        let contextThumb = thumbnail.getContext('2d')
        let img = new Image
        img.src = URL.createObjectURL(el)
        contextThumb.canvas.width = 150
        contextThumb.canvas.height = 150
        img.onload = () => { contextThumb.drawImage(img, 0, 0, 150, 150) }
        this.galleryContainer.appendChild(thumbnail)
        thumbnail.addEventListener('click', addImageToGallery, false)
        thumbnail.addEventListener('contextmenu', e => {
            this.prevent(e); this.removeFromImagesList(i); thumbnail.remove()}, false)
        function addImageToGallery() {
            let newWindow = window.open()
            let image = newWindow.document.createElement('canvas')
            let contextImage = image.getContext('2d')
            contextImage.canvas.width = img.width
            contextImage.canvas.height = img.height
            contextImage.drawImage(img, 0, 0)
            newWindow.document.body.appendChild(image)
        }
    }, this)
}

Gallery.prototype.prevent = function (e) {
    e.stopPropagation()
    e.preventDefault()
}

Gallery.prototype.drop = function (e) {
    let data = e.dataTransfer
    let files = data.files
    this.render(files)
}

Gallery.prototype.removeFromImagesList = function(i){
    this.imagesList = this.imagesList.slice(0,i).concat(this.imagesList.slice(i+1))
    console.log(this.imagesList)
}
