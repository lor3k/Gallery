import {init} from './modules/image-processor';

init({
  thumbWidth: 150,
  thumbHeight: 100,
  dropArea: '#dropArea',
  input: '#fieldInput',
  allowedFiles: ['png','jpg']
});

