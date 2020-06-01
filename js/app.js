console.log('app loaded');

import Crunker from 'crunker';
require('./audio-recorder');
require('./video-player');
const merge = document.querySelector('.merge');

let audio = new Crunker();

console.log("cruncker" + audio);

merge.addEventListener('click', () => {
    const soundClips = document.querySelector('.sound-clips');
    var arr = [];
    for (var i = 0; i < soundClips.children.length; i++) {
        var temp = soundClips.children[i].getElementsByClassName('audioClass')[0];
        arr.push(temp.getAttribute('src'));
    }
    audio
        .fetchAudio(...arr)
        .then(buffers => audio.concatAudio(buffers))
        .then(merged => audio.export(merged, "audio/ogg"))
        .then(output => audio.download(output.blob, "mergedClip"))
        .catch(error => {
            throw new Error(error);
        });
});