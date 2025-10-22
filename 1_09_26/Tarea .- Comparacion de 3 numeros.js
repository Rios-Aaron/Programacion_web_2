let num1 = parseFloat(prompt("Ingresa el primer número:"));
let num2 = parseFloat(prompt("Ingresa el segundo número:"));
let num3 = parseFloat(prompt("Ingresa el tercer número:"));

// Comparar los números
if (num1 === num2 && num2 === num3) {
    alert("Los tres números son iguales.");
} else {
    // Encontrar el mayor
    let mayor = Math.max(num1, num2, num3);
    // Encontrar el menor
    let menor = Math.min(num1, num2, num3);

    alert(`El número mayor es: ${mayor}`);
    alert(`El número menor es: ${menor}`);
}