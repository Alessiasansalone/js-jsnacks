// Prova funzionamento
// console.log('07')

// Traccia
/* 
Scrivere un programma che stampi la tabellina del 2, fino al numero 1000.
Modificate poi il programma in modo che venga chiesto all’utente il numero massimo consentito, e stampare tutta la tabellina del 2 fino al numero inserito.
*/

// Creo un ciclo che stampi i numeri da 1 a 1000
for (let i = 0; i <= 1000; i++) {

    // Se i è multiplo di 2
    if (i % 2 == 0) {
        console.log(i)
    }
}