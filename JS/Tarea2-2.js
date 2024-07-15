console.log ("Funcionando")

function calcularIMC(event) {
    event.preventDefault();
    const resultado = document.getElementById ("resultado");  
    const SolicitudDePeso = document.getElementById ("SolicitudDePeso");
    const peso = document.getElementById ("peso").value;
    const altura = document.getElementById ("altura").value;

    const imc = peso / (altura *  altura)
    console.log("Su IMC es: " + Math.round (imc));
    
    


clasificar (imc) 
function clasificar(imc) {    
    if (imc <= 18.5 ) {
        console.log ("Bajo de Peso");
    } 
    else if (imc <=24.9){
        console.log ("Peso normal");
    }
    else if (imc <= 29.9){
        console.log ( "Sobre peso");
    } else if (imc >=30 ) {
        console.log( "Obesidad") ; 

    } else {
        return "Nutricionsita de inmediato" ;
    }
    
    
    

}
}