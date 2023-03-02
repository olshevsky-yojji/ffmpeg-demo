const { resolve } = require('path');
const { exec } = require('child_process');

const video = resolve(__dirname, '../sources/ducks.mp4');
const audio = resolve(__dirname, '../sources/long-audio.mp3');

const output = resolve(__dirname, '../outputs/7-1-video.mp4');

// -stream_loop applied to 1st input -- video file. -shortest applied to audio because video already "infinite"
const cmd = `ffmpeg  -stream_loop -1 -i ${video} -i ${audio} -shortest -map 0:v:0 -map 1:a:0 -y ${output}`;

exec(cmd, (err) => {
    if(err) {
      return console.error(err);
    }

    console.log('Done');
  });