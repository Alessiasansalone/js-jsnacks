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