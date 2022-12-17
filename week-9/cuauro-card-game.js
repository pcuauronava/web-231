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
            //linea 37 usa un numero ramdom para escoger la posicion de
            //ese numero en el deck
            //secondCard es un numero para el indice del array del deck
            let secondCard = Math.floor(Math.random()* this.CARD_COUNT);
            //ARJ 7.iii
            //almacena el valor de la carta que depende del indice
            //en una variable llamada tempCard
            let tempCard = this.cards[count];
            //asigna el valor de una carta random en el deck en la
            //posicion count
            this.cards[count] = this.cards[secondCard];
            //recordar la carta que estaba en la posicion 0
            this.cards[secondCard] = tempCard;
            
        }   
        //console.log();     
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
//AJR 8)
function buildPlayingCard(card, suitIcon, faceColor, suitColor) {
    return `<div class="player-card">
                <div class="card-title" style="text-align: left; font-size: 20px; padding-left: 10px; color: ${faceColor}">
                        ${card.face}
                </div>
                <div class="card-content2">
                        <span class="${suitIcon}" style="color:${suitColor}"></span>
                    <div class="player-card"></div>
                </div>
            </div>`
    //return `<div>Hello</div>`
};
//getDeckOfCards;
//let tempCard = this.cards[position.card];
//AJR 7)
 function trigger () {
    let dealer = new Dealer();
    //dealer.getDeckOfCards();
    dealer.shuffle();
    let cardOutputWithIcon = "";
    //console.log();
    //let sTest = CARD_COUNT * CARD_COUNT;
    //console.log(sTest);
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
    //let patrick = document.getElementsByClassName("player-card-container");
    //console.log(patrick);
    document.getElementById("player-card-container").innerHTML = cardOutputWithIcon;
}
btnDealCards.addEventListener("click", trigger);