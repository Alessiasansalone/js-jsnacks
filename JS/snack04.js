// Prova funzionamento
// console.log('04')

// Traccia
/*
In un array sono contenuti i nomi degli invitati alla festa del grande Gatsby, chiedi all’utente il suo nome e comunicagli se può partecipare o no alla festa.
*/

// Creiamo lista Array
let invited = ['Jessica', 'Cristina', 'Vincenzo', 'Chris', 'Niko', 'Roberta', 'Sabrina', 'Lorenza', 'Gioele', 'Lorenzo']

// Chiediamo il nome all'utente
let inputName = prompt('Inserisci il tuo nome con la prima l\'iniziale maiuscola')

// "Se "name" è presente in "invited"
if (invited.includes(inputName)) {
    console.log('Ciao '+ inputName + '! Sei invitata/o alla nostra festa a tema Grande Gatsby! Ti aspettiamo alle 20:30, non mancare!!')
}
else {
    console.log('ACCESSO NEGATO')
}