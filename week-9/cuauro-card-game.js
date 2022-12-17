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
            //Uses a random number to select a card based on the index.
            //secondCard is a number to be used with the index.
            let secondCard = Math.floor(Math.random()* this.CARD_COUNT);
            //ARJ 7.iii
            //store the value of the card that depends of the index
            //in a variable called tempCard.
            let tempCard = this.cards[count];
            //Assigns the value of a random card from the deck to the "count" position.
            this.cards[count] = this.cards[secondCard];
            //Remember the card that was on the position 0.
            this.cards[secondCard] = tempCard;
        }   
    }    
    //AJR 5)
    getDeckOfCards() {
        //AJR 5.i
        //count is only declared inside the for function the scope is local.
        //the keyword "this" is used to specify it is from the dealer class.
        for (let count = 0; count < this.CARD_COUNT; count++) {
            let testing = count % 13;
            let testing2 = count / 13;
            let testing3 = Math.floor(testing2);
            this.cards[count] = new Card(this.faces[count % 13],this.suits[Math.floor(count / 13)]);
        }    
    };
};
//AJR 8)
function buildPlayingCard(card, suitIcon, faceColor, suitColor) {
    return `<div class="player-card">
                <div class="card-title" style="text-align: left; font-size: 15px; padding-left: 10px; color: ${faceColor}">
                        ${card.face}
                </div>
                <div class="card-content">
                        <span class="${suitIcon}" style="color:${suitColor}"></span>
                    <div class="card-title" style="text-align: right; font-size: 15px; padding-left: 10px; color: ${faceColor}">
                    ${card.face}</div>
                </div>
            </div>`
};
//AJR 7)
 function trigger () {
    let dealer = new Dealer();
    dealer.shuffle();
    let cardOutputWithIcon = "";
    for (const card of dealer.cards) {
        switch (card.suit) {
            case "Hearts":
            cardOutputWithIcon += buildPlayingCard(card, "mdi mdi-heart","red","red");
            break;
            case "Diamonds":
                cardOutputWithIcon += buildPlayingCard(card, "mdi mdi-cards-diamond","red","red");
            break;
            case "Clubs":
                cardOutputWithIcon += buildPlayingCard(card, "mdi mdi-cards-club","black","black");
            break;
            case "Spades":
                cardOutputWithIcon += buildPlayingCard(card, "mdi mdi-cards-spade","black","black");
            break;
        }
    }
    document.getElementById("player-card-container").innerHTML = cardOutputWithIcon;
}
btnDealCards.addEventListener("click", trigger);