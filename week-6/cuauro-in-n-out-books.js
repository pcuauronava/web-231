/*
==============================================
;   Title: cuauro-in-n-out-books.js
;   Author: Patrick Cuauro
;   Date: 11 22 2022
;   Modified by: Patrick Cuauro
;   Description: JavaScript file for In and Out Books 
==============================================
*/
//let books;
const mereChristianity = {
    isbn: 9780002155403,
    title: "Mere Christianity",
    pages: 256
}
const socialism = {
    isbn: 9780913966624,
    title: "Socialism",
    pages: 633
}
const inheritTheEarth = {
    isbn: 9780930462567,
    title: "Inherit the Earth",
    pages: 96
}
const csLewis = {
    name: "C.S. Lewis",
    genre: "Christian"    
}
const garyNorth = {
    name: "Gary North",
    genre: "Christian"
}
const ludvigVonMises = {
    name: "Ludvig Von Mises",
    genre: "Economics"
}
document.getElementById("bookIsbn1").innerHTML = mereChristianity.isbn;
document.getElementById("bookAuthor1").innerHTML = mereChristianity.title;
document.getElementById("bookPages1").innerHTML = mereChristianity.pages;
document.getElementById("bookIsbn2").innerHTML = socialism.isbn;
document.getElementById("bookAuthor2").innerHTML = socialism.title;
document.getElementById("bookPages2").innerHTML = socialism.pages;
document.getElementById("bookIsbn3").innerHTML = inheritTheEarth.isbn;
document.getElementById("bookAuthor3").innerHTML = inheritTheEarth.title;
document.getElementById("bookPages3").innerHTML = inheritTheEarth.pages;
document.getElementById("authorName1").innerHTML = csLewis.name;
document.getElementById("authorGenre1").innerHTML = csLewis.genre;
document.getElementById("authorName2").innerHTML = garyNorth.name;
document.getElementById("authorGenre2").innerHTML = garyNorth.genre;
document.getElementById("authorName3").innerHTML = ludvigVonMises.name;
document.getElementById("authorGenre3").innerHTML = ludvigVonMises.genre;

btnDisplayListing.addEventListener("click", function() {
    //This two lines are for resetting the style display after the a selection is done
    //and then change the selection again.
    document.getElementById("books").style.display = "none"
    document.getElementById("authors").style.display = "none"
    let choice = document.getElementById("favoriteList").value;
    console.log(choice);
    //This line of code is to determine when the selection is made compare it
    //and return enable the right card
    if (choice == "select") {
        alert("Please make a selection");
    }
    else if (choice == "books") {
        document.getElementById("books").style.display = "block";
        console.log("books");
    }
    else if (choice == "authors") {
        document.getElementById("authors").style.display = "block";
        console.log("authors");
    }
});