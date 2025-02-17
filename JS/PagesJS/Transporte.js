console.log('Funcionando Archivo: API_VerUsuario');

//const Api_Usuarios = "https://randomuser.me/api/"

document.addEventListener('DOMContentLoaded', (e) => {
    
    Mostrar_Testimonios();
    Mostrar_Transporte();
    
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

function Mostrar_Transporte() {
    let Contenedor_IdFooter = document.getElementById('Transporte'); //gi ls

   
    Contenedor_IdFooter.innerHTML
    = `

               <div class="container">

                   <div class="row">

                       <!-- Inicio: Contenedor 1  -->
                       <div class="col-md-6 col-sm-6">
                          <img src="Assets/van1.jpg" class="w-75" alt="">
                       </div>
                       <!-- Fin: Contenedor 1 -->

                       <!-- Inicio: Contenedor 2  -->
                       <div class="col-md-6 col-sm-6">
                           <h2>Transporte</h2>
                           <p>
                               Tenemos los mejores vans para grupos medianos o familias grandes, nuestras microbuses pequeñas son muy cómodas y económicas. Nuestras unidades mas grandes son muy versátiles para tus viajes con amigos o compañeros, llega donde quieras con nuestras vans de diferente tamaño y características con un servicio de calidad.
                           </p>
                           <a class="btn btn-primary btn-lg" href="#">Read More</a>
                       </div>
                       <!-- Fin: Contenedor  2-->
                   </div>

               </div>

`;
   
}
