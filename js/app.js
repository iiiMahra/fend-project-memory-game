/*
 * Create a list that holds all of your cards
 */
const cardList = [
"fa fa-diamond", 
"fa fa-paper-plane-o", 
"fa fa-bolt", 
"fa fa-cube", 
"fa fa-anchor",
"fa fa-leaf", 
"fa fa-bicycle",
"fa fa-bomb",
"fa fa-diamond",
"fa fa-paper-plane-o", 
"fa fa-bolt", 
"fa fa-cube",
"fa fa-anchor",
"fa fa-leaf", 
"fa fa-bicycle",
"fa fa-bomb"
];
//array the will hold the cards that the user clicked 
let openCards = [];
//array the will hold the cards that are matched 
let matching = [];



// Shuffle function from http://stackoverflow.com/a/2450976
function shuffle(array) {
    var currentIndex = array.length, temporaryValue, randomIndex;

    while (currentIndex !== 0) {
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;
        temporaryValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temporaryValue;
    }

    return array;
}



