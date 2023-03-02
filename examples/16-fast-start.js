// https://www.videoconverterfactory.com/tips/mp4-fast-start.html

const { resolve } = require('path');
const ffmpeg = require('fluent-ffmpeg');

const { execFfmpegCmd } = require('../lib/utils');

const video = resolve(__dirname, '../sources/long-video.mp4');
const output = resolve(__dirname, '../outputs/16-faststart.mp4');

const cmd = ffmpeg(video)
    .input(video)
    .videoCodec('libx264')
    .withAudioCodec('aac')
    .outputOptions("-movflags +faststart")
    .output(output);

execFfmpegCmd(cmd, console.log)
    .then(() => console.log('Done!'))
    .catch(() => console.error('Error: ', err));