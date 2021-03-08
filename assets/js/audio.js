// Global audio varaibles stored in below object for code cleanliness
let audio = {
    cardFlipAudio: new Audio("assets/audio/card-flip.mp3"),
    cardMatchAudio: new Audio("assets/audio/card-match.mp3"),
    cardNoMatchAudio: new Audio("assets/audio/card-no-match.mp3"),
}

function cardFlipSound() {
    audio.cardFlipAudio.play();
}

function cardMatchSound() {
    audio.cardMatchAudio.play();
}

function cardNoMatchSound() {
    audio.cardNoMatchAudio.play();
}