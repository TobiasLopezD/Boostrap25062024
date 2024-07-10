console.log ("Funcionando")

let Mensaje = "Hola Mundo"

// Console.log - Mostrar
//Alert - Mostrar
//Prompt  - Ingresar

console.log (Mensaje)

//resultado

//DOM
// Document Object Model

// Seleccionar el elemento del DOM por el ID y cambiar el contenido

//document obtenerporid (Aqui ID).Propiedad = Valor
// document.getElementById ("resultado").textContent = "Hola Mundo "

// document.getElementById ("resultado").style.backgroundColor = "blue"

let DivResultado = document.getElementById ("resultado")
console.log (DivResultado)

DivResultado.textContent = "Hola Mundo"
DivResultado.style.backgroundColor = "blue"
DivResultado.style.color = "White"

let TextResultado = document.getElementById ("text")
console.log (TextResultado)
TextResultado.textContent = "Contenido de texto"
TextResultado.style.backgroundColor = "Green"
TextResultado.style.color = "Yellow"

//debugger
//Obtener el valor actual del DOM
let Titulo = document.getElementById ("Titulo").value;
// Titulo.textContent = "Gato"
// Titulo.innerHTML = "Perro"

console.log (Titulo)

let nuevoparrafo = document.createElement ("p")
nuevoparrafo.textContent = "Contenido de la etiqueta"
// Agregar Etiquetas CreateElement al HTML
DivResultado.appendChild(nuevoparrafo)
console.log (nuevoparrafo)