// import functions and grab DOM elements
const pinkButton = document.getElementById('pink-button');
const blueButton = document.getElementById('blue-button');
const purpleButton = document.getElementById('purple-button');

const pinkFlower = document.getElementById('pink-flower');
const blueFlower = document.getElementById('blue-flower');
const purpleFlower = document.getElementById('purple-flower');

const totalEl = document.getElementById('total');
const foundEl = document.getElementById('found');
const notFoundEl = document.getElementById('not-found');                      
const hidingSpots = [pinkFlower, blueFlower, purpleFlower];

// let state
let found = 0;
let total = 0;

function getRandomItem(arr) {
    const index = Math.floor(Math.random() * 3);

    return arr[index];
}
function resetImages() {
    pinkFlower.src = './assets/pink-flower.jpg';
    blueFlower.src = './assets/blue-flower.jpg';
    purpleFlower.src = './assets/purple-flower.jpg';
}

// set event listeners 
pinkButton.addEventListener('click', () => {
    const answer = getRandomItem(hidingSpots);

    handleGuess(answer, 'pink-flower');
});

blueButton.addEventListener('click', () => {
    const answer = getRandomItem(hidingSpots);

    handleGuess(answer, 'blue-flower');
});

purpleButton.addEventListener('click', () => {
    const answer = getRandomItem(hidingSpots);

    handleGuess(answer, 'purple-flower');
});

function handleGuess(correctSpot, userGuess) {
    resetImages();
    total++;
    correctSpot.src = './assets/silvermist-fairy.png';

    if (correctSpot.id === userGuess) {
        found++;
    } 
    totalEl.textContent = total;
    foundEl.textContent = found;
    notFoundEl.textContent = total - found;
}
