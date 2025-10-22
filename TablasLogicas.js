//Compuerta AND
const tablaAnd = [
  { x: 0, y: 0 },   // falso && falso
  { x: 0, y: 1 },   // falso && verdadero
  { x: 5, y: 0 },   // verdadero && falso
  { x: 7, y: 9 }    // verdadero && verdadero
];

console.log("Tabla del operador AND");
let and1 = tablaAnd[0].x && tablaAnd[0].y;
console.log("0 && 0 = " + and1);

let and2 = tablaAnd[1].x && tablaAnd[1].y;
console.log("0 && 1 = " + and2);

let and3 = tablaAnd[2].x && tablaAnd[2].y;
console.log("5 && 0 = " + and3);

let and4 = tablaAnd[3].x && tablaAnd[3].y;
console.log("7 && 9 = " + and4 + "\n\n");


//Compuerta OR
console.log("Tabla del operador OR");
const tablaOr = [
  { x: 0, y: 0 },   // falso || falso
  { x: 0, y: 1 },   // falso || verdadero
  { x: 5, y: 0 },   // verdadero || falso
  { x: 7, y: 9 }    // verdadero || verdadero
];

let or1 = tablaOr[0].x || tablaOr[0].y;
console.log("0 || 0 = " + or1);

let or2 = tablaOr[1].x || tablaOr[1].y;
console.log("0 || 1 = " + or2);

let or3 = tablaOr[2].x || tablaOr[2].y;
console.log("5 || 0 = " + or3);

let or4 = tablaOr[3].x || tablaOr[3].y;
console.log("7 || 9 = " + or4);
