const { FfmpegCommand, ffprobe } = require("fluent-ffmpeg");

exports.getDuration = async function(filePath) {
    const data = await getFileInfo(filePath);
    return data?.format?.duration;
}

function getFileInfo(filePath) {
    return new Promise((resolve, reject) => {
        ffprobe(filePath, function (err, metadata) {
          if (err) {
            return reject(err);
          }
  
          return resolve(metadata);
        });
      });
}

exports.getFileInfo = getFileInfo;

/**
 * 
 * @param {FfmpegCommand} cmd 
 * @param {Function} cb
 * @returns {Promise<boolean>}
 */
exports.execFfmpegCmd = function execFfmpegCmd(cmd, cb) {
    return new Promise((resolve, reject) => {
        if(cb) {
            cmd.on('progress', cb);
        }

        cmd
            .on('end', err => {
                if (err) {
                    return reject(err);
                }

                return resolve(true);
            }).run();
    });
}
