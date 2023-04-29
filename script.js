'use strict';

// // console.log(document.querySelector('.message').textContent);

// document.querySelector('.message').textContent = 'oui c\'est le bon';

// // console.log(document.querySelector('.message').textContent);

// document.querySelector('.number').textContent = 13;
// document.querySelector('.score').textContent = 10;

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;

const displayMessage = function (message) {
    document.querySelector('.message').textContent = message;
}

// console.log(document.querySelector('.guess').value=23);

document.querySelector('.check').addEventListener('click', function () {
    const guess = Number (document.querySelector('.guess').value);
    // console.log(typeof guess);

    if (!guess) {
        // document.querySelector('.message').textContent = 'pas de nombre 🚩 ';
        displayMessage ('pas de nombre 🚩') ;
    } else if (guess === secretNumber) {
        displayMessage ('oui c\'est le bon 🙃');
        document.querySelector('body').style.backgroundColor = "#60b347";  
        document.querySelector('.number').style.width = "40rem";
        document.querySelector('.number').textContent = secretNumber;
        if (score > highscore) {
            highscore = score;
            document.querySelector('.highscore').textContent = highscore;
        }

    } else{
        if (score > 1) {       
            displayMessage(guess > secretNumber ? 'trop grand 👆 ' : 'trop petit 👇');
            score--;
            document.querySelector('.score').textContent = score;
        } else {
            document.querySelector('.score').textContent = 0;
            displayMessage ('Vous avez perdu 😞');            
        }
    } 
});

document.querySelector('.again').addEventListener('click', function () {
    score = 20;
    secretNumber = Math.trunc(Math.random() * 20) + 1;
    displayMessage ('Commencez à deviner..');            
    document.querySelector('.score').textContent = score;
    document.querySelector('.number').textContent = '?';
    document.querySelector('.guess').value = '';
    document.querySelector('body').style.backgroundColor = "#222";  
    document.querySelector('.number').style.width = "15rem";        
})