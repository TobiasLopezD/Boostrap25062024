//Formulario
//Nombre y apellido
//Y al darle click, Mostrar en un DIV



console.log ("Funcionando")

function Guardar(event) {
    event.preventDefault();
    const formulario = document.getElementById ("formulario");
    const valor1 = document.getElementById ("valor1").value;
    const valor2 = document.getElementById ("valor2").value;
    const valorrespuesta = document.getElementById ("valorrespuesta");

    alert (`EL valor1 es ${valor1} el valor2 es ${valor2}`)
    valorrespuesta.textContent = `EL valor1 es ${valor1} el valor2 es ${valor2}`

    debugger
}