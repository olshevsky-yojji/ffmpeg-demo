const { resolve } = require('path');
const { exec } = require('child_process');

const video = resolve(__dirname, '../sources/ducks.mp4');
const audio = resolve(__dirname, '../sources/short-audio.mp3');

const output = resolve(__dirname, '../outputs/7-2-audio.mp4');

// -stream_loop for audio and -shortest output for video file.
const cmd = `ffmpeg  -i ${video} -stream_loop -1 -i ${audio} -shortest -map 0:v:0 -map 1:a:0 -y ${output}`;

exec(cmd, (err) => {
    if(err) {
      return console.error(err);
    }

    console.log('Done');
  });