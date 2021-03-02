// Select all elements with class 'memory-card'
const cards = document.querySelectorAll('.memory-card');

// Variables to set all cards to not flipped and create first and second card variables
let hasFlippedCard = false;
let firstCard, secondCard;

// Activate flip card animation on click, via adding 'flip' to class name and setting variable 'firstCard'.
function flipCard() {
    this.classList.add('flip');

    if (!hasFlippedCard) {
        hasFlippedCard = true;
        firstCard = this;
    }
}


// Event Listener to activate 'flipCard' function on click.
cards.forEach(card => card.addEventListener('click', flipCard));

