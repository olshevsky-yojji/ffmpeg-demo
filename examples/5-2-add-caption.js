const { resolve } = require('path');
const ffmpeg = require('fluent-ffmpeg');

const { execFfmpegCmd } = require('../lib/utils');

const text = "Ducks!";
const input = resolve(__dirname, '../sources/ducks.mp4');
const output = resolve(__dirname, '../outputs/5-caption.mp4');

const cmd = ffmpeg(input);

cmd
    .complexFilter(`drawtext=text='${text}':x=(w-text_w)/2:y=h-th-50:fontsize=48:fontcolor=white`) // not works with emoji!
    .output(output);

execFfmpegCmd(cmd)
    .then(() => console.log('Done!'))
    .catch(() => console.error('Error: ', err));