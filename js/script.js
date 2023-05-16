let nome = prompt(`Come ti chiami?`);
console.log(`nome`);

let cognome = prompt(`Qual'è il tuo cognome?`);
console.log(`cognome`);

let colore = prompt(`Qual'è il tuo colore preferito?`);
console.log(`colore`);

let informazioni = nome + cognome + colore;
console.log(`informazioni`);

document.getElementById(`info`).innerHTML = (`${informazioni}${21}`);
