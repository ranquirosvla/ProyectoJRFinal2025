console.log(`Funcionando Archivo: Practica_CICLO`);
let personas = [
    { nombre: "Juan", edad: 25, activo: true },
    { nombre: "Ana", edad: 17, activo: false },
    { nombre: "Carlos", edad: 30, activo: true },
    { nombre: "Laura", edad: 16, activo: true },
    { nombre: "Pedro", edad: 40, activo: false }
];

let clientes = [
    { nombre: "Juan", edad: 25, activo: true },
    { nombre: "Ana", edad: 17, activo: false },
    { nombre: "Carlos", edad: 30, activo: true },
    { nombre: "Laura", edad: 16, activo: true },
    { nombre: "Pedro", edad: 40, activo: false }
];

Posi()

function Posi() {
    console.log(personas[1].nombre)
}

// bucles o ciclos

//foreach
//la palabra array es para cambiarlo por el arreglo con el que deseamos trabajar
// element ser[ian las posiciones 0, 1, 2..
personas.forEach(element => {
    console.log(element)
});

clientes.forEach(element => {
    if (element.activo === true) {
    console.log(element.nombre, element.activo)
    }
});
//1 === "1" 3 iguales compara el valor, no el tipo
//1 == 1
//1 = 1

//cantidad de elementos que tiene un arreglo
console.log(personas.length)

let buscarnombre = personas.find(x => x.nombre === "Ana")
console.log(buscarnombre)

let buscaractivo = personas.find(x => x.activo === true)
console.log(buscaractivo)
//find filtra por una propiedad

function Filtrar() {
    let valor = document.getElementById(`sensitivo`).value;
    console.log(valor)
}

function buscarDesdeInput() {
    let input1 = document.getElementById('buscarNombre').value.trim();  //Metio el valor pepe
    let resultado = document.getElementById('resultadoBusqueda');
  
    //Busca en el arreglo 
    let busqueda = personas.find(x=> x.nombre.toUpperCase() === input1.toUpperCase()) //nombre == pepe
  
  
    //Aqui le indicamos si el resultado es verdadero o falso 
    if (busqueda) {
      
      resultado.innerHTML = `encontrado a la persona ${busqueda.nombre}`
  
    } else {
      resultado.innerHTML = `No encontrado a la persona`
    }
  }

  //Crear la funcion del onclick //check 
// Input id value //no tiene 
//  mostrar el resultado inner 

function primeraPersonaActiva() {
    let resultado = document.getElementById('resultadoActivo');//inner 

    let busqueda = personas.find(x=> x.activo == true)

    
  //Aqui le indicamos si el resultado es verdadero o falso 
  if (busqueda) {
    
    resultado.innerHTML = `primera persona encontrada  ${busqueda.nombre}`

  } else {
    resultado.innerHTML = `No se encontro nadie activo `
  }

}

function personasActivas() {
    let resultado = document.getElementById('listaActivos');

    personas.forEach(element => {
        
        if (element.activo == true) {
            
          resultado.innerHTML += `
          
            <li>nombre : ${element.nombre} </li>`
          
            
        }

    });
}

