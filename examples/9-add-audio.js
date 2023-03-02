const { resolve } = require('path');
const ffmpeg = require('fluent-ffmpeg');

const { execFfmpegCmd } = require('../lib/utils');

const audio = resolve(__dirname, '../sources/gtts.mp3');
const video = resolve(__dirname, '../sources/ducks.mp4');

const output = resolve(__dirname, '../outputs/9-add-audio.mp4');

const cmd = ffmpeg()
.outputFPS(60)
.input(video)
.input(audio)
.inputOption('-itsoffset 00:00:03')
.outputOption('-async 1')
.complexFilter([
    {
        filter : 'amix', options: { inputs: 2, duration : 'longest' },
    },
])
.output(output);

execFfmpegCmd(cmd, console.log)
    .then(() => console.log('Done!'))
    .catch(() => console.error('Error: ', err));