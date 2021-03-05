// Global variables stored in app object for code cleanliness.
let app = {
    gameCards: 0,
    difficultyLevel: 0,
    cardArray: [],
    game: document.getElementById("game-panel"),
    firstCard: '',
    secondCard: '',
    hasFlippedCard: false,
    lockBoard: false,
    moves: 0,
    counter: document.querySelector('.moves'),
    second: 0,
    minute: 0,
    timer: document.querySelector(".timer"),
    interval: '',
}


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

// Add click event listener to cards
app.game.addEventListener('click', function(event) {
    flipCard();
})

// On click, adds 'flip' to class name and saves clicked div to 'firstCard' variable. If lockBoard variable is true, or 'firstCard' is clicked twice, function exits and no action in taken.
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
}

// Logic check to see if firstCard dataset and secondCard dataset match.
// If Match = run disableCards();
// if NoMatch = run unflipCards();

function checkMatch() {
    if (app.firstCard.dataset.avenger === app.secondCard.dataset.avenger) {
        disableCards();
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
    }, 1500);
}

// Resets all variables at end of round, ready for new match round to being.
function resetBoard() {
    [app.hasFlippedCard, app.lockBoard] = [false, false];
    [app.firstCard, app.secondCard] = [null, null];
}


// Add click event listeners to difficulty select buttons.
document.querySelectorAll(".level-btn").forEach(item => {
    item.addEventListener('click', event)
});



