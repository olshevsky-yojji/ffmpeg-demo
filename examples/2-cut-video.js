const { resolve } = require('path');
const ffmpeg = require('fluent-ffmpeg');

const { execFfmpegCmd } = require('../lib/utils');

const input = resolve(__dirname, '../sources/ducks.mp4');
const output = resolve(__dirname, '../outputs/2-cut-video.mp4');

const cmd = ffmpeg(input);

cmd
    .setDuration(3) // Seconds
    .setStartTime('00:00:02') // If you need specific video fragment
    .output(output); 

execFfmpegCmd(cmd)
    .then(() => console.log('Done!'))
    .catch(() => console.error('Error: ', err));