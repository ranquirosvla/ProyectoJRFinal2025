console.log(`Funcionando Archivo: Puntos Extra`);

const ApiSW = "https://www.swapi.tech/api/people";

let DatosFiltrados = []


let contenedor = document.getElementById('tbody');


//aela Visualizar al ejecutar la pagina DOM
document.addEventListener('DOMContentLoaded', () => {
    consultarDatos() //Cuando trabajamos con APIS se llama a la funcion de consultar 
    
});

// Consultar Datos del API mediante Fetch(AJAX) AXIOS
function consultarDatos() {

//fetchget
    fetch(ApiSW) //1- se le indica la url de la api 
        
        .then(response => response.json()) // 2 -Conversion de datos , JSON 
        .then(result => {           //3- Resultado  result
            // custom error
           console.log(result.results);
           DatosFiltrados = result.results;
           Mostrar_CampoTabla();
        })
        .catch(error => {      ///4- Catch
            // common error
           alert("Error ",error)
           return null;
      });
    
}

// Dibujar la tabla
function Mostrar_CampoTabla() {
    
     let html = ""
    
     DatosFiltrados.forEach(element => {
        
        console.log(element)

        html += `
        
          <tr>
          
            <td> ${element.uid} </td>
            <td> ${element.name} </td>
            <td> ${element.url} </td>
            
         </tr>
        
        
        `

     });

     contenedor.innerHTML = html

}

