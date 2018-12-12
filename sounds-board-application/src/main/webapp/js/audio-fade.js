/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

function audioVolumeIn(q) {
    if (q.volume) {
        var InT = 0;
        var setVolume = 0.2; // Target volume level for new song
        var speed = 0.005; // Rate of increase
        q.volume = InT;
        var eAudio = setInterval(function () {
            InT += speed;
            q.volume = InT.toFixed(1);
            if (InT.toFixed(1) >= setVolume) {
                clearInterval(eAudio);
                //alert('clearInterval eAudio'+ InT.toFixed(1));
            }
            ;
        }, 50);
    }
    ;
}
;

function audioVolumeOut(q) {
    if (q.volume) {
        var InT = 0.4;
        var setVolume = 0;  // Target volume level for old song 
        var speed = 0.005;  // Rate of volume decrease
        q.volume = InT;
        var fAudio = setInterval(function () {
            InT -= speed;
            q.volume = InT.toFixed(1);
            if (InT.toFixed(1) <= setVolume) {
                clearInterval(fAudio);
                //alert('clearInterval fAudio'+ InT.toFixed(1));
            }
            ;
        }, 50);
    }
    ;
}
;