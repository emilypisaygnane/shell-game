// import functions and grab DOM elements
const pinkButton = document.getElementById('pink-button');
const blueButton = document.getElementById('blue-button');
const purpleButton = document.getElementById('purple-button');

const pinkFlower = document.getElementById('pink-flower');
const blueFlower = document.getElementById('blue-flower');
const purpleFlower = document.getElementById('purple-flower');

const totalEl = document.getElementById('total');
const hidingSpots = [pinkFlower, blueFlower, purpleFlower];

// let state
let found = 0;
let notFound = 0;
let total = 0;

function resetImages() {
    pinkFlower.src = './assets/pink-flower.jpg';
    blueFlower.src = './assets/blue-flower.jpg';
    purpleFlower.src = './assets/purple-flower.jpg';
}

// set event listeners 
pinkButton.addEventListener('click', () => {
    resetImages();
    total++;
    const hidingSpot = Math.floor(Math.random() * 3);
    const answer = hidingSpots[hidingSpot];

    handleGuess(answer, 'pink');
});

blueButton.addEventListener('click', () => {
    resetImages();
    total++;
    const hidingSpot = Math.floor(Math.random() * 3);
    const answer = hidingSpots[hidingSpot];

    handleGuess(answer, 'blue');
});

purpleButton.addEventListener('click', () => {
    resetImages();
    total++;
    const hidingSpot = Math.floor(Math.random() * 3);
    const answer = hidingSpots[hidingSpot];

    handleGuess(answer, 'purple');
});

function handleGuess(correctSpot, userGuess) {
    correctSpot.src = './assets/silvermist-fairy.png';

    if (correctSpot.id === userGuess) {
        found++;
    } else {
        notFound++;
    }
    totalEl.textContent = `You've found the fairy ${found} time, you didn't find the fairy ${notFound} times out of ${total} tries. Keep trying!`;
}

