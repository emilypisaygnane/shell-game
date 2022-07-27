// import functions and grab DOM elements
const buttonOne = document.getElementById('button-one');
const buttonTwo = document.getElementById('button-two');
const buttonThree = document.getElementById('button-three');
const restButton = document.getElementById('reset-button');

const oneFlower = document.getElementById('one-flower');
const twoFlower = document.getElementById('two-flower');
const threeFlower = document.getElementById('three-flower');

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


