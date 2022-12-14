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
    //AJR 1)
    CARD_COUNT = 52;
    //AJR 2)
    cards = [];
    //AJR 3)
    faces = ["A","2","3","4","5","6","7","8","9","10","J","Q","K"];
    //AJR 4)
    suits = ["Hearts", "Diamonds", "Clubs","Spades"];
    constructor(){
        //AJR 6)
        this.getDeckOfCards();
    };
    //Keyword "function" not needed inside the class, for declaration
    shuffle() {
        //ARJ 7.i
        for (let count = 0; count < this.CARD_COUNT; count++) {
            //ARJ 7.ii
            let secondCard = Math.floor(Math.random()* this.CARD_COUNT);
            //ARJ 7.iii
            let tempCard = this.cards[count];
            // continue here
        }        
    }    
    //AJR 5)
    getDeckOfCards() {
        //AJR 5.i
        //count is only declared inside the for function
        //"this" is used to specify it is from the dealer class
        for (let count = 0; count < this.CARD_COUNT; count++) {
            let testing = count % 13;
            let testing2 = count / 13;
            let testing3 = Math.floor(testing2);
            this.cards[count] = new Card(this.faces[count % 13],this.suits[Math.floor(count / 13)]);
        }    
    };
};
//getDeckOfCards;
//let tempCard = this.cards[position.card];
//AJR 7)
 function test () {
    let dealer = new Dealer();
    dealer.getDeckOfCards();
    console.log();
    //let sTest = CARD_COUNT * CARD_COUNT;
    //console.log(sTest);
 }
//function buildPlayingCard(card, suitIcon, faceColor, suitColor) {
//};
btnDealCards.addEventListener("click", test);