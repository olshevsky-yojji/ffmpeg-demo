/**
 * AES Encryption: 
 * - https://hlsbook.net/how-to-encrypt-hls-video-with-ffmpeg/
 * - https://nikolaymatrosov.medium.com/%D0%BE%D0%B3%D1%80%D0%B0%D0%BD%D0%B8%D1%87%D0%B5%D0%BD%D0%B8%D0%B5-%D0%B4%D0%BE%D1%81%D1%82%D1%83%D0%BF%D0%B0-%D0%BA-hls-%D0%B2%D0%B8%D0%B4%D0%B5%D0%BE-%D0%BF%D1%80%D0%B8-%D0%BF%D0%BE%D0%BC%D0%BE%D1%89%D0%B8-%D1%88%D0%B8%D1%84%D1%80%D0%BE%D0%B2%D0%B0%D0%BD%D0%B8%D1%8F-aes-128-a36b8a3074
 * 
 */

const { resolve } = require('path');
const ffmpeg = require('fluent-ffmpeg');

const { execFfmpegCmd } = require('../lib/utils');

const input = resolve(__dirname, '../sources/long-video.mp4');
const output = resolve(__dirname, '../outputs/12-hls/playlist.m3u8');

const cmd = ffmpeg(input);

cmd
    .addOption('-hls_time', 10) // seconds per fragment. The Apple recommended value is 6 seconds.
    .addOption('-hls_list_size', 0) // items in playlist
    .save(output);

execFfmpegCmd(cmd, console.log)
    .then(() => console.log('Done!'))
    .catch(() => console.error('Error: ', err));