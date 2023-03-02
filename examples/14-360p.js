const { resolve } = require('path');
const ffmpeg = require('fluent-ffmpeg');

const { execFfmpegCmd } = require('../lib/utils');

const output = resolve(__dirname, '../outputs/14-360p.mp4');
const input = resolve(__dirname, '../outputs/4-background.mp4');

const cmd = ffmpeg(input);

cmd
    .withSize('640x360')
    .videoCodec('libx264')
    .audioCodec('aac')
    .save(output);

execFfmpegCmd(cmd, console.log)
    .then(() => console.log('Done!'))
    .catch(() => console.error('Error: ', err));