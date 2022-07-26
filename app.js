// import functions and grab DOM elements
const buttonOne = document.getElementById('button-one');
const buttonTwo = document.getElementById('button-one');
const buttonThree = document.getElementById('button-one');
const restButton = document.getElementById('reset-button');

const flowerOne = document.getElementById('flower-one');
const flowerTwo = document.getElementById('flower-two');
const flowerThree = document.getElementById('flower-three');

const totalEl = document.getElementById('total');
const notFoundEl = document.getElementById('not-found');
const foundEl = document.getElementById('found');
// let state
const hidingPlaces = ['flower-one', 'flower-two', 'flower-three'];

let foundGuesses = 0;
let totalGuesses = 0;

totalEl.textContent = totalGuesses;
foundEl.textContent = foundGuesses;
notFoundEl.textContent = totalGuesses - foundGuesses;

// set event listeners 
  // get user input
  // use user input to update state 
  // update DOM to reflect the new state
