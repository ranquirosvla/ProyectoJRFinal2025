
import {nombrePagina} from '../Datos/ConsultaDatos.js'



//aela
document.addEventListener('DOMContentLoaded', (e) => {
    
    Mostrar_Footer()
    
});




function Mostrar_Footer() {
    let Contenedor_IdFooter = document.getElementById('Header'); //gi ls

     Contenedor_IdFooter.innerHTML
     = `

  <div class="container">
                <div class="row">
                    <!-- Inicio: Contenedor 1  -->
                    <div class="col-md-6 col-sm-6 ">
                        <img src="Assets/staff.jpg" class="w-100 mt-2 mb-2" alt="">
                    </div>
                    <!-- Fin: Contenedor 1 -->

                    <!-- Inicio: Contenedor 2  -->
                    <div class="col-md-6 col-sm-6">
                        <!-- b4-jumbotron-default -->
                        <div class="">
                            <h3 class="lead text-center">${nombrePagina} - Arenal Anglers</h3>
                            <p class="lead mt-5">
                                Si el estrés y lo cotidiano está haciéndote la vida dificil la montaña es el lugar perfecto para descansar, clima fresco, rios de agua cristalina, senderos dentro del bosque, o bien, simplemnete deseas descansar en una cabaña rústica y acogedora o en un hotel.
                            </p>


                            <a class="btn btn-secondary btn-lg mt-2 d-flex justify-content-center" href="Jumbo action link" role="button">Ver más ></a>


                        </div>
                    </div>
                    <!-- Fin: Contenedor  2-->
                </div>
            </div>

`;
    
}