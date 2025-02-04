
console.log(`Funcionando Archivo: Practica_Calculadora`);

 function enviarDatos() {
    let nombre = document.getElementById("nombre").value;
    let edad = document.getElementById("edad").value;

    // Mostrar datos al usuario, Alert, Console o Inner

    console.log(`Mostrar Nombre: `, nombre)
    console.log(`Mostrar Edad: `, edad)

    alert(`Nombre: ${nombre}, edad: ${edad}`)
}

function realizarSuma() {

console.log("Funcionando realizarSuma")

let numero1 = document.getElementById(`numero1`).value;
let numero2 = document.getElementById(`numero2`).value;
let suma = numero1 + numero2;
resultado = document.getElementById("resultado").innerHTML = `${suma}`

console.log(numero1);
console.log(numero2);
console.log(suma)
    
}