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

console.log(Lambo.HP)
