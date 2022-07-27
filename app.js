// import functions and grab DOM elements
const pinkButton = document.getElementById('pink-button');
const blueButton= document.getElementById('blue-button');
const purpleButton = document.getElementById('purple-button');
const resetButton = document.getElementById('reset-button');

const pinkFlower = document.getElementById('pink-flower');
const blueFlower = document.getElementById('blue-flower');
const purpleFlower = document.getElementById('purple-flower');

const totalEl = document.getElementById('total');
const notFoundEl = document.getElementById('not-found');
const foundEl = document.getElementById('found');
// let state
const hidingPlaces = ['one-flower', 'two-flower', 'three-flower'];

let foundGuesses = 0;
let totalGuesses = 0;


// set event listeners 
buttonOne.addEventListener('click', () => {

  handleGuess(correctSpot, 'button-one');
});

buttonTwo.addEventListener('click', () => {

  handleGuess(correctSpot, 'button-two');
});

buttonThree.addEventListener('click', () => {

  handleGuess(correctSpot, 'button-three');
});
  // get user input
  function handleGuess(correctSpot, userGuess) {
    resetStyles();
    totalGuesses++;
    
    const correctHidingPlaceEl = document.getElementById(`${correctSpot`}-flower`);
    
    correctHidingPlaceEl.classList.add('fairy');
    if (userGuess === correctSpot) {foundGuesses++;
  }
  
  totalEl.textContent = totalGuesses;
  foundEl.textContent = foundGuesses;
  notFoundEl.textContent = totalGuesses - foundGuesses;
}


