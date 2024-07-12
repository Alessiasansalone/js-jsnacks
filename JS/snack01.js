// Prova funzionamento 
// console.log('01')

// Traccia 
/* 
L’utente inserisce due numeri in successione, con due prompt.
Il software stampa il maggiore. 
*/

/* ESERCIZIO SVOLTO

// Chiediamo due numeri all'utente
let num1 = prompt ('Inserisci un numero') // string
// console.log(num1)

let num2 = prompt ('Inserisci il secondo numero') // string
// console.log(num1)

// Il software stampa il maggiore
// Se num1 > num2 
if (num1 > num2) {
    // Allora stampo num1
    console.log('il numero ' + num1 + ' è maggiore') // string
}
// Se num2 > num1
else if (num2 > num1) {
    // Allora stampo num2
    console.log('il numero ' + num2 + ' è maggiore') // string
}
// Se num1 = num2 
else if (num1 == num2) {
    console.log('I numeri sono uguali') // string
}
*/

// CORREZIONE DI GIANLUCA

// Chiediamo due numeri all'utente
let a = parseFloat(prompt('Inserisci un numero')) // number or null
// console.log(num1)

let b = parseFloat(prompt('Inserisci un secondo numero')) // number or  null
// console.log(num1)

// Dichiariamo una variabile 
let highest 

// Se il primo numero è maggiore del secondo
if (a > b) {
    highest = a // number
}
// Se num2 > num1
else if (b > a) {
    highest = b // number
}

// Stampo il maggiore 
console.log('il maggiore è ' + highest) // string