import {init} from './modules/image-processor';

init({
  thumbWidth: 100,
  thumbHeight: 250,
  dropArea: '#dropArea',
  input: '#fieldInput',
  allowedFiles: ['png']
});

