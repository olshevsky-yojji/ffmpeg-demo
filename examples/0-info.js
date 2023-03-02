const { resolve } = require('path');
const { getDuration, getFileInfo } = require('../lib/utils');

const input1 = resolve(__dirname, '../sources/long-video.mp4');
const input2 = resolve(__dirname, '../sources/long-video.mp4');
const input3 = resolve(__dirname, '../outputs/1-audio.mp3');

// getDuration(input1)
//     .then(console.log)
//     .catch(console.error);

getFileInfo(input1)
    .then(data => console.log(JSON.stringify(data)))
    .catch(console.error);