/*
==============================================
;   Title: card-game.js
;   Author: Patrick Cuauro
;   Date: 12 12 2022
;   Modified by: Patrick Cuauro
;   Description: JavaScript file Card Game page
==============================================
*/
//AJR a)
class Card {
    constructor (face, suit) {
    this.face = face;
    this.suit = suit;
    }
}
//AJR b)
class Dealer {
    constructor() {
    getDeckOfCards();
    }
}
//AJR 1)
let CARD_COUNT = 52;
//AJR 2)
let cards = [];
//AJR 3)
const faces = ["A","2","3","4","5","6","7","8","9","10","J","Q","K"];
//AJR 4)
const suits = ["Hearts", "Diamonds", "Clubs","Spades"];

//let tempCard = this.cards[position.card];
//AJR 5)
function getDeckOfCards() {
for ( let CARD_COUNT in cards) {
    //count<this.CARD_COUNT;
    this.cards[count] = new Card(this.faces[count % 13], this.suits[Math.floor(count / 13)]);
}};
function shuffle() {
Math.floor(Math.random()* this.CARD_COUNT);    
}
function test () {
    let sTest = CARD_COUNT * CARD_COUNT;
    console.log("sTest");
}
function buildPlayingCard(card, suitIcon, faceColor, suitColor) {
};
btnDealCards.addEventListener("click", test());