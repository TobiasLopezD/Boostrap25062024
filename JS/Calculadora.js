console.log ("Funcionanado Calculadora")

function Sumar(event) {
    event.preventDefault();
    const Num1 = document.getElementById ("Num1")
    const Num2 = document.getElementById ("Num2")
    const Resultado = document.getElementById ("Resultado");

    //parseflaot convierte string a decimal
    //parseint convierte string a int
    let calculo = parseFloat(Num1.value) + parseFloat(Num2.value);
    Resultado.textContent = `El resultado es ${calculo}`

}

function Restar(event) {
    event.preventDefault();
    const Num1 = document.getElementById ("Num1")
    const Num2 = document.getElementById ("Num2")
    const Resultado = document.getElementById ("Resultado");

    //parseflaot convierte string a decimal
    //parseint convierte string a int
    let calculo = parseFloat(Num1.value) - parseFloat(Num2.value);
    Resultado.textContent = `El resultado es ${calculo}`

}