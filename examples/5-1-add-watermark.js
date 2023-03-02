// https://www.bannerbear.com/blog/how-to-add-watermark-to-videos-using-ffmpeg/

const { resolve } = require('path');
const ffmpeg = require('fluent-ffmpeg');

const { execFfmpegCmd } = require('../lib/utils');

const input = resolve(__dirname, '../sources/ducks.mp4');
const output = resolve(__dirname, '../outputs/5-watermark.mp4');
const watermark = resolve(__dirname, '../sources/watermark.png');

const cmd = ffmpeg(input);

cmd
    .input(watermark)
    .complexFilter([
        'overlay=W-w-15:H-w-15'
        // 'overlay=(W-w)/2:(H-h)/2', // place watermark to 'center-center'
    ],
        
    )
    .output(output);

execFfmpegCmd(cmd)
    .then(() => console.log('Done!'))
    .catch(() => console.error('Error: ', err));