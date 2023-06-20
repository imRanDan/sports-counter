// javascript
let homeCountEl = document.getElementById("home-count-el")
let awayCountEl = document.getElementById("away-count-el")

// console.log(homeCountEl)

// Count declarations
let homeCount = 0;
let awayCount = 0;

// Home Functions

function plusOneHome() {
    homeCount = homeCount + 1
    homeCountEl.innerText = homeCount
}

function plusTwoHome() {
    homeCount = homeCount + 2
    homeCountEl.innerText = homeCount
}

function plusThreeHome() {
    homeCount = homeCount + 3
    homeCountEl.innerText = homeCount
}

// Away Functions

function plusOneAway() {
    awayCount = awayCount + 1
    awayCountEl.innerText = awayCount
}

function plusTwoAway() {
    awayCount = awayCount + 2
    awayCountEl.innerText = awayCount
}

function plusThreeAway() {
    awayCount = awayCount + 3
    awayCountEl.innerText = awayCount
}


// Reset Button / New Game
function newGame() {
    location.reload();
}

