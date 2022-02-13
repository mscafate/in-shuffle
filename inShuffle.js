const deck = [];

function createDeck(deck) {
  for (let i = 1; i < 53; i++) {
    deck.push(i);
  }
}

//deck = array filled with integers from 1 - 52
//numShuffle = the number of times you decide to shuffle
function inShuffle(deck, numShuffle) {
  const half = Math.ceil(deck.length / 2);
  const firstHalf = deck.slice(0, half);
  const secondHalf = deck.slice(-half);
  const newDeck = [];
  if (numShuffle > 0) {
    for (let i = 0; i < firstHalf.length; i++) {
      newDeck.push(secondHalf[i]);
      newDeck.push(firstHalf[i]);
    }
    numShuffle -= 1;
    return inShuffle(newDeck, numShuffle);
  } else {
    return deck;
  }
}

function firstToBottom(deck) {
  var val = 0;
  inShuffle(deck, 1);
  console.log(deck);
  /*
  for (let i = 1; i < 100; i++) {
    inShuffle(deck, i);
    console.log(deck);
    if (deck[52] === 1) {
      val = i;
      return val;
    }
  }
  */
}

createDeck(deck);

function clearArray() {
  document.getElementById("array").innerHTML = "";
}

function display() {
  const numShuffle = document.getElementById("num-shuffle").value;
  const newDeck = inShuffle(deck, numShuffle);
  document.getElementById("array").innerHTML = newDeck;
}
console.log(firstToBottom(deck));
// using the console
/*
createDeck(deck);
console.log(deck); //original deck
console.log(inShuffle(deck, 7)); //deck shuffled 7 times
console.log(inShuffle(deck, 7)); //deck shuffled 25 times
console.log(inShuffle(deck, 7)); //deck shuffled 26 times
*/
