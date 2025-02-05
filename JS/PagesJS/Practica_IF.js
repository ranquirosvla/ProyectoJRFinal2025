console.log(`Funcionando Archivo: Practica_IF`);



// caso 1

function verificarEdad() {
    let edad = document.getElementById(`edad`).value;
    let pais = document.getElementById(`pais`).value;
    
    console.log(edad);
    console.log(pais)

    if (edad >= 18) {
        alert(`Eres mayor de edad en ${pais}`)
    } else {
        alert(`NO eres mayor de edad en ${pais}`)
    } 
}

function verificarParImpar() {
    let numero3 = document.getElementById(`numero3`).value;

    let numeroconvertido = parseInt(numero3)

    if (numeroconvertido % 2 ==0) {
        
        document.getElementById("mensajeParImpar").innerText = `El numero: ${numeroconvertido} es par`
       // alert("Es Par")
       // document.getElementById()
    } else {
        document.getElementById("mensajeParImpar").innerText = `El numero: ${numeroconvertido} es impar`
        //alert("No Es Par")
    }
    console.log(numeroconvertido)
    
}

function evaluarNota() {
    
    let nota = document.getElementById('nota').value;

    let numeroconvertido = parseInt(nota)
    console.log(numeroconvertido)

    //mayor de 90 excelente nota
    //mayor a 70 aprobado 
    //menor 70 reprobado 
    if (numeroconvertido >= 90) {
       // alert("excelente nota")
        document.getElementById('mensajeNota').innerText = `El resultado es excelente nota`;
    }
    else if(numeroconvertido >= 70){
       // alert("aprobado")
        document.getElementById('mensajeNota').innerText = `El resultado es aprobado`;
    }     
    else {
        //alert("reprobado")
        document.getElementById('mensajeNota').innerText = `El resultado es reprobado`;
    }
}

function calcularDescuento() {
    let monto = document.getElementById('monto').value;
    
    let numeroconvertido = parseInt(monto)
    console.log(numeroconvertido)
    let num1 = 0;
    num1 = (parseInt(numeroconvertido) * 0.10);
   
    if (numeroconvertido >= 100) {
       
        document.getElementById('mensajeDescuento').innerText = `Felicidades, tu monto de compra es igual a ${numeroconvertido} y tienes un descuento de: ${num1}`;
    
    } else {
        
        document.getElementById('mensajeDescuento').innerText = `Lo sentimos, tu monto de: ${numeroconvertido} no es suficiente para un descuento`;
    }
}

function verificarMayorMenor() {
    let edad = document.getElementById('edadSimple').value;
    let edad1 = parseInt(edad);
    console.log(edad1)

    if (edad1 >= 18) {
        document.getElementById('mensajeEdadSimple').innerText = `Eres mayor de edad, ya que tienes:  ${edad1} años`;
    
    } else {
       document.getElementById('mensajeEdadSimple').innerText = `No eres mayor de edad, ya que tienes solamente:  ${edad1} años`
    }
}

//parse int
//parseFloat decimales
//monto * 0.9