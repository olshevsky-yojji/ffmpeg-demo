const { resolve } = require('path');
const ffmpeg = require('fluent-ffmpeg');

const { execFfmpegCmd } = require('../lib/utils');

const input = resolve(__dirname, '../sources/fails.mp4');
const output = resolve(__dirname, '../outputs/3-1-scale.mp4');

const cmd = ffmpeg(input);

cmd
    .outputFPS(60)
    .size('1920x1080') // make sure that video has correct aspect-ratio(in this case - 16:9)
    .audioCodec('eac3')
    .videoCodec('libx264')
    .output(output);

execFfmpegCmd(cmd, console.log)
    .then(() => console.log('Done!'))
    .catch(() => console.error('Error: ', err));