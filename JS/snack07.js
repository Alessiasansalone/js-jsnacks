// Prova funzionamento
// console.log('07')

// Traccia
/* 
Scrivere un programma che stampi la tabellina del 2, fino al numero 1000.
Modificate poi il programma in modo che venga chiesto all’utente il numero massimo consentito, e stampare tutta la tabellina del 2 fino al numero inserito.
*/

/* SVOLGIMENTO
// Dichiaro e assegno una costante in cui chiedo il numero massimo all'utente
const numMax = parseInt(prompt('Inserisci il numero massimo da stampare per calcolare la tabellina del 2'))
// Dichiaro e assegno una costante in cui indico che il numIter è numMax / 2
const numIter = Math.floor(numMax / 2)

// Creo un ciclo in cui indico al programma che arrivati al numero inserito dall'utente si può fermare
for (let i = 0; i <= numIter; i++) {
    console.log('2 * ' + i + ' = ' + (2 * i))
}
*/

// CORREZIONE CON CICLO WHILE

// Dichiaro e assegno una costante in cui chiedo il numero massimo all'utente
const numMax = parseInt(prompt('Inserisci il numero massimo da stampare per calcolare la tabellina del 2'))
// Dichiaro e assegno una costante in cui indico che il numIter è numMax / 2
const numIter = Math.floor(numMax / 2)

// Dichiaro il numero da cui parto
let num = 0
// Dichiaro un indice
let i = 0

 
while (num < numMax) {
    // num sarà uguale a i * 2
    num = i * 2
    // Stampo la tabellina
    console.log('2 * ' + i + ' = ' + num)
    // incremento
    i++
}