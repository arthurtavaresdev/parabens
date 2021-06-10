#!/usr/bin/env node

const exect = require('child_process').exec;
const path = require('path');
const fs = require('fs');

const mainPath = path.dirname(fs.realpathSync(__filename));
const soundPath = path.join(mainPath, './parabens');

const parabens = function () {
    const linuxcmd = 'paplay ' + soundPath + '.ogg';
    const windowscmd = path.join(mainPath, './forWindows.vbs') + ' ' + soundPath + '.mp3';
    const maccmd = 'afplay ' + soundPath + '.mp3';

    const platform = process.platform;

    switch (platform) {
        case 'win32':
            exec(windowscmd);
            break;
        case 'darwin':
            exec(maccmd);
            break;
        case 'linux':
            exec(linuxcmd);
            break;
    }
}
const exec = (cmd) => {
    return exect(cmd, function (error, stdout, stderr) {
        if (error) {
            console.error(error);
        }
    });
}

module.exports = parabens;

if (!module.parent) {
    parabens();
}