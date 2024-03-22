
// Prendiamo input dall'utente tramite prompt e lo assegniamo ad una variabile
let userName = prompt("Ciao! Qual è il tuo nome?");  //string
userName = userName.toString(); //trasformiamo in stringa qualora venisse inserito un numero
console.log(userName, typeof userName);


let userSurname = prompt("Ciao," + " " + userName + ", qual è il tuo cognome?");  //string
userSurname = userSurname.toString(); //trasformiamo in stringa qualora venisse inserito un numero
console.log(userSurname, typeof userSurname);

let userColor = prompt(userName + " " + userSurname + ", qual è il tuo colore preferito?"); //string
userColor = userColor.toString(); //trasformiamo in stringa qualora venisse inserito un numero
console.log(userColor, typeof userColor);

//Creazione numero random
let randomNum = Math.floor(Math.random() * 101); //number
randomNum = randomNum.toString(); //trasformiamo il numero in stringa
console.log(randomNum, typeof randomNum);


// Creazione password tramite concatenazione degli input e del numero random
let password = userName + userSurname + userColor + randomNum;
console.log(password, typeof password);

document.getElementById("password").innerHTML = `
    La tua password super sicura è: ${password}
`;




