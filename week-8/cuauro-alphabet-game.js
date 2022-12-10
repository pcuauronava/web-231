/*
==============================================
;   Title: cuauro-alphabet-game.js
;   Author: Patrick Cuauro
;   Date: 12 06 2022
;   Modified by: Patrick Cuauro
;   Description: JavaScript file for The Alphabet Game page
==============================================
*/
//Declaration of the variables
const alphabet = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
let letter;
//Anonymous function called when clicking on button "Find Letter".
//Uncomment the following to hide the card with the results.
//document.getElementById("conclusion").style.display = "none";
btnFindLetter.addEventListener("click", function () {
    //Uncomment the following to display the card with the results if previously hidden.
    //document.getElementById("conclusion").style.display = "block";
    let pos = document.getElementById("txtPosition").value;
    console.log("the position selected is "+ pos);
    //Letter is defined as the position of the array, in the array it starts at 0, it was reduced one to match the position.
let letter = alphabet[pos-1];
    if ( letter == undefined ) {
        document.getElementById("result").innerHTML = "There are not " + pos + " letters in the alphabet";
    } else {
        document.getElementById("result").innerHTML = letter + " is at position " + pos + " in the alphabet";
    }
});
let alphabetOutput = "";
   for (let x in alphabet) {
    alphabetOutput += alphabet[x] + ", ";
   }
   console.log(alphabetOutput);
   document.getElementById("alphabet").innerHTML = alphabetOutput.slice(0,76);
   