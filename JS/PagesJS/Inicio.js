console.log(`Funcionando Archivo: Inicio`);



document.addEventListener('DOMContentLoaded', (e) => {
    
    Mostrar_Testimonios()
    Mostrar_Articulos()
    
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

function Mostrar_Articulos() {
    let Contenedor_IdFooter = document.getElementById('Articulos'); //gi ls

     Contenedor_IdFooter.innerHTML
     = `

                <div class="container">

                    <div class="row">

                        <!-- Inicio: Contenedor 1  -->
                        <div class="col-md-6 col-sm-6">
                           <img src="Assets/pesca.jpg" class="w-75" alt="">
                        </div>
                        <!-- Fin: Contenedor 1 -->

                        <!-- Inicio: Contenedor 2  -->
                        <div class="col-md-6 col-sm-6">
                            <h2>Porqué debo viajar</h2>
                            <p>
                                Viajar y disfrutar de la naturaleza es unas de las pocas cosas intanglibles que deja huella en tu mente y esas imagenes se transfroman en recuerdos y esos recuerdos luego son anécdotas inolvidables.
                            </p>
                            <a class="btn btn-primary btn-lg" href="#">Read More</a>
                        </div>
                        <!-- Fin: Contenedor  2-->
                    </div>

                </div>

`;
    
}