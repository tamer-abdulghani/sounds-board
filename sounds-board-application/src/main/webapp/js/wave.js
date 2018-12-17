/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
var WaveSurfers = [];

function createWaverElemet(id)
{
    var wavesurfer = WaveSurfer.create({
        container: '#waver-' + id,
        waveColor: 'lightgreen',
        progressColor: 'green',
        height: 30,
        cursorColor: 'white',
        cursorWidth: 2
    });

    var path = $("audio#" + id).data("path");
    wavesurfer.load(path);

    wavesurfer.on('ready', function () {
        wavesurfer.play();
        wavesurfer.toggleMute();
    });

    WaveSurfers.push(wavesurfer);
}

function pauseAll() {

    $.each(WaveSurfers, function () {
        this.pause();
    });
}


function playAll() {

    $.each(WaveSurfers, function () {
        this.play();
    });
}

function playWaveElement(id) {
    $.each(WaveSurfers, function () {
        if (this.container.id === "waver-" + id)
        {
            this.play();

        }
    });

}

function pauseWaveElement(id) {
    $.each(WaveSurfers, function () {
        if (this.container.id === "waver-" + id)
        {
            this.pause();

        }
    });

}