// Chiedo all utente una parola
let userWord = prompt("Inserisci qui una parola:", "osso");
// Creo una funziona che inverte le lettere della parola e mi confronti se è uguale a quella originale
function isPalindromo(parola) {
  const parolaInvertita = parola.split("").reverse().join("");
  return parola === parolaInvertita;
}

if (isPalindromo(userWord)) {
  console.log(userWord + " è un palindromo.");
} else {
  console.log(userWord + " non è un palindromo.");
}
