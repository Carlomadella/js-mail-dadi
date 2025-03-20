// fare 6 push

// Esercizio 1: Mail

// Scaletta Mail:

// 1. Creare una array con lista di email di invitati ad una festa.
// 2. Chiedere all’utente la sua email
// 3. creare ciclo for per controllare che sia nella lista di chi può accedere.
//  3a. 
// 4. Stampa un messaggio appropriato sull’esito del controllo, utilizzando un ciclo for. 
// Nota: Non è necessario provvedere alla validazione delle email

// array delle mail
const mailList = ["BrunoBarbieri@libero.it", "Travis_Scott@houston.com", "RiccardoRossi@mozzilla.net", "AntonioBianchi@repair.it", "Rick@Sanchez.morty", "Boolean@classe143.it"];
// variabile che contiene l'email 
const userEmail = prompt("Inserisci la tua email");

// console.log(userEmail);

let checkList = false;

for (let i = 0; i < mailList.length; i++) {
    if (mailList[i] == userEmail) {
        checkList = true;
    }
}

if (checkList == false) {
    console.log("Non sei presente tra la lista degli invitati");
}
else{
    console.log("Sei tra gli invitati, ci vediamo venerdì alle 18");
}

