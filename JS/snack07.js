// Prova funzionamento
// console.log('07')

// Traccia
/* 
Scrivere un programma che stampi la tabellina del 2, fino al numero 1000.
Modificate poi il programma in modo che venga chiesto all’utente il numero massimo consentito, e stampare tutta la tabellina del 2 fino al numero inserito.
*/

// Dichiaro e assegno una costante in cui chiedo il numero massimo all'utente
const numMax = parseInt(prompt('Inserisci il numero massimo da stampare per calcolare la tabellina del 2'))
// Dichiaro e assegno una costante in cui indico che il numIter è numMax / 2
const numIter = numMax / 2

// Creo un ciclo in cui indico al programma che arrivati al numero inserito dall'utente si può fermare
for (let = i = 0; i <= numIter; i++) {
    console.log('2 * ' + i + ' = ' + (2 * i))
}