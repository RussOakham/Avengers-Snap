// Select all elements with class 'memory-card'
const cards = document.querySelectorAll('.memory-card');

// Variables for script functionality
let hasFlippedCard = false; `Variable to determine if card has been flipped or not`
let lockBoard = false; `Variable to disable card click functions, until non-match cards unflip`
let firstCard, secondCard; `Variables to determine first and second cards flipped for each match scenario`

// Activate flip card animation on click, via adding 'flip' to class name and setting variable 'firstCard'. If lockBoard variable is true, or 'firstCard' is clicked twice, function exits and no action in taken.
function flipCard() {
    if (lockBoard) return;
    if (this === firstCard) return;
    this.classList.add('flip');

    if (!hasFlippedCard) {
        hasFlippedCard = true;
        firstCard = this;
        return;
    }

    // detects if a card has been flipped and sets new card flip to 'second card', then runs checkForMatch() function.
    secondCard = this;

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

// remove 'click' event listeners from matched cards, so cannot be interacted with.
function disableCards() {
    firstCard.removeEventListener('click', flipCard);
    secondCard.removeEventListener('click', flipCard);
    resetBoard();
}

// Unflip cards via removing 'flip' class from card. Function delayed by 1500ms, allowing user time to digest non-match.
function unflipCards() {
    lockBoard = true;
    setTimeout(() => {
        firstCard.classList.remove('flip');
        secondCard.classList.remove('flip');
        resetBoard();
    }, 1500);
}

// resetBoard funtion run after disabledCards() and unflipCards() functions, resets board by unlocking the board and wiping firstCard and secondCard variables
function resetBoard() {
    [hasFlippedCard, lockBoard] = [false, false];
    [firstCard, secondCard] = [null, null];
}

// Shuffles cards by applying a random numbers from 1-12 to each cards 'order' property, flex-items automatically arranged by this. Designated as a Immediately Invoked Function Expression (IIFE), so will execute as soon as declared in browser
(function shuffleBoard() {
    cards.forEach(card => {
        let randomPos = Math.floor(Math.random() * 12);
        card.style.order = randomPos;
    });
})();


// Event Listener to activate 'flipCard' function on click.
cards.forEach(card => card.addEventListener('click', flipCard));

