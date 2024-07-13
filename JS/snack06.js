// Prova funzionamento
// console.log('06')


// TRACCIA
/*
snack 06
Fate generare un numero random da 0 a 10 al computer, e chiedete all’utente di inserire un suo numero. Se il numero scelto dall’utente è uguale al numero del computer informate l’utente che ha vinto, altrimenti ha perso.
*/

// Faccio generare un numero random al computer
const randomNum = parseInt(Math.random() * 11) // number
// console.log(randomNum)

// Chiedo all'utente un numero da 0 a 10 
let num = parseInt(prompt('Indovina a che numero sto pensando! Inserisci un numero intero da 0 a 10')) // number
// console.log(num)

// SE il numero è maggiore di 10
if (num > 10) {
    // Informa l'utente di inserire un numero corretto
    console.log('Questo numero è troppo grande! Inserisci un numero da 0 a 10')
}
// ALTRIMENTI SE il numero scelto dall'utente è minore di 0
else if (num < 0)
    // Informa l'utente che il numero è troppo piccolo
    console.log('Questo numero è troppo piccolo! Inserisci un numero da 0 a 10')
// ALTRIMENTI SE il numero scelto dall'utente è uguale al numero random
else if (num === randomNum) {
    // Informa l'utente che ha vinto
    console.log('CONGRATULAZIONI!! HAI VINTO!!')
}
// ALTRIMENTI
else {
    // Informa l'utente che ha perso
    console.log('Mi dispiace, pensavo al numero ' + randomNum + '. Ritenta! Sarai più fortunato!')
}



/*
snack 08
Fate generare un numero random da 0 a 10 al computer, e chiedete all’utente di inserire un suo numero. Se il numero scelto dall’utente è uguale al numero del computer informate l’utente che ha vinto, altrimenti ha perso.
A questo punto fate giocare l’utente, fintanto che non vince la partita contro il PC 

snack 10
Scrivere un programma a cui venga chiesto all’utente di inserire numeri uno dopo l’altro.
Quando l’utente scriverà 2 volte consecutive lo stesso numero allora il programma dovrà terminare.
 */