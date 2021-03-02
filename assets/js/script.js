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
        return;
    }

    // detects if a card has been flipped and sets new card flip to 'second card', then checks if cards match via checkForMatch() function.
    secondCard = this;
    hasFlippedCard = false;

    checkForMatch();
}

// Check if firstCard and secondCard flipped match, if true run disableCards(), if false run unflipCards().
function checkForMatch() {
    if (firstCard.dataset.avenger === secondCard.dataset.avenger) {
        console.log('checked');
        disableCards();
        return;
    }
    unflipCards();    
}

// remove 'click' event listeners from matched cards, so can no longer to interacted with.
function disableCards() {
    firstCard.removeEventListener('click', flipCard);
    secondCard.removeEventListener('click', flipCard);
    console.log('match');
    console.log(firstCard.dataset.avenger);
    console.log(secondCard.dataset.avenger);
}

// Unflip cards via removing 'flip' class from card. Function runs automatically after timeout expires, allowing user time to digest non-match.
function unflipCards() {
    setTimeout(() => {
        firstCard.classList.remove('flip');
        secondCard.classList.remove('flip');
        console.log('non-match');
        console.log(firstCard.dataset.avenger);
        console.log(secondCard.dataset.avenger);
    }, 1500);
}


// Event Listener to activate 'flipCard' function on click.
cards.forEach(card => card.addEventListener('click', flipCard));

