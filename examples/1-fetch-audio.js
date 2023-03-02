const { resolve } = require('path');
const ffmpeg = require('fluent-ffmpeg');

const { execFfmpegCmd } = require('../lib/utils');

const input = resolve(__dirname, '../sources/long-video.mp4');
const output = resolve(__dirname, '../outputs/1-audio.mp3');

const cmd = ffmpeg(input);

cmd
    .noVideo()
    // .duration(3)
    // .setStartTime('00:00:30')
    .output(output)
    .outputFormat('mp3')
    .audioBitrate('256k') // About audio bitrates: https://soundbridge.io/wp-content/uploads/2015/10/File-Types.-Pic-21.png
    .audioCodec('libmp3lame');

execFfmpegCmd(cmd)
    .then(() => console.log('Done!'))
    .catch(() => console.error('Error: ', err));