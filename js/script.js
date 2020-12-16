//1)Generare un numero random da 1  a 6, sia per il giocatore sia per il computer.
//3)Stabilire il vincitore, in base a chi fa il punteggio più alto.

// 1 inserisco le variabili

var nGiocatore = Math.floor(Math.random()*6) +1;
var nComputer = Math.floor(Math.random()*6) +1;
var esito;

// 2 inserisco i lanci autmatici

// Giocatore
document.getElementById("giocatore").innerHTML = Math.floor(Math.random()*6) +1;
// PC
document.getElementById("pc").innerHTML = Math.floor(Math.random()*6) +1;

//se punteggio giocatore maggiore di punteggio pc vittoria
if (nGiocatore > nComputer){
  esito = "Hai vinto!";
}
//se punteggio giocatore minore punteggio pc vittoria
else if (nGiocatore < nComputer){
  esito = "Hai perso!";
}
//mi aspetto che in caso di equivalenza dia pari
else {
  esito = "Pari";
}

 //STAMPA ESITO
 document.getElementById("esito").innerHTML = esito;
