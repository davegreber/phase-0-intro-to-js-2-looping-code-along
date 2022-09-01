// Code your solutions in this file
/*
for (let age = 30; age < 40; age++) {
    console.log(`I'm ${age} years old. Happy Birthday to me!`);
    
}

const gifts = ["teddy bear", "drone", "doll"];

function wrapGifts(gifts) {
  for (let i = 0; i < gifts.length; i++) {
    console.log(`Wrapped ${gifts[i]} and added a bow!`);
  }
  return gifts;
}

wrapGifts(gifts);

*/

/*





  const gifts = ["teddy bear", "drone", "doll"];

  function wrapGifts(gifts) {
    let i = 0; // the initialization moves OUTSIDE the body of the loop!
    while (i < gifts.length) {
      console.log(`Wrapped ${gifts[i]} and added a bow!`);
      i++; // the iteration moves INSIDE the body of the loop!
    }
  
    return gifts;
  }
  
  wrapGifts(gifts);

*/

let names = ["Guadalupe", "Ollie", "Aki"]
let event = "surprise"
const messages = [];

function writeCards(names, event) {

for (let i = 0; i < names.length; i++) {
  const message = `Thank you, ${names[i]}, for the wonderful ${event} gift!`;
  messages.push(message);
}
return messages;

}

function countDown(){
    for (let countdown = 10; countdown >= 0; countdown--) {
        console.log(countdown);
      }
}
