console.log('Funcionando Archivo: Pesca');

const Api_Usuarios = "https://jsonplaceholder.typicode.com/users";

const Api2 = "https://rickandmortyapi.com/api/character";

const Api3 = "https://jsonplaceholder.typicode.com/comments";

// Datos locales simulando la API



// let DatosFiltrados = []
// let DatosFiltrados2 = []
// let DatosFiltrados3 = []

// let contenedor = document.getElementById('tbody');
// let contenedor2 = document.getElementById('tbody2'); //Crean contenido 
// let contenedor3 = document.getElementById('tbody3');

//aela Visualizar al ejecutar la pagina DOM
document.addEventListener('DOMContentLoaded', () => {
    // consultarDatos() //Cuando trabajamos con APIS se llama a la funcion de consultar 
    // consultarDatos2()
    // consultarDatos3()
    Mostrar_Testimonios();
    Mostrar_Pesca();
    
});


function Mostrar_Testimonios() {
    let Contenedor_IdFooter = document.getElementById('Testimonios'); //gi ls

     Contenedor_IdFooter.innerHTML
     = `

   <div class="container">
        <p class="h2 mb-2">
        Lo mejor de ir a pescar es que no necesitas saber hacerlo, no necesitas mucho dinero, no necesitas nada más que una caña y unas horas a solas contigo y tus pensamientos. </p>
        <p class="h4 lead">- Autor: Randall Quirós</p>
    </div>
                


`;
    
}

function Mostrar_Pesca() {
    let Contenedor_IdFooter = document.getElementById('Pesca'); //gi ls

   
    Contenedor_IdFooter.innerHTML
    = `

               <div class="container">

                   <div class="row">

                       <!-- Inicio: Contenedor 1  -->
                       <div class="col-md-6 col-sm-6">
                          <img src="Assets/mision.jpg" class="w-75" alt="">
                       </div>
                       <!-- Fin: Contenedor 1 -->

                       <!-- Inicio: Contenedor 2  -->
                       <div class="col-md-6 col-sm-6">
                           <h2>Pescar</h2>
                           <p>
                               La pesca es una actividad relajante que permite salir de la rutina, es una actividad que se puede practicar en familia y también con amigos, además te permite disfrutar del contacto con la naturaleza.</p>
                           <p> LA PESCA MEJORA LOS NIVELES DE OXÍGENO:
Naturalmente, el hecho de ir a pescar te expone a un aire con mayor concentración de oxígeno ya sea en mar abierto o en montaña. Durante la semana estamos expuestos a niveles de contaminación alto y a baja concentración de oxígeno en el aire que respiramos.
                        </p>
                           <a class="btn btn-primary btn-lg" href="#">Read More</a>
                       </div>
                       <!-- Fin: Contenedor  2-->
                   </div>

               </div>

`;
   
}


// Consultar Datos del API mediante Fetch(AJAX) AXIOS
// function consultarDatos() {

//     //fetchget
//     fetch(Api_Usuarios) //1- se le indica la url de la api 
        
//         .then(response => response.json()) // 2 -Conversion de datos , JSON 
//         .then(result => {           //3- Resultado  result
//             // custom error
//             console.log(result)
//             DatosFiltrados = result
//             Mostrar_CampoTabla()
//         })
//         .catch(error => {      ///4- Catch
//             // common error
//             alert("Error ",error)
//             return null;
//         });
    
// }

// function consultarDatos2() {

//     //fetchget
//     fetch(Api2) //1- se le indica la url de la api 
        
//         .then(response => response.json()) // 2 -Conversion de datos , JSON 
//         .then(result => {           //3- Resultado  result
//             // custom error
//             console.log(result.results)
//             DatosFiltrados2 = result.results
//             Mostrar_CampoTabla2()
//         })
//         .catch(error => {      ///4- Catch
//             // common error
//             alert("Error ",error)
//             return null;
//         });
    
// }

// function consultarDatos3() {

//     //fetchget
//     fetch(Api3) //1- se le indica la url de la api 
        
//         .then(response => response.json()) // 2 -Conversion de datos , JSON 
//         .then(result => {           //3- Resultado  result
//             // custom error
//             console.log(result)
//             DatosFiltrados3 = result
//             Mostrar_CampoTabla3()
//         })
//         .catch(error => {      ///4- Catch
//             // common error
//             alert("Error ",error)
//             return null;
//         });
    
// }

// function Mostrar_CampoTabla() {
    
//     let html = ""
    
//     DatosFiltrados.forEach(element => {
        
//         console.log(element)

//         html += `
        
//          <tr>
//             <td> ${element.id} </td>
//             <td> ${element.name} </td>
//             <td> ${element.email} </td>
        
//         </tr>
        
        
//         `

//     });

//     contenedor.innerHTML = html

// }



// function Mostrar_CampoTabla2() {
    
//     let html = ""
    
//     DatosFiltrados2.forEach(element => {
        
//         console.log(element)

//         html += `
        
//          <tr>
//             <td> ${element.id} </td>
//             <td> ${element.name} </td>
//             <td> ${element.status} </td>
//             <td> ${element.species} </td>
//             <td> <img src="${element.image}" alt="">  </td>
        
//         </tr>
        
        
//         `

//     });

//     contenedor2.innerHTML = html

// }

// function Mostrar_CampoTabla3() {
    
//     let html = ""
    
//     DatosFiltrados3.forEach(element => {
        
//         console.log(element)

//         html += `
        
//          <tr>
//             <td> ${element.id} </td>
//             <td> ${element.name} </td>
//             <td> ${element.email} </td>
//             <td> ${element.body} </td>
          
//         </tr>
        
        
//         `

//     });

//     contenedor3.innerHTML = html

// }