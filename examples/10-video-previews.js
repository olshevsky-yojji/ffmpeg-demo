const { resolve } = require('path');
const img = require('simple-thumbnail');
const gif = require('ffmpeg-generate-video-preview');

const input = resolve(__dirname, '../sources/ducks.mp4')
const outputGif = resolve(__dirname, '../outputs/10-video-preview.gif');
const outputImg = resolve(__dirname, '../outputs/10-image-preview.png');

gif({ input, output: outputGif })
    .then(() => console.log('[Gif]: Done'))
    .catch(console.error);

img(input, outputImg, '?x200')
    .then(() => console.log('[Img]: Done'))
    .catch(console.error);