// Prova funzionamento
console.log('08')


/* TRACCIA
Fate generare un numero random da 0 a 10 al computer, e chiedete all’utente di inserire un suo numero. Se il numero scelto dall’utente è uguale al numero del computer informate l’utente che ha vinto, altrimenti ha perso.
A questo punto fate giocare l’utente, fintanto che non vince la partita contro il PC
*/

// SVOLGIMENTO

// Faccio generare un numero random da 0 a 10 al computer
const randomNum = parseInt(Math.floor(Math.random() * 11)) // number
console.log(randomNum)

// Chiedo all'utente un numero da 0 a 10
let num = parseInt(prompt('A che numero sto pensando? Inserisci un numero intero da 0 a 10 e scopri se hai indovinato!')) // number

while (randomNum !== num) {
    console.log('HAI PERSO! Ritenta, sarai più fortunato.')
    num = parseInt(prompt('A che numero sto pensando? Inserisci un numero intero da 0 a 10 e scopri se hai indovinato!')) // number
}

console.log('CONGRATULAZIONI! Hai vinto!!')



/*
snack 10
Scrivere un programma a cui venga chiesto all’utente di inserire numeri uno dopo l’altro.
Quando l’utente scriverà 2 volte consecutive lo stesso numero allora il programma dovrà terminare.
*/