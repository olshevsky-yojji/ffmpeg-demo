const { resolve } = require('path');
const ffmpeg = require('fluent-ffmpeg');

const { execFfmpegCmd } = require('../lib/utils');

const input = resolve(__dirname, '../sources/ducks.mp4');
const output = resolve(__dirname, '../outputs/11-mirror.mp4');

const cmd = ffmpeg(input);

cmd
    .complexFilter('hflip')
    .save(output);

execFfmpegCmd(cmd, console.log)
    .then(() => console.log('Done!'))
    .catch(() => console.error('Error: ', err));