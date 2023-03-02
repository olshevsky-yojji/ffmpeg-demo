const { resolve } = require('path');
const ffmpeg = require('fluent-ffmpeg');

const { execFfmpegCmd } = require('../lib/utils');

const input = resolve(__dirname, '../sources/fails.mp4');
const output = resolve(__dirname, '../sources/concat/fails.mp4');

const cmd = ffmpeg(input);

cmd
    .complexFilter(
        '[0:v]scale=ih*16/9:-1,boxblur=luma_radius=min(h\\,w)/20:luma_power=1:chroma_radius=min(cw\\,ch)/20:chroma_power=1[bg];[bg][0:v]overlay=(W-w)/2:(H-h)/2,crop=h=iw*9/16',
    )
    .output(output);

execFfmpegCmd(cmd, console.log)
    .then(() => console.log('Done!'))
    .catch(() => console.error('Error: ', err));