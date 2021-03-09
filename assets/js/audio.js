// Global audio varaibles stored in below object for code cleanliness
let audio = {
    cardFlipAudio: new Audio("assets/audio/card-flip.mp3"),
    cardMatchAudio: new Audio("assets/audio/card-match.mp3"),
    cardNoMatchAudio: new Audio("assets/audio/card-no-match.mp3"),
    soundVolumeSlider: document.getElementById("volume-slider"),
    soundOnOff: document.getElementById("sound-toggle"),
}

// 3x Sound Functions used to play audio effects
function cardFlipSound() {
    audio.cardFlipAudio.play();
}

function cardMatchSound() {
    audio.cardMatchAudio.play();
}

function cardNoMatchSound() {
    audio.cardNoMatchAudio.play();
}

// Function sets default sound effect volume on game load
function defaultVolume() {
    audio.cardFlipAudio.volume = audio.soundVolumeSlider.defaultValue / 100;
    audio.cardMatchAudio.volume = audio.soundVolumeSlider.defaultValue / 100;
    audio.cardNoMatchAudio.volume = audio.soundVolumeSlider.defaultValue / 100;
}

// Function to set audio to to zero if sound toggle is turned to off
function soundMute() {
    audio.cardFlipAudio.volume = 0;
    audio.cardMatchAudio.volume = 0;
    audio.cardNoMatchAudio.volume = 0;
    audio.soundVolumeSlider.value = 0;
    console.log("audio muted");
}


// Event Listeners
// Event listener records change in volume slider input
audio.soundVolumeSlider.addEventListener('change', event => {
    audio.cardFlipAudio.volume = audio.soundVolumeSlider.value / 100;
    audio.cardMatchAudio.volume = audio.soundVolumeSlider.value / 100;
    audio.cardNoMatchAudio.volume = audio.soundVolumeSlider.value / 100;
});

$('#sound-toggle').change(soundMute());