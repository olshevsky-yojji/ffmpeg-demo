const { resolve } = require('path');
const ffmpeg = require('fluent-ffmpeg');

const { execFfmpegCmd } = require('../lib/utils');

const input = resolve(__dirname, '../sources/fails.mp4');
const output = resolve(__dirname, '../outputs/13-webm.webm');

const cmd = ffmpeg(input);

cmd
    .videoCodec('libvpx-vp9')
    .audioBitrate('128k')
    .audioCodec('libopus')
    .save(output);

execFfmpegCmd(cmd, console.log)
    .then(() => console.log('Done!'))
    .catch(() => console.error('Error: ', err));