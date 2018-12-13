/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

function createWaverElemet(id)
{
    var wavesurfer = WaveSurfer.create({
        container: '#waver-' + id,
        waveColor: 'violet',
        progressColor: 'purple',
        height: 30
    });

    var path = $("audio#" + id).data("path");
    wavesurfer.load(path);

    wavesurfer.on('ready', function () {
        wavesurfer.play();
        wavesurfer.toggleMute()
    });
}