// Global variables stored in app object for code cleanliness.
let app = {
    gameCards: 0,
    difficultyLevel: 0,
    diffLevel: document.getElementById('diff-level'),
    cardArray: [],
    game: document.getElementById("game-panel"),
    firstCard: '',
    secondCard: '',
    hasFlippedCard: false,
    lockBoard: false,
    moves: 0,
    counter: document.querySelector('.moves'),
    moveScore: document.getElementById('move-score'),
    second: 0,
    minute: 0,
    hour: 0,
    timer: document.querySelector(".timer"),
    timeScore: document.getElementById("time-score"),
    interval: '',
    matchedCards: [],
    victoryModal: document.getElementById('congrats-modal'),
}


// Function records users difficulty choice
function diffChoice(event) {
    resetGame();
    app.difficultyLevel = event.id;
    closeModals();
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
    if (app.difficultyLevel === "easy2") {
        app.gameCards = 6;
    }
    else if (app.difficultyLevel === "medium2") {
        app.gameCards = 9;
    }
    else if (app.difficultyLevel === "hard2") {
        app.gameCards = 12;
    }
}

// Create Cards and card layout
function createCardLayout(gameCards) {
    for (let i = 1; i < app.gameCards + 1; i++) {
        const cardDiv = document.createElement("div");
        cardDiv.className = 'memory-card',
            cardDiv.dataset.avenger = `${app.difficultyLevel}avenger${i}`
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
        cardDiv.className = 'memory-card',
            cardDiv.dataset.avenger = `${app.difficultyLevel}avenger${j}`
        app.cardArray.push(cardDiv);

        const charDiv = document.createElement("div");
        charDiv.className = `${app.difficultyLevel}avenger${j} front-face`
        cardDiv.appendChild(charDiv);

        const avengerDiv = document.createElement("div");
        avengerDiv.className = `back-face`
        cardDiv.appendChild(avengerDiv);
    }
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



// On click, adds 'flip' to class name and saves clicked div to 'firstCard' variable. If lockBoard variable is true, 'firstCard' is clicked twice, or yellow 'game-panel' is clicked, function exits and no action in taken. Once secondCard is selected, checkMatch and moveCounter functions are called.
function flipCard() {
    if (app.lockBoard) return;
    if (event.target === document.getElementById('game-panel')) return;
    if (event.target === app.firstCard) return;
    event.target.classList.add("flip");

    if (!app.hasFlippedCard) {
        app.hasFlippedCard = true;
        app.firstCard = event.target;
        return;
    };

    app.secondCard = event.target;
    checkMatch();
    moveCounter();
}

// Logic check to see if firstCard dataset and secondCard dataset match.
// If Match = run disableCards();
// if NoMatch = run unflipCards();
function checkMatch() {
    if (app.firstCard.dataset.avenger === app.secondCard.dataset.avenger) {
        disableCards();
        app.matchedCards.push(app.firstCard.dataset.avenger);
        gameComplete();
        return;
    }
    unflipCards();
}

// Removes 'click' event listener from matched cards.
function disableCards() {
    app.lockBoard = true;
    setTimeout(() => {
        app.firstCard.removeEventListener('click', flipCard);
        app.secondCard.removeEventListener('click', flipCard);
        resetBoard();
    }, 500);
};

// unflips non-matched cards after 1500ms and calls resetBoard function.
function unflipCards() {
    app.lockBoard = true;
    setTimeout(() => {
        app.firstCard.classList.remove('flip');
        app.secondCard.classList.remove('flip');
        resetBoard();
    }, 1000);
}

// Resets all variables at end of round, ready for new match round to being.
function resetBoard() {
    [app.hasFlippedCard, app.lockBoard] = [false, false];
    [app.firstCard, app.secondCard] = [null, null];
}

// Add 1 increment to app.moves tally. Function called at end of secondCard part of flipCard() function.
function moveCounter() {
    app.moves++;
    app.counter.innerHTML = app.moves;
    if (app.moves == 1) {
        app.second = 0;
        app.minute = 0;
        app.hour = 0;
        startTimer();
    }
}

// Timer function sequentially adds 1 second to 'app.timer' every 1000ms and updates innerHTML. When app.seconds reach 60, 1 is incremented to app.minute and app.second reset to 0. When app. minute reaches 60, 1 increment is added to app.hour and app.minutes reset to zero.
function startTimer() {
    app.interval = setInterval(function () {
        app.timer.innerHTML = app.minute + ':' + app.second;
        app.second++;
        if (app.second == 60) {
            app.minute++;
            app.second = 0;
        }
        if (app.minute == 60) {
            app.hour++;
            app.minute = 0;
        }
        if (app.second < 10) {
            app.second = '0' + app.second;
        }
    }, 1000);
}

// Function removes all child elements (game cards) from app.game div and clears cardArray firstCard and secondCard variables.
function clearGameCards() {
    app.game.querySelectorAll('*').forEach(child => child.remove());
    app.cardArray = [];
    app.firstCard = '';
    app.secondCard = '';
    app.matchedCards = [];
}

// Function resets app.second, minute and hour variables to zero. Clears the app.interval so startTimer function ceases to increment and resets timer innerHTML to 0:00.
function resetTimer() {
    app.second = 0;
    app.minute = 0;
    app.hour = 0;
    clearInterval(app.interval);
    app.timer.innerHTML = "0:00";
}

// Function resets app.moves counter to zero and updates app.counter.innerHTML to zero accordingly.
function resetMoves() {
    app.moves = 0;
    app.counter.innerHTML = "0";
}

// Function resets entire game via recalling clearGameCards, resetMoves and resetTimer functions.
function resetGame() {
    clearGameCards();
    resetMoves();
    resetTimer();
}

// Function resets current game level by calling clearGameCards, Reset Moves and resetTimer functions. These functions do not reset the app.difficultyLevel chosen by the user - so when startGame(); function is called, these earlier inputs are remembered.
function resetCurrentGame() {
    clearGameCards();
    resetMoves();
    resetTimer();
    startGame();
}

// Function determines if game is complete by testing if number of paired cards equals number of gameCard pairs generated. If SourceBuffer, then timer is stopped via clearing internal and congratulations modal is called
function gameComplete() {
    if (app.matchedCards.length === app.gameCards) {
        clearInterval(app.interval);
        congratsModal();
    }
}


// EVENT LISTENERS

// Add click event listener to cards
app.game.addEventListener('click', function (event) {
    flipCard();
})

// Add click event listeners to difficulty select buttons.
document.querySelectorAll(".level-btn").forEach(item => {
    item.addEventListener('click', event)
});