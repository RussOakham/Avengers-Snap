// Select all elements with class 'memory-card'
const cards = document.querySelectorAll('.memory-card');

// Variables for script functionality
let hasFlippedCard = false; `Variable to determine if card has been flipped or not`
let lockBoard = false; `Variable to disable card click functions, until non-match cards unflip`
let firstCard, secondCard; `Variables to determine first and second cards flipped for each match scenario`

// Activate flip card animation on click, via adding 'flip' to class name and setting variable 'firstCard'. If lockBoard variable is true, function exits and no action in taken.
function flipCard() {
    if (lockBoard) return;
    this.classList.add('flip');

    if (!hasFlippedCard) {
        hasFlippedCard = true;
        firstCard = this;
        return;
    }

    // detects if a card has been flipped and sets new card flip to 'second card', then runs checkForMatch() function.
    secondCard = this;
    hasFlippedCard = false;

    checkForMatch();
}

// Check if firstCard and secondCard match, if true run disableCards(), if false run unflipCards().
function checkForMatch() {
    if (firstCard.dataset.avenger === secondCard.dataset.avenger) {
        disableCards();
        return;
    }
    unflipCards();    
}

// remove 'click' event listeners from matched cards, so can no longer to interacted with.
function disableCards() {
    firstCard.removeEventListener('click', flipCard);
    secondCard.removeEventListener('click', flipCard);
}

// Unflip cards via removing 'flip' class from card. Function runs automatically after timeout expires, allowing user time to digest non-match.
function unflipCards() {
    lockBoard = true;
    setTimeout(() => {
        firstCard.classList.remove('flip');
        secondCard.classList.remove('flip');
        lockBoard = false;
    }, 1500);
}


// Event Listener to activate 'flipCard' function on click.
cards.forEach(card => card.addEventListener('click', flipCard));

