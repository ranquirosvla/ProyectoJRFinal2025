console.log('Archivo: Nav');

import {Datos_LiNav} from '../Datos/ConsultaDatos.js'
//aela
document.addEventListener('DOMContentLoaded', (e) => {
    
    Mostrar_Navbar()
 
    Mostrar_LiNav()
});

function Mostrar_Navbar() {

let Contenedo_IdNav = document.getElementById('IdNav');  //ls //gi

Contenedo_IdNav.innerHTML = 
`
 <a class="navbar-brand" href= ""><img src="Assets/logo.jpg" class="w-25 h-25 rounded" alt=""></a>
        <button class="navbar-toggler d-lg-none" type="button" data-toggle="collapse" data-target="#collapsibleNavId"
            aria-controls="collapsibleNavId" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="collapsibleNavId">
            <ul class="navbar-nav mr-auto mt-2 mt-lg-0" id="IdLiNav">
            

            
            </ul>
          
            <form class="form-inline my-2 my-lg-0">
                <input class="form-control mr-sm-2" type="text" placeholder="Suerte">
                <button class="btn btn-outline-primary my-2 my-sm-0 border border-white text-white" type="submit">Buscar</button>
            </form>
        </div>
`;

   
}



function Mostrar_LiNav() {
    let Contenedor_IdLiNav = document.getElementById('IdLiNav');  //gi

    let html = ""; // Variable para acumular el HTML

    Datos_LiNav.filter(element => element.Activo).forEach(element => {
        html += `
        <li class="nav-item">
            <a class="nav-link" href="${element.Url}">${element.Nombre}</a>
        </li>
        `;
    });
    
   

    Contenedor_IdLiNav.innerHTML = html; // Asignar todo el HTML al final
    

}