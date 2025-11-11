// Generar número aleatorio entre 1 y 10
const numeroSecreto = Math.floor(Math.random() * 10) + 1;

// Número máximo de intentos
let intentos = 3;

for (let i = 0; i < intentos; i++) {
    let intento = parseInt(prompt(`Intento ${i + 1}: Adivina el número (entre 1 y 10)`));

    if (intento === numeroSecreto) {
        alert("¡Ganaste! Adivinaste el número secreto.");
        break;
    } else {
        alert(`Fallaste. Te quedan ${intentos - (i + 1)} intentos.`);
    }

    if (i === intentos - 1) {
        alert(`Perdiste. El número secreto era ${numeroSecreto}.`);
    }
}