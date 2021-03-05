// Global variables stored in app object for code cleanliness.

let app = {
    gameCards: 0,
    difficultyLevel: 0,
    cardArray: [],
    game: document.getElementById("game-panel"),
    firstCard: '',
    secondCard: '',
}

// // Select all elements with class 'memory-card'
const playingCards = document.querySelectorAll('.memory-card');

// Variables for script functionality
// Variable to determine if card has been flipped or not
let hasFlippedCard = false;

// // // Variable to disable card click functions, until non-match cards unflip
// // let lockBoard = false;

// // Declare move variable for use in moveCounter function and html class to update.
// let moves = 0;
// let counter = document.querySelector(".moves");

// // Variables for game timer
// let second = 0, minute = 0;
// var timer = document.querySelector(".timer");
// var interval;

// Function records users difficulty choice
function diffChoice(event) {
    app.difficultyLevel = event.id;;
}

// Function determines number of card pairs required for game based on difficulty chosen
function noGameCards() {
    if (app.difficultyLevel === "easy") {
        app.gameCards = 6;
    }
    else if (app.difficultyLevel === "medium") {
        app.gameCards = 9;
    }
    else if (app.difficultyLevel === "hard") {
        app.gameCards = 12;
    }
}


// Create Cards and card layout
function createCardLayout(gameCards) {
    for (let i = 1; i < app.gameCards + 1; i++) {
        const cardDiv = document.createElement("div");
        cardDiv.className = 'memory-card'
        app.cardArray.push(cardDiv);

        const charDiv = document.createElement("div");
        charDiv.className = `${app.difficultyLevel}avenger${i} front-face`
        cardDiv.appendChild(charDiv);

        const avengerDiv = document.createElement("div");
        avengerDiv.className = `back-face`
        cardDiv.appendChild(avengerDiv);
    }
    for (let j = 1; j < app.gameCards + 1; j++) {
        const cardDiv = document.createElement("div");
        cardDiv.className = 'memory-card'
        app.cardArray.push(cardDiv);

        const charDiv = document.createElement("div");
        charDiv.className = `${app.difficultyLevel}avenger${j} front-face`
        cardDiv.appendChild(charDiv);
    
        const avengerDiv = document.createElement("div");
        avengerDiv.className = `back-face`
        cardDiv.appendChild(avengerDiv);
    }

    document.querySelectorAll(".memory-card").forEach(item => {
    item.addEventListener('click', flipCard)
});
}

// Function shuffles card deck;

function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

// Create Game Card Board
function startGame() {
    noGameCards();
    createCardLayout(app.gameCards);
    let cards = shuffleArray(app.cardArray);

    cards.forEach(element => {
        app.game.appendChild(element);
    });
}

document.querySelectorAll(".level-btn").forEach(item => {
    item.addEventListener('click', event)
});


// Activate flip card animation on click, via adding 'flip' to class name and setting variable 'firstCard'. If lockBoard variable is true, or 'firstCard' is clicked twice, function exits and no action in taken.
function flipCard() {
    // if (lockBoard) return;
    if (this === app.firstCard) return;
    event.target.classList.add('flip');
    console.log("flipped")

    if (!hasFlippedCard) {
        hasFlippedCard = true;
        app.firstCard = this;
        return;
    }

    // detects if a card has been flipped and sets new card flip to 'second card', then runs checkForMatch() function.
    app.secondCard = this;

    checkForMatch();
    moveCounter();
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

// Function tracks number of moves player has taken via tracking checkForMatch function execution. When first move is made, startTimer function executes.
function moveCounter() {
    moves++;
    counter.innerHTML = moves;
    if (moves == 1) {
        second = 0;
        minute = 0;
        hour = 0;
        startTimer();
    }
}

// startTimer function operates ever 1000ms (1 second) and sequentially adds 1 second.
function startTimer() {
    interval = setInterval(function () {
        timer.innerHTML = minute + ":" + second;
        second++;
        if (second == 60) {
            minute++;
            second = 0;
        }
        if (minute == 60) {
            hour++;
            minute = 0;
        }
        if (second < 10) {
            second = "0" + second;
        }
    }, 1000);
}