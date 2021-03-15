// Global audio varaibles stored in below object for code cleanliness
let audio = {
    cardFlipAudio: new Audio("assets/audio/card-flip.mp3"),
    cardMatchAudio: new Audio("assets/audio/card-match.mp3"),
    cardNoMatchAudio: new Audio("assets/audio/card-no-match.mp3"),
    soundVolumeSlider: document.getElementById("volume-slider"),
    soundOnOff: document.getElementById("sound-toggle"),
    soundMute: false,
}

// 3x Sound Functions used to play audio effects
function cardFlipSound() {
    if (audio.soundMute === true) {
        return;
    } else {
        audio.cardFlipAudio.play();
    }
}

function cardMatchSound() {
    if (audio.soundMute === true) {
        return;
    } else {
        audio.cardMatchAudio.play();
    }
}

function cardNoMatchSound() {
    if (audio.soundMute === true) {
        return;
    } else {
        audio.cardNoMatchAudio.play();
    }
}

// Function sets default sound effect volume on game load
function defaultVolume() {
    audio.cardFlipAudio.volume = audio.soundVolumeSlider.defaultValue / 100;
    audio.cardMatchAudio.volume = audio.soundVolumeSlider.defaultValue / 100;
    audio.cardNoMatchAudio.volume = audio.soundVolumeSlider.defaultValue / 100;
}

function audioMute() {
    if (audio.soundMute === false) {
        audio.soundMute = true;
        console.log(audio.soundMute);
    } else if (audio.soundMute === true) {
        audio.soundMute = false;
        console.log(audio.soundMute);
    }
}

// Event Listeners
// Event listener records change in volume slider input
audio.soundVolumeSlider.addEventListener('change', event => {
    audio.cardFlipAudio.volume = audio.soundVolumeSlider.value / 100;
    audio.cardMatchAudio.volume = audio.soundVolumeSlider.value / 100;
    audio.cardNoMatchAudio.volume = audio.soundVolumeSlider.value / 100;
});

// Event listener for Audio mute toggle - function from bootstraptoggle.com
$(function () {
    $('#sound-toggle').change(function () {
        audioMute()
    })
})