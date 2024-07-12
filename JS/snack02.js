// Prova funzionamento
// console.log('02')

// Traccia
/* 
L’utente inserisce due parole in successione, con due prompt.
Il software stampa prima la parola più corta, poi la parola più lunga.
*/

// Chiediamo due parole all'utente
const word1 = prompt ('Inserisci una parola')
// console.log(word1)

const word2 = prompt ('Inserisci un\'altra parola')
// console.log(word2)

let firstWord = word1.length > word2.length
let secondWord = word2.length > word1.length
let sameWord = word1.length = word2.length 

if (firstWord) {
    console.log ('la parola ' + word1 + ' è più lunga')
}
else if (secondWord) {
    console.log ('la parola ' + word2 + ' è più lunga')
}
else if (sameWord) {
    console.log('la parola ' + word1 + ' e la parola ' + word2 + ' hanno la stessa lunghezza')
}