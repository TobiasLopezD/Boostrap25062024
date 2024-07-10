// Tarea JS trate de utilizar funciones para encapsular su codigo . 


// Soluciones de tarea
//1.
let nombre = prompt("Ingresa tu nombre:");

saludar (nombre)

function saludar() {
    console.log("Hola a " + nombre);
}

//2.
let Edad = prompt("Ingresa tu edad:")
ValidarEdad (Edad)
// Verificar si la persona es mayor de edad y mostrar el resultado en la consola
function ValidarEdad() {
    
    if (Edad>=18) {
        MensajeExitoso()
        
    } else {
        MensajeFallido()
        

    }
}

function MensajeExitoso() {
    console.log ("Es mayor de edad")
}

function MensajeFallido() {
    console.log ("No es mayor de edad")
}

//3-Crear un objeto con información de un libro y mostrar una propiedad
// Crear un objeto llamado 'libro' con propiedades 'titulo', 'autor' y 'año'
let libro = {
    Titulo: "Atomic Habits",
    Autor : "James Clear",
    Año: 2018,


}

let mensaje = "El libro fue escrito por "+libro.Autor+""
// Mostrar la propiedad "El libro fue escrito por : 'autor' " 'autor' del objeto en la consola
console.log(mensaje);

//4-Verificar si una cadena esta vacia

// Solicitar al usuario ingresar una cadena o string

let cadena = prompt("ingrese una cadena:");

// Verificar si la cadena esta vacia y mostrar el resultado en la consola

if (cadena === "") {
    console.log("la cadena esta vacia ");

} else {
    console.log("la cadena no esta vacia")
}


//5-Usar un switch para mostrar el día de la semana

// Solicitar al usuario ingresar un número del 1 al 7
let DiaSemana = prompt("Ingresa un número del 1 al 7:");

dia(DiaSemana)

function dia(DiaSemana)
{
switch (DiaSemana) {

case "1": 
    console.log ("Es lunes")
        break;

    case "2": 
    console.log ("Es Martes")
        break;

    case "3": 
    console.log ("Es Miércoles")
    break;
    
    case "4": 
    console.log ("Es Jueves")
    break;
    
    case "5": 
    console.log ("Es Viernes")
        break;

    case "6": 
    console.log ("Es Sábado")
        break;
    
    case "7": 
    console.log ("Es Domingo")
        break;


        

default:
        alert("Not a valid day");
    break;  

}
}

// Mostrar el día de la semana correspondiente usando un switch


//6-Crear un array y mostrar la posicion 7 y 0
// Crear un array llamado 'Pokemones' con al menos 10 Especies

var Pokemon = ["Lugia", "Mew" , "Gengar", "Charizard", "Squirtle", "Lucario", "Greyninja", "Pikachu", "Bulbazur", "Pidgeot"]

console.table (Pokemon [7]), console.log (Pokemon [0]);

// Pokemon en posicion 7 Pikachu y la posicion 0 lugia.


//7-Usar un operador lógico para verificar si un número está en un rango
// Solicitar al usuario ingresar un número
let Numero = prompt("Ingresa un número:");

ValidarNumero(Numero)
// Verificar si el número está entre 1 y 10, y mostrar el resultado en la consola
function ValidarNumero(Numero = [0,1,2,3,4,5,6,7,8,9,10]) {
    if (Numero == 0) {
        console.log("El numero es: " + Numero);
    } 

    else if (Numero == 1) {
        console.log("El numero es: " + Numero);
    }

    else if (Numero == 2) {
        console.log("El numero es: " + Numero);
    }

    else if (Numero == 3) {
        console.log("El numero es:" + Numero);
    }

    else if (Numero == 4) {
        console.log("El numero es: " + Numero);
    }


    else if (Numero == 5) {
        console.log("El numero es: " + Numero);
    }


    else if (Numero == 6) {
        console.log("El numero es: " + Numero);
    }


    else if (Numero == 7) {
        console.log("El numero es: " + Numero);
    }


    else if (Numero ==8) {
        console.log("El numero es: " + Numero);
    }


    else if (Numero == 9) {
        console.log("El numero es: " + Numero);
    }

    else if (Numero == 10) {
        console.log("El numero es: " + Numero);
    }
    else {
        console.log( "Este numero " + Numero, "no esta en lista");
    }
}


//8 Sumar dos números ingresados por el usuario

// Solicitar al usuario ingresar dos números
let numero1 = parseFloat(prompt("Ingresa el primer número:"));
let numero2 = parseFloat(prompt("Ingresa el segundo número:"));



// Sumar los números y mostrar el resultado en la consola
let suma = (numero1 + numero2)
console.log("La suma es: " +suma);


//9 Crear una constante y mostrarla en consola

// Crear una constante llamada 'pi' y asignarle un valor
const pi = 3.14
// Mostrar el valor de 'pi' en la consola
console.log("El valor de pi es: " +pi);

// 10 Verificar si una persona puede votar
// Instrucción: Solicitar al usuario ingresar su edad y nacionalidad. Crear una función que verifique si la persona puede votar. La persona puede votar si tiene 18 años o más y es de nacionalidad 'peruana' o 'colombiana'.

// Solicitar al usuario ingresar su edad y nacionalidad
let EdadCiudadano = prompt("Ingresa tu edad:");
let nacionalidad = prompt("Ingresa tu nacionalidad:");


votar (EdadCiudadano, nacionalidad)

// Función para verificar si la persona puede votar
function votar (EdadCiudadano, nacionalidad) {

    if (EdadCiudadano >= 18 && (nacionalidad === "colombiana"|| nacionalidad === "peruana" )) {
        console.log ("Puede votar la nacionalidad " + nacionalidad)
    } else {
        console.log ("No puede votar la nacionalidad " + nacionalidad)
    }
}

//11  Determinar si una persona está en edad escolar
// Instrucción: Solicitar al usuario ingresar su edad y verificar si la persona está en edad escolar (de 6 a 18 años) o si es un adulto mayor (65 años o más).
// Solicitar al usuario ingresar su edad
let edad = parseInt(prompt("Ingresa tu edad:"));
let resultado = verificarEdad (edad)

// Función para verificar si la persona está en edad escolar o es adulto mayor
function verificarEdad(edad) {
    if (edad >= 6 && edad <= 18) {
    console.log ("eres estudiantes")
    } else if (edad >= 65){
    console.log("Eres adulto mayor")
    } else {
    console.log ("No es estudiante ni adulto mayor")
    }
}