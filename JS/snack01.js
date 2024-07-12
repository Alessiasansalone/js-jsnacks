// Prova funzionamento 
// console.log('01')

// Traccia 
/* 
L’utente inserisce due numeri in successione, con due prompt.
Il software stampa il maggiore. 
*/

// Chiediamo due numeri all'utente
const num1 = prompt ('Inserisci un numero') // string
// console.log(num1)

const num2 = prompt ('Inserisci il secondo numero') // string
// console.log(num1)

// Il software stampa il maggiore
if (num1 > num2) {
    console.log('il numero ' + num1 + ' è maggiore') // string
}
else if (num2 > num1) {
    console.log('il numero ' + num2 + ' è maggiore') // string
}
else if (num1 == num2) {
    console.log('I numeri sono uguali') // string
}