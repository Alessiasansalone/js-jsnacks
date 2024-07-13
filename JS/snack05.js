// Prova funzionamento
// console.log('05')


// TRACCIA 
/*
snack 05
Crea un array vuoto.
Chiedi per 6 volte all’utente di inserire un numero,
se è dispari inseriscilo nell’array. Stampa l’array alla fine.
*/

// Creo un array vuoto
const oddNumbers = []

for (let i = 0; i < 6; i++) {
    // Chiedo 5 numeri all'utente
    const num = parseInt(prompt('Inserisci un numero intero'))
    // console.log(num)

    // SE il numero è dispari
    if (num % 2 !== 0) {
        // Allora pusho il numero all'interno dell'array
        oddNumbers.push(num)
    }
}

    // Stampo l'array
    console.log(oddNumbers)


/*
snack 06
Fate generare un numero random da 0 a 10 al computer, e chiedete all’utente di inserire un suo numero. Se il numero scelto dall’utente è uguale al numero del computer informate l’utente che ha vinto, altrimenti ha perso.

snack 08
Fate generare un numero random da 0 a 10 al computer, e chiedete all’utente di inserire un suo numero. Se il numero scelto dall’utente è uguale al numero del computer informate l’utente che ha vinto, altrimenti ha perso.
A questo punto fate giocare l’utente, fintanto che non vince la partita contro il PC 

snack 10
Scrivere un programma a cui venga chiesto all’utente di inserire numeri uno dopo l’altro.
Quando l’utente scriverà 2 volte consecutive lo stesso numero allora il programma dovrà terminare.
 */