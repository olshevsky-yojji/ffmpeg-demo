const { resolve } = require('path');
const ffmpeg = require('fluent-ffmpeg');

const { execFfmpegCmd } = require('../lib/utils');

// Video should have same size
const video1 = resolve(__dirname, '../sources/concat/ducks-1.mp4');
const video2 = resolve(__dirname, '../sources/concat/fails-1.mp4');

const output = resolve(__dirname, '../outputs/6-2-concat.mp4');

const cmd = ffmpeg();
const videos = [video1, video2];

videos.forEach((file) => cmd.addInput(file));

cmd
    // .outputFPS(60)
    .complexFilter([`concat=unsafe=1:n=${videos.length}:v=1:a=1 [vv] [aa]`])
    .outputOptions([
        '-c:v copy',
        '-c:a aac',
        '-strict experimental',
        '-vcodec libx264',
    ])
    .map('[vv]')
    .map('[aa]')
    .outputFormat('mp4')
    .output(output);


execFfmpegCmd(cmd, console.log)
    .then(() => console.log('Done!'))
    .catch((err) => console.error('Error: ', err));