const { resolve } = require('path');
const { Transcoder } = require('simple-hls');

const input = resolve(__dirname, '../sources/long-video.mp4');
const output = resolve(__dirname, '../outputs/15-multi-bitrate-hls');

const getRenditions = (name) => [
    {
        width: 320,
        height: 240,
        profile: 'main',
        hlsTime: '10',
        bv: '400k',
        maxrate: '856k',
        bufsize: '1200k',
        ba: '96k',
        ts_title: `${name}_360p`,
        master_title: `${name}_360p`
    },
    {
        width: 640,
        height: 360,
        profile: 'main',
        hlsTime: '10',
        bv: '800k',
        maxrate: '856k',
        bufsize: '1200k',
        ba: '96k',
        ts_title: `${name}_360p`,
        master_title: `${name}_360p`
    },
    {
        width: 640,
        height: 480,
        profile: 'main',
        hlsTime: '10',
        bv: '1400k',
        maxrate: '1498',
        bufsize: '2100k',
        ba: '128k',
        ts_title: `${name}_480p`,
        master_title: `${name}_480p`
    },
    {
        width: 1280,
        height: 720,
        profile: 'main',
        hlsTime: '10',
        bv: '2800k',
        maxrate: '2996k',
        bufsize: '4200k',
        ba: '128k',
        ts_title: `${name}_720p`,
        master_title: `${name}_720p`
    },
    {
        width: 1920,
        height: 1080,
        profile: 'main',
        hlsTime: '10',
        bv: '5000k',
        maxrate: '5350k',
        bufsize: '7500k',
        ba: '192k',
        ts_title: `${name}_1080p`,
        master_title: `${name}_1080p`
    }
];

try {
    const transcode = new Transcoder(input, output, { renditions: getRenditions('long-video'), showLogs: true });
    transcode.transcode();
    console.log('Successfully Transcoded Video');
} catch (e) {
    console.log('Something went wrong : ' + e);
}