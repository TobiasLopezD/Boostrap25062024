console.log ("Funcionando")

function calcularIMC(event) {
    event.preventDefault();
    let resultado = document.getElementById ("resultado");  
    let SolicitudDePeso = document.getElementById ("SolicitudDePeso");
    let peso = document.getElementById ("peso").value;
    let altura = document.getElementById ("altura").value;

    let imc = peso / (altura *  altura)
    let clasificar = ""
    
    switch (true) {
        case (imc<  18.5):
                clasificar = "Bajo peso"
            break;
        case (imc >= 18.5 && imc < 25):
                clasificar = "Peso normal"
            break;
                
        case (imc >= 25 && imc < 29.9):
                clasificar = "sobrepeso"
            break;
                
        case (imc >= 30):
                clasificar = "Obeso"
            break;
    
        default:
            clasificar = " no se puedo clasificar"
    }    


    resultado.textContent = `Su peso es:  ${peso}kg , y su altura es: ${altura}cm. Estas clasificado como: ${clasificar}`
    


}