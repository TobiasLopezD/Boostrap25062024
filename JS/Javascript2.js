let Paises =  ["CR", "USA", "PA"]
// 3 Elementos en el Array
// Los Array empiezan en la posicion 0
// 0, 1, 2

console.log(Paises)

// Para enviar posicion del array se tiene que poner dentro de parentesis [] el numero de la posicion
console.log(Paises[2]) // Muestra todo el array

//Objeto Representa algo de la vida Real example Auto, celular, Estudiante , Compu
//LLAVE : VALOR Spring, integer, Boolean, Array, Function
let Estudiante = {
    Nombre: "Pedro",
    Edad: 20,
    Activo:true,
    Materias: ["Progra1", "Base De Datos", "Calculo"]
}

console.log(Estudiante) // Muestra todo el objeto
//Visualizar un objeto especifico
console.log(Estudiante.Nombre)
console.log(Estudiante.Materias[2])

//Declaren el siguiente objeto Equipo Auto 4 propiedades string, int, boolean y array
let Lambo = {
    Pais: "Italia",
    HP: 600,
    Rapido: true,
    Especificaciones: [ "Negro", "Dorado", "Nitro", "Turbo"]
}

console.log(Lambo.Rapido)

// Profe resolucion

const  Auto = {
    Marca: "Toyota",
    Puertas: 4,
    Extras: true,
    Capacidad: [1,2,4]
}

console.table (Auto);
console.error (Auto)
console.warn(Auto)

let Mensaje = "La Pais del auto es "+Lambo.Pais+" tiene "+Lambo.HP+" Caballos de fuerza"

//Patron literal
let Mensaje2 = `La marca del auto es ${Auto.Marca} posee la cantidad de puertas, ${Auto.Puertas}`

console.table(Mensaje2)

// 3 Operadores 
//Aritmeticos

let suma = 5 + 3
let resta = 3 - 5
let multi = 5 * 2
let div = 8 / 2
let mod = 10%3 

//Comparacion
console.log(5 == 5)
console.log(5 == "5") // == igualdad debil
console.log(5 === "5") // === igualdad fuerte
console.log(5 != "5") // false
console.log(5 !== "5") // True
console.log(5 > 3) // True
console.log(5 < 1) // false

//Logicos
//&& = AND
// || = OR

console.log (true && false)
console.log (true || false)

// 4-  Estructuras de control

let pato = true
if (pato = true) { //SI
    alert ("Pato" +pato)

} else { // Si no
    alert ("no cumple")

}


let edad = 18

if ( edad >= 18) {
    alert("es mayor de edad")
} else {
    alert( "No es mayor de edad")
}
