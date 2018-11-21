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

/*-------------------Create cards-----------------*/
const cardListContainer = document.querySelector('.deck');
function creatingCards(){
//shuffle the list of cards
	shuffle(cardList);
//loop through each card and create its HTML	
	for(let i = 0; i < cardList.length; i++){
		const card = document.createElement('li');
		card.innerHTML = "<i class='" + cardList[i] + "'</i>";
		card.classList.add('card');
//add each card's HTML to the page		
		cardListContainer.appendChild(card);
//call click event function
		clickEvent(card); 
	}
}

/*-------------------Show cards-----------------*/
//set up the event listener for a card
function clickEvent(card){
	card.addEventListener('click', function(){	
//display the card's symbol		
		if(openCards.length === 1){
			card.classList.add('show');
			card.classList.add('open');
			card.classList.add('oneClick');
//add the card to a *list* of "open" cards
			openCards.push(this); 
			//call countMoves function
			countMoves();
//calling checking function
			const firstCard = openCards[0];
			const newCard = this;
			checking(newCard, firstCard);
		}
		else{
			card.classList.add('show');
			card.classList.add('open');
			card.classList.add('oneClick');
			openCards.push(this); 
		}
	});

}

/*-------------------Cards checking-----------------*/

//check to see if the two cards match
function checking(newCard, firstCard){
		if(newCard.innerHTML === firstCard.innerHTML){
			newCard.classList.add('match');
			firstCard.classList.add('match');
//add the matched cards into the array
			matching.push(newCard);
			matching.push(firstCard);			
//this will empty the array so new cards added to it
			openCards=[];
			}
//if the cards do not match
		else {
			setTimeout( function(){
				
				newCard.classList.remove('show');
				newCard.classList.remove('open');
				newCard.classList.remove('oneClick');
				firstCard.classList.remove('show');
				firstCard.classList.remove('open');
				firstCard.classList.remove('oneClick');
			}, 800);
			openCards=[];	
			}
//when all cards all matched call popup function
			popup(); 
}

/*-------------------score-panel--------------------------*/
/*-------------------Timer----------------------*/
const timer = document.querySelector('.timer');
let theTimer;
timer.innerHTML = "Timer: 0 sec";
let second = 0;

// start the timer
function startTimer(){
	theTimer = setInterval (function(){
		second++;
		timer.innerHTML = "Timer: "+second+" sec";
	},1000);
}
// reset timer
function timerReset(){
	second = 0;
	timer.innerHTML = "Timer: "+second+" sec";
	clearInterval(theTimer);
	startTimer();
}



