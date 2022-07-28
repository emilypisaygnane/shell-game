// import functions and grab DOM elements
const pinkButton = document.getElementById('pink-button');
const blueButton = document.getElementById('blue-button');
const purpleButton = document.getElementById('purple-button');
const resetButton = document.getElementById('reset-button');

const pinkFlower = document.getElementById('pink-flower');
const blueFlower = document.getElementById('blue-flower');
const purpleFlower = document.getElementById('purple-flower');

const totalEl = document.getElementById('total');
const notFoundEl = document.getElementById('not-found');
const foundEl = document.getElementById('found');

// let state
const hidingPlaces = ['pink-flower', 'blue-flower', 'purple-flower'];

let foundGuesses = 0;
let totalGuesses = 0;

function getRandomItem(arr) {
    const index = Math.floor(Math.random() * arr.length);

    return arr[index];
}

// set event listeners 
pinkButton.addEventListener('click', () => {
    const correctSpot = getRandomItem(hidingPlaces);

    handleGuess(correctSpot, 'pink-button');
});

blueButton.addEventListener('click', () => {
    const correctSpot = getRandomItem(hidingPlaces);
    
    handleGuess(correctSpot, 'blue-button');
});

purpleButton.addEventListener('click', () => {
    const correctSpot = getRandomItem(hidingPlaces);
    
    handleGuess(correctSpot, 'purple-button');
});

resetButton.addEventListener('click', () => {
    totalGuesses = 0;
    foundGuesses = 0;
    totalEl.textContent = totalGuesses;
    foundEl.textContent = foundGuesses;
    notFoundEl.textContent = totalGuesses - foundGuesses;
});


function handleGuess(correctSpot, userGuess) {
    resetStyles();
    totalGuesses++;

    const correctHidingPlaceEl = document.getElementById(`${correctSpot}-flower`);

    correctHidingPlaceEl.classList.add('fairy');

    if (userGuess === correctSpot) {
        foundGuesses++;
    }

    totalEl.textContent = totalGuesses;
    foundEl.textContent = foundGuesses;
    notFoundEl.textContent = totalGuesses - foundGuesses;
}

function resetStyles() {
    pinkFlower.classList.remove('fairy');
    blueFlower.classList.remove('fairy');
    purpleFlower.classList.remove('fairy');
}



