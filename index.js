// Code your solutions in this file

function writeCards(myList) {
    const thankYouMessages = []
    for(let name of myList) {
        thankYouMessages.push(`Thank you, ${name}, for the wonderful surprise gift!`)
    }
    return thankYouMessages;
}

function countDown(number) {
    for(let i = number; i >= 0; i--) {
        console.log(i);
    }
}