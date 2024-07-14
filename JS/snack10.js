// Prova funzionamento
// console.log('10')


/* TRACCIA
Scrivere un programma a cui venga chiesto all’utente di inserire numeri uno dopo l’altro.
Quando l’utente scriverà 2 volte consecutive lo stesso numero allora il programma dovrà terminare.
*/

let numeroPrecedente 
let numeroCorrente = parseInt(prompt('Inserisci un numero'))

while (numeroCorrente !== numeroPrecedente ) {
    numeroPrecedente = numeroCorrente
    numeroCorrente = parseInt(prompt('Inserisci un numero'))
}

console.log(numeroPrecedente, numeroCorrente)