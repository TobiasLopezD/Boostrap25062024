console.log ("Funcionando")

function enviarSolicitud (event) {
    event.preventDefault();
    const resultado = document.getElementById ("resultado");  
    const formularioSolicitud = document.getElementById ("formulario");
    const nombre = document.getElementById ("nombre").value;
    const email = document.getElementById ("email").value;
    const asunto = document.getElementById ("asunto").value;
    const mensaje = document.getElementById ("mensaje").value;
    const copia = document.getElementById ("copia").value;

    let envio 
    switch (copia ) {
        case "si":
                envio = copia
            break;
        case "no":
                envio = copia
            break;
        default:
            envio = "Opcion no valida"
            break;
    }

    resultado.textContent = `${envio} se enviara la copia`

    console.log (copia)
}






