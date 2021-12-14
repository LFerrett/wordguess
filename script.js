var wordChoices = ["Martin", "Jeter", "Ruth", "Gehrig", "DiMaggio", "Torre", "Mantle", "Berra", "Dickey", "Maris", "Rizzuto", "Munson", "Ford", "Posada", "Mattingly", "Howard", "Stengel", "Rivera", "Jackson", "Pettitte", "Guidry", "Williams"]
var timer = document.querySelector(".timer-count");


// When a user clicks the start button, the timer should reset.


// how do I add an event listener on the whole document?
// var guessArea = document.querySelector('#large-font word-blanks');


// Pick random word from word choices array - use array length and math random to pick one word

// Separate word into letters and hide all letters but letter selected

// When a user presses a letter key, the user's guess should be captured as a key event.

// have the pressed key check the string letters and if it's in the string then make that letter visible
// if it's not in the string, then display an alert, to please pick another letter

// if all the letters in the string are visible, then the user wins and add a point to their high score


// Keydown event
// guessArea.addEventListener('keydown', function (event) {
    // Access value of pressed key with key property
//     var key = event.key;
//     console.log(key);
//     var alphabetNumericCharacters = 'abcdefghijklmnopqrstuvwxyz0123456789 '.split(
//       ''
//     );
//     if (alphabetNumericCharacters.includes(key)) {
//      for (var i = 0; i < elements.length; i++) {
//        elements[i].textContent += event.key;
//      }
//     }
//   });


// When a user correctly guesses a letter, the corresponding blank "_" should be replaced by the letter. For example, if the user correctly selects "a", then "a _ _ a _" should appear.

// When a user wins or loses a game, a message should appear and the timer should stop.



// When a user refreshes or returns to the browser page, the win and loss counts should persist.