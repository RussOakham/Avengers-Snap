// Global audio varaibles stored in below object for code cleanliness
let audio = {
    cardFlipAudio: new Audio("assets/audio/card-flip.mp3"),
    cardMatchAudio: new Audio("assets/audio/card-match.mp3"),
    cardNoMatchAudio: new Audio("assets/audio/card-no-match.mp3"),
    gameCompleteSound: new Audio("assets/audio/game-level-completed.mp3"),
    resetGameSound: new Audio("assets/audio/reset-game-mouseclick.mp3"),
    soundVolumeSlider: document.getElementById("volume-slider"),
    soundOnOff: document.getElementById("sound-toggle"),
    soundMute: false,
    lastVolume: 0,
};

// Function calls cardFlipAudio on card flip
function cardFlipSound() {
    if (audio.soundMute === true) {
        return;
    } else {
        audio.cardFlipAudio.play();
    }
}

// Function calls cardMatchAudio on successful match of two cards
function cardMatchSound() {
    if (audio.soundMute === true) {
        return;
    } else {
        audio.cardMatchAudio.play();
    }
}

// Function calls cardNoMatchAudio on unsuccessful match of two cards
function cardNoMatchSound() {
    if (audio.soundMute === true) {
        return;
    } else {
        audio.cardNoMatchAudio.play();
    }
}

// Function calls gameCompleteSound when all cards successfully matched
function gameCompleteSound() {
    if (audio.soundMute === true) {
        return;
    } else {
        audio.gameCompleteSound.play();
    }
}

// Function calls resetGameSound when reset button is clicked
function resetGameSound() {
    if (audio.soundMute === true) {
        return;
    } else {
        audio.resetGameSound.play();
    }
}

// Function mutes sound effect audio if sound mute is toggled
function audioMute() {
    if (audio.soundMute === false) {
        audio.soundMute = true;
        audio.lastVolume = audio.soundVolumeSlider.value;
        audio.soundVolumeSlider.value = 0;
    } else if (audio.soundMute === true) {
        audio.soundMute = false;
        audio.soundVolumeSlider.value = audio.lastVolume;
    }
}

// Event Listeners
// Event listener records change in volume slider input
audio.soundVolumeSlider.addEventListener('change', event => {
    audio.cardFlipAudio.volume = audio.soundVolumeSlider.value / 100;
    audio.cardMatchAudio.volume = audio.soundVolumeSlider.value / 100;
    audio.cardNoMatchAudio.volume = audio.soundVolumeSlider.value / 100;
    audio.gameCompleteSound.volume = audio.soundVolumeSlider.value / 100;
    audio.resetGameSound.volume = audio.soundVolumeSlider.value / 100;
});

// Event listener for Audio mute toggle - function from bootstraptoggle.com
$(function () {
    $('#sound-toggle').change(function () {
        audioMute();
    });
});