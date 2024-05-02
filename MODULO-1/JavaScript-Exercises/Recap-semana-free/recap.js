// EJERCICIO 1

for (let i = 5; i <= 50; i += 5) {
    console.log(i);
  }

// EJERCICIO 2

for (let i = 100; i >= 0; i -= 5) {
    console.log(i);
}

// EJERCICIO 3

let numerosAleatorios = [1, 2, 3, 5, 6, 7, 234, 526, 345346, 453534535435]

console.log("Numeros aleatorios en el array:", numerosAleatorios)

for (let i = 0; i < numerosAleatorios.length; i++) {
    console.log("Numero aleatorio fuera del Array:", numerosAleatorios[i])
}

// EJERCICIO 4

let	colores	=	["azul", "verde", "rosa", "naranja", "rojo", "marron"]

let colorNumero3 = colores[3]
console.log(colorNumero3)

// EJERCICIO 5
let primerCaracter = colores[0][0]
console.log(primerCaracter)